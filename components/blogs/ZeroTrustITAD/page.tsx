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

import ZeroTrustITADImage from "@/public/blogs/ZeroTrustITADImage.png";

const faqs = [
  {
    question: "What is zero-trust and why does it apply to hardware?",
    answer:
      "Zero-trust is a security model built on the principle of \u201Cnever trust, always verify.\u201D It applies to every entity in the IT environment, including hardware. Retired devices that still hold data are part of the attack surface and must be verified and documented all the way through disposal not assumed safe once they leave active use.",
  },
  {
    question: "How does ITAD support a zero-trust framework?",
    answer:
      "ITAD extends zero-trust to the end-of-life stage. Serial number tracking, certified data erasure, sealed chain of custody, and audit documentation ensure that decommissioned devices are verified and secured rather than simply forgotten in a closet or handed to an unverified recycler.",
  },
  {
    question: "Why is a Certificate of Erasure important for zero-trust compliance?",
    answer:
      "In a zero-trust model, verbal confirmation isn\u2019t enough. A Certificate of Erasure provides software-generated, forensic-level proof that data was securely deleted to NIST 800-88 standards. It serves as the auditable last verification for every retired device.",
  },
  {
    question: "Can hardware be resold and still comply with zero-trust?",
    answer:
      "Yes. Zero-trust doesn\u2019t require physical destruction of all hardware. When data is properly erased to NIST 800-88 standards and a COE is issued, the device is safe for reuse or resale without compromising the security posture.",
  },
  {
    question: "What makes a general recycling company a risk under zero-trust?",
    answer:
      "Zero-trust treats third-party vendors as untrusted by default. General recyclers can\u2019t provide a documented chain of custody, certified data destruction, or audit trail meaning there\u2019s no verifiable control over what happens to data after handoff. A certified ITAD vendor closes that gap with documentation that satisfies the model\u2019s verification requirements.",
  },
];

export default function ZeroTrustITAD() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollLoader>
          <PageHeader
            eyebrow="Zero-Trust Security & ITAD"
            title="The Relationship Between Zero-Trust Security and ITAD"
            description="Zero-trust isn&apos;t just for the network. It&apos;s for the hardware, too and most security models stop verifying exactly where the real exposure begins: at end-of-life."
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
              <span>Zero-Trust Security</span>
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
                  src={ZeroTrustITADImage}
                  alt="The relationship between zero-trust security and ITAD"
                  className="w-full h-auto"
                  priority
                />
              </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
                <p className="text-justify">
                  Zero-trust has become the benchmark in cybersecurity. Most organizations implement it across software, cloud, and network access controls and stop there. The hardware end-of-life stage typically falls outside the scope, creating a significant blind spot exactly where the real data risk lives.
                </p>
                <p className="text-justify">
                  A genuine zero-trust model applies to deprecated hardware just as much as it does to active devices. That&apos;s where ITAD becomes critical: it&apos;s the discipline that closes the verification gap between when a device leaves the network and when its data is verifiably destroyed.
                </p>
              </div>
            </ScrollLoader>

            {/* Verify the Device */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Verify the Device Through End-of-Life
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    One of zero-trust&apos;s core principles is verifying the identity and data access of every device, continuously. Once a server or laptop is disconnected from the network, it usually drops off the managed-device list entirely exits the MDM, exits the asset register, exits the security perimeter. Yet the data remains on the drive, often for months or years, waiting to be discovered when nobody&apos;s watching.
                  </p>
                  <p className="text-justify">
                    Professional ITAD closes that gap by tracking the serial number of every device through final disposition. No device disappears from the system; every asset&apos;s final destination is documented and verified. Zero-trust verification extends all the way through end-of-life rather than ending at decommission.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Verified Data Sanitization */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Verified Data Sanitization
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Zero-trust leaves no room for &ldquo;telling&rdquo; or &ldquo;trusting.&rdquo; The IT team may say they formatted the drives, but verbal confirmation isn&apos;t verification and a standard OS format doesn&apos;t securely erase data. Residual information remains recoverable through forensic tools even after a factory reset or quick format, leaving the organization exposed long after the team believes the work is done.
                  </p>
                  <p className="text-justify">
                    Software-generated Certificates of Erasure (COE) replace assurance with proof. Every device receives forensic-level documentation confirming the sanitization standard applied typically NIST 800-88 with serialized records that hold up to audit. The audit trail becomes the final verification step in the zero-trust model: documented, tamper-proof, and compliance-ready.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Supply Chain Security */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Supply Chain Security
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    Zero-trust treats every third-party vendor as untrusted by default. Handing retired devices to a general recycling company immediately breaks the chain of custody and removes any meaningful control over what happens to the data. Non-certified recyclers have no obligation to document downstream handling, which means hardware and the data on it can end up anywhere in the secondary market without your visibility.
                  </p>
                  <p className="text-justify">
                    Certified ITAD vendors complement zero-trust by digitally logging every step from device collection through final destruction. Each handoff is documented, each downstream partner is vetted, and each transfer is auditable. Supply chain security holds up because it&apos;s built to and the documentation produced satisfies regulators rather than requiring after-the-fact reconstruction.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Hardware Resale vs Zero-Trust */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Hardware Resale vs Zero-Trust
                </h2>
                <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="text-justify">
                    A common misconception holds that zero-trust requires physically destroying all retiring hardware. It doesn&apos;t. The result of that assumption is unnecessary e-waste and lost asset value, when proper data erasure delivers the same security outcome at a fraction of the environmental and financial cost.
                  </p>
                  <p className="text-justify">
                    When data is destroyed to NIST 800-88 standards with verifiable COE documentation, the device itself is safe for reuse or resale without compromising the zero-trust posture. ITAD makes profit and security fully compatible recovering value from retired assets while maintaining the verification rigor that zero-trust demands.
                  </p>
                </div>
              </section>
            </ScrollLoader>

            {/* Zero-Trust Meets ITAD */}
            <ScrollLoader>
              <section className="mb-16">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                  Where Zero-Trust Meets ITAD
                </h2>
                <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  The four foundational principles of zero-trust map directly onto specific ITAD controls. The structural alignment is what makes ITAD an extension of zero-trust rather than a separate concern.
                </p>

                <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                  <table className="w-full text-left bg-white dark:bg-dark-secondary">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">Zero-Trust Principle</th>
                        <th className="px-6 py-4 text-sm font-semibold font-serif text-gray-900 dark:text-white">ITAD Implementation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Always verify</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Serial-number tracking and digital chain of custody for every retired device</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Never trust, prove it</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Software-generated Certificates of Erasure replacing verbal assurances</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Minimize attack surface</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Proper destruction eliminating dormant data risks from retired assets</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Assume breach</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Treating every retired device as a threat vector until verified and documented</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">Vendor untrust by default</td>
                        <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Certified providers with auditable downstream traceability</td>
                      </tr>
                    </tbody>
                  </table>
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
                    A zero-trust security model remains incomplete without the disposal and decommissioning stages of IT assets. Genuine zero-trust requires full control and irrefutable proof of every step from a device&apos;s birth through its final disposition not just the parts of the lifecycle that are easy to monitor.
                  </p>
                  <p className="text-justify">
                    IntegriTrade closes the last step of the zero-trust journey, where security and transparency stay aligned with the rest of the framework rather than quietly drifting away once devices leave active service.
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