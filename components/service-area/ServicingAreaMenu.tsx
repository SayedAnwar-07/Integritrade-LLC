"use client";

import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";
import { serviceAreas } from "@/data/serviceAreas";
import { MapPin, ChevronDown, ChevronRight, X, Menu } from "lucide-react";


const SERVICE_REGIONS = [
  { name: "San Francisco",              cities: ["San Francisco"] },
  { name: "Silicon Valley & South Bay", cities: ["San Jose","Mountain View","Cupertino","Santa Clara","Palo Alto","Sunnyvale","Los Gatos","Milpitas","Campbell"] },
  { name: "The Peninsula",              cities: ["Menlo Park","Redwood City","San Mateo","San Bruno","South San Francisco","Foster City"] },
  { name: "The East Bay",               cities: ["Berkeley","Oakland","Fremont","Emeryville","Alameda","Pleasanton","Walnut Creek"] },
  { name: "North Bay",                  cities: ["San Rafael","Santa Rosa","Petaluma"] },
  { name: "Central Valley",             cities: ["Fresno","Clovis","Sacramento","Bakersfield","Stockton","Modesto","Merced","Visalia"] },
];

const REGION_COLORS = [
  { accent: "#1D9E75", label: "text-emerald-400" },
  { accent: "#378ADD", label: "text-blue-400"    },
  { accent: "#9F7AEA", label: "text-violet-400"  },
  { accent: "#ED64A6", label: "text-pink-400"    },
  { accent: "#38B2AC", label: "text-teal-400"    },
  { accent: "#ECC94B", label: "text-amber-400"   },
];


function buildCityLookup() {
  const map = new Map<string, { slug: string; serviceCount: number }>();
  for (const area of serviceAreas)
    map.set(area.name.toLowerCase(), { slug: area.slug, serviceCount: area.services.length });
  return map;
}

/* ──────────────────────── desktop nav item ─────────────────────────── */

interface DesktopItemProps {
  region:     (typeof SERVICE_REGIONS)[number];
  col:        (typeof REGION_COLORS)[number];
  cityLookup: Map<string, { slug: string; serviceCount: number }>;
}

