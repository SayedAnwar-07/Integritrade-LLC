"use client";

import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";
import { serviceAreas } from "@/data/serviceAreas";
import {
  MapPin,
  ChevronDown,
  ChevronRight,
  X,
  Menu,
} from "lucide-react";

const SERVICE_REGIONS = [
  {
    name: "San Francisco",
    cities: ["San Francisco"],
  },
  {
    name: "Silicon Valley & South Bay",
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
    cities: ["San Rafael", "Santa Rosa", "Petaluma"],
  },
  {
    name: "Central Valley",
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

  // Southern California coverage added from the latest client request.
  // Cities remain grouped by county/region to match the main service-area page.
  {
    name: "Los Angeles County",
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
    cities: [
      "Ontario",
      "Rancho Cucamonga",
      "Riverside",
      "San Bernardino",
      "Corona",
    ],
  },
];

const REGION_COLORS = [
  { accent: "#1D9E75", label: "text-emerald-400" },
  { accent: "#378ADD", label: "text-blue-400" },
  { accent: "#9F7AEA", label: "text-violet-400" },
  { accent: "#ED64A6", label: "text-pink-400" },
  { accent: "#38B2AC", label: "text-teal-400" },
  { accent: "#ECC94B", label: "text-amber-400" },
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

/* ──────────────────────── desktop nav item ─────────────────────────── */

interface DesktopItemProps {
  region: (typeof SERVICE_REGIONS)[number];
  col: (typeof REGION_COLORS)[number];
  cityLookup: Map<string, { slug: string; serviceCount: number }>;
}

function DesktopItem({ region, col, cityLookup }: DesktopItemProps) {
  const [open, setOpen] = useState(false);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    setOpen(true);
  }, []);

  const leave = useCallback(() => {
    timer.current = setTimeout(() => {
      setOpen(false);
    }, 100);
  }, []);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  // A city becomes clickable automatically once it exists in serviceAreas.
  // Until then it stays visible under the "Coming soon" section.
  const linked = region.cities.filter((city) =>
    cityLookup.has(city.toLowerCase()),
  );

  const unlinked = region.cities.filter(
    (city) => !cityLookup.has(city.toLowerCase()),
  );

  return (
    <div
      className="relative"
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      {/* Region trigger */}
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => {
          if (timer.current) {
            clearTimeout(timer.current);
          }

          setOpen((prev) => !prev);
        }}
        className={`
          flex cursor-pointer select-none items-center gap-1 py-4
          text-[13px] font-medium tracking-wide
          transition-colors duration-75
          ${
            open
              ? "text-white"
              : "text-gray-400 hover:text-gray-200"
          }
        `}
      >
        {region.name}

        <ChevronDown
          className={`mt-px h-3 w-3 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          style={{ color: col.accent }}
        />
      </button>

      {/* Desktop dropdown opens above the navigation */}
      {open && (
        <div
          className="absolute bottom-full left-1/2 z-50 mb-2 min-w-[215px] -translate-x-1/2"
          style={{
            filter: "drop-shadow(0 -6px 28px rgba(0,0,0,.7))",
          }}
        >
          <div
            className="overflow-visible rounded-md border border-white/[0.08] bg-[#0a0e0f]"
            style={{
              borderTopColor: col.accent,
              borderTopWidth: "2px",
            }}
          >
            {/* Region header */}
            <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2">
              <span
                className="h-4 w-[3px] flex-shrink-0 rounded-full"
                style={{ background: col.accent }}
              />

              <span className="truncate text-[0.8rem] font-bold uppercase tracking-[0.14em] text-gray-300">
                {region.name}
              </span>

              {linked.length > 0 && (
                <span
                  className={`ml-auto shrink-0 text-[10px] font-bold ${col.label}`}
                >
                  {linked.length} cities
                </span>
              )}
            </div>

            {/* Cities that already have service-area detail pages */}
            {linked.map((city) => {
              const match = cityLookup.get(city.toLowerCase())!;

              return (
                <div key={city} className="relative">
                  <Link
                    href={`/service-area/${match.slug}`}
                    className="flex items-center justify-between gap-3 border-b border-white/[0.04] px-3 py-[7px] text-[13px] text-gray-300 transition-colors last:border-0 hover:bg-white/[0.04] hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin
                        className="h-3.5 w-3.5 shrink-0"
                        style={{ color: col.accent }}
                      />

                      {city}
                    </span>

                    <span
                      className={`flex shrink-0 items-center gap-0.5 text-[10px] font-bold ${col.label}`}
                    >
                      {match.serviceCount}

                      <ChevronRight className="h-3 w-3" />
                    </span>
                  </Link>
                </div>
              );
            })}

            {/* Keep requested cities visible while their detail pages are being added */}
            {unlinked.length > 0 && (
              <>
                <div className="px-3 pb-1 pt-2">
                  <span className="text-[9px] uppercase tracking-widest text-gray-400">
                    Coming soon
                  </span>
                </div>

                {unlinked.map((city) => (
                  <div
                    key={city}
                    className="flex cursor-default items-center gap-2 border-b border-white/[0.03] px-3 py-[6px] text-[12px] text-gray-400 last:border-0"
                  >
                    <MapPin className="h-3 w-3 shrink-0 text-gray-700" />

                    {city}
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Dropdown caret */}
          <div className="flex justify-center">
            <div
              className="h-0 w-0"
              style={{
                borderLeft: "7px solid transparent",
                borderRight: "7px solid transparent",
                borderTop: "7px solid #0d1f27",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* ──────────────────────── mobile full-screen drawer ────────────────── */

interface MobileDrawerProps {
  cityLookup: Map<string, { slug: string; serviceCount: number }>;
  onClose: () => void;
}

function MobileDrawer({
  cityLookup,
  onClose,
}: MobileDrawerProps) {
  const [openRegion, setOpenRegion] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-[100] flex w-full flex-col bg-[#080f14]">
      {/* Drawer header */}
      <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-500">
          Service Areas
        </span>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close service areas"
          className="rounded-md p-1.5 text-gray-400 transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {SERVICE_REGIONS.map((region, ri) => {
          const col =
            REGION_COLORS[ri % REGION_COLORS.length];

          const isRegionOpen =
            openRegion === region.name;

          const linked = region.cities.filter((city) =>
            cityLookup.has(city.toLowerCase()),
          );

          const unlinked = region.cities.filter(
            (city) =>
              !cityLookup.has(city.toLowerCase()),
          );

          return (
            <div
              key={region.name}
              className="border-b border-white/[0.06]"
            >
              {/* Region accordion row */}
              <button
                type="button"
                onClick={() =>
                  setOpenRegion((prev) =>
                    prev === region.name
                      ? null
                      : region.name,
                  )
                }
                className="flex w-full items-center justify-between px-4 py-3.5 text-left"
              >
                <span className="flex items-center gap-3">
                  <span
                    className="h-5 w-[3px] shrink-0 rounded-full"
                    style={{
                      background: col.accent,
                    }}
                  />

                  <span className="text-[14px] font-semibold text-gray-200">
                    {region.name}
                  </span>
                </span>

                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                    isRegionOpen
                      ? "rotate-180"
                      : ""
                  }`}
                  style={{
                    color: col.accent,
                  }}
                />
              </button>

              {/* Region cities */}
              {isRegionOpen && (
                <div className="bg-[#0a171e] pb-1">
                  {linked.map((city) => {
                    const match = cityLookup.get(
                      city.toLowerCase(),
                    )!;

                    return (
                      <Link
                        key={city}
                        href={`/service-area/${match.slug}`}
                        onClick={onClose}
                        className="flex w-full items-center justify-between px-5 py-2.5 text-left transition-colors hover:bg-white/[0.03]"
                      >
                        <span className="flex items-center gap-2 text-[13px] text-gray-300">
                          <MapPin
                            className="h-3.5 w-3.5 shrink-0"
                            style={{
                              color: col.accent,
                            }}
                          />

                          {city}
                        </span>

                        <span
                          className={`flex shrink-0 items-center gap-1 text-[10px] font-bold ${col.label}`}
                        >
                          {match.serviceCount} svcs
                        </span>
                      </Link>
                    );
                  })}

                  {/* Requested cities without detail pages stay visible as coming soon */}
                  {unlinked.map((city) => (
                    <div
                      key={city}
                      className="flex items-center gap-2 px-5 py-2 text-[12px] text-gray-600"
                    >
                      <MapPin className="h-3.5 w-3.5 shrink-0 text-gray-700" />

                      {city}

                      <span className="ml-auto text-[10px] text-gray-700">
                        Soon
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ──────────────────────────── main export ──────────────────────────── */

export default function ServicingAreaNav() {
  const cityLookup = buildCityLookup();
  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <nav
      aria-label="Service areas"
      className="w-full lg:flex lg:items-center lg:justify-center"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop service-area navigation */}
        <div className="hidden items-center lg:flex">
          <Link
            href="/service-area"
            className="mr-4 shrink-0 select-none border-r border-white/[0.12] py-4 pr-4 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-500"
          >
            Service Area
          </Link>

          <div className="flex flex-wrap items-center">
            {SERVICE_REGIONS.map(
              (region, ri) => (
                <div
                  key={region.name}
                  className="flex items-center"
                >
                  <DesktopItem
                    region={region}
                    col={
                      REGION_COLORS[
                        ri % REGION_COLORS.length
                      ]
                    }
                    cityLookup={cityLookup}
                  />

                  {ri <
                    SERVICE_REGIONS.length -
                      1 && (
                    <span className="mx-3 select-none text-gray-700">
                      ·
                    </span>
                  )}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Mobile service-area navigation */}
        <div className="flex items-center justify-between py-3 lg:hidden">
          <Link
            href="/service-area"
            className="select-none text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-500"
          >
            Service Area
          </Link>

          <button
            type="button"
            onClick={() =>
              setMobileOpen(true)
            }
            className="flex items-center gap-1.5 text-[12px] text-gray-400 transition-colors hover:text-white"
          >
            <Menu className="h-4 w-4" />

            <span className="font-medium">
              All Regions
            </span>
          </button>
        </div>
      </div>

      {/* Full-screen service-area drawer on mobile */}
      {mobileOpen && (
        <MobileDrawer
          cityLookup={cityLookup}
          onClose={() =>
            setMobileOpen(false)
          }
        />
      )}
    </nav>
  );
}