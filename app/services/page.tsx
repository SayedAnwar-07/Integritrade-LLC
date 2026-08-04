import type { Metadata } from "next"
import Script from "next/script"
import Process from "@/components/services/Process"
import PageHeader from "@/components/shared/PageHeader"
import ServicesShowcase from "@/components/services/Servicesshowcase"
import ServicesCTA from "@/components/services/Servicescta"
import { decisionGuide, servicesData, valueRecoveryDisclaimer } from "@/data/servicesData"
import ScrollLoader from "@/components/shared/ScrollLoader"
import SectionHeader from "@/components/shared/SectionHeader"
import RackOfServers from "@/public/services/rack-of-servers.jpg"
import Image from "next/image"
import ReadMore from "@/components/shared/buttons/ReadMore"

export const metadata: Metadata = {
  title: "Enterprise ITAD, Data Destruction & E-Waste Recycling | Integritrade",
  description:
    "R2v3 certified IT asset disposition, NIST 800-88 data destruction, and electronics recycling for enterprises retiring 500+ assets. Nationwide pickup from our Fresno, CA facility.",
  alternates: {
    canonical: "/services/",
  },
  openGraph: {
    title: "Enterprise ITAD & Recycling Services | Integritrade LLC",
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
      streetAddress: "1945 N Fine Ave, STE 111",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93727",
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
    <main className="bg-secondary dark:bg-dark py-10 md:py-24">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollLoader>
          <PageHeader
            eyebrow="Service Level Comparison"
            title="Choose the Right Service Level for Your Retired IT Assets"
            description="Not every retired-electronics project needs the same handling. Integritrade offers ITAD service levels across California, from responsible e-waste recycling to certified data destruction to a full ITAD program with value recovery, so you can match your compliance, data security, and recovery goals to the right package."
          />
        </ScrollLoader>

        <section>
          <ServicesShowcase />
        </section>

        <section className="mt-6">
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

        <section>
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
        
        <section>
          <Process />
        </section>

        <section className="mt-20">
          <ServicesCTA />
        </section>

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