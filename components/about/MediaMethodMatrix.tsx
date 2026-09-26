import { Check, Minus, X } from "lucide-react";

/**
 * Which destruction method works on which kind of media.
 *
 * Ian asked for this on 2026-09-24. Most visitors assume any method destroys
 * any drive; showing them where one does not (degaussing does nothing to
 * flash) is what tells them we know the difference. Every cell restates
 * something the method rows further down the page already say, so if a
 * method's media list changes there, change it here too.
 *
 * Three states, not two: "na" means we do not use that method on that media,
 * which is different from the method not working. Hard drives do not go
 * through the 2 mm shredder, but that is not because it would fail.
 */

type Verdict = "yes" | "no" | "na";

const METHODS = [
  { key: "erase", label: "Data Erasure", short: "Erase" },
  { key: "degauss", label: "Magnetic Neutralization", short: "Magnetic" },
  { key: "shred", label: "Standard Mechanical Shredding", short: "Shred" },
  { key: "micro", label: "2mm Disintegration", short: "2mm" },
] as const;

type MethodKey = (typeof METHODS)[number]["key"];

const MEDIA: { label: string; verdicts: Record<MethodKey, Verdict> }[] = [
  { label: "Hard drives", verdicts: { erase: "yes", degauss: "yes", shred: "yes", micro: "na" } },
  { label: "SSDs and NVMe drives", verdicts: { erase: "yes", degauss: "no", shred: "no", micro: "yes" } },
  { label: "Phones and tablets", verdicts: { erase: "yes", degauss: "no", shred: "no", micro: "yes" } },
  { label: "USB drives and SD cards", verdicts: { erase: "yes", degauss: "no", shred: "no", micro: "yes" } },
  { label: "LTO and magnetic tape", verdicts: { erase: "na", degauss: "yes", shred: "yes", micro: "na" } },
];

// The facts behind the red crosses, for readers who have never had to know.
const WHY = [
  {
    title: "Degaussing Inefficacy on Solid-State Media",
    text: "Solid-state drives (SSDs), mobile devices, and USB flash memory store data via electrical charges within NAND chips rather than magnetic domains. Degaussing has zero sanitization effect on non-magnetic storage, leaving all stored data completely intact and readable.",
  },
  {
    title: "Particle Size Standards for Flash Media",
    text: "High-density flash chips are small enough to pass intact through conventional mechanical shredder blades, risking data remanence. Solid-state assets require high-security micro-shredding (≤ 2 mm particle size) to physically pulverize the storage dies.",
  },
  {
    title: "Functional Prerequisites for Software Erasure",
    text: "Cryptographic erasure and overwrite protocols require fully operational read/write heads and controller access. Non-functional, damaged, or unmountable drives cannot be logically sanitized and must proceed directly to certified physical destruction.",
  },
];
const SENTENCE: Record<Verdict, string> = {
  yes: "is effective for",
  no: "is ineffective for",
  na: "is not applicable for",
};

function VerdictIcon({ verdict, size = "h-5 w-5" }: { verdict: Verdict; size?: string }) {
  if (verdict === "yes") {
    return (
      <Check
        className={`${size} text-emerald-600 dark:text-emerald-400`}
        strokeWidth={2.5}
        aria-hidden="true"
      />
    );
  }
  if (verdict === "no") {
    return (
      <X className={`${size} text-red-500/80 dark:text-red-400/80`} strokeWidth={2.5} aria-hidden="true" />
    );
  }
  return (
    <Minus className={`${size} text-gray-300 dark:text-gray-600`} strokeWidth={2.5} aria-hidden="true" />
  );
}



