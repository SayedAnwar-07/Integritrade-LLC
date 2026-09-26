import type { Metadata } from "next";
import { ArrowUpRight, Ban, CalendarCheck, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import PageHeader from "@/components/shared/PageHeader";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollLoader from "@/components/shared/ScrollLoader";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";

import { Separator } from "@/components/ui/separator";

const PAGE_URL = "https://integritradellc.com/about/our-locations/";

// Suggested metadata: the attachment did not include location-page SEO tags.
const SEO_TITLE = "ITAD Facilities & Dispatch Locations | Integritrade";
const SEO_DESCRIPTION =
  "Integritrade operates a 31k sq ft secure ITAD processing facility and Bay Area dispatch hub. Certified NIST 800-88 data destruction and CODs. Get a quote.";

export const metadata: Metadata = {
  title: { absolute: SEO_TITLE },
  description: SEO_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://integritradellc.com/og/home.jpg", width: 1200, height: 630, alt: "Integritrade ITAD processing facility" }],
  },
  twitter: {
    card: "summary",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
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
};

const facilityDetails = [
  {
    title: "Security and Accountability",
    body:
      "Integritrade’s process is designed around documented custody, controlled access, background-checked personnel, asset tracking, and client-approved handling requirements. It provides chain-of-custody options, mutually confirmed piece-count options, customer asset-tag reconciliation, and documentation matched to the project scope.",
  },
  {
    title: "Capacity and Project Scale",
    body:
      "Integritrade can support individual, small-business, enterprise, and high-volume institutional projects. The Fresno facility can securely stage and store more than 1,000,000 pounds of retired IT equipment and e-waste per month, subject to safe storage configuration and material type. Its dock, lift, racking, security, staging, PXE erasure systems, and physical destruction capability support fleet refreshes, office cleanouts, warehouse cleanouts, data-center decommissioning, retail-return programs, and consolidated multi-site projects.",
  },
] as const;

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "Our Locations",
      description: SEO_DESCRIPTION,
      inLanguage: "en-US",
      mainEntity: {
        "@id": `${PAGE_URL}#fresno-facility`,
      },
      breadcrumb: {
        "@id": `${PAGE_URL}#breadcrumb`,
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${PAGE_URL}#fresno-facility`,
      name: "Integritrade",
      url: "https://integritradellc.com/",
      telephone: "+1-559-325-4813",
      email: "info@integritradeLLC.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "944 S. Topeka Ave",
        addressLocality: "Fresno",
        addressRegion: "CA",
        postalCode: "93721",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "State",
        name: "California",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${PAGE_URL}#pinole-dispatch`,
      name: "Integritrade - Bay Area Dispatch",
      url: "https://integritradellc.com/",
      telephone: "+1-559-325-4819",
      email: "info@integritradeLLC.com",
      description:
        "Bay Area dispatch and supply location for scheduled ITAD, data destruction, and electronics collection. No public drop-off at this location.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1576 Fitzgerald Dr",
        addressLocality: "Pinole",
        addressRegion: "CA",
        postalCode: "94564",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "State",
        name: "California",
      },
      parentOrganization: {
        "@id": `${PAGE_URL}#fresno-facility`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
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
          name: "About",
          item: "https://integritradellc.com/about/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Our Locations",
          item: PAGE_URL,
        },
      ],
    },
  ],
};

const contactLinkClass =
  "rounded-sm transition-colors hover:text-emerald-700 " +
  "dark:hover:text-[#34d399] focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-emerald-600 " +
  "focus-visible:ring-offset-4 dark:focus-visible:ring-offset-gray-950";

