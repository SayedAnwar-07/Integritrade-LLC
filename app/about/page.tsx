import {
  BadgeCheck,
  CheckCircle2,
  FileCheck,
  Wrench,
  Recycle,
  TrendingUp,
  BadgeDollarSign,
  HandHeart,
  MapPin,
  Phone,
  Mail,
  Building2,
  Award,
  Users,
  ShieldCheck,
} from "lucide-react"
import Script from "next/script"
import type { Metadata } from "next"
import type { ReactNode } from "react"
import Image from "next/image"
import itadWarehouse from "@/public/about/itadWarehouse.jpeg"
import itadAssemblyLine from "@/public/about/itadAssemblyLine.png"
import recyclingWarehouse from "@/public/services/serviceArea/electronicRecyclingWarehouse.jpeg"
import tracetech from "@/public/about/Integritrade_Tracetech_AI_ERP.png"
import ScrollLoader from "@/components/shared/ScrollLoader"
import OutlineButton from "@/components/shared/buttons/OutlineButton"
import PrimaryButton from "@/components/shared/buttons/PrimaryButton"

export const metadata: Metadata = {
  title: "About Us | Trusted ITAD & Recycling Partner",
  description:
    "Discover Integritrade, a trusted ITAD and e-waste recycling company dedicated to data security, compliance, and sustainable technology management.",
  keywords: [
    "About Integritrade LLC",
    "IT Asset Disposition Experts",
    "Electronic Recycling Company",
    "Data Destruction Services",
    "ITAD Service Provider",
    "Secure IT Recycling",
    "R2 Certified ITAD",
    "ISO Certified Recycling",
    "Asset Recovery Solutions",
    "E-Waste Management",
    "Corporate IT Recycling",
    "ITAD Compliance",
    "IT Disposal Services",
  ],
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "About Integritrade LLC | Trusted ITAD and Recycling Partner",
    description:
      "Discover Integritrade, a trusted ITAD and e-waste recycling company dedicated to data security, compliance, and sustainable technology management.",
    url: "https://integritradellc.com/about/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://integritradellc.com/logo/integritrade-logo.png",
        width: 1200,
        height: 630,
        alt: "Integritrade LLC | ITAD & Recycling Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Integritrade LLC | Trusted ITAD & Recycling Partner",
    description:
      "Integritrade LLC is a trusted ITAD and e-waste recycling company, ensuring secure data destruction and environmental compliance.",
    images: ["https://integritradellc.com/logo/integritrade-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

/** Consistent section label used across every section for a unified rhythm. */
function Eyebrow({
  children,
  center = false,
}: {
  children: ReactNode
  center?: boolean
}) {
  return (
    <div
      className={`mb-6 flex items-center gap-4 ${center ? "justify-center" : ""}`}
    >
      <span className="h-px w-12 bg-emerald-700 dark:bg-emerald-500" />
      <span className="font-mono text-[0.95rem] font-bold uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400">
        {children}
      </span>
      {center && (
        <span className="h-px w-12 bg-emerald-700 dark:bg-emerald-500" />
      )}
    </div>
  )
}

const stats = [
  { Icon: Building2, value: "Fresno, CA", label: "Secure processing facility" },
  { Icon: Award, value: "5", label: "Industry certifications" },
  { Icon: Users, value: "40+ yrs", label: "Combined experience" },
  { Icon: ShieldCheck, value: "24/7", label: "Video-monitored" },
]

const valueRecovery = [
  {
    Icon: TrendingUp,
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-300 dark:border-emerald-400",
    title: "Value Recovery Focused",
    desc: "We prioritize refurbishment, parts harvesting, and responsible reuse workflows to offset your retirement costs before recycling is ever considered. In fact, the vast majority of our clients pay $0 for ITAD or actually generate revenue. We even offer a net-positive guarantee on qualifying batches before work begins, ensuring zero financial risk.",
  },
  {
    Icon: BadgeDollarSign,
    iconColor: "text-amber-700 dark:text-amber-400",
    borderColor: "border-amber-300 dark:border-amber-500",
    title: "Revenue Assurance Guarantee",
    desc: "On qualifying batches, we guarantee zero out-of-pocket costs, even if processing fees surpass the asset value.",
    points: [
      "Eligible Equipment: Mix or match at least 50 units of computers, servers, desktops, laptops, tablets, or cell phones.",
      "Age Requirement: Equipment up to ~6 years old or newer.",
    ],
  },
  {
    Icon: HandHeart,
    iconColor: "text-sky-700 dark:text-sky-400",
    borderColor: "border-sky-500 dark:border-sky-400",
    title: "A True Partnership Approach",
    desc: "When your equipment falls below resale cutlines, your data is always securely sanitized. We route this hardware to its best possible second life by selling select pieces to fund our operations and attempting to donate others to those in need. For these eligible items, we waive the COD fees entirely - ensuring your data is destroyed, the community is helped, and your bottom line is protected.",
  },
]

const principles = [
  {
    Icon: FileCheck,
    title: "Documented or it didn't happen",
    desc: "Powered by TraceTech, every ITAD or data destruction project receives a serial-level record. If we can't show it on paper and in our system, we don't claim it.",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-600 dark:border-emerald-400",
  },
  {
    Icon: Wrench,
    title: "End-to-end, owner-operated security",
    desc: "We never use subcontracted shred trucks or white-label brokers. Every project is handled exclusively by vetted Integritrade professionals inside our secure, access-restricted, fully surveilled facility. Your security is never outsourced.",
    iconColor: "text-amber-700 dark:text-amber-400",
    borderColor: "border-amber-700 dark:border-amber-400",
  },
  {
    Icon: Recycle,
    title: "Rigorous environmental compliance",
    desc: "We strictly adhere to R2v3 standards for the ethical, legal processing of all electronic waste, prioritizing reuse, remarketing, and parts harvesting to maximize landfill diversion. Unrecoverable materials are handled through authorized environmental channels protecting your brand from liability.",
    iconColor: "text-sky-700 dark:text-sky-400",
    borderColor: "border-sky-700 dark:border-sky-400",
  },
]

const trustReasons = [
  {
    title: "TraceTech AI Integration",
    desc: "Proprietary AI-driven ERP software that minimizes human touchpoints, accelerates processing, and delivers a level of security and efficiency no legacy provider can match.",
  },
  {
    title: "Industry-Leading Data Security",
    desc: "NIST 800-88 compliant destruction backed by the rigorous security protocols of our R2-certified facility. We provide certified documentation on every ITAD or data destruction project, with optional video-witnessed destruction or video-taped destruction available upon request.",
  },
  {
    title: "Value Maximization",
    desc: "Strategic remarketing and parts harvesting recover measurable resale value to offset your retirement costs before recycling is ever considered.",
  },
  {
    title: "Environmental Leadership",
    desc: "R2-certified, secure, and legal e-waste processing with vetted and audited downstream providers for full disposition workflows.",
  },
  {
    title: "Transparent Chain of Custody",
    desc: "Serialized tracking from your dock to final disposition documented, auditable, and delivered with every project report.",
  },
  {
    title: "Regulatory Compliance",
    desc: "Aligned to HIPAA, SOX, GLBA, FERPA, and California environmental regulations across all verticals we serve.",
  },
]

export default function AboutPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Integritrade LLC",
    url: "https://integritradellc.com/",
    logo: "https://integritradellc.com/logo/integritrade-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-559-325-4813",
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1945 N Fine Ave, STE 111",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93727",
      addressCountry: "US",
    },
    description:
      "Integritrade LLC provides secure IT asset disposition (ITAD), electronic recycling, data destruction, and asset recovery services. Certified R2, ISO 9001, ISO 14001, and ISO 27001.",
    award: [
      "R2 Certified ITAD",
      "ISO 9001 Quality Management",
      "ISO 14001 Environmental Management",
      "ISO 27001 Information Security",
      "ISO 45001 Occupational Health & Safety",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IT Asset Disposition (ITAD)",
          category: "ITAD Service",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Electronic Recycling",
          category: "E-Waste Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Destruction",
          category: "Secure Data Destruction",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Asset Recovery",
          category: "IT Asset Recovery",
        },
      },
    ],
  }

  return (
    <section className="section bg-secondary dark:bg-dark transition-colors duration-300">
      <Script
        id="organization-jsonld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ───────────────── HERO — mission first (text left, image right) ───────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollLoader>
            <div>
              <Eyebrow>About Integritrade</Eyebrow>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-stone-900 dark:text-white">
                Founded to make IT asset disposition secure, accountable, and
                worth it.
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-stone-700 dark:text-slate-300">
                Integritrade exists to give organizations a frictionless, highly
                secure, and fully accountable IT asset disposition process
                using technology to eliminate human error, protect sensitive
                data, and maximize the return on retired electronics.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <PrimaryButton href="/service-book" testId="button-get-quote">
                  Schedule a Tour
                </PrimaryButton>

                <OutlineButton href="/services" testId="button-learn-more">
                  View Our Services
                </OutlineButton>
              </div>
            </div>
          </ScrollLoader>

          <ScrollLoader>
            <div className="relative h-[300px] w-full overflow-hidden rounded-md sm:h-[380px] lg:h-[460px]">
              <Image
                src={itadWarehouse}
                alt="Integritrade secure ITAD processing facility in Fresno, California"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollLoader>
        </div>

        {/* Stat strip — visual relief + at-a-glance credibility */}
        <ScrollLoader>
          <div className="mt-16 lg:mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-stone-200 bg-stone-200 dark:border-white/10 dark:bg-white/10 lg:grid-cols-4">
            {stats.map(({ Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center bg-white px-5 py-8 text-center dark:bg-dark-secondary"
              >
                <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                <div className="mt-4 font-serif text-2xl font-semibold text-stone-900 dark:text-white lg:text-3xl">
                  {value}
                </div>
                <p className="mt-1 text-sm text-stone-600 dark:text-slate-400">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </ScrollLoader>
      </div>

      {/* ───────────────── OUR TECHNOLOGY — text on top, screenshot showcase below ───────────────── */}
      <div id="tracetech" className="scroll-mt-20 bg-white dark:bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <ScrollLoader>
            <div>
              <Eyebrow>Our Technology</Eyebrow>

              <h2 className="max-w-4xl font-serif text-3xl sm:text-4xl leading-[1.1] tracking-tight text-stone-900 dark:text-white">
                Driven by TraceTech: security and efficiency you can&apos;t
                match.
              </h2>

              <div className="mt-6 max-w-3xl text-base sm:text-lg leading-8 text-stone-700 dark:text-slate-300">
                <p>
                  Better value and ironclad security aren&apos;t mutually
                  exclusive they just require better technology. That&apos;s why
                  we developed TraceTech, our proprietary AI-integrated ERP
                  software that fundamentally changes how ITAD is processed.
                </p>
              </div>

              <ul className="mt-8 grid gap-x-12 gap-y-4 sm:grid-cols-2">
                {[
                  "Automated tracking, auditing, and processing so fewer human hands ever touch your devices.",
                  "Fewer touchpoints mean less risk, zero bottlenecks, and unparalleled security.",
                  "Advanced tracking and analytics designed to yield faster and higher returns on your retired IT assets.",
                  "Every efficiency gain is passed directly back to you.",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-base leading-7 text-stone-700 dark:text-slate-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollLoader>

          {/* Screenshot showcase */}
          <ScrollLoader delay={0.1}>
            <div className="mx-auto mt-12 max-w-5xl lg:mt-16">
              <Image
                src={tracetech}
                alt="Integritrade TraceTech AI ERP — proprietary AI-integrated ITAD asset tracking platform"
                className="h-auto w-full"
                sizes="(max-width: 1024px) 100vw, 1024px"
                quality={100}
                placeholder="blur"
              />
            </div>
          </ScrollLoader>
        </div>
      </div>

      {/* ───────────────── OUR STORY (text left, image right) ───────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollLoader>
            <div>
              <Eyebrow>Our Story</Eyebrow>

              <h2 className="font-serif text-3xl sm:text-4xl leading-[1.1] tracking-tight text-stone-900 dark:text-white">
                Founded by operators who got tired of black-box recycling
                contracts.
              </h2>

              <div className="mt-6 max-w-xl space-y-5 text-base leading-relaxed text-stone-700 dark:text-slate-300">
                <p>
                  Integritrade was built to give organizations a more accountable
                  approach to IT asset disposition. Many businesses are forced to
                  choose between basic recycling vendors and overly complicated
                  enterprise contractors. Our goal was to create a process that
                  combines secure handling, operational transparency, and
                  practical service execution without unnecessary complexity.
                </p>

                <p>
                  Today, we support businesses, schools, healthcare
                  organizations, public agencies, and enterprise teams across
                  California with structured IT asset retirement workflows focused
                  on data protection, responsible reuse, asset recovery, and
                  audit-ready reporting.
                </p>
              </div>
            </div>
          </ScrollLoader>

          <ScrollLoader>
            <div className="relative h-[300px] w-full overflow-hidden rounded-md sm:h-[380px] lg:h-[440px]">
              <Image
                src={recyclingWarehouse}
                alt="Electronics recycling operations inside Integritrade's processing warehouse"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </ScrollLoader>
        </div>
      </div>

      {/* ───────────────── PRINCIPLES ───────────────── */}
      <div className="bg-white dark:bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <ScrollLoader>
            <div className="text-center">
              <Eyebrow center>How We Work</Eyebrow>
              <h2 className="mx-auto max-w-3xl font-serif text-3xl sm:text-4xl leading-[1.1] tracking-tight text-stone-900 dark:text-white">
                Three operating principles, written before our first pickup.
              </h2>
            </div>
          </ScrollLoader>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item, index) => (
              <ScrollLoader
                key={item.title}
                delay={index * 0.08}
                className="h-full"
              >
                <div className="h-full rounded-md border border-stone-200 bg-secondary p-6 dark:border-white/10 dark:bg-dark">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-md border ${item.borderColor}`}
                  >
                    <item.Icon className={`h-5 w-5 ${item.iconColor}`} />
                  </div>

                  <h3 className="mt-5 font-serif text-xl leading-snug text-stone-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-stone-700 dark:text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </ScrollLoader>
            ))}
          </div>
        </div>
      </div>

      {/* ───────────────── VALUE RECOVERY ───────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <ScrollLoader>
          <div className="text-center">
            <Eyebrow center>The Integritrade Difference</Eyebrow>
            <h2 className="mx-auto max-w-3xl font-serif text-3xl sm:text-4xl leading-[1.1] tracking-tight text-stone-900 dark:text-white">
              Smarter disposition &amp; value recovery.
            </h2>
          </div>
        </ScrollLoader>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {valueRecovery.map((item, index) => (
            <ScrollLoader key={item.title} delay={index * 0.08} className="h-full">
              <div className="h-full rounded-md border border-stone-200 bg-white p-6 dark:border-white/10 dark:bg-dark-secondary">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-md border ${item.borderColor}`}
                >
                  <item.Icon className={`h-5 w-5 ${item.iconColor}`} />
                </div>

                <h3 className="mt-5 font-serif text-xl leading-snug text-stone-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-stone-700 dark:text-slate-300">
                  {item.desc}
                </p>

                {"points" in item && item.points && (
                  <ul className="mt-4 space-y-2.5 border-t border-stone-200 pt-4 dark:border-white/10">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <span className="text-sm leading-relaxed text-stone-700 dark:text-slate-300">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </ScrollLoader>
          ))}
        </div>
      </div>

      {/* ───────────────── WHY TRUST US (text left, image right) ───────────────── */}
      <div className="bg-white dark:bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <ScrollLoader>
            <Eyebrow>Why Teams Trust Us</Eyebrow>
            <h2 className="max-w-4xl font-serif text-3xl sm:text-4xl leading-[1.1] tracking-tight text-stone-900 dark:text-white">
              Six reasons compliance officers keep our number saved.
            </h2>
          </ScrollLoader>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.8fr_0.8fr] lg:gap-12 items-stretch">
            {/* Reasons — left */}
            <div className="grid grid-cols-1 gap-x-12 gap-y-9 md:grid-cols-2">
              {trustReasons.map((item, index) => (
                <ScrollLoader key={item.title} delay={index * 0.08}>
                  <div className="flex items-start gap-4">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />

                    <div>
                      <div className="font-serif text-xl text-stone-900 dark:text-white">
                        {item.title}
                      </div>

                      <p className="mt-2 text-base leading-relaxed text-stone-700 dark:text-slate-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollLoader>
              ))}
            </div>

            {/* Image — right */}
            <ScrollLoader className="h-full">
              <div className="relative h-full min-h-[360px] overflow-hidden rounded-md sm:min-h-[440px]">
                <Image
                  src={itadAssemblyLine}
                  alt="Technician disassembling a laptop on an ITAD assembly line in a modern electronics processing facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 32vw"
                />
              </div>
            </ScrollLoader>
          </div>
        </div>
      </div>

      {/* ───────────────── VISIT / CTA ───────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <ScrollLoader>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Eyebrow>Come See It</Eyebrow>

              <h2 className="font-serif text-3xl sm:text-4xl leading-[1.1] tracking-tight text-stone-900 dark:text-white">
                Site visits welcome. Walk the floor before you sign.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-700 dark:text-slate-300">
                We host scheduled facility tours for prospective clients and
                auditors at our secure processing facility in Fresno. Bring
                your compliance lead they&apos;ll see the exact TraceTech-driven
                process your retired devices will go through, from intake to
                final disposition.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <PrimaryButton href="/service-book" testId="button-get-quote">
                  Schedule a Tour
                </PrimaryButton>

                <OutlineButton href="/services" testId="button-learn-more">
                  View Service Details
                </OutlineButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-md border border-stone-200 bg-white p-8 dark:border-white/10 dark:bg-dark-secondary lg:p-10">
                <div className="mb-6 text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                  Visit Integritrade
                </div>

                <dl className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <dt className="mb-1 text-xs uppercase tracking-wider text-muted-foreground dark:text-gray-400">
                        Facility
                      </dt>
                      <dd className="text-sm text-stone-900 dark:text-gray-100">
                        1945 N Fine Ave, STE 111
                        <br />
                        Fresno, CA 93727
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <dt className="mb-1 text-xs uppercase tracking-wider text-muted-foreground dark:text-gray-400">
                        Direct Line
                      </dt>
                      <dd className="text-sm text-stone-900 dark:text-gray-100">
                        (559) 325-4813
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <dt className="mb-1 text-xs uppercase tracking-wider text-muted-foreground dark:text-gray-400">
                        Email
                      </dt>
                      <dd className="text-sm text-stone-900 dark:text-gray-100">
                        info@integritradeLLC.com
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </ScrollLoader>
      </div>
    </section>
  )
}
