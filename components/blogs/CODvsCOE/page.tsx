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

import CODvsCOEImage from '@/public/blogs/CODvsCOEImage.jpg';
import ScrollLoader from '@/components/shared/ScrollLoader';

export default function CODvsCOE() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollLoader>
        <PageHeader
          eyebrow="ITAD Explained"
          title="COD vs COE: Which Is Best for Your Organization&apos;s Data Security?"
          description="A Certificate of Destruction is no longer enough on its own. Software-generated Certificates of Erasure and digital audit trails are what modern compliance and downstream security actually require."
        />
        </ScrollLoader>

        {/* Meta Information */}
        <ScrollLoader>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 my-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime="2026-02-26">February 26, 2026</time>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>ITAD Explained</span>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <span>6 min read</span>
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
                src={CODvsCOEImage}
                alt="COD vs COE: Which is better for your data security?"
                className="w-full h-auto"
                priority
              />
            </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
              <p className="text-justify">
                Two documents are commonly used as proof of data destruction in IT Asset Disposition: the Certificate of Destruction (COD) and the Certificate of Erasure (COE). They are often treated as interchangeable, but the difference between them is significant and choosing the wrong one can leave your organization exposed during an audit or after a data breach.
              </p>
              <p className="text-justify">
                Understanding what each certificate actually proves is the first step toward a defensible data sanitization program.
              </p>
            </div>
            </ScrollLoader>

            {/* Section 1: COD */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight font-serif">
                What a Certificate of Destruction (COD) Actually Proves
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  A COD is a general declaration issued by a recycling or destruction provider, confirming that hardware was received and physically destroyed. It typically lists the device type, weight, and date of destruction.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    A manual, process-based document
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    A COD is generally created by the destruction provider&apos;s staff. It documents that a physical process took place, but it relies on the provider&apos;s word rather than a verifiable, per-device technical record.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    What it does not confirm
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    A COD does not prove that every data sector on a drive was successfully overwritten or rendered unrecoverable. It confirms that destruction happened, not that data was verifiably eliminated before or during the process.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Section 2: COE */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight font-serif">
                Why a Certificate of Erasure (COE) Is More Powerful
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  A COE is a technical record produced by certified data sanitization software rather than a hand-written summary. It documents the sanitization of each individual device with verifiable detail.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Software-generated and tamper-resistant
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    COEs are produced directly by sanitization tools such as Blancco or WhiteCanyon and delivered as encrypted PDFs that cannot be edited or forged after generation.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Per-device audit trail
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Each COE captures the device model, unique serial number, timestamp, sanitization standard applied (such as NIST 800-88 or DoD 5220.22-M), and a digital signature confirming a successful wipe.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Verifiable, not declarative
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Where a COD declares that something happened, a COE proves it with cryptographic evidence that holds up to internal review and external audit.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Section 3: Comparison Table */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight font-serif">
                COD vs COE at a Glance
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                The practical differences become clear when the two documents are compared side by side.
              </p>

              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                <table className="w-full text-left bg-white dark:bg-dark-secondary">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <th className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Aspect</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Certificate of Destruction</th>
                      <th className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Certificate of Erasure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Generation</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Manual, vendor-issued</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Software-generated</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Format</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Standard document</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Tamper-resistant PDF</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Per-Device Detail</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Aggregate (type, weight)</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Serial-level audit trail</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Data Verification</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Not verified</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Cryptographically signed</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Audit Strength</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Limited</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Defensible</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Asset Reuse</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Not applicable</td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Enables resale and reuse</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            </ScrollLoader>

            {/* Section 4: Why COE matters */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight font-serif">
                Why COE Matters for Your Business
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  If your organization operates under HIPAA, GDPR, or R2V3 requirements, a COD on its own rarely satisfies an auditor. A COE provides the verifiable evidence those frameworks expect and offers practical advantages beyond compliance.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Transparent, drive-level proof
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Each drive has its own record showing exactly when it was sanitized, by what method, and with what result removing ambiguity from your reporting.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Stronger legal and regulatory position
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    In the event of a breach investigation or audit, a verified COE serves as defensible evidence that your organization performed proper data sanitization on every retired asset.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Higher return on retired assets
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Drives certified clean by COE can be safely resold or redeployed instead of destroyed, keeping working hardware in the value chain and improving overall ROI on your IT refresh.
                  </p>
                </div>
              </div>
            </section>
            </ScrollLoader>

            {/* Section 5: Hybrid Approach */}
            <ScrollLoader>
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight font-serif">
                The Hybrid Approach: COE + COD
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  For maximum security, the strongest programs combine both certificates in a double-layer process. Each step covers a different risk and produces its own form of evidence.
                </p>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Step one: verified digital wipe
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Data is sanitized using certified software and a COE is generated, confirming that the contents of the drive cannot be recovered through digital means.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Step two: physical destruction when required
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    For environments that mandate physical destruction, the wiped drive is then shredded and a COD is issued to document the final disposition.
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Why wipe before shredding
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    Modern forensic techniques can sometimes recover data from drive fragments. Wiping before destruction closes that gap and ensures sensitive information is unrecoverable regardless of what happens downstream.
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
                    What is the difference between COD and COE?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      A COD is a manual document confirming physical destruction of hardware. A COE is a software-generated, tamper-resistant PDF proving that every data sector was digitally wiped and verified at the device level making it far more reliable for compliance and audits.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white text-left">
                    Is a COD enough for HIPAA or GDPR compliance?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Generally no. HIPAA, GDPR, and R2V3 expect documented proof that data was verifiably erased, which only a software-generated COE with a per-device audit trail can provide.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white text-left">
                    What sanitization standards appear on a COE?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      COEs from certified tools like Blancco or WhiteCanyon document the standard applied such as NIST 800-88 or DoD 5220.22-M alongside serial numbers, timestamps, and digital verification signatures.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white text-left">
                    Can a COE help improve my ROI?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      Yes. A drive certified clean by COE can be resold or redeployed rather than destroyed, keeping working hardware in the value chain and significantly improving returns compared to mandatory physical destruction.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white text-left">
                    Does IntegriTrade LLC provide COD, COE, or both?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      IntegriTrade LLC provides software-generated COEs and professional CODs for every device processed. Our double-layer protection approach (digital wipe followed by physical shredding where required) ensures your data sanitization is both secure and audit-friendly.
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
                Why IntegriTrade LLC?
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  Would you trust your organization&apos;s critical data to a single paper Certificate of Destruction? At IntegriTrade LLC, every device receives a software-generated COE and a professional COD, giving you both verifiable digital proof and physical disposition records under one process.
                </p>
                <p className="text-justify">
                  Transparent workflows, certified tools, and a zero-data-breach record are what set our program apart. When data security is the priority, the choice of ITAD partner is just as important as the certificates they produce.
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