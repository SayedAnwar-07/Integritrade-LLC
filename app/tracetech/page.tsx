import type { Metadata } from "next";
import Image from "next/image";

import {
  ArrowUpRight,
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
  Box,
  ShieldCheck,
  ScanText,
  FileText,
} from "lucide-react";

import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import ScrollLoader from "@/components/shared/ScrollLoader";
import ApprovedOutcomes from "@/public/images/tracetech/approved-outcomes.webp";
import ApprovedOutcomesDark from "@/public/images/tracetech/approved-outcomes-dark.webp";
import IndustryFAQ from "@/components/industries/IndustryFAQ";
import FAQSchema from "@/components/industries/FAQSchema";
import SectionFloatNav from "@/components/shared/SectionFloatNav";
import Parallax from "@/components/shared/Parallax";

export const metadata: Metadata = {
  title: { absolute: "TraceTech ITAD Client Portal | Real-Time Asset Tracking" },
  description:
    "See every ITAD project in real time, download certificates on demand and track value recovery and CO2e. At no additional cost for Integritrade clients.",
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
      "Real-time ITAD project visibility, on-demand certificates, service-request messaging, asset controls, value reporting, and CO2e insights, included at no additional cost for Integritrade clients.",
    url: "https://integritradellc.com/tracetech/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TraceTech ITAD Client Portal | Integritrade",
    description:
      "Real-time ITAD project visibility, certificates, messaging, value reporting, and CO2e insights, included at no additional cost for Integritrade clients.",
  },
};