export default function OurLocationsPage() {
  return (
    <section className="bg-secondary dark:bg-dark transition-colors duration-300">
      {/* Render structured data directly with the page. */}
      <script
        id="our-locations-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData).replace(/</g, "\\u003c"),
        }}
      />

      <div className="container mx-auto px-4 md:px-6 pt-10 lg:pt-16">
        {/* HERO — existing shared page header */}
        <ScrollLoader>
          <PageHeader
            eyebrow="OUR LOCATIONS"
            title={
              <>
                Our <em className="italic font-serif">Locations.</em>
              </>
            }
            description="Integritrade operates a dedicated 31,000 square foot secured California IT Asset Disposal Megacenter in Fresno, plus a Bay Area dispatch location in Pinole for scheduled business service."
          />
        </ScrollLoader>

        {/* FRESNO FACILITY */}
        <ScrollLoader>
          <div
            id="fresno-facility"
            className="py-8 md:py-12 scroll-mt-24"
          >

            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">


              {/* CONTENT */}
              <div className="w-full lg:col-span-7">

                <h3 className="font-serif text-2xl leading-snug text-stone-900 dark:text-white mb-5">
                  California IT Asset Disposal Megacenter
                </h3>


                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Integritrade&rsquo;s Fresno facility is a dedicated 31,000 square foot ITAD and
                  electronics-processing facility with controlled access,
                  video monitoring, secure asset staging, dock access,
                  and racking.
                </p>


                <dl className="space-y-7 py-8">


                  <div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />

                      <dt className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Facility
                      </dt>
                    </div>

                    <dd className="text-sm text-gray-900 dark:text-gray-100 mt-2 ml-8">
                      <a
                        href="https://maps.app.goo.gl/foJtYrjryesSmFoG7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={contactLinkClass}
                      >
                        944 S. Topeka Ave
                        <br />
                        Fresno, CA 93721
                      </a>
                    </dd>
                  </div>



                  <div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />

                      <dt className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Direct Line
                      </dt>
                    </div>

                    <dd className="text-sm text-gray-900 dark:text-gray-100 mt-2 ml-8">
                      <a
                        href="tel:+15593254813"
                        className={contactLinkClass}
                      >
                        (559) 325-4813
                      </a>
                    </dd>
                  </div>



                  <div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />

                      <dt className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Email
                      </dt>
                    </div>

                    <dd className="text-sm text-gray-900 dark:text-gray-100 mt-2 ml-8 break-all">
                      <a
                        href="mailto:info@integritradeLLC.com"
                        className={contactLinkClass}
                      >
                        <span data-nosnippet="">info@integritradeLLC.com</span>
                      </a>
                    </dd>
                  </div>


                </dl>


              </div>




              {/* MAP */}
              <div className="w-full lg:col-span-5 lg:pl-8">

                <div className="flex items-center justify-between mb-6">

                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-[#34d399]">
                    Visit Integritrade
                  </p>


                  <p className="text-sm italic font-serif text-gray-400">
                    Fresno, California
                  </p>

                </div>


                <Separator className="mb-6 bg-gray-300 dark:bg-gray-800" />


                <a
                  href="https://maps.app.goo.gl/foJtYrjryesSmFoG7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >

                  <div className="relative w-full aspect-[4/3] min-h-[320px] overflow-hidden border border-gray-300 dark:border-gray-800">


                    <iframe
                      title="Integritrade Fresno ITAD Facility Map"
                      src="https://www.google.com/maps?q=Integritrade+LLC+Electronics+Recycling+%26+ITAD+Services,+944+S+Topeka+Ave,+Fresno,+CA+93721&output=embed"
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      loading="lazy"
                      style={{border:0}}
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />


                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition">

                      <span className="opacity-0 group-hover:opacity-100 bg-white px-4 py-2 rounded-md text-sm font-semibold shadow-lg transition">
                        Open in Google Maps ↗
                      </span>

                    </div>


                  </div>

                </a>


              </div>


            </div>

          </div>
        </ScrollLoader>

        {/* PINOLE — BAY AREA DISPATCH LOCATION */}
        <ScrollLoader>
          <div
            id="pinole-dispatch"
            className="py-8 md:py-12 scroll-mt-24 border-t border-gray-200 dark:border-gray-800"
          >

            <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

              {/* CONTENT */}
              <div className="w-full lg:col-span-7">

                <h3 className="font-serif text-2xl leading-snug text-stone-900 dark:text-white mb-5">
                  Bay Area Dispatch Location
                </h3>

                {/* Prominent notice: this site is not a drop-off point. */}
                <div className="mb-6 flex items-start gap-3 rounded-md border border-amber-500/40 bg-amber-50 p-4 dark:bg-amber-400/10">
                  <Ban className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" />
                  <p className="text-sm leading-relaxed text-stone-800 dark:text-amber-100">
                    <strong className="font-semibold">No public drop-off at this location.</strong>{" "}
                    The Pinole site is a dispatch and supply location for scheduled business
                    service only. Residents and walk-in drop-offs should use the{" "}
                    <Link
                      href="/fresno-residential-electronics-recycling/"
                      className="underline underline-offset-4 hover:text-emerald-700 dark:hover:text-[#34d399]"
                    >
                      Fresno residential drop-off
                    </Link>{" "}
                    instead.
                  </p>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  The Bay Area dispatch location stages crew supplies, bins, totes, and transport equipment for
                  Bay Area projects, supporting scheduled ITAD pickups, data destruction, and
                  electronics collection across the East Bay, North Bay, San Francisco, the
                  Peninsula, and Silicon Valley. Asset processing, data sanitization, and
                  physical destruction are performed at the Fresno IT Asset Disposal Megacenter.
                </p>

                <dl className="space-y-7 py-8">

                  <div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />

                      <dt className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Dispatch Location
                      </dt>
                    </div>

                    <dd className="text-sm text-gray-900 dark:text-gray-100 mt-2 ml-8">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Integritrade%2C%201576%20Fitzgerald%20Dr%2C%20Pinole%2C%20CA%2094564"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={contactLinkClass}
                      >
                        1576 Fitzgerald Dr
                        <br />
                        Pinole, CA 94564
                      </a>
                    </dd>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />

                      <dt className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Direct Line
                      </dt>
                    </div>

                    <dd className="text-sm text-gray-900 dark:text-gray-100 mt-2 ml-8">
                      <a
                        href="tel:+15593254819"
                        className={contactLinkClass}
                      >
                        (559) 325-4819
                      </a>
                    </dd>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <CalendarCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />

                      <dt className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Access
                      </dt>
                    </div>

                    <dd className="text-sm text-gray-900 dark:text-gray-100 mt-2 ml-8">
                      Scheduled business service only, by appointment
                    </dd>
                  </div>

                </dl>

              </div>

              {/* MAP */}
              <div className="w-full lg:col-span-5 lg:pl-8">

                <div className="flex items-center justify-between mb-6">

                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-[#34d399]">
                    Bay Area Dispatch
                  </p>

                  <p className="text-sm italic font-serif text-gray-400">
                    Pinole, California
                  </p>

                </div>

                <Separator className="mb-6 bg-gray-300 dark:bg-gray-800" />

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Integritrade%2C%201576%20Fitzgerald%20Dr%2C%20Pinole%2C%20CA%2094564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >

                  <div className="relative w-full aspect-[4/3] min-h-[320px] overflow-hidden border border-gray-300 dark:border-gray-800">

                    <iframe
                      title="Integritrade Pinole Bay Area Dispatch Location Map"
                      src="https://www.google.com/maps?q=Integritrade+IT+Asset+Disposition+%26+Data+Destruction+Services,+1576+Fitzgerald+Dr,+Pinole,+CA+94564&output=embed"
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      loading="lazy"
                      style={{border:0}}
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition">

                      <span className="opacity-0 group-hover:opacity-100 bg-white px-4 py-2 rounded-md text-sm font-semibold shadow-lg transition">
                        Open in Google Maps ↗
                      </span>

                    </div>

                  </div>

                </a>

              </div>

            </div>

          </div>
        </ScrollLoader>

        {/* FACILITY OPERATIONS — reference-style editorial rows */}
        <ScrollLoader>
          <div className="py-8 md:py-12">
            <SectionHeader
              eyebrow="Facility operations"
              title="Facility, Logistics, Security, and Capacity"
              description=""
              linkText=""
              linkHref=""
            />

            <div className="mt-12 md:mt-16 border-t border-gray-200 dark:border-gray-800">
              {facilityDetails.map((detail, index) => (
                <div
                  key={detail.title}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-8 lg:py-10 border-b border-gray-200 dark:border-gray-800"
                >
                  <div className="md:col-span-1">
                    <span
                      aria-hidden="true"
                      className="text-2xl font-light text-gray-400 dark:text-gray-600 tabular-nums"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
                      {detail.title}
                    </h3>
                  </div>

                  <div className="md:col-span-7">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                      {detail.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollLoader>

      </div>
    </section>
  );
}
