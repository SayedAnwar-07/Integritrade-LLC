import Image from "next/image";
import Link from "next/link";

import Iso9001 from "@/public/ISO/ISO-9001.webp";
import Iso14001 from "@/public/ISO/ISO-14001.webp";
import Iso27001 from "@/public/ISO/ISO-27001.webp";
import Iso45001 from "@/public/ISO/ISO-45001.webp";
import R2v3 from "@/public/ISO/R2V3_certified_logo.webp";

import {
  Truck,
  ShieldCheck,
  HardDriveDownload,
  Recycle,
  FileCheck2,
} from "lucide-react";

import BookingForm from "./BookingForm";

const processSteps = [
  {
    icon: Truck,
    title: "Request a Pickup",
    text: "Tell us what assets you need removed, your location, quantity, and timeline.",
  },
  {
    icon: ShieldCheck,
    title: "We Collect & Track Assets",
    text: "Your equipment is securely collected and tracked with proper chain-of-custody.",
  },
  {
    icon: HardDriveDownload,
    title: "Data Is Destroyed",
    text: "Devices are processed through secure destruction and certified erasure workflows.",
  },
  {
    icon: Recycle,
    title: "Recycle & Recovery",
    text: "Reusable assets are recovered while non-reusable equipment is responsibly recycled.",
  },
  {
    icon: FileCheck2,
    title: "Documentation Delivered",
    text: "Receive complete reports, certificates, and compliance documentation.",
  },
];

const certs = [
  {
    image: R2v3,
    name: "R2v3",
    href: "https://sustainableelectronics.org/find-an-r2-certified-facility/?appids=001UQ000001w7S2YAI&tab=2&backto=https://sustainableelectronics.org/find-an-r2-certified-facility/?type=byalias&alias=integritrade",
    external: true,
  },
  {
    image: Iso27001,
    name: "ISO 27001",
    href: "/certifications",
  },
  {
    image: Iso9001,
    name: "ISO 9001",
    href: "/certifications",
  },
  {
    image: Iso14001,
    name: "ISO 14001",
    href: "/certifications",
  },
  {
    image: Iso45001,
    name: "ISO 45001",
    href: "/certifications",
  },
];

export default function ContactDescription() {
  return (
    <section>
      <div className="relative mx-auto max-w-7xl mt-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5">

             {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-4 pb-8 border-b border-stone-200 dark:border-slate-700/60">
                <div className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-slate-400">
                  <svg className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">No-obligation quote</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-slate-400">
                  <svg className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">24-hour response</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-slate-400">
                  <svg className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Fully certified team</span>
                </div>
              </div>

            {/* Certifications */}
            <div
              className="
              mt-10"
            >

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {certs.map(({ image, name, href, external }) => {
                  const content = (
                    <div
                      className="
                      rounded-md
                      bg-white
                      p-4
                      border border-slate-100 dark:border-white/5
                      hover:scale-105
                      transition-all duration-300
                      flex flex-col items-center justify-center h-full
                    "
                    >
                      <div className="relative h-12 w-16">
                        <Image
                          src={image}
                          alt={name}
                          fill
                          className="object-contain"
                        />
                      </div>

                      <span
                        className="
                        mt-2 text-xs font-semibold text-center
                        text-slate-700
                      "
                      >
                        {name}
                      </span>
                    </div>
                  );

                  if (external) {
                    return (
                      <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <Link key={name} href={href}>
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Process */}
            <div className="mt-10 lg:mt-14">
              <div className="lg:col-span-6">
                <div className="mt-10">
                  <ol className="relative space-y-8">
                    {/* vertical line */}
                    <span
                      className="absolute left-[19px] top-5 bottom-5 w-px bg-secondary dark:bg-dark"
                      aria-hidden="true"
                    />

                    {processSteps.map(({ icon: Icon, title, text }) => (
                      <li key={title} className="relative flex gap-5">
                        {/* icon */}
                        <span className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-700 dark:border-emerald-500/30 dark:bg-dark-secondary dark:text-emerald-400 shadow-lg">
                          <Icon size={18} strokeWidth={2} />
                        </span>

                        {/* content */}
                        <div className="flex-1 pt-1">
                          <h3 className="mb-1 text-[17px] font-semibold text-stone-900 dark:text-white">
                            {title}
                          </h3>

                          <p className="max-w-[420px] text-sm leading-7 text-stone-600 dark:text-slate-300">
                            {text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

             <p className="mt-6 max-w-md text-sm leading-6 text-stone-600 dark:text-slate-300 text-justify">
                All assets are tracked, sanitized, and processed following certified
                industry compliance and environmental standards.
             </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7">
            <div className="lg:sticky lg:top-24">
              <div
                className="
                rounded-md
                border border-slate-200 dark:border-white/10
                bg-white/70 dark:bg-white/[0.04]
                backdrop-blur-2xl
                p-6 sm:p-8 lg:p-10
                shadow-[0_20px_60px_rgba(15,23,42,0.08)]
                dark:shadow-[0_0_70px_rgba(0,0,0,0.45)]
              "
              >
                {/* Header */}
                <div className="mb-8">

                  <h2
                    className="
                    text-3xl sm:text-4xl
                    font-bold
                    text-slate-900 dark:text-white
                  "
                  >
                    Request Your Pickup
                  </h2>

                  <p
                    className="
                    mt-4 max-w-2xl
                    text-sm sm:text-base
                    leading-relaxed
                    text-slate-600 dark:text-slate-300
                  "
                  >
                    Submit your details and our team will contact you within
                    one business day with the next step.
                  </p>
                </div>

                {/* FORM */}
                <BookingForm />
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>
    </section>
  );
}