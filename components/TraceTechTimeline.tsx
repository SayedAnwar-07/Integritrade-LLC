"use client";

import { useEffect, useRef, useState } from "react";
import {
  Truck,
  ScanLine,
  ShieldCheck,
  Recycle,
  FileCheck2,
} from "lucide-react";

const timelineItems = [
  {
    stage: "Pickup",
    icon: Truck,
    title: "Real-time asset visibility",
    content:
      "TraceTech gives your team access to the status of devices and projects after pickup, so the process does not become a black box once the truck leaves. See where assets are in the workflow, access available reporting, and follow the project through documented disposition.",
  },
  {
    stage: "Scan",
    icon: ScanLine,
    title: "Instructions that follow the asset",
    content:
      "Client requirements are linked to the correct project and asset record. If a project requires all MacBooks to be physically destroyed, that rule is surfaced to the technician when the asset tag is scanned. The workflow helps keep processing aligned with the customer's approved disposition instructions.",
  },
  {
    stage: "Verify",
    icon: ShieldCheck,
    title: "SOP guidance at the point of scan",
    content:
      "The right instruction is available when the technician needs it. TraceTech can direct personnel to the relevant SOPs, identification guides, and required checks before work proceeds. That includes prompts to verify storage media that may not be obvious at first glance, such as distinguishing a possible SSD from a Wi-Fi card, and checking commonly overlooked data-risk areas in printers and MFPs, including scanner beds and paper trays.",
  },
  {
    stage: "Process",
    icon: Recycle,
    title: "Fewer avoidable processing errors",
    content:
      "TraceTech does not replace trained personnel. It supports them by reducing avoidable manual errors, standardizing project instructions, and documenting the required workflow at the point of handling. Fewer missed instructions and fewer unnecessary handoffs mean a more controlled ITAD process.",
  },
  {
    stage: "Certify",
    icon: FileCheck2,
    title: "Service requests, documentation, and impact reporting in one portal",
    content:
      "Authorized clients can submit and manage service requests, plan future pickups, retrieve available certificates and reports, and view estimated CO2e impact connected to documented reuse and recycling pathways. The result is a clearer operational record for IT, compliance, procurement, and sustainability teams.",
  },
];

export default function TraceTechTimeline() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(() =>
    new Array(timelineItems.length).fill(false)
  );

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          const isIntersecting = entry.isIntersecting;
          setVisible((prev) => {
            if (prev[i] === isIntersecting) return prev;
            const next = [...prev];
            next[i] = isIntersecting;
            return next;
          });
        },
        { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
      );
      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        {timelineItems.map((item, i) => {
          const Icon = item.icon;
          const isVisible = visible[i];
          const isLast = i === timelineItems.length - 1;

          return (
            <div
              key={item.stage}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="flex gap-6 sm:gap-10"
            >
              <div className="flex w-16 flex-shrink-0 flex-col items-center sm:w-20">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 ${
                    isVisible
                      ? "border-primary bg-primary text-white"
                      : "border-gray-300 bg-secondary text-gray-400 dark:border-gray-700 dark:bg-dark"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <span className="mt-2 font-mono text-[11px] tracking-wide text-gray-500 dark:text-gray-400">
                  {item.stage}
                </span>

                {!isLast && (
                  <div className="relative mt-2 w-px flex-1 bg-gray-300 dark:bg-gray-700">
                    <div
                      className={`absolute inset-x-0 top-0 w-px origin-top bg-primary transition-transform duration-700 ease-out ${
                        visible[i + 1] ? "scale-y-100" : "scale-y-0"
                      }`}
                      style={{ height: "100%" }}
                    />
                  </div>
                )}
              </div>

              <div
                className={`max-w-5xl pb-16 transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-6 opacity-0"
                }`}
              >
                <div className="flex flex-col md:flex-row gap-5">
                    <h2 className="font-serif text-xl font-semibold leading-snug text-gray-900 dark:text-white md:min-w-[250px]">
                        {item.title}
                    </h2>
                    <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                        {item.content}
                    </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}