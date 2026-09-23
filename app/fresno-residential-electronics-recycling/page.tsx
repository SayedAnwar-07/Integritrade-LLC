import {
  Laptop2,
  Smartphone,
  Monitor,
  Printer,
  Gamepad2,
  Server,
  Phone,
  Check,
  ShieldCheck,
  Building2,
  CircleDollarSign,
} from 'lucide-react'
import { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'

import PageHeader from '@/components/shared/PageHeader'
import SectionHeader from '@/components/shared/SectionHeader'
import PrimaryButton from '@/components/shared/buttons/PrimaryButton'
import OutlineButton from '@/components/shared/buttons/OutlineButton'
import ScrollLoader from '@/components/shared/ScrollLoader'
import IndustryFAQ from '@/components/industries/IndustryFAQ'
import FAQSchema from '@/components/industries/FAQSchema'

export const metadata: Metadata = {
  title: { absolute: 'Fresno Residential Electronics Recycling & Drop-Off' },
  description:
    'Recycle household electronics in Fresno. Most laptops, phones, tablets, computers and TVs are accepted free at our residential drop-off. Call ahead.',
  alternates: { canonical: '/fresno-residential-electronics-recycling/' },
  openGraph: {
    title: 'Fresno Residential Electronics Recycling & E-Waste Drop-Off',
    description:
      'Residential e-waste drop-off in Fresno, CA at Integritrade’s R2v3-certified facility. Most household electronics accepted at no charge — call before drop-off.',
    url: 'https://integritradellc.com/fresno-residential-electronics-recycling/',
    siteName: 'Integritrade LLC',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://integritradellc.com/logo/integritrade-logo.png',
        width: 1200,
        height: 630,
        alt: 'Residential Electronics Recycling in Fresno, CA | Integritrade LLC',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fresno Residential Electronics Recycling & E-Waste Drop-Off | Integritrade',
    description:
      'Household e-waste drop-off in Fresno, CA. Most electronics accepted at no charge — call before drop-off at (559) 325-4813.',
    images: ['https://integritradellc.com/logo/integritrade-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

const ACCEPTED_CATEGORIES: Array<{
  index: number
  icon: any
  title: string
  items: string
}> = [
  {
    index: 1,
    icon: Laptop2,
    title: 'Computers and accessories',
    items:
      'Laptops, desktops, towers, all-in-ones, keyboards, mice, cables, adapters, power supplies, docks, webcams, and computer components.',
  },
  {
    index: 2,
    icon: Smartphone,
    title: 'Phones and mobile devices',
    items:
      'Cell phones, smartphones, tablets, iPads, e-readers, GPS devices, portable media players, and related accessories.',
  },
  {
    index: 3,
    icon: Monitor,
    title: 'Displays and home electronics',
    items:
      'LCD, LED, and OLED monitors; flat-screen TVs; projectors; digital photo frames; smart displays; DVD/Blu-ray players; and streaming devices.',
  },
  {
    index: 4,
    icon: Printer,
    title: 'Printers and office devices',
    items:
      'Standard inkjet and laser printers, scanners, fax machines, small all-in-one printers, label makers, and office peripherals.',
  },
  {
    index: 5,
    icon: Gamepad2,
    title: 'Audio, cameras, and gaming',
    items:
      'Speakers, headphones, cameras, camcorders, gaming consoles, controllers, VR headsets, and home entertainment equipment.',
  },
  {
    index: 6,
    icon: Server,
    title: 'Networking and storage',
    items:
      'Routers, modems, switches, hubs, external hard drives, USB flash drives, network-attached storage, and related networking equipment.',
  },
]

const NOT_ACCEPTED: string[] = [
  'Hazardous waste, chemicals, oils, or fuels',
  'Radioactive materials or devices',
  'Medical or biohazard waste',
  'Pressurized cylinders or refrigerant containers',
  'Loose damaged batteries that are swollen, leaking, hot, or otherwise unsafe',
]

const FAQS = [
  {
    question: 'Where can Fresno residents recycle old electronics?',
    answer:
      'Fresno residents can bring most accepted household and office electronics to Integritrade at 944 S. Topeka Ave, Fresno, CA 93721. Call or text (559) 325-4813 before arriving so Integritrade can confirm the item is accepted and ensure drop-off assistance is available.',
  },
  {
    question: 'Is residential electronics recycling free in Fresno?',
    answer:
      'Most commonly accepted residential electronics and IT equipment are accepted at no charge. Some oversized, specialized, or difficult-to-process items may have a nominal handling charge. Large commercial copiers and multifunction printers are common examples. Call ahead to confirm the item and any applicable fee.',
  },
  {
    question: 'What electronics can I drop off for recycling?',
    answer:
      'Integritrade accepts a broad range of laptops, desktops, computer accessories, phones, tablets, flat-screen TVs, monitors, printers, scanners, gaming consoles, cameras, speakers, routers, network equipment, external drives, cables, and other household electronics. Call ahead if the item is not listed or is unusually large.',
  },
  {
    question: 'Can I recycle an old laptop, phone, tablet, or hard drive that has personal data on it?',
    answer:
      'Yes, but residents should back up wanted files, sign out of accounts, remove SIM cards or removable storage they want to keep, and discuss data-sanitization or physical-destruction needs with Integritrade before drop-off. Integritrade is R2v3 certified to high industry standards of data security and environmental compliance. A certificate is available only when the applicable data service is requested and confirmed in advance.',
  },
  {
    question: 'Do I need an appointment for Fresno residential e-waste drop-off?',
    answer:
      'Please call or text before arriving. Advance contact helps Integritrade confirm item acceptance, confirm that a team member is available to help you quickly unload, and advise on any special handling or fee.',
  },
  {
    question: 'Does Integritrade also serve businesses with electronics recycling and ITAD?',
    answer:
      'Yes. Integritrade provides scheduled business ITAD, data destruction, corporate IT equipment buyback, value recovery, data-center support, and electronics recycling throughout California and the Western United States. Business customers should request a project evaluation rather than use the residential drop-off process.',
  },
]

export default function FresnoResidentialElectronicsRecyclingPage() {
  const orgSchema = {
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
      streetAddress: '944 S Topeka Ave',
      addressLocality: 'Fresno',
      addressRegion: 'CA',
      postalCode: '93721',
      addressCountry: 'US',
    },
    hasMap: 'https://maps.google.com/?q=944+S+Topeka+Ave+Fresno+CA+93721',
    sameAs: ['https://integritradellc.com'],
  }

  return (
    <section className="bg-secondary dark:bg-dark pt-10 md:py-24 transition-colors duration-300">
      <div>

        {/* ── Page Header ─────────────────────────────────────────────── */}
        <ScrollLoader>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <PageHeader
              eyebrow="FRESNO RESIDENTIAL E-WASTE DROP-OFF"
              title="Residential Electronics Recycling in Fresno, CA"
              description="Looking for a responsible place to recycle old laptops, cell phones, tablets, computers, TVs, printers, cables, gaming consoles, or other household electronics in Fresno? Integritrade provides residential electronics recycling and e-waste drop-off at its dedicated facility at 944 S. Topeka Ave, Fresno, CA 93721. Most commonly accepted household and office electronics can be dropped off at no charge."
            />

            <p className="mt-8 max-w-3xl mx-auto text-center text-[15px] leading-relaxed text-stone-700 dark:text-slate-300">
              Please call or text{' '}
              <a href="tel:+15593254813" className="font-semibold text-primary hover:underline">
                (559) 325-4813
              </a>{' '}
              before arriving so Integritrade can confirm the item is accepted and ensure a team
              member is available to assist with unloading.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15593254813"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                <Phone className="h-4 w-4" /> Call Before Drop-Off: (559) 325-4813
              </a>
              <OutlineButton href="/service-book/" testId="residential-ask-device">
                Ask About Your Device
              </OutlineButton>
            </div>
          </div>
        </ScrollLoader>

        {/* ── Accepted electronics ───────────────────────────────────── */}
        <ScrollLoader>
          <div className="mt-20 md:mt-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="MOST HOUSEHOLD ELECTRONICS ARE ACCEPTED"
              title="If it plugs in, has a screen, or stores data, we can likely help."
              description="Integritrade can accept and arrange responsible recycling for most common residential, home-office, and consumer-electronics items. If an item uses electricity, has a screen, stores data, connects to the internet, or was part of a home or office technology setup, there is a good chance Integritrade can help."
              linkText=""
              linkHref=""
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ACCEPTED_CATEGORIES.map(({ icon: Icon, title, items, index }) => (
                <article
                  key={index}
                  className="h-full flex flex-col bg-white dark:bg-dark-secondary rounded-md p-7 lg:p-8 shadow-lg"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                  </span>

                  <h3 className="mt-6 font-serif text-xl text-gray-900 dark:text-gray-100 tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-gray-300">
                    {items}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-stone-700 dark:text-slate-300">
              Don&apos;t see an item listed? Call or text before bringing it in. Integritrade handles a
              broad range of electronics and can confirm whether the item is accepted or whether
              special handling is needed.
            </p>
          </div>
        </ScrollLoader>

        {/* ── Pricing / free drop-off ────────────────────────────────── */}
        <ScrollLoader>
          <div className="mt-20 md:mt-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="PRICING"
              title="Most residential drop-offs are free."
              description="Integritrade tries to accept the majority of common residential electronics and IT equipment at no charge. The goal is to make responsible electronics recycling accessible for Fresno residents while ensuring equipment is handled through the appropriate reuse, recovery, or recycling pathway."
              linkText=""
              linkHref=""
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="rounded-md bg-white dark:bg-dark-secondary p-7 lg:p-8 shadow-lg border-t-2 border-primary">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary">
                  <Check className="h-5 w-5 text-primary" strokeWidth={2} />
                </span>
                <h3 className="mt-6 font-serif text-xl text-gray-900 dark:text-gray-100 tracking-tight">
                  Free for most items
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-gray-300">
                  Most common residential, home-office, and consumer electronics are accepted at no
                  charge. If you&apos;re unsure about an item, a quick call confirms it before you
                  make the trip.
                </p>
              </div>

              <div className="rounded-md bg-white dark:bg-dark-secondary p-7 lg:p-8 shadow-lg border-t-2 border-amber-500">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-amber-500/60">
                  <CircleDollarSign className="h-5 w-5 text-amber-600 dark:text-amber-400" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 font-serif text-xl text-gray-900 dark:text-gray-100 tracking-tight">
                  A few items may have a nominal fee
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-gray-300">
                  Unusually large, hard-to-transport, or specialized equipment — for example large
                  commercial copiers and multifunction printers, or certain industrial batteries —
                  may carry a small handling charge. Call ahead for a current quote before
                  transporting those items.
                </p>
              </div>
            </div>
          </div>
        </ScrollLoader>

        {/* ── Data protection ────────────────────────────────────────── */}
        <ScrollLoader>
          <div className="mt-20 md:mt-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="PROTECT YOUR PERSONAL DATA"
              title="Prepare data-bearing devices before you drop them off."
              description="Old electronics may still contain personal information. Before recycling a laptop, desktop, phone, tablet, external drive, or other data-bearing device, residents should back up any files they want to keep, sign out of personal accounts, remove any SIM or memory cards they want to retain, and remove devices from account-locking services where applicable."
              linkText=""
              linkHref=""
            />

            <div className="mt-8 max-w-3xl space-y-5 text-[15px] leading-relaxed text-stone-700 dark:text-slate-300">
              <p>
                Integritrade offers data-destruction and data-sanitization services for customers who
                need a defined destruction or erasure scope. A basic residential
                electronics-recycling drop-off should not be assumed to include a Certificate of
                Erasure or Certificate of Destruction unless that service is requested and confirmed
                in advance.
              </p>
              <p>
                For eligible data-bearing equipment, Integritrade can discuss logical sanitization,
                physical media destruction, and applicable documentation options before drop-off.
              </p>
            </div>
          </div>
        </ScrollLoader>

        {/* ── Facility + certifications ──────────────────────────────── */}
        <ScrollLoader>
          <div className="mt-20 md:mt-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <h2 className="mt-6 font-serif text-3xl md:text-4xl text-gray-900 dark:text-gray-100 tracking-tight leading-[1.1]">
                  Delivered to an established ITAD operation — not an unknown collection point.
                </h2>
                <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-stone-700 dark:text-slate-300">
                  <p>
                    Residential electronics are received at Integritrade&apos;s 31,000 sq ft
                    controlled-access, video-monitored Fresno ITAD facility. The location supports
                    secure staging, electronics-recycling intake, data-handling services, value
                    recovery, and coordination with qualified downstream recycling vendors for
                    end-of-life material.
                  </p>
                  <p>
                    Many government agencies, healthcare organizations, schools, and financial
                    institutions place real weight on recognized certifications such as R2v3 and ISO
                    management-system certifications. Integritrade brings that same controlled-facility
                    approach, documented handling process, and security-minded infrastructure to local
                    Fresno and Clovis residents and home offices — not only large enterprise ITAD
                    projects.
                  </p>
                </div>
              </div>

              <div className="rounded-md bg-white dark:bg-dark-secondary p-7 lg:p-8 shadow-lg">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-primary">
                  <ShieldCheck className="h-5 w-5 text-primary" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 font-serif text-xl text-gray-900 dark:text-gray-100">
                  R2v3 certified, with ISO 9001, 14001, 45001 &amp; 27001
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-700 dark:text-gray-300">
                  Controlled access, video monitoring, trained personnel, and accountable
                  downstream-recycling relationships give Fresno and Clovis residents confidence in
                  where their electronics go next.
                </p>
                <div className="mt-6 rounded-md border border-gray-200 dark:border-gray-700 p-5">
                  <div className="flex items-start gap-3">
                    <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700 dark:text-emerald-400" />
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900 dark:text-gray-100">Running a business?</p>
                      <p className="mt-1 text-stone-700 dark:text-gray-300">
                        For scheduled ITAD pickup, data destruction, equipment buyback, and multi-site
                        projects, see{' '}
                        <Link href="/industries/business-corporate/" className="text-primary hover:underline">
                          Business &amp; Corporate ITAD
                        </Link>{' '}
                        or{' '}
                        <Link href="/service-book/" className="text-primary hover:underline">
                          book a service
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollLoader>

        {/* ── Not accepted ───────────────────────────────────────────── */}
        <ScrollLoader>
          <div className="mt-20 md:mt-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mt-6 font-serif text-3xl md:text-4xl text-gray-900 dark:text-gray-100 tracking-tight leading-[1.1]">
              Items we can&apos;t take at residential drop-off.
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-stone-700 dark:text-slate-300">
              For safety and regulatory reasons, please do not bring the following. If you have
              questions about an item, call or text before you come in.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {NOT_ACCEPTED.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-md bg-white dark:bg-dark-secondary p-5 shadow-sm text-[15px] text-gray-800 dark:text-gray-200"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </ScrollLoader>

        {/* ── FAQ ────────────────────────────────────────────────────── */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSchema faqs={FAQS} />
          <IndustryFAQ faqs={FAQS} />
        </div>

        {/* ── CTA ────────────────────────────────────────────────────── */}
        <ScrollLoader>
          <div className="pb-20 sm:pb-0 mt-20 md:mt-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden grid lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:border-r border-gray-100 dark:border-gray-800">
                <h2 className="font-serif text-2xl md:text-3xl text-gray-900 dark:text-gray-100 tracking-tight leading-[1.15]">
                  Ready to drop off your electronics?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-stone-700 dark:text-slate-300 max-w-lg">
                  Call or text before you come by so we can confirm your item is accepted and have
                  someone ready to help you unload.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+15593254813"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                  >
                    <Phone className="h-4 w-4" /> (559) 325-4813
                  </a>
                  <PrimaryButton href="/service-book/" testId="residential-book">
                    Book a Service
                  </PrimaryButton>
                </div>
              </div>

              <div className="p-8 md:p-12 bg-white dark:bg-dark-secondary rounded-md">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
                  Drop-Off Location
                </span>
                <dl className="mt-6 space-y-6 text-sm">
                  <div>
                    <dt className="uppercase tracking-[0.18em] text-[10px] text-muted-foreground dark:text-gray-400">
                      Address
                    </dt>
                    <dd className="mt-1.5 text-gray-900 dark:text-gray-100">
                      944 S Topeka Ave
                      <br />
                      Fresno, CA 93721
                    </dd>
                  </div>
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
                </dl>
              </div>
            </div>
          </div>
        </ScrollLoader>

        <Script
          type="application/ld+json"
          id="fresno-residential-recycling-jsonld"
          strategy="afterInteractive"
        >
          {JSON.stringify(orgSchema)}
        </Script>
      </div>
    </section>
  )
}
