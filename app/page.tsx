import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import WhyChoose from "@/components/home/WhyChoose";
import About from "@/components/home/About";
import SchemaMarkup from "@/components/home/SchemaMarkup";
import TrustedLogos from "@/components/home/TrustedLogo";
import WhatHappensNext from "@/components/contact/Whathappensnext";
import ServicePaths from "@/components/home/ServicePaths";
import BlogHomeSection from "@/components/home/BlogHomeSection";

export const metadata: Metadata = {
  title: "Integritrade: ITAD, Data Destruction & Recycling in California",

  description:
    "Need secure electronics recycling and ITAD for California businesses? Integritrade offers R2v3-certified processing, data destruction, and asset management services.",

  // Verification tags live in app/layout.tsx for ALL owners. A block here would
  // override the layout's and strip every token but this one from the homepage.

  openGraph: {
    title: "Integritrade: ITAD, Data Destruction & Recycling in California",
    description:
      "Need secure electronics recycling and ITAD for California businesses? Integritrade offers R2v3-certified processing, data destruction, and asset management services.",
    url: "https://integritradellc.com/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Integritrade: ITAD, Data Destruction & Recycling in California",
    description:
      "Need secure electronics recycling and ITAD for California businesses? Integritrade offers R2v3-certified processing, data destruction, and asset management services.",
  },

  alternates: {
    canonical: "https://integritradellc.com/",
  },
};

export default function Page() {
  return (
    <>
      <SchemaMarkup />
      <Hero />
      <TrustedLogos />
      <WhyChoose />
      <ServicePaths />

      <section className="bg-secondary dark:bg-dark py-2 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhatHappensNext />
        </div>
      </section>

      <BlogHomeSection />
      <About />
    </>
  );
}