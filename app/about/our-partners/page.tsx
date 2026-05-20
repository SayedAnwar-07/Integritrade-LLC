import Image from "next/image";
import ELFUS from "@/assets/ELFUS.jpg";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ScrollLoader from "@/components/shared/ScrollLoader";

export const metadata: Metadata = {
  title: "Our Trusted Business Partners | Integritrade LLC",
  description:
    "Meet your trusted partners at Integritrade LLC. You work with vetted suppliers and service providers who support quality, reliability, and long term business growth.",
  keywords: [
    "Integritrade LLC partners",
    "ELFUS Foundation partnership",
    "ITAD collaborations",
    "sustainable technology partnerships",
    "e-waste recycling partners",
    "eco-friendly IT solutions",
    "IT recycling programs USA",
    "digital inclusion partnerships",
    "corporate sustainability partners",
    "technology reuse programs",
    "secure data destruction partners",
  ],

  alternates: {
    canonical: "/about/our-partners/",
  },

  openGraph: {
    title: "Our Trusted Business Partners | Integritrade LLC",
    description:
      "Meet your trusted partners at Integritrade LLC. You work with vetted suppliers and service providers who support quality, reliability, and long term business growth.",

    url: "https://integritradellc.com/about/our-partners/",

    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "https://integritradellc.com/main-logo.png",
        width: 1200,
        height: 630,
        alt: "Integritrade LLC Partners",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Trusted Business Partners | Integritrade LLC",
    description:
      "Meet your trusted partners at Integritrade LLC. You work with vetted suppliers and service providers who support quality, reliability, and long term business growth.",

    // ✅ FIXED (stable image)
    images: ["https://integritradellc.com/main-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function OurPartnersPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Integritrade LLC",
    url: "https://integritradellc.com",
    logo: "https://integritradellc.com/_next/static/media/main-logo.d956176c.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-559-325-4813",
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
    description:
      "Meet your trusted partners at Integritrade LLC. You work with vetted suppliers and service providers who support quality, reliability, and long term business growth.",
    sameAs: [],
    knowsAbout: [
      "IT asset disposition",
      "sustainable technology reuse",
      "e-waste recycling",
      "data security",
      "environmental compliance",
    ],
    hasPart: {
      "@type": "Organization",
      name: "ELFUS Foundation",
      url: "https://elfus.org/",
      description:
        "A nonprofit creating equitable access to education and technology through collaborative initiatives.",
    },
  };

  return (
   <section className="bg-secondary dark:bg-dark pt-10 md:py-24 transition-colors duration-300">
      <Script
        id="partners-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollLoader>
          <PageHeader
                eyebrow="Our Partners"
                title="Strategic Partnerships for Sustainable Impact"
                description="Building sustainable futures through strategic collaborations that bridge technology access and environmental responsibility. Together, we empower communities, reduce e-waste, and create opportunities where innovation meets purpose."
                linkText=""
                linkHref=""
          />
        </ScrollLoader>

        {/* ELFUS Section */}
        <ScrollLoader>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-12">
            <Image
              src={ELFUS}
              alt="ELFUS Foundation Partnership with Integritrade LLC"
              className="rounded-md w-full h-80 object-cover"
            />
            <div>
              <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-stone-900 dark:text-white mb-3">
                Education and Leadership Foundation (ELF)
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-justify mb-3">
                Partnering with ELF, we extend the lifecycle of technology while
                ensuring equitable access to education and resources for
                underrepresented communities.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-justify">
                Together, we transform recovered devices into tools for learning,
                growth, and opportunity bridging the digital divide one device at
                a time.
              </p>
            </div>
          </div>
        </ScrollLoader>

        {/* Commitment */}
        <ScrollLoader>
          <blockquote className="italic text-gray-700 dark:text-gray-300 p-6 rounded-md pb-12 transition-colors duration-300">
            “We deeply admire ELF mission and the incredible work they do to
            uplift underrepresented communities. We are proud to support their
            initiatives through ongoing device donations and sustainable programs.”
          </blockquote>
        </ScrollLoader>

      </div>
   </section>

  );
}
