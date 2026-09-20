import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import {
  BatteryCharging,
  Computer,
  HardDrive,
  Laptop,
  Monitor,
  Network,
  Printer,
  Server,
  Smartphone,
} from "lucide-react";
import type { ComponentType } from "react";

import { productsData } from "@/data/productsData";

/**
 * The device index grid.
 *
 * Tiles only: mark, name, link. Ian cut the risk chips and the one-line
 * summaries on 2026-09-20 as fear-mongering and redundant with the page
 * behind them, which also puts this closer to the ERI grid he pointed at.
 * Anything worth saying about a device belongs on that device's page.
 */

const ICONS: Record<string, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  laptops: Laptop,
  "desktop-computers": Computer,
  servers: Server,
  "hard-drives": HardDrive,
  "monitors-and-displays": Monitor,
  "networking-equipment": Network,
  "printers-and-copiers": Printer,
  "phones-and-tablets": Smartphone,
  "batteries-and-ups": BatteryCharging,
};


export default function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {productsData.map((product) => {
        const Icon = ICONS[product.slug];

        return (
          <Link
            key={product.slug}
            href={`/what-we-recycle/${product.slug}/`}
            className="group flex h-full min-w-0 flex-col items-center rounded-xl bg-white px-6 py-10 text-center ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-dark-secondary dark:ring-white/10"
          >
            {Icon ? (
              <Icon
                className="h-12 w-12 text-primary transition-transform duration-300 group-hover:scale-105"
                strokeWidth={1.5}
              />
            ) : null}

            <h3 className="mt-6 font-serif text-xl leading-snug text-gray-900 dark:text-white">
              {product.name}
            </h3>

            <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#19723e] dark:text-emerald-400">
              Learn more
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        );
      })}

      {/* The nine above are the common ones, not the whole list. Ian flagged
          that we accept plenty he has not itemised, so the grid says so
          instead of reading as exhaustive. */}
      <Link
        href="/service-book/"
        className="group flex h-full min-w-0 flex-col items-center justify-center rounded-xl border border-dashed border-stone-300 px-6 py-10 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-stone-400 hover:bg-white/60 dark:border-white/15 dark:hover:border-white/25 dark:hover:bg-white/5"
      >
        <Plus className="h-10 w-10 text-stone-400 transition-transform duration-300 group-hover:scale-105 dark:text-gray-500" strokeWidth={1.5} />

        <h3 className="mt-6 font-serif text-xl leading-snug text-gray-900 dark:text-white">
          And more
        </h3>

        <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#19723e] dark:text-emerald-400">
          Ask about your equipment
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </div>
  );
}
