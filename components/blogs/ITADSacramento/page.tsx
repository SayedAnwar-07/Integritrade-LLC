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

import ITADSacramentoImage from "@/public/blogs/ITADSacramentoImage.png";

const faqs = [
  {
    question: "What is ITAD and why does it matter in Sacramento?",
    answer:
      "IT Asset Disposition is the structured process of retiring, sanitizing, recovering value from, and responsibly disposing of IT equipment. For Sacramento businesses across healthcare, financial services, government, and education, ITAD ensures sensitive data is protected and compliance requirements are consistently met.",
  },
  {
    question: "Which industries in Sacramento need structured ITAD services?",
    answer:
      "Healthcare, financial services, government, education, and technology organizations all manage sensitive data and face regulatory requirements that make structured ITAD essential rather than optional.",
  },
  {
    question: "How does ITAD support data security compliance?",
    answer:
      "Certified ITAD providers use recognized sanitization standards, perform physical destruction where required, and provide Certificates of Erasure or Destruction with documented audit trails covering the full requirements of HIPAA, GLBA, FERPA, and California-specific frameworks.",
  },
  {
    question: "Can Sacramento businesses recover value from retired equipment?",
    answer:
      "Yes. Many retired devices retain meaningful residual value depending on age and condition. A recovery-focused ITAD strategy evaluates each asset before recycling, helping reduce overall disposition costs and recapture returns that would otherwise be lost.",
  },
  {
    question: "How does ITAD support environmental responsibility for Sacramento organizations?",
    answer:
      "Responsible ITAD extends equipment life through refurbishment and reuse, lowering e-waste volume. When assets reach end-of-life, R2v3-certified recycling ensures materials are diverted from landfills and handled in line with California\u2019s e-waste regulations.",
  },
];

