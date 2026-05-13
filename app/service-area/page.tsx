import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
} from "lucide-react";
import ServicingArea from "@/components/service-area/ServicingArea";
import PageHeader from "@/components/shared/PageHeader";
import WhyChoose from "@/components/home/WhyChoose";
import ServiceMap from "@/components/service-area/ServiceMap";
import ScrollLoader from "@/components/shared/ScrollLoader";


export const metadata: Metadata = {
  title:
    "ITAD & E-Waste Recycling Service Area | Integritrade LLC California Coverage",
  description:
    "Integritrade LLC serves businesses across California with R2v3-certified IT asset disposition, secure data destruction, and responsible e-waste recycling. Find local coverage in San Francisco, Silicon Valley, the Peninsula, the East Bay, North Bay, and Central Valley.",
  keywords: [
    "IT asset disposition California",
    "ITAD service area",
    "data destruction California",
    "e-waste recycling Bay Area",
    "hard drive shredding California",
    "R2v3 certified ITAD",
    "Fresno electronics recycling",
    "Silicon Valley ITAD",
  ],
  alternates: {
    canonical: "/services/it-asset-disposition/",
  },
  openGraph: {
    title: "ITAD & E-Waste Recycling Service Area | Integritrade LLC",
    description:
      "R2v3-certified IT asset disposition and data destruction across California. Local coverage from the Bay Area to the Central Valley.",
    url: "https://integritradellc.com/services/it-asset-disposition/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://integritradellc.com/main-logo.png",
        width: 1200,
        height: 630,
        alt: "Integritrade LLC Service Area | California ITAD Coverage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ITAD & E-Waste Recycling Service Area | Integritrade LLC",
    description:
      "R2v3-certified IT asset disposition and data destruction across California.",
    images: ["https://integritradellc.com/main-logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function ServiceAreaPage() {

  return (
    <main className="overflow-x-hidden bg-secondary text-gray-900 transition-colors duration-300 dark:bg-dark dark:text-gray-100">
      {/* ─────────── HERO ─────────── */}
      <section className="relative px-4 pt-16 pb-20 sm:pt-24 sm:pb-28  mx-auto max-w-7xl">
        <ScrollLoader>
          <PageHeader
                eyebrow="Service Area"
                title="Local pickups,statewide and accountability."
                description="Integritrade serves California businesses with R2v3-certified IT
                  asset disposition and data destruction. From San Francisco
                  offices to Central Valley distribution centers, every retirement
                  runs on the same chain of custody."
                linkText="Get in touch"
                linkHref="/service-book/"
          />
         </ScrollLoader>
      </section>

      {/* ─────────── MAP — EDITORIAL SPLIT ─────────── */}
      <section className="px-4 py-12 ">
        <div className="mx-auto max-w-7xl">
          <ScrollLoader>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
              {/* Sticky column */}
              <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-28">
                  <h2 className="font-serif text-3xl leading-tight tracking-tight text-gray-900 dark:text-white">
                    One Controlled Chain of Custody Across Every California Pickup
                  </h2>
                  <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300 text-justify">
                    Every pickup terminates at our Fresno R2v3 processing floor.
                    No regional partners, no white-label brokers, no transfers
                    between carriers. The same audit trail covers a startup in
                    SoMa and a school district in Bakersfield.
                  </p>

                  {/* Icon bullet list */}
                    <ul className="mt-8 space-y-4">
                      {[
                        {
                          icon: Check,
                          text: "Same-week pickup windows across all six service zones",
                        },
                        {
                          icon: Check,
                          text: "Scheduled pickups within 24–72 hours of quote approval",
                        },
                        {
                          icon: Check,
                          text: "No mileage surcharges or fuel fees inside California",
                        },
                        {
                          icon: Check,
                          text: "Direct line to your project lead, not a routing queue",
                        },
                      ].map(({ icon: Icon, text }) => (
                        <li key={text} className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-emerald-600  dark:text-emerald-400">
                            <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                          </span>
                          <span className="text-sm leading-6 text-gray-700 dark:text-gray-300 text-justify">
                            {text}
                          </span>
                        </li>
                      ))}
                    </ul>

                      <div className="mt-6 flex flex-wrap gap-2 text-xs text-gray-700 ">
                        {[
                          "R2v3 Certified",
                          "ISO 27001",
                          "ISO 45001",
                          "Certificate of Destruction",
                        ].map((badge) => (
                          <span
                            key={badge}
                            className="rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm backdrop-blur"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                </div>
              </div>

              {/* Map column */}
              <div className="lg:col-span-7">
                <figure className="group">
                  <ServiceMap />
                </figure>
              </div>
            </div>
          </ScrollLoader>
        </div>
      </section>

      {/* ─────────── HOW LOCAL COVERAGE WORKS ─────────── */}
      <section className="mx-auto max-w-7xl">
         <WhyChoose />
      </section>

      {/* ─────────── CITY DIRECTORY ─────────── */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mt-14">
            <ServicingArea />
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="px-4 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <ScrollLoader>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                  <span className="h-px w-8 bg-primary" />
                  Outside Our Map?
                </div>
                <h2 className="mt-5 font-serif text-3xl leading-[1.1] tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
                  Project-quoted pickups for out-of-state retirements.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
                  Fortune 500 fleet retirements, multi-site decommissions, and
                  regulated-industry projects outside California are quoted
                  individually. We staff the project, hold the chain of custody,
                  and report against the same audit standard.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4 lg:col-span-5">
                <Link
                  href="/service-book/"
                  className="inline-flex items-center justify-between gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Get a free quote
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/"
                  className="inline-flex items-center justify-between gap-2 rounded-md border border-gray-300 bg-transparent px-5 py-3.5 text-sm font-medium text-gray-900 transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:border-gray-600 dark:hover:bg-gray-900/40"
                >
                  Explore services
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  Talk directly to the team that will handle your equipment. No
                  call centers, no account-manager carousel.
                </p>
              </div>
            </div>
          </ScrollLoader>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "California IT Asset Disposition Services",
            provider: {
              "@type": "Organization",
              name: "Integritrade LLC",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1945 N Fine Ave, STE 111",
                addressLocality: "Fresno",
                addressRegion: "CA",
                postalCode: "93727",
                addressCountry: "US",
              },
              telephone: "+1-559-325-4813",
            },
            areaServed: {
              "@type": "State",
              name: "California",
            },
            serviceType: [
              "IT Asset Disposition",
              "E-Waste Recycling",
              "Hard Drive Shredding",
              "Certified Data Destruction",
            ],
          }),
        }}
      />
    </main>
  );
}