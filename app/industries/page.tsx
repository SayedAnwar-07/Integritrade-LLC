import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image"
import Avis_Car_Rental_USA from "@/public/TrustedLogo/Avis_Car_Rental_USA.png"
import Budget_Rent_Car_USA from "@/public/TrustedLogo/Budget_Rent_Car_USA.png"
import Department_of_Transportation_USA from "@/public/TrustedLogo/Department_of_Transportation_USA.png"
import Department_of_the_Interior__USA from "@/public/TrustedLogo/Department_of_the_Interior__USA.png"
import Federal_Aviation_Administration_USA from "@/public/TrustedLogo/Federal_Aviation_Administration_USA.svg"
import Macias_USA from "@/public/TrustedLogo/Macias_USA.svg"
import National_Park_Service_USA from "@/public/TrustedLogo/National_Park_Service_USA.svg"
import united_states_cold_storage_USA from "@/public/TrustedLogo/united_states_cold_storage_USA.png"
import Industries from "@/components/home/Industries";
import { Metadata } from "next";
import SectionHeader from "@/components/shared/SectionHeader";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import { Clock, Mail, Phone } from "lucide-react";
import ScrollLoader from "@/components/shared/ScrollLoader";

export const metadata: Metadata = {
  title:
    "Industries We Serve | IT Asset Disposition (ITAD) by Industry | Integritrade LLC",

  description:
    "Integritrade LLC provides industry-specific IT asset disposition (ITAD), secure data destruction, and e-waste recycling services for healthcare, finance, government, logistics, and more across the USA.",

  keywords: [
    "ITAD industries",
    "IT asset disposition by industry",
    "industry specific ITAD services",
    "ITAD for healthcare",
    "ITAD for government agencies",
    "ITAD for financial institutions",
    "secure data destruction industries",
    "e-waste recycling industries USA",
    "compliance IT asset disposal",
    "regulated industry IT disposal"
  ],

  alternates: {
    canonical: "/industries/",
  },

  openGraph: {
    title:
      "Industries We Serve | Secure ITAD & Data Destruction Solutions USA",

    description:
      "Industry-specific ITAD services with strict compliance. Serving healthcare, finance, federal agencies, and enterprise sectors with secure data destruction and e-waste recycling.",

    url: "https://integritradellc.com/industries/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "https://integritradellc.com/main-logo.png",
        width: 1200,
        height: 630,
        alt: "Industries Served by Integritrade LLC ITAD Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Industries We Serve | ITAD & Secure Data Destruction",

    description:
      "Explore industry-specific IT asset disposition solutions tailored for compliance-heavy sectors across the USA.",

    images: ["https://integritradellc.com/main-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const logos = [
  { src: Avis_Car_Rental_USA,                 alt: "Avis Car Rental" },
  { src: Budget_Rent_Car_USA,                 alt: "Budget Rent a Car" },
  { src: Department_of_Transportation_USA,    alt: "U.S. Department of Transportation" },
  { src: Department_of_the_Interior__USA,     alt: "U.S. Department of the Interior" },
  { src: Federal_Aviation_Administration_USA, alt: "Federal Aviation Administration" },
  { src: Macias_USA,                          alt: "Macias" },
  { src: National_Park_Service_USA,           alt: "National Park Service" },
  { src: united_states_cold_storage_USA,      alt: "United States Cold Storage" },
]

const track = [...logos, ...logos]



export default function IndustriesPage(){
    return(
        <main className="bg-secondary dark:bg-dark py-10 md:py-24">
           <div className="relative max-w-7xl mx-auto">
               <div className="px-4 sm:px-6 lg:px-8">
                  {/* Header */}
                  <ScrollLoader>
                      <PageHeader
                          eyebrow="Industries"
                          title="Compliance is industry-specific.So is our process."
                          description="Regulated sectors run on different compliance models. Our architecture keeps workflows separate, so hospital retirements and federal decommissions never share a chain of custody."
                          linkText="Get in touch"
                          linkHref="/service-book/"
                      />
                    </ScrollLoader>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

                        {logos.map((logo, i) => (
                          <ScrollLoader key={i} delay={i * 0.08}>
                            <div className="bg-white flex justify-center items-center p-4 shadow-lg h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px]">
                              <Image
                                src={logo.src}
                                alt={logo.alt}
                                height={160}
                                width={280}
                                className="object-contain max-h-full max-w-[90%] w-auto opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                              />
                            </div>
                          </ScrollLoader>
                        ))}
                    </div>
               </div>

               <div>
                 <Industries />
               </div>

               <ScrollLoader>
                  <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 px-4 sm:px-6 lg:px-8">
                      {/* Left: Lead copy + primary CTA */}
                      <div className="lg:col-span-7">
                        <SectionHeader
                          eyebrow="Get In Touch"
                          title="Ready to retire your IT assets responsibly?"
                        />
                        <p className="text-[17px] text-gray-600 dark:text-gray-300 leading-[1.75] max-w-xl mt-4">
                          Schedule a pickup, request a quote, or talk to our team about a custom
                          ITAD program tailored to your facility, compliance requirements, and
                          data security standards.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                          <PrimaryButton href="/service-book" testId="button-get-quote">
                            Book a Service
                          </PrimaryButton>

                          <OutlineButton href="/services" testId="button-learn-more">
                            Explore Services
                          </OutlineButton>
                        </div>
                      </div>

                      {/* Right: Detached white shadow card with contact details */}
                      <div className="lg:col-span-5">
                        <div className="bg-white dark:bg-dark-secondary rounded-md shadow-sm p-8 lg:p-10">
                            <div className="space-y-7">
                              {/* Phone */}
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-0.5">
                                  <Phone className="h-4 w-4 text-[#2aac61]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-gray-500 dark:text-gray-400 mb-1.5">
                                    Call
                                  </p>
                                  <a
                                    href="tel:+15593254813"
                                    className="block text-[15px] text-gray-800 dark:text-gray-100 hover:text-[#2aac61] dark:hover:text-[#2aac61] transition-colors"
                                  >
                                    (559) 325-4813
                                  </a>
                                </div>
                              </div>

                              {/* Hairline divider */}
                              <div className="h-px bg-gray-200 dark:bg-gray-700/60" />

                              {/* Email */}
                              <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 mt-0.5">
                                  <Mail className="h-4 w-4 text-[#2aac61]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-gray-500 dark:text-gray-400 mb-1.5">
                                    Email
                                  </p>
                                  <a
                                    href="mailto:info@integritradeLLC.com"
                                    className="block text-[15px] text-gray-800 dark:text-gray-100 hover:text-[#2aac61] dark:hover:text-[#2aac61] transition-colors break-all"
                                  >
                                    info@integritradeLLC.com
                                  </a>
                                </div>
                              </div>

                              {/* Hairline divider */}
                              <div className="h-px bg-gray-200 dark:bg-gray-700/60" />

                            </div>
                        </div>
                      </div>
                  </div>
               </ScrollLoader>
           </div>
        </main>
    )
}