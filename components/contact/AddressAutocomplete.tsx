"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import {
  searchAddresses,
  MIN_QUERY_LENGTH,
  type AddressSuggestion,
} from "@/lib/addressSearch";

type Props = {
  /** The input's value (controlled by the parent form field). */
  value: string;
  /** Called on every keystroke so the parent can store manual input. */
  onChange: (value: string) => void;
  /** Called when the user picks a suggestion, with the full structured address. */
  onSelect: (suggestion: AddressSuggestion) => void;
  id?: string;
  placeholder?: string;
  /** Class applied to the <input> (so it can match sibling form fields). */
  inputClassName?: string;
  /** Class applied to the wrapper. */
  className?: string;
  "aria-invalid"?: boolean;
};

const DEBOUNCE_MS = 250;

/**
 * Splits `text` on the (case-insensitive) first occurrence of `query` and wraps
 * the match in <strong>. Returns React nodes so the matched substring is bolded.
 */
function highlightMatch(text: string, query: string) {
  const q = query.trim();
  if (!q) return text;

  const lowerText = text.toLowerCase();
  const lowerQuery = q.toLowerCase();
  const idx = lowerText.indexOf(lowerQuery);
  if (idx === -1) return text;

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + q.length);
  const after = text.slice(idx + q.length);

  return (
    <>
      {before}
      <strong className="font-semibold text-[#1B3A5C] dark:text-[#3DBB6C]">
        {match}
      </strong>
      {after}
    </>
  );
}

/**
 * Controlled address autocomplete input. The parent owns the text value; this
 * component adds a suggestions dropdown and, on selection, hands back the full
 * structured address via onSelect. Typing freely (without selecting) is fully
 * supported — the value just flows through onChange like a normal input.
 */
export default function AddressAutocomplete({
  value,
  onChange,
  onSelect,
  id,
  placeholder = "Start typing your address…",
  inputClassName = "",
  className = "",
  "aria-invalid": ariaInvalid,
}: Props) {
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  // True when the latest value change came from selecting a suggestion (which
  // should NOT trigger a new fetch), false for ordinary keystrokes.
  const skipNextFetch = useRef(false);

  const reactId = useId();
  const listboxId = id ? `${id}-listbox` : reactId;
  const optionId = (i: number) => `${listboxId}-option-${i}`;

  const showDropdown = focused && open && suggestions.length > 0;

  // Debounced fetch whenever the value changes from user input.
  useEffect(() => {
    if (skipNextFetch.current) {
      skipNextFetch.current = false;
      return;
    }

    const q = value.trim();
    if (q.length < MIN_QUERY_LENGTH) {
      abortRef.current?.abort();
      setSuggestions([]);
      setLoading(false);
      setOpen(false);
      setActiveIndex(-1);
      return;
    }

    const timer = setTimeout(() => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      setLoading(true);
      searchAddresses(q, controller.signal)
        .then((next) => {
          setSuggestions(next);
          setOpen(next.length > 0);
          setActiveIndex(-1);
          setLoading(false);
        })
        .catch((err) => {
          if (err?.name === "AbortError") return; // superseded by a newer request
          setSuggestions([]);
          setOpen(false);
          setActiveIndex(-1);
          setLoading(false);
        });
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [value]);

  // Close the dropdown when clicking outside the component.
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  // Abort any in-flight request on unmount.
  useEffect(() => () => abortRef.current?.abort(), []);

  // Keep the highlighted option scrolled into view.
  useEffect(() => {
    if (activeIndex < 0 || !listRef.current) return;
    const node = listRef.current.children[activeIndex] as HTMLElement | undefined;
    node?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  function selectSuggestion(s: AddressSuggestion) {
    skipNextFetch.current = true;
    onSelect(s);
    setSuggestions([]);
    setOpen(false);
    setActiveIndex(-1);
    inputRef.current?.focus();
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!showDropdown) {
        if (suggestions.length > 0) setOpen(true);
        return;
      }
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!showDropdown) return;
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Enter") {
      // Only intercept Enter when picking a highlighted suggestion; otherwise
      // let it through so it doesn't hijack normal form behavior.
      if (showDropdown && activeIndex >= 0 && activeIndex < suggestions.length) {
        e.preventDefault();
        selectSuggestion(suggestions[activeIndex]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  const activeDescendant =
    showDropdown && activeIndex >= 0 ? optionId(activeIndex) : undefined;

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <input
        id={id}
        ref={inputRef}
        type="text"
        role="combobox"
        aria-expanded={showDropdown}
        aria-controls={listboxId}
        aria-autocomplete="list"
        aria-activedescendant={activeDescendant}
        aria-invalid={ariaInvalid}
        autoComplete="off"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => {
          setFocused(true);
          if (suggestions.length > 0) setOpen(true);
        }}
        onBlur={() => setFocused(false)}
        onKeyDown={handleKeyDown}
        className={inputClassName}
      />

      {loading && (
        <span
          role="status"
          aria-label="Searching addresses"
          className="absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#3DBB6C] animate-bounce [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#3DBB6C] animate-bounce [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#3DBB6C] animate-bounce" />
        </span>
      )}

      {showDropdown && (
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-dark-secondary rounded-md shadow-lg border border-gray-200 dark:border-gray-700 divide-y divide-gray-100 dark:divide-gray-700 z-50 max-h-80 overflow-auto"
        >
          {suggestions.map((s, i) => (
            <li
              key={s.id}
              id={optionId(i)}
              role="option"
              aria-selected={i === activeIndex}
              // onMouseDown (not onClick) so it fires before the input's blur.
              onMouseDown={(e) => {
                e.preventDefault();
                selectSuggestion(s);
              }}
              onMouseEnter={() => setActiveIndex(i)}
              className={`px-4 py-3 text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 ${
                i === activeIndex ? "bg-gray-100 dark:bg-white/10" : ""
              }`}
            >
              <span className="block text-gray-900 dark:text-gray-100">
                {highlightMatch(s.line1, value)}
              </span>
              {s.line2 && (
                <span className="block text-gray-500 dark:text-gray-400">
                  {s.line2}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
