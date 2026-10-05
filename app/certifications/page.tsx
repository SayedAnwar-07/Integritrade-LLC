import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import certificationsCover from "@/public/certificates/certifications-cover.webp";
import TeamHero from "@/components/about/TeamHero";
import { certificationsData } from "@/data/certificationsData";
import CertificationCard from "@/components/Certificationcard";
import ServicesCTA from "@/components/services/Servicescta";

// The hero's intro, unchanged from the page header it replaced.
const INTRO = [
  "Any e-waste vendor can claim to be certified but who actually audits them? At Integritrade, our operations undergo rigorous annual audits by accredited third-party certification bodies to maintain R2v3, ISO 27001, ISO 9001, ISO 14001, and ISO 45001 standards.",
  "We don’t rely on self-attestation or unverified promises. Backed by a spotless track record and zero data breaches in our history, Integritrade provides enterprise-grade IT Asset Disposition (ITAD) and secure e-waste recycling across California, including frequent service routes in San Francisco / the Bay Area, Los Angeles, San Diego, and surrounding states.",
  "When your data security, brand reputation, and ESG commitments are on the line, we deliver defensible, audit-ready proof not just claims.",
];

export const metadata: Metadata = {
  title: { absolute: "R2v3, ISO 27001 & ITAD Certifications | Integritrade" },
  description: 
    "R2v3, ISO 27001, 9001, 14001 & 45001 certified. Enterprise NIST 800-88 data destruction, strict chain of custody, and TraceTech CODs. Verify credentials.",

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
    title: "R2v3, ISO 27001 & ITAD Certifications | Integritrade",
    description: 
      "R2v3, ISO 27001, 9001, 14001 & 45001 certified. Enterprise NIST 800-88 data destruction, strict chain of custody, and TraceTech CODs. Verify credentials.",
    url: "https://integritradellc.com/certifications/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://integritradellc.com/og/certifications.jpg",
        width: 1200,
        height: 630,
        alt: "Integritrade LLC Certifications and Standards",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "R2v3, ISO 27001 & ITAD Certifications | Integritrade",
    description: 
      "R2v3, ISO 27001, 9001, 14001 & 45001 certified. Enterprise NIST 800-88 data destruction, strict chain of custody, and TraceTech CODs. Verify credentials.",
    images: ["https://integritradellc.com/og/certifications.jpg"],
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
      streetAddress: "944 S Topeka Ave",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93721",
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
    <section className="bg-secondary dark:bg-dark transition-colors duration-300">
      {/* Hero (2026-10-05): the certificate cover photo, built like the Our
          Team hero (components/about/TeamHero.tsx): on desktop the photo bleeds
          to the right edge and fades into the page, the text sits on its empty
          left side; on phones the heading sits over the photo. No eyebrow. */}
      <TeamHero
        image={certificationsCover}
        alt="Certification folder with R2v3 and ISO badges on a desk beside a plant and a laptop"
        headline="Certifications & Compliance"
        intro={INTRO}
        imageClassName="object-[85%_center] lg:object-right"
        className="team-hero--wide team-hero--head-center"
      />

      <div className="container mx-auto px-4 pb-8 md:px-6 md:pb-24">
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