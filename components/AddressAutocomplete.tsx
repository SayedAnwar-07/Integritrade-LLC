"use client";

import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { searchAddresses, MIN_QUERY_LENGTH } from "@/lib/addressSearch";

export type AddressResult = { line1: string; line2: string; raw: any };

type Suggestion = AddressResult & { id: string };

type Props = {
  onSelect?: (address: AddressResult) => void;
  onSubmit?: (address: AddressResult | null) => void;
  placeholder?: string;
  buttonLabel?: string;
  className?: string;
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

export default function AddressAutocomplete({
  onSelect,
  onSubmit,
  placeholder = "Start typing your address…",
  buttonLabel = "Check availability",
  className = "",
}: Props) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [selected, setSelected] = useState<AddressResult | null>(null);

  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  // Tracks whether the latest input change came from a user keystroke (which
  // should trigger a fetch) vs. a programmatic fill on selection (which shouldn't).
  const skipNextFetch = useRef(false);

  const listboxId = useId();
  const optionId = (i: number) => `${listboxId}-option-${i}`;

  const showDropdown = focused && open && suggestions.length > 0;

  // Debounced fetch whenever the query changes from user input.
  useEffect(() => {
    if (skipNextFetch.current) {
      skipNextFetch.current = false;
      return;
    }

    const q = query.trim();
    if (q.length < MIN_QUERY_LENGTH) {
      abortRef.current?.abort();
      setSuggestions([]);
      setLoading(false);
      setOpen(false);
      setActiveIndex(-1);
      return;
    }

    const timer = setTimeout(() => {
      // Cancel any in-flight request before starting a new one.
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
  }, [query]);

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

  function selectSuggestion(s: Suggestion) {
    const address: AddressResult = { line1: s.line1, line2: s.line2, raw: s.raw };
    skipNextFetch.current = true;
    setQuery([s.line1, s.line2].filter(Boolean).join(", "));
    setSelected(address);
    setSuggestions([]);
    setOpen(false);
    setActiveIndex(-1);
    onSelect?.(address);
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
      if (showDropdown && activeIndex >= 0 && activeIndex < suggestions.length) {
        e.preventDefault();
        selectSuggestion(suggestions[activeIndex]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  function handleSubmit() {
    onSubmit?.(selected);
  }

  // Keep the highlighted option scrolled into view.
  const listRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (activeIndex < 0 || !listRef.current) return;
    const node = listRef.current.children[activeIndex] as
      | HTMLElement
      | undefined;
    node?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const activeDescendant = useMemo(
    () => (showDropdown && activeIndex >= 0 ? optionId(activeIndex) : undefined),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [showDropdown, activeIndex]
  );

  return (
    <div className={`flex flex-col sm:flex-row gap-3 w-full ${className}`}>
      <div ref={rootRef} className="relative flex-1">
        <label
          htmlFor={`${listboxId}-input`}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Street address and apartment
        </label>

        <div className="relative">
          <input
            id={`${listboxId}-input`}
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded={showDropdown}
            aria-controls={listboxId}
            aria-autocomplete="list"
            aria-activedescendant={activeDescendant}
            autoComplete="off"
            value={query}
            placeholder={placeholder}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelected(null); // input changed → previous selection is stale
            }}
            onFocus={() => {
              setFocused(true);
              if (suggestions.length > 0) setOpen(true);
            }}
            onBlur={() => setFocused(false)}
            onKeyDown={handleKeyDown}
            className="w-full bg-gray-50 dark:bg-dark-secondary text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 border-2 border-transparent focus:border-[#1B3A5C] focus:bg-white dark:focus:border-[#3DBB6C] rounded-md px-4 py-3 text-base outline-none transition"
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
                    {highlightMatch(s.line1, query)}
                  </span>
                  {s.line2 && (
                    <span className="block text-gray-500 dark:text-gray-400">
                      {highlightMatch(s.line2, query)}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex items-end">
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full sm:w-auto bg-[#1B3A5C] hover:bg-[#152e4a] dark:bg-[#3DBB6C] dark:hover:bg-[#34a85f] text-white px-6 py-3 rounded-md font-semibold whitespace-nowrap transition"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
