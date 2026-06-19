"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  sectionNumber?: string;
  title: string | ReactNode;
  description?: string;
  linkText?: string;
  linkHref?: string;
  align?: "left" | "center";
  className?: string;
  /** Heading tag. Use "h2" when this header is a section inside a page that
   *  already has an <h1> (e.g. homepage sections). Defaults to "h1". */
  as?: "h1" | "h2";
}

export default function PageHeader({
  eyebrow,
  sectionNumber,
  title,
  description,
  linkText,
  linkHref,
  align = "left",
  className = "",
  as: Heading = "h1",
}: PageHeaderProps) {
  const isCenter = align === "center";
  const hasLink = Boolean(linkText && linkHref);
  const hasRightBlock = Boolean(description) || hasLink;

  // Reusable CTA link — editorial underlined style
  const cta = hasLink && (
    <Link
      href={linkHref!}
      className="group font-semibold inline-flex items-center gap-2 self-start text-sm font-mono uppercase tracking-[0.2em] border-b border-stone-900 dark:border-white pb-1 text-primary hover:text-primary/80 hover:border-primary transition-all duration-150 click-feel"
    >
      {linkText}
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );

  // Reusable description block — clamped on mobile/tablet, full on desktop
  const descriptionBlock = description && (
    <>
      {/* Mobile / tablet: clamped with Read More */}
      <div className="lg:hidden">
          <p className="text-justify text-base leading-relaxed text-stone-700 dark:text-slate-300">
            {description}
          </p>
      </div>

      {/* Desktop: full text, no toggle */}
      <p className="hidden lg:block text-justify text-base leading-relaxed text-stone-700 dark:text-slate-300">
        {description}
      </p>
    </>
  );

  return (
    <div className={`w-full ${className}`}>
      {/* Eyebrow */}
      {eyebrow && (
        <div
          className={`flex items-center gap-4 mb-8 ${
            isCenter ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-12 bg-emerald-700 dark:bg-emerald-500" />
          <span className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
            {sectionNumber ? `§${sectionNumber} / ${eyebrow}` : eyebrow}
          </span>
        </div>
      )}

      {/* CENTERED VARIANT */}
      {isCenter ? (
        <div className="flex flex-col items-center text-center">
          <div className="max-w-2xl">
            <Heading className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-stone-900 dark:text-white">
              {title}
            </Heading>
          </div>

          {description && <div className="mt-6 max-w-3xl">{descriptionBlock}</div>}

          {hasLink && <div className="mt-8">{cta}</div>}
        </div>
      ) : hasRightBlock ? (
        /* LEFT — STANDARD 12-COL SPLIT (title 6 / description 6) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 lg:items-end">
          <div className="lg:col-span-6">
            <Heading className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-stone-900 dark:text-white">
              {title}
            </Heading>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            {descriptionBlock}
            {cta}
          </div>
        </div>
      ) : (
        /* LEFT — TITLE ONLY (no description, no link) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-6">
            <Heading className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-stone-900 dark:text-white">
              {title}
            </Heading>
          </div>
        </div>
      )}
    </div>
  );
}