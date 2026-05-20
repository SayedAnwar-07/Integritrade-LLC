"use client"

import React from "react"

const SchemaMarkup: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Integritrade LLC",
    url: "https://integritradellc.com/",
    logo: "https://integritradellc.com/_next/static/media/main-logo.d956176c.png",
    description:
      "Integritrade LLC offers certified ITAD, data destruction, and e-waste recycling solutions to keep your business secure and environmentally responsible.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1945 N Fine Ave, STE 111",
      addressLocality: "Fresno",
      addressRegion: "California",
      postalCode: "93727",
      addressCountry: "US",
    },
    telephone: "+1(559) 325-4813",
    email: "info@integritradeLLC.com",
    foundingDate: "2023-06-01",
    sameAs: [
      "https://www.linkedin.com/company/integritrade-llc",
      "https://www.facebook.com/integritradeLLC",
    ],
  }

  const ratingSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Integritrade LLC",
    url: "https://integritradellc.com/",
    logo: "https://integritradellc.com/_next/static/media/main-logo.d956176c.png",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "126",
      reviewCount: "45",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "1945 N Fine Ave, STE 111",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93727",
      addressCountry: "US",
    },
    telephone: "+1(559) 325-4813",
    email: "info@integritradeLLC.com",
    description:
      "Integritrade LLC provides certified ITAD, secure data destruction, and eco-friendly e-waste recycling solutions for businesses.",
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Integritrade LLC",
    image: "https://integritradellc.com/_next/static/media/main-logo.d956176c.png",
    "@id": "https://integritradellc.com/",
    url: "https://integritradellc.com/",
    telephone: "+1(559) 325-4813",
    email: "info@integritradeLLC.com",
    description:
      "Integritrade LLC provides certified ITAD, secure data destruction, and e-waste recycling services to help businesses dispose of electronic assets responsibly and safely.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1945 N Fine Ave, STE 111",
      addressLocality: "Fresno",
      addressRegion: "CA",
      postalCode: "93727",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.7515",
      longitude: "-119.7400",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: {
      "@type": "Place",
      name: "California, United States",
    },
    sameAs: [
      "https://www.linkedin.com/company/integritrade-llc/",
      "https://www.facebook.com/integritradeLLC",
    ],
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IT Asset Disposition (ITAD), Data Destruction, and E-Waste Recycling",
    provider: {
      "@type": "Organization",
      name: "Integritrade LLC",
      url: "https://integritradellc.com/",
      logo: "https://integritradellc.com/_next/static/media/main-logo.d956176c.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1945 N Fine Ave, STE 111",
        addressLocality: "Fresno",
        addressRegion: "CA",
        postalCode: "93727",
        addressCountry: "US",
      },
      telephone: "+1(559) 325-4813",
      email: "info@integritradeLLC.com",
    },
    areaServed: {
      "@type": "Place",
      name: "United States",
    },
    description:
      "Integritrade LLC provides secure and environmentally responsible IT asset disposition (ITAD), certified data destruction, and e-waste recycling services for businesses and organizations.",
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Recycle E-Waste Safely",
    description:
      "A step-by-step guide by Integritrade LLC to recycle your old electronics securely and responsibly.",
    image: "https://integritradellc.com/_next/static/media/main-logo.d956176c.png",
    totalTime: "PT10M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "USD",
      value: "0",
    },
    supply: [
      { "@type": "HowToSupply", name: "Old electronic devices" },
      { "@type": "HowToSupply", name: "Recycling collection box or bin" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Protective gloves" },
      { "@type": "HowToTool", name: "Data wipe software" },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Back up your data",
        text: "Before recycling, back up all important files from your device to a secure storage location or cloud service.",
      },
      {
        "@type": "HowToStep",
        name: "Erase personal data",
        text: "Use certified data destruction or wiping software to remove all personal information from your devices.",
      },
      {
        "@type": "HowToStep",
        name: "Find a certified recycler",
        text: "Locate a certified ITAD or e-waste recycling company like Integritrade LLC to ensure proper and eco-friendly disposal.",
      },
      {
        "@type": "HowToStep",
        name: "Drop off your e-waste",
        text: "Deliver your devices to the recycling center or schedule a pickup service if available.",
      },
      {
        "@type": "HowToStep",
        name: "Get a recycling certificate",
        text: "Request a recycling or data destruction certificate for recordkeeping and environmental compliance.",
      },
    ],
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Integritrade LLC provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Integritrade LLC provides certified IT Asset Disposition (ITAD), secure data destruction, and eco-friendly e-waste recycling services for businesses and organizations.",
        },
      },
      {
        "@type": "Question",
        name: "Is Integritrade LLC certified for data destruction?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Integritrade LLC follows industry-standard certifications such as R2 and ISO to ensure complete and compliant data destruction processes.",
        },
      },
      {
        "@type": "Question",
        name: "Does Integritrade LLC offer on-site pickup for e-waste?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Integritrade LLC provides on-site pickup and logistics support for businesses to safely transport electronic assets for recycling.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Integritrade LLC located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Integritrade LLC is located at 1945 N Fine Ave, STE 111, Fresno, California, United States, 93727.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Integritrade LLC?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Integritrade LLC through their website at https://integritradellc.com/ or by calling +1(559) 325-4813",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}

export default SchemaMarkup
