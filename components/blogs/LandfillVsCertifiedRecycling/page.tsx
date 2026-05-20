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

import LandfillRecyclingImage from "@/public/blogs/LandfillRecyclingImage.jpg";

const faqs = [
  {
    question: "Why is throwing electronics in a regular landfill dangerous?",
    answer:
      "Electronics contain toxic heavy metals such as lead, mercury, cadmium, and arsenic. In landfills these substances leach into soil and groundwater, contaminating drinking water and farmland. Burning landfill waste also releases dioxins and furans, both linked to cancer and respiratory illness.",
  },
  {
    question: "What precious metals can be recovered from old electronics?",
    answer:
      "Smartphones, laptops, and hard drives contain recoverable gold, silver, copper, and palladium. Certified recycling extracts and reuses these materials, reducing the demand for environmentally destructive mining operations.",
  },
  {
    question: "How does certified recycling reduce a company's carbon footprint?",
    answer:
      "Recovering metals from existing electronics requires significantly less energy than extracting new metals from mines. The reduction in energy use directly lowers greenhouse gas emissions, helping organizations measurably reduce their overall carbon footprint.",
  },
  {
    question: "What does a zero-landfill policy mean in practice?",
    answer:
      "Every component of every device processed is either refurbished for reuse, resold, or broken down into raw materials by certified downstream partners. Nothing is sent to a general landfill at any point in the process.",
  },
  {
    question: "Is e-waste disposal a legal obligation for businesses?",
    answer:
      "Yes. Regulations including HIPAA, GDPR, and various California and federal environmental laws require organizations to dispose of electronic devices responsibly. Improper disposal can result in fines, legal liability, and reputational damage. Working with a certified ITAD vendor ensures full compliance.",
  },
];

export default function LandfillVsCertifiedRecycling() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollLoader>
          <PageHeader
            eyebrow="E-Waste & Environmental Impact"
            title="Landfill vs Certified Recycling: Which Is Better for the Environment?"
            description="An old laptop in a landfill is a slow-release toxic event. The same device through certified recycling becomes recovered raw materials. The difference between the two outcomes is measured in decades of contamination."
          />
        </ScrollLoader>

        {/* Meta */}
        <ScrollLoader>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 my-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2026-03-04">March 4, 2026</time>
            </div>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>E-Waste Recycling</span>
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
                  src={LandfillRecyclingImage}
                  alt="Landfill vs certified recycling environmental impact"
                  className="w-full h-auto"
                  priority
                />
              </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
                <p className="text-justify">
                  When an old laptop or hard drive gets thrown out, it doesn&apos;t just disappear. The path it takes from there determines whether it slowly poisons the soil and groundwater for decades, or whether the materials inside it are recovered and put back into productive use.
                </p>
                <p className="text-justify">
                  The decisions organizations make today about retired electronics shape the environment ahead and there&apos;s a meaningful gap between the worst path and the right one.
                </p>
              </div>
            </ScrollLoader>

            {/* Why Electronics Don't Belong in Landfills */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Why Electronics Don&apos;t Belong in Landfills
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Electronics in general landfills cause damage that&apos;s slow, severe, and difficult to reverse. The harm comes from three connected pathways, each affecting a different part of the environment.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Toxic heavy metals leaching into soil
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Electronics contain lead, mercury, cadmium, and arsenic substances that bind to soil in landfills and contaminate the surrounding ground for decades. The damage doesn&apos;t stop at the landfill boundary.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Groundwater contamination
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Toxic chemicals mix with rainwater and migrate downward into the groundwater table. From there they reach drinking water supplies and agricultural land, far from where the original waste was deposited.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Air pollution from burning
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Landfill waste is often incinerated, which releases dioxins and furans into the air both linked to cancer and serious respiratory illness. The communities downwind from the burn sites carry the public health cost.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Comparison Table */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Landfill vs Certified Recycling: Side by Side
                </h2>
                <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Comparing the two paths directly makes the operational and environmental gap impossible to ignore.
                </p>

                <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left bg-white dark:bg-dark-secondary">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Aspect</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Landfill Disposal</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Certified Recycling</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Soil and Water Impact</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Heavy metal contamination</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Contained and processed</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Air Quality</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Toxic emissions if burned</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">No combustion required</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Resource Recovery</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">None</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Gold, silver, copper, palladium</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Carbon Footprint</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">High (replacement mining)</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Significantly lower</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Regulatory Compliance</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Often illegal in California and other states</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Audit-ready under R2v3</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Long-term Liability</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Unbounded</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Documented and closed</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollLoader>

            {/* Certified Recycling */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Certified Recycling: A Sustainable Alternative
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    R2v3 and equivalent certified recycling processes do the opposite of landfill disposal: they actively protect the environment while recovering meaningful value from retired electronics. The benefits compound across three dimensions.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Resource recovery from precious metals
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Smartphones, laptops, and servers contain meaningful quantities of gold, silver, copper, and palladium. Certified recycling recovers these metals and feeds them back into manufacturing supply chains, reducing the demand for environmentally destructive raw mining.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Lower carbon footprint
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Recovering metals from existing electronics requires far less energy than extracting new metals from mines. The reduction in energy use translates directly into lower greenhouse gas emissions and a smaller environmental footprint for organizations that choose certified recycling over disposal.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Zero landfill outcomes
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Certified vendors operating zero-landfill policies ensure no part of any device ends up in a landfill. Each component is either refurbished for reuse or separated into raw materials for responsible processing through certified downstream partners.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* Why Choose IntegriTrade */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Why Choose IntegriTrade LLC?
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    E-waste management isn&apos;t just a legal obligation it&apos;s a moral one. IntegriTrade adheres strictly to environmental standards and ensures every device handled goes through an environmentally responsible workflow from intake to final disposition.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      R2v3-certified processes
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Every device passes through R2v3 certified workflows, ensuring the highest environmental and data security standards apply across the full disposition process.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Full accountability and documentation
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Every component is tracked from collection through final disposition, with complete documentation provided to the client at project close.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Nothing goes to landfill
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Materials are refurbished, resold, or responsibly broken down by certified downstream partners. The zero-landfill commitment isn&apos;t marketing language; it&apos;s how the workflow is built.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollLoader>

            {/* San Francisco Interlink */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  E-Waste Recycling Services in San Francisco
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Looking for responsible e-waste recycling in San Francisco? IntegriTrade LLC provides certified electronics recycling services that ensure safe disposal of IT equipment without harming the environment.
                  </p>
                  <p className="text-justify">
                    Our R2v3-certified process focuses on zero landfill, resource recovery, and secure handling of all devices helping your organization reduce environmental impact while staying compliant with industry regulations.
                  </p>
                  <p className="text-justify">
                    <Link
                      href="/service-area/san-francisco/e-waste-recycling/"
                      className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      Explore E-Waste Recycling Services in San Francisco →
                    </Link>
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
                    The choice between landfilling and certified recycling isn&apos;t just an operational decision. It&apos;s an environmental and ethical one. Every device an organization retires is an opportunity either to harm the environment or to keep recoverable materials in productive use and the difference is decided at the point of disposition, not afterward.
                  </p>
                  <p className="text-justify">
                    IntegriTrade LLC has maintained a clean record with no history of data breach and operates a verified zero-landfill workflow. When data security and environmental responsibility both matter, they shouldn&apos;t be a trade-off and they don&apos;t have to be.
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