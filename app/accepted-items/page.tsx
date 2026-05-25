import {
  Laptop2,
  Smartphone,
  Monitor,
  TabletSmartphone,
  Keyboard,
  Printer,
  Music2,
  Gamepad2,
  Server,
  Zap,
  Phone,
  Check,
} from 'lucide-react'
import { Metadata } from 'next'
import Script from 'next/script'
import PageHeader from '@/components/shared/PageHeader'
import SectionHeader from '@/components/shared/SectionHeader'
import PrimaryButton from '@/components/shared/buttons/PrimaryButton'
import Process from '@/components/services/Process'
import ScrollLoader from '@/components/shared/ScrollLoader'

import Image from 'next/image'
import wasteManagement from '@/public/wasteManagement.png'
import acceptedItemsImg from "@/public/accepted-items.jpeg";
import dropoffDesktop from "@/public/home/Dell-XPS.jpeg";




export const metadata: Metadata = {
  title: 'Accepted E-Waste Items for Recycling',
  description:
    'Accepted e-waste items at Integritrade LLC. Recycle computers, phones, monitors, printers, tablets, large copy machines, and more. Free drop-off and paid pickup available in Fresno, CA.',
  alternates: { canonical: '/accepted-items/' },
  openGraph: {
    title: 'Accepted E-Waste Items for Recycling | Integritrade LLC',
    description:
      'Accepted e-waste items at Integritrade LLC. Recycle computers, phones, monitors, printers, tablets, large copy machines, and more. Free drop-off and paid pickup available in Fresno, CA.',
    url: 'https://integritradellc.com/accepted-items/',
    siteName: 'Integritrade LLC',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://integritradellc.com/main-logo.png',
        width: 1200,
        height: 630,
        alt: 'Accepted E-Waste Items | Integritrade LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accepted E-Waste Items for Recycling | Integritrade LLC',
    description:
      'Recycle computers, phones, monitors, printers, and more with Integritrade LLC. Free drop-off and paid pickup available in Fresno, CA.',
    images: ['https://integritradellc.com/main-logo.png'],
  },
  robots: { index: true, follow: true },
}

const FREE_CATEGORIES: Array<{
  index: number
  icon: any
  title: string
  blurb: string
  items: string[]
}> = [
  {
    index:1,
    icon: Laptop2,
    title: 'Computing Devices',
    blurb: 'Desktops, laptops, all-in-ones, and workstations from any manufacturer.',
    items: [
      'Desktop computers & towers',
      'Laptops & notebooks',
      'All-in-one computers',
      'Servers & workstations',
      'Computer components',
    ],
  },
  {
    index:2,
    icon: Smartphone,
    title: 'Mobile & Communication',
    blurb: 'Phones and handheld communication devices, all generations.',
    items: [
      'Smartphones & cell phones',
      'Feature phones',
      'Cordless phones',
      'Two-way radios',
      'Pagers',
    ],
  },
  {
    index:3,
    icon: Monitor,
    title: 'Display Devices',
    blurb: 'Flat-panel displays, projectors, and professional smart screens.',
    items: [
      'LCD/LED/OLED monitors',
      'Flat screen TVs',
      'Projectors',
      'Digital photo frames',
      'Smart displays',
    ],
  },
  {
    index:4,
    icon: TabletSmartphone,
    title: 'Tablets & Mobile Computing',
    blurb: 'Tablets, e-readers, and portable navigation hardware.',
    items: [
      'iPads & Android tablets',
      'E-readers (Kindle, Nook)',
      'Portable media players',
      'GPS devices',
    ],
  },
  {
    index:5,
    icon: Keyboard,
    title: 'Peripherals & Accessories',
    blurb: 'Input devices, cabling, and desktop accessories of any kind.',
    items: [
      'Keyboards & mice',
      'Webcams',
      'Cables & adapters',
      'Power supplies',
      'Docking stations',
    ],
  },
  {
    index:6,
    icon: Printer,
    title: 'Printing & Scanning',
    blurb: 'Standard-format office printers, scanners, and fax hardware.',
    items: [
      'Inkjet & laser printers',
      'All-in-one printers',
      'Scanners',
      'Fax machines',
      'Label makers',
    ],
  },
  {
    index:7,
    icon: Music2,
    title: 'Audio & Visual',
    blurb: 'Sound systems, cameras, and home media playback equipment.',
    items: [
      'Speakers & sound systems',
      'Headphones & earbuds',
      'Digital cameras & camcorders',
      'DVD/Blu-ray players',
      'CD players',
    ],
  },
  {
    index:8,
    icon: Gamepad2,
    title: 'Gaming & Entertainment',
    blurb: 'Consoles, controllers, and immersive entertainment devices.',
    items: [
      'Gaming consoles (PlayStation, Xbox, Nintendo)',
      'Portable gaming devices',
      'Controllers & accessories',
      'VR headsets',
      'Streaming devices',
    ],
  },
  {
    index:9,
    icon: Server,
    title: 'Networking & Storage',
    blurb: 'Networking gear and consumer to enterprise storage hardware.',
    items: [
      'Routers & modems',
      'Network switches & hubs',
      'External hard drives',
      'USB flash drives',
      'Network attached storage (NAS)',
    ],
  },
]

