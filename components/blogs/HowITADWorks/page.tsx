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

import HowITADWorksImage from '@/public/blogs/HowITADWorksImage.png';
import ScrollLoader from '@/components/shared/ScrollLoader';

const faqs = [
  {
    question: "How does IT Asset Disposition actually work?",
    answer:
      "ITAD is a structured workflow covering secure collection, chain-of-custody transport, certified data destruction, asset evaluation, value recovery through resale or refurbishment, and responsible recycling for end-of-life devices all backed by documented reporting at each stage.",
  },
  {
    question: "Why does professional ITAD cost money?",
    answer:
      "The real costs are insurance, secure logistics, certified data destruction, and the audit and licensing fees required to maintain recognized standards like R2v3, ISO 27001, and HIPAA-aligned workflows. These aren\u2019t optional extras they\u2019re what makes a provider legitimate.",
  },
  {
    question: "Is \u201Cfree recycling\u201D really dangerous for my business?",
    answer:
      "Yes. Vendors offering free recycling without documentation, certified destruction, or chain of custody create serious data security and compliance exposure. A single mishandled device with regulated data can result in significant fines and lasting reputational damage.",
  },
  {
    question: "Can I actually generate revenue from retired IT assets?",
    answer:
      "In many cases, yes. Equipment with strong resale value, processed in volume, with practical sanitization requirements often produces returns rather than costs. The variables that matter most are device age, quantity, and your specific destruction requirements.",
  },
  {
    question: "Why choose IntegriTrade LLC over other ITAD vendors?",
    answer:
      "IntegriTrade combines transparent processes, a clean record with no history of data breach, certified destruction aligned with R2v3 and NIST standards, and a commitment to maximizing asset value at every engagement. We\u2019re a security partner, not just a recycler.",
  },
];