function DesktopItem({ region, col, cityLookup }: DesktopItemProps) {
  const [open,    setOpen]    = useState(false);
  const [subCity, setSubCity] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = useCallback(() => { if (timer.current) clearTimeout(timer.current); setOpen(true); }, []);
  const leave = useCallback(() => {
    timer.current = setTimeout(() => {
      setOpen(false);
      setSubCity(null);
    }, 100);
  }, []);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  const linked   = region.cities.filter(c =>  cityLookup.has(c.toLowerCase()));
  const unlinked = region.cities.filter(c => !cityLookup.has(c.toLowerCase()));

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>

      {/* ── trigger ── */}
      <button
          type="button"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => {
            if (timer.current) clearTimeout(timer.current)
            setOpen((prev) => !prev)
          }}
          className={`
            flex items-center gap-1 py-4 text-[13px] font-medium tracking-wide
            transition-colors duration-75 cursor-pointer select-none
            ${open ? "text-white" : "text-gray-400 hover:text-gray-200"}
          `}
        >
          {region.name}
        <ChevronDown
          className={`w-3 h-3 mt-px transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          style={{ color: col.accent }}
        />
      </button>

      {/* ── dropdown (opens ABOVE) ── */}
      {open && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 min-w-[215px]"
          style={{ filter: "drop-shadow(0 -6px 28px rgba(0,0,0,.7))" }}
        >
          {/* panel */}
          <div
            className="rounded-md overflow-visible border border-white/[0.08] bg-[#0a0e0f]"
            style={{ borderTopColor: col.accent, borderTopWidth: "2px" }}
          >
            {/* header */}
            <div className="px-3 py-2 flex items-center gap-2 border-b border-white/[0.06]">
              <span className="w-[3px] h-4 rounded-full flex-shrink-0" style={{ background: col.accent }} />
              <span className="text-[0.8rem] font-bold uppercase tracking-[0.14em] text-gray-300 truncate">
                {region.name}
              </span>
              {linked.length > 0 && (
                <span className={`ml-auto text-[10px] font-bold shrink-0 ${col.label}`}>
                  {linked.length} cities
                </span>
              )}
            </div>

            {/* linked cities */}
            {linked.map(city => {
              const m = cityLookup.get(city.toLowerCase())!;
              return (
                <div
                  key={city}
                  className="relative"
                  onMouseEnter={() => setSubCity(city)}
                  onMouseLeave={() => setSubCity(null)}
                >
                  <Link
                    href={`/service-area/${m.slug}`}
                    className="flex items-center justify-between gap-3 px-3 py-[7px] text-[13px] text-gray-300 hover:text-white hover:bg-white/[0.04] transition-colors border-b border-white/[0.04] last:border-0"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: col.accent }} />
                      {city}
                    </span>
                    <span className={`flex items-center gap-0.5 text-[10px] font-bold shrink-0 ${col.label}`}>
                      {m.serviceCount}
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </Link>

                  
                </div>
              );
            })}

            {/* unlinked */}
            {unlinked.length > 0 && (
              <>
                <div className="px-3 pt-2 pb-1">
                  <span className="text-[9px] uppercase tracking-widest text-gray-400">Coming soon</span>
                </div>
                {unlinked.map(city => (
                  <div
                    key={city}
                    className="flex items-center gap-2 px-3 py-[6px] text-[12px] text-gray-400 cursor-default border-b border-white/[0.03] last:border-0"
                  >
                    <MapPin className="w-3 h-3 shrink-0 text-gray-700" />
                    {city}
                  </div>
                ))}
              </>
            )}
          </div>

          {/* ── downward caret ── */}
          <div className="flex justify-center">
            <div
              className="w-0 h-0"
              style={{
                borderLeft:  "7px solid transparent",
                borderRight: "7px solid transparent",
                borderTop:   "7px solid #0d1f27",
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
  onClose:    () => void;
}

function MobileDrawer({ cityLookup, onClose }: MobileDrawerProps) {
  const [openRegion, setOpenRegion] = useState<string | null>(null);
  const [openCity,   setOpenCity]   = useState<string | null>(null);

  return (
    <div className="w-full fixed inset-0 z-[100] flex flex-col bg-[#080f14]">

      {/* top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07]">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-500">Service Areas</span>
        <button onClick={onClose} className="p-1.5 rounded-md hover:bg-white/[0.06] text-gray-400 hover:text-white transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {SERVICE_REGIONS.map((region, ri) => {
          const col          = REGION_COLORS[ri % REGION_COLORS.length];
          const isRegionOpen = openRegion === region.name;
          const linked       = region.cities.filter(c =>  cityLookup.has(c.toLowerCase()));
          const unlinked     = region.cities.filter(c => !cityLookup.has(c.toLowerCase()));

          return (
            <div key={region.name} className="border-b border-white/[0.06]">

              {/* region row */}
              <button
                onClick={() => { setOpenRegion(prev => prev === region.name ? null : region.name); setOpenCity(null); }}
                className="w-full flex items-center justify-between px-4 py-3.5 text-left"
              >
                <span className="flex items-center gap-3">
                  <span className="w-[3px] h-5 rounded-full shrink-0" style={{ background: col.accent }} />
                  <span className="text-[14px] font-semibold text-gray-200">{region.name}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isRegionOpen ? "rotate-180" : ""}`}
                  style={{ color: col.accent }}
                />
              </button>

              {/* cities accordion */}
              {isRegionOpen && (
                <div className="bg-[#0a171e] pb-1">

                  {linked.map(city => {
                    const m          = cityLookup.get(city.toLowerCase())!;
                    const isCityOpen = openCity === city;

                    return (
                      <div key={city}>
                        <Link
                            href={`/service-area/${m.slug}`}
                            onClick={onClose}
                            className="w-full flex items-center justify-between px-5 py-2.5 text-left hover:bg-white/[0.03] transition-colors"
                            >
                            <span className="flex items-center gap-2 text-[13px] text-gray-300">
                                <MapPin className="w-3.5 h-3.5 shrink-0" style={{ color: col.accent }} />
                                {city}
                            </span>
                            <span className={`flex items-center gap-1 text-[10px] font-bold shrink-0 ${col.label}`}>
                                {m.serviceCount} svcs
                            </span>
                        </Link>                      
                      </div>
                    );
                  })}

                  {unlinked.map(city => (
                    <div key={city} className="flex items-center gap-2 px-5 py-2 text-[12px] text-gray-600">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-gray-700" />
                      {city}
                      <span className="ml-auto text-[10px] text-gray-700">Soon</span>
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
  const cityLookup  = buildCityLookup();
  const [mob, setMob] = useState(false);

  return (
    <nav className="w-full lg:flex lg:items-center lg:justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Desktop ── */}
        <div className="hidden lg:flex items-center">
          {/* label */}
          <Link href="/service-area" className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-500 pr-4 mr-4 py-4 border-r border-white/[0.12] select-none">
            Service Area
          </Link >

          {/* regions */}
          <div className="flex items-center flex-wrap">
            {SERVICE_REGIONS.map((region, ri) => (
              <div key={region.name} className="flex items-center">
                <DesktopItem
                  region={region}
                  col={REGION_COLORS[ri % REGION_COLORS.length]}
                  cityLookup={cityLookup}
                />
                {ri < SERVICE_REGIONS.length - 1 && (
                  <span className="text-gray-700 mx-3 select-none">·</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile trigger bar ── */}
        <div className="flex lg:hidden items-center justify-between py-3">
          <Link href="/service-area" className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-500 select-none">
            Service Area
          </Link >
          <button
            onClick={() => setMob(true)}
            className="flex items-center gap-1.5 text-[12px] text-gray-400 hover:text-white transition-colors"
          >
            <Menu className="w-4 h-4" />
            <span className="font-medium">All Regions</span>
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {mob && <MobileDrawer cityLookup={cityLookup} onClose={() => setMob(false)} />}
    </nav>
  );
}