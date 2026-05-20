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

import ServerDisposalImage from "@/public/blogs/ServerDisposalImage.png";

const faqs = [
  {
    question: "Why can't I just format the drives in old servers?",
    answer:
      "Server drives are typically configured in RAID arrays, which makes standard formatting tools completely ineffective. Proper sanitization requires specialized software addressing each drive individually under NIST 800-88 standards, with a verifiable audit trail per drive.",
  },
  {
    question: "Can old server components really be resold?",
    answer:
      "Yes. Enterprise CPUs, ECC RAM, SSDs, GPUs, and power supplies often retain significant secondary-market value even when the overall server is end-of-life. A certified ITAD partner can identify which components produce the strongest returns through global buyer networks.",
  },
  {
    question: "Is it safe to ship servers with a regular courier?",
    answer:
      "No. Servers contain sensitive data and are physically valuable. Standard couriers provide no chain of custody, no GPS tracking, and no accountability for missing devices. Certified ITAD logistics use sealed containers, GPS monitoring, and documented handoffs at every stage.",
  },
  {
    question: "What environmental risks do decommissioned servers pose?",
    answer:
      "Servers contain hazardous materials like lead and cadmium that can leach into soil and groundwater if landfilled, alongside recoverable metals including copper, gold, and palladium. Certified recycling manages both, preventing contamination and recovering materials for reuse.",
  },
  {
    question: "What documentation will I receive?",
    answer:
      "A full Certificate of Destruction (COD), per-drive Certificates of Erasure (COE), and a complete inventory report accounting for every asset processed. The documentation satisfies audit and compliance requirements under HIPAA, GDPR, SOX, and SOC 2.",
  },
];

