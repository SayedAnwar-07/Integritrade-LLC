// Client-side US address autocomplete via Smarty US Autocomplete Pro
// (https://www.smarty.com/). Smarty returns rooftop-level, USPS-style addresses
// with secondary (apartment/suite) designators and ZIP — the precise suggestions
// a typed address box needs.
//
// This calls Smarty directly from the browser using an "embedded/website key",
// which is restricted by hostname in the Smarty dashboard. No server route is
// required, so the site stays a fully static export.
//
// SETUP: put your embedded key in .env.local as
//   NEXT_PUBLIC_SMARTY_KEY=your-embedded-key
// and add your domain(s) — plus `localhost` for local dev — to the key's
// allowed hostnames in the Smarty dashboard. (NEXT_PUBLIC_* vars are inlined
// into the client bundle at build time, which is expected for an embedded key.)
//
// Swapping providers later (Google Places, Geoapify, etc.) is mostly contained
// to this file — keep the AddressSuggestion shape and consumers won't change.

export type AddressSuggestion = {
  id: string;
  line1: string; // display: "112 Elm Ave Apt 1"
  line2: string; // display: "North Wales PA 19454"
  // Structured parts, for auto-filling individual form fields:
  street_line: string;
  secondary: string;
  city: string;
  state: string; // USPS 2-letter code, e.g. "CA"
  zipcode: string;
  raw: unknown;
};

// One Smarty US Autocomplete Pro suggestion. `entries` > 1 means the address is
// a multi-unit building with that many secondaries available behind a drill-down
// (not expanded here — see note in searchAddresses).
type SmartySuggestion = {
  street_line?: string;
  secondary?: string;
  city?: string;
  state?: string; // already a USPS 2-letter code, e.g. "CA"
  zipcode?: string;
  entries?: number;
};

const SMARTY_ENDPOINT = "https://us-autocomplete-pro.api.smarty.com/lookup";
const SMARTY_KEY = process.env.NEXT_PUBLIC_SMARTY_KEY;
// Optional: only needed if your account must route billing to a specific
// license. Leave unset to use the account default.
const SMARTY_LICENSE = process.env.NEXT_PUBLIC_SMARTY_LICENSE;

let warnedMissingKey = false;

function buildLine1(s: SmartySuggestion): string {
  // "<street_line> <secondary>" — e.g. "112 Elm Ave Apt 1".
  return [s.street_line, s.secondary].filter(Boolean).join(" ").trim();
}

function buildLine2(s: SmartySuggestion): string {
  // "<city> <state> <zip>" — e.g. "North Wales PA 19454".
  return [s.city, s.state, s.zipcode].filter(Boolean).join(" ").trim();
}

export const MIN_QUERY_LENGTH = 3;

/**
 * Search US addresses. Returns up to 5 suggestions, or [] for queries shorter
 * than MIN_QUERY_LENGTH (or if no Smarty key is configured). Pass an AbortSignal
 * to cancel in-flight requests.
 *
 * Multi-unit buildings come back as a single suggestion with `entries` > 1;
 * expanding those into individual apartments requires a follow-up "selected"
 * lookup, which this widget does not currently perform.
 */
export async function searchAddresses(
  query: string,
  signal?: AbortSignal
): Promise<AddressSuggestion[]> {
  const q = query.trim();
  if (q.length < MIN_QUERY_LENGTH) return [];

  if (!SMARTY_KEY) {
    // Fail soft: no key means no suggestions, rather than a thrown error that
    // would surface in the UI. Warn once so it's obvious during setup.
    if (!warnedMissingKey) {
      // eslint-disable-next-line no-console
      console.warn(
        "[addressSearch] NEXT_PUBLIC_SMARTY_KEY is not set — address suggestions are disabled. Add it to .env.local."
      );
      warnedMissingKey = true;
    }
    return [];
  }

  const params = new URLSearchParams({
    key: SMARTY_KEY,
    search: q,
    max_results: "5",
  });
  if (SMARTY_LICENSE) params.set("license", SMARTY_LICENSE);

  const res = await fetch(`${SMARTY_ENDPOINT}?${params.toString()}`, { signal });
  if (!res.ok) throw new Error(`Address lookup failed (${res.status})`);

  const data = (await res.json()) as { suggestions?: SmartySuggestion[] };
  const suggestions = Array.isArray(data.suggestions) ? data.suggestions : [];

  return suggestions
    .map((s, i) => {
      const line1 = buildLine1(s);
      const line2 = buildLine2(s);
      return {
        id:
          [s.street_line, s.secondary, s.city, s.state, s.zipcode]
            .filter((v) => v !== undefined && v !== "")
            .join("|") || `smarty-${i}`,
        line1,
        line2,
        // Structured parts so the booking form can auto-fill each field.
        street_line: s.street_line ?? "",
        secondary: s.secondary ?? "",
        city: s.city ?? "",
        state: s.state ?? "",
        zipcode: s.zipcode ?? "",
        raw: s,
      };
    })
    .filter((s) => s.line1)
    .slice(0, 5);
}
