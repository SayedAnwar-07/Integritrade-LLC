import type { Metadata } from "next";
import {
  Check,
} from "lucide-react";
import ServicingArea from "@/components/service-area/ServicingArea";
import PageHeader from "@/components/shared/PageHeader";
import WhyChoose from "@/components/home/WhyChoose";
import ServiceMap from "@/components/service-area/ServiceMap";
import ScrollLoader from "@/components/shared/ScrollLoader";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";


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
        url: "https://integritradellc.com/logo/integritrade-logo.png",
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
    images: ["https://integritradellc.com/logo/integritrade-logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function ServiceAreaPage() {

  return (
    <main className="overflow-x-hidden bg-secondary text-gray-900 transition-colors duration-300 dark:bg-dark dark:text-gray-100">
      {/* ─────────── HERO ─────────── */}
      <section className="relative px-4 pt-16 pb-10 sm:pt-24 mx-auto max-w-7xl">
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
      <section className="">
        <div className="mx-auto max-w-7xl">
          <ScrollLoader>
            <section className="">

              <div className="relative grid grid-cols-1 lg:grid-cols-12">
                {/* Content column */}
                <div className="flex flex-col justify-center md:border-b border-gray-200 px-6 sm:px-8 sm:py-12 lg:col-span-7 lg:border-b-0 lg:border-r lg:px-10 lg:py-14 dark:border-white/10">
                  <h2 className="max-w-xl font-serif text-3xl leading-[1.15] tracking-tight text-gray-900 sm:text-4xl dark:text-white mb-3">
                    One Controlled Chain of Custody Across Every California Pickup
                  </h2>

                  <p className="max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
                    Every pickup terminates at our Fresno R2v3 processing floor. No
                    regional partners, no white-label brokers, no transfers between
                    carriers. The same audit trail covers a startup in SoMa and a school
                    district in Bakersfield.
                  </p>
                </div>

                {/* Features column */}
                <div className="px-6 md:py-10 sm:px-8 lg:col-span-5 lg:px-10">
                  <ul className="divide-y divide-gray-100 dark:divide-white/10">
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
                      <li
                        key={text}
                        className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center">
                          <Icon className="h-4 w-4 text-primary" strokeWidth={2.4} />
                        </span>

                        <span className="text-sm font-medium leading-6 text-gray-700 sm:text-base dark:text-gray-200">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "R2v3 Certified",
                        "ISO 27001",
                        "ISO 45001",
                        "Certificate of Destruction",
                      ].map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-100 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300 dark:hover:bg-white/[0.08]"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollLoader>          
        </div>
      </section>

      {/* ─────────── CITY DIRECTORY ─────────── */}
      <section className="p-2">
        <div className="mx-auto max-w-7xl">
          <div className="">
            <ServicingArea />
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="px-4 pb-10">
        <div className="mx-auto max-w-7xl">
          <ScrollLoader>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:p-8">
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

                <OutlineButton href="/services/" testId="button-learn-more">
                  View Service Details
                </OutlineButton>

                <PrimaryButton href="/service-book/" testId="button-get-quote">
                  Get a Free Quote
                </PrimaryButton>

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