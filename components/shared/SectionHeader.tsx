"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow?: string;
  sectionNumber?: string;
  title: string | ReactNode;
  description?: string;
  linkText?: string;
  linkHref?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  sectionNumber,
  title,
  description,
  linkText,
  linkHref,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const hasLink = Boolean(linkText && linkHref);

  const cta = hasLink && (
    <Link
      href={linkHref!}
      className="group inline-flex items-center gap-2 border-b border-stone-900 pb-1 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-150 hover:border-primary hover:text-primary/80 dark:border-white"
    >
      {linkText}
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );

  return (
    <div className={`w-full ${className}`}>
      {eyebrow && (
        <div
          className={`mb-8 flex items-center gap-4 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-12 bg-emerald-700 dark:bg-emerald-500" />
          <span className="font-mono text-[1rem] font-bold uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400">
            {sectionNumber ? `§${sectionNumber} / ${eyebrow}` : eyebrow}
          </span>
          <span className="h-px w-12 bg-emerald-700 dark:bg-emerald-500" />
        </div>
      )}

      <div
        className={`max-w-6xl ${
          isCenter ? "mx-auto text-center" : "text-left"
        }`}
      >
        <h2 className="font-serif text-3xl max-w-4xl mx-auto leading-[1.05] tracking-tight text-stone-900 sm:text-4xl lg:text-5xl dark:text-white">
          {title}
        </h2>

        {description && (
          <p
            className={`mt-6 text-base leading-relaxed text-stone-700 dark:text-slate-300 ${
              isCenter ? "text-center" : "text-left"
            }`}
          >
            {description}
          </p>
        )}

        {hasLink && (
          <div className={`mt-8 flex ${isCenter ? "justify-center" : ""}`}>
            {cta}
          </div>
        )}
      </div>
    </div>
  );
}