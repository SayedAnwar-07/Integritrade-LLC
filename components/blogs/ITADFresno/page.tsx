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

import ITADFresnoImage from '@/public/blogs/ITADFresnoImage.png';

const faqs = [
  {
    question: "What is ITAD and why does it matter in Fresno?",
    answer:
      "IT Asset Disposition is the structured process of retiring, sanitizing, recovering value from, and responsibly disposing of IT equipment. For Fresno businesses across healthcare, financial services, education, and technology, ITAD ensures sensitive data is protected and compliance requirements are consistently met.",
  },
  {
    question: "Which industries in Fresno need structured ITAD services?",
    answer:
      "Healthcare, financial services, agriculture, education, and technology companies all manage sensitive data and face regulatory requirements that make structured ITAD essential rather than optional.",
  },
  {
    question: "How does ITAD support data security compliance?",
    answer:
      "Certified ITAD providers use recognized sanitization standards, perform physical destruction where required, and provide Certificates of Erasure or Destruction with documented audit trails covering the full requirements of HIPAA, GLBA, FERPA, and other applicable frameworks.",
  },
  {
    question: "Can Fresno businesses recover value from retired equipment?",
    answer:
      "Yes. Many retired devices retain meaningful residual value depending on age and condition. A recovery-focused ITAD strategy evaluates each asset before recycling, helping reduce overall disposition costs and capture returns that would otherwise be lost.",
  },
  {
    question: "How does ITAD support environmental responsibility in the Central Valley?",
    answer:
      "Responsible ITAD extends equipment life through refurbishment and reuse, lowering e-waste volume. When assets reach end-of-life, R2v3-certified recycling ensures materials are diverted from landfills and handled in line with California\u2019s e-waste regulations.",
  },
];

