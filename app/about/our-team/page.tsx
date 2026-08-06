import Image from "next/image";
import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import { Mail, MapPin, Phone } from "lucide-react";
import Certifications from "@/components/home/Certifications";
import ian from "@/public/ian.jpg";
import masood from "@/public/masood.jpg";
import adnan from "@/public/adnan.jpg";
import ScrollLoader from "@/components/shared/ScrollLoader";

export const metadata: Metadata = {
  title: "Leadership | The People Accountable for Your Data | Integritrade LLC",
  description:
    "Meet the founders who personally oversee every ITAD project at Integritrade a scientist with a Nature and Cell publication record and a cybersecurity engineer from Fortune 500 enterprise environments.",
  keywords: [
    "Integritrade leadership",
    "Ian Ziyar founder",
    "Masood Burhani COO",
    "ITAD leadership team",
    "data destruction experts",
    "cybersecurity ITAD leadership",
  ],
  alternates: {
    canonical: "/about/our-team/",
  },
  openGraph: {
    title: "Leadership | The People Accountable for Your Data | Integritrade LLC",
    description:
      "Meet the founders who personally oversee every ITAD project at Integritrade.",
    url: "https://integritradellc.com/about/our-team/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://integritradellc.com/logo/integritrade-logo.png",
        width: 1200,
        height: 630,
        alt: "Integritrade LLC Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership | The People Accountable for Your Data | Integritrade LLC",
    description:
      "Meet the founders who personally oversee every ITAD project at Integritrade.",
    images: ["https://integritradellc.com/logo/integritrade-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OurTeamPage() {
  return (
    <section className="bg-secondary dark:bg-dark transition-colors duration-300">
      <div className="container mx-auto pt-10 md:py-24">

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PAGE HEADER                                                      */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <ScrollLoader>
          <PageHeader
            eyebrow="LEADERSHIP"
            title={<>The people accountable for every shipment.</>}
            description="Two founders, one operating principle: every retired asset is processed under the direct supervision of a named, credentialed person not a subcontractor, not a faceless ops team."
            linkText=""
            linkHref=""
          />
        </ScrollLoader>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* FOUNDER 01 — IAN ZIYAR                                         */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <ScrollLoader>
          <article className="pt-24 lg:pt-32 px-4 md:px-6">
            {/* Founder Header — large editorial portrait + meta */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-24">
              {/* Portrait */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full rounded-md overflow-hidden bg-white dark:bg-dark-secondary">
                  <Image
                    src={ian}
                    alt="Ian Ziyar, Founder & CEO of Integritrade LLC"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>

              {/* Meta + Name */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-6 mb-6">
                    <p className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                      — Founder &amp; CEO
                    </p>
                  </div>

                  <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight leading-[0.95] mb-6">
                    Ian Ziyar
                  </h2>

                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center max-w-xl">
                    Ian&apos;s career started not in recycling, but in precision. As a
                    researcher at UC San Diego, he co-developed AI-driven diagnostic
                    systems published in{" "}
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">
                      Cell
                    </strong>{" "}
                    and{" "}
                    <strong className="font-semibold text-gray-900 dark:text-gray-100">
                      Nature Biomedical Engineering
                    </strong>
                    .
                  </p>

                  {/* Personal Background credentials block */}
                  <div className="mt-4">
                    <div>
                      {[
                        {
                          title: "Published Research",
                          body: "Cell and Nature Biomedical Engineering",
                        },
                        {
                          title: "6,000+ Research Citations",
                          body: "Cited by scientists and engineers worldwide",
                        },
                        {
                          title: "10+ Years of Experience",
                          body: "Electronics repair, data recovery, and secure destruction",
                        },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-12 gap-4 py-6 lg:py-7 border-b border-gray-200 dark:border-gray-800"
                        >
                          <div className="col-span-1">
                            <span className="text-sm font-light text-gray-300 dark:text-gray-700 tabular-nums">
                              0{i + 1}
                            </span>
                          </div>

                          <div className="col-span-11 md:col-span-5">
                            <p className="text-base font-semibold text-gray-900 dark:text-gray-100">
                              {item.title}
                            </p>
                          </div>

                          <div className="col-span-12 md:col-span-6 mt-1 md:mt-0">
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                              {item.body}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick stats inline */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div>
                    <p className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 tracking-tight mb-1">
                      10
                      <span className="text-emerald-700 dark:text-[#34d399]">+</span>
                    </p>

                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      Years
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 tracking-tight mb-1">
                      6,000
                      <span className="text-emerald-700 dark:text-[#34d399]">+</span>
                    </p>

                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      Citations
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 tracking-tight mb-1">
                      2023
                    </p>

                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      Founded
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Sections — editorial narrative */}
            <div className="space-y-20 lg:space-y-24">
              {/* Background */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <p className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                    — BACKGROUND
                  </p>

                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight leading-[1.15] mt-3">
                    A career built on precision and process integrity.
                  </h3>
                </div>

                <div className="lg:col-span-8">
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                    Ian&apos;s career started not in recycling, but in precision. As a
                    researcher at UC San Diego, he co-developed AI-driven diagnostic
                    systems published in{" "}
                    <strong className="text-gray-900 dark:text-gray-100 font-semibold">
                      Cell
                    </strong>{" "}
                    and{" "}
                    <strong className="text-gray-900 dark:text-gray-100 font-semibold">
                      Nature Biomedical Engineering
                    </strong>
                    {" "}work that has since been cited over 6,000 times by scientists and
                    engineers worldwide. In fields where a missed data point means a
                    missed diagnosis, you learn quickly that process integrity is not
                    optional.
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <p className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                    — EXPERIENCE
                  </p>

                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight leading-[1.15] mt-3">
                    Bringing research-grade precision to IT asset disposition.
                  </h3>
                </div>

                <div className="lg:col-span-8">
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                    After a decade in electronics repair, data recovery, and secure
                    data destruction, Ian watched too many recycling programs cut
                    corners, lose chain of custody, and pass risk back to their
                    clients. He founded Integritrade in 2023 to do the opposite and
                    brought the same precision that defined his research career into
                    every workflow, certification, and line of code behind TraceTech.
                  </p>
                </div>
              </div>

              {/* Track Record */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <p className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                    — TRACK RECORD
                  </p>

                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight leading-[1.15] mt-3">
                    Five certifications. Enterprise trust. Zero shortcuts.
                  </h3>
                </div>

                <div className="lg:col-span-8">
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                    Under his leadership, Integritrade achieved R2v3, ISO 9001, ISO
                    14001, ISO 45001, and ISO 27001 certifications inside its first
                    operating year. Within six months of opening to commercial clients,
                    the company had earned recurring work from Fortune 500 enterprises
                    and federal organizations relationships built on the promise that
                    every project is handled with the same uncompromising standard,
                    every time.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </ScrollLoader>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* FOUNDER 02 — MASOOD BURHANI                                      */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <ScrollLoader>
          <article className="pt-24 lg:pt-32 px-4 md:px-6">

            {/* Founder Header — reverse layout: meta left, portrait right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-24">
              {/* Meta + Name */}
              <div className="lg:col-span-7 lg:order-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-6 mb-6">
                    <p className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                      — Chief Operating Officer
                    </p>
                  </div>

                  <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight leading-[0.95] mb-6">
                    Masood Burhani
                  </h2>

                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center max-w-xl">
                    A cybersecurity engineer from Fortune 500 enterprise environments. The person who designs the chain-of-custody, the sanitization workflows, and the audit trail your auditors will eventually read.
                  </p>

                  {/* Professional Credentials block */}
                  <div className="">
                    <div className="">
                      <div className="">
                        {[
                          {
                            code: "(ISC)² CC",
                            body: "Certified in Cybersecurity",
                          },
                          {
                            code: "Security+",
                            body: "CompTIA Security+",
                          },
                          {
                            code: "(ISC)² GRC",
                            body: "Governance, Risk & Compliance",
                          },
                          {
                            code: "API Security",
                            body: "Web & API security certification",
                          },
                          {
                            code: "CISSP",
                            body: "Advanced working knowledge of all eight domains",
                          },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="grid grid-cols-12 gap-4 py-6 lg:py-7 border-b border-gray-200 dark:border-gray-800"
                          >
                            <div className="col-span-1">
                              <span className="text-sm font-light text-gray-300 dark:text-gray-700 tabular-nums">
                                0{i + 1}
                              </span>
                            </div>
                            <div className="col-span-11 md:col-span-4">
                              <p className="text-base font-semibold text-gray-900 dark:text-gray-100">
                                {item.code}
                              </p>
                            </div>
                            <div className="col-span-12 md:col-span-7 mt-1 md:mt-0">
                              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                                {item.body}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>


                {/* Quick stats inline */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div>
                    <p className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 tracking-tight mb-1">
                      10<span className="text-emerald-700 dark:text-[#34d399]">+</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">Years</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 tracking-tight mb-1">
                      F500
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">Background</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-light text-gray-900 dark:text-gray-100 tracking-tight mb-1">
                      5<span className="text-emerald-700 dark:text-[#34d399]">+</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest">Credentials</p>
                  </div>
                </div>
              </div>

              {/* Portrait */}
              <div className="lg:col-span-5 lg:order-2">
                <div className="relative aspect-[4/5] w-full rounded-md overflow-hidden bg-white dark:bg-dark-secondary">
                  <Image
                    src={masood}
                    alt="Masood Burhani, Chief Operating Officer of Integritrade LLC"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
            {/* Bio Sections — editorial narrative */}
            <div className="space-y-20 lg:space-y-24">

              {/* Background */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <p className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                    — BACKGROUND
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight leading-[1.15] mt-3">
                    An engineer who built systems your auditors already trust.
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                    Before joining Integritrade, Masood spent over a decade as a security engineer inside Fortune 500 enterprise environments the same operational standards your CISO, your internal audit team, and your third-party risk reviewers use as their baseline. He has worked across large-scale infrastructure, data governance frameworks, and the cybersecurity protocols that global organizations expect when sensitive data is in motion.
                  </p>
                </div>
              </div>

              {/* Operational Discipline */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <p className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                    — OPERATIONAL DISCIPLINE
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight leading-[1.15] mt-3">
                    The person who designs the controls behind every pickup.
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                    As COO, Masood owns the operational side of Integritrade chain-of-custody design, sanitization workflows, audit-trail architecture, and the controls that translate certifications into day-to-day execution. His credentials span the spectrum compliance teams care about: (ISC)² CC, CompTIA Security+, (ISC)² GRC, API Security, and advanced working knowledge of CISSP domains. The result is an ITAD operation that holds up to scrutiny from the same security frameworks your organization is already governed by.
                  </p>
                </div>
              </div>

              {/* Approach */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <p className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                    — APPROACH
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight leading-[1.15] mt-3">
                    Security-first, on every shipment, every time.
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                    Masood&rsquo;s discipline shows up in the details: serialized inventory before assets leave your dock, NIST-aligned sanitization methods chosen based on data sensitivity, downstream verification documented to the final processor. The work is meticulous on purpose because in regulated environments, &ldquo;mostly secure&rdquo; is the same as &ldquo;not secure.&rdquo;
                  </p>
                </div>
              </div>
            </div>

                    
          </article>
        </ScrollLoader>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* LEADERSHIP 03 — MUHAMMAD ADNAN                                    */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <ScrollLoader>
          <article className="pt-24 lg:pt-32 px-4 md:px-6">

            {/* Header — portrait left, meta right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20 lg:mb-24">
              {/* Portrait */}
              <div className="lg:col-span-5 lg:order-1">
                <div className="relative aspect-[4/5] w-full rounded-md overflow-hidden bg-white dark:bg-dark-secondary">
                  <Image
                    src={adnan}
                    alt="M. Adnan, Director of Engineering at Integritrade LLC"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>

              {/* Meta + Name */}
              <div className="lg:col-span-7 lg:order-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline gap-6 mb-6">
                    <p className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                      — Director of Engineering
                    </p>
                  </div>

                  <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight leading-[0.95] mb-6 whitespace-nowrap">
                    M. Adnan
                  </h2>

                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center max-w-xl">
                    The engineer behind Integritrade&rsquo;s technology, the person who built and runs TraceTech, the platform that tracks every asset from pickup to final disposition.
                  </p>

                  {/* Strengths list */}
                  <div className="mt-2">
                    {[
                      {
                        code: "TraceTech Platform",
                        body: "Built and maintains Integritrade's proprietary asset-tracking platform",
                      },
                      {
                        code: "Full Ownership",
                        body: "Takes work from the first idea to the day it ships",
                      },
                      {
                        code: "Team Leadership",
                        body: "Comfortable presenting work and leading small teams",
                      },
                      {
                        code: "Practical & Reliable",
                        body: "Always focused on the simpler, more dependable solution",
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-12 gap-4 py-6 lg:py-7 border-b border-gray-200 dark:border-gray-800"
                      >
                        <div className="col-span-1">
                          <span className="text-sm font-light text-gray-300 dark:text-gray-700 tabular-nums">
                            0{i + 1}
                          </span>
                        </div>
                        <div className="col-span-11 md:col-span-4">
                          <p className="text-base font-semibold text-gray-900 dark:text-gray-100">
                            {item.code}
                          </p>
                        </div>
                        <div className="col-span-12 md:col-span-7 mt-1 md:mt-0">
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Sections — editorial narrative */}
            <div className="space-y-20 lg:space-y-24">

              {/* Background */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <p className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                    — BACKGROUND
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight leading-[1.15] mt-3">
                    An engineer who cares about the details others overlook.
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                    Adnan is a software engineer with a Computer Science degree from COMSATS University Islamabad. His experience spans a wide range of environments, and that breadth shapes how he works. He gives as much attention to the parts people never see as the parts they do, because what a business relies on is only ever as dependable as the foundation beneath it.
                  </p>
                </div>
              </div>

              {/* At Integritrade */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                <div className="lg:col-span-4">
                  <p className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                    — AT INTEGRITRADE
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight leading-[1.15] mt-3">
                    The person who built the platform behind the promise.
                  </h3>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                    At Integritrade, Adnan built and maintains TraceTech, the company&rsquo;s proprietary asset-tracking platform and the internal systems the business runs on every day. TraceTech is what turns chain-of-custody from a claim into a real-time record, with every asset tracked from pickup through final disposition and every certificate available on demand. He owns that technology end to end and keeps it dependable, so the rest of the team can stay focused on the work in front of them.
                  </p>
                </div>
              </div>
            </div>

          </article>
        </ScrollLoader>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* CERTIFICATIONS — shared component                                */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className="">
          <Certifications />
        </div>

        {/* ───────────────── VISIT / CTA ───────────────── */}
        <ScrollLoader>
          <div className="pb-12">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                      <div className="lg:col-span-7">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400" />
                          <span className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                            Come See It
                          </span>
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900 dark:text-gray-100">
                          Site visits welcome. Walk the floor before you sign.
                        </h2>
                        <p className="mt-6 text-base leading-relaxed text-stone-700 dark:text-slate-300 max-w-xl custom-text-center">
                          We host scheduled facility tours for prospective clients and
                          auditors. Bring your compliance lead they&apos;ll see the same
                          process your retired devices will go through.
                        </p>
                        {/* CTA Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4 mt-10">

                            <OutlineButton href="/services" testId="button-learn-more">
                              View Service Details
                            </OutlineButton>
                            
                            <PrimaryButton href="/service-book" testId="button-get-quote">
                                  Schedule a Tour
                            </PrimaryButton>
                          </div>
                      </div>
          
                      <div className="lg:col-span-5">
                        <div className="rounded-md p-8 lg:p-10 bg-white dark:bg-dark-secondary">
                          <div className="text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 mb-6">
                            Visit Integritrade
                          </div>
          
                          <dl className="space-y-6">
                            <div className="flex items-start gap-4">
                              <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <div>
                                <dt className="text-xs uppercase tracking-wider text-muted-foreground dark:text-gray-400 mb-1">
                                  Facility
                                </dt>
                                <dd className="text-sm text-gray-900 dark:text-gray-100">
                                  1945 N Fine Ave, STE 111
                                  <br />
                                  Fresno, CA 93727
                                </dd>
                              </div>
                            </div>
          
                            <div className="flex items-start gap-4">
                              <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <div>
                                <dt className="text-xs uppercase tracking-wider text-muted-foreground dark:text-gray-400 mb-1">
                                  Direct Line
                                </dt>
                                <dd className="text-sm text-gray-900 dark:text-gray-100">
                                  (559) 325-4813
                                </dd>
                              </div>
                            </div>
          
                            <div className="flex items-start gap-4">
                              <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <div>
                                <dt className="text-xs uppercase tracking-wider text-muted-foreground dark:text-gray-400 mb-1">
                                  Email
                                </dt>
                                <dd className="text-sm text-gray-900 dark:text-gray-100">
                                  info@integritradeLLC.com
                                </dd>
                              </div>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
          </div>
        </ScrollLoader>

      </div>
    </section>
  );
}