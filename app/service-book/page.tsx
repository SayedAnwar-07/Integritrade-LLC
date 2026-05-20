import { Metadata } from 'next'
import Script from 'next/script'
import ServiceDescription from '@/components/contact/ContactDescription'
import WhatHappensNext from '@/components/contact/Whathappensnext'
import FreeDropOff from '@/components/contact/Freedropoff'
import PageHeader from '@/components/shared/PageHeader'
import ScrollLoader from '@/components/shared/ScrollLoader'

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Contact Integritrade LLC | Certified ITAD & Electronic Recycling Fresno, CA',
  description:
    'Contact Integritrade LLC for R2v3-certified ITAD, NIST 800-88 compliant data destruction, and free e-waste recycling in California. Serving Fresno, Sacramento, Bay Area & San Diego. Free quote within 24 hours.',
  keywords: [
    'contact Integritrade LLC',
    'ITAD company Fresno CA',
    'IT asset disposition California',
    'R2v3 certified ITAD',
    'NIST 800-88 data destruction',
    'ISO 27001 certified ITAD',
    'electronic recycling Fresno CA',
    'e-waste recycling California',
    'secure data destruction service',
    'corporate electronics recycling California',
    'HIPAA compliant data destruction',
    'IT equipment disposal California',
    'free e-waste pickup Fresno',
    'certified data wiping service',
    'IT lifecycle management California',
    'hard drive destruction service',
    'electronic waste removal business',
    'ITAD quote California',
    'Certificate of Destruction ITAD',
    'data center decommissioning California',
    'ITAD company Fresno California',
    'electronic recycling Central Valley CA',
    'IT asset disposal Sacramento',
    'e-waste San Francisco Bay Area',
    'IT recycling San Diego',
  ],
  authors: [{ name: 'Integritrade LLC', url: 'https://integritradellc.com' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://integritradellc.com/service-book',
    title:
      'Contact Integritrade LLC | R2v3 Certified ITAD & Data Destruction California',
    description:
      'Get a free ITAD or e-waste recycling quote from Integritrade LLC certified partner serving California.',
    siteName: 'Integritrade LLC',
    locale: 'en_US',
    images: [
      {
        url: 'https://integritradellc.com/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Integritrade LLC Certified ITAD & Electronic Recycling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Integritrade LLC | R2v3 Certified ITAD & Data Destruction',
    description:
      'Free ITAD & e-waste recycling quote in 24 hours. R2v3, ISO 27001 & ISO 14001 certified. Zero data breaches. Serving all of California.',
    images: ['https://integritradellc.com/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://integritradellc.com/service-book',
  },
}

// ─── STRUCTURED DATA ──────────────────────────────────────────────────────────
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Organization'],
  '@id': 'https://integritradellc.com/#organization',
  name: 'Integritrade LLC',
  alternateName: 'Integritrade Lifecycle Solutions',
  url: 'https://integritradellc.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://integritradellc.com/logo.png',
    width: 400,
    height: 120,
  },
  image: 'https://integritradellc.com/og-contact.jpg',
  description:
    'Integritrade LLC is a California-based, R2v3-certified IT Asset Disposition (ITAD) and electronic recycling company. We provide NIST 800-88 compliant data destruction, certified e-waste recycling, and white-glove asset recovery services with a zero data breach record. Proudly serving Fresno, Sacramento, the San Francisco Bay Area, and San Diego.',
  telephone: '+15593254813',
  email: 'info@integritradeLLC.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1945 N Fine Ave, STE 111',
    addressLocality: 'Fresno',
    addressRegion: 'CA',
    postalCode: '93727',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 36.7881,
    longitude: -119.7717,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '15:00',
    },
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+15593254813',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '15:00',
      },
    },
    {
      '@type': 'ContactPoint',
      email: 'info@integritradeLLC.com',
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Fresno', containedInPlace: { '@type': 'State', name: 'California' } },
    { '@type': 'City', name: 'Clovis', containedInPlace: { '@type': 'State', name: 'California' } },
    { '@type': 'City', name: 'Madera', containedInPlace: { '@type': 'State', name: 'California' } },
    { '@type': 'City', name: 'Reedley', containedInPlace: { '@type': 'State', name: 'California' } },
    { '@type': 'City', name: 'Sacramento', containedInPlace: { '@type': 'State', name: 'California' } },
    { '@type': 'City', name: 'San Francisco', containedInPlace: { '@type': 'State', name: 'California' } },
    { '@type': 'City', name: 'San Diego', containedInPlace: { '@type': 'State', name: 'California' } },
    { '@type': 'State', name: 'California' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'ITAD & Electronic Recycling Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Asset Disposition (ITAD)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NIST 800-88 Data Destruction' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Free E-Waste Drop-Off Recycling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Asset Recovery & Remarketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'White-Glove On-Site ITAD Pickup' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Center Decommissioning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Junk Removal & Facility Cleanouts' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Liquidation & Asset Recovery' } },
    ],
  },
  award: [
    'R2v3 Certified (SERI)',
    'ISO 9001 Certified Quality Management',
    'ISO 14001 Certified Environmental Management',
    'ISO 27001 Certified Information Security',
    'ISO 45001 Certified Occupational Health & Safety',
  ],
  priceRange: 'Free–$$',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IT Asset Disposition & Electronic Recycling',
  provider: {
    '@type': 'Organization',
    name: 'Integritrade LLC',
    url: 'https://integritradellc.com',
    '@id': 'https://integritradellc.com/#organization',
  },
  areaServed: [
    'Fresno, CA', 'Clovis, CA', 'Madera, CA', 'Reedley, CA',
    'Sacramento, CA', 'San Francisco, CA', 'San Diego, CA', 'California',
  ],
  description:
    'Certified ITAD, NIST 800-88 data destruction, Certificate of Destruction (COD), free e-waste drop-off, and IT asset recovery services for businesses of all sizes across California.',
  serviceType: [
    'IT Asset Disposition',
    'Electronic Recycling',
    'NIST 800-88 Data Destruction',
    'E-Waste Recycling',
    'Asset Recovery',
    'Data Center Decommissioning',
    'Commercial Liquidation',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'ITAD & Recycling Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NIST 800-88 Data Destruction' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Free Electronics Drop-Off Recycling' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'IT Asset Recovery & Remarketing' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'White-Glove On-Site ITAD Pickup' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Data Center Decommissioning' } },
    ],
  },
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <>
      <Script type="application/ld+json" id="local-business-jsonld" strategy="afterInteractive">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script type="application/ld+json" id="service-jsonld" strategy="afterInteractive">
        {JSON.stringify(serviceSchema)}
      </Script>

      <main
        className="bg-[#f5f3ee] dark:bg-[#0a1f28] py-10 md:py-24 transition-colors duration-300"
        aria-label="Service Booking and Information"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollLoader>
            <PageHeader
              eyebrow="Get Started"
              title="Contact Certified IT Asset Disposition Experts"
              description="Reach Integritrade for R2v3-certified ITAD, NIST 800-88 data destruction, and secure e-waste recycling services across Fresno, Bay Area, Sacramento, and San Diego."
            />
          </ScrollLoader>

          {/* Form + Trust Signals */}
          <ScrollLoader>
            <ServiceDescription />
          </ScrollLoader>

          {/* Process Timeline */}
          <WhatHappensNext />

          {/* Free Drop-Off + Accepted Devices */}
          <FreeDropOff />
        </div>
      </main>
    </>
  )
}