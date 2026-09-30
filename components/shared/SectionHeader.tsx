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
  as?: "h2" | "h3";
  size?: "default" | "sm";
  showPeriod?: boolean; // ডিফল্ট true; কোনো শিরোনামে ডট না চাইলে false দিন
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
  as: Tag = "h2",
  size = "default",
  showPeriod = true,
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isSmall = size === "sm";
  const hasLink = Boolean(linkText && linkHref);

  // শিরোনামের শেষে আগে থেকেই যতিচিহ্ন থাকলে দ্বিতীয়বার ডট বসবে না
  const alreadyEndsWithPunctuation =
    typeof title === "string" && /[.!?:;।]$/.test(title.trim());
  const showEndDot = showPeriod && !alreadyEndsWithPunctuation;

  const cta = hasLink && (
    <Link
      href={linkHref!}
      className="group inline-flex items-center gap-2 border-b border-stone-900 pb-1 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-150 hover:border-primary hover:text-primary/80 dark:border-white"
    >
      {linkText}
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );

  const headingClasses = isSmall
    ? "font-serif text-2xl lg:text-[26px] font-semibold leading-tight tracking-tight text-stone-900 dark:text-white"
    : "font-serif text-3xl max-w-4xl mx-auto leading-[1.05] tracking-tight text-stone-900 sm:text-4xl lg:text-5xl dark:text-white";

  return (
    <div className={`w-full ${className}`}>
      {/* Section eyebrow label intentionally not rendered. The small green
          kicker (and its flanking rules) read as redundant filler next to the
          heading right below it, so it was removed site-wide on 2026-09-19.
          The `eyebrow` prop is still accepted so the many existing call sites
          keep compiling; it simply has no output. */}
      <div
        className={`max-w-6xl ${
          isCenter ? "mx-auto text-center" : "text-left"
        }`}
      >
        <Tag className={headingClasses}>
          {title}
          {showEndDot && (
            <span className="text-emerald-700 dark:text-emerald-400">.</span>
          )}
        </Tag>

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