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

import FairFlexible from "@/public/blogs/Fair-flexible.jpg";
import ScrollLoader from '@/components/shared/ScrollLoader';

export default function FairFlexibleCutlines() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollLoader>
        <PageHeader
          eyebrow="Asset Recovery"
          title="Fair and Flexible ITAD Cutlines Based on Condition, Scope, and Reuse Potential"
          description="Most providers retire devices by the calendar. IntegriTrade evaluates them by what they&apos;re actually worth, recovering meaningful value from assets others would scrap."
        />
        </ScrollLoader>

        {/* Meta Information */}
        <ScrollLoader>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 my-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime="2026-02-11">February 11, 2026</time>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>ITAD Services</span>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <span>6 min read</span>
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
                src={FairFlexible}
                alt="Fair and flexible ITAD cutlines for maximum asset recovery"
                className="w-full h-auto"
                priority
              />
            </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
              <p className="text-justify">
                Most ITAD providers apply rigid age-based cutlines to retired equipment. A laptop crosses a four or five-year mark, gets stamped as scrap, and the residual value disappears with it. The approach is convenient for the provider and expensive for the client.
              </p>
              <p className="text-justify">
                IntegriTrade takes a different position. Each device is evaluated on its actual configuration, condition, and current market demand rather than its calendar age. The result is meaningful value recovery from equipment that other providers wouldn&apos;t bother to assess.
              </p>
            </div>
            </ScrollLoader>

            {/* Flexible Cutlines */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Flexible Cutlines and Maximum Value Recovery
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Many ITAD vendors classify devices five years or older as scrap by default. We don&apos;t. Even equipment that&apos;s four years old or beyond goes through a real evaluation rather than an automatic write-off, because configuration and condition often tell a very different story than the original purchase date.
                </p>
                <p className="text-justify">
                  Every device or server is checked against its full specification and the current resale market. A four-year-old workstation with strong specs and clean cosmetic condition can still command meaningful value, and that value belongs to your organization not to a recycler&apos;s revenue stream.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Cutline Comparison Table */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Standard Cutlines vs IntegriTrade&apos;s Approach
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-justify">
                The difference between rigid and flexible cutlines becomes clear when you look at how each method handles the same retired fleet.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                <table className="w-full text-left bg-white dark:bg-dark-secondary">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Aspect</th>
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Standard ITAD Providers</th>
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">IntegriTrade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Age-Based Cutoffs</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Rigid (often 5 years)</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Flexible, condition-driven</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Evaluation Method</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Volume or weight-based</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Per-device assessment</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Valuation Basis</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Generic scrap pricing</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Configuration and current market</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Reporting</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Aggregate summary</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Item-level transparency</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Recovery Outcome</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Limited returns</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Maximized ROI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            </ScrollLoader>

            {/* Data Security */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Data Security That Holds Up to Audit
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Strong recovery numbers mean nothing if data security falls short. Our program is built around R2v3 and ISO 27001 certifications, with data erasure and physical destruction performed to NIST 800-88 and DoD 5220.22-M standards. Every project closes with an official Certificate of Data Destruction for legal and compliance protection.
                </p>
                <p className="text-justify">
                  Recovery and security work together rather than against each other. Drives that pass certified erasure stay with the asset for resale; drives that need destruction are physically destroyed with documented evidence. Either way, no recoverable data leaves our custody.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Scope-of-Job Assessment */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Scope-Based Assessment, Not Weight-Based
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  We don&apos;t price by the pallet or by the pound. Each engagement is evaluated within its specific scope, with our team auditing the condition of every lot individually. Whether the project involves 50 devices or 5,000, the same per-device discipline applies.
                </p>
                <p className="text-justify">
                  Accurate valuation is the foundation of long-term partnerships, and that requires looking at what&apos;s actually in front of us rather than relying on shortcuts. The result is a number that holds up to scrutiny on both sides.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Customized Settlement Reports */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Transparent Settlement Reports
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Every project closes with a detailed settlement report covering item-by-item condition, current market valuation, and a clear breakdown of how each price was determined. No black-box numbers, no generic line items.
                </p>
                <p className="text-justify">
                  This level of transparency is what allows finance, IT, and audit teams to verify outcomes independently and is also what makes recurring partnerships possible. When the math is visible, trust follows.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Zero Landfill Policy */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Zero Landfill and Sustainability
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Our zero-landfill commitment is built into the workflow rather than added as a marketing line. Devices that can be refurbished are given a second life through verified resale and redeployment channels. Equipment that genuinely reaches end-of-life is recycled responsibly under R2v3 standards, with materials recovered rather than discarded.
                </p>
                <p className="text-justify">
                  Working with IntegriTrade reduces your organization&apos;s environmental footprint while maximizing the financial recovery from retired IT assets two outcomes that no longer have to be a trade-off.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Full Transparency & Asset Tracking */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Full Chain of Custody and Asset Tracking
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Every step from pickup to final disposition is tracked, documented, and available for review. Detailed audit reports and complete inventory lists give your team the visibility needed for both internal review and external compliance.
                </p>
                <p className="text-justify">
                  Audit and tax compliance shouldn&apos;t require chasing your ITAD partner for documentation after the fact. Our process produces the records you need as a routine part of every engagement.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Why Choose Us */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Why Organizations Choose IntegriTrade
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Our approach combines three things that rarely show up together in the ITAD market: certified compliance, fair valuation, and operational speed.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Certified excellence
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    R2v3 and ISO 27001 certifications back every step of the process, ensuring data security and regulatory compliance from intake to final disposition.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Fair payouts with no hidden charges
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Every line item is documented, every valuation is explainable, and the price you see is the price you get. No surprise deductions or surface-level estimates.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Fast turnaround
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    From scheduled pickup through final reporting, our process is built to minimize disruption to your operations and accelerate the recovery cycle.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Industries We Support */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Industries We Support
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Our program is built to handle the regulatory and operational demands of sectors where data sensitivity and compliance documentation matter most.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Healthcare
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    HIPAA-aligned data security workflows protect patient information through every stage of disposition, with documentation suited for healthcare audits and breach prevention requirements.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Finance and banking
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Strict compliance with financial regulations and data protection standards, including the chain-of-custody documentation that audit and risk teams require.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Data centers
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Large-scale equipment handling with logistics and processing workflows designed for the volume and complexity of modern data center retirements.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Government agencies
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Maximum transparency and accountability aligned with public sector requirements for asset disposition and verified data destruction.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* FAQ Section */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-8 tracking-tight">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    What makes IntegriTrade&apos;s cutlines different?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      We don&apos;t retire devices by calendar age. Each unit is evaluated on its configuration, condition, and current market demand, which means meaningful value can still be recovered from equipment four or more years old.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    How do you ensure data security during recovery?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      All work runs through R2v3 and ISO 27001 certified processes. Data erasure and physical destruction follow NIST 800-88 and DoD 5220.22-M standards, and every project closes with an official Certificate of Data Destruction.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    What is a scope-of-job assessment?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Rather than pricing by weight, we audit each lot individually 50 devices or 5,000 to produce accurate per-item valuations grounded in real condition and market data.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    Are there hidden fees?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      No. Every settlement report shows the condition and market value behind each line item. Fair payouts, transparent math, no surprise deductions.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    What happens to devices that can&apos;t be resold?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Under our zero-landfill policy, equipment that genuinely reaches end-of-life is recycled responsibly to R2v3 standards, with materials recovered rather than sent to landfill.
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
                  The cutline policy is one of the clearest signals of how an ITAD provider really operates. Rigid age-based cutoffs are easy to administer and hard to defend financially. Flexible, condition-driven evaluation takes more work and produces measurably better outcomes for the organization retiring the equipment.
                </p>
                <p className="text-justify">
                  IntegriTrade is built around the second approach. Every device gets a real assessment, every settlement is transparent, and every project closes with the documentation your team needs. That&apos;s how retired IT becomes recovered value rather than written-off scrap.
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