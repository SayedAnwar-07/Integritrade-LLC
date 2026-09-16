import type { ComponentType } from "react";

import PrimaryButton from "../shared/buttons/PrimaryButton";
import OutlineButton from "../shared/buttons/OutlineButton";
import ScrollLoader from "../shared/ScrollLoader";
import { ItadGlobe } from "../ui/globe";

import {
  ShieldCheck,
  FileBadge2,
  History,
  UserRoundCheck,
  Cctv,
} from "lucide-react";

type StatIcon = ComponentType<{ className?: string; strokeWidth?: number }>;

// Custom database + verified-check glyph for the "zero breaches" stat — lucide
// has no data-store-with-shield icon, so we draw one in the same thin-line
// style as the lucide set. The check stroke uses the brand green as an accent;
// the rest inherits currentColor so it flips cleanly in dark mode.
function DatabaseCheck({ className, strokeWidth = 1.5 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="10" cy="5" rx="7" ry="2.6" />
      <path d="M3 5v6c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V5" />
      <path d="M3 11v6c0 1.4 3.1 2.6 7 2.6.7 0 1.4 0 2-.1" />
      <path d="M14.3 18.6l2.2 2.2L21 16.3" stroke="#2aac61" />
    </svg>
  );
}

export default function Hero() {

  const trustItems: { Icon: StatIcon; value: string; label: string }[] = [
    {
      Icon: ShieldCheck,
      value: "100%",
      label: "Guaranteed Data Destruction",
    },
    {
      Icon: FileBadge2,
      value: "5",
      label: "Industry Certifications",
    },
    {
      Icon: History,
      value: "40+",
      label: "Years Combined Experience",
    },
    {
      Icon: UserRoundCheck,
      value: "Verified",
      label: "Background-Checked Personnel",
    },
    {
      Icon: Cctv,
      value: "24/7",
      label: "Secure Video-Monitored Facility",
    },
    {
      Icon: DatabaseCheck,
      value: "Zero",
      label: "Data Breaches in Our History",
    },
  ];

  return (
    <section className="relative pt-20 lg:pt-28 bg-secondary dark:bg-dark transition-colors duration-300 overflow-hidden">
      <ScrollLoader>
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 lg:pt-4">
              <h1
                className="
                  font-serif font-bold [text-wrap:balance]
                  text-[2rem] leading-[1.15]
                  sm:text-[2.75rem] sm:leading-[1.1]
                  lg:text-[3.25rem] lg:leading-[1.08]
                  xl:text-[3.5rem]
                  tracking-[-0.02em]
                  text-black dark:text-white"
              >
                California&apos;s trusted partner for ITAD and ITAM - done with full accountability, every time.
              </h1>

              <div className="mt-6 max-w-2xl">
                <p className="text-[15px] leading-7
                  sm:text-[17px] sm:leading-8
                  md:text-[18px] md:leading-8
                  lg:text-[19px] lg:leading-9
                  text-gray-600 dark:text-gray-300
                  [text-wrap:pretty]
                  custom-text-center"
                >
                  Integritrade manages the complete lifecycle of your retired electronics - secure data destruction, responsible recycling, and certified asset disposition -  all backed by documentation you can stand behind. Whether you're retiring 10 devices or 10,000, we give you the chain-of-custody reporting and compliance confidence your organization demands.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <OutlineButton
                  href="/services/"
                  testId="button-learn-more"
                  className="text-sm py-3 sm:flex-1 lg:flex-none"
                >
                  View Our Service Levels
                </OutlineButton>

                <PrimaryButton
                  href="/service-book/"
                  testId="button-get-quote"
                  className="text-sm py-3 sm:flex-1 lg:flex-none"
                >
                  Get a Free Consultation
                </PrimaryButton>

              </div>
            </div>

            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-gray-200/60 dark:bg-gray-800/30 blur-2xl rounded-md opacity-60 group-hover:opacity-80 transition duration-500" />
              <div className="relative">
                <div>
                  <ItadGlobe />
                </div>
              </div>
            </div>
          </div>

          {/* Trust ribbon — thin-line stat icons, brand-green rule, big numbers.
              currentColor + theme tokens keep it correct in dark mode; the grid
              reflows 2 → 3 → 6 columns and only shows column dividers at lg. */}
          <div className="mt-12 lg:mt-16">
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-6 lg:gap-x-0 lg:divide-x lg:divide-gray-200 dark:lg:divide-white/10">
              {trustItems.map(({ Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center px-2 text-center lg:px-6"
                >
                  <Icon
                    className="h-10 w-10 text-slate-800 dark:text-slate-100 lg:h-12 lg:w-12"
                    strokeWidth={1.5}
                  />

                  <span
                    aria-hidden="true"
                    className="mt-4 h-px w-8 bg-emerald-600 dark:bg-emerald-500"
                  />

                  <div className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white lg:text-4xl">
                    {value}
                  </div>

                  <p className="mt-2 text-xs leading-snug text-gray-500 dark:text-gray-400 sm:text-sm">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollLoader>
    </section>
  );
}
