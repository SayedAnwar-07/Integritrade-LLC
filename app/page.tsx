import type { Metadata } from "next"
import Hero from '@/components/home/Hero'
import WhyChoose from '@/components/home/WhyChoose'
import ServicesGrid from '@/components/home/ServicesGrid'
import About from '@/components/home/About'
import SchemaMarkup from "@/components/home/SchemaMarkup"
import TrustedLogos from "@/components/home/TrustedLogo"
import Industries from "@/components/home/Industries"
import WhatHappensNext from "@/components/contact/Whathappensnext"
import ServicePaths from "@/components/home/ServicePaths"
import BlogHomeSection from "@/components/home/BlogHomeSection"

export const metadata: Metadata = {
  title:
    "Integritrade: ITAD, Data Destruction & Recycling in California",

  description:
    "Need secure e-waste recycling? Integritrade offers R2v3 certified data destruction and ITAD services in Fresno, CA. Call (559) 325-4813 to schedule.",

  openGraph: {
    title:
      "Integritrade: ITAD, Data Destruction & Recycling in California",

    description:
      "Need secure e-waste recycling? Integritrade offers R2v3 certified data destruction and ITAD services in Fresno, CA. Call (559) 325-4813 to schedule.",

    url: "https://integritradellc.com",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
  },

  alternates: {
    canonical: "https://integritradellc.com",
  },
};

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

      <section className="bg-secondary dark:bg-dark py-2 transition-colors duration-300">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <WhatHappensNext />
         </div>
      </section>
      
      {/* <Certifications /> */}
      <BlogHomeSection />

      <About />
    </>
  )
}
