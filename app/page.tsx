import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import WhyChoose from "@/components/home/WhyChoose";
import About from "@/components/home/About";
import TrustedLogos from "@/components/home/TrustedLogo";
import WhatHappensNext from "@/components/contact/Whathappensnext";
import ServicePaths from "@/components/home/ServicePaths";
import BlogHomeSection from "@/components/home/BlogHomeSection";
import HomeSectionFloatNav from "@/components/home/HomeSectionFloatNav";

export const metadata: Metadata = {
  title: { absolute: "ITAD, Data Destruction & Electronics Recycling | Integritrade" },

  description: 
    "R2v3 & ISO-certified ITAD, NIST 800-88 data destruction, and zero-landfill recycling. Serialized TraceTech chain-of-custody CODs on every job. Request a quote.",

  // Verification tags live in app/layout.tsx for ALL owners. A block here would
  // override the layout's and strip every token but this one from the homepage.

  openGraph: {
    title: "ITAD, Data Destruction & Electronics Recycling | Integritrade",
    description: 
      "R2v3 & ISO-certified ITAD, NIST 800-88 data destruction, and zero-landfill recycling. Serialized TraceTech chain-of-custody CODs on every job. Request a quote.",
    url: "https://integritradellc.com/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://integritradellc.com/og/home.jpg", width: 1200, height: 630, alt: "Integritrade ITAD processing facility" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "ITAD, Data Destruction & Electronics Recycling | Integritrade",
    description: 
      "R2v3 & ISO-certified ITAD, NIST 800-88 data destruction, and zero-landfill recycling. Serialized TraceTech chain-of-custody CODs on every job. Request a quote.",
  },

  alternates: {
    canonical: "https://integritradellc.com/",
  },
};

export default function Page() {
  return (
   <div className="bg-secondary dark:bg-dark">
      {/* Hero stays full width */}
      <section id="hero">
        <Hero />
      </section>

      <section id="clients">
        <TrustedLogos />
      </section>


      {/* Everything after hero gets sidebar layout */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 bg-secondary dark:bg-dark">
        <div className="grid gap-12 lg:grid-cols-12">

          {/* LEFT TIMELINE */}
         <aside className="hidden lg:col-span-2 lg:block">
            <HomeSectionFloatNav />
          </aside>


          {/* RIGHT CONTENT */}
          <main className="lg:col-span-10">

            <section id="why-choose">
              <WhyChoose />
            </section>


            <section id="services">
              <ServicePaths />
            </section>


            <section
              id="process"
              className="bg-secondary dark:bg-dark py-2 transition-colors duration-300"
            >
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <WhatHappensNext />
              </div>
            </section>
            
            <section id="about">
              <About />
            </section>

            <section id="blogs">
              <BlogHomeSection />
            </section>

          </main>

        </div>
      </section>
   </div>
  );
}