"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const sections = [
  { id: "certifications", label: "Certifications" },
  { id: "why-choose", label: "Why Choose Us" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "blogs", label: "Blogs" },
  { id: "about", label: "About" },
];

export default function HomeSectionNav() {
    const [activeSection, setActiveSection] = useState("certifications");
    const [progressHeight, setProgressHeight] = useState(0);
    const [trackBounds, setTrackBounds] = useState({ top: 0, bottom: 0 });
    const listRef = useRef<HTMLDivElement>(null);
    const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const activeIndex = sections.findIndex((s) => s.id === activeSection);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(section.id);
        },
        { rootMargin: "-40% 0px -40% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Measure the real pixel distance to the active dot so the progress
  // line always lands exactly on-center, regardless of spacing/font changes.
  useEffect(() => {
    const measure = () => {
        const list = listRef.current;
        const firstDot = dotRefs.current[0];
        const lastDot = dotRefs.current[sections.length - 1];
        const activeDot = dotRefs.current[activeIndex];
        if (!list || !firstDot || !lastDot || !activeDot) return;

        const listBox = list.getBoundingClientRect();
        const firstBox = firstDot.getBoundingClientRect();
        const lastBox = lastDot.getBoundingClientRect();
        const activeBox = activeDot.getBoundingClientRect();

        const top = firstBox.top - listBox.top + firstBox.height / 2;
        const bottom = lastBox.top - listBox.top + lastBox.height / 2;
        const activeCenter = activeBox.top - listBox.top + activeBox.height / 2;

        setTrackBounds({ top, bottom });
        setProgressHeight(activeCenter - top);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside className="sticky top-28">
      <div ref={listRef} className="relative flex flex-col">
        {/* Track */}
       <div
        className="absolute left-[12px] w-px bg-gray-200 dark:bg-gray-800"
        style={{ top: trackBounds.top, height: Math.max(trackBounds.bottom - trackBounds.top, 0) }}
        />

        <div
        className="absolute left-[12px] w-px bg-green-600 transition-[height] duration-500 ease-out motion-reduce:transition-none"
        style={{ top: trackBounds.top, height: Math.max(progressHeight, 0) }}
        />

        {sections.map((section, index) => {
          const isActive = index === activeIndex;
          const isCompleted = index < activeIndex;

          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              aria-current={isActive ? "true" : undefined}
              className="group relative z-10 flex items-center gap-4 py-6 text-left outline-none"
            >
              {/* Circle */}
              <span
                ref={(el) => {
                  dotRefs.current[index] = el;
                }}
                className={[
                          'relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-[11px] font-bold transition-colors',
                          isActive
                            ? 'border-primary bg-primary text-white'
                            : isCompleted
                              ? 'border-primary bg-primary text-white'
                              : 'border-gray-300 bg-secondary text-gray-400 dark:border-gray-700 dark:bg-dark',
                        ].join(' ')}
                      >
                {index + 1}
              </span>

              {/* Label */}
              <span
                className={[
                          'text-[13px] font-semibold leading-snug transition-colors',
                          isActive
                            ? 'text-gray-900 dark:text-white'
                            : 'text-gray-500 group-hover:text-gray-800 dark:text-gray-400 dark:group-hover:text-gray-200',
                        ].join(' ')}
                      >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}