const FEE_ITEMS: { title: string; sub: string; fee: string; index: number }[] = [
  {
    index: 1,
    title: 'Copy Machines / Commercial Copiers',
    sub: 'Large commercial copiers require specialized handling.',
    fee: '$100',
  },
  {
    index: 2,
    title: 'NiCD batteries from power tools',
    sub: 'Special handling required for hazardous materials.',
    fee: 'Fee varies',
  },
  {
    index: 3,
    title: 'Industrial equipment batteries',
    sub: 'Requires specialized disposal process.',
    fee: 'Fee varies',
  },
  {
    index: 4,
    title: 'Large appliances with electronic components',
    sub: 'Size and complexity require additional processing.',
    fee: 'Fee varies',
  },
]

const NOT_ACCEPTED_ITEMS: { title: string; note?: string, index: number }[] = [
  {
    index:1,
    title: 'Hazardous waste / chemicals',
    note: 'Including solvents, paints, pesticides, acids, cleaners, etc.',
  },
  {
    index:2,
    title: 'Oils and fuels',
    note: 'Motor oil, hydraulic oil, gasoline/diesel, oily rags or absorbents',
  },
  {
    index:3,
    title: 'Radioactive materials or devices',
    note: 'Any item containing regulated radioactive sources',
  },
  {
    index:4,
    title: 'Smoke detectors & regulated alarms',
    note: 'Ionization smoke detectors and similar regulated sensors',
  },
  {
    index:5,
    title: 'Medical / biohazard waste',
    note: 'Sharps, contaminated materials, laboratory waste',
  },
  {
    index:6,
    title: 'Pressurized cylinders & aerosols',
    note: 'Propane tanks, refrigerant bottles, compressed gas cylinders',
  },
  {
    index:7,
    title: 'Damaged or unsafe loose batteries',
    note: 'Swollen, leaking, hot, or damaged batteries please isolate and call first',
  },
]

