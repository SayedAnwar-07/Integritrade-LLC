/**
 * Open Graph images: the picture shown when a page is shared on LinkedIn, X,
 * Facebook, Reddit or in a message. Built by scripts/make-og-images.mjs into
 * public/og/, all 1200x630.
 *
 * Pages without their own image fall back to the logo, which is what every
 * page used before 2026-09-26.
 */

const BASE = "https://integritradellc.com";
const FALLBACK = `${BASE}/logo/integritrade-logo.png`;

// Detail pages that have a photo in public/og/<section>/<slug>.jpg.
const HAS_IMAGE: Record<"services" | "industries", ReadonlySet<string>> = {
  services: new Set([
    "data-destruction-services",
    "secure-electronics-recycling",
    "it-asset-disposition",
    "demanufacturing-prototype-destruction",
    "remote-it-asset-recovery",
  ]),
  // defense-contractors waits for the licensed stock photo Ian asked for.
  industries: new Set([
    "business-corporate",
    "education",
    "legal-professional-services",
    "government-public-sector",
    "healthcare",
    "finance",
    "retail-hospitality",
  ]),
};

/** An Open Graph image entry for a file in public/og/, e.g. "home.jpg". */
export function ogImage(file: string, alt: string) {
  return { url: `${BASE}/og/${file}`, width: 1200, height: 630, alt };
}

/** The image for a service or industry page, or the logo if it has none. */
export function ogImageFor(section: "services" | "industries", slug: string, alt: string) {
  return HAS_IMAGE[section].has(slug)
    ? ogImage(`${section}/${slug}.jpg`, alt)
    : { url: FALLBACK, width: 1200, height: 630, alt };
}
