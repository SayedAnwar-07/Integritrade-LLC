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
import ScrollLoader from '@/components/shared/ScrollLoader';

import ValueDataSecurity from "@/public/blogs/value-data-security.png";

const faqs = [
  {
    question: "What is IT asset recovery?",
    answer:
      "IT asset recovery is the process of evaluating decommissioned IT equipment to determine whether it can be securely reused, refurbished, or resold rather than immediately recycled or destroyed.",
  },
  {
    question: "Is data security compromised during recovery?",
    answer:
      "No. Proper recovery includes secure data destruction using NIST 800-88 and DoD 5220.22-M compliant methods before any reuse or resale. Data security is a foundational requirement throughout the workflow, not an afterthought.",
  },
  {
    question: "What factors determine if an asset can be recovered?",
    answer:
      "Device age and generation, functional and cosmetic condition, current secondary-market demand, and whether refurbishment costs make economic sense. These four variables together produce the cutline decision.",
  },
  {
    question: "Is recycling more environmentally responsible than recovery?",
    answer:
      "Not always. Extending equipment life through recovery and reuse typically has a lower environmental impact than recycling combined with manufacturing new replacement devices. Reuse comes first in the waste hierarchy for a reason.",
  },
  {
    question: "Which certifications should I look for in a recovery provider?",
    answer:
      "R2v3 for responsible recycling and reuse, ISO 27001 for information security, ISO 9001 for quality management, and ISO 14001 for environmental management. Together they cover the operational, security, and sustainability dimensions of structured asset recovery.",
  },
];

