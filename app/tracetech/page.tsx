import type { Metadata } from "next";
import Image from "next/image";

import {
  Eye,
  FileCheck2,
  MessageSquare,
  ScanLine,
  CircleDollarSign,
  Leaf,
  Check,
  Camera,
  Video,
  Radio,
  UserCheck,
  Palette,
  Plug,
  Users,
} from "lucide-react";

import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollLoader from "@/components/shared/ScrollLoader";
import IndustryFAQ from "@/components/industries/IndustryFAQ";
import FAQSchema from "@/components/industries/FAQSchema";

export const metadata: Metadata = {
  title:
    "TraceTech ITAD Client Portal | Real-Time Asset Tracking & Certificates | Integritrade",
  description:
    "TraceTech gives Integritrade clients real-time ITAD project visibility, batch or individual certificates, service-request messaging, asset controls, value reporting, and CO2e insights at no additional cost.",
  keywords: [
    "ITAD client portal",
    "IT asset tracking software",
    "real-time ITAD tracking",
    "Certificate of Destruction portal",
    "Certificate of Erasure portal",
    "ITAD service request management",
    "IT asset buyback reporting",
    "ITAD sustainability reporting",
    "enterprise ITAD software",
  ],
  alternates: { canonical: "/tracetech/" },
  openGraph: {
    title: "TraceTech ITAD Client Portal | Real-Time Asset Tracking & Certificates",
    description:
      "Real-time ITAD project visibility, on-demand certificates, service-request messaging, asset controls, value reporting, and CO2e insights — included at no additional cost for Integritrade clients.",
    url: "https://integritradellc.com/tracetech/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TraceTech ITAD Client Portal | Integritrade",
    description:
      "Real-time ITAD project visibility, certificates, messaging, value reporting, and CO2e insights — included at no additional cost for Integritrade clients.",
  },
};

const FEATURES = [
  {
    icon: Eye,
    title: "Real-time project and asset visibility",
    desc: "Follow project and asset status after pickup — receipt, inventory, sanitization, testing, remarketing, recycling, or physical destruction. Your equipment doesn't disappear into a black box once it leaves your site.",
  },
  {
    icon: FileCheck2,
    title: "On-demand batch or individual certificates",
    desc: "Retrieve available batch-level or individual asset-level Certificates of Destruction and Certificates of Erasure in real time as they are issued. Access the documentation needed for project records, compliance files, and internal reporting.",
  },
  {
    icon: MessageSquare,
    title: "Service requests, questions, and amendments",
    desc: "Use the TraceTech message center to request future service, ask project questions, share instructions, or submit approved amendments. Communication stays connected to the relevant account and service record.",
  },
  {
    icon: ScanLine,
    title: "Your requirements follow the asset",
    desc: "Connect client-approved requirements to a project and asset record. When an asset tag is scanned, TraceTech can surface the required next step — erasure, destruction, remarketing, reuse evaluation, or recycling.",
  },
  {
    icon: CircleDollarSign,
    title: "Financial and value-recovery visibility",
    desc: "View direct-buyback quotes, revenue-share information, and disposition results for eligible equipment. TraceTech makes value recovery easier to follow after devices are evaluated, tested, and routed.",
  },
  {
    icon: Leaf,
    title: "Sustainability and CO2e reporting",
    desc: "Review estimated CO2e impact associated with documented reuse, remarketing, recycling, and destruction pathways. These estimates help sustainability teams understand documented lifecycle outcomes.",
  },
];

const WORKFLOW = [
  {
    label: "Asset received",
    line: "Customer asset tag and Integritrade tracking tag are connected.",
  },
  {
    label: "Requirement identified",
    line: "The project's approved handling instruction is associated with the asset.",
  },
  {
    label: "Correct workflow shown",
    line: "The next approved action is visible at scan time.",
  },
  {
    label: "Outcome documented",
    line: "Processing status and available records are added to the project view.",
  },
];

const EVIDENCE = [
  { icon: Camera, label: "Photographed" },
  { icon: Video, label: "Recorded" },
  { icon: Radio, label: "Live-streamed" },
  { icon: UserCheck, label: "Witnessed" },
];

