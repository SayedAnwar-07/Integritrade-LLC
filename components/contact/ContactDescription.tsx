import Image from "next/image";
import Link from "next/link";

import Iso9001 from "@/public/ISO/ISO-9001.webp";
import Iso14001 from "@/public/ISO/ISO-14001.webp";
import Iso27001 from "@/public/ISO/ISO-27001.webp";
import Iso45001 from "@/public/ISO/ISO-45001.webp";
import R2v3 from "@/public/ISO/R2V3_certified_logo.webp";
import Nist from "@/public/ISO/nist-800-88.jpg";

import {
  Truck,
  ShieldCheck,
  HardDriveDownload,
  Recycle,
  FileCheck2,
  Phone,
  Mail,
} from "lucide-react";

import BookingForm from "./BookingForm";

const processSteps = [
  {
    icon: Truck,
    title: "We Come to You",
    text: "Schedule a pickup at your site - no hauling, no hassle",
  },
  {
    icon: ShieldCheck,
    title: "Tracked Every Step",
    text: "Full chain-of-custody from your door to final processing.",
  },
  {
    icon: HardDriveDownload,
    title: "Data Gone for Good",
    text: "NIST 800-88 certified erasure or physical destruction.",
  },
  {
    icon: Recycle,
    title: "Responsible Lifecycle Management",
    text: "R2v3-Responsible Recycling aligned with state and federal environmental laws.",
  },
  {
    icon: FileCheck2,
    title: "Proof in Writing",
    text: "Certificates of destruction and audit-ready reports available.",
  },
];

const certs = [
  {
    image: R2v3,
    name: "R2v3",
    href: "https://sustainableelectronics.org/find-an-r2-certified-facility/?appids=001UQ000001w7S2YAI&tab=2&backto=https://sustainableelectronics.org/find-an-r2-certified-facility/?type=byalias&alias=integritrade",
    external: true,
  },
  { image: Iso27001, name: "ISO 27001", href: "/certifications" },
  { image: Iso9001, name: "ISO 9001", href: "/certifications" },
  { image: Iso14001, name: "ISO 14001", href: "/certifications" },
  { image: Iso45001, name: "ISO 45001", href: "/certifications" },
  { image: Nist, name: "NIST 800-88", href: "/certifications" },
];

const trustPoints = [
  "No-obligation quote",
  "24-hour response",
  "Fully certified team",
  "100% Data Destruction Guarantee",
];

function Check() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function ContactDescription() {
  return (
    <section>
      <div className="relative mx-auto max-w-7xl">
        {/* ── Intro left, form right ───────────────────────────── */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — headline + short pitch */}
          <div className="lg:col-span-5">
            <p className="mb-5 font-mono text-[0.95rem] font-bold uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400">
              Get Started
            </p>

            <h1 className="font-serif text-4xl leading-[1.08] tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Let&apos;s start the conversation.
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Whether you need basic recycling, certified data destruction, full
              IT asset disposition, or a complete data center decommission - and
              whether you&apos;re in San Francisco, Fresno, Los Angeles, San
              Diego, or anywhere in between - our team handles it end to end.
            </p>

            {/* Capabilities / guarantees — one consistent list */}
            <ul className="mt-8 space-y-3">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  <Check />
                  {point}
                </li>
              ))}
            </ul>

            {/* Certifications — sit directly under the capability list */}
            <div className="mt-10 border-t border-stone-200 pt-8 dark:border-slate-700/60">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Our Certifications &amp; Standards
              </h2>

              <div className="mt-5 grid grid-cols-3 items-stretch gap-3">
                {certs.map(({ image, name, href, external }) => {
                  const content = (
                    <div className="flex h-full min-h-[104px] flex-col items-center justify-between rounded-md border border-slate-100 bg-white px-2.5 py-3.5 transition-all duration-300 hover:scale-105 dark:border-white/5">
                      <div className="relative flex h-10 w-full items-center justify-center">
                        <Image src={image} alt={name} fill className="object-contain" />
                      </div>
                      <span className="mt-2.5 text-center text-[10.5px] font-semibold leading-tight text-slate-700">
                        {name}
                      </span>
                    </div>
                  );

                  return external ? (
                    <a key={name} href={href} target="_blank" rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    <Link key={name} href={href}>
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Direct contact */}
            <div className="mt-10 space-y-4 border-t border-stone-200 pt-8 dark:border-slate-700/60">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Prefer to reach out directly?
              </p>

              <a
                href="tel:+15593254813"
                className="flex items-center gap-3 text-slate-800 transition-colors hover:text-primary dark:text-slate-200"
              >
                <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-semibold">(559) 325-4813</span>
              </a>

              <a
                href="mailto:info@integritradeLLC.com"
                className="flex items-center gap-3 text-slate-800 transition-colors hover:text-primary dark:text-slate-200"
              >
                <Mail className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-semibold">
                  info@integritradeLLC.com
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT — the form */}
          <div className="lg:col-span-7">
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
              {/* Tells the visitor what the box is for, before any fields */}
              <div className="mb-8 border-b border-stone-200 pb-6 dark:border-slate-700/60">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                  Tell us about your project
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Share a few details and our team will get back to you within
                  one business day with next steps.
                </p>
              </div>

              <BookingForm />

              <p className="custom-text-center mt-6 border-t border-stone-200 pt-5 text-[13px] leading-relaxed text-slate-500 dark:border-slate-700/60 dark:text-slate-400">
                By submitting this form, you acknowledge that you have read and
                agree to the{" "}
                <Link
                  href="/privacy/"
                  className="font-semibold text-blue-500 hover:underline"
                >
                  Integritrade LLC Privacy Policy
                </Link>
                . We will only use your information to respond to your inquiry or
                process your service request.
              </p>
            </div>
          </div>
        </div>

        {/* ── How it works ─────────────────────────────────────── */}
        <div className="mt-20 border-t border-stone-200 pt-14 dark:border-slate-700/60">
          <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            What Happens Next
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-emerald-200 bg-white text-emerald-700 shadow-sm dark:border-emerald-500/30 dark:bg-dark-secondary dark:text-emerald-400">
                  <Icon size={15} strokeWidth={2} />
                </span>

                <h3 className="mb-1.5 text-[15px] font-semibold text-stone-900 dark:text-white">
                  {title}
                </h3>

                <p className="text-sm leading-6 text-stone-600 dark:text-slate-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
