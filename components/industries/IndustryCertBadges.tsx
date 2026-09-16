import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import Iso9001 from "@/public/ISO/ISO-9001.webp";
import Iso14001 from "@/public/ISO/ISO-14001.webp";
import Iso27001 from "@/public/ISO/ISO-27001.webp";
import Iso45001 from "@/public/ISO/ISO-45001.webp";
import R2v3 from "@/public/ISO/R2V3_certified_logo.webp";
import Nist from "@/public/ISO/nist-800-88.jpg";

import ScrollLoader from "@/components/shared/ScrollLoader";

// Certification badge strip shown near the bottom of every industry page so
// visitors can see, at a glance, that Integritrade is an audited, low-risk
// choice before they reach the contact CTA.
const badges: { img: StaticImageData; label: string }[] = [
  { img: R2v3, label: "R2v3 Certified" },
  { img: Iso9001, label: "ISO 9001 Quality" },
  { img: Iso14001, label: "ISO 14001 Environmental" },
  { img: Iso45001, label: "ISO 45001 Health & Safety" },
  { img: Iso27001, label: "ISO 27001 Information Security" },
  { img: Nist, label: "NIST SP 800-88" },
];

export default function IndustryCertBadges() {
  return (
    <ScrollLoader>
      <section className="mt-16 lg:mt-24 rounded-md border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-dark-secondary p-8 lg:p-10">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            A certified, accountable ITAD partner
          </p>

          <h2 className="mt-3 font-serif text-2xl leading-snug text-stone-900 dark:text-white">
            Independently audited to the standards that protect your data and reputation.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Integritrade maintains R2v3 and ISO 9001, 14001, 45001 &amp; 27001 certifications, with
            NIST SP 800-88-aligned data sanitization — documented controls for quality, environment,
            safety, and information security within the applicable certified scope.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 items-center gap-6 sm:grid-cols-6 sm:gap-4">
          {badges.map(({ img, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Image
                src={img}
                alt={label}
                className="h-14 w-auto object-contain sm:h-16"
              />
              <span className="text-center text-[10px] font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/certifications/"
            className="inline-flex items-center gap-1.5 border-b border-stone-900 pb-1 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:border-primary hover:text-primary/80 dark:border-white"
          >
            View our certifications
          </Link>
        </div>
      </section>
    </ScrollLoader>
  );
}
