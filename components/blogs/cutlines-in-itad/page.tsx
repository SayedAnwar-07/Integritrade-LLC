import { Calendar, Tag } from 'lucide-react';
import Image from 'next/image';

import PageHeader from "@/components/shared/PageHeader";
import AllBlogCardsComponent from '@/components/EightBlogCards';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import cutlinesBanner from "@/public/blogs/maximize-sset-recovery.png";
import ScrollLoader from '@/components/shared/ScrollLoader';

export default function CutlinesInITAD() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollLoader>
        <PageHeader
          eyebrow="ITAD Strategy"
          title="Cutlines in ITAD and Why Fair Cutlines Matter for Maximum Asset Recovery"
          description="The line between resale and recycling decides how much value you actually recover from retired IT assets. Here&apos;s how fair cutlines protect your bottom line, your compliance posture, and the environment."
        />
        </ScrollLoader>

        {/* Meta Information */}
        <ScrollLoader>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 my-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime="2026-02-09">February 9, 2026</time>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>Asset Recovery</span>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <span>7 min read</span>
        </div>
        </ScrollLoader>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          {/* Article Content */}
          <article className="lg:col-span-2">

            {/* Hero Image */}
            <ScrollLoader>
            <figure className="mb-12 overflow-hidden rounded-lg">
              <Image
                src={cutlinesBanner}
                alt="Cutlines in ITAD and asset recovery"
                className="w-full h-auto"
                priority
              />
            </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
              <p className="text-justify">
                As organizations refresh servers, laptops, and data center infrastructure, secure and compliant IT Asset Disposition becomes a board-level concern. One factor that quietly determines the financial outcome of any ITAD program is cutlines the criteria a provider uses to decide what gets recovered and what gets recycled.
              </p>
              <p className="text-justify">
                Get the cutline right and retired assets generate measurable returns. Get it wrong and your organization ends up paying to recycle equipment that still had real market value.
              </p>
            </div>
            </ScrollLoader>

            {/* What Are Cutlines */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                What Cutlines Mean in IT Asset Disposition
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  A cutline is the threshold an ITAD provider uses to determine whether a device is eligible for refurbishment and resale or classified as end-of-life and routed to recycling or destruction. The line is usually drawn based on the device&apos;s age and generation, its functional and cosmetic condition, current resale market demand, and the cost of testing and refurbishment.
                </p>
                <p className="text-justify">
                  Cutlines are a necessary part of any ITAD operation. The challenge is that the way they are defined and applied varies dramatically between providers and that variation is where most of the lost value lives.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* The Issue With Aggressive Cutlines */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                The Problem With Aggressive Cutlines
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Many providers apply convenience-based cutlines designed to reduce their own handling time rather than maximize client returns. Functional, marketable devices get marked as recycle-only because evaluating them carefully is more work than scrapping them.
                </p>
                <p className="text-justify">
                  The result is predictable: lower asset recovery rates, lost resale value, unnecessary recycling fees, and more e-waste than the situation actually required. Instead of generating returns from retired equipment, organizations end up paying to dispose of hardware that should have been a revenue line.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Cutline Comparison Table */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Aggressive vs. Fair Cutlines
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                The same retired fleet can produce very different outcomes depending on how cutlines are applied.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                <table className="w-full text-left bg-white dark:bg-dark-secondary">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Aspect</th>
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Aggressive Cutlines</th>
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Fair Cutlines</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Default Path</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Recycling</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Recovery and resale</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Asset Evaluation</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Volume-based</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Per-device assessment</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Recovery Rate</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Low</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">High</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Recycling Fees</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Higher than necessary</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Reduced</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Environmental Impact</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Increased e-waste</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Extended device life</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Client ROI</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Limited or negative</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Maximized</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            </ScrollLoader>

            {/* Recovery-Focused Approach */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                A Recovery-Focused Approach
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  A fair cutline strategy starts from the opposite assumption: every device is a candidate for recovery until proven otherwise. Each asset is evaluated for true recovery potential, and devices that can be securely wiped, tested, refurbished, and resold remain in the recovery stream rather than being defaulted to destruction.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Higher recovered value
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Devices with remaining market demand return measurable value rather than incurring disposal costs.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Lower disposition costs
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Fewer assets enter the recycling stream, which reduces processing fees and the overall cost of the program.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Improved ROI on IT refresh
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Recovered capital can be reinvested into new infrastructure, easing the financial impact of accelerating refresh cycles.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Less unnecessary scrap
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Functional equipment stays in productive use for longer, which is both better economics and better environmental practice.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Secure Data Destruction */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Recovery Without Compromising Data Security
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Maximizing recovery is not a trade-off against security. Every device eligible for recovery passes through certified data sanitization using DoD and NIST 800-88 approved methods, with physical destruction performed when the situation requires it. Certificates of erasure or destruction are issued for each unit so the audit trail is complete.
                </p>
                <p className="text-justify">
                  Backed by ISO 27001 information security controls and R2v3-certified processes, data protection holds throughout the lifecycle whether a device ultimately gets resold, redeployed, or destroyed.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Environmental Benefits */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                The Environmental Case for Fair Cutlines
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Immediate recycling is not the most sustainable option, despite how it&apos;s often presented. Extending the working life of IT equipment through refurbishment and reuse delivers significantly better environmental outcomes than scrapping functional hardware.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Reduced e-waste volume
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Functional devices stay in productive use rather than entering the waste stream prematurely, lowering the total volume of electronics needing end-of-life processing.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Lower carbon footprint
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Extending device life avoids the manufacturing emissions associated with producing new equipment, contributing meaningfully to ESG and sustainability targets.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Responsible end-of-life recycling
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    When assets genuinely reach end-of-life, R2-certified recycling ensures materials are recovered responsibly and kept out of landfills.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Why Cutlines Matter When Choosing */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                What to Look for in an ITAD Partner
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Not every ITAD provider prioritizes asset recovery. Some are built around volume-based recycling, where the business model rewards processing speed over client returns. The cutline policy is usually the clearest signal of where a provider sits on that spectrum.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    A recovery-first evaluation process
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Ask how each device is evaluated, who makes the recovery decision, and what percentage of incoming assets typically end up resold rather than recycled.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Verified data security at every stage
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Look for certified sanitization tools, documented destruction procedures, and per-device certificates that hold up to audit scrutiny.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Transparent reporting
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Clear breakdowns of what was recovered, what was recycled, and the value returned give you the information needed to evaluate the program against expectations.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Recognized certifications
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    R2v3, ISO 9001, ISO 14001, ISO 27001, and ISO 45001 demonstrate that the provider operates under recognized standards for quality, environmental responsibility, information security, and workplace safety.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* FAQ */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-8 tracking-tight">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    What exactly is a cutline in ITAD?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      A cutline is the threshold that determines whether a retired IT asset is refurbished and resold or sent directly to recycling. It factors in age, condition, market demand, and the cost of refurbishment.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    How do aggressive cutlines affect my organization?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Aggressive cutlines push functional, marketable devices into the recycling stream, resulting in lost resale revenue, higher disposal fees, and more e-waste than necessary.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    Does a recovery-focused approach compromise data security?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      No. All eligible devices undergo certified data sanitization using DoD and NIST-approved methods, with per-device certificates issued for compliance and audit.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    What is the financial impact of fair cutlines?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Organizations typically see higher resale revenue, lower recycling fees, and stronger overall ROI from decommissioned IT assets compared to volume-based recycling programs.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    How can I tell if a provider uses fair cutlines?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Ask about their evaluation process, typical recovery rates, certifications, and the transparency of their reporting. Recovery-focused providers prioritize value extraction and document the outcomes clearly.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
            </ScrollLoader>

            {/* Conclusion */}
            <ScrollLoader>
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Final Thoughts
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Cutlines are quiet, but they shape the entire outcome of an ITAD program. Fair, transparent cutlines ensure that devices are recovered whenever possible, recycled only when genuinely necessary, and handled securely at every step.
                </p>
                <p className="text-justify">
                  When recovery is prioritized over premature recycling, the result is stronger financial returns, cleaner compliance documentation, and a measurably more sustainable approach to IT asset disposition. The cutline policy is one of the most direct ways to evaluate whether an ITAD partner is built around your outcomes or their own.
                </p>
              </div>
            </section>
            </ScrollLoader>
            
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-24">
              <AllBlogCardsComponent />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}