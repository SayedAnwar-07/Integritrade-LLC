"use client";

import { useState } from "react";
import Link from "next/link";
import { serviceAreas } from "@/data/serviceAreas";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import ScrollLoader from "../shared/ScrollLoader";

const SERVICE_REGIONS = [
  {
    name: "San Francisco",
    blurb:
      "Dense urban tower retirements, SOC-2 audited tenant fit-outs, and end-of-lease IT cleanouts.",
    cities: ["San Francisco"],
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
];

function buildCityLookup() {
  const map = new Map<string, { slug: string; serviceCount: number }>();
  for (const area of serviceAreas) {
    map.set(area.name.toLowerCase(), {
      slug: area.slug,
      serviceCount: area.services.length,
    });
  }
  return map;
}

export default function ServicingArea() {
  const cityLookup = buildCityLookup();
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-secondary py-20 dark:bg-dark md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Section header ── */}
        <ScrollLoader>
            <SectionHeader
              eyebrow="Cities & Regions"
              title="Find your local team"
              description="Select a region to view its full coverage. Cities marked with a link include local pickup details and recent retirement projects."
              linkText=""
              linkHref=""
            />
        </ScrollLoader>

        {/* ── Editorial accordion ── */}
        <div className="mt-16 border-t border-gray-300 dark:border-gray-700">
          {SERVICE_REGIONS.map((region, ri) => {
            const isOpen = openIndex === ri;
            const linkedCount = region.cities.filter((c) =>
              cityLookup.has(c.toLowerCase())
            ).length;

            return (
              <ScrollLoader key={region.name} delay={ri * 0.08}>
                <div
                  key={region.name}
                  className="border-b border-gray-300 dark:border-gray-700"
                >
                  {/* Row trigger */}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : ri)}
                    className="group grid w-full grid-cols-12 items-center gap-4 py-7 text-left transition sm:py-9"
                  >
                    {/* Number */}
                    <div className="col-span-2 sm:col-span-1">
                      <span className="font-serif text-sm tabular-nums text-gray-400 dark:text-gray-600">
                        {String(ri + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="col-span-10 sm:col-span-5 lg:col-span-4">
                      <h3
                        className={`font-serif text-2xl leading-tight tracking-tight transition-colors sm:text-3xl lg:text-4xl ${
                          isOpen
                            ? "text-emerald-700 dark:text-emerald-400"
                            : "text-gray-900 group-hover:text-emerald-700 dark:text-gray-50 dark:group-hover:text-emerald-400"
                        }`}
                      >
                        {region.name}
                      </h3>
                    </div>

                    {/* Blurb (hides on mobile) */}
                    <div className="hidden sm:col-span-5 sm:block lg:col-span-6">
                      <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                        {region.blurb}
                      </p>
                    </div>

                    {/* Toggle icon */}
                    <div className="col-span-12 flex items-center justify-end sm:col-span-1">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition ${
                          isOpen
                            ? "border-emerald-600 bg-emerald-600 text-white"
                            : "border-gray-300 text-gray-500 group-hover:border-emerald-600 group-hover:text-emerald-600 dark:border-gray-600 dark:text-gray-400 dark:group-hover:border-emerald-500 dark:group-hover:text-emerald-400"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </div>
                  </button>

                  {/* Expanded panel */}
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-1 gap-8 pb-10 lg:grid-cols-12 lg:gap-16">
                        {/* Meta */}
                        <div className="lg:col-span-4 lg:col-start-2">
                          <div className="text-xs uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500">
                            Coverage
                          </div>
                          <div className="mt-3 flex items-baseline gap-3">
                            <span className="font-serif text-5xl text-gray-900 dark:text-gray-50">
                              {region.cities.length}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {region.cities.length === 1 ? "City" : "Cities"}
                              {linkedCount > 0 && (
                                <>
                                  <br />
                                  <span className="text-xs font-semibold">
                                    {linkedCount} with detail page
                                    {linkedCount === 1 ? "" : "s"}
                                  </span>
                                </>
                              )}
                            </span>
                          </div>

                          <p className="mt-6 text-sm leading-7 text-gray-600 dark:text-gray-300 sm:hidden">
                            {region.blurb}
                          </p>
                        </div>

                        {/* City grid */}
                        <div className="lg:col-span-7">
                          <div className="text-xs uppercase tracking-[0.18em] text-gray-400 dark:text-gray-500">
                            Cities served
                          </div>
                          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3">
                            {region.cities.map((city) => {
                              const match = cityLookup.get(city.toLowerCase());

                              if (match) {
                                return (
                                  <li
                                    key={city}
                                    className="border-b border-gray-200 py-2.5 dark:border-gray-800"
                                  >
                                    <Link
                                      href={`/service-area/${match.slug}`}
                                      className="group/city flex items-center justify-between gap-2 text-sm font-medium text-primary transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
                                    >
                                      <span>{city}</span>
                                      <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 transition group-hover/city:translate-x-0" />
                                    </Link>
                                  </li>
                                );
                              }

                              return (
                                <li
                                  key={city}
                                  className="border-b border-gray-200 py-2.5 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-500"
                                >
                                  {city}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollLoader>
            );
          })}
        </div>
      </div>
    </section>
  );
}