const FEATURES = [
  {
    icon: Eye,
    title: "Real-time project and asset visibility",
    desc: "Follow project and asset status after pickup: receipt, inventory, sanitization, testing, remarketing, recycling, or physical destruction. Your equipment doesn't disappear into a black box once it leaves your site.",
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
    desc: "Connect client-approved requirements to a project and asset record. When an asset tag is scanned, TraceTech can surface the required next step: erasure, destruction, remarketing, reuse evaluation, or recycling.",
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

// Sanitized client-portal screenshots (test data only) shown in the showcase.
// Both tiles render at the same fixed aspect so the pair stays aligned.
const SHOWCASE: {
  src: string;
  w: number;
  h: number;
  title: string;
  desc: string;
  linkHref?: string;
  linkText?: string;
}[] = [
  {
    src: "/images/tracetech/reports.webp",
    w: 1794,
    h: 1232,
    title: "Reports & ESG summaries",
    desc: "Streamline your compliance with monthly summaries, job-by-job breakdowns, and downloadable environmental impact certificates ready for your annual corporate disclosures.",
    linkHref: "/documents/sample-esg-impact-certificate.png",
    linkText: "View a sample ESG impact report",
  },
  {
    src: "/images/tracetech/certificates.webp",
    w: 1076,
    h: 739,
    title: "Certificates of Destruction & Erasure",
    desc: "Never wait on audit paperwork. Export serialized asset-level certificates or full batch summaries directly from your portal as soon as data sanitization is verified.",
    linkHref: "/documents/sample-certificate-of-destruction.pdf",
    linkText: "View a Sample Certificate of Destruction",
  },
];

// The four stages under the approved-outcomes diagram, in the artwork's order.
// Wording is exactly what was baked into the old artwork, which Ian approved.
const OUTCOME_STEPS = [
  {
    icon: Box,
    title: "Asset received",
    text: "Customer asset tag and Integritrade tracking tag are connected.",
  },
  {
    icon: ShieldCheck,
    title: "Requirement identified",
    text: "The project’s approved handling instruction is associated with the asset.",
  },
  {
    icon: ScanText,
    title: "Correct workflow shown",
    text: "The next approved action is visible at scan time.",
  },
  {
    icon: FileText,
    title: "Outcome documented",
    text: "Processing status and available records are added to the project view.",
  },
];

const NAV_SECTIONS = [
  { id: "capabilities", label: "Capabilities" },
  { id: "portal", label: "Inside the Portal" },
  { id: "rules", label: "Your Rules" },
  { id: "evidence", label: "Evidence" },
  { id: "flexibility", label: "Flexibility" },
  { id: "faq", label: "FAQ" },
];

export default function TraceTechPage() {
  return (
    <main className="bg-secondary dark:bg-dark transition-colors duration-300">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section id="overview" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-32 h-[40rem] bg-[radial-gradient(55%_55%_at_50%_40%,rgba(42,172,97,0.12),transparent_70%)]"
        />

        <div className="relative mx-auto max-w-[1400px] px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
          {/* 5/7 rather than 50/50: the dashboard screenshot is a wide
              1621x972, so it needs the larger share to stay readable. */}
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">

            {/* Copy */}
            <ScrollLoader className="min-w-0 lg:col-span-5">
              <div>
                <h1 className="font-serif text-[2rem] leading-[1.1] tracking-tight text-stone-900 dark:text-white sm:text-[2.5rem] lg:text-[2.6rem]">
                  Your ITAD project should not become a black box after pickup.
                </h1>

                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-stone-600 dark:text-slate-300">
                  TraceTech is Integritrade&apos;s proprietary ITAD client portal and processing
                  platform. It connects your assets, service requirements, project records,
                  documentation, and value-recovery results in one place, giving authorized teams
                  real-time visibility from pickup through documented disposition.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <PrimaryButton href="/service-book/" testId="tracetech-walkthrough" className="text-sm py-3">
                    Request a TraceTech Walkthrough
                  </PrimaryButton>
                  <OutlineButton href="/service-book/" testId="tracetech-service-request" className="text-sm py-3">
                    Schedule a Service Request
                  </OutlineButton>
                </div>

                <p className="mt-6 flex items-center gap-2 text-sm text-stone-500 dark:text-slate-400">
                  <Check className="h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                  Included at no additional cost for Integritrade clients
                </p>

              </div>
            </ScrollLoader>

            {/* Dashboard */}
            <ScrollLoader delay={0.1} className="min-w-0 lg:col-span-7">
              <Parallax speed={0.04}>
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute -inset-5 rounded-[2rem] bg-gradient-to-tr from-primary/20 via-emerald-400/10 to-blue-500/15 blur-3xl"
                  />
                  <Image
                    src="/images/tracetech/dashboard.webp"
                    alt="TraceTech client dashboard showing project status, asset disposition, certificates, and estimated CO2e impact (sample data)"
                    width={1621}
                    height={972}
                    priority
                    sizes="(max-width:1024px) 100vw, 800px"
                    className="relative h-auto w-full rounded-xl border border-black/5 shadow-2xl ring-1 ring-black/5 dark:border-white/10 dark:ring-white/10"
                  />
                </div>
              </Parallax>
            </ScrollLoader>

          </div>
        </div>
      </section>

      {/* Everything after the hero shares the sticky section nav */}
      <div className="mx-auto max-w-[1400px] px-4 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">

          <aside className="hidden lg:col-span-2 lg:block">
            <SectionFloatNav sections={NAV_SECTIONS} />
          </aside>

          <div className="lg:col-span-10">

            {/* ── Capabilities ──────────────────────────────────────── */}
            <section id="capabilities" className="scroll-mt-28">
              <ScrollLoader>
                <div className="max-w-3xl">
                  <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                    See the work. Manage the next step. Retrieve the record.
                  </h2>
                  <p className="mt-6 text-[16px] leading-relaxed text-stone-600 dark:text-slate-300">
                    TraceTech brings information that is usually scattered across emails,
                    spreadsheets, service tickets, and final reports into one organized client
                    experience, with a clear view of what is happening to your retired technology
                    and what to do next.
                  </p>
                </div>
              </ScrollLoader>

              <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {FEATURES.map(({ icon: Icon, title, desc }, i) => (
                  <ScrollLoader key={title} delay={i * 0.06}>
                    <div className="h-full rounded-md bg-white p-7 shadow-sm ring-1 ring-black/5 dark:bg-dark-secondary dark:ring-white/10">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-primary text-primary">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <h3 className="mt-5 font-serif text-lg text-gray-900 dark:text-white">
                        {title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-stone-600 dark:text-gray-300">
                        {desc}
                      </p>
                    </div>
                  </ScrollLoader>
                ))}
              </div>

              <p className="mt-8 text-xs text-gray-500 dark:text-gray-400">
                CO2e figures are estimates based on documented disposition pathways and available project data.
              </p>
            </section>

            {/* ── Inside the portal ─────────────────────────────────── */}
            <section id="portal" className="scroll-mt-28 pt-24">
              <ScrollLoader>
                <div className="max-w-3xl">
                  <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                    A closer look at the client experience.
                  </h2>
                  <p className="mt-6 text-[16px] leading-relaxed text-stone-600 dark:text-slate-300">
                    Real views from the TraceTech client portal, shown with test data only. No
                    customer information.
                  </p>
                </div>
              </ScrollLoader>

              <div className="mt-12 grid items-start gap-x-8 gap-y-12 md:grid-cols-2">
                {SHOWCASE.map(({ src, w, h, title, desc, linkHref, linkText }, i) => (
                  <ScrollLoader key={title} delay={i * 0.06}>
                    <figure>
                      <Image
                        src={src}
                        alt={`${title}, TraceTech client portal (sample data)`}
                        width={w}
                        height={h}
                        sizes="(max-width:768px) 100vw, 620px"
                        className="h-auto w-full rounded-xl border border-black/5 bg-white shadow-lg ring-1 ring-black/5 dark:border-white/10 dark:bg-dark-secondary dark:ring-white/10"
                      />
                      <figcaption className="mt-5">
                        <h3 className="font-serif text-lg text-gray-900 dark:text-white">{title}</h3>
                        <p className="mt-2 text-[14px] leading-relaxed text-stone-600 dark:text-gray-300">
                          {desc}
                        </p>
                        {linkHref && (
                          <a
                            href={linkHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#19723e] transition-colors hover:text-[#2aac61]"
                          >
                            {linkText}
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        )}
                      </figcaption>
                    </figure>
                  </ScrollLoader>
                ))}
              </div>
            </section>

            {/* ── Your exact rules ──────────────────────────────────── */}
            <section id="rules" className="scroll-mt-28 pt-24">
              {/* Heading and body are live text, not baked into the artwork, so
                  they scale, reflow and get indexed. Written in second person on
                  Ian's note: the reader is a client already, not "a client". */}
              <ScrollLoader>
                <div className="mx-auto max-w-3xl text-center">
                  <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                    One project can have different approved outcomes. TraceTech keeps them clear.
                  </h2>
                  <p className="mt-6 text-[16px] leading-relaxed text-stone-600 dark:text-slate-300">
                    Your project can call for several outcomes at once: physical destruction for
                    specified media, erasure and reuse evaluation for eligible laptops, remarketing
                    for approved equipment, and recycling for anything non-recoverable. TraceTech
                    ties each of those requirements to your project and to the individual asset
                    record, so our technicians see your instruction the moment a tag is scanned.
                  </p>
                </div>
              </ScrollLoader>

              {/* Haseeb's artwork, diagram only, in a light and a dark version.

                  Each sits on a panel in its own background colour (#f5f4ef
                  light, #0b0b0b dark) rather than straight on the page, so
                  there is no seam where the image ends, and the padding and
                  radius make it a deliberate figure. The artwork runs to within
                  a few pixels of its edges, so fading the edges instead would
                  have clipped the diagram.

                  The four step labels used to be baked into the bottom of the
                  artwork. They are live text now, so they stay sharp, follow
                  the theme and read properly on a phone. On desktop the column
                  widths put each label under the node it describes. */}
              <ScrollLoader>
                <figure className="mt-12 overflow-hidden rounded-2xl bg-[#f5f4ef] p-4 ring-1 ring-black/[0.04] sm:p-8 dark:bg-[#0b0b0b] dark:ring-white/10">
                  <Image
                    src={ApprovedOutcomes}
                    alt="Diagram of an asset moving from intake to a documented outcome, with the scanned tag routing it to physical destruction, erase and reuse evaluation, remarketing or recycling."
                    sizes="(max-width: 1024px) 100vw, 1100px"
                    placeholder="blur"
                    className="h-auto w-full dark:hidden"
                  />
                  <Image
                    src={ApprovedOutcomesDark}
                    alt="Diagram of an asset moving from intake to a documented outcome, with the scanned tag routing it to physical destruction, erase and reuse evaluation, remarketing or recycling."
                    sizes="(max-width: 1024px) 100vw, 1100px"
                    placeholder="blur"
                    className="hidden h-auto w-full dark:block"
                  />

                  <figcaption>
                    <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-6 lg:grid-cols-[23.6fr_20.5fr_36.4fr_19.5fr] lg:gap-0">
                      {OUTCOME_STEPS.map(({ icon: Icon, title, text }, i) => (
                        <li
                          key={title}
                          className={`flex items-start gap-4 lg:block ${
                            i === 0
                              ? "lg:pl-10 xl:pl-12"
                              : "lg:border-l lg:border-black/10 lg:pl-6 lg:dark:border-white/10"
                          }`}
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                            <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                          </span>
                          <div className="min-w-0 lg:mt-4 lg:pr-4">
                            <p className="font-serif text-lg leading-snug text-stone-900 dark:text-white lg:text-xl">
                              {title}
                            </p>
                            <p className="mt-1.5 text-[13px] leading-relaxed text-stone-500 dark:text-gray-400">
                              {text}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </figcaption>
                </figure>
              </ScrollLoader>
            </section>

            {/* ── Evidence ──────────────────────────────────────────── */}
            <section id="evidence" className="scroll-mt-28 pt-24">
              <div className="relative overflow-hidden rounded-2xl bg-stone-900 px-6 py-14 dark:bg-black/50 sm:px-10 lg:py-16">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-32 top-0 h-[24rem] w-[24rem] rounded-full bg-emerald-500/10 blur-3xl"
                />

                <div className="relative">
                  <ScrollLoader>
                    <div className="max-w-3xl">
                      <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-white sm:text-4xl">
                        Add the evidence level your project requires.
                      </h2>
                      <p className="mt-6 text-[16px] leading-relaxed text-stone-300">
                        Some data-destruction projects require more than a final Certificate of
                        Destruction. For applicable physical-destruction jobs, Integritrade can
                        provide photographed, recorded, live-streamed, or witnessed destruction
                        based on the scope and agreed service level. TraceTech keeps applicable
                        evidence links and project documentation connected to the relevant client
                        record.
                      </p>
                    </div>
                  </ScrollLoader>

                  <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {EVIDENCE.map(({ icon: Icon, label }, i) => (
                      <ScrollLoader key={label} delay={i * 0.06}>
                        <div className="flex flex-col items-center gap-3 rounded-md border border-white/10 bg-white/5 p-6 text-center transition-colors hover:border-emerald-400/30 hover:bg-white/10">
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
              </div>
            </section>

            {/* ── Flexibility ───────────────────────────────────────── */}
            <section id="flexibility" className="scroll-mt-28 pt-24">
              <ScrollLoader>
                <div className="max-w-3xl">
                  <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                    A client portal that works with your process.
                  </h2>
                </div>
              </ScrollLoader>

              <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
                {FLEXIBLE.map(({ icon: Icon, title, desc }, i) => (
                  <ScrollLoader key={title} delay={i * 0.08}>
                    <div>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-primary text-primary">
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </span>
                      <h3 className="mt-5 font-serif text-lg text-gray-900 dark:text-white">
                        {title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-stone-600 dark:text-gray-300">
                        {desc}
                      </p>
                    </div>
                  </ScrollLoader>
                ))}
              </div>
            </section>

            {/* ── Final CTA ─────────────────────────────────────────── */}
            <section id="cta" className="scroll-mt-28 pt-24">
              <ScrollLoader>
                <div className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-black/5 dark:bg-dark-secondary dark:ring-white/10 md:p-12">
                  <h2 className="mx-auto max-w-3xl font-serif text-2xl leading-snug text-stone-900 dark:text-white md:text-3xl">
                    TraceTech is included with your Integritrade program.
                  </h2>
                  <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-stone-600 dark:text-slate-300">
                    Integritrade clients receive TraceTech at no additional cost as part of a more
                    transparent ITAD experience. From a single pickup to a multi-site technology
                    refresh, the platform helps keep project status, requests, requirements,
                    documentation, value recovery, and reporting in view.
                  </p>
                  <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                    <PrimaryButton href="/service-book/" testId="tracetech-walkthrough-2" className="text-sm py-3">
                      Request a TraceTech Walkthrough
                    </PrimaryButton>
                    <OutlineButton href="/service-book/" testId="tracetech-service-request-2" className="text-sm py-3">
                      Schedule a Service Request
                    </OutlineButton>
                  </div>
                  <p className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                    Integritrade is based in Fresno, California and supports ITAD, data destruction,
                    electronics recycling, and asset recovery projects across California and the
                    Western United States.
                  </p>
                </div>
              </ScrollLoader>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────── */}
            <section id="faq" className="scroll-mt-28 pb-24">
              <FAQSchema faqs={FAQS} />
              <IndustryFAQ faqs={FAQS} />
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