export default function ITADSacramento() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollLoader>
          <PageHeader
            eyebrow="ITAD & Compliance"
            title="IT Asset Disposition in Sacramento, CA: Secure and Compliant ITAD for Local Businesses"
            description="Sacramento&apos;s mix of healthcare, financial services, government, and education organizations face real obligations around how retired IT equipment is handled. Here&apos;s what proper ITAD looks like in California&apos;s capital region."
          />
        </ScrollLoader>

        {/* Meta */}
        <ScrollLoader>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 my-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2026-02-22">February 22, 2026</time>
            </div>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>Sacramento, CA</span>
            </div>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <span>6 min read</span>
          </div>
        </ScrollLoader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          <article className="lg:col-span-2">

            {/* Hero Image */}
            <ScrollLoader>
              <figure className="mb-12 overflow-hidden rounded-lg">
                <Image
                  src={ITADSacramentoImage}
                  alt="IT Asset Disposition in Sacramento, CA"
                  className="w-full h-auto"
                  priority
                />
              </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
                <p className="text-justify">
                  Sacramento businesses upgrade IT infrastructure on shorter cycles than ever servers, laptops, networking equipment, and storage systems all moving through faster refresh patterns to keep up with operational demands. What happens to that equipment after it leaves active service is where most disposition programs either hold up or quietly create exposure.
                </p>
                <p className="text-justify">
                  IT Asset Disposition (ITAD) is the framework that handles it. For organizations across Sacramento and the surrounding capital region, structured ITAD reduces risk, recovers value from retired hardware, and supports California&apos;s strict environmental and data protection requirements simultaneously.
                </p>
              </div>
            </ScrollLoader>

            {/* Why ITAD Matters */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Why ITAD Matters for Sacramento Businesses
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Sacramento&apos;s business landscape spans healthcare providers, financial services firms, government offices, educational institutions, and a growing technology sector. Most of these organizations handle sensitive information daily and face strict compliance obligations under HIPAA, GLBA, FERPA, and California-specific privacy frameworks like CCPA and CPRA.
                  </p>
                  <p className="text-justify">
                    Without structured ITAD processes, the consequences fall into four interconnected categories: data breaches and security incidents from devices leaving control with recoverable data still on them, regulatory non-compliance under federal and California state frameworks, lost opportunities for asset recovery when equipment with residual value gets defaulted to scrap, and improper recycling that undermines sustainability commitments and environmental compliance. A documented ITAD process closes all four risks at once with auditable controls.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Complete ITAD Program */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  What a Complete ITAD Program Includes
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    A defensible ITAD program brings together several disciplines that work in sequence rather than in isolation, each producing documentation that ties the workflow together for audit and compliance review.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Secure data destruction
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Certified data sanitization aligned with NIST 800-88 and DoD 5220.22-M, with physical destruction performed when the situation requires absolute irreversibility.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Asset tracking and chain of custody
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Per-device serial-number tracking from pickup through final disposition, with documented transfers at every handoff and continuous accountability across the workflow.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Evaluation for refurbishment and recovery
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Each asset is assessed for resale, redeployment, or refurbishment before recycling becomes the answer turning retired hardware into recovered value rather than scrap.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Responsible end-of-life recycling
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      For equipment that genuinely reaches end-of-life, R2v3-certified recycling ensures materials are recovered responsibly under California&apos;s strict e-waste regulations.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Industry Compliance Table */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Compliance Requirements by Industry
                </h2>
                <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Different sectors across Sacramento operate under different regulatory frameworks. Each one shapes how IT assets must be handled at retirement.
                </p>

                <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left bg-white dark:bg-dark-secondary">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Industry</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Primary Frameworks</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Key ITAD Requirement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Healthcare</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">HIPAA, HITECH</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Verified PHI destruction with audit trail</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Financial Services</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GLBA, SOX, PCI DSS</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Certified data sanitization and chain of custody</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Government</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">NIST, FISMA, state policies</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Documented destruction to federal standards</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Education</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">FERPA, CCPA</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Student data protection and disposal records</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">All California Businesses</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">CCPA, CPRA, e-waste laws</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Privacy-aligned disposition and certified recycling</td>
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
                  Data Security and Compliance Considerations
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Data-bearing devices like hard drives and SSDs need to be handled carefully to prevent data exposure. Sacramento organizations face compliance obligations across healthcare, financial services, government, and educational sectors making documented destruction methods a requirement rather than a preference.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Logical data sanitization
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Software-based erasure following NIST 800-88 and DoD 5220.22-M ensures all data is irreversibly removed before devices move into reuse or recycling streams.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Physical destruction when required
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      For high-sensitivity environments or damaged drives that can&apos;t be sanitized through software, physical destruction provides irreversible elimination with documented evidence.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Certificates of erasure and destruction
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Per-device documentation confirming the standard applied and the outcome verified, suitable for audit and regulatory review.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Full audit trails
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Complete disposition activity records that support both internal compliance reviews and external audits without requiring reconstruction after the fact.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Asset Recovery */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Asset Recovery and Maximizing Value
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Not every retired device belongs in a recycling stream. Many still hold meaningful market value depending on age, configuration, and current demand value that disappears the moment equipment gets defaulted to scrap.
                  </p>
                  <p className="text-justify">
                    A recovery-focused ITAD strategy lets Sacramento businesses reduce overall disposition costs by recovering returns from resold equipment, recapture value from devices that still have working life ahead, minimize unnecessary recycling so functional hardware stays in productive use, and improve sustainability outcomes through verified reuse and refurbishment. Evaluating recovery potential before recycling turns retired IT from a recurring cost into a contributor to the IT budget.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Environmental Responsibility */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Responsible Recycling and Environmental Impact
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Responsible electronic recycling is a core part of any structured ITAD program. Extending equipment life through refurbishment and reuse reduces e-waste volume and lowers the carbon footprint associated with manufacturing replacement hardware.
                  </p>
                  <p className="text-justify">
                    When assets do reach genuine end-of-life, R2v3-certified recycling ensures materials are processed safely, hazardous components are handled correctly, and nothing ends up in landfills that shouldn&apos;t. For Sacramento organizations operating under California&apos;s strict e-waste laws, this is the difference between defensible disposition and exposure during environmental compliance reviews.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Choosing the Right ITAD */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Choosing the Right ITAD Approach in Sacramento
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Selecting an ITAD partner isn&apos;t just a vendor decision it&apos;s an operational choice that affects security, compliance, and recovered value across every refresh cycle. Five practical factors separate the providers worth evaluating from the rest.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Chain of custody and documentation
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Continuous tracking from pickup through final disposition with serial-level records is what makes the rest of the program defensible during audit.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Data destruction processes
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Certified sanitization methods, verified destruction workflows, and per-device certificates that hold up to scrutiny are non-negotiable for data-bearing equipment.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Compliance certifications
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      R2v3, ISO 27001, and ISO 14001 certifications demonstrate that the provider operates under recognized standards rather than informal practices.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Asset recovery capabilities
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      A recovery-first evaluation process determines whether retired equipment generates returns or simply incurs disposal costs.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Transparent reporting
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Clear breakdowns of what was resold, refurbished, or recycled along with recovered values give finance, IT, and compliance teams the visibility they need.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Documentation */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Documentation Your ITAD Provider Should Deliver
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    At project completion, expect documentation that covers every part of the workflow without follow-up requests: asset inventories with valuation reports identifying every device received, certificates of erasure or destruction confirming the sanitization standard applied per device, data sanitization reports documenting methods and serial-level traceability, and processing and disposition summaries detailing what was resold, refurbished, or recycled along with recovered value.
                  </p>
                  <p className="text-justify">
                    This documentation is what turns an ITAD engagement into something your audit, finance, and compliance teams can actually use during regulatory reviews and ESG reporting.
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
                    For businesses across Sacramento, IT Asset Disposition has moved from a back-office logistics task into a meaningful part of how organizations protect sensitive information, recover value from retired equipment, and meet California&apos;s data protection and environmental requirements.
                  </p>
                  <p className="text-justify">
                    Following structured ITAD processes that prioritize security, compliance, and recovery is what allows capital region organizations to manage the full IT lifecycle with confidence and turn what used to be a quiet liability into a controlled, documented, and increasingly valuable part of every refresh cycle.
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