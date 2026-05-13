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

import ITAD from "@/public/blogs/itad.jpg";
import ScrollLoader from '@/components/shared/ScrollLoader';

const faqs = [
  {
    question: "What is sustainable IT asset disposition?",
    answer:
      "Sustainable ITAD is the responsible management of retired IT equipment through secure data destruction, prioritized reuse and refurbishment, and environmentally compliant recycling all backed by verifiable documentation.",
  },
  {
    question: "Why is ITAD sustainability important for businesses?",
    answer:
      "It reduces environmental impact, protects sensitive data, supports ESG goals, and ensures regulatory compliance four priorities that increasingly appear in board-level reporting and investor evaluations.",
  },
  {
    question: "How does ITAD reduce e-waste?",
    answer:
      "By prioritizing reuse, refurbishment, and certified recycling rather than landfill disposal. Functional devices stay in productive use longer, and end-of-life materials are recovered responsibly through certified facilities.",
  },
  {
    question: "What certifications should a sustainable ITAD provider hold?",
    answer:
      "The recognized standards are R2v3 and e-Stewards for responsible recycling, ISO 14001 for environmental management, ISO 27001 for information security, and NIST 800-88 alignment for data sanitization.",
  },
  {
    question: "Can sustainable ITAD actually generate value?",
    answer:
      "Yes. Recovered materials, resold refurbished equipment, and avoided disposal fees often produce meaningful returns. Combined with the cost of avoiding fines and breach exposure, sustainable ITAD frequently delivers positive ROI rather than acting as a pure cost center.",
  },
];