const FLEXIBLE = [
  {
    icon: Palette,
    title: "Custom organization branding",
    desc: "TraceTech can support client-specific branding so the portal, project records, and communications align more closely with your organization's program.",
  },
  {
    icon: Plug,
    title: "Third-party service integration",
    desc: "Integration is available for organizations that need TraceTech to work alongside existing systems, workflows, or reporting. Scope is assessed by project and technical requirements.",
  },
  {
    icon: Users,
    title: "Teams with different priorities",
    desc: "IT teams can follow assets and requests. Security and compliance teams can retrieve documentation. Finance can review buyback or revenue-share results. Sustainability can review CO2e reporting.",
  },
];

const FAQS = [
  {
    question: "Is TraceTech included with Integritrade services?",
    answer:
      "Yes. TraceTech is included at no additional cost for Integritrade clients. Authorized client users can access applicable project status, service requests, documentation, and reporting through the platform.",
  },
  {
    question: "Can clients retrieve individual Certificates of Destruction through TraceTech?",
    answer:
      "TraceTech can provide access to available batch-level or individual asset-level Certificates of Destruction and Certificates of Erasure as they are issued. The exact documentation available depends on the services performed and project scope.",
  },
  {
    question: "Can a client send a change request or new instruction through TraceTech?",
    answer:
      "Yes. The TraceTech message center can be used for future service requests, project questions, approved amendments, and other account communication. Integritrade reviews and applies approved requirements according to the project workflow.",
  },
  {
    question: "Can TraceTech show different instructions for different assets in the same ITAD project?",
    answer:
      "Yes. TraceTech can associate different approved handling instructions with a project and applicable asset records. Requirements may include erasure, physical destruction, reuse evaluation, remarketing, recycling, or another client-approved outcome.",
  },
  {
    question: "Can TraceTech show buyback or revenue-share information?",
    answer:
      "Yes. For eligible value-recovery projects, TraceTech can provide visibility into applicable direct-buyback quotes, revenue-share information, and documented disposition results.",
  },
  {
    question: "Can TraceTech provide video or photo evidence of physical destruction?",
    answer:
      "For applicable physical-destruction projects, photographed, recorded, live-streamed, and witnessed-destruction options may be available. Evidence level, delivery method, and pricing are agreed upon based on project scope.",
  },
  {
    question: "Does TraceTech support custom branding or third-party system integration?",
    answer:
      "Yes. Integritrade can support custom organization branding and evaluate third-party service integrations based on the client's technical needs, workflow, and project scope.",
  },
];

const PROOF_STRIP = [
  "Real-time asset status",
  "On-demand certificates",
  "Service & change-request messaging",
  "Project-specific handling controls",
];

// Sanitized client-portal screenshots (test data only) shown in the showcase.
// width/height are each image's native aspect so cards size to the image.
const SHOWCASE = [
  {
    src: "/images/tracetech/reports.webp",
    w: 1794,
    h: 1232,
    title: "Reports & ESG summaries",
    desc: "Monthly summaries, per-job reports, and a downloadable environmental-impact certificate for your own sustainability reporting.",
  },
  {
    src: "/images/tracetech/certificates.webp",
    w: 1816,
    h: 819,
    title: "Certificates of Destruction & Erasure",
    desc: "Batch-level or individual asset-level certificates, downloadable as they are issued.",
  },
];

