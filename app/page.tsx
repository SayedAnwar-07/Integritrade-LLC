import type { Metadata } from "next"
import Hero from '@/components/home/Hero'
import WhyChoose from '@/components/home/WhyChoose'
import ServicesGrid from '@/components/home/ServicesGrid'
import About from '@/components/home/About'
import SchemaMarkup from "@/components/home/SchemaMarkup"
import TrustedLogos from "@/components/home/TrustedLogo"
import Industries from "@/components/home/Industries"
import Certifications from "@/components/home/Certifications"
import WhatHappensNext from "@/components/contact/Whathappensnext"
import ServicePaths from "@/components/home/ServicePaths"

export const metadata: Metadata = {
    title:
      "ITAD, Hard Drive Shredding & E-Waste Recycling | Integritrade CA",

    description:
      "Integritrade LLC provides certified IT asset disposition (ITAD), hard drive shredding, secure data destruction, and e-waste recycling services for businesses across California including Fresno, Sacramento, and San Francisco.",

    keywords: [
      "IT Asset Disposition California",
      "ITAD services",
      "hard drive shredding",
      "secure data destruction",
      "e waste recycling California",
      "data center decommissioning",
      "IT equipment recycling",
      "on site hard drive shredding",
      "Integritrade LLC"
    ],

    openGraph: {
      title:
        "Certified ITAD, Hard Drive Shredding & E-Waste Recycling | Integritrade LLC",

      description:
        "Secure IT asset disposition, certified data destruction, and responsible electronics recycling services for businesses throughout California.",

      url: "https://integritradellc.com",
      siteName: "Integritrade LLC",
      locale: "en_US",
      type: "website",
    },

    alternates: {
      canonical: "https://integritradellc.com",
    },
}

export default function Page() {
  return (
    <>
      <SchemaMarkup />
      <Hero />

      <TrustedLogos />

      <ServicesGrid />   

      <WhyChoose />

      <Industries />

      <ServicePaths />

      <section className="bg-secondary dark:bg-[#0a1f28] py-2 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <WhatHappensNext />
         </div>
      </section>
      
      <Certifications />

      <About />
    </>
  )
}
