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

import ChainCustodyImage from "@/public/blogs/chain-custody.png";
import ScrollLoader from '@/components/shared/ScrollLoader';

export default function ChainCustody() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollLoader>
        <PageHeader
          eyebrow="ITAD Compliance"
          title="Chain of Custody in ITAD: Why Tracking and Documentation Matter"
          description="A clear chain of custody is the backbone of secure IT Asset Disposition. Here&apos;s what it means, why it protects your data, and what to expect from a qualified ITAD partner."
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
            <span>Chain of Custody</span>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <span>5 min read</span>
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
                src={ChainCustodyImage}
                alt="Chain of Custody in ITAD"
                className="w-full h-auto"
                priority
              />
            </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
              <p className="text-justify">
                When organizations retire laptops, servers, and storage devices, attention usually goes to data destruction and recycling. The piece that quietly determines whether the entire process holds up under scrutiny is chain of custody.
              </p>
              <p className="text-justify">
                A documented, transparent chain of custody protects sensitive data, supports compliance, and gives leadership confidence that nothing slipped through the cracks.
              </p>
            </div>
            </ScrollLoader>

            {/* What Is Chain of Custody */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight font-serif">
                What Chain of Custody Means in ITAD
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Chain of custody is the documented tracking of IT assets from the moment they leave an organization&apos;s control through final disposition. Every transfer, handler, and processing step is recorded.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 font-serif">
                    Collection and handover
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    The exact time assets are picked up and the personnel responsible for the initial transfer are recorded.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 font-serif">
                    Custody and location
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Every party that handles the assets and every facility where they are stored or processed is logged in sequence.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 font-serif">
                    Actions and final disposition
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Data sanitization, destruction, refurbishment, and recycling activities are documented through to the final outcome of each asset.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Data Security */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight font-serif">
                Why It Matters for Data Security
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Retired devices often still hold sensitive data. Without clear tracking, the gap between pickup and final disposition becomes a real exposure point one that auditors, regulators, and threat actors all know to look for.
                </p>
                <p className="text-justify">
                  A strong chain of custody confirms that assets remain accounted for in transit, that only authorized personnel handle data-bearing devices, and that destruction activities can be independently verified. For regulated environments, this is a foundational security control rather than a nice-to-have.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Regulatory Compliance */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight font-serif">
                Compliance and Regulatory Alignment
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Healthcare, financial services, government, and enterprise organizations all operate under regulations that require secure handling of sensitive data. Chain of custody documentation produces the audit-ready records that demonstrate due diligence and reduce legal exposure.
                </p>
                <p className="text-justify">
                  Standards commonly associated with ITAD such as R2 certification and ISO-aligned management systems emphasize documentation, traceability, and controlled processes. A qualified provider builds these requirements into the workflow rather than treating them as an afterthought.
                </p>
              </div>
            </section>
            </ScrollLoader>

            {/* Compliance Comparison Table */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight font-serif">
                Documented vs. Undocumented Disposition
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                The difference between a documented chain of custody and informal handling becomes clear during an audit or incident.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                <table className="w-full text-left bg-white dark:bg-dark-secondary">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <th className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Aspect</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Without Chain of Custody</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">With Chain of Custody</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Asset Tracking</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Stops after pickup</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Tracked to final disposition</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Audit Readiness</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Limited or inconsistent records</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Complete, verifiable records</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Data Security Risk</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Unverifiable exposure</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Controlled and documented</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Accountability</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Diffused across vendors</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Clear at every stage</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            </ScrollLoader>

            {/* Key Elements */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight font-serif">
                Key Elements of an Effective Process
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                A defensible chain of custody combines several disciplines that work together to produce a complete record.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 font-serif">
                    Asset identification
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Serial numbers, asset tags, or unique identifiers are captured at intake so each device can be tracked individually rather than as a batch.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 font-serif">
                    Secure transportation
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Controlled logistics, vetted personnel, and documented transfers protect assets between facilities and close the most common exposure window.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 font-serif">
                    Controlled processing environments
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Restricted-access facilities with monitoring ensure that only authorized staff handle data-bearing equipment.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 font-serif">
                    Action logging and final records
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Sanitization, destruction, and recovery activities are logged at the asset level, with confirmation of recycling, resale, or destruction at completion.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Common Gaps */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight font-serif">
                Common Gaps to Avoid
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                Most chain of custody failures come from a small set of recurring mistakes.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 font-serif">
                    Undocumented handoffs
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Transferring assets without signed records creates blind spots that cannot be reconstructed later.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 font-serif">
                    Unclear vendor accountability
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    When multiple downstream partners are involved, responsibility for each asset must remain explicit at every stage.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 font-serif">
                    Tracking that stops after pickup
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    A chain that ends at the loading dock leaves the most sensitive part of the process the time between pickup and destruction unverified.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 font-serif">
                    Incomplete reporting
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Missing serial numbers, mismatched counts, or inconsistent certificates make audits painful and weaken the entire program.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Documentation */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight font-serif">
                Documentation You Should Receive
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                A qualified ITAD provider produces clear records at every stage so internal teams and auditors can verify outcomes without guesswork.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 font-serif">
                    Asset inventory
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    A complete list of every device received, identified by serial number and condition.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 font-serif">
                    Certificates of erasure or destruction
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Verified documentation for each unit confirming the standard applied and the outcome.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 font-serif">
                    Sanitization and processing reports
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Detailed records of the methods used and a summary of how each asset was ultimately resold, refurbished, or recycled.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* FAQ Section */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-8 tracking-tight">
                Frequently Asked Questions
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-0">
                  <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white text-left">
                    What is chain of custody in ITAD?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      It is the documented tracking of IT assets from the moment they leave an organization&apos;s control through final disposition, covering every transfer, handler, and processing step.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white text-left">
                    Why does it matter for data security?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      It confirms assets are not lost or mishandled, restricts access to authorized personnel, and allows destruction activities to be independently verified.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white text-left">
                    What documentation should an ITAD provider deliver?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Expect asset inventories, certificates of erasure or destruction, sanitization reports, and a complete chain of custody record from pickup through final disposition.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white text-left">
                    How does it support compliance?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      It provides audit-ready records that demonstrate due diligence, support internal and external reviews, and reduce regulatory and legal risk.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white text-left">
                    What are the most common gaps?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Undocumented handoffs, unclear vendor accountability, tracking that stops after pickup, and inconsistent reporting are the failures we see most often.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>
            </ScrollLoader>
            
            {/* Conclusion */}
            <ScrollLoader>
            <section>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight font-serif">
                Final Thoughts
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Chain of custody is what turns IT Asset Disposition from a logistical task into a defensible security and compliance program. Clear tracking, accurate documentation, and unbroken accountability are what separate a reliable ITAD partner from a risky one.
                </p>
                <p className="text-justify">
                  When evaluating providers, look closely at how they handle the steps between pickup and final disposition. That is where the strength of the program is decided.
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