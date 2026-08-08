import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { CheckCircle2 } from "lucide-react";
import ScrollLoader from "./shared/ScrollLoader";
import ReadMore from "./shared/buttons/ReadMore";

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
  pdf: string;
}

interface CertificationCardProps {
  certification: Certification;
  index: number;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  certification,
  index,
}) => {
  return (
    <article className="group">
      {/* Uniform structure: text always on the LEFT, certificate image on the RIGHT.
          On mobile, order follows the DOM: cert name + text first, then the image. */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-stretch">
        {/* DETAILS — first on mobile (name → paragraphs → covers), left on desktop */}
        <div className="lg:col-span-6 lg:order-1">
          <ScrollLoader>
            <ReadMore previewLines={6} expandAt="lg">
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
              <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-gray-300 custom-text-center">
                {certification.description}
              </p>

              {/* What it delivers */}
              <div className="mt-4">
                <p className="text-neutral-900 dark:text-gray-100 font-medium mb-1">
                  What it delivers
                </p>
                <p className="text-[15px] leading-relaxed text-neutral-800 dark:text-gray-200 custom-text-center">
                  {certification.customerBenefit}
                </p>
              </div>

              {/* What this certification covers — minimal checklist */}
              <div className="mt-6 border-t border-neutral-200 dark:border-white/10 pt-5">
                <p className="text-neutral-900 dark:text-gray-100 font-medium mb-3">
                  What this certification covers
                </p>
                <ul className="space-y-2.5">
                  {certification.keyPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-[15px] text-neutral-700 dark:text-gray-300"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-emerald-600"
                      />
                      <span>{point.short_header}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ReadMore>
          </ScrollLoader>
        </div>

        {/* IMAGE — after the text on mobile, right on desktop */}
        <div className="lg:col-span-6 lg:order-2 relative">
          <ScrollLoader className="lg:h-full">
            <a
              href={certification.pdf}
              target="_blank"
              rel="noopener noreferrer"
              title={`View ${certification.header} Certificate PDF`}
              aria-label={`View ${certification.header} Certificate PDF`}
              className="group/pdf block bg-secondary dark:bg-dark rounded-md overflow-hidden cursor-pointer lg:h-full"
            >
              <div className="aspect-[4/5] lg:aspect-auto lg:h-full w-full">
                <Image
                  src={certification.image}
                  alt={`${certification.company} ${certification.header} Certificate`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-4 sm:p-6 rounded-md transition-transform duration-300 group-hover/pdf:scale-[1.02]"
                  priority={index === 0}
                />
              </div>
            </a>
          </ScrollLoader>
        </div>
      </div>
    </article>
  );
};

export default CertificationCard;