export default function MediaMethodMatrix() {
  return (
    <section
      id="what-works"
      aria-labelledby="what-works"
      className="scroll-mt-24 mx-auto mt-14 max-w-5xl md:mt-16"
    >
      <div className="text-center">
        <h2
          id="what-works"
          className="font-serif text-2xl leading-[1.15] tracking-tight text-stone-900 dark:text-white sm:text-3xl"
        >
          Approved Destruction Methods by Storage Media
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-stone-600 dark:text-slate-300">
          Improper destruction leaves recoverable data behind. Use the matrix below to match your asset types to verified sanitization procedures.
        </p>
      </div>

      {/* Mobile: one card per media type with the four methods as a strip,
          the same pattern as the service comparison on /services/. A five
          column table does not fit a phone. */}
      <div className="mt-8 space-y-3 md:hidden">
        {MEDIA.map((m) => (
          <div
            key={m.label}
            className="rounded-xl bg-white p-4 ring-1 ring-black/5 dark:bg-dark-secondary dark:ring-white/10"
          >
            <p className="text-[14px] font-semibold text-stone-800 dark:text-gray-200">{m.label}</p>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {METHODS.map((method) => (
                <div
                  key={method.key}
                  className="flex min-w-0 flex-col items-center gap-1.5 rounded-md bg-gray-50 px-1 py-2.5 dark:bg-white/5"
                >
                  <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    {method.short}
                  </span>
                  <VerdictIcon verdict={m.verdicts[method.key]} size="h-4 w-4" />
                  <span className="sr-only">
                    {method.label} {SENTENCE[m.verdicts[method.key]]} {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tablet and up: the table. `relative` keeps the sr-only labels inside
          the scroll box; without it they escape and widen the page. */}
      <div className="relative mt-8 hidden overflow-x-auto rounded-xl ring-1 ring-black/5 dark:ring-white/10 md:block">
        <table className="w-full min-w-[640px] border-collapse bg-white text-left dark:bg-dark-secondary">
          <caption className="sr-only">
            Which of Integritrade&apos;s data destruction methods work on each kind of media
          </caption>
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="col"
                className="px-5 py-4 text-[12px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                Media
              </th>
              {METHODS.map((method) => (
                <th
                  key={method.key}
                  scope="col"
                  className="px-3 py-4 text-center"
                >
                  <span className="text-[14px] font-semibold text-gray-900 dark:text-white">
                    {method.label}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MEDIA.map((m) => (
              <tr key={m.label} className="border-b border-gray-100 last:border-0 dark:border-gray-800">
                <th
                  scope="row"
                  className="px-5 py-3.5 text-left text-[14px] font-medium text-stone-800 dark:text-gray-200"
                >
                  {m.label}
                </th>
                {METHODS.map((method) => (
                  <td key={method.key} className="px-3 py-3.5 text-center align-middle">
                    <span className="inline-flex justify-center">
                      <VerdictIcon verdict={m.verdicts[method.key]} />
                    </span>
                    <span className="sr-only">
                      {method.label} {SENTENCE[m.verdicts[method.key]]} {m.label}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <p className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-500 dark:text-gray-400">
        {(
          [
            ["yes", "Effective"],
            ["no", "Ineffective"],
            ["na", "N/A"],
          ]as const
        ).map(([verdict, label]) => (
          <span key={verdict} className="inline-flex items-center gap-1.5">
            <VerdictIcon verdict={verdict} size="h-4 w-4" />
            {label}
          </span>
        ))}
      </p>

      {/* Why the crosses are crosses */}
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {WHY.map((w) => (
          <li
            key={w.title}
            className="flex min-w-0 overflow-hidden gap-3 rounded-xl bg-white p-4 sm:p-5 ring-1 ring-black/5 dark:bg-dark-secondary dark:ring-white/10"
          >
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 dark:bg-red-500/10">
              <X
                className="h-3.5 w-3.5 text-red-500 dark:text-red-400"
                strokeWidth={3}
                aria-hidden="true"
              />
            </span>

            <div className="min-w-0 flex-1">
              <p className="break-words text-[13px] font-semibold leading-snug text-stone-900 dark:text-white sm:text-[14px]">
                {w.title}
              </p>

              <p className="mt-1 break-words text-[12px] leading-relaxed text-stone-600 dark:text-slate-300 sm:text-[13px]">
                {w.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
