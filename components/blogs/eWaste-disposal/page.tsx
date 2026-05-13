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

import ewasteImage from "@/public/blogs/E-Waste-Disposal.jpg";
import ScrollLoader from '@/components/shared/ScrollLoader';

export default function EWasteDisposal() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollLoader>
        <PageHeader
          eyebrow="E-Waste Compliance & Security"
          title="Certified E-Waste Disposal: Ensure Compliance and Data Security"
          description="The right e-waste partner protects your organization on three fronts at once: data security, regulatory compliance, and environmental responsibility. Here&apos;s what certifications like R2v3 and e-Stewards actually deliver."
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
          <span>8 min read</span>
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
                src={ewasteImage}
                alt="Certified e-waste disposal for compliance and data security"
                className="w-full h-auto"
                priority
              />
            </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
              <p className="text-justify">
                Every organization that runs on technology eventually has to retire it. Laptops, desktops, servers, mobile devices, and industrial electronics all reach end-of-life on a predictable cycle, and what happens to them next determines whether your business is protected or exposed.
              </p>
              <p className="text-justify">
                Improperly handled e-waste creates three problems at once: data security breaches, regulatory violations, and environmental harm. The single most effective way to avoid all three is working with a certified disposal partner. R2v3 and e-Stewards are the certifications that actually mean something, and understanding what they cover is the foundation of a defensible disposition program.
              </p>
            </div>
            </ScrollLoader>

            {/* Understanding E-Waste */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Understanding E-Waste and Its Growing Risks
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  E-waste covers the full range of discarded electronic devices: IT equipment such as laptops, desktops, servers, monitors, and printers; mobile devices including smartphones, tablets, and telecom hardware; industrial and medical electronics like diagnostic machines, sensors, and control systems; and batteries and power storage devices.
                </p>
                <p className="text-justify">
                  According to the 2024 Global E-Waste Monitor, the world generates over 62 million metric tons of e-waste annually, with projections reaching 82 million tons by 2030. That growth is colliding with increasingly strict regulatory frameworks, making proper disposition a board-level concern rather than an IT footnote.
                </p>
                <p className="text-justify">
                  The reason for the regulation is straightforward. Electronics contain hazardous substances including lead, mercury, cadmium, and brominated flame retardants, all of which can contaminate soil and water if mishandled. Frameworks such as RoHS, the WEEE Directive, EPA guidelines, and various state-level laws all impose specific requirements on how electronics are handled, transported, and recycled. Non-compliance carries fines, lawsuits, and reputational damage that can take years to recover from.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* What is a Certified Vendor */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                What a Certified E-Waste Vendor Actually Provides
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  A certified e-waste disposal vendor is a third-party recycler that has been independently audited and approved by recognized certification bodies. Certification means the vendor follows secure data destruction protocols, handles hazardous materials safely, maintains chain of custody documentation throughout the disposition process, and operates with the goal of minimizing landfill and environmental impact.
                </p>
                <p className="text-justify">
                  Two certifications carry weight in this space: R2v3 (Responsible Recycling Version 3) and e-Stewards. Both are recognized by the EPA, but they emphasize different aspects of the disposition process.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    R2v3 certification
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    R2v3-certified vendors follow industry-standard data destruction methods, maintain accountability for the downstream vendors that process materials further, and operate under environmentally responsible recycling and disposal procedures. In practice, this looks like shredding hard drives to specification, providing per-device certificates of destruction, and documenting where every component ends up.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    e-Stewards certification
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    e-Stewards emphasizes environmental and ethical practices, including strict zero-landfill policies, no-export rules that prevent hazardous e-waste from being shipped to developing countries, and verified safe labor practices in recycling operations. e-Stewards-certified vendors track every device through their system to confirm complete environmental compliance.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Comparison Table */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                R2v3 vs e-Stewards at a Glance
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-justify">
                Both certifications produce defensible disposition outcomes. The right choice depends on which dimensions matter most to your organization.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                <table className="w-full text-left bg-white dark:bg-dark-secondary">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Feature</th>
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">R2v3</th>
                      <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">e-Stewards</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Primary Focus</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Data security and recycling standards</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Environmental justice and ethical practices</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Landfill Policy</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Limited restrictions</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Strict zero-landfill</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Export Restrictions</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Permitted with controls</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">No-export rules enforced</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Downstream Control</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Audited vendors</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Audited and environmentally compliant</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Best Suited For</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Data security and compliance priorities</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Environmental and ESG priorities</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-8 text-justify">
                Many leading vendors hold both certifications, which combines the strengths of each framework into a single defensible program.
              </p>
            </section>
            </ScrollLoader>

            {/* Why Certification Supports Due Diligence */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                How Certification Supports Corporate Due Diligence
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Selecting a certified vendor isn&apos;t just a procurement decision. It directly fulfills meaningful parts of an organization&apos;s due diligence obligations across compliance, audit, and sustainability reporting.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Regulatory compliance
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Certified vendors demonstrate adherence to federal, state, and international e-waste laws, including RoHS, WEEE, and EPA guidelines, removing the burden of proving compliance project by project.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Audit readiness
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Certificates of destruction, chain-of-custody documentation, and detailed audit logs allow organizations to respond to regulators or internal auditors quickly and with confidence.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    ESG and sustainability alignment
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Certified e-waste recycling supports ESG reporting goals by producing measurable environmental outcomes, verified labor practices, and documented governance over the disposition process.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Risks of Uncertified Vendors */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                The Risks of Uncertified E-Waste Vendors
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Uncertified vendors are usually cheaper on paper, and almost always more expensive in practice. The exposure they create touches every part of the business that matters.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Environmental hazards
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Uncertified vendors may landfill electronics or process them improperly, releasing toxic substances into soil and groundwater and creating long-term liability for the originating organization.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Data security failures
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Devices retired without certified sanitization frequently still contain recoverable data. Public examples of organizations suffering breaches because old hard drives were handed to uncertified recyclers continue to appear in headlines, often resulting in significant fines and customer notification costs.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Legal and compliance gaps
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Without certification, there is no independent assurance that the recycler follows federal, state, or international e-waste laws. The exposure ranges from regulatory fines to discovery during litigation and audit findings.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Reputational damage
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    When environmental violations or data mishandling become public, the reputational impact reaches investors, customers, and employees and tends to last well beyond the operational fix.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* How to Choose */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                How to Choose the Right Certified Vendor
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Certification is the starting point, not the finish line. The questions below separate vendors that simply hold a certificate from those who genuinely operate to its standards.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Verify the certification directly
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Check the official R2 or e-Stewards directories rather than relying on website claims. Active, in-good-standing certification is what counts.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Request sample documentation
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Ask to see redacted certificates of destruction and chain-of-custody records from prior projects. The quality and completeness of that documentation reveals how the vendor actually operates.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Confirm downstream visibility
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Responsible vendors can describe exactly where materials go after they leave the facility and provide the audit trail to support it. Vague answers here are a red flag.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Validate zero-landfill and no-export practices
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    For organizations with strong sustainability commitments, ask specifically how zero-landfill and no-export policies are enforced and measured.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Ask for client references
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    References from organizations of similar size and regulatory profile reveal how the vendor performs under audit and during high-volume engagements.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Business Case */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                The Business Case Beyond Compliance
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Certified e-waste partners deliver value that goes well beyond avoiding penalties. The economic and operational benefits often outweigh the cost difference compared to uncertified alternatives.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Cost recovery and savings
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Proper recycling recovers precious metals such as gold, silver, copper, and palladium, while reducing direct disposal fees through reuse and resale of functional equipment.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Reputation and ESG positioning
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Verified ESG outcomes strengthen brand image and stakeholder trust, particularly with enterprise customers and investors who increasingly require evidence of sustainable supply chain practices.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Risk mitigation
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Certified disposition prevents data breaches, regulatory fines, and environmental penalties exposures that can quickly dwarf any savings from cheaper, uncertified alternatives.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Operational efficiency
                  </h3>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    Streamlined processes, predictable documentation, and reliable scheduling reduce the administrative load on internal IT and compliance teams.
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
                    What&apos;s the difference between R2v3 and e-Stewards certifications?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      R2v3 emphasizes data security and recycling standards with controlled but permitted exports. e-Stewards emphasizes environmental justice, strict zero-landfill, and no-export rules. Both are EPA-recognized and produce defensible outcomes; the right choice depends on which priorities matter most to your organization.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    Can a vendor hold both certifications?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Yes. Many leading vendors hold both R2v3 and e-Stewards certifications, combining strong data security practices with strict environmental and labor standards.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    What are the main risks of using uncertified e-waste vendors?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Environmental harm from improper disposal, data security failures from inadequate destruction, regulatory and legal exposure, and reputational damage that can affect customer trust and investor confidence.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    How does certified e-waste disposal support ESG goals?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      It produces measurable environmental outcomes such as reduced landfill volume and recovered materials, supports verified social practices through ethical labor standards, and strengthens governance through documentation and audit trails all of which feed directly into ESG reporting.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="font-serif text-lg font-medium text-gray-900 dark:text-white text-left">
                    How can I verify a vendor&apos;s certification?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Check the official R2 or e-Stewards directories. Active certification listings confirm that the vendor is currently in good standing rather than relying on outdated marketing material.
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
                  Working with a certified e-waste disposal vendor is no longer optional for organizations that take data security, regulatory compliance, and environmental responsibility seriously. R2v3 and e-Stewards certifications exist precisely because the risks of getting this wrong are too significant to leave to handshake agreements.
                </p>
                <p className="text-justify">
                  The right partner protects your organization on all three fronts at once secure data destruction, defensible compliance documentation, and verified environmental outcomes. That combination is what turns end-of-life IT from a recurring liability into a controlled, predictable, and increasingly valuable part of the technology lifecycle.
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