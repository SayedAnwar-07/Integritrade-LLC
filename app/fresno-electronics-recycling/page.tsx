import { Metadata } from 'next'
import Link from 'next/link'

// This page was renamed to /fresno-residential-electronics-recycling/ on
// 2026-09-17 (residential-focused URL, better suited for SEO). The real
// redirect is a server-side 301 in public/.htaccess, which shadows this URL
// for all live traffic. This file remains only as a noindex canonical stub so
// the build produces no duplicate indexable content and the sitemap generator
// (which skips noindex routes) drops the old URL. Safe to delete once the old
// index.html is no longer on the server.
const NEW_URL = 'https://integritradellc.com/fresno-residential-electronics-recycling/'

export const metadata: Metadata = {
  title: 'Fresno Residential Electronics Recycling & E-Waste Drop-Off | Integritrade',
  description:
    'This page has moved to Integritrade’s Fresno residential electronics recycling and e-waste drop-off page.',
  alternates: { canonical: '/fresno-residential-electronics-recycling/' },
  robots: { index: false, follow: true },
}

export default function FresnoElectronicsRecyclingMoved() {
  return (
    <section className="bg-secondary dark:bg-dark min-h-[60vh] flex items-center transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <h1 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-gray-100 tracking-tight">
          This page has moved
        </h1>
        <p className="mt-4 text-base leading-relaxed text-stone-700 dark:text-slate-300">
          Fresno residential electronics recycling and e-waste drop-off is now here:
        </p>
        <Link
          href="/fresno-residential-electronics-recycling/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
        >
          Go to Fresno Residential Electronics Recycling
        </Link>
      </div>
    </section>
  )
}
