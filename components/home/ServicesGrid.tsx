'use client'

import Link from 'next/link'
import {  ArrowUpRight } from 'lucide-react'
import { servicesData } from '@/data/servicesData'
import SectionHeader from '../shared/SectionHeader'
import Image from 'next/image'
import { truncate } from '@/lib/truncate'
import ScrollLoader from '../shared/ScrollLoader'
import { ReactElement } from 'react'


type IconProps = { className?: string }

const ITADIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="4" width="22" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="5" y="13" width="22" height="6" rx="1.2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="9" cy="7" r="0.9" fill="currentColor" />
    <circle cx="9" cy="16" r="0.9" fill="currentColor" />
    <path d="M14 7h8M14 16h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M16 22l5 1.8v3.4c0 1.7-2.2 2.8-5 4-2.8-1.2-5-2.3-5-4v-3.4L16 22z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M14 26.2l1.6 1.5L18 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const RecyclingIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.5 6.5L8 12.5h3v3"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 9.5l3.5 6h-7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 22l-3.5-6 6-1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 26l4-2-2-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect x="13" y="13" width="6" height="6" rx="0.8" stroke="currentColor" strokeWidth="1.5" />
    <path d="M14 11v2M16 11v2M18 11v2M14 19v2M16 19v2M18 19v2M11 14h2M11 16h2M11 18h2M19 14h2M19 16h2M19 18h2"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const DataDestructionIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="6" width="22" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="11" cy="11.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="11" cy="11.5" r="0.8" fill="currentColor" />
    <path d="M16 9.5h7M16 12h7M16 14.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M8 20l2 6M13 20l2 6M18 20l2 6M23 20l2 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)


type IconTheme = {
  Icon: (p: IconProps) => ReactElement
  borderLight: string
  borderDark: string
  textLight: string
  textDark: string
}

const iconConfig: Record<string, IconTheme> = {
  'it-asset-disposition': {
    Icon: ITADIcon,
    borderLight: 'border-emerald-200/80',
    borderDark: 'dark:border-emerald-700/40',
    textLight: 'text-emerald-700',
    textDark: 'dark:text-emerald-300',
  },
  'e-waste-recycling': {
    Icon: RecyclingIcon,
    borderLight: 'border-teal-200/80',
    borderDark: 'dark:border-teal-700/40',
    textLight: 'text-teal-700',
    textDark: 'dark:text-teal-300',
  },
  'data-destruction-services': {
    Icon: DataDestructionIcon,
    borderLight: 'border-rose-200/80',
    borderDark: 'dark:border-rose-700/40',
    textLight: 'text-rose-700',
    textDark: 'dark:text-rose-300',
  },
}

export default function ServicesGrid() {
  return (
    <section className="bg-secondary dark:bg-dark py-24 transition-colors duration-300 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
         <ScrollLoader>
            {/* Header */}
            <SectionHeader
              eyebrow="How We Operate"
              title="Business ITAD services built around pickup, proof, and final reporting."
              description="From secure data destruction to certified reporting, our ITAD process ensures every asset is tracked, wiped, and documented meeting the highest compliance standards without compromise."
              linkText="Explore Our Process"
              linkHref="/services/"
            />
        </ScrollLoader>

        {/* Editorial service grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-20">
          {servicesData.slice(0, 3).map((service, idx) => {
            const theme = iconConfig[service.slug]
            const Icon = theme?.Icon

            return (
              <ScrollLoader
                key={service.slug}
                delay={idx * 0.08}
                y={30}
              >
                <article
                  key={service.slug}
                  className="group h-full"
                >
                   <Link
                            href={`/services/${service.slug}`}
                            className="flex h-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 ease-out hover:border-primary hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-gray-800 dark:bg-dark-secondary dark:hover:border-primary shadow-lg"
                    >
                      {/* Image */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-gray-90">
                        <Image
                          src={service.image}
                          alt={service.pageTitle}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>

                      {/* content */}
                      <div className='flex flex-1 flex-col p-6'>
                          {/* Title — reserves space for 2 lines */}
                          <h3 className="mb-3 font-serif text-xl leading-snug text-gray-900 transition-colors group-hover:text-primary dark:text-gray-50 dark:group-hover:text-primary line-clamp-2 min-h-[3.5rem]">
                            {service.pageTitle}
                          </h3>

                          {/* Subtitle — reserves space for ~4 lines, clamps overflow */}
                          <p className="text-[14px] leading-relaxed text-stone-700 dark:text-slate-300 mb-5 custom-text-center line-clamp-4 min-h-[5.5rem]">
                            {truncate(service.pageSubtitle, 160)}
                          </p>

                         <div className="click-feel group mt-auto flex items-center gap-1.5 border-t border-gray-100 pt-4 dark:border-gray-800 transition-all duration-300">
                            <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-700 transition-colors duration-300 group-hover:text-primary dark:text-gray-300 dark:group-hover:text-primary">
                              Explore Service
                            </span>

                            <ArrowUpRight
                              size={14}
                              className="h-3.5 w-3.5 text-gray-700 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary dark:text-gray-300 dark:group-hover:text-primary"
                              strokeWidth={2}
                            />
                         </div>
                        </div> 
                    </Link>  
                </article>   
              </ScrollLoader>        
            )
          })}
        </div>
      </div>
    </section>
  )
}