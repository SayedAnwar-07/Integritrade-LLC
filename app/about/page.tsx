import {
  BadgeCheck,
  FileCheck,
  Wrench,
  Recycle,
  TrendingUp,
  BadgeDollarSign,
  HandHeart,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import Script from "next/script"
import type { Metadata } from "next"
import Image from "next/image"
import itadWarehouse from "@/public/about/itadWarehouse.jpeg"
import itadAssemblyLine from "@/public/about/itadAssemblyLine.png"
import PageHeader from "@/components/shared/PageHeader"
import ScrollLoader from "@/components/shared/ScrollLoader"
import OutlineButton from "@/components/shared/buttons/OutlineButton"
import PrimaryButton from "@/components/shared/buttons/PrimaryButton"

export const metadata: Metadata = {
  title: "About Integritrade LLC | Trusted ITAD and Recycling Partner",
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

      {/* ───────────────── HERO ───────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollLoader>
          <PageHeader
            eyebrow="About Integritrade"
            title="The people and the technology behind every audited shipment."
            description="We've been in this business long enough to see it all: inflated invoices, hidden cross-docking charges, and surprise fees tacked on at the end. We don't do that. At Integritrade, you get uncompromising data security, maximum asset value recovery, and exactly what we promised. No games, no surprises."
          />
        </ScrollLoader>
      </div>

      {/* ───────────────── Mission & Technology ───────────────── */}
      <section className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <ScrollLoader>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

              {/* Mission */}
              <div className="lg:col-span-4">
                <div className="">
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight text-gray-900 dark:text-gray-100">
                    Our Mission
                  </h2>

                  <div className="mt-7 h-px w-14 bg-gray-900 dark:bg-gray-100" />

                  <p className="mt-7 text-base sm:text-lg leading-8 text-stone-700 dark:text-slate-300 custom-text-center">
                    To provide organizations with a frictionless, highly secure, and
                    fully accountable IT asset disposition process, leveraging
                    advanced technology to eliminate human error, protect sensitive
                    data, and maximize the return on retired electronics.
                  </p>
                </div>
              </div>

              {/* TraceTech */}
              <div className="lg:col-span-8 lg:border-l lg:border-stone-200 lg:dark:border-white/10 lg:pl-16">

                <h2 className="max-w-4xl font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight text-gray-900 dark:text-gray-100">
                  Driven by TraceTech: Security and Efficiency You Can&apos;t Match
                </h2>

                <div className="mt-9 max-w-4xl space-y-6 text-base sm:text-lg leading-8 text-stone-700 dark:text-slate-300">
                  <p className="custom-text-center">
                    Better value and ironclad security aren't mutually exclusive they just require better technology. That's why we developed TraceTech, our proprietary AI-integrated ERP software.
                  </p>

                  <p className="custom-text-center">
                    TraceTech fundamentally changes how ITAD is processed. By automating tracking, auditing, and processing workflows, TraceTech minimizes the number of human hands touching your electronic devices. Fewer touchpoints mean less risk, zero bottlenecks, and unparalleled security. It allows us to process your assets faster, more securely and more cost-effectively than legacy providers and that efficiency gets passed directly to you
                  </p>

                </div>
              </div>

            </div>
          </ScrollLoader>
        </div>
      </section>      

      {/* ───────────────── SMARTER DISPOSITION ───────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28">
        <ScrollLoader>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900 dark:text-gray-100 text-center">
            Smarter Disposition &amp; Value Recovery
          </h2>
        </ScrollLoader>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-[1.15fr_0.85fr] md:items-stretch">
          {/* Left column */}
          <div className="grid grid-cols-1 gap-5">
            <ScrollLoader delay={0}>
              <article className="h-full rounded-md border border-stone-200 bg-white p-5 dark:border-white/10 dark:bg-dark-secondary">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-emerald-300  dark:border-emerald-400">
                    <TrendingUp className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  <h3 className="font-serif text-2xl leading-snug text-gray-900 dark:text-gray-100">
                    Value Recovery Focused
                  </h3>
                </div>

                <p className="mt-2 text-base leading-relaxed text-stone-700 dark:text-slate-300 custom-text-center">
                  Whenever possible, we prioritize refurbishment, parts harvesting, and responsible reuse workflows to help offset retirement costs before recycling is even considered.
                </p>
              </article>
            </ScrollLoader>

            <ScrollLoader delay={0.08}>
              <article className="h-full rounded-md border border-stone-200 bg-white p-5 dark:border-white/10 dark:bg-dark-secondary">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-amber-300 dark:border-amber-500">
                    <BadgeDollarSign className="h-5 w-5 text-amber-700 dark:text-amber-400" />
                  </div>

                  <h3 className="font-serif text-2xl leading-snug text-gray-900 dark:text-gray-100">
                    Revenue Assurance Guarantee
                  </h3>
                </div>

                <p className="mt-2 text-base leading-relaxed text-stone-700 dark:text-slate-300 custom-text-center">
                  On qualifying batches, we guarantee zero out-of-pocket costs, even if processing fees surpass the asset value.
                </p>
              </article>
            </ScrollLoader>
          </div>

          {/* Right column */}
          <div className="h-full">
            <ScrollLoader delay={0.16} className="h-full">
              <article className="flex h-full flex-col rounded-md border border-stone-200 bg-white p-5 dark:border-white/10 dark:bg-dark-secondary">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-sky-500 dark:border-sky-400">
                    <HandHeart className="h-5 w-5 text-sky-700 dark:text-sky-400" />
                  </div>

                  <h3 className="font-serif text-2xl leading-snug text-gray-900 dark:text-gray-100">
                    A True Partnership Approach
                  </h3>
                </div>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-stone-700 dark:text-slate-300">
                  <p className="custom-text-center">
                    Some providers charge you disposition fees just to scrap every aging device. We see our clients as partners.
                  </p>

                  <p className="custom-text-center">
                    When your equipment falls below resale cutlines, we take a different route: we securely sanitize and donate it. We completely waive the destruction fees on those items. It's a team effort that helps the community, saves you money, and ensures your bottom line remains unaffected.
                  </p>
                </div>
              </article>
            </ScrollLoader>
          </div>
        </div>
      </div>

      {/* ───────────────── OUR STORY ───────────────── */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <ScrollLoader>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div>
                <div className="max-w-4xl mb-4">
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900 dark:text-gray-100">
                    Founded by operators who got tired of black-box recycling contracts.
                  </h2>
                </div>

                <div className="max-w-4xl space-y-5 text-base leading-relaxed text-stone-700 dark:text-slate-300 mt-8">
                  <p className="custom-text-center">
                    Integritrade was built to give organizations a more accountable approach to IT asset disposition. Many businesses are forced to choose between basic recycling vendors and overly complicated enterprise contractors. Our goal was to create a process that combines secure handling, operational transparency, and practical service execution without unnecessary complexity.
                  </p>

                  <p className="custom-text-center">
                    Today, we support businesses, schools, healthcare organizations, public agencies, and enterprise teams across California with structured IT asset retirement workflows focused on data protection, responsible reuse, asset recovery, and audit-ready reporting.
                  </p>
                </div>
              </div>

              <div>
                <Image
                  src={itadWarehouse}
                  alt="ITAD warehouse"
                  className="rounded-md"
                />
              </div>
            </div>
          </ScrollLoader>
        </div>
      </div>

      {/* ───────────────── PRINCIPLES ───────────────── */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollLoader>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900 dark:text-gray-100 max-w-4xl mx-auto text-center">
              Three operating principles, written before our first pickup.
            </h2>
          </ScrollLoader>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 rounded-md overflow-hidden">
            {[
              {
                Icon: FileCheck,
                title: "Documented or it didn't happen",
                desc: "Powered by TraceTech, every ITAD or data destruction project receives a serial-level record. If we can't show it on paper and in our system, we don't claim it.",
                iconColor: "text-emerald-600 dark:text-emerald-400",
                borderColor: "border-emerald-600 dark:border-emerald-400",
              },
              {
                Icon: Wrench,
                title: "End-to-End, Owner-Operated Security",
                desc: "We never use subcontracted shred trucks or white-label brokers. Every project is handled exclusively by vetted Integritrade professionals. Your sensitive data is destroyed within our secure, access-restricted, and fully surveilled 30,000 sq ft facility. With us, your security is never outsourced.",
                iconColor: "text-amber-700 dark:text-amber-400",
                borderColor: "border-amber-700 dark:border-amber-400",
              },
              {
                Icon: Recycle,
                title: "Rigorous Environmental Compliance",
                desc: "We strictly adhere to R2v3 standards for the ethical and legal processing of all electronic waste. We prioritize secure reuse, remarketing, and parts harvesting to maximize landfill diversion. For materials that cannot be recovered, we guarantee safe, fully compliant disposition through authorized environmental channels protecting your brand from liability.",
                iconColor: "text-sky-700 dark:text-sky-400",
                borderColor: "border-sky-700 dark:border-sky-400",
              },
            ].map((item, index) => (
              <ScrollLoader key={item.title} delay={index * 0.08}>
                <div className="h-full rounded-md border border-stone-200 bg-white p-5 dark:border-white/10 dark:bg-dark-secondary">
                  <div className="flex flex-col gap-2">
                    <div
                      className={`flex h-11 w-11 items-center justify-center mb-2 rounded-md border ${item.borderColor}`}
                    >
                      <item.Icon className={`h-5 w-5 ${item.iconColor}`} />
                    </div>

                    <h3 className="font-serif text-2xl leading-snug text-gray-900 dark:text-gray-100">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-stone-700 dark:text-slate-300 custom-text-center">
                    {item.desc}
                  </p>
                </div>
              </ScrollLoader>
            ))}
          </div>
        </div>
      </div>

      {/* ───────────────── WHY TRUST US ───────────────── */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <ScrollLoader>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900 dark:text-gray-100 max-w-4xl mx-auto text-center">
              Six reasons compliance officers keep our number saved.
            </h2>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-[0.8fr_1.8fr] gap-10 lg:gap-12 items-stretch">
              {/* Image */}
              <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-0 overflow-hidden rounded-md">
                <Image
                  src={itadAssemblyLine}
                  alt="Technician disassembling laptop on ITAD assembly line with conveyor system in a modern electronics processing facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 32vw"
                />
              </div>

              {/* Reasons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  {
                    title: "TraceTech AI Integration",
                    desc: "Proprietary AI-driven ERP software that minimizes human touchpoints, accelerates processing, and delivers a level of security and efficiency no legacy provider can match.",
                  },
                  {
                    title: "Industry-Leading Data Security",
                    desc: "Destruction processes that exceed NIST 800-88 standards, with certified documentation on every project. Optional video-witnessed destruction available upon request.",
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
                ].map((item, index) => (
                  <ScrollLoader key={item.title} delay={index * 0.08}>
                    <div className="flex items-start gap-4">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />

                      <div>
                        <div className="font-serif text-xl text-gray-900 dark:text-gray-100">
                          {item.title}
                        </div>

                        <p className="mt-2 text-base leading-relaxed text-stone-700 dark:text-slate-300 custom-text-center">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollLoader>
                ))}
              </div>
            </div>
          </ScrollLoader>
        </div>
      </div>

      {/* ───────────────── VISIT / CTA ───────────────── */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:py-28">
          <ScrollLoader>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-6 ">
                  <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400" />
                  <span className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                    Come See It
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900 dark:text-gray-100">
                  Site visits welcome. Walk the floor before you sign
                </h2>
                <p className="mt-6 text-base leading-relaxed text-stone-700 dark:text-slate-300 max-w-xl custom-text-center">
                  We host scheduled facility tours for prospective clients and auditors at our 30,000 sq ft secure processing facility in Fresno. Bring your compliance lead they'll see the exact TraceTech-driven process your retired devices will go through, from intake to final disposition.
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
          </ScrollLoader>
        </div>
      </div>
    </section>
  )
}