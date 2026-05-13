import { Info } from "lucide-react";
import HardwareHandling from "@/public/hardwareHandling.jpeg";
import Image from "next/image";
import ScrollLoader from "../shared/ScrollLoader";
import SectionHeader from "../shared/SectionHeader";

const processSteps = [
  {
    index:1,
    step: "01",
    title: "Request a Pickup",
    text: "Tell us what assets you need removed, your location, quantity, and timeline. Our team reviews the request and prepares the right next step.",
  },
  {
    index:2,
    step: "02",
    title: "We Collect & Track Assets",
    text: "Your equipment is picked up and tracked from the moment it leaves your site, helping maintain clear chain-of-custody records.",
  },
  {
    index:3,
    step: "03",
    title: "Data Is Destroyed",
    text: "Data-bearing devices are processed through controlled destruction or erasure workflows to reduce risk and protect sensitive information.",
  },
  {
    index:4,
    step: "04",
    title: "Recycled or Recovered",
    text: "Usable assets are evaluated for resale or recovery value. Non-reusable items are responsibly recycled through proper downstream channels.",
  },
  {
    index:5,
    step: "05",
    title: "Reports & Certificates Delivered",
    text: "You receive final documentation such as asset reports, chain-of-custody records, and certificates for your internal or audit records.",
  },
];

export default function WhatHappensNext() {
  return (
    <section className="mt-24" aria-labelledby="next-steps-heading">
       {/* Header */}
        <ScrollLoader>
            <SectionHeader
                eyebrow="How It Works"
                title="A clear process from pickup to final documentation."
                description="From your first request to the final report, every step is structured
                  to give your team clarity, accountability, and confidence. We collect,
                  track, process, recycle or recover assets, then provide the documents
                  you need for business records."
            />
        </ScrollLoader>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mt-12">
          {/* Left: Process steps */}
          <div className="lg:col-span-6">
            <div className="mt-20">
              <ol className="relative space-y-8">
                <span
                  className="absolute left-[15px] top-3 bottom-3 w-px bg-stone-200 dark:bg-slate-700/60"
                  aria-hidden="true"
                />

                {processSteps.map(({ step, title, text,index }) => (
                   <ScrollLoader key={title} delay={index * 0.08}>
                      <li key={step} className="relative flex gap-5">
                        <span className="relative z-10 flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f3ee] dark:bg-[#0a1f28] border-2 border-emerald-600 dark:border-emerald-400 text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
                          {step}
                        </span>

                        <div className="flex-1 pt-0.5">
                          <h3 className="font-semibold text-base text-stone-900 dark:text-white mb-1">
                            {title}
                          </h3>

                          <p className="text-sm leading-relaxed text-stone-600 dark:text-slate-300 text-justify">
                            {text}
                          </p>
                        </div>
                      </li>
                  </ScrollLoader>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: Image */}
          
          <div className="lg:col-span-6">
            <ScrollLoader>
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-md overflow-hidden">
                  <Image
                    src={HardwareHandling}
                    alt="IT asset disposition process with technician handling server hardware"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-8 ml-13 rounded-md  bg-amber-50 dark:bg-amber-900/10 px-5 py-4">
                    <div className="flex items-start gap-3">
                      <Info
                        className="mt-0.5 h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0"
                        aria-hidden="true"
                      />

                      <p className="text-sm text-stone-700 dark:text-slate-200 leading-relaxed">
                        <span className="font-semibold text-stone-900 dark:text-white">
                          What you receive:
                        </span>{" "}
                        asset reports, chain-of-custody records, and certificates when
                        required for your project.
                      </p>
                    </div>
                </div>
            </ScrollLoader>
          </div>
        </div>
    </section>
  );
}