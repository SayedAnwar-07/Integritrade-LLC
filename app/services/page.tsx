import type { Metadata } from "next"
import Script from "next/script"
// Ian asked on 2026-09-20 to pull the four-step process section. Kept, not
// deleted, so it can be dropped back in without rebuilding it.
// import Process from "@/components/services/Process"
import ServiceCards from "@/components/services/ServiceCards"
import ServicesCTA from "@/components/services/Servicescta"
import { decisionGuide, servicesData, valueRecoveryDisclaimer } from "@/data/servicesData"
import ServiceComparisonMatrix from "@/components/services/ServiceComparisonMatrix"
import ScrollLoader from "@/components/shared/ScrollLoader"
import SectionHeader from "@/components/shared/SectionHeader"
import SectionFloatNav from "@/components/shared/SectionFloatNav"
import RackOfServers from "@/public/services/rack-of-servers.jpg"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ReadMore from "@/components/shared/buttons/ReadMore"

const NAV_SECTIONS = [
  { id: "services", label: "Services" },
  { id: "compare", label: "What's Included" },
  { id: "decision-guide", label: "Decision Guide" },
  { id: "eligibility", label: "Eligibility" },
  // { id: "process", label: "Process" },
];

export const metadata: Metadata = {
  title: { absolute: "ITAD, Data Destruction & E-Waste Recycling Services" },
  description:
    "Compare our service levels: basic recycling, certified data destruction, and full IT asset disposition with value recovery. R2v3 certified, statewide.",
  alternates: {
    canonical: "/services/",
  },
  openGraph: {
    title: "Enterprise ITAD & Recycling Services",
    description:
      "R2v3 certified IT asset disposition, NIST 800-88 data destruction, and electronics recycling for enterprises. Serialized chain of custody. Nationwide pickup from Fresno, CA.",
    url: "https://integritradellc.com/services/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
  },
  robots: {
  index: true,
  follow: true,

  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
},
}

export default function ServicesPage() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://integritradellc.com/#organization",
    name: "Integritrade LLC",
    url: "https://integritradellc.com/",
    telephone: "+1-559-325-4813",
    email: "info@integritradellc.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "944 S Topeka Ave",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93721",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    priceRange: "$$$",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-559-325-4813",
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "English",
    },
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: servicesData.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": `https://integritradellc.com/services/${service.slug}/`,
        name: service.pageTitle,
        description: service.metaDescription,
        url: `https://integritradellc.com/services/${service.slug}/`,
        provider: {
          "@id": "https://integritradellc.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
      },
    })),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://integritradellc.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://integritradellc.com/services/",
      },
    ],
  }

  return (
    <main className="bg-secondary dark:bg-dark pb-10 md:pb-24">
      {/* Full-bleed hero: one headline, one line, one action. */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={RackOfServers}
          alt="Racked servers staged for secure IT asset disposition at Integritrade"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
          placeholder="blur"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/70 to-black/40"
        />

        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Choose the right service level for your retired IT assets.
            </h1>

            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-stone-200">
              From responsible electronics recycling with a final weight ticket, to secure data destruction with serialized reporting, to full ITAD with real-time asset tracking, value recovery, and complete project visibility, Integritrade offers the right level of service for every retirement project. As your dedicated lifecycle partner, no matter the logistics or compliance challenge, we will make it happen.
            </p>

            <Link
              href="/service-book/"
              className="mt-9 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Talk to an ITAD specialist
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-12">

          <aside className="hidden min-w-0 lg:col-span-2 lg:block">
            <SectionFloatNav sections={NAV_SECTIONS} />
          </aside>

          <div className="min-w-0 lg:col-span-10">
            <section id="services" className="scroll-mt-28">
          <ScrollLoader>
            <ServiceCards />
          </ScrollLoader>
        </section>

            <section id="compare" className="scroll-mt-28 mt-16">
          <ScrollLoader>
            <ServiceComparisonMatrix />
          </ScrollLoader>
        </section>

            <section id="decision-guide" className="scroll-mt-28 mt-6">
          <SectionHeader
            eyebrow="Decision Guide"
            title="Which Service Level Is Right for You?"
            description="Match your situation to the right service level. Each row pairs a common scenario with the package designed to handle it."
          />

          <ScrollLoader>
            {/* Mobile: each row as a stacked card (no horizontal scroll) */}
            <div className="mt-12 space-y-4 md:hidden">
              {decisionGuide.map((row, i) => (
                <div
                  key={i}
                  className="rounded-md border border-gray-200 p-5 dark:border-gray-800"
                >
                  <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                    {row.scenario}
                  </p>
                  <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800">
                    <span className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                      Recommended Service Level
                    </span>
                    <span className="font-serif text-[15px] font-semibold text-gray-900 dark:text-white">
                      {row.recommendation}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop / tablet: full table */}
            <div className="mt-12 hidden overflow-hidden rounded-md border border-gray-200 dark:border-gray-800 md:block">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-white/5">
                    <th className="w-1/2 px-6 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                      Your Situation
                    </th>
                    <th className="px-6 py-4 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                      Recommended Service Level
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {decisionGuide.map((row, i) => (
                    <tr key={i} className="align-top">
                      <td className="px-6 py-5 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                        {row.scenario}
                      </td>
                      <td className="px-6 py-5 font-serif text-[15px] font-semibold tracking-tight text-gray-900 dark:text-white">
                        {row.recommendation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollLoader>
        </section>

            <section id="eligibility" className="scroll-mt-28">
            <ScrollLoader>
              <div className="mt-12 lg:mt-24 pt-10">
                <SectionHeader
                  eyebrow="Disclaimer"
                  title="Value Recovery Service Eligibility"
                />

                <div className="mt-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Image — first on mobile, right on desktop */}
                  <div className="lg:col-span-5 lg:order-2 relative h-[260px] lg:h-auto lg:min-h-[420px] overflow-hidden rounded-md">
                    <Image
                      src={RackOfServers}
                      alt="Rack of servers"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      placeholder="blur"
                    />
                  </div>

                  {/* Disclaimer text — second on mobile, left on desktop */}
                  <aside className="lg:col-span-7 lg:order-1">
                    {/* Mobile / tablet: clamped with Read More */}
                    <div className="lg:hidden">
                      <ReadMore previewLines={3}>
                        {valueRecoveryDisclaimer.map((para, i) => (
                          <p
                            key={i}
                            className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 custom-text-center mb-6 last:mb-0"
                          >
                            {para}
                          </p>
                        ))}
                      </ReadMore>
                    </div>

                    {/* Desktop: full text, no toggle */}
                    <div className="hidden lg:block">
                      {valueRecoveryDisclaimer.map((para, i) => (
                        <p
                          key={i}
                          className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 custom-text-center mb-6 last:mb-0"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </aside>
                </div>
              </div>
            </ScrollLoader>
        </section>
        
            {/* Removed at Ian's request on 2026-09-20. Left in place, commented,
                so it can be restored by uncommenting this block, the import at
                the top of the file, and the "process" entry in NAV_SECTIONS. */}
            {/*
            <section id="process" className="scroll-mt-28">
              <Process />
            </section>
            */}

            <section className="mt-20">
              <ServicesCTA />
            </section>

          </div>
        </div>

        <Script
          id="localbusiness-jsonld-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        <Script
          id="itemlist-jsonld-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />

        <Script
          id="breadcrumb-jsonld-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </div>
    </main>
  )
}