import { Calendar, Tag } from "lucide-react";
import Image from "next/image";

import PageHeader from "@/components/shared/PageHeader";
import AllBlogCardsComponent from "@/components/EightBlogCards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import HIPAA from "@/public/blogs/HIPAA.jpg";
import ScrollLoader from "@/components/shared/ScrollLoader";

const contentBlocks = [
  {
    title: "Why HIPAA Compliance Matters in ITAD",
    details:
      "Healthcare organizations remain responsible for protected health information even after laptops, desktops, servers, drives, and medical-office devices are retired. If patient data is left on old hardware, the risk is not only technical. It can become a compliance issue, a legal issue, and a serious reputational problem.",
  },
  {
    title: "The Risk of Choosing the Wrong ITAD Vendor",
    details:
      "A low-cost or poorly controlled ITAD provider can expose your organization to unnecessary HIPAA risk. Retired equipment must be handled with documented custody, verified data destruction, and audit-ready reporting. Without those controls, your organization may have no reliable proof that PHI was properly destroyed.",
  },
  {
    title: "R2v3 Appendix B and Secure Data Handling",
    details:
      "For healthcare asset disposition, vendor certification matters. R2v3 Appendix B focuses on data security controls, including secure handling, traceability, and verified destruction. It helps confirm that data-bearing assets are not simply recycled, but processed through a documented security workflow.",
  },
  {
    title: "Logical Data Sanitization",
    details:
      "Logical sanitization uses certified software-based erasure to remove data from functioning drives while preserving hardware for resale or redeployment. For reusable assets, this method supports both HIPAA-aligned data protection and responsible IT asset recovery.",
  },
  {
    title: "Physical Drive Destruction",
    details:
      "When a drive is damaged, inaccessible, or not suitable for software erasure, physical destruction is the safer path. Shredding or destroying the media ensures data cannot be recovered from platters, chips, or storage components.",
  },
  {
    title: "Why Both Methods Are Necessary",
    details:
      "A HIPAA-conscious ITAD partner should support both logical erasure and physical destruction. Functional devices can be securely wiped and recovered for value, while damaged or high-risk media can be destroyed with documented evidence.",
  },
  {
    title: "Chain of Custody and Serial Number Tracking",
    details:
      "Every data-bearing asset should be tracked from pickup through final disposition. Serial number reporting, custody documentation, and destruction records create the paper trail your compliance, legal, and IT teams need during internal reviews or external audits.",
  },
  {
    title: "Certificate of Data Destruction",
    details:
      "A Certificate of Data Destruction provides formal confirmation that data-bearing media was processed according to the agreed destruction method. For healthcare organizations, this documentation is a key part of HIPAA-ready IT asset disposition.",
  },
  {
    title: "The IntegriTrade Difference",
    details:
      "IntegriTrade treats ITAD as a security and compliance process, not just electronics recycling. Our workflow is built around controlled handling, certified destruction options, transparent reporting, and responsible recovery for assets that still hold value.",
  },
  {
    title: "Your ITAD Vendor Is a Security Partner",
    details:
      "Healthcare organizations should not treat ITAD as a basic hauling service. The right vendor protects patient data, supports compliance documentation, and reduces risk throughout the full asset retirement lifecycle.",
  },
];

const faqs = [
  {
    question: "Why is HIPAA compliance important during IT asset disposition?",
    answer:
      "HIPAA compliance matters because retired IT assets may still contain protected health information. If that data is not securely erased or destroyed, the organization can remain exposed to compliance, legal, and reputational risk.",
  },
  {
    question: "What should healthcare organizations look for in an ITAD vendor?",
    answer:
      "Healthcare organizations should look for documented chain of custody, certified data destruction methods, serial number tracking, secure handling processes, and clear reporting after every project.",
  },
  {
    question: "Is software wiping enough for HIPAA-compliant ITAD?",
    answer:
      "Software wiping can be appropriate for working drives when performed through a verified sanitization process. However, damaged or inaccessible drives should be physically destroyed to prevent data recovery.",
  },
  {
    question: "What documentation should I receive after destruction?",
    answer:
      "You should receive a Certificate of Data Destruction along with asset-level reporting, serial numbers, destruction method details, and custody records where applicable.",
  },
];

export default function HIPAACompliance() {
  return (
    <section className="bg-secondary dark:bg-dark pb-16 pt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollLoader>
        <PageHeader
          eyebrow="HIPAA Compliance"
          title="HIPAA-Compliant ITAD: Why Secure Data Destruction Is a Legal Necessity"
          description="Healthcare organizations cannot afford careless IT asset disposal. Learn how certified ITAD, documented chain of custody, and verified data destruction help protect PHI and reduce HIPAA compliance risk."
        />
        </ScrollLoader>

        <ScrollLoader>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400 my-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <time dateTime="2026-02-11">February 11, 2026</time>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4" />
            <span>Data Security</span>
          </div>
          <span className="hidden sm:inline text-gray-300 dark:text-gray-700">•</span>
          <span>6 min read</span>
        </div>

        </ScrollLoader>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-20">
          <article className="lg:col-span-2">

            <ScrollLoader>
            <figure className="mb-12 overflow-hidden rounded-lg">
              <Image
                src={HIPAA}
                alt="HIPAA-compliant ITAD and secure data destruction process"
                className="w-full h-auto"
                priority
              />
            </figure>
            </ScrollLoader>

            <ScrollLoader>
            <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed mb-16">
              <p className="text-justify">
                Data breaches in healthcare are rarely treated as simple technical mistakes. When retired computers, servers, hard drives, or storage devices still contain patient data, the issue can quickly become a HIPAA compliance concern.
              </p>
              <p className="text-justify">
                That is why IT asset disposition should be handled as a security process. A qualified ITAD partner must protect PHI, document every step, and provide proof that data-bearing assets were properly sanitized or destroyed.
              </p>
            </div>
            </ScrollLoader>

            <ScrollLoader>
            <div className="space-y-14">
              {contentBlocks.map((block) => (
                <section key={block.title}>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-5 tracking-tight">
                    {block.title}
                  </h2>
                  <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
                    {block.details}
                  </p>
                </section>
              ))}
            </div>
            </ScrollLoader>

            <ScrollLoader>
            <section className="mt-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-8 tracking-tight">
                Frequently Asked Questions About HIPAA-Compliant ITAD
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
       
            <ScrollLoader>
            <section className="mt-16">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6 tracking-tight">
                Final Thoughts
              </h2>
              <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="text-justify">
                  HIPAA-compliant ITAD is about more than removing old equipment from a facility. It requires secure custody, verified destruction, and documentation that proves your organization handled PHI responsibly.
                </p>
                <p className="text-justify">
                  By working with a certified ITAD provider like IntegriTrade, healthcare teams can reduce data exposure risk, support audit readiness, and retire assets with confidence.
                </p>
              </div>
            </section>
            </ScrollLoader>

          </article>

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