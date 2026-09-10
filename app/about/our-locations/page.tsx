import type { Metadata } from "next";
import { ArrowUpRight, ChevronRight, Mail, MapPin, Phone } from "lucide-react";

import PageHeader from "@/components/shared/PageHeader";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollLoader from "@/components/shared/ScrollLoader";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const PAGE_URL = "https://integritradellc.com/about/our-locations/";

// Suggested metadata: the attachment did not include location-page SEO tags.
const SEO_TITLE = "Our Locations | Fresno ITAD Facility | Integritrade LLC";
const SEO_DESCRIPTION =
  "Explore Integritrade’s Fresno ITAD facility and California service areas for secure IT asset disposition, data destruction, and electronics recycling.";

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

const serviceAreas = [
  {
    id: "san-francisco",
    name: "San Francisco and the Peninsula",
    description:
      "San Francisco, South San Francisco, Daly City, San Mateo, Redwood City, Palo Alto, Menlo Park, Burlingame, and surrounding areas.",
  },
  {
    id: "silicon-valley",
    name: "Silicon Valley and South Bay",
    description:
      "San Jose, Santa Clara, Sunnyvale, Mountain View, Cupertino, Milpitas, Campbell, Los Gatos, and Fremont.",
  },
  {
    id: "east-north-bay",
    name: "East Bay and North Bay",
    description:
      "Oakland, Berkeley, Richmond, Pinole, Walnut Creek, Concord, Pleasanton, Livermore, Hayward, Alameda, San Rafael, and surrounding Contra Costa, Alameda, and Marin communities.",
  },
  {
    id: "central-valley",
    name: "Central Valley",
    description:
      "Fresno, Clovis, Madera, Merced, Visalia, Bakersfield, Stockton, Modesto, Sacramento, and surrounding communities.",
  },
  {
    id: "southern-california",
    name: "Southern California",
    description:
      "Los Angeles, Long Beach, Pasadena, Burbank, Glendale, Santa Monica, Irvine, Anaheim, Orange County, Riverside, San Bernardino, Ontario, San Diego, and surrounding areas.",
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
            description="Integritrade operates from a dedicated 31,000 square foot secured California ITAD Operations Center in Fresno."
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
                  California ITAD Operations Center
                </h3>


                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Integritrade’s operational facility is located at{" "}
                  <strong className="font-semibold text-gray-900 dark:text-gray-100">
                    944 S. Topeka Ave, Fresno, CA 93721
                  </strong>
                  . It is a dedicated 31,000 square foot ITAD and
                  electronics-processing facility with controlled access,
                  video monitoring, secure asset staging, dock access,
                  lifts, pallet jacks, racking, and material-handling
                  capability.
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
                      944 S. Topeka Ave
                      <br />
                      Fresno, CA 93721
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
                        info@integritradeLLC.com
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
                  href="https://www.google.com/maps/search/?api=1&query=944+S.+Topeka+Ave,+Fresno,+CA+93721"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >

                  <div className="relative w-full aspect-[4/3] min-h-[320px] overflow-hidden border border-gray-300 dark:border-gray-800">


                    <iframe
                      title="Integritrade Fresno ITAD Facility Map"
                      src="https://www.google.com/maps?q=944+S.+Topeka+Ave,+Fresno,+CA+93721&output=embed"
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

        {/* SERVICE AREAS — shadcn Accordion, all regions initially visible */}
        <ScrollLoader>
          <div
            id="service-areas"
            className="py-8 md:py-12 scroll-mt-24"
          >
            <SectionHeader
              eyebrow="Service coverage"
              title="California Service Areas"
              description="Integritrade supports organizations throughout California. High-priority service markets include:"
              linkText=""
              linkHref=""
            />

            <div className="mt-12 md:mt-16 border-t border-gray-200 dark:border-gray-800">
              {serviceAreas.map((detail, index) => (
                <div
                  key={detail.name}
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
                      {detail.name}
                    </h3>
                  </div>

                  <div className="md:col-span-7">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                      {detail.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              <ChevronRight
                aria-hidden="true"
                className="w-5 h-5 mt-0.5 shrink-0 text-emerald-700 dark:text-[#34d399]"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                For large projects, multi-site projects, and specialized
                requirements, Integritrade can evaluate service beyond its
                primary California coverage area.
              </p>
            </div>
          </div>
        </ScrollLoader>

        {/* LOCAL DROP-OFF — shared section header and existing buttons */}
        <ScrollLoader>
          <div className="py-8 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <SectionHeader
                  eyebrow="Fresno drop-off"
                  title="E-Waste Recycling and Electronics Recycling"
                  description=""
                  linkText=""
                  linkHref=""
                />
              </div>

              <div className="lg:col-span-7">
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed custom-text-center">
                  For Fresno customers, Integritrade offers{" "}
                  <strong className="font-semibold text-gray-900 dark:text-gray-100">
                    free drop-off recycling for most accepted IT equipment
                    and electronics
                  </strong>
                  . Certain bulky or specialized items, including large
                  copy machines and large multifunction printers, may have
                  nominal handling charges. Customers should contact
                  Integritrade before drop-off to confirm current acceptance
                  requirements and applicable fees.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-10">
                  <OutlineButton
                    href="/fresno-electronics-recycling/"
                    testId="locations-drop-off-details"
                  >
                    Fresno Public E-Waste Drop Off
                  </OutlineButton>

                  <PrimaryButton
                    href="/service-book"
                    testId="locations-contact-team"
                  >
                    Contact Us
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </ScrollLoader>
      </div>
    </section>
  );
}