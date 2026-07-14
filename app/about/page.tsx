import {
  BadgeCheck,
  Shield,
  FileCheck, 
  Wrench, 
  Recycle,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  TrendingUp,
  BadgeDollarSign,
  HandHeart,
} from "lucide-react"
import Script from "next/script"
import type { Metadata } from "next"
import Image from "next/image"
import itadWarehouse from "@/public/about/itadWarehouse.jpeg"
import itadAssemblyLine from "@/public/about/itadAssemblyLine.png"
import PrimaryButton from "@/components/shared/buttons/PrimaryButton"
import OutlineButton from "@/components/shared/buttons/OutlineButton"
import PageHeader from "@/components/shared/PageHeader"
import ScrollLoader from "@/components/shared/ScrollLoader"

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
                title="The people behind every audited shipment."
                description="We&apos;ve been in this business a long time, and we&apos;ve seen it all: inflated invoices, hidden cross-docking charges, and surprise fees tacked on at the end. We don&apos;t do that. At Integritrade, you get uncompromising data security and exactly what we promised. No games, no surprises."
            />

            <div className="mt-14 grid grid-cols-1 gap-12 rounded-md overflow-hidden">
              {[
                {
                  Icon: TrendingUp,
                  title: "Value Recovery Focused",
                  desc: "Whenever possible, we prioritize refurbishment, remarketing, and responsible reuse workflows to help offset retirement costs before recycling is considered.",
                  iconColor: "text-emerald-600 dark:text-emerald-400",
                  iconBorder: "border-emerald-200 dark:border-emerald-900",
                },
                {
                  Icon: BadgeDollarSign,
                  title: "Revenue Assurance Guarantee",
                  desc: "On qualifying batches, we guarantee zero out-of-pocket costs, even if processing fees surpass the asset value.",
                  iconColor: "text-amber-700 dark:text-amber-400",
                  iconBorder: "border-amber-200 dark:border-amber-900",
                },
                {
                  Icon: HandHeart,
                  title: "Smarter Disposition",
                  desc: "Some providers will charge you disposition fees just to scrap every aging device. We see our clients as partners. When your equipment falls below resale cutlines, we take a different route: we securely sanitize and donate it. Because we're in this together, we completely waive the destruction fees on those items. It's a true team effort that helps the community, saves you money, and ensures your bottom line remains completely unaffected.",
                  iconColor: "text-sky-700 dark:text-sky-400",
                  iconBorder: "border-sky-200 dark:border-sky-900",
                },
              ].map((p, i) => (
                  <div key={p.title} className="">
                    <div className="flex gap-2 flex-col md:flex-row md:items-center">
                      <div className={``}>
                        <p.Icon className={`h-5 w-5 ${p.iconColor}`} />
                      </div>
                      <h3 className="font-serif text-2xl text-gray-900 dark:text-gray-100 leading-snug">
                        {p.title}
                      </h3>
                    </div>

                    {/* <div className="my-4 h-px w-full bg-stone-200 dark:bg-slate-700" /> */}

                    <p className="mt-2 text-base leading-relaxed text-stone-700 dark:text-slate-300 custom-text-center">
                      {p.desc}
                    </p>
                  </div>
              ))}
            </div>
        </ScrollLoader>
      </div>

      {/* ───────────────── OUR STORY ───────────────── */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <ScrollLoader>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="">
                  <div className="max-w-4xl mb-4">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="h-px w-12 bg-emerald-700 dark:bg-emerald-500" />
                      <span className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                        Our Story
                      </span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900 dark:text-gray-100">
                      Founded by operators who got tired of black-box recycling
                      contracts.
                    </h2>
                  </div>
                  <div className="max-w-4xl space-y-5 text-base leading-relaxed text-stone-700 dark:text-slate-300 mt-8">
                    <p className="custom-text-center">
                      Integritrade was built to give organizations a more accountable approach to IT asset disposition. Many businesses are forced to choose between basic recycling vendors and overly complicated enterprise contractors. Our goal was to create a process that combines secure handling, operational transparency, and practical service execution without unnecessary complexity.
                      </p>

                    <p className="custom-text-center">
                      Today, we support businesses, schools, healthcare organizations, public agencies, and enterprise teams with structured IT asset retirement workflows focused on data protection, responsible recycling, asset recovery, and audit-ready reporting.
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

      {/* ───────────────── PRINCIPLES  ───────────────── */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollLoader>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-emerald-700 dark:bg-emerald-500" />
              <span className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                How We Operate
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900 dark:text-gray-100 max-w-3xl">
              Three operating principles, written before our first pickup.
            </h2>
          </ScrollLoader>

          <div className="mt-14 grid grid-cols-1 gap-12 rounded-md overflow-hidden">
            {[
              {
                index:1,
                num: "01",
                Icon: FileCheck,
                title: "Documented or it didn't happen",
                desc: "Every ITAD or data destruction project gets your devices a serial-level record. If we can't show it on paper, we don't claim it.",
                iconColor: "text-emerald-600 dark:text-emerald-400",
                iconBorder: "border-emerald-200 dark:border-emerald-900",
              },
              {
                index:2,
                num: "02",
                Icon: Wrench,
                title: "End-to-End, Owner-Operated Security",
                desc: "We never use subcontracted shred trucks or white-label brokers. Every ITAD and data destruction project is handled exclusively by vetted Integritrade professionals. Your sensitive data is destroyed within our secure, access-restricted, and fully surveilled facility. With us, your security is never outsourced.",
                iconColor: "text-amber-700 dark:text-amber-400",
                iconBorder: "border-amber-200 dark:border-amber-900",
              },
              {
                index:3,
                num: "03",
                Icon: Recycle,
                title: "Rigorous Environmental Compliance",
                desc: "We strictly adhere to R2v3 standards for the ethical and legal processing of all electronic waste. We prioritize secure reuse, remarketing, and responsible recycling to maximize landfill diversion. For hazardous materials that cannot be recovered, we guarantee safe, fully compliant disposition through authorized environmental channels, protecting your brand from liability.",
                iconColor: "text-sky-700 dark:text-sky-400",
                iconBorder: "border-sky-200 dark:border-sky-900",
              },
            ].map((p, i) => (
              <ScrollLoader key={p.title} delay={i * 0.08}>
              <div key={p.title} className="">
                  <div className="flex gap-2 flex-col md:flex-row md:items-center">
                      <div className={``}>
                        <p.Icon className={`h-5 w-5 ${p.iconColor}`} />
                      </div>
                      <h3 className="font-serif text-2xl text-gray-900 dark:text-gray-100 leading-snug">
                        <span>{p.title}</span>
                      </h3>
                    </div>
                  
                  <p className="mt-4 text-base leading-relaxed text-stone-700 dark:text-slate-300 custom-text-center">
                    {p.desc}
                  </p>
                </div>
              </ScrollLoader>
            ))}
          </div> 
        </div>
      </div>

      {/* ───────────────── WHY TRUST US  ───────────────── */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <ScrollLoader>
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-emerald-700 dark:bg-emerald-500" />
              <span className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                Why Teams Choose Us
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900 dark:text-gray-100 max-w-3xl">
              Six reasons compliance officers keep our number saved.
            </h2>
          </ScrollLoader>

         <div className="flex flex-col md:flex-row gap-12 items-center mt-8">
             <div className="lg:w-10/12">
                <div>
                  <Image 
                      src={itadAssemblyLine}
                      alt="Technician disassembling laptop on ITAD assembly line with conveyor system in a modern electronics processing facility"
                      className="rounded-md"
                  />
              </div>
             </div>

             <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  {
                    title: "Industry-leading security",
                    desc: "Data destruction processes that exceed NIST 800-88 with verified, video-witnessed documentation.",
                  },
                  {
                    title: "Value maximization",
                    desc: "Strategic remarketing recovers measurable resale value to offset retirement costs.",
                  },
                  {
                    title: "Environmental leadership",
                    desc: "R2-certified, secure and legal e-waste processing with vetted and audited downstream providers for full disposition workflows.",
                  },
                  {
                    title: "Transparent processes",
                    desc: "Serialized chain-of-custody from your dock to final processor visible on every report.",
                  },
                  {
                    title: "Regulatory compliance",
                    desc: "Aligned to HIPAA, SOX, GLBA, FERPA, and California environmental regulations.",
                  },
                  {
                    title: "Customized solutions",
                    desc: "Workflows tailored to your industry, scale, and audit cadence not one-size-fits-all SLAs.",
                  },
                ].map((item, i) => (
                  <ScrollLoader key={item.title} delay={i * 0.08}>
                    <div key={i} className="flex items-start gap-4">
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

          <div></div>
        </div>
      </div>

      {/* ───────────────── EXPERTISE TEAM CARDS ───────────────── */}
      <div className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollLoader>
            <div className="mb-14">
              <div className="">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-12 bg-emerald-700 dark:bg-emerald-500" />
                  <span className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                    Specialist Disciplines
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900 dark:text-gray-100 mb-6">
                  Three disciplines, one accountable team.
                </h2>
              </div>
              <div className="">
                <p className="text-base leading-relaxed text-stone-700 dark:text-slate-300  custom-text-center">
                  Security, environmental, and operations leads sit at the same
                  table so your retirement plan reflects all three constraints
                  from day one.
                </p>
              </div>
            </div>
          </ScrollLoader>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-md overflow-hidden">
            {[
              {
                num: "01",
                Icon: Shield,
                title: "Security Specialists",
                desc: "Certified experts in data protection, sanitization standards, and regulatory documentation.",
                iconColor: "text-emerald-600 dark:text-emerald-400",
                iconBorder: "border-emerald-200 dark:border-emerald-900",
              },
              {
                num: "02",
                Icon: Award,
                title: "Environmental Experts",
                desc: "R2 stewards managing downstream verification and sustainable material recovery.",
                iconColor: "text-amber-700 dark:text-amber-400",
                iconBorder: "border-amber-200 dark:border-amber-900",
              },
              {
                num: "03",
                Icon: Users,
                title: "Operations Team",
                desc: "Logistics and project leads coordinating site walks, pickups, and reporting timelines.",
                iconColor: "text-sky-700 dark:text-sky-400",
                iconBorder: "border-sky-200 dark:border-sky-900",
              },
            ].map((p, i) => (
              <ScrollLoader key={p.title} delay={i * 0.08}>
                <div key={i} className="p-8 lg:p-10 bg-white dark:bg-dark-secondary h-full">
                  <div className={`mb-8 p-3 border inline-block rounded-md ${p.iconBorder}`}>
                    <p.Icon className={`h-5 w-5 ${p.iconColor}`} />
                  </div>
                  <h3 className="font-serif text-2xl text-gray-900 dark:text-gray-100 leading-snug">
                    {p.title}
                  </h3>

                  <div className="my-4 h-px w-full bg-stone-200 dark:bg-slate-700" />

                  <p className="mt-4 text-base  text-stone-700 dark:text-slate-300 leading-relaxed custom-text-center">
                    {p.desc}
                  </p>
                </div>
              </ScrollLoader>
            ))}
          </div>
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
          </ScrollLoader>
        </div>
      </div>
    </section>
  )
}