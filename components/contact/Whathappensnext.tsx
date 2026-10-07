import type { ReactNode } from "react";
import ScrollLoader from "../shared/ScrollLoader";
import SectionHeader from "../shared/SectionHeader";

// Homepage "Our Process" (2026-10-07): five steps as a flow, from the
// reference the user supplied. Each step: a tinted icon circle, a green
// number badge, the title and the text. Five across with arrows from 1280px;
// three then two (centred) on tablets and smaller laptops, where the left
// section menu leaves too little width for five; one per row on phones with
// a down arrow between steps.

const GREEN = "#22a052";

function Glyph({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-14 w-14"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

// 01 A request sheet with a green check.
const RequestIcon = () => (
  <Glyph>
    <path d="M39 32V12.5A3.5 3.5 0 0 0 35.5 9h-20A3.5 3.5 0 0 0 12 12.5v33a3.5 3.5 0 0 0 3.5 3.5H32" />
    <path d="M19 19h13M19 26h13M19 33h8" />
    <circle cx="45" cy="45" r="10" stroke={GREEN} />
    <path d="m40.5 45.2 3 3 6-6.2" stroke={GREEN} />
  </Glyph>
);

// 02 A truck with green speed lines.
const TruckIcon = () => (
  <Glyph>
    <path d="M5 24h11M2 31h14M7 38h9" stroke={GREEN} />
    <rect x="20" y="17" width="24" height="23" rx="2.5" />
    <path d="M44 25h8.5l6.5 8v7H44z" />
    <path d="M48 29h3.5l3.2 4H48z" />
    <circle cx="28" cy="45" r="4.5" />
    <circle cx="51" cy="45" r="4.5" />
  </Glyph>
);

// 03 A shield with a green leaf.
const ShieldIcon = () => (
  <Glyph>
    <path d="M32 7l19 6.5v14.5c0 12.5-8.2 22.6-19 27-10.8-4.4-19-14.5-19-27V13.5z" />
    <path d="M24 40c0-11 8-18 19-18 0 11-7 18-19 18z" fill={GREEN} stroke={GREEN} />
    <path d="M27 37.5 37 28" stroke="#ffffff" strokeWidth={2} />
  </Glyph>
);

// 04 Three chasing arrows, green heads.
const RecycleIcon = () => (
  <Glyph>
    <path d="M15 42 27 21M37 21l12 21M46 49H18" />
    <path d="M19.7 23.7 27 21l1.4 7.7M41.7 39.3 49 42l1.4-7.7M24 44l-6 5 6 5" stroke={GREEN} />
  </Glyph>
);

// 05 A report with a green seal.
const CertificateIcon = () => (
  <Glyph>
    <path d="M40 30V12.5A3.5 3.5 0 0 0 36.5 9h-21A3.5 3.5 0 0 0 12 12.5v35a3.5 3.5 0 0 0 3.5 3.5H31" />
    <path d="M19 18h14M19 25h14M19 32h8" />
    <circle cx="44" cy="40" r="7.5" stroke={GREEN} />
    <circle cx="44" cy="40" r="2.5" fill={GREEN} stroke={GREEN} />
    <path d="m39.5 46-2 10 6.5-3.5 6.5 3.5-2-10" stroke={GREEN} />
  </Glyph>
);

const processSteps = [
  {
    step: "01",
    title: "Request a Pickup",
    text: "Tell us what assets you need removed, your location, quantity, and timeline. Our team reviews the request and prepares the right next step.",
    Icon: RequestIcon,
    tint: "green",
  },
  {
    step: "02",
    title: "We Collect & Track Assets",
    text: "Your equipment is picked up and tracked from the moment it leaves your site, helping maintain clear chain-of-custody records.",
    Icon: TruckIcon,
    tint: "blue",
  },
  {
    step: "03",
    title: "Data Is Destroyed",
    text: "Data-bearing devices are processed through controlled destruction or erasure workflows to reduce risk and protect sensitive information.",
    Icon: ShieldIcon,
    tint: "green",
  },
  {
    step: "04",
    title: "Recycled or Recovered",
    text: "Usable assets are evaluated for resale or recovery value. Non-reusable items are responsibly recycled through proper downstream channels.",
    Icon: RecycleIcon,
    tint: "blue",
  },
  {
    step: "05",
    title: "Reports & Certificates Delivered",
    text: "You receive final documentation such as asset reports, chain-of-custody records, and certificates for your internal or audit records.",
    Icon: CertificateIcon,
    tint: "green",
  },
];

const TINT = {
  green: "bg-emerald-50 dark:bg-emerald-500/10",
  blue: "bg-sky-50 dark:bg-sky-500/10",
};

// Thin green arrows between steps: right on wide screens, down on phones.
const ArrowRightThin = () => (
  <svg viewBox="0 0 40 16" fill="none" stroke={GREEN} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-10" aria-hidden="true">
    <path d="M2 8h35M30 2l7 6-7 6" />
  </svg>
);
const ArrowDownThin = () => (
  <svg viewBox="0 0 16 32" fill="none" stroke={GREEN} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-4" aria-hidden="true">
    <path d="M8 2v27M2 23l6 6 6-6" />
  </svg>
);

export default function WhatHappensNext() {
  return (
    <section className="pt-16" aria-labelledby="next-steps-heading">
      <ScrollLoader>
        <SectionHeader
          title="A clear process from pickup to final documentation"
          description="From your first request to the final report, every step is structured
                  to give your team clarity, accountability, and confidence. We collect,
                  track, process, recycle or recover assets, then provide the documents
                  you need for business records."
        />
      </ScrollLoader>

      <ScrollLoader>
        {/* From sm up the list is a grid and each step a subgrid of four rows
            (icon, badge, title, text), so a row of steps shares one title
            height: titles sit on a common bottom line and every description
            starts level, however many lines a title wraps to. Partial rows
            are centred with column offsets (2+2+1 on sm, 3+2 on md/lg). */}
        <ol className="mt-12 flex flex-col items-center gap-y-10 sm:mt-14 sm:grid sm:grid-cols-4 sm:items-stretch sm:gap-x-0 sm:gap-y-0 md:grid-cols-6 xl:grid-cols-5">
          {processSteps.map(({ step, title, text, Icon, tint }, i) => (
            <li
              key={step}
              className={`relative flex w-full max-w-sm flex-col items-center px-3 text-center sm:col-span-2 sm:row-span-4 sm:mb-12 sm:grid sm:max-w-none sm:grid-rows-subgrid sm:justify-items-center sm:gap-y-0 xl:col-span-1 xl:mb-0 xl:px-2 ${
                i === 3 ? "md:col-start-2 xl:col-start-auto" : ""
              } ${i === 4 ? "sm:col-start-2 md:col-start-auto" : ""}`}
            >
              <span
                className={`flex h-28 w-28 items-center justify-center rounded-full text-[#0f2b46] dark:text-slate-100 ${TINT[tint as keyof typeof TINT]}`}
              >
                <Icon />
              </span>

              <span className="mt-5 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-base font-bold text-white shadow-sm">
                {step}
              </span>

              <h3 className="mt-4 font-serif text-lg font-bold leading-snug text-[#0f2b46] [text-wrap:balance] dark:text-white sm:self-end">
                {title}
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray-600 [text-wrap:pretty] dark:text-gray-300 sm:self-start">
                {text}
              </p>

              {i < processSteps.length - 1 && (
                <span className="mt-6 sm:hidden">
                  <ArrowDownThin />
                </span>
              )}

              {/* Between steps on the five-across row, level with the icon circles. */}
              {i < processSteps.length - 1 && (
                <span className="absolute right-0 top-14 hidden -translate-y-1/2 translate-x-1/2 xl:block">
                  <ArrowRightThin />
                </span>
              )}
            </li>
          ))}
        </ol>
      </ScrollLoader>
    </section>
  );
}
