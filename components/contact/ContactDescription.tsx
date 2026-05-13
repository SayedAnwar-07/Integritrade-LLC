import Image from 'next/image'
import Link from 'next/link'

import Iso9001 from "@/public/ISO/ISO-9001.webp"
import Iso14001 from "@/public/ISO/ISO-14001.webp"
import Iso27001 from "@/public/ISO/ISO-27001.webp"
import Iso45001 from "@/public/ISO/ISO-45001.webp"
import R2v3 from "@/public/ISO/R2V3_certified_logo.webp"
import { Separator } from '../ui/separator'
import BookingForm from './BookingForm'
import ScrollLoader from '../shared/ScrollLoader'

type Cert = {
  index: number
  image: any
  iconColor: string
  iconBg: string
  number: string
  name: string
  meaning: string
  href: string
  external?: boolean
}

const R2V3_URL =
  'https://sustainableelectronics.org/find-an-r2-certified-facility/?appids=001UQ000001w7S2YAI&tab=2&backto=https://sustainableelectronics.org/find-an-r2-certified-facility/?type=byalias&alias=integritrade'

const certs: Cert[] = [
  {
    index:1,
    image: R2v3,
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    iconBg: 'bg-emerald-50 dark:bg-emerald-900/30',
    number: '01',
    name: 'R2v3',
    meaning:
      'No illegal dumping verified downstream vendors across fully transparent recycling chains.',
    href: R2V3_URL,
    external: true,
  },
  {
    index:2,
    image: Iso27001,
    iconColor: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-50 dark:bg-blue-900/30',
    number: '02',
    name: 'ISO 27001',
    meaning:
      'Your data handled under recognized information security controls until certified destruction.',
    href: '/certifications/',
  },
  {
    index:3,
    image: Iso9001,
    iconColor: 'text-amber-600 dark:text-amber-400',
    iconBg: 'bg-amber-50 dark:bg-amber-900/30',
    number: '03',
    name: 'ISO 9001',
    meaning:
      'Consistent quality across every pickup report and destruction project we deliver.',
    href: '/certifications/',
  },
  {
    index:4,
    image: Iso14001,
    iconColor: 'text-green-700 dark:text-green-400',
    iconBg: 'bg-green-50 dark:bg-green-900/30',
    number: '04',
    name: 'ISO 14001',
    meaning:
      'Lower environmental impact measurable verifiable and ready for sustainability audit reporting.',
    href: '/certifications/',
  },
  {
    index:5,
    image: Iso45001,
    iconColor: 'text-orange-600 dark:text-orange-400',
    iconBg: 'bg-orange-50 dark:bg-orange-900/30',
    number: '05',
    name: 'ISO 45001',
    meaning:
      'Safe handling and occupational health controls reducing liability exposure for clients.',
    href: '/certifications/',
  },
]

export default function ContactDescription() {
  return (
    <section className="bg-[#f5f3ee] dark:bg-[#0a1f28] overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          {/* ─── Cert Grid ─── */}
          <div className="order-2 lg:order-1 lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {certs.map(({ image, number, name, meaning, href, external}) => {
                const cardContent = (
                    <>
                      {/* Image column */}
                      <div className="flex-shrink-0 flex items-start justify-center sm:justify-start">
                        {image ? (
                          <div className="relative w-20 h-20 opacity-90 group-hover:opacity-100 transition-opacity">
                            <Image
                              src={image}
                              alt={`${name} certification badge`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400 dark:text-slate-500 pt-2">
                            {number}
                          </div>
                        )}
                      </div>

                      {/* Text column */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-xl sm:text-2xl leading-snug text-stone-900 dark:text-white mb-2 sm:mb-3 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          {name}
                        </h3>

                        <Separator className="my-3 sm:my-4 border-stone-200 dark:border-slate-700 max-w-60" />

                        <p className="text-sm sm:text-[14px] leading-relaxed text-stone-700 dark:text-slate-300 w-full lg:max-w-xs text-balance">
                          {meaning}
                        </p>
                      </div>
                    </>
                )

                const cardClasses =
                  'flex gap-4 sm:gap-5 group relative p-5 sm:p-6 rounded-md cursor-pointer transition-colors'

                if (external) {
                  return (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClasses}
                      aria-label={`${name} certification — opens in new tab`}
                    >
                      {cardContent}
                    </a>
                  )
                }

                return (
                  <Link
                    key={name}
                    href={href}
                    className={cardClasses}
                    aria-label={`${name} certification`}
                  >
                    {cardContent}
                  </Link>
                )
                
              })}
            </div>
          </div>

         {/* ─── Booking Form ─── */}
          <div className="order-1 lg:order-2 lg:col-span-8">
            <div className="lg:sticky lg:top-24">

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-4 pb-8 border-b border-stone-200 dark:border-slate-700/60">
                <div className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-slate-400">
                  <svg className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">No-obligation quote</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-slate-400">
                  <svg className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">24-hour response</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-slate-400">
                  <svg className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium">Fully certified team</span>
                </div>
              </div>
               <p className="mb-6 text-base sm:text-lg leading-relaxed text-stone-600 dark:text-slate-300 max-w-xl">
                  Submit the form to schedule pickup, ensure compliance, and receive a custom ITAD quote within 
                  <span className="font-semibold text-stone-900 dark:text-white"> one business day</span>.
                </p>

              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}