export default function TraceTechPage() {
  return (
    <main className="min-h-screen bg-secondary dark:bg-dark transition-colors duration-300">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-4 pt-16 lg:pt-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
          <ScrollLoader>
            <div>
              <span className="font-mono text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-emerald-800 dark:text-emerald-400">
                TraceTech Client Platform
              </span>

              <h1 className="mt-5 font-serif text-3xl leading-[1.1] tracking-tight text-stone-900 dark:text-white sm:text-4xl lg:text-5xl">
                Your ITAD project should not become a black box after pickup.
              </h1>

              <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-stone-700 dark:text-slate-300">
                TraceTech is Integritrade&apos;s proprietary ITAD client portal and processing
                platform. It connects your assets, service requirements, project records,
                documentation, and value-recovery results in one place — giving authorized teams
                real-time visibility from pickup through documented disposition.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                <Check className="h-4 w-4" />
                Included at no additional cost for Integritrade clients
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <PrimaryButton href="/service-book/" testId="tracetech-walkthrough" className="text-sm py-3">
                  Request a TraceTech Walkthrough
                </PrimaryButton>
                <OutlineButton href="/service-book/" testId="tracetech-service-request" className="text-sm py-3">
                  Schedule a Service Request
                </OutlineButton>
              </div>

              <ul className="mt-8 grid grid-cols-1 gap-y-2.5 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
                {PROOF_STRIP.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2.5 text-[13px] leading-snug text-stone-600 dark:text-slate-400"
                  >
                    <span className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollLoader>

          <ScrollLoader delay={0.1}>
            <div className="relative lg:-mr-8 xl:-mr-20">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/20 via-emerald-400/5 to-blue-500/15 blur-3xl"
              />
              <Image
                src="/images/tracetech/dashboard.webp"
                alt="TraceTech client dashboard showing project status, asset disposition, certificates, and estimated CO2e impact (sample data)"
                width={1568}
                height={1474}
                priority
                sizes="(max-width:1024px) 100vw, 640px"
                className="relative h-auto w-full rounded-xl border border-black/5 shadow-2xl ring-1 ring-black/5 dark:border-white/10 dark:ring-white/10"
              />
            </div>
          </ScrollLoader>
        </div>
      </section>

      {/* ── Feature cards ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-4 pt-24 sm:px-6 lg:px-8">
        <ScrollLoader>
          <SectionHeader
            eyebrow="One Project. One Client View."
            title="See the work. Manage the next step. Retrieve the record."
            description="TraceTech brings information that is usually scattered across emails, spreadsheets, service tickets, and final reports into one organized client experience — a clear view of what is happening to your retired technology and what to do next."
          />
        </ScrollLoader>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <ScrollLoader key={title} delay={i * 0.06}>
              <div className="h-full rounded-md bg-white dark:bg-dark-secondary p-7 shadow-lg">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-serif text-lg text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-stone-700 dark:text-gray-300">{desc}</p>
              </div>
            </ScrollLoader>
          ))}
        </div>
        <p className="mt-5 text-xs text-gray-500 dark:text-gray-400">
          CO2e figures are estimates based on documented disposition pathways and available project data.
        </p>
      </section>

      {/* ── Inside the portal (real, sanitized screenshots) ───────────── */}
      <section className="mx-auto max-w-[1400px] px-4 pt-24 sm:px-6 lg:px-8">
        <ScrollLoader>
          <SectionHeader
            eyebrow="Inside the Portal"
            title="A closer look at the client experience."
            description="Real views from the TraceTech client portal, shown with test data only — no customer information."
          />
        </ScrollLoader>

        <div className="mt-12 grid items-start gap-x-8 gap-y-12 md:grid-cols-2">
          {SHOWCASE.map(({ src, w, h, title, desc }) => (
            <figure key={title}>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-tr from-primary/15 via-transparent to-blue-500/10 blur-2xl"
                />
                <Image
                  src={src}
                  alt={`${title} — TraceTech client portal (sample data)`}
                  width={w}
                  height={h}
                  sizes="(max-width:768px) 100vw, 620px"
                  className="relative h-auto w-full rounded-xl border border-black/5 shadow-xl ring-1 ring-black/5 dark:border-white/10 dark:ring-white/10"
                />
              </div>
              <figcaption className="mt-5 px-1">
                <h3 className="font-serif text-lg text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-stone-700 dark:text-gray-300">{desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Workflow ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-4 pt-24 sm:px-6 lg:px-8">
        <ScrollLoader>
          <SectionHeader
            eyebrow="Client Requirements at the Point of Work"
            title="One project can have different approved outcomes. TraceTech keeps them clear."
            description="A client may require physical destruction for specified media, erasure and reuse evaluation for eligible laptops, remarketing for approved equipment, and recycling for non-recoverable material. TraceTech associates those requirements with the project and each asset record, and surfaces the relevant instruction when Integritrade personnel scan an asset tag."
          />
        </ScrollLoader>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORKFLOW.map((w, i) => (
            <ScrollLoader key={w.label} delay={i * 0.08}>
              <div className="h-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-secondary p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-serif text-lg text-gray-900 dark:text-white">{w.label}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-stone-700 dark:text-gray-300">{w.line}</p>
              </div>
            </ScrollLoader>
          ))}
        </div>
      </section>

      {/* ── Evidence (dark contrasting section) ───────────────────────── */}
      <section className="mt-24 bg-stone-900 dark:bg-black/40">
        <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 lg:px-8">
          <ScrollLoader>
            <span className="font-mono text-[0.7rem] font-extrabold uppercase tracking-[0.22em] text-emerald-400">
              When You Need More Than a Final Certificate
            </span>
            <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight tracking-tight text-white sm:text-4xl">
              Add the evidence level your project requires.
            </h2>
            <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-stone-300">
              Some data-destruction projects require more than a final Certificate of Destruction. For
              applicable physical-destruction jobs, Integritrade can provide photographed, recorded,
              live-streamed, or witnessed destruction based on the scope and agreed service level.
              TraceTech keeps applicable evidence links and project documentation connected to the
              relevant client record.
            </p>
          </ScrollLoader>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {EVIDENCE.map(({ icon: Icon, label }, i) => (
              <ScrollLoader key={label} delay={i * 0.06}>
                <div className="flex flex-col items-center gap-3 rounded-md border border-white/10 bg-white/5 p-6 text-center">
                  <Icon className="h-6 w-6 text-emerald-400" strokeWidth={1.6} />
                  <span className="text-sm font-semibold text-white">{label}</span>
                </div>
              </ScrollLoader>
            ))}
          </div>

          <p className="mt-6 text-xs text-stone-400">
            Evidence options are based on project scope, agreed service level, and applicable operational requirements.
          </p>
        </div>
      </section>

      {/* ── Flexible ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-4 pt-24 sm:px-6 lg:px-8">
        <ScrollLoader>
          <SectionHeader
            eyebrow="Flexible by Design"
            title="A client portal that works with your process."
          />
        </ScrollLoader>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {FLEXIBLE.map(({ icon: Icon, title, desc }, i) => (
            <ScrollLoader key={title} delay={i * 0.08}>
              <div>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-primary text-primary">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-serif text-xl text-gray-900 dark:text-white">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-stone-700 dark:text-gray-300">{desc}</p>
              </div>
            </ScrollLoader>
          ))}
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <ScrollLoader>
          <div className="rounded-xl bg-white dark:bg-dark-secondary shadow-lg p-8 md:p-12 text-center">
            <h2 className="mx-auto max-w-2xl font-serif text-2xl md:text-3xl leading-snug text-stone-900 dark:text-white">
              TraceTech is included with your Integritrade program.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-stone-700 dark:text-slate-300">
              Integritrade clients receive TraceTech at no additional cost as part of a more
              transparent ITAD experience. From a single pickup to a multi-site technology refresh,
              the platform helps keep project status, requests, requirements, documentation, value
              recovery, and reporting in view.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <PrimaryButton href="/service-book/" testId="tracetech-walkthrough-2" className="text-sm py-3">
                Request a TraceTech Walkthrough
              </PrimaryButton>
              <OutlineButton href="/service-book/" testId="tracetech-service-request-2" className="text-sm py-3">
                Schedule a Service Request
              </OutlineButton>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-gray-500 dark:text-gray-400">
              Integritrade is based in Fresno, California and supports ITAD, data destruction,
              electronics recycling, and asset recovery projects across California and the Western
              United States.
            </p>
          </div>
        </ScrollLoader>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1400px] px-4 pb-24 sm:px-6 lg:px-8">
        <FAQSchema faqs={FAQS} />
        <IndustryFAQ faqs={FAQS} />
      </section>
    </main>
  );
}