export default function ITADBlogs() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollLoader>
        <PageHeader
          eyebrow="IT Asset Management"
          title="The Importance of IT Asset Disposition (ITAD) Sustainability"
          description="ITAD sustainability sits at the intersection of e-waste reduction, data security, ESG performance, and regulatory compliance. Done well, it turns end-of-life IT into a strategic advantage."
        />
        </ScrollLoader>

        {/* Meta Information */}
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
          <span>9 min read</span>
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
                src={ITAD}
                alt="The importance of IT Asset Disposition (ITAD) sustainability"
                className="w-full h-auto"
                priority
              />
            </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
              <p className="text-justify">
                As digital transformation accelerates, the volume of retired IT equipment continues to climb. How an organization handles end-of-life technology has become a meaningful factor in environmental responsibility, data security, and regulatory compliance and that&apos;s where IT Asset Disposition (ITAD) sustainability earns its place in the conversation.
              </p>
              <p className="text-justify">
                Sustainable ITAD is no longer optional. It reduces e-waste, protects sensitive data, supports ESG commitments, and demonstrates responsible corporate behavior across the full IT lifecycle. A well-designed program supports business objectives and environmental stewardship at the same time, without forcing a trade-off between them.
              </p>
            </div>
            </ScrollLoader>

            {/* What Is ITAD */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                What IT Asset Disposition Actually Covers
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  IT Asset Disposition is the structured process of safely and responsibly managing IT equipment at the end of its useful life. It applies to servers, laptops, desktops, networking devices, and storage media everything that goes through a refresh cycle and eventually needs to leave organizational control.
                </p>
                <p className="text-justify">
                  A complete ITAD process covers asset inventory and tracking, secure data sanitization or destruction, device reuse or refurbishment, responsible recycling of materials that can&apos;t be reused, and the documentation that ties the entire workflow together for compliance. When sustainability is built into each of these stages, ITAD shifts from a back-office function into a measurable driver of environmental and business value.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* What Sustainability Means in ITAD */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                What Sustainability Means in ITAD
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Sustainability in ITAD focuses on minimizing environmental impact while maximizing resource efficiency and ethical responsibility. It maps directly onto Environmental, Social, and Governance (ESG) principles three areas that increasingly determine how organizations are evaluated by investors, customers, and regulators.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Environmental protection
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Minimizing e-waste through certified recycling, recovering raw materials, and extending the working life of functional equipment whenever possible.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Social responsibility
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Verified ethical recycling practices, safe working conditions across the disposition chain, and accountability for the downstream partners that handle materials further.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Governance and compliance
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Transparent reporting, certified destruction documentation, and adherence to recognized standards that hold up to internal and external audit.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Standards Comparison Table */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Standards That Support Sustainable ITAD
              </h2>
              <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Sustainable ITAD doesn&apos;t rely on good intentions. It runs on recognized standards that produce measurable, auditable outcomes.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                <table className="w-full text-left bg-white dark:bg-dark-secondary">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Standard</th>
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Focus Area</th>
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">What It Covers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">R2v3</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Responsible recycling</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Data security, downstream accountability, environmental processes</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">e-Stewards</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Environmental and ethical practices</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Zero landfill, no-export rules, verified labor practices</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">ISO 14001</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Environmental management</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Systematic environmental performance and improvement</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">ISO 27001</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Information security</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Data protection controls across the disposition lifecycle</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">NIST 800-88</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Data sanitization</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Verified erasure methods with audit-ready documentation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            </ScrollLoader>

            {/* Environmental Impact */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Environmental Impact of Sustainable ITAD
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Electronic waste is one of the fastest-growing waste streams globally. Sustainable ITAD reduces landfill volume through certified recycling, recovers valuable raw materials such as gold, silver, copper, and palladium, lowers carbon emissions by extending device life through reuse, and prevents hazardous substances from reaching soil and groundwater.
                </p>
                <p className="text-justify">
                  These outcomes aren&apos;t marketing metrics. They&apos;re measurable values that increasingly appear in ESG reporting, customer contracts, and regulatory filings.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Why ITAD Sustainability Matters */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Why ITAD Sustainability Matters for Modern Businesses
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Modern organizations face growing pressure from regulators, customers, and investors to operate responsibly. Sustainable ITAD addresses several priorities at once that would otherwise require separate programs.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Supporting ESG and CSR commitments
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    ITAD sustainability feeds directly into ESG performance metrics, Corporate Social Responsibility programs, and the documentation auditors expect during sustainability reporting. Verified outcomes are what turn ESG language into evidence.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Integrating data security with sustainability
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Sustainable ITAD includes certified data destruction methods such as NIST 800-88 wiping, physical shredding, and verified chain-of-custody documentation. Environmental responsibility doesn&apos;t replace security it sits alongside it.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Compliance and audit readiness
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Reputable ITAD partners operate under recognized standards including R2, ISO 14001, and ISO 27001, producing the certificates and audit trails required for regulatory review and internal governance.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Risks of Ignoring ITAD Sustainability */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                The Cost of Ignoring ITAD Sustainability
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Skipping sustainable ITAD doesn&apos;t make the risks disappear. It just shifts them onto your balance sheet, where they tend to compound over time.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Legal and regulatory consequences
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Improper IT asset disposal can result in regulatory fines, data breach liabilities, non-compliance findings under GDPR or HIPAA, and exposure to import or export restrictions on hazardous materials.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Brand reputation and trust
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Environmental negligence or data mishandling damages brand credibility quickly and recovers slowly. Customer confidence, investor relationships, and competitive positioning all take measurable hits when these stories surface publicly.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Best Practices */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Best Practices for Sustainable ITAD
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  A defensible sustainable ITAD program comes down to three priorities, executed consistently.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Choose a certified ITAD partner
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Look for industry certifications such as R2 and e-Stewards, transparent reporting and audit trails, proven data security protocols, and verified ethical recycling processes. The certificate is a baseline, not a guarantee verifying active status and reviewing prior project documentation matters more than the logo on the website.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Prioritize reuse, refurbishment, and remarketing
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Before recycling, organizations should consider redeployment within the business, refurbishment for resale, donation programs where appropriate, and harvesting components from devices that can&apos;t be redeployed whole. Recycling is the last step, not the first.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Document everything
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Proper documentation supports regulatory compliance, accurate ESG reporting, full visibility into asset disposition, carbon footprint tracking, due-diligence audit trails, and stakeholder transparency. Documentation is what turns sustainability into something you can prove.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Circular Economy */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                The Circular Economy Connection
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  A circular economy keeps resources in productive use for as long as possible, and ITAD plays a central role in making that possible for IT assets specifically. The progression matters: reuse extends asset life through redeployment, refurbishment restores devices for secondary markets, and recycling recovers materials when reuse is no longer viable.
                </p>
                <p className="text-justify">
                  Each step further along the chain reduces environmental impact and recovers more value than would otherwise be lost. The combined effect is meaningful cost savings alongside measurable sustainability outcomes.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Future Trends */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Where Sustainable ITAD Is Heading
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Two forces are reshaping sustainable ITAD over the next several years.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Stricter regulations and ESG reporting
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Governments and regulators are tightening e-waste and data protection laws across most major markets, while investor-led ESG reporting requirements continue to expand. Organizations that adapt early gain a clear advantage; those that wait face increasingly expensive catch-up.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Technology improvements
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Automated asset tracking and lifecycle management, AI-driven refurbishment quality assessment, blockchain-based supply chain transparency, and carbon footprint analytics for IT assets are all moving from pilot programs into mainstream ITAD operations producing more accurate and verifiable sustainability data than was possible even a few years ago.
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
                Final Thoughts
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  ITAD sustainability is becoming a defining capability for modern enterprise IT. Organizations that get it right reduce e-waste, safeguard sensitive data, support ESG objectives, and strengthen corporate reputation simultaneously outcomes that used to require separate, competing programs.
                </p>
                <p className="text-justify">
                  Partnering with certified ITAD providers and embracing circular economy principles is what turns end-of-life IT from a recurring liability into a strategic advantage. The benefit accrues to both the organization and the planet, and the documentation supports both audit and reporting on the way through.
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