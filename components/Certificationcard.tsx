import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import ScrollLoader from "./shared/ScrollLoader";

interface KeyPoint {
  short_header: string;
  short_info: string;
}

interface Certification {
  id: number;
  header: string;
  title: string;
  description: string;
  customerBenefit: string;
  keyPoints: KeyPoint[];
  whyChoose: string;
  validFrom: string;
  validUntil: string;
  company: string;
  company_description: string;
  image: StaticImageData;
}

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <article className="group">
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center ${
          isEven ? "" : "lg:[&>*:first-child]:order-2"
        }`}
      >
        {/* IMAGE — primary focus, takes 7/12 columns */}
        <div className="lg:col-span-6 relative">
          <ScrollLoader>            
            {/* Image container — detached white card, generous, no hover */}
            <div className="relative bg-secondary dark:bg-dark rounded-md overflow-hidden">
              <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={certification.image}
                    alt={`${certification.header} certificate — ${certification.company}`}
                    fill
                    className="object-contain p-4 sm:p-6 rounded-md"
                    priority={index < 2}
                  />
              </div>
            </div>
          </ScrollLoader>
        </div>

        {/* DETAILS — secondary, sticky on desktop, 5/12 columns */}
        <div className="lg:col-span-6">
          <ScrollLoader>
            {/* Eyebrow badge */}
            <span className="inline-block text-[11px] tracking-[0.18em] uppercase text-white font-semibold bg-primary border border-emerald-700/15 px-3 py-1 rounded-full">
              {certification.header}
            </span>

            {/* Title */}
            <h3 className="font-serif text-3xl sm:text-4xl leading-[1.1] tracking-tight text-neutral-900 dark:text-gray-100 mt-5">
              {certification.title.split(":")[1]?.trim() ||
                certification.title}
            </h3>

            {/* Hairline */}
            <div className="h-px w-12 bg-emerald-700 mt-5 mb-5" />

            {/* Description */}
            <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-gray-300 text-justify">
              {certification.description}
            </p>

            <div>
              <p className="text-neutral-900 dark:text-gray-100 font-medium mt-4 mb-1">
                What it delivers
              </p>
              <p className="text-[15px] leading-relaxed text-neutral-800 dark:text-gray-200 text-justify">
                {certification.customerBenefit}
              </p>
            </div>

            {/* Meta — vertical key-value list */}
            <dl className="mt-7 space-y-3 border-t border-neutral-200 pt-5">
              <div className="flex justify-between gap-4 text-sm">
                <dt className="text-neutral-500 dark:text-gray-400">Issued by</dt>
                <dd className="text-neutral-900 dark:text-gray-100 text-right font-medium">
                  {certification.company}
                </dd>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <dt className="text-neutral-500 dark:text-gray-400">Scope</dt>
                <dd className="text-neutral-900 dark:text-gray-100 max-w-[60%] text-justify">
                  {certification.company_description}
                </dd>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <dt className="text-neutral-500 dark:text-gray-400">Valid period</dt>
                <dd className="text-neutral-900 dark:text-gray-100 text-right tabular-nums">
                  {certification.validFrom} – {certification.validUntil}
                </dd>
              </div>
            </dl>
          </ScrollLoader>
        </div>

      </div>
    </article>
  );
};

export default CertificationCard;