export default function AcceptedItemsPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Integritrade LLC',
    url: 'https://integritradellc.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '(559) 325-4813',
      contactType: 'Customer Service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1945 N Fine Ave, STE 111',
      addressLocality: 'Fresno',
      addressRegion: 'CA',
      postalCode: '93727',
      addressCountry: 'US',
    },
    makesOffer: [
      ...FREE_CATEGORIES.map((category) => ({
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        itemOffered: {
          '@type': 'Service',
          name: `Free ${category.title} Recycling`,
          description: category.items.join(', '),
        },
      })),
    ],
    hasMap: 'https://maps.google.com/?q=1945+N+Fine+Ave+STE+111+Fresno+CA+93727',
    sameAs: ['https://integritradellc.com'],
  }

  return (
    <section className="bg-secondary dark:bg-dark pt-10 md:py-24 transition-colors duration-300">
      <div className="">

        {/* ── Page Header ──────────────────────────────────────────────────── */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <ScrollLoader>
            <PageHeader
              eyebrow="ACCEPTED ITEMS"
              title="Electronics we accept for certified recycling."
              description="As an R2v3-certified recycler, we accept most IT and office electronics at no-cost for public drop-offs, including computers, laptops, servers, wires, and related equipment. Free business pick-up is available with a combined total of 50+ laptops, desktops, and servers. Certificates of Data Destruction (CODs) and Certificates of Data Erasure (COEs) are available for ITAD and data destruction jobs."
              linkText="Schedule Drop-off"
              linkHref="/service-book"
            />
          </ScrollLoader>
        </div>

        {/* ── Free Recycling────────────────── */}
        <div className="mt-20 md:mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollLoader>
            <SectionHeader
              eyebrow="FREE RECYCLING"
              title="Devices we accept at no cost."
              description="All of the following electronic devices are accepted free of charge for drop-off recycling. No minimum quantities, no hidden fees."
              linkText=""
              linkHref=""
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {FREE_CATEGORIES.map(({ icon: Icon, title, blurb, items, index }) => (
                  <ScrollLoader key={title} delay={index * 0.08} className="h-full">
                    <article
                      className="h-full flex flex-col bg-white dark:bg-dark-secondary rounded-md p-7 lg:p-8 shadow-lg"
                    >
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary">
                        <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                      </span>

                      <h3 className="mt-6 font-serif text-xl text-gray-900 dark:text-gray-100 tracking-tight">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground dark:text-gray-400">
                        {blurb}
                      </p>

                      <ul className="mt-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        {items.map((i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700 dark:text-emerald-400"
                              strokeWidth={2}
                            />
                            <span>{i}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </ScrollLoader>
                ))}
            </div>
          </ScrollLoader>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <ScrollLoader>
            <div className="grid md:grid-cols-2 gap-10 items-center mt-20">

              {/* LEFT CONTENT */}
              <div className="space-y-4 max-w-xl text-base leading-relaxed text-stone-700 dark:text-slate-300">
                <p className="">
                  We accept a wide range of IT and office electronics for secure, certified recycling, helping businesses safely dispose of outdated or end-of-life equipment. From laptops and desktops to servers, networking hardware, and mobile devices, we handle assets of all types and brands with care.
                </p>

                <p className="">
                  Every item goes through a compliance-driven process focused on data security and environmental responsibility. Our workflows include secure handling, asset tracking, and certified data destruction to ensure safe and responsible recycling.
                </p>

                <p className="">
                  As an R2v3-certified provider, we maintain strict chain-of-custody and provide clear documentation for full transparency. Whether it&apos;s a few devices or a full IT decommissioning project, we deliver secure, reliable, and compliant solutions.
                </p>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative w-full h-[600px] rounded-md overflow-hidden">
                <Image
                  src={dropoffDesktop}
                  alt="Retired Dell desktop staged in a collection crate for certified recycling drop-off"
                  fill
                  className="object-cover"
                  loading="eager"
                  priority
                />
              </div>

            </div>
          </ScrollLoader>
        </div>    

        {/* ── Paid item ── */}
        <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollLoader>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
              {/* copy */}
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-lg text-gray-900 dark:text-gray-100 tracking-tight">
                  Copy Machines / Commercial Copiers
                </h3>
                <p className="mt-2 text-base leading-relaxed text-stone-700 dark:text-slate-300">
                  Large commercial copiers require specialized handling.
                </p>
              </div>

              {/* fee — announced */}
              <div className="flex flex-col justify-center rounded-md bg-white dark:bg-dark-secondary p-5 shadow-xl">
                {/* icon */}
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border  mb-4">
                  <Printer className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="text-[12px] uppercase tracking-[0.2em] font-semibold mb-1">
                  Processing&nbsp;Fee
                </span>
                <span className="font-serif text-2xl  tracking-tight leading-none">
                  $100
                </span>
              </div>
            </div>
          </ScrollLoader>
        </div>

        {/* ── Items With Processing Fees ───────────── */}
        <div className="mt-20 md:mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="PROCESSING FEES"
            title="Items with special handling requirements."
            description="A small subset of items require additional processing fees due to hazardous content or complexity. Fees are rare and only apply to specific cases."
            linkText=""
            linkHref=""
          />

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {FEE_ITEMS.map((f, idx) => (
              <ScrollLoader key={f.title} delay={idx * 0.08}>
                  <div
                    key={f.title}
                    className="h-full bg-white dark:bg-dark-secondary rounded-md border border-black/5 dark:border-white/10 p-7 shadow-lg"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-amber-700/50 dark:border-amber-400/50">
                        <Zap
                          className="h-5 w-5 text-amber-600 dark:text-amber-400"
                          strokeWidth={1.5}
                        />
                      </span>

                      <p className="text-[11px] uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400 font-semibold">
                        Fee Required
                      </p>
                    </div>
                    <div className=''>
                        <h3 className="mt-5 font-serif text-lg text-gray-900 dark:text-gray-100 tracking-tight min-h-16">
                            {f.title}
                        </h3>
                    </div>
                    <p className="mt-2 text-base leading-relaxed text-stone-700 dark:text-slate-300  min-h-16">
                      {f.sub}
                    </p>
                    
                  </div>
              </ScrollLoader>
            ))}
          </div>
        </div>
        
        {/* Not Accepted */}
        <div className="mt-20 md:mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-end justify-between">

            {/* ── Left column: heading + image + inline contact ──── */}
            <div className="w-full lg:w-5/12">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-red-700 dark:bg-red-400" />
                <span className="text-[1rem] font-mono uppercase tracking-[0.25em] text-red-700 dark:text-red-400 font-bold">
                  Not Accepted
                </span>
              </div>

              <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-100 tracking-tight leading-[1.05]">
                Materials outside our scope.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-stone-700 dark:text-slate-300 max-w-md">
                For safety, regulatory, and environmental compliance reasons, the
                following materials cannot be accepted at our facility. Please do not
                bring these items for drop-off.
              </p>

              {/* Image */}
              <div className="mt-8 relative rounded-md overflow-hidden shadow-lg aspect-[4/3] w-full max-w-md">
                <Image
                  src={wasteManagement}
                  alt="Hazardous waste materials we cannot accept at our recycling facility"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  loading="eager"
                  priority
                />
              </div>
            </div>

            {/* ── Right column: editorial typographic list ──────────────── */}
            <ol className="w-full lg:w-7/12 relative">
              {NOT_ACCEPTED_ITEMS.map((item, idx) => (
                <ScrollLoader key={item.title} delay={idx * 0.08}>
                  <li
                    className="group pl-8 md:pl-10 pr-2 py-6 first:pt-0 last:pb-0 mb-4 md:mb-6"
                  >
                    <div className="flex items-baseline gap-4 md:gap-6">
                      <span className="font-serif text-xl md:text-2xl text-red-700 dark:text-red-400 shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-serif text-xl md:text-2xl text-gray-900 dark:text-gray-100 tracking-tight leading-snug">
                          {item.title}
                        </h3>
                        {item.note && (
                          <p className="text-sm md:text-[15px] text-muted-foreground dark:text-gray-400 leading-relaxed max-w-xl">
                            {item.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                </ScrollLoader>
              ))}
            </ol>

          </div>
        </div>

        {/* ── Drop-off Process ─────────────────────── */}
        <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <Process />
        </div>

        {/* ── CTA ───────────────────── */}
        <div className="pb-20 sm:pb-0 md:mt-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden grid lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:border-r border-gray-100 dark:border-gray-800">
                <h2 className="mt-6 font-serif text-2xl md:text-3xl text-gray-900 dark:text-gray-100 tracking-tight leading-[1.15]">
                  Don&apos;t see your device listed?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-stone-700 dark:text-slate-300 max-w-lg">
                  If you have an electronic device that&apos;s not listed
                  above, reach out. We&apos;re always expanding our recycling
                  capabilities and may be able to help.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <PrimaryButton href="/about" testId="button-get-quote">
                        Ask About Your Device
                  </PrimaryButton>
                  <a
                    href="tel:+15593254813"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-gray-200 dark:border-gray-700 px-5 py-2.5 text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Phone className="h-4 w-4" /> (559) 325-4813
                  </a>
                </div>
              </div>

              <div className="p-8 md:p-12 bg-white dark:bg-dark-secondary rounded-md">
                <ScrollLoader>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                    Contact
                  </span>
                  <dl className="mt-6 space-y-6 text-sm">
                    <div>
                      <dt className="uppercase tracking-[0.18em] text-[10px] text-muted-foreground dark:text-gray-400">
                        Email
                      </dt>
                      <dd className="mt-1.5 text-gray-900 dark:text-gray-100 break-all">
                        <a
                          href="mailto:info@integritradeLLC.com"
                          className="hover:text-emerald-700 dark:hover:text-emerald-400"
                        >
                          info@integritradeLLC.com
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="uppercase tracking-[0.18em] text-[10px] text-muted-foreground dark:text-gray-400">
                        Address
                      </dt>
                      <dd className="mt-1.5 text-gray-900 dark:text-gray-100">
                        1945 N Fine Ave, STE 111
                        <br />
                        Fresno, CA 93727
                      </dd>
                    </div>
                  </dl>
                </ScrollLoader>
              </div>
          </div>
        </div>

        <Script
          type="application/ld+json"
          id="accepted-items-jsonld"
          strategy="afterInteractive"
        >
          {JSON.stringify(schemaData)}
        </Script>
      </div>
    </section>
  )
}