import { Check, Minus, X } from "lucide-react";

/**
 * Which destruction method works on which kind of media.
 *
 * Ian asked for this on 2026-09-24 and supplied the full table, with a reason
 * in every cell, on 2026-09-27. Most visitors assume any method destroys any
 * drive; showing them where one does not (degaussing does nothing to flash)
 * is what tells them we know the difference. If a method's media list changes
 * further down the page, change it here too.
 *
 * The icon follows Ian's table: a tick where the method works, a cross where
 * it fails or is impractical, and a dash where we do not put that media
 * through that method at all (hard drives would damage the 2 mm shredder's
 * knives, for example). The status word and reason carry the detail.
 */

type Verdict = "yes" | "no" | "na";
type Cell = { verdict: Verdict; status: string; note: string };

const METHODS = [
  { key: "purge", label: "NIST 800-88 Purge", detail: "Firmware / Crypto Erase" },
  { key: "degauss", label: "High-Gauss Degaussing", detail: "Magnetic Field" },
  { key: "shred", label: "Rotary Shear Shredding", detail: "~38 mm / 1.5\" Strip-Cut" },
  { key: "micro", label: "Solid-State Disintegration", detail: "≤2 mm Micro-Shred" },
] as const;

type MethodKey = (typeof METHODS)[number]["key"];

const yes = (note: string, status = "Effective"): Cell => ({ verdict: "yes", status, note });
const no = (note: string, status = "Ineffective"): Cell => ({ verdict: "no", status, note });
const na = (note: string, status: string): Cell => ({ verdict: "na", status, note });

const MEDIA: { label: string; cells: Record<MethodKey, Cell> }[] = [
  {
    label: "Rotary Hard Drives (HDDs)",
    cells: {
      purge: yes("NIST Purge"),
      degauss: yes("Platters Demagnetized"),
      shred: yes("NIST Destroy"),
      micro: na("Chassis Damaging to Knives", "Incompatible"),
    },
  },
  {
    label: "Solid-State & NVMe Drives",
    cells: {
      purge: yes("Firmware Block / Crypto"),
      degauss: no("Zero Magnetic Effect"),
      shred: no("NAND Chips Fall Through"),
      micro: yes("NIST Destroy / NSA Spec"),
    },
  },
  {
    label: "Smartphones & Tablets",
    cells: {
      purge: yes("Cryptographic Wipe"),
      degauss: no("Zero Magnetic Effect"),
      shred: no("NAND Survival / Battery Fire", "Ineffective / Hazard"),
      micro: yes("Requires Battery Removal"),
    },
  },
  {
    label: "USB Drives & SD Cards",
    cells: {
      purge: no("Lacks Firmware Purge", "Impractical"),
      degauss: no("Zero Magnetic Effect"),
      shred: no("Bypasses Shredder Teeth"),
      micro: yes("Pulverizes Memory Dies"),
    },
  },
  {
    label: "LTO & Magnetic Backup Tapes",
    cells: {
      purge: na("End-to-End Overwrite", "Impractical"),
      degauss: yes("NIST Purge"),
      shred: no("Ribbons Survive Strip-Cut"),
      micro: na("Ribbons Jam / Blind Screens", "Incompatible"),
    },
  },
];

const STATUS_COLOR: Record<Verdict, string> = {
  yes: "text-emerald-700 dark:text-emerald-400",
  no: "text-red-600 dark:text-red-400",
  na: "text-gray-500 dark:text-gray-400",
};

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

      {/* Phones and tablets: one card per media type, each method on its own
          line. A five column table with a reason in every cell does not fit
          below a laptop width. */}
      <div className="mt-8 grid gap-3 md:grid-cols-2 lg:hidden">
        {MEDIA.map((m) => (
          <div
            key={m.label}
            className="rounded-xl bg-white p-4 ring-1 ring-black/5 dark:bg-dark-secondary dark:ring-white/10"
          >
            <p className="text-[15px] font-semibold text-stone-900 dark:text-white">{m.label}</p>
            <ul className="mt-3 space-y-3">
              {METHODS.map((method) => {
                const cell = m.cells[method.key];
                return (
                  <li key={method.key} className="flex min-w-0 gap-2.5">
                    <span className="mt-0.5 shrink-0">
                      <VerdictIcon verdict={cell.verdict} size="h-4 w-4" />
                    </span>
                    <div className="min-w-0 text-[13px] leading-snug">
                      <p className="font-medium text-stone-800 dark:text-gray-200">
                        {method.label}{" "}
                        <span className="font-normal text-gray-500 dark:text-gray-400">({method.detail})</span>
                      </p>
                      <p className="mt-0.5">
                        <span className={`font-semibold ${STATUS_COLOR[cell.verdict]}`}>{cell.status}</span>
                        <span className="text-gray-500 dark:text-gray-400"> · {cell.note}</span>
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Laptop and up: the table. */}
      <div className="relative mt-8 hidden overflow-x-auto rounded-xl ring-1 ring-black/5 dark:ring-white/10 lg:block">
        <table className="w-full border-collapse bg-white text-left dark:bg-dark-secondary">
          <caption className="sr-only">
            Which of Integritrade&apos;s data destruction methods work on each kind of storage media, and why
          </caption>
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th
                scope="col"
                className="w-[19%] px-5 py-4 align-bottom text-[12px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400"
              >
                Storage Media Type
              </th>
              {METHODS.map((method) => (
                <th key={method.key} scope="col" className="px-3 py-4 text-center align-bottom">
                  <span className="block text-[14px] font-semibold leading-snug text-gray-900 dark:text-white">
                    {method.label}
                  </span>
                  <span className="mt-1 block text-[12px] font-normal text-gray-500 dark:text-gray-400">
                    ({method.detail})
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
                  className="px-5 py-4 text-left text-[14px] font-medium text-stone-800 dark:text-gray-200"
                >
                  {m.label}
                </th>
                {METHODS.map((method) => {
                  const cell = m.cells[method.key];
                  return (
                    <td key={method.key} className="px-3 py-4 text-center align-top">
                      <span className="inline-flex items-center justify-center gap-1.5">
                        <VerdictIcon verdict={cell.verdict} size="h-4 w-4" />
                        <span className={`text-[13px] font-semibold ${STATUS_COLOR[cell.verdict]}`}>
                          {cell.status}
                        </span>
                      </span>
                      <span className="mt-1 block text-[12px] leading-snug text-gray-500 dark:text-gray-400">
                        {cell.note}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
