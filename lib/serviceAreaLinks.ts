import { serviceAreas } from "@/data/serviceAreas";
import { SERVICE_REGIONS } from "@/data/serviceRegions";
import type { ServiceArea } from "@/data/areas/types/serviceAreaTypes";

/**
 * Internal links between city pages (2026-09-30).
 *
 * Search Console showed the city pages ranking on pages 6 to 9 and the newer
 * ones not crawled at all: each was linked only from its own city's pages,
 * and the homepage and main service pages linked to none of them. These
 * helpers let a city link to its neighbours and let the main service pages
 * and the footer link to the major cities.
 */

/**
 * The seven kinds of city service page. Slugs differ per city (Fresno uses
 * hard-drive-shredding, Palo Alto it-asset-disposition-palo-alto), so links
 * between cities match on the kind, never on the slug.
 */
export type ServiceKind = "shredding" | "itad" | "recycling" | "buyback" | "cod" | "decom" | "apple";

export function serviceKind(slug: string): ServiceKind | null {
  if (slug === "data-destruction-services" || slug === "hard-drive-shredding") return "shredding";
  if (slug.startsWith("it-asset-disposition")) return "itad";
  if (slug === "basic-electronics-recycling") return "recycling";
  if (slug.startsWith("asset-recovery")) return "buyback";
  if (slug === "certificates-of-destruction") return "cod";
  if (slug === "data-center-decommissioning") return "decom";
  if (slug === "sell-used-apple-equipment") return "apple";
  return null;
}

/** How each kind reads in headings and link text. */
export const SERVICE_KIND_LABEL: Record<ServiceKind, string> = {
  shredding: "Hard drive shredding",
  itad: "IT asset disposition",
  recycling: "Electronics recycling",
  buyback: "IT equipment buyback",
  cod: "Certificates of destruction",
  decom: "Data center decommissioning",
  apple: "Apple equipment buyback",
};

/** The main /services/ page each kind corresponds to, where one exists. */
export const KIND_FOR_SERVICE_PAGE: Record<string, ServiceKind> = {
  "it-asset-disposition": "itad",
  "data-destruction-services": "shredding",
  "secure-electronics-recycling": "recycling",
};

const byName = new Map(serviceAreas.map((a) => [a.name.toLowerCase(), a]));
const bySlug = new Map(serviceAreas.map((a) => [a.slug, a]));

/** Cities near this one: the rest of its region, then any neighbouring regions. */
export function nearbyAreas(areaSlug: string, max = 8): ServiceArea[] {
  const area = bySlug.get(areaSlug);
  if (!area) return [];
  const region = SERVICE_REGIONS.find((r) => r.cities.some((c) => c.toLowerCase() === area.name.toLowerCase()));
  if (!region) return [];
  const names = [
    ...region.cities,
    ...(region.nearby ?? []).flatMap((n) => SERVICE_REGIONS.find((r) => r.name === n)?.cities ?? []),
  ];
  const out: ServiceArea[] = [];
  for (const name of names) {
    const a = byName.get(name.toLowerCase());
    if (a && a.slug !== areaSlug && !out.includes(a)) out.push(a);
    if (out.length >= max) break;
  }
  return out;
}

/** A city's page for a given kind of service, if it has one. */
export function serviceOfKind(area: ServiceArea, kind: ServiceKind) {
  return area.services.find((s) => serviceKind(s.slug) === kind);
}

/** Major cities linked from the main service pages. */
export const PRIORITY_CITY_SLUGS = [
  "san-francisco",
  "san-jose",
  "oakland",
  "sacramento",
  "fresno",
  "bakersfield",
  "los-angeles",
  "irvine",
  "san-diego",
  "riverside",
];

/** A shorter set for the footer, which appears on every page. */
export const FOOTER_CITY_SLUGS = [
  "san-francisco",
  "san-jose",
  "sacramento",
  "fresno",
  "los-angeles",
  "irvine",
  "san-diego",
];

export const areasBySlug = (slugs: string[]) =>
  slugs.map((s) => bySlug.get(s)).filter((a): a is ServiceArea => !!a);

/**
 * All the browser-side city menus need: name, slug and service count.
 *
 * Pass this down as a prop from a server component. Importing
 * data/serviceAreas into a "use client" component ships every city article
 * to the browser: the footer menu did that, and every page on the site loaded
 * a 4.5 MB script (2026-09-30). Client components may `import type` from
 * this file, never a value.
 */
export type CityIndexEntry = { name: string; slug: string; serviceCount: number };

export const cityIndex = (): CityIndexEntry[] =>
  serviceAreas.map((a) => ({ name: a.name, slug: a.slug, serviceCount: a.services.length }));
