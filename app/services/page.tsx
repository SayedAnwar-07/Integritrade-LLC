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
            description="Not every electronics recycling project needs the same level of handling. Some clients have already completed data destruction and simply need responsible e-waste recycling. Others need documented destruction for compliance. Many need a complete ITAD program that includes data sanitization, reporting, recycling, refurbishment, remarketing, and value recovery. Integritrade makes it easy to choose the right service level based on your risk, equipment age, documentation needs, and recovery goals."
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
            <dl className="mt-12 border-t border-gray-200 dark:border-gray-800">
              {decisionGuide.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-3 py-7 border-b border-gray-200 dark:border-gray-800"
                >
                  <dt className="md:col-span-7 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                    {row.scenario}
                  </dt>
                  <dd className="md:col-span-5 font-serif text-[15px] font-semibold text-gray-900 dark:text-white tracking-tight self-center">
                    {row.recommendation}
                  </dd>
                </div>
              ))}
            </dl>
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
                    <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                      {valueRecoveryDisclaimer.map((para, i) => (
                        <p key={i} className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 text-justify mb-6">
                          {para}
                        </p>
                      ))}
                    </p>
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