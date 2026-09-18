import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { SVGProps } from "react";

/**
 * The services index, kept deliberately short.
 *
 * One line per service is enough here: the detail that used to sit on this page
 * (includes / documentation / value recovery) is now in the comparison matrix
 * below, where it can actually be scanned, and the full write-up lives on each
 * service page.
 *
 * Icons are hand-drawn rather than stock glyphs so the set reads as one family:
 * a shared 48px grid, 1.5 stroke, round joins, and each mark composed from two
 * or three simple shapes that say what the service actually does.
 */

const iconBase = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Closed loop of two arrows: material going back around the lifecycle. */
function RecycleLoop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M11 29A14 14 0 0 1 24 10h5" />
      <path d="M25 6l4.5 4-4.5 4" />
      <path d="M37 19A14 14 0 0 1 24 38h-5" />
      <path d="M23 42l-4.5-4 4.5-4" />
    </svg>
  );
}

/** Shield over shredded strips: data destroyed under a protected process. */
function ShieldShred(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M24 6l13 4.5v10.4c0 8.2-5.4 14.7-13 17.1-7.6-2.4-13-8.9-13-17.1V10.5z" />
      <path d="M17.5 20.5h13" />
      <path d="M17.5 25.5h13" />
      <path d="M21 30.5h6" />
    </svg>
  );
}

/** Screen with a rising line: assets retired, value recovered. */
function ScreenValue(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconBase} {...props}>
      <rect x="7" y="11" width="34" height="22" rx="2.5" />
      <path d="M19 40h10" />
      <path d="M24 33v7" />
      <path d="M14 27l6-7 4.5 4.5L33 16" />
      <path d="M28.5 16H33v4.5" />
    </svg>
  );
}

/** Parcel: the kit that goes out and comes back with the equipment. */
function ReturnBox(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconBase} {...props}>
      <path d="M10 16.5l14-7 14 7v15l-14 7-14-7z" />
      <path d="M10 16.5l14 7 14-7" />
      <path d="M24 23.5v15" />
      <path d="M17 13l14 7" />
    </svg>
  );
}

/** Device plus gear: controlled teardown rather than resale. */
function TeardownGear(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...iconBase} {...props}>
      <rect x="6" y="10" width="24" height="17" rx="2.5" />
      <path d="M11 33h14" />
      <path d="M18 27v6" />
      <circle cx="35" cy="32" r="6.5" />
      <path d="M35 22.5v3M35 41.5v-3M44.5 32h-3M25.5 32h3" />
    </svg>
  );
}

const SERVICES = [
  {
    href: "/services/basic-electronics-recycling/",
    Icon: RecycleLoop,
    title: "Basic Electronics Recycling",
    line: "Responsible e-waste processing when your data destruction is already handled.",
  },
  {
    href: "/services/data-destruction-services/",
    Icon: ShieldShred,
    title: "Data Destruction Services",
    line: "Serialized, compliance-grade destruction for data-bearing media.",
  },
  {
    href: "/services/it-asset-disposition/",
    Icon: ScreenValue,
    title: "IT Asset Disposition & Value Recovery",
    line: "Secure disposition with full reporting and recovered value on eligible assets.",
  },
  {
    href: "/services/remote-it-asset-recovery/",
    Icon: ReturnBox,
    title: "Remote IT Asset Recovery",
    line: "Collect laptops and IT equipment from home offices and departing employees.",
  },
  {
    href: "/services/demanufacturing-prototype-destruction/",
    Icon: TeardownGear,
    title: "Demanufacturing & Prototype Destruction",
    line: "Witnessed, controlled destruction for prototypes and brand-sensitive devices.",
  },
];

export default function ServiceCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map(({ href, Icon, title, line }) => (
        <Link
          key={href}
          href={href}
          className="group flex h-full flex-col items-center rounded-xl bg-white px-8 py-10 text-center ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-dark-secondary dark:ring-white/10"
        >
          <Icon className="h-14 w-14 text-primary transition-transform duration-300 group-hover:scale-105" />

          <h3 className="mt-7 font-serif text-xl leading-snug text-gray-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-3 text-[15px] leading-relaxed text-stone-600 dark:text-gray-300">
            {line}
          </p>

          <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#19723e] dark:text-emerald-400">
            Learn more
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Link>
      ))}
    </div>
  );
}
