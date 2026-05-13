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
        url: "https://integritradellc.com/main-logo.png",
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
    images: ["https://integritradellc.com/main-logo.png"],
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
    logo: "https://integritradellc.com/main-logo.png",
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
                description="Leading the industry in secure IT asset disposition and environmental responsibility since our founding."
            />
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
                  <div className="max-w-4xl space-y-5 text-muted-foreground dark:text-gray-300 leading-relaxed mt-8">
                    <p className="text-justify">
                      Founded with a mission to provide secure and environmentally responsible IT asset disposition services, Integritrade has become a trusted partner for businesses across industries. Our certified professionals ensure the highest standards of security, compliance, and sustainability.
                    </p>
                    <p className="text-justify">
                      From a local service provider to a regional leader in ITAD solutions, our growth has been driven by innovation, integrity, and customer satisfaction
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
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

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 rounded-md overflow-hidden">
            {[
              {
                index:1,
                num: "01",
                Icon: FileCheck,
                title: "Documented or it didn't happen",
                desc: "Every device gets a serial-level record. If we can't show it on paper, we don't claim it.",
                iconColor: "text-emerald-600 dark:text-emerald-400",
                iconBorder: "border-emerald-200 dark:border-emerald-900",
              },
              {
                index:2,
                num: "02",
                Icon: Wrench,
                title: "Owner-operated, end to end",
                desc: "No subcontracted shred trucks, no white-label brokers. Your pickup is run by Integritrade staff.",
                iconColor: "text-amber-700 dark:text-amber-400",
                iconBorder: "border-amber-200 dark:border-amber-900",
              },
              {
                index:3,
                num: "03",
                Icon: Recycle,
                title: "Downstream you can name",
                desc: "We publish our R2 downstream chain. You can trace any retired device to its final processor.",
                iconColor: "text-sky-700 dark:text-sky-400",
                iconBorder: "border-sky-200 dark:border-sky-900",
              },
            ].map((p, i) => (
              <ScrollLoader key={p.title} delay={i * 0.08}>
              <div key={i} className="p-8 lg:p-10 bg-white dark:bg-dark-secondary">
                  <div className={`mb-8 p-3 border inline-block rounded-md ${p.iconBorder}`}>
                    <p.Icon className={`h-5 w-5 ${p.iconColor}`} />
                  </div>
                  <h3 className="font-serif text-2xl text-gray-900 dark:text-gray-100 leading-snug h-16">
                    {p.title}
                  </h3>

                  <div className="my-4 h-px w-full bg-stone-200 dark:bg-slate-700" />
                  
                  <p className="mt-4 text-sm text-muted-foreground dark:text-gray-300 leading-relaxed">
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
                    desc: "R2-certified, zero-landfill processing with a published downstream chain.",
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
                        <p className="mt-2 text-sm text-muted-foreground dark:text-gray-300 leading-relaxed text-justify">
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
                <p className="text-muted-foreground dark:text-gray-300 leading-relaxed text-justify">
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
                <div key={i} className="p-8 lg:p-10 bg-white dark:bg-dark-secondary">
                  <div className={`mb-8 p-3 border inline-block rounded-md ${p.iconBorder}`}>
                    <p.Icon className={`h-5 w-5 ${p.iconColor}`} />
                  </div>
                  <h3 className="font-serif text-2xl text-gray-900 dark:text-gray-100 leading-snug">
                    {p.title}
                  </h3>

                  <div className="my-4 h-px w-full bg-stone-200 dark:bg-slate-700" />

                  <p className="mt-4 text-sm text-muted-foreground dark:text-gray-300 leading-relaxed text-justify">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
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
                <p className="mt-6 text-muted-foreground dark:text-gray-300 leading-relaxed max-w-xl text-justify">
                  We host scheduled facility tours for prospective clients and
                  auditors. Bring your compliance lead they&apos;ll see the same
                  process your retired devices will go through.
                </p>
                {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-10">
                      <PrimaryButton href="/service-book" testId="button-get-quote">
                          Schedule a Tour
                      </PrimaryButton>
                
                      <OutlineButton href="/services" testId="button-learn-more">
                          Explore Services
                      </OutlineButton>
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