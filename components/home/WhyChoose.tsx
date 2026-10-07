import Link from "next/link";
import { CheckCircle2, HardDrive, Route, ShieldCheck } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import ScrollLoader from "../shared/ScrollLoader";

// Ian, 2026-10-07: the cards were too text heavy. Each now leads with one
// line and lists the points as checks; the in-house equipment card is new
// (he called having everything on site "a big selling point").

type Item = {
  index: number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  iconBorder: string;
  title: React.ReactNode;
  lead: string;
  points: React.ReactNode[];
};

const linkClass = "text-primary underline underline-offset-4 hover:text-primary/80";

const items: Item[] = [
  {
    index: 1,
    icon: HardDrive,
    iconColor: "text-emerald-700 dark:text-emerald-300",
    iconBorder: "border-emerald-200/80 dark:border-emerald-700/40",
    title: (
      <>
        In-House{" "}
        <Link href="/about/our-equipment/" className={linkClass}>
          Destruction Equipment
        </Link>
      </>
    ),
    lead: "Everything runs on site, with equipment for virtually every data-bearing device.",
    points: [
      "Degaussers for magnetic media",
      "Hard drive shredders",
      "SSD and flash media shredding to 2mm",
      "PXE-boot servers for high-throughput data wiping",
      "USB-boot erasure for individual devices",
      "Mail-in kits for remote employee devices",
    ],
  },
  {
    index: 2,
    icon: Route,
    iconColor: "text-amber-700 dark:text-amber-300",
    iconBorder: "border-amber-200/80 dark:border-amber-700/40",
    title: (
      <>
        Real-Time Visibility with{" "}
        <Link href="/tracetech/" className={linkClass}>
          TraceTech
        </Link>
      </>
    ),
    lead: "Track every asset from your loading dock to final disposition.",
    points: [
      "On-demand audit trail for every asset",
      "Live batch status and pickup scheduling",
      "Serialized Certificates of Destruction to download",
      "Your handling rules applied at every asset scan",
    ],
  },
  {
    index: 3,
    icon: ShieldCheck,
    iconColor: "text-blue-700 dark:text-blue-300",
    iconBorder: "border-blue-200/80 dark:border-blue-700/40",
    title: "Zero-Compromise Data Security",
    lead: "Certified, defensible data sanitization that protects your brand.",
    points: [
      <>
        <Link href="/certifications/" className={linkClass}>
          R2v3
        </Link>{" "}
        certified
      </>,
      <>
        <Link href="/certifications/" className={linkClass}>
          ISO 27001
        </Link>{" "}
        certified
      </>,
      "Background-checked technicians",
      "24/7 video-monitored facility",
      "NIST SP 800-88 sanitization or on-site shredding",
    ],
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-secondary dark:bg-dark py-16 transition-colors duration-300 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">

        <ScrollLoader>
          <SectionHeader title="Smarter ITAD - Unbroken Custody, Live Asset Tracking, Maximum Returns" />

          <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-relaxed text-stone-700 dark:text-slate-300">
            Integritrade delivers the most comprehensive, secure IT asset disposition process in
            the industry, made completely effortless. We believe enterprise security and
            environmental sustainability shouldn&apos;t come with an inflated price tag. By
            maximizing value recovery through aggressive remarketing, most of our clients pay
            nothing out of pocket for certified sanitization, and many earn money back. Best of
            all, we own and operate a full array of industrial{" "}
            <Link
              href="/about/our-equipment/"
              className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
            >
              destruction equipment
            </Link>
            , eliminating unnecessary third-party handoffs and guaranteeing an unbroken, in-house
            chain of custody for your data security needs.
          </p>
        </ScrollLoader>

        {/* From sm up each card is a subgrid of five rows (icon, title, rule,
            lead, list), so cards side by side share row heights: titles,
            leads and check lists line up however the text wraps. */}
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-y-0 lg:grid-cols-3 mt-16">
          {items.map(({ icon: Icon, iconColor, iconBorder, title, lead, points, index }) => (
            <ScrollLoader
              key={index}
              delay={index * 0.08}
              className="sm:row-span-5 sm:mb-6 sm:grid sm:grid-rows-subgrid lg:mb-0"
            >
              <article className="group p-6 bg-white dark:bg-dark-secondary rounded-md transition-all duration-300 hover:shadow-lg sm:row-span-5 sm:grid sm:grid-rows-subgrid sm:gap-y-0">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-md border ${iconBorder}`}
                  >
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                </div>

                <h3 className="font-serif text-2xl leading-snug text-stone-900 dark:text-white mb-4">
                  {title}
                </h3>

                <div className="my-4 h-px w-full bg-stone-200 dark:bg-slate-700" />

                <p className="text-[14px] leading-relaxed text-stone-700 dark:text-slate-300">
                  {lead}
                </p>

                <ul className="mt-4 space-y-2.5 self-start">
                  {points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[14px] leading-snug text-stone-700 dark:text-slate-300">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </ScrollLoader>
          ))}
        </div>
      </div>
    </section>
  );
}