export default function ITADFresno() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollLoader>
          <PageHeader
            eyebrow="ITAD & Compliance"
            title="IT Asset Disposition in Fresno, CA: Secure and Compliant ITAD for Local Businesses"
            description="From healthcare providers and financial institutions to agriculture, education, and growing tech companies, Fresno organizations face real obligations around how retired IT equipment is handled. Here&apos;s what proper ITAD looks like in the Central Valley."
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
              <span>Fresno, CA</span>
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
                  src={ITADFresnoImage}
                  alt="IT Asset Disposition in Fresno, CA"
                  className="w-full h-auto"
                  priority
                />
              </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
                <p className="text-justify">
                  Businesses across Fresno continue to refresh servers, laptops, networking equipment, and data center infrastructure on shorter cycles than ever. Retiring that technology safely, securely, and in a way that holds up to compliance review has become a real operational concern, not a back-office afterthought.
                </p>
                <p className="text-justify">
                  IT Asset Disposition (ITAD) is the framework that handles it. For organizations across Fresno and the Central Valley, understanding how structured ITAD works helps reduce risk, recover value from retired hardware, and support environmental commitments at the same time.
                </p>
              </div>
            </ScrollLoader>

            {/* Why ITAD Matters */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Why ITAD Matters for Fresno Businesses
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Fresno&apos;s business landscape spans healthcare providers, financial institutions, agricultural operations, educational institutions, and a growing tech sector. Most of these organizations manage sensitive data daily and operate under strict data security and compliance requirements.
                  </p>
                  <p className="text-justify">
                    When retired IT equipment isn&apos;t handled properly, the consequences fall into four interconnected categories: data security risks from unsanitized devices leaving organizational control, regulatory exposure under HIPAA, GLBA, FERPA, and California state privacy laws, lost recoverable asset value when equipment with residual market demand gets treated as scrap, and environmental compliance issues stemming from improper electronic waste handling. A structured ITAD process closes all four risks at once with documented, auditable controls.
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
                    A defensible ITAD program brings together several disciplines that work in sequence rather than in isolation. Each stage produces documentation that ties the entire workflow together.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Secure data destruction
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Certified data sanitization following recognized standards such as NIST 800-88, with physical destruction performed when the situation requires it.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Asset tracking and chain of custody
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Per-device serial-number tracking from pickup through final disposition, with documented transfers at every handoff.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Evaluation for refurbishment and recovery
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Each asset is assessed for resale, redeployment, or refurbishment before recycling becomes the answer recovering meaningful value rather than scrapping by default.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Responsible end-of-life recycling
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      For equipment that genuinely reaches end-of-life, certified recycling under R2v3 standards ensures materials are recovered responsibly and kept out of landfills.
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
                  Different sectors across Fresno operate under different regulatory frameworks. Each one shapes how IT assets must be handled at retirement.
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
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Education</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">FERPA, CCPA</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Student data protection and disposal records</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Government</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">NIST, FISMA</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Documented destruction to federal standards</td>
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

            {/* Secure Data Destruction */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Secure Data Destruction and Compliance
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Data-bearing devices such as hard drives and SSDs require proper sanitization before they can be reused or recycled. Many Fresno organizations operate under data protection requirements healthcare regulations, financial oversight, education frameworks, or internal security policies that demand specific, documented destruction methods.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Logical data sanitization
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Software-based erasure aligned with NIST 800-88 and DoD 5220.22-M standards ensures all data is irreversibly removed before devices move to reuse or recycling streams.
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
                      Documented audit trails
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Full chain-of-custody records that support both internal compliance reviews and external audits without requiring reconstruction after the fact.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Asset Recovery */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Asset Recovery and Value Maximization
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Not every retired device belongs in a recycling stream. Many still hold meaningful market value depending on age, configuration, and current demand value that disappears the moment equipment gets defaulted to scrap.
                  </p>
                  <p className="text-justify">
                    A recovery-focused ITAD strategy lets Fresno businesses reduce overall disposition costs by recovering returns from resold equipment, capture residual value from devices that still have working life ahead, minimize unnecessary recycling so functional hardware stays in productive use longer, and improve sustainability outcomes through verified reuse and refurbishment. Evaluating recovery potential before recycling is what turns retired IT from a recurring cost into a contributor to the IT budget.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Environmental Responsibility */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Environmental Responsibility in the Central Valley
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Responsible electronic recycling is a core part of any structured ITAD program. Extending the life of IT equipment through refurbishment and reuse reduces the volume of e-waste entering the disposal stream and lowers the carbon footprint associated with manufacturing replacement hardware.
                  </p>
                  <p className="text-justify">
                    When assets do reach genuine end-of-life, certified recycling under R2v3 standards ensures materials are recovered responsibly, hazardous components are handled correctly, and nothing ends up in landfills that shouldn&apos;t. For Central Valley organizations facing California&apos;s strict e-waste regulations, this is the difference between defensible disposition and exposure during environmental compliance reviews.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Choosing the Right ITAD */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Choosing the Right ITAD Approach in Fresno
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Selecting an ITAD partner isn&apos;t just a vendor decision it&apos;s an operational choice that affects security, compliance, and recovered value across every refresh cycle. Five practical factors separate the providers worth evaluating from the rest.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Documentation and chain-of-custody controls
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Continuous tracking from pickup through final disposition with serial-level records is what makes the rest of the program defensible.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Data security procedures
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Certified sanitization methods, verified destruction workflows, and per-device certificates that hold up to audit scrutiny are non-negotiable for data-bearing equipment.
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
                      A recovery-first evaluation process is what determines whether retired equipment generates returns or simply incurs disposal costs.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Transparent reporting
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Clear breakdowns of what was resold, refurbished, or recycled along with recovered values give you the visibility needed for finance, IT, and compliance teams.
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
                    At project completion, expect documentation that covers every part of the workflow without follow-up requests: asset inventories with valuation reports identifying every device received and its assessed market value, certificates of erasure or destruction confirming the sanitization standard applied per device, data sanitization reports documenting methods, timestamps, and serial-level traceability, and processing and disposition summaries detailing what was resold, refurbished, or recycled along with recovered value and environmental outcomes.
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
                    For businesses across Fresno, IT Asset Disposition has moved from a back-office logistics task into a meaningful part of how organizations protect sensitive information, recover value from retired equipment, and meet California&apos;s data protection and environmental requirements.
                  </p>
                  <p className="text-justify">
                    Following structured ITAD processes that prioritize security, compliance, and recovery is what allows Central Valley organizations to manage the full IT lifecycle with confidence and turn what used to be a quiet liability into a controlled, documented, and increasingly valuable part of every refresh cycle.
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