export default function HowITADWorks() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollLoader>
        <PageHeader
          eyebrow="ITAD Explained"
          title="How ITAD Works and Why &ldquo;Free Recycling&rdquo; Is Dangerous for Your Business"
          description="You wouldn&apos;t hand an unlocked phone to a stranger. So why give your organization&apos;s computers and servers to a vendor offering free recycling? Here&apos;s how legitimate ITAD actually works and what &ldquo;free&rdquo; really costs."
        />
        </ScrollLoader>

        {/* Meta Information */}
        <ScrollLoader>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 my-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime="2026-02-22">February 22, 2026</time>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>ITAD Explained</span>
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
                src={HowITADWorksImage}
                alt="How ITAD works and why choosing the right vendor matters"
                className="w-full h-auto"
                priority
              />
            </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
              <p className="text-justify">
                IT Asset Disposition is often misunderstood as a glorified version of electronics recycling. It isn&apos;t. A legitimate ITAD process runs more like a regulated logistics and security operation, with documented controls, certified destruction, and accountability at every handoff.
              </p>
              <p className="text-justify">
                Understanding what&apos;s actually happening behind the scenes is the difference between a defensible disposition program and a quiet liability sitting on a vendor invoice.
              </p>
            </div>
            </ScrollLoader>

            {/* Back-end Costs */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                What Goes Into the Cost of Real ITAD
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Professional ITAD has real costs that need to be covered before a single drive is touched. These aren&apos;t markup they&apos;re what separate a credible provider from one that cuts corners on the steps that actually matter.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Insurance
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Handling expensive hardware and sensitive data requires high-value insurance coverage that protects both the provider and the client across the full chain of custody.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Secure transportation and logistics
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Moving assets while preserving chain of custody requires GPS-tracked vehicles, locked containers, vetted personnel, and documented transfer protocols. None of that is cheap, and none of it is optional.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Certifications and audits
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Maintaining recognized standards such as R2v3, ISO 27001, and HIPAA-aligned workflows requires regular third-party audits, ongoing compliance work, and licensing fees the providers who hold these certifications are paying to keep them current.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Simple Question */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                A Simple Question About Trust
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Would you hand an unlocked phone with all your personal data to a roadside repair shop you&apos;ve never used before? Almost certainly not. So the same question applies in reverse: why hand your organization&apos;s laptops, servers, and storage devices full of regulated business data to a vendor offering free recycling with no documentation?
                </p>
                <p className="text-justify">
                  When data security is questionable, &ldquo;free&rdquo; can quickly turn into millions of dollars in regulatory fines, breach notification costs, and reputational damage. Free recycling without documentation, chain of custody, or certified destruction isn&apos;t a deal it&apos;s a liability the business agreed to take on without realizing it.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Free vs Professional Comparison Table */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Free Recycling vs Professional ITAD
              </h2>
              <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                The two services look similar on a quote sheet and behave very differently in practice.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                <table className="w-full text-left bg-white dark:bg-dark-secondary">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Aspect</th>
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">&ldquo;Free Recycling&rdquo;</th>
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Professional ITAD</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Chain of Custody</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">None or informal</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Documented end-to-end</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Data Destruction</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Unverified</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">NIST 800-88 certified</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Compliance Documentation</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Not provided</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">COE, COD, audit reports</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Asset Valuation</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">None</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Per-device assessment</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Insurance Coverage</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Limited or absent</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">High-value, verified</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Long-term Risk</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">High and unmanaged</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Mitigated and documented</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            </ScrollLoader>

            {/* ITAD Doesn't Cost You */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Professional ITAD Often Doesn&apos;t Cost the Client Anything
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Here&apos;s the part most teams don&apos;t expect: in a meaningful share of engagements, clients pay nothing out of pocket. In many cases they actually generate revenue from retired assets. Whether ITAD shows up as a cost or as a return depends on three variables.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Device age and configuration
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Newer equipment with strong specifications commands real market demand. The closer the fleet is to current generation, the more recovery value sits inside the program.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Volume processed at once
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Larger lots reduce per-unit logistics costs, improving the margin available for value recovery. Bulk disposition is simply more efficient than processing small batches over time.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Sanitization and destruction requirements
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Mandatory physical destruction eliminates the ability to resell the device, which increases manual labor and reduces the recovery side of the equation. The right approach matches the destruction method to the actual security requirement, rather than defaulting to maximum destruction for everything.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* What Proper ITAD Looks Like */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                What a Proper ITAD Process Looks Like
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  A legitimate provider runs a structured, documented, and accountable workflow from intake through final disposition. The deliverables aren&apos;t marketing extras they&apos;re what makes the program defensible.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Asset inventories and condition reports
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Every device received is logged by serial number, with condition, configuration, and assessed market value documented for full visibility.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Certificates of erasure and destruction
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Per-device documentation confirming the sanitization standard applied (NIST 800-88, DoD 5220.22-M) or physical destruction performed, suitable for audit and regulatory review.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Sealed chain-of-custody documentation
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    A continuous record from pickup to final disposition, with every transfer, handler, and processing step accounted for.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Transparent value recovery reporting
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    A clear breakdown of what was resold, refurbished, or recycled along with recovered value, so finance and IT can verify outcomes against expectations.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Risks of Free Recycling */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                The Real Risks of &ldquo;Free Recycling&rdquo;
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Organizations that opt for unverified or free recycling routinely encounter the same pattern of problems and they tend to surface at the worst possible moment, usually during an audit or after a breach.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No documented chain of custody
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Without continuous tracking, there&apos;s no way to verify where assets went, who handled them, or what happened during the gap between pickup and final disposition.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No certified data destruction
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Sensitive data may remain on devices long after they&apos;ve left your control, creating an exposure that compounds over time and across whoever handles the equipment next.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No compliance documentation
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Without certificates and audit trails, there&apos;s nothing to show regulators or internal auditors when documentation of disposition is requested.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    No asset valuation
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Equipment with real recovery value gets treated as scrap, leaving meaningful financial returns on the table that should have offset the cost of new infrastructure.
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
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${index}`}>
                    <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
            </ScrollLoader>

            {/* Conclusion */}
            <ScrollLoader>
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Why IntegriTrade LLC?
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Choosing the right ITAD partner means keeping your organization&apos;s data secure while genuinely maximizing the value of retired assets. The two outcomes are not in tension when the workflow is built correctly they reinforce each other.
                </p>
                <p className="text-justify">
                  Transparent processes, a zero-data-breach record, and certified destruction aligned with recognized standards are what set IntegriTrade apart. When data security matters, the choice of ITAD vendor matters just as much.
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