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

import OfficeDevicesRiskImage from "@/public/blogs/OfficeDevicesRiskImage.png";

const faqs = [
  {
    question: "Why is storing old laptops in a supply closet risky?",
    answer:
      "Old devices in office closets create data liability, physical hazards from degraded lithium-ion batteries, and ongoing financial losses through depreciation. A closet provides none of the access controls or audit documentation needed to protect sensitive data.",
  },
  {
    question: "How fast do old office devices lose their value?",
    answer:
      "Electronics can lose up to 50 percent of their resale value within six months of storage. The longer a device sits without being refurbished or resold, the smaller the recoverable return becomes.",
  },
  {
    question: "Can old batteries in stored devices actually cause fires?",
    answer:
      "Yes. Lithium-ion batteries in laptops and smartphones can swell, leak toxic gases, or short-circuit if left unused for extended periods, creating real fire and health hazards in office storage areas.",
  },
  {
    question: "What is R2v3 Appendix B and why does it matter?",
    answer:
      "R2v3 Appendix B is the certified standard for responsible data destruction, covering both physical and logical methods. IntegriTrade complies with this standard and issues a Certificate of Destruction for every device as defensible evidence.",
  },
  {
    question: "How does IntegriTrade handle supply closet cleanout?",
    answer:
      "IntegriTrade performs a systematic cleanout, inventories every asset, securely destroys all data under R2v3 Appendix B standards, maintains a sealed chain of custody, and returns the maximum recoverable market value for retired devices.",
  },
];

export default function OfficeDevicesRisk() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollLoader>
          <PageHeader
            eyebrow="Asset Depreciation & Data Risk"
            title="The Risk and Depreciation of Old Office Devices"
            description="The old laptops, phones, and hard drives sitting in your supply closet aren&apos;t just clutter. They&apos;re a quiet liability draining value every month and creating data, fire, and compliance risks no closet was built to handle."
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
              <span>Asset Depreciation</span>
            </div>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <span>5 min read</span>
          </div>
        </ScrollLoader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          <article className="lg:col-span-2">

            {/* Hero Image */}
            <ScrollLoader>
              <figure className="mb-12 overflow-hidden rounded-lg">
                <Image
                  src={OfficeDevicesRiskImage}
                  alt="The risk and depreciation of old office devices"
                  className="w-full h-auto"
                  priority
                />
              </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
                <p className="text-justify">
                  Many organizations assume that storing retired laptops, phones, and hard drives in an office closet is the safe option. The reality is the opposite: a supply closet quietly turns into a data liability and a recurring source of financial loss the longer equipment sits there.
                </p>
                <p className="text-justify">
                  The damage shows up in four ways at once asset depreciation, data exposure, physical hazards from aging batteries, and hidden inventory costs. Each one is preventable when retired equipment moves promptly into a structured ITAD process.
                </p>
              </div>
            </ScrollLoader>

            {/* Asset Depreciation */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Asset Depreciation
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Electronics lose market value daily. A laptop left in storage for six months can lose up to half its resale value, simply because the secondary market keeps moving while the device sits idle. The longer disposition is delayed, the smaller the recoverable return becomes.
                  </p>
                  <p className="text-justify">
                    Retired assets sitting in storage generate zero return and continue eroding the balance sheet through ongoing depreciation. Acting promptly on refresh cycles is the single biggest factor in capturing recoverable value before it&apos;s gone.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Data Liability Risk */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Data Liability Risk
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Every hard drive, laptop, and smartphone in storage may still hold confidential information employee records, customer data, financial documents, and internal communications. An office closet provides none of the access control, audit logging, or chain-of-custody documentation that data protection actually requires.
                  </p>
                  <p className="text-justify">
                    If even one device leaves the closet without proper sanitization, the organization faces a corporate data breach with regulatory, legal, and reputational consequences. Office storage typically lacks access control over who enters, doesn&apos;t track which devices were handled by whom, leaves theft and unauthorized access undetected, and produces no audit trail when one is needed for HIPAA, GLBA, or GDPR review.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Battery Fire Hazard */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Lithium-Ion Battery Fire Hazard
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Lithium-ion batteries inside old laptops and smartphones don&apos;t age gracefully. Left unused for extended periods, they can swell, rupture, leak toxic gas, or short-circuit each one a real fire risk in an office storage area. The longer the equipment sits, the higher the probability of failure.
                  </p>
                  <p className="text-justify">
                    Swollen batteries can ignite if stored improperly. Degraded cells release toxic gases that pose health risks to staff working nearby. Short circuits in aging hardware are a documented cause of office fires. Insurance carriers increasingly treat unmanaged e-waste storage as a flagged risk during commercial property reviews.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Inventory Storage Costs */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Hidden Inventory Storage Costs
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Every square foot of office space carries a cost. Filling closets with retired electronics consumes space that could be repurposed productively, and the costs don&apos;t stop at floor area: management overhead to track idle inventory, insurance and liability exposure for stored equipment, and the lost opportunity cost from value that could have been recovered all add up to a meaningful recurring expense.
                  </p>
                  <p className="text-justify">
                    None of those costs appear on a single line item, which is exactly what makes them easy to overlook. Combined, they often exceed the cost of professional ITAD pickup several times over within the same calendar year.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* How IntegriTrade Helps */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  How IntegriTrade Helps
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    IntegriTrade&apos;s supply closet cleanout service turns retired equipment from a liability into a recoverable asset, with each step documented for audit and compliance review.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Systematic cleanout and inventory
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Every device is collected, inventoried, and accounted for, returning a complete record of what came out of storage and where it&apos;s headed in the disposition workflow.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Certified data destruction
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Data is destroyed using both logical sanitization and physical destruction methods aligned with R2v3 Appendix B standards, with a Certificate of Destruction issued for every device processed.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Sealed chain of custody
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Continuous tracking from pickup through final disposition, with documented transfers at every handoff makes the workflow defensible during audit and regulatory review.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Maximum value recovery
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Every device is evaluated for resale, refurbishment, or recycling so the assets you&apos;ve already paid for can help fund your next technology investment rather than continuing to depreciate in storage.
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
                    Storing old devices isn&apos;t a neutral decision. Every month equipment sits in a closet, value depreciates, data exposure compounds, and physical risks build all while professional disposition could turn the same equipment into recovered capital.
                  </p>
                  <p className="text-justify">
                    IntegriTrade LLC has maintained a clean record with no history of data breach. When data security, compliance, and asset recovery all need to land in the same place, working with a certified ITAD partner is what makes that possible.
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