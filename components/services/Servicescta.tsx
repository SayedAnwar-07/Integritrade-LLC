'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import SectionHeader from '../shared/SectionHeader'
import ScrollLoader from '../shared/ScrollLoader'

export default function ServicesCTA() {
  return (
    <section className="">
      <div className="overflow-hidden rounded-md bg-secondary dark:bg-dark">
        <ScrollLoader>
        
          <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Copy */}
            <div className="lg:col-span-7">
                <SectionHeader
                    eyebrow="Ready When You Are"
                    title="Let&apos;s talk about your next decommission."
                />
              

                {/* Description */}
                <p className="text-[15px] lg:text-base leading-relaxed text-gray-700 dark:text-gray-300 max-w-2xl mt-6 text-justify">
                  Whether you&apos;re relocating a data center, refreshing a fleet of laptops, or
                  clearing a warehouse before lease return, our team will walk the site, scope the
                  work, and give you a fixed plan. No guesswork, no surprises just a clear path
                  from pickup to final report.
                </p>

              {/* Quick details row */}
              
                <div className="mt-8 grid sm:grid-cols-3 gap-4 lg:gap-6 max-w-2xl">
                  <div className="border-l-2 border-emerald-500/60 pl-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400 mb-1">
                      Response
                    </p>
                    <p className="text-sm font-medium">Within 24 hours</p>
                  </div>
                  <div className="border-l-2 border-emerald-500/60 pl-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400 mb-1">
                      Site Visit
                    </p>
                    <p className="text-sm font-medium">Free walkthrough</p>
                  </div>
                  <div className="border-l-2 border-emerald-500/60 pl-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400 mb-1">
                      Coverage
                    </p>
                    <p className="text-sm font-medium">California-wide</p>
                  </div>
                </div>
            </div>

            {/* Right: CTA */}
            <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-slate-700/60">
              <div className="flex flex-col gap-5">
                  <Link
                    href="/service-book/"
                    className="group inline-flex items-center justify-between gap-4 bg-primary hover:bg-emerald-600 px-7 py-5 rounded-md font-medium text-base transition-all duration-300 shadow-lg hover:shadow-emerald-500/20"
                  >
                    <span className="flex flex-col items-start">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] ">
                        Get Started
                      </span>
                      <span className="font-serif text-lg lg:text-xl">Contact Us</span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>

                {/* Direct contact lines */}
                  <div className="pt-2 space-y-2.5">
                    <a
                      href="tel:+15593254813"
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-600 dark:text-gray-400 w-12">
                        Call
                      </span>
                      <span className="text-sm text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                        (559) 325-4813
                      </span>
                    </a>
                    <a
                      href="mailto:info@integritradeLLC.com"
                      className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                    >
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-600 dark:text-gray-400 w-12">
                        Email
                      </span>
                      <span className="text-sm text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors">
                        info@integritradeLLC.com
                      </span>
                    </a>
                  </div>
              </div>
            </div>
          </div>

        </ScrollLoader>
      </div>
    </section>
  )
}