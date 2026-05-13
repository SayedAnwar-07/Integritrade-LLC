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

import ITADCutlinesImage from "@/public/blogs/itadCutlines.jpg";
import ScrollLoader from '@/components/shared/ScrollLoader';

const faqs = [
  {
    question: "What exactly is an ITAD cutline?",
    answer:
      "A cutline is the eligibility threshold an ITAD provider uses to decide whether a retired device qualifies for resale and revenue recovery, or whether it should be securely recycled. It's set by device age, hardware specifications, market demand, and current resale value trends.",
  },
  {
    question: "What's the minimum quantity to qualify for revenue sharing or buy-back?",
    answer:
      "Most programs require at least 25 laptops to qualify, though there's flexibility for high-end models or mixed lots with strong overall value. Smaller volumes can sometimes qualify if the asset mix is compelling enough.",
  },
  {
    question: "How is accelerated buy-back different from traditional revenue sharing?",
    answer:
      "With revenue sharing, payment depends on when devices actually sell on the secondary market — typically a 30 to 90 day cycle with values that can shift with the market. Accelerated buy-back evaluates assets upfront, locks in a fixed price, and pays quickly via check or wire so there's no waiting on resale.",
  },
  {
    question: "Why don't servers have fixed cutlines?",
    answer:
      "Server value depends on CPU generation, core count, RAM and storage configuration, intended use case (enterprise, lab, cloud), and current secondary market demand — all of which vary widely. Servers are assessed individually rather than against a standard threshold.",
  },
  {
    question: "What happens to devices that fall below the cutline?",
    answer:
      "Below-cutline devices move to certified data destruction, responsible recycling, and parts harvesting where applicable. Environmental compliance and data security are maintained even when there's no resale value to recover.",
  },
];

