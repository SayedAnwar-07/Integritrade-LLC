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

/** lucide-react ships no brand marks, so the WhatsApp glyph lives here. */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.47 9.47 0 01-4.83-1.32l-.35-.21-3.59.94.96-3.5-.23-.36a9.44 9.44 0 01-1.45-5.05c0-5.22 4.26-9.47 9.5-9.47a9.42 9.42 0 016.71 2.78 9.38 9.38 0 012.78 6.7c0 5.22-4.26 9.47-9.49 9.47zM20.46 3.53A11.83 11.83 0 0012.05.05C5.5.05.18 5.36.18 11.9c0 2.09.55 4.13 1.59 5.93L.08 24l6.32-1.65a11.9 11.9 0 005.65 1.44h.01c6.54 0 11.86-5.32 11.86-11.85a11.77 11.77 0 00-3.46-8.4z" />
    </svg>
  );
}

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

              <a
                href="https://wa.me/message/C67JNSG2GFHBA1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-800 transition-colors hover:text-primary dark:text-slate-200"
              >
                <WhatsAppGlyph className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <span className="text-sm font-semibold">
                  Message us on WhatsApp
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
