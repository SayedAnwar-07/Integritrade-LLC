import { Fragment } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";

/**
 * What each service level includes, at a glance.
 *
 * Every row is derived from the `serviceLevel` entries in servicesData: the
 * tiers are cumulative there ("Everything in Basic Recycling, plus...", then
 * "Everything in Data Destruction Services, plus..."), so an item introduced at
 * one tier is included in every tier above it.
 *
 * Sanitization for reuse, asset registration and chain-of-custody records sit
 * with Data Destruction rather than ITAD: Ian confirmed on 2026-09-19 that all
 * three are included in destruction engagements.
 */

const COLUMNS = [
  { key: "basic", label: "Basic Recycling", href: "/services/basic-electronics-recycling/" },
  { key: "destruction", label: "Data Destruction", href: "/services/data-destruction-services/" },
  { key: "itad", label: "IT Asset Disposition", href: "/services/it-asset-disposition/" },
] as const;

type ColumnKey = (typeof COLUMNS)[number]["key"];

const ROWS: { group: string; items: { label: string; included: ColumnKey[] }[] }[] = [
  {
    group: "Collection & recycling",
    items: [
      { label: "Pickup or drop-off coordination", included: ["basic", "destruction", "itad"] },
      { label: "Responsible downstream recycling", included: ["basic", "destruction", "itad"] },
      { label: "Weight ticket or recycling confirmation", included: ["basic", "destruction", "itad"] },
    ],
  },
  {
    group: "Data destruction",
    items: [
      { label: "Physical destruction of data-bearing media", included: ["destruction", "itad"] },
      { label: "2 mm mandated destruction sizing", included: ["destruction", "itad"] },
      { label: "Serialized Certificates of Destruction", included: ["destruction", "itad"] },
      { label: "Videotaped destruction available", included: ["destruction", "itad"] },
      { label: "Data sanitization for reuse", included: ["destruction", "itad"] },
    ],
  },
  {
    group: "Reporting & recovery",
    items: [
      { label: "Asset registration and asset-level reporting", included: ["destruction", "itad"] },
      { label: "Chain-of-custody records", included: ["destruction", "itad"] },
      { label: "Refurbishment, resale and remarketing", included: ["itad"] },
      { label: "Value recovery or upfront buyback", included: ["itad"] },
    ],
  },
];

function Cell({ included, label, column }: { included: boolean; label: string; column: string }) {
  return (
    <td className="px-4 py-4 text-center align-middle">
      {included ? (
        <Check
          className="mx-auto h-5 w-5 text-emerald-600 dark:text-emerald-400"
          strokeWidth={2.5}
          aria-hidden="true"
        />
      ) : (
        <X
          className="mx-auto h-5 w-5 text-red-500/80 dark:text-red-400/80"
          strokeWidth={2.5}
          aria-hidden="true"
        />
      )}
      <span className="sr-only">
        {label} is {included ? "included" : "not included"} in {column}
      </span>
    </td>
  );
}

export default function ServiceComparisonMatrix() {
  return (
    <div className="mt-12">
      <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-stone-900 dark:text-white sm:text-4xl">
        What each service level includes
      </h2>
      <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-stone-600 dark:text-slate-300">
        Each level builds on the one before it. Compare the documentation and handling you get with
        each, then pick the level that matches your compliance and recovery requirements.
      </p>

      {/* Table scrolls on narrow screens rather than squeezing the columns. */}
      <div className="mt-10 overflow-x-auto rounded-xl ring-1 ring-black/5 dark:ring-white/10">
        <table className="w-full min-w-[640px] border-collapse bg-white text-left dark:bg-dark-secondary">
          <caption className="sr-only">
            Comparison of what is included in Integritrade&apos;s Basic Recycling, Data Destruction,
            and IT Asset Disposition service levels
          </caption>

          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="col"
                className="px-5 py-5 text-[13px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                Included
              </th>
              {COLUMNS.map((c) => (
                <th
                  key={c.key}
                  scope="col"
                  className="px-4 py-5 text-center text-[14px] font-semibold text-gray-900 dark:text-white"
                >
                  <Link
                    href={c.href}
                    className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    {c.label}
                  </Link>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {ROWS.map((section) => (
              <Fragment key={section.group}>
                <tr className="bg-gray-50/80 dark:bg-white/[0.03]">
                  <th
                    scope="colgroup"
                    colSpan={COLUMNS.length + 1}
                    className="px-5 py-3 text-left text-[12px] font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400"
                  >
                    {section.group}
                  </th>
                </tr>

                {section.items.map((item) => (
                  <tr
                    key={item.label}
                    className="border-b border-gray-100 last:border-0 dark:border-gray-800"
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 text-left text-[14px] font-normal leading-snug text-stone-700 dark:text-gray-300"
                    >
                      {item.label}
                    </th>
                    {COLUMNS.map((c) => (
                      <Cell
                        key={c.key}
                        included={item.included.includes(c.key)}
                        label={item.label}
                        column={c.label}
                      />
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
        Videotaped destruction and specialized destruction sizing are available on request and
        confirmed as part of the project scope. Value recovery depends on equipment age,
        configuration, condition, and market demand.
      </p>
    </div>
  );
}