export default function ServerDataCenterDisposal() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollLoader>
          <PageHeader
            eyebrow="Server & Data Center Disposal"
            title="Server and Data Center Equipment Disposal Guide"
            description="Decommissioning a data center isn&apos;t as simple as unplugging hardware. Servers, storage arrays, and networking gear hold an organization&apos;s most valuable asset and the wrong handoff turns retirement into financial and compliance exposure."
          />
        </ScrollLoader>

        {/* Meta */}
        <ScrollLoader>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 my-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime="2026-03-15">March 15, 2026</time>
            </div>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>Data Center ITAD</span>
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
                  src={ServerDisposalImage}
                  alt="Server and data center equipment disposal guide"
                  className="w-full h-auto"
                  priority
                />
              </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
                <p className="text-justify">
                  Decommissioning a modern data center is more involved than most teams initially plan for. Servers, storage arrays (SAN/NAS), and networking gear contain an organization&apos;s most valuable asset its data and when these systems reach end-of-life, improper handling creates real financial, security, and compliance risk.
                </p>
                <p className="text-justify">
                  A practical EOL server program covers four disciplines that work together: data sanitization, hardware value recovery, secure logistics, and certified recycling. Each one matters on its own, and skipping any of them undermines the rest.
                </p>
              </div>
            </ScrollLoader>

            {/* Data Sanitization */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Data Sanitization and Security
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Server drives are typically configured in RAID arrays, which makes standard formatting and disk utilities completely ineffective for secure data removal. The data isn&apos;t where the operating system thinks it is, and consumer-grade wipe tools can&apos;t reach the locations that matter.
                  </p>
                  <p className="text-justify">
                    Proper sanitization follows the NIST 800-88 standard. Each drive must be sanitized individually with a complete audit trail and per-drive Certificate of Erasure documenting the method applied and the outcome verified. For drives containing highly sensitive data, in-rack physical shredding using industrial-grade equipment ensures 100 percent destruction before hardware ever leaves the facility removing the chain-of-custody risk that transport always introduces.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Hardware Value Recovery */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Hardware Value Recovery
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Many data center components hold significant value in the secondary market high-end CPUs, ECC RAM modules, enterprise SSDs, GPUs, and power supplies routinely outperform whole-server resale on a per-component basis. The whole server may be retired, but the parts inside frequently aren&apos;t.
                  </p>
                  <p className="text-justify">
                    A skilled ITAD partner evaluates which assets sell better as complete units versus harvested components, and uses access to global buyer networks to time resale strategically. Component pricing fluctuates with market supply and demand cycles, and an experienced vendor with active secondary-market presence can capture meaningfully higher returns than internal teams handling disposition occasionally.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Safe Transportation */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Safe Transportation and Logistics
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Servers and racks are heavy, expensive, and data-bearing all at once. Standard couriers provide no chain-of-custody documentation, no GPS tracking, and no accountability if a device goes missing in transit. The lack of documented handoffs is exactly where most disposition exposures originate.
                  </p>
                  <p className="text-justify">
                    Certified ITAD logistics close that gap. Every item travels in sealed containers tracked via GPS, with documented transfers at every handoff between your facility and the processing center. Using a vendor with its own dedicated logistics team rather than a third-party courier eliminates the gaps that introduce risk in the first place.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Environmental Recycling */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Environmental Recycling
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Servers contain meaningful quantities of recoverable copper, gold, and palladium alongside hazardous elements like lead and cadmium. Both characteristics matter at end-of-life: the precious metals represent recovery opportunity, and the hazardous materials require responsible handling to prevent soil and groundwater contamination.
                  </p>
                  <p className="text-justify">
                    R2v3-certified recycling routes every component to qualified downstream processors with full documentation of the recycling chain. Precious metals are recovered and reused; hazardous materials are processed safely; nothing is sent to landfill. The certification is what makes the environmental claim defensible, not just the workflow.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* DIY vs Certified ITAD */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  DIY Disposal vs Certified ITAD
                </h2>
                <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  Internal handling and certified ITAD share the same starting point a rack of retired servers but produce very different outcomes across the four disciplines that matter.
                </p>

                <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left bg-white dark:bg-dark-secondary">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Aspect</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">DIY Disposal</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Certified ITAD</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Data Sanitization</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Format only, RAID-incompatible</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">NIST 800-88 verified per drive</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Documentation</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Minimal or none</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">COE, COD, full inventory</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Logistics</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Standard courier</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">GPS-tracked, sealed transport</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Value Recovery</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Limited or none</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Component-level resale</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Recycling</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Often landfill-bound</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">R2v3 zero-landfill</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Liability</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Open-ended</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Documented and bounded</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </ScrollLoader>

            {/* Fresno Interlink */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Serving Fresno Businesses: On-Site Hard Drive Shredding
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    For Fresno businesses handling sensitive data, physical shredding remains the only method that guarantees 100 percent destruction. Industrial-grade shredding pulverizes hard drives and SSDs into unrecoverable fragments, meeting strict NIST 800-88 security standards and producing audit-ready documentation per device.
                  </p>
                  <p className="text-justify">
                    For compliant{' '}
                    <Link
                      href="/hard-drive-shredding-fresno"
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      hard drive shredding in Fresno
                    </Link>
                    , we provide a Certificate of Destruction with every project, ensuring legal and compliance peace of mind from intake through final disposition.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* How IntegriTrade Works */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  How IntegriTrade Handles Data Center Decommissioning
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    IntegriTrade operates a specialized team built for large-scale data center decommissioning projects, from initial inventory through final reporting.
                  </p>
                </div>

                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      On-site and off-site sanitization
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Data destruction happens at your facility or at our processing center, depending on what fits your security and operational requirements. The choice is yours; the certified workflow stays the same either way.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Per-asset tracking
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Detailed inventory reports cover every server and every drive from collection through final disposition, with serial-level documentation that holds up to audit. Nothing goes unaccounted for.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Maximum value recovery
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      A global buyer network ensures the strongest available market prices for enterprise equipment, turning decommissioned assets into capital that can offset the cost of the next refresh cycle.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Transparent reporting
                    </h3>
                    <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                      Every project closes with a full Certificate of Destruction, per-drive Certificates of Erasure, and a comprehensive inventory report documents your audit and compliance teams can use directly without follow-up requests.
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
                    Decommissioning a data center without a structured plan puts data, finances, and compliance standing at serious risk simultaneously. Every retired server is either a liability or an opportunity, and the difference is decided entirely by how the disposition is handled not by the equipment itself.
                  </p>
                  <p className="text-justify">
                    IntegriTrade LLC has maintained a clean record with no history of data breach. When data security, asset value, and environmental responsibility all need to land in the same place, working with a certified ITAD partner is what makes that possible at the scale data center retirement actually requires.
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