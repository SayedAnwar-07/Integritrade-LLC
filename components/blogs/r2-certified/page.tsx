import { Calendar, Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import PageHeader from "@/components/shared/PageHeader";
import AllBlogCardsComponent from '@/components/EightBlogCards';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollLoader from '@/components/shared/ScrollLoader';

import r2_certified from "@/public/blogs/R2-Certified1.jpg";

const faqs = [
  {
    question: "What is an R2-certified recycler?",
    answer:
      "An R2-certified recycler is a company certified under the R2 standard, ensuring responsible e-waste recycling, secure data destruction aligned with NIST 800-88, and compliance with environmental and safety regulations across every step of the disposition process.",
  },
  {
    question: "What risks do non-certified recyclers pose?",
    answer:
      "Non-certified recyclers may illegally export e-waste, damage the environment, compromise worker safety, and expose sensitive data especially in countries with weak regulations. The exposure typically remains attached to the original generator, not the recycler.",
  },
  {
    question: "Why does export to non-Basel countries matter?",
    answer:
      "The Basel Convention regulates the international movement of hazardous waste. Exporting electronics to non-signatory countries without proper controls can violate U.S. regulations and international law, creating legal liability that often surfaces years later.",
  },
  {
    question: "How does R2 differ from e-Stewards?",
    answer:
      "Both are recognized certifications for responsible electronics recycling. R2 (managed by SERI) emphasizes downstream traceability and reuse-first prioritization, while e-Stewards (managed by the Basel Action Network) takes stricter positions on export and landfill prohibition. Many providers hold both.",
  },
];

export default function R2Certified() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollLoader>
          <PageHeader
            eyebrow="Certification & Compliance"
            title="Why R2-Certified Recyclers Matter for Safe E-Waste Export"
            description="R2 certification isn&apos;t just a credential. It&apos;s the difference between defensible electronics recycling and exposure to data breach, environmental violation, and illegal export liability that often surfaces years later."
          />
        </ScrollLoader>

        {/* Meta */}
        <ScrollLoader>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 my-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2025-12-22">December 22, 2025</time>
            </div>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>IT Asset Management</span>
            </div>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <span>8 min read</span>
          </div>
        </ScrollLoader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          <article className="lg:col-span-2">

            {/* Hero Image */}
            <ScrollLoader>
              <figure className="mb-12 overflow-hidden rounded-lg">
                <Image
                  src={r2_certified}
                  alt="Why choosing an R2-certified recycler matters"
                  className="w-full h-auto"
                  priority
                />
              </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
                <p className="text-justify">
                  Managing electronic waste responsibly has moved from a sustainability talking point to a real operational obligation. Improper disposal creates environmental damage, data breach exposure, and legal liability that can surface years after the original handoff and the path to avoiding all three runs through certified recyclers operating under recognized standards.
                </p>
                <p className="text-justify">
                  For businesses generating e-waste, choosing an R2-certified recycler ensures electronic equipment is handled safely, ethically, and in compliance with international regulations. It&apos;s the single most reliable filter for separating defensible disposition from quietly risky alternatives.
                </p>
              </div>
            </ScrollLoader>

            {/* What R2 Certification Means */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  What R2 Certification Actually Means
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    R2 is a globally recognized standard for responsible electronics recycling, managed by Sustainable Electronics Recycling International (SERI) and recognized by the U.S. Environmental Protection Agency. It enforces strict guidelines covering data security, environmental safety, worker health and safety, and downstream vendor transparency four areas where most informal recycling fails.
                  </p>
                  <p className="text-justify">
                    Partnering with an R2-certified recycler reduces operational risk, protects brand reputation, and ensures compliance with international standards that increasingly shape commercial relationships and regulatory exposure. The full list of certified recyclers is published by the EPA at the{' '}
                    <Link
                      href="https://www.epa.gov/electronics-batteries-management/certified-electronics-recyclers"
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      EPA Certified Electronics Recyclers directory
                    </Link>.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Key Requirements */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Key Requirements of R2 Certification
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    R2 isn&apos;t a checklist; it&apos;s a rigorous, audited standard that only a small percentage of recyclers achieve and maintain. Certified facilities must build and demonstrate full systems for environmental protection, data security, and traceability across every step of the recycling process.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Environmental, health, and safety controls
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Robust written procedures, employee training, PPE programs, and ongoing monitoring protect workers and the environment. R2 facilities are audited against strict EHS criteria continuously, not just at certification.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Verified data destruction aligned with NIST 800-88
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      R2 demands documented, auditable processes for media sanitization and destruction. This includes serial-level tracking, proof of wiping or physical destruction, and secure handling of data-bearing devices from pickup through final disposition.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Reuse first, then responsible recovery
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      R2 prioritizes extending the life of electronics through testing, refurbishment, and resale before any material moves into recycling. Where reuse isn&apos;t possible, materials must be processed through qualified recyclers to maximize recovery and minimize landfill.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Downstream due diligence and full traceability
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Every downstream partner shredders, smelters, refurbishers, brokers must be vetted, approved, and reviewed regularly. R2 requires documented downstream due diligence to prevent illegal export, unsafe processing, or dumping, with records maintained for all inbound and outbound shipments.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Recordkeeping and independent audits
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Detailed records cover all incoming equipment and outgoing materials including weights, device classifications, serial numbers, processing methods, destinations, and vendor approvals. Independent third-party auditors review these records year after year to verify continued compliance.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Certified vs Non-Certified */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  R2-Certified vs Non-Certified Recyclers
                </h2>
                <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The operational and compliance gap between certified and non-certified providers is wider than most procurement teams realize.
                </p>

                <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left bg-white dark:bg-dark-secondary">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Aspect</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">R2-Certified</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Non-Certified</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Audits</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Independent annual review</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Self-reported or none</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Data Destruction</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">NIST 800-88 verified</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Variable, often undocumented</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Downstream Vendors</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Vetted and tracked</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Unverified</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Export Compliance</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Basel-aligned controls</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Risk of illegal export</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Documentation</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Audit-ready records</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Minimal or absent</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Liability Exposure</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Bounded and documented</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Open-ended</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollLoader>

            {/* Risks of Non-Certified */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Risks of Using Non-Certified Recyclers
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Non-certified recyclers especially those exporting e-waste create exposure across four interconnected categories that often only become visible after damage is done.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Environmental risks
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Unregulated recyclers frequently burn electronics or dump hazardous materials, creating air, water, and soil pollution that can be traced back to the original generator during environmental review.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Legal and compliance risks
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Exporting waste to non-Basel countries through non-certified recyclers can violate international conventions and U.S. regulations, resulting in fines and reputational damage that show up long after the disposal contract ends.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Data security risks
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Without verified destruction protocols, sensitive information may be stolen, mishandled, or recovered from devices that should have been sanitized. The breach exposure remains attached to the data owner, regardless of where the failure occurred.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Brand reputation damage
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Investors, customers, and regulators are increasingly attentive to ESG practices. Mismanaged e-waste can permanently damage corporate reputation in ways that disposal cost savings will never recoup.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* How to Verify */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  How to Verify an R2-Certified Recycler
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Three steps separate genuine R2-certified providers from those who merely claim certification.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      1. Confirm certification status directly
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Verify the recycler&apos;s certification number and expiration via the official SERI directory before signing anything. You can review IntegriTrade&apos;s active certifications on our{' '}
                      <Link
                        href="/certifications"
                        className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                      >
                        certifications page
                      </Link>.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      2. Request downstream vendor disclosure
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Ensure all downstream partners are compliant and properly vetted. A certified recycler should be able to produce this list on request without hesitation.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      3. Confirm data destruction standards
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Verify adherence to NIST 800-88 and other recognized protocols, with serial-level documentation per device available at project close.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Best Practices */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Best Practices for Businesses Handling E-Waste
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Three practices separate organizations that consistently produce defensible e-waste outcomes from those that quietly accumulate exposure.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Work only with R2-certified recyclers
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      For any organization handling sensitive data or operating in regulated industries, this is non-negotiable. The certification requirement filters out the majority of providers whose practices wouldn&apos;t survive an audit.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Establish a trust-but-verify reconciliation protocol
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Don&apos;t rely solely on the ITAD partner&apos;s audit. For high-risk data-bearing assets like laptops, servers, and desktops, maintain an internal serial-number log prior to pickup and require mandatory reconciliation between your internal list and the vendor&apos;s final Certificate of Destruction. Discrepancies discovered at this stage are the difference between a clean program and a future audit finding.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Avoid lowest-cost recyclers
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Recyclers that compete primarily on price almost always compromise on safety, compliance, or downstream verification somewhere. Apparent savings rarely survive contact with the resulting fines, breach costs, or reputational damage.
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
                    Choosing an R2-certified recycler is no longer optional for businesses handling e-waste responsibly especially when exports outside Basel Agreement countries are part of the supply chain. R2 ensures environmental safety, legal compliance, data security, and ethical recycling practices that protect the company, its data, and the environment simultaneously.
                  </p>
                  <p className="text-justify">
                    Done right, certified recycling stops being a procurement question and becomes a structural part of how the organization manages risk, reputation, and end-of-life IT in a way that holds up under audit and regulatory review.
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