export default function ITADCutlines() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollLoader>
          <PageHeader
            eyebrow="IT Asset Recovery"
            title="ITAD Cutlines Explained: Which Devices Qualify for Revenue Sharing?"
            description="Cutlines decide whether a retired device generates revenue or moves straight to recycling. Knowing where the line falls — and why — is the difference between recovering value and quietly leaving it on the table."
          />
        </ScrollLoader>

        {/* Meta */}
        <ScrollLoader>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 my-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2025-12-30">December 30, 2025</time>
            </div>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>IT Asset Recovery</span>
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
                  src={ITADCutlinesImage}
                  alt="ITAD cutlines explained: device eligibility for revenue sharing"
                  className="w-full h-auto"
                  priority
                />
              </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
                <p className="text-justify">
                  ITAD cutlines are the eligibility thresholds providers use to decide whether retired devices are suitable for resale and revenue recovery, or whether they should move straight to responsible recycling. Cutlines reflect device age, hardware specifications, market demand, and resale value trends — the practical signals that determine whether a piece of hardware still has a buyer waiting for it.
                </p>
                <p className="text-justify">
                  Devices above the cutline qualify for resale programs and revenue sharing. Devices below it typically move to recycling or parts recovery. Understanding where the line sits before decommissioning is what turns disposition from a cost center into a recovery opportunity.
                </p>
              </div>
            </ScrollLoader>

            {/* Cutlines & Revenue */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  How Cutlines Affect Revenue Sharing
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Cutlines directly determine whether retired assets earn money or simply cost money to dispose of. Devices above the threshold are resold in secondary markets and the proceeds are shared with the originating organization. Devices below it are securely recycled — environmentally and compliantly handled, but with no resale revenue attached.
                  </p>
                  <p className="text-justify">
                    Knowing where current cutlines sit before refresh cycles begin allows organizations to time decommissioning strategically, prioritize fleets that still hold value, and avoid scrapping equipment that could have generated meaningful return.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Revenue Sharing vs Buy-Back Comparison */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Revenue Sharing vs Accelerated Buy-Back
                </h2>
                <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Two payment structures dominate the recovery side of ITAD. They serve different priorities — one optimizes for absolute return, the other for speed and predictability.
                </p>

                <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left bg-white dark:bg-dark-secondary">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Aspect</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Traditional Revenue Sharing</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Accelerated Buy-Back</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Payment Timing</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Depends on resale</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Issued upfront</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Final Value</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Subject to market shifts</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Fixed at evaluation</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Payout Cycle</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">30 to 90 days</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Immediate via check or wire</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Best Suited For</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Maximizing total return</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Speed and predictability</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mt-8">
                  Many organizations now lean toward accelerated buy-back because the certainty of immediate payment outweighs the modest upside that resale timing might capture.
                </p>
              </section>
            </ScrollLoader>

            {/* How Buy-Back Works */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  How Integritrade&apos;s Accelerated Buy-Back Works
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    The buy-back process is designed to remove the uncertainty that comes with resale-dependent payouts. Each engagement follows the same four steps, in sequence.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      1. Quote
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Integritrade reviews the asset list and quotes a purchase price for eligible material upfront, before any logistics begin.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      2. Evaluate
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Once received, devices are evaluated and processed against the agreed specifications and condition expectations.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      3. Process
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      The full ITAD package is delivered alongside the buy-back: secure logistics, certified data destruction, and complete reporting for audit and compliance purposes.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      4. Payment
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Payment is issued without waiting for the items to sell. Speed, predictability, and immediate value recovery are the design goals.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Laptop Cutlines */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Laptop Cutlines: Which Models Qualify?
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Laptops are typically the highest-value asset class in ITAD programs, and their cutlines are correspondingly clear. The thresholds reflect what the secondary market is actually buying right now.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Apple MacBooks: M1 chip or newer
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Apple Silicon devices hold strong resale demand because of their performance, battery longevity, and continuing OS support. Intel-based MacBooks fall outside most current cutlines as macOS support narrows.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Intel laptops: 10th-generation processors or newer
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Older generations typically fall below the cutline as performance limitations and weakening demand make them unattractive to refurbishers and end buyers.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Minimum quantity: 25 laptops
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Revenue-sharing and buy-back programs typically require at least 25 laptops to qualify. There&apos;s flexibility for high-end models or mixed lots with strong overall value, so smaller volumes can still be considered when the asset mix justifies it.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Mobile & Tablet Cutlines */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Smartphone and Tablet Cutlines
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Mobile devices retain resale value within a narrower window than laptops. Both phones and tablets generally need to be no more than four years old to qualify, with condition and OS support determining where individual devices land.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Cell phones: four years old or newer
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Older devices typically fall below the cutline due to reduced OS support, battery degradation, and lower secondary market demand. Flagship models often hold value slightly longer than mid-tier devices in the same age band.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Tablets: similar window, brand-dependent
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Tablets follow resale patterns close to smartphones but vary noticeably by brand and model line. They generally qualify if they&apos;re four years old or newer, in functional condition, and supported by current operating systems.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Server Cutlines */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Server Cutlines: Why They Vary
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Servers don&apos;t carry fixed cutlines the way laptops or phones do. Their value depends on a combination of factors that shift with market conditions and use case, which is why every server lot is assessed individually rather than against a standard threshold.
                  </p>
                  <p className="text-justify">
                    Key evaluation factors include CPU generation and core count, RAM and storage configuration, intended use case — enterprise, lab, or cloud — and current secondary market demand at the time of disposition. Performance specifications, scalability, and timing all feed into the final assessment, which is why a custom evaluation is the only honest way to price retired server hardware.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Below Cutline */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  What Happens to Devices Below the Cutline
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Devices that fall below the cutline don&apos;t simply disappear into a recycling stream. They move through certified data destruction, responsible recycling, and parts harvesting where applicable — the same security and environmental controls that apply to higher-value assets.
                  </p>
                  <p className="text-justify">
                    Data security and compliance are non-negotiable regardless of resale value: secure data wiping aligned with NIST 800-88, complete chain-of-custody documentation, and regulatory compliance reporting are produced for every device. Below-cutline simply means no resale revenue attached, not reduced security or accountability.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Flexibility */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Flexibility in ITAD Cutlines
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Cutlines are guidelines, not rigid rules. Several factors can extend eligibility beyond the standard thresholds, which is why a quick conversation often reveals more recoverable value than a strict reading of the specs would suggest.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Large-volume projects
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Bulk quantities can warrant special consideration even when individual devices sit close to the threshold, because the aggregate value of the lot justifies the processing.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Premium device models
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      High-end or specialized equipment often carries extended eligibility because secondary demand for these models holds longer than for mainstream hardware.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Mixed asset lots
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Combinations that include enough strong assets to anchor the lot can qualify as a whole, even when individual items sit on the wrong side of the line.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* How to Know */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  How to Know If Your Devices Qualify
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Determining eligibility doesn&apos;t require deep ITAD expertise — it requires good inventory data and a willingness to ask the right questions early. The process breaks down into four straightforward steps.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      1. Inventory your assets
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Document every device by make, model, and specifications. Accurate inventory is the foundation for everything that follows.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      2. Check specifications
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Verify processor type and generation, age, and overall condition. These are the data points cutlines are built around.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      3. Assess quantity
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Determine total volume and the mix of devices. The composition of the lot often matters as much as the individual devices in it.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      4. Request expert evaluation
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      A professional ITAD assessment confirms cutline status, identifies the optimal program, and produces a complete recovery plan including asset valuation, secure logistics, and data destruction reporting.
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
                    Cutlines aren&apos;t arbitrary lines drawn through an inventory list — they&apos;re a reflection of what the secondary market values right now. Understanding where they sit before refresh cycles begin is what separates organizations that recover meaningful value from those that treat all retired equipment as scrap.
                  </p>
                  <p className="text-justify">
                    The right ITAD partnership turns the question of eligibility into a concrete recovery plan: accurate valuation upfront, secure handling throughout, audit-ready documentation at the end, and a payment structure that fits how the business actually wants to recognize the value.
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