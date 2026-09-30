/**
 * The 60 service-area cities grouped by region.
 *
 * Shared by the service-area page (ServicingArea), the "nearby" links on city
 * hub and city service pages, and the footer. City names must match `name`
 * in data/areas/<city>Data.ts exactly.
 *
 * `nearby` lists neighbouring regions for regions too small to give a city
 * enough neighbours on their own (San Francisco is a single city).
 */
export type ServiceRegion = {
  name: string;
  blurb: string;
  cities: string[];
  nearby?: string[];
};

export const SERVICE_REGIONS: ServiceRegion[] = [
  {
    name: "San Francisco",
    blurb:
      "Dense urban tower retirements, SOC-2 audited tenant fit-outs, and end-of-lease IT cleanouts.",
    cities: ["San Francisco"],
    nearby: ["The Peninsula", "The East Bay"],
  },
  {
    name: "Silicon Valley & South Bay",
    blurb:
      "Tech campus fleet refreshes, lab equipment retirement, and high-volume server decommissions.",
    cities: [
      "San Jose",
      "Mountain View",
      "Cupertino",
      "Santa Clara",
      "Palo Alto",
      "Sunnyvale",
      "Los Gatos",
      "Milpitas",
      "Campbell",
    ],
  },
  {
    name: "The Peninsula",
    blurb:
      "Biotech and financial-services data destruction with HIPAA and GLBA-aligned reporting.",
    cities: [
      "Menlo Park",
      "Redwood City",
      "San Mateo",
      "San Bruno",
      "South San Francisco",
      "Foster City",
    ],
  },
  {
    name: "The East Bay",
    blurb:
      "Industrial decommissions, university IT retirement, and municipal asset disposition.",
    cities: [
      "Berkeley",
      "Oakland",
      "Fremont",
      "Emeryville",
      "Alameda",
      "Pleasanton",
      "Walnut Creek",
    ],
  },
  {
    name: "North Bay",
    blurb:
      "Distributed pickups across wine country offices, healthcare networks, and county facilities.",
    cities: ["San Rafael", "Santa Rosa", "Petaluma"],
    nearby: ["San Francisco", "The East Bay"],
  },
  {
    name: "Central Valley",
    blurb:
      "Headquarters region. Same-day pickups for agriculture, logistics, education, and government.",
    cities: [
      "Fresno",
      "Clovis",
      "Sacramento",
      "Bakersfield",
      "Stockton",
      "Modesto",
      "Merced",
      "Visalia",
    ],
  },

  // Southern California coverage added based on the latest client request.
  // Cities are grouped by county/region so the service-area UI stays easy to scan.
  {
    name: "Los Angeles County",
    blurb:
      "Secure IT asset recovery, electronics recycling, data destruction, and office technology cleanouts across Los Angeles County.",
    cities: [
      "Los Angeles",
      "Santa Monica",
      "Culver City",
      "El Segundo",
      "Torrance",
      "Pasadena",
      "Glendale",
      "Burbank",
      "Long Beach",
    ],
  },
  {
    name: "Orange County",
    blurb:
      "Business IT recycling, secure equipment disposition, and scheduled asset pickups throughout Orange County.",
    cities: [
      "Irvine",
      "Newport Beach",
      "Costa Mesa",
      "Anaheim",
      "Santa Ana",
      "Huntington Beach",
    ],
  },
  {
    name: "San Diego County",
    blurb:
      "IT asset disposition, secure data destruction, and electronics recycling for organizations across San Diego County.",
    cities: [
      "San Diego",
      "La Jolla",
      "Sorrento Valley",
      "Carlsbad",
      "Oceanside",
      "Chula Vista",
    ],
  },
  {
    name: "Inland Empire",
    blurb:
      "Enterprise IT recycling and asset recovery coverage across San Bernardino and Riverside Counties.",
    cities: [
      "Ontario",
      "Rancho Cucamonga",
      "Riverside",
      "San Bernardino",
      "Corona",
    ],
  },
];