export default function ITAssetRecoveryExplained() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollLoader>
          <PageHeader
            eyebrow="ITAD Best Practices"
            title="IT Asset Recovery Explained: Best Practices for Maximizing Value and Data Security"
            description="Asset recovery turns retirement from a cost center into recovered value without compromising the security and compliance controls that regulated environments actually require."
          />
        </ScrollLoader>

        {/* Meta */}
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          <article className="lg:col-span-2">

            {/* Hero Image */}
            <ScrollLoader>
              <figure className="mb-12 overflow-hidden rounded-lg">
                <Image
                  src={ValueDataSecurity}
                  alt="IT asset recovery: maximizing value and data security"
                  className="w-full h-auto"
                  priority
                />
              </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
                <p className="text-justify">
                  As organizations retire servers, laptops, networking equipment, and other IT assets, deciding what happens next is a critical part of IT lifecycle management. Many programs focus primarily on data destruction and recycling, missing that IT asset recovery plays an equally important role in a well-executed ITAD strategy.
                </p>
                <p className="text-justify">
                  Done correctly, asset recovery lets organizations recover meaningful value from retired equipment while maintaining the strict data security and compliance standards regulated environments require. The two outcomes aren&apos;t in tension; they&apos;re structurally connected when the program is built right.
                </p>
              </div>
            </ScrollLoader>

            {/* What IT Asset Recovery Covers */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  What IT Asset Recovery Covers
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    IT asset recovery is the process of evaluating decommissioned equipment to determine whether it can be securely reused, refurbished, or resold rather than immediately recycled or destroyed. Within an ITAD program, the workflow combines testing and grading, secure data destruction, refurbishment where appropriate, and resale through approved secondary-market channels.
                  </p>
                  <p className="text-justify">
                    Not every retired asset suits recovery, but most organizations are surprised by how much recoverable value remains when assets are properly evaluated rather than defaulted to scrap. The default-to-recycling assumption is exactly where most missed recovery value originates.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Key Factors */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Factors That Determine Recovery Potential
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Four variables drive whether an asset is recoverable. They&apos;re often formalized through internal thresholds called cutlines that determine which devices move into recovery streams and which go directly to recycling.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Device age and generation
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Newer equipment generally has stronger resale demand and better recovery potential in secondary markets. Once devices fall too far past current generations, the economics shift quickly toward recycling.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Functional and cosmetic condition
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Fully functional devices with minimal cosmetic damage recover more value and are easier to resell. Even modest refurbishment can move borderline assets into clearly profitable resale.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Market demand
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Secondary market demand varies meaningfully by device type, configuration, and timing. Providers with active buyer networks consistently capture more value than internal teams handling disposition occasionally.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Refurbishment costs
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Recovery has to make economic sense after testing, refurbishment, and processing expenses. The cutline exists precisely to keep refurbishment investment proportional to expected returns.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Recovery vs Recycle */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Recovery vs Default Recycling
                </h2>
                <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The same retired equipment can produce very different outcomes depending on whether the program leads with recovery or defaults to recycling.
                </p>

                <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left bg-white dark:bg-dark-secondary">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Aspect</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Default Recycling</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Recovery-First</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Financial Outcome</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Disposal cost only</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Recovered capital</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Asset Evaluation</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Skipped</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Per-device assessment</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Environmental Impact</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Manufacturing offset only</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Extended product lifecycle</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Data Security</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Required either way</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Required either way</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">ESG Reporting</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Recycling metrics only</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Reuse and recycling metrics</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollLoader>

            {/* Security Practices */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Security Practices in Asset Recovery
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Security is foundational to any recovery process. Recovery should never happen at the expense of data protection, and a properly designed program ensures the two reinforce rather than compete with each other.
                  </p>
                  <p className="text-justify">
                    Defensible recovery includes performing certified data wiping before any reuse or resale, applying NIST 800-88 and DoD 5220.22-M compliant sanitization methods, physically destroying data-bearing components when sensitivity demands it, maintaining full chain-of-custody documentation throughout the workflow, and issuing per-device certificates of erasure or destruction. Data security controls remain in place across the entire recovery lifecycle, not just at the start. Cutting corners on any of these steps compromises both the recovery and the compliance posture simultaneously.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Compliance Standards */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Compliance Standards for Asset Recovery
                </h2>
                <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Industry certifications confirm that recovery activities follow documented, auditable, and secure processes. Look for these explicitly when evaluating providers.
                </p>

                <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left bg-white dark:bg-dark-secondary">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Standard</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Focus Area</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">What It Confirms</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">R2v3</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Responsible recycling and reuse</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Reuse-first prioritization, downstream traceability</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">ISO 27001</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Information security</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Security management throughout the workflow</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">ISO 9001</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Quality management</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Consistent recovery outcomes</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">ISO 14001</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Environmental management</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Sustainable operational practices</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">NIST 800-88</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Media sanitization</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Verified data destruction methods</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollLoader>

            {/* Environmental Benefits */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Environmental Benefits of Recovery
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Immediate recycling isn&apos;t always the most sustainable path. Extending the useful life of IT equipment through recovery and reuse reduces the environmental impact tied to manufacturing new devices a footprint that often dwarfs the impact of recycling on a per-device basis.
                  </p>
                  <p className="text-justify">
                    Recovery-first programs deliver reduced electronic waste, lower demand for raw materials, decreased carbon emissions tied to production, and stronger alignment with corporate sustainability and ESG commitments. When assets genuinely reach end-of-life, R2v3-certified recycling ensures materials are processed in an environmentally sound manner. The combination produces measurably better outcomes than either path alone.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Common Mistakes */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Mistakes That Reduce Recovery Outcomes
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Most missed recovery value comes from a small set of recurring mistakes. Recognizing them early is the cheapest way to prevent them.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Premature recycling
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Sending all retired assets directly to recycling without per-device evaluation skips recoverable value entirely. The cost shows up as lost revenue that never makes it into the IT budget.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Limited provider capabilities
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Working with ITAD providers that lack refurbishment or active resale networks reduces every recovery project to whatever the provider can do internally. Capable partners with global buyer networks routinely produce meaningfully higher returns.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Poor documentation
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Failing to require documentation and reporting creates compliance gaps that surface during audit. Without serial-level records, even strong recovery work can&apos;t be defended after the fact.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Recycling-only mindset
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Treating recycling as the only environmentally responsible option overlooks that reuse typically delivers a smaller environmental footprint than recycling and replacement manufacturing combined.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Complete ITAD Strategy */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Recovery Within a Complete ITAD Strategy
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Asset recovery is most effective when integrated into a broader ITAD program covering secure data destruction, compliance oversight, and responsible recycling. Treated as a standalone activity, it tends to compete with other priorities; built into the program, it reinforces them.
                  </p>
                  <p className="text-justify">
                    A balanced ITAD strategy prioritizes recovery when it&apos;s economically and operationally viable, ensures data security at every stage regardless of disposition path, treats recycling as the final step rather than the default, and produces transparency and reporting that hold up to audit and ESG review. The combination lets organizations maximize value while minimizing risk an outcome that recovery-only or recycling-only programs rarely match.
                  </p>
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
                  Final Thoughts
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    IT asset recovery isn&apos;t just about resale. It&apos;s about making informed, responsible decisions throughout the disposition process choices that determine whether retired equipment becomes recovered capital or sunk cost.
                  </p>
                  <p className="text-justify">
                    Following best practices across security, compliance, and sustainability lets organizations recover meaningful value from retired IT assets while protecting sensitive data and supporting environmental goals. Implemented as part of a comprehensive ITAD strategy, asset recovery delivers measurable benefits across financial, operational, and environmental outcomes simultaneously.
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