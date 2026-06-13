"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, MapPinOff, Info } from "lucide-react";
import AddressAutocomplete, {
  type AddressResult,
} from "@/components/AddressAutocomplete";
import { SERVICE_REGIONS } from "@/components/service-area/ServicingAreaMenu";

/**
 * Reusable "check your address" widget: search + select + "Check availability"
 * button, with an availability verdict. Used on the contact page above the
 * booking form.
 *
 * Availability matches the selected address's city against SERVICE_REGIONS —
 * the same list the footer menu renders, so coverage stays in one place. This
 * runs client-side for now; the planned follow-up promotes it to a
 * /api/check-service-area route that checks against ZIP-level pickup zones.
 */

// Built once from the footer's region list: city (lowercased) -> region name.
const CITY_TO_REGION: Map<string, string> = (() => {
  const map = new Map<string, string>();
  for (const region of SERVICE_REGIONS) {
    for (const city of region.cities) {
      map.set(city.toLowerCase(), region.name);
    }
  }
  return map;
})();

function findRegionForCity(city?: string | null): string | null {
  if (!city) return null;
  return CITY_TO_REGION.get(city.trim().toLowerCase()) ?? null;
}

type Status = "idle" | "available" | "unavailable" | "noselection";

type Props = {
  /** Optional heading shown above the search box. */
  heading?: string;
  /** Optional sub-text shown under the heading. */
  subtext?: string;
  className?: string;
};

// Every service region is in California. Gate on state first so same-named
// places elsewhere (e.g. Oakland, Michigan) can't match.
const SERVED_STATES = new Set(["california", "ca"]);

/**
 * Resolve the served region for an address. Smarty returns the city in `city`
 * and a USPS 2-letter `state` code (e.g. "CA") at the top level of each
 * suggestion, so we gate on state, then match the city against our service
 * regions. Returns the region name, or null if we don't serve it.
 */
function resolveRegion(addr: AddressResult): string | null {
  const p = (addr.raw as { city?: string; state?: string }) ?? {};

  if (!p.state || !SERVED_STATES.has(p.state.trim().toLowerCase())) return null;

  return findRegionForCity(p.city);
}

export default function AddressAvailabilityCheck({
  heading,
  subtext,
  className = "",
}: Props) {
  const [result, setResult] = useState<AddressResult | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(addr: AddressResult | null) {
    if (!addr) {
      setStatus("noselection");
      return;
    }
    setResult(addr);
    const matched = resolveRegion(addr);
    setRegion(matched);
    setStatus(matched ? "available" : "unavailable");
  }

  return (
    <div className={className}>
      {heading && (
        <h3 className="text-base font-semibold text-[#1B3A5C] dark:text-white">
          {heading}
        </h3>
      )}
      {subtext && (
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{subtext}</p>
      )}

      <div className={heading || subtext ? "mt-4" : ""}>
        <AddressAutocomplete
          placeholder="Enter your street address…"
          onSelect={(addr) => {
            // New pick — stash it and clear any previous verdict.
            setResult(addr);
            setStatus("idle");
          }}
          onSubmit={handleSubmit}
        />
      </div>

      {/* Availability verdict */}
      {status === "available" && result && (
        <div className="mt-4 flex items-start gap-3 rounded-md border border-[#3DBB6C]/30 dark:border-[#3DBB6C]/40 bg-[#3DBB6C]/10 dark:bg-[#3DBB6C]/15 px-4 py-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#3DBB6C]" />
          <p className="text-sm text-gray-800 dark:text-gray-200">
            <span className="font-semibold text-[#1B3A5C] dark:text-white">
              Service available in your area.
            </span>{" "}
            {result.line1}, {result.line2} falls within our{" "}
            <span className="font-medium">{region}</span> pickup coverage.
            Please complete the form below to request a collection.
          </p>
        </div>
      )}

      {status === "unavailable" && result && (
        <div className="mt-4 flex items-start gap-3 rounded-md border border-amber-300 dark:border-amber-500/30 bg-amber-50 dark:bg-amber-500/10 px-4 py-3">
          <MapPinOff className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
          <p className="text-sm text-gray-800 dark:text-gray-200">
            <span className="font-semibold text-[#1B3A5C] dark:text-white">
              Service not currently available at this address.
            </span>{" "}
            {result.line2} falls outside our current pickup zones across the Bay
            Area and Central Valley. For high-volume or special requirements,
            please{" "}
            <Link
              href="/service-book/"
              className="font-semibold text-[#1B3A5C] dark:text-[#3DBB6C] underline-offset-2 hover:underline"
            >
              contact our team
            </Link>{" "}
            to discuss available options.
          </p>
        </div>
      )}

      {status === "noselection" && (
        <div className="mt-4 flex items-start gap-3 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/5 px-4 py-3">
          <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Please select an address from the suggestions, then choose “Check
            availability.”
          </p>
        </div>
      )}
    </div>
  );
}
