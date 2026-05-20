'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import {
  servicesData,
  serviceComparisonHero,
  valueRecoveryDisclaimer,
} from '@/data/servicesData'
import ScrollLoader from '../shared/ScrollLoader'

type ServiceTheme = {
  borderLight: string
  borderDark: string
  textLight: string
  textDark: string
  accentLight: string
  accentDark: string
}

const themeConfig: Record<string, ServiceTheme> = {
  'it-asset-disposition': {
    borderLight: 'border-emerald-200/80',
    borderDark: 'dark:border-emerald-700/40',
    textLight: 'text-emerald-700',
    textDark: 'dark:text-emerald-300',
    accentLight: 'bg-emerald-50',
    accentDark: 'dark:bg-emerald-900/20',
  },
  'e-waste-recycling': {
    borderLight: 'border-teal-200/80',
    borderDark: 'dark:border-teal-700/40',
    textLight: 'text-teal-700',
    textDark: 'dark:text-teal-300',
    accentLight: 'bg-teal-50',
    accentDark: 'dark:bg-teal-900/20',
  },
  'asset-recovery-services': {
    borderLight: 'border-amber-200/80',
    borderDark: 'dark:border-amber-700/40',
    textLight: 'text-amber-700',
    textDark: 'dark:text-amber-300',
    accentLight: 'bg-amber-50',
    accentDark: 'dark:bg-amber-900/20',
  },
  'junk-removal': {
    borderLight: 'border-orange-200/80',
    borderDark: 'dark:border-orange-700/40',
    textLight: 'text-orange-700',
    textDark: 'dark:text-orange-300',
    accentLight: 'bg-orange-50',
    accentDark: 'dark:bg-orange-900/20',
  },
  'business-liquidation': {
    borderLight: 'border-sky-200/80',
    borderDark: 'dark:border-sky-700/40',
    textLight: 'text-sky-700',
    textDark: 'dark:text-sky-300',
    accentLight: 'bg-sky-50',
    accentDark: 'dark:bg-sky-900/20',
  },
  'data-destruction-services': {
    borderLight: 'border-rose-200/80',
    borderDark: 'dark:border-rose-700/40',
    textLight: 'text-rose-700',
    textDark: 'dark:text-rose-300',
    accentLight: 'bg-rose-50',
    accentDark: 'dark:bg-rose-900/20',
  },
}

export default function ServicesShowcase() {
  const tiers = servicesData.filter(s => s.serviceLevel)
  const totalTiers = String(tiers.length).padStart(2, '0')

  return (
    <section className="bg-secondary dark:bg-dark  transition-colors duration-300">
      <div className="max-w-7xl mx-auto mt-12">

        {/* ──────────────────────────────────────────────────────────────────
            SERVICE TIERS
        ────────────────────────────────────────────────────────────────── */}
        <div className="">
          {tiers.map((service, idx) => {
            const sl = service.serviceLevel!
            const theme = themeConfig[service.slug]
            const isEven = idx % 2 === 0
            const rows = [
              { label: 'Best For',       value: sl.bestFor },
              { label: 'Includes',       value: sl.includes },
              { label: 'Documentation',  value: sl.documentation },
              { label: 'Value Recovery', value: sl.valueRecovery },
            ]

            return (
              <ScrollLoader key={service.slug} delay={idx * 0.05}>
                <article className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-12 py-20 items-start">

                  {/* ─── IMAGE PANEL ───────────────────────────────── */}
                  <div
                    className={[
                      'lg:col-span-5 relative min-h-[320px] lg:min-h-[520px] overflow-hidden rounded-md',
                      theme?.accentLight,
                      theme?.accentDark,
                      isEven ? 'lg:order-1' : 'lg:order-2',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <Image
                      src={service.image}
                      alt={sl.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      placeholder="blur"
                      priority
                    />

                    {/* Subtle gradient for badge legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                    {/* Tier badge */}
                    <span className="absolute top-5 left-6 font-mono text-[10px] uppercase tracking-[0.24em] text-white bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                      Tier {sl.tier} / {totalTiers}
                    </span>
                  </div>

                  {/* ─── CONTENT PANEL ─────────────────────────────── */}
                  <div
                    className={[
                      'lg:col-span-7',
                      isEven ? 'lg:order-2' : 'lg:order-1',
                    ].join(' ')}
                  >

                    {/* Service title */}
                    <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white tracking-tight leading-[1.15] mb-8">
                      {sl.label}
                    </h3>

                    {/* Definition rows */}
                    <dl className="">
                      {rows.map((row) => (
                        <div
                          key={row.label}
                          className="grid grid-cols-1 sm:grid-cols-4 gap-x-6 gap-y-2 py-5 border-b border-gray-200 dark:border-gray-800"
                        >
                          <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 pt-1">
                            {row.label}
                          </dt>
                          <dd className="sm:col-span-3 text-[14.5px] leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                            {row.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    {/* "Choose This Tier If" callout */}
                    <div className='mt-4'>
                      <p className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-200 text-justify">
                        {sl.whenToChoose}
                      </p>
                    </div>

                    {/* Explore link */}
                    <div className="mt-10">
                      <Link
                        href={`/services/${service.slug}`}
                        className={[
                          'group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.20em] font-semibold pb-1.5 border-b transition-colors',
                          theme?.textLight,
                          theme?.textDark,
                          theme?.borderLight,
                          theme?.borderDark,
                        ]
                          .filter(Boolean)
                          .join(' ')}
                      >
                        {sl.linkText}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>

                  </div>
                </article>
              </ScrollLoader>
            )
          })}
        </div>

      </div>
    </section>
  )
}