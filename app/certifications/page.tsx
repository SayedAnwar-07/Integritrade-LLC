import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { certificationsData } from "@/data/certificationsData";
import CertificationCard from "@/components/Certificationcard";
import PageHeader from "@/components/shared/PageHeader";
import ServicesCTA from "@/components/services/Servicescta";
import ScrollLoader from "@/components/shared/ScrollLoader";

export const metadata: Metadata = {
  title: "Certifications and Standards",
  description:
    "View Integritrade LLC certifications including R2v3 and ISO 27001 proving our commitment to secure, compliant and sustainable IT asset management",

  keywords: [
    "R2 certified ITAD facility",
    "ISO 9001 certified ITAD",
    "ISO 14001 environmental certification",
    "ISO 27001 information security certification",
    "ISO 45001 health & safety standards",
    "ITAD certifications",
    "e-waste recycling certifications",
    "responsible recycling certification",
    "data destruction compliance",
    "secure chain of custody ITAD",
    "regulatory compliance e-waste recycling",
    "certified IT asset disposition",
  ],

  alternates: {
    canonical: "/certifications/",
  },

  openGraph: {
    title: "Certifications and Standards | Integritrade LLC",
    description:
      "View Integritrade LLC certifications including R2v3 and ISO 27001 proving our commitment to secure, compliant and sustainable IT asset management",
    url: "https://integritradellc.com/certifications/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://integritradellc.com/logo/integritrade-logo.png",
        width: 1200,
        height: 630,
        alt: "Integritrade LLC Certifications and Standards",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Certifications and Standards | Integritrade LLC",
    description:
      "View Integritrade LLC certifications including R2v3 and ISO 27001 proving our commitment to secure, compliant and sustainable IT asset management",
    images: ["https://integritradellc.com/logo/integritrade-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CertificationsPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Integritrade LLC",
    url: "https://integritradellc.com",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "(559) 325-4813",
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1945 N Fine Ave, STE 111",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93727",
      addressCountry: "US",
    },
    award: [
      "R2 Certified IT Asset Disposition",
      "ISO 9001 Quality Management",
      "ISO 14001 Environmental Management",
      "ISO 27001 Information Security Management",
      "ISO 45001 Occupational Health & Safety",
      "Certified ITAD",
    ],
    description:
      "View Integritrade LLC certifications including R2v3 and ISO 27001 proving our commitment to secure, compliant and sustainable IT asset management",
  };

  return (
    <section className="section bg-secondary dark:bg-dark transition-colors duration-300 py-8 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Page header */}
        <ScrollLoader>
          <PageHeader
              eyebrow="Trusted & Compliant"
              title="Certifications & Compliance"
               description="Any e-waste vendor can claim to be certified but who actually audits them? At Integritrade, our operations undergo rigorous annual audits by accredited third-party certification bodies to maintain R2v3, ISO 27001, ISO 9001, ISO 14001, and ISO 45001 standards."
          />
          {/* Certification trust statement */}
            <div className="mx-auto mt-3 max-w-4xl text-center">
              <p className="text-base leading-relaxed text-stone-700 dark:text-slate-300">
                We don’t rely on self-attestation or unverified promises. Backed by a
                spotless track record and zero data breaches in our history, Integritrade
                provides enterprise-grade IT Asset Disposition (ITAD) and secure e-waste
                recycling across California, including frequent service routes in San
                Francisco / the Bay Area, Los Angeles, San Diego, and surrounding states.
              </p>

              <p className="mt-4 text-base leading-relaxed text-stone-700 dark:text-slate-300">
                When your data security, brand reputation, and ESG commitments are on the
                line, we deliver defensible, audit-ready proof not just claims.
              </p>
            </div>
        </ScrollLoader>

        {/* Certification cards stack */}
        <div className="space-y-10 lg:space-y-14 my-20">
          {certificationsData.map((cert, idx) => (
            <CertificationCard
              key={cert.id}
              certification={cert}
              index={idx}
            />
          ))}
        </div>

        <section className="mt-10">
            <ServicesCTA />
        </section>

        <Script
          type="application/ld+json"
          id="certifications-jsonld"
          strategy="afterInteractive"
        >
          {JSON.stringify(schemaData)}
        </Script>
      </div>
    </section>
  );
}