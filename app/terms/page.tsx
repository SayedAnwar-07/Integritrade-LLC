import { Metadata } from "next";
import ScrollLoader from "@/components/shared/ScrollLoader";
import PageHeader from "@/components/shared/PageHeader";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Review Integritrade LLC terms and conditions. Understand service use, responsibilities, limitations, and legal policies before engaging with our services.",
  keywords: [
    "Terms and Conditions Integritrade LLC",
    "service terms ITAD",
    "legal policies IT recycling",
    "user agreement Integritrade",
    "website terms of use",
    "service conditions ITAD company",
  ],

  alternates: {
    canonical: "/terms/",
  },

  openGraph: {
    title: "Terms and Conditions | Integritrade LLC",
    description:
      "Review Integritrade LLC terms and conditions including service usage, responsibilities, and legal policies.",
    url: "https://integritradellc.com/terms/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://integritradellc.com/main-logo.png",
        width: 1200,
        height: 630,
        alt: "Terms and Conditions | Integritrade LLC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Integritrade LLC",
    description:
      "Understand Integritrade LLC terms and conditions before using our services.",
    images: ["https://integritradellc.com/main-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "These Terms of Service govern your access to the Integritrade LLC website and the use of our IT Asset Disposition, data destruction, electronics recycling, and asset recovery services. By engaging our services, requesting a pickup, or browsing this site, you confirm that you have read these Terms and agree to be bound by them on behalf of yourself or the organization you represent.",
    },
    {
      title: "Scope of Services",
      content:
        "Integritrade provides certified ITAD, data destruction, electronics recycling, asset recovery, junk removal, and commercial liquidation services to businesses and qualifying local customers across our California service zones. The specific scope, pricing, timeline, and deliverables for any project are defined in a written quote, service agreement, or work order issued by Integritrade. These Terms apply alongside any such agreement, and the agreement controls in the event of conflict.",
    },
    {
      title: "Client Eligibility and Authorization",
      content:
        "By scheduling a service or releasing equipment to Integritrade, you represent that you are the lawful owner of the assets or have written authorization from the owner to transfer them for processing. You are responsible for confirming that all leased, financed, or third-party-owned equipment has been cleared for disposition before pickup. Integritrade is not liable for claims arising from assets released without proper authority.",
    },
    {
      title: "Client Responsibilities",
      content:
        "Clients are expected to provide accurate asset details, ownership records, and pickup information; ensure safe access to the pickup location and personnel during scheduled service windows; remove any assets, media, or personal property that should not be released for processing; and comply with applicable local, state, and federal regulations governing the storage, transport, and disposal of electronic waste. Failure to provide accurate information may result in rescheduling, additional fees, or refusal of service.",
    },
    {
      title: "Data Destruction and Certification",
      content:
        "Data destruction services are performed under documented procedures aligned with NIST 800-88, HIPAA, and R2v3 Appendix B requirements, using certified erasure software and physical destruction equipment. Upon completion, Integritrade issues a serialized Certificate of Data Destruction or Certificate of Erasure for the assets covered under the agreed scope. Certificates apply only to the devices listed and processed under our chain of custody. Data remaining on devices that were not released to Integritrade, or that were not identified as data-bearing at intake, is the responsibility of the client.",
    },
    {
      title: "Chain of Custody and Reporting",
      content:
        "Every project is tracked from pickup through final processing, with serialized records maintained at each handoff. Final reporting may include asset inventories, weight tickets, settlement statements, downstream recycling records, and certificates appropriate to the service. Reports are issued to the contracted client only and are intended for that client's internal compliance, audit, and recordkeeping purposes.",
    },
    {
      title: "Asset Recovery and Revenue Share",
      content:
        "Where retired assets retain market value, Integritrade may resell or remarket eligible items and share net proceeds with the client under a written revenue-share arrangement. Settlement terms, evaluation criteria, and reporting cadence are documented in the applicable agreement. Once assets are accepted for processing, Integritrade may determine the most appropriate disposition path, including resale, parts recovery, or recycling, in line with that agreement.",
    },
    {
      title: "Pickup, Pricing, and Payment",
      content:
        "Pricing is provided in writing and reflects the asset mix, service level, location, and volume disclosed at the time of quoting. Material changes to scope at the time of pickup, including unlisted items, additional volume, or access constraints, may result in revised pricing. Invoiced amounts are due within the terms stated on the invoice. Late payments may be subject to interest charges as permitted by law.",
    },
    {
      title: "Compliance and Certifications",
      content:
        "Integritrade operates as an R2v3-certified facility and maintains ISO 9001, ISO 14001, ISO 27001, and ISO 45001 management system certifications covering quality, environmental performance, information security, and occupational health and safety. We process material exclusively through audited domestic downstream vendors and publish our downstream vendor list on request for qualifying clients.",
    },
    {
      title: "Limitation of Liability",
      content:
        "To the fullest extent permitted by law, Integritrade is not liable for indirect, incidental, consequential, or punitive damages, including loss of data, loss of profits, or business interruption, arising out of the services. Integritrade's total aggregate liability for any claim relating to a service shall not exceed the fees paid by the client for the specific service giving rise to the claim. Nothing in these Terms limits liability that cannot lawfully be excluded.",
    },
    {
      title: "Intellectual Property",
      content:
        "All content on this website, including text, layout, graphics, logos, photography, and source code, is the property of Integritrade LLC or its licensors and is protected by United States and international intellectual property laws. You may view and print pages for personal or internal business reference, but you may not reproduce, redistribute, or use any portion of this site for commercial purposes without prior written consent from Integritrade.",
    },
    {
      title: "Confidentiality",
      content:
        "Information shared during the quoting and service process, including asset inventories, facility details, and reporting outputs, is treated as confidential and used only for the purpose of delivering the contracted services and meeting our regulatory obligations. Integritrade applies administrative, technical, and physical safeguards consistent with our ISO 27001 information security program.",
    },
    {
      title: "Acceptable Use of the Website",
      content:
        "You agree not to use this website to transmit unlawful, harmful, or misleading content; to attempt to gain unauthorized access to any portion of the site or its underlying systems; or to interfere with the operation of the site for other users. We reserve the right to restrict access to any user who violates these Terms.",
    },
    {
      title: "Changes to These Terms",
      content:
        "Integritrade may update these Terms from time to time to reflect changes in our services, certifications, or legal requirements. The effective date of the most recent update will be posted on this page. Continued use of the website or our services after an update constitutes acceptance of the revised Terms.",
    },
    {
      title: "Governing Law and Disputes",
      content:
        "These Terms are governed by the laws of the State of California, without regard to its conflict of law principles. Any dispute arising out of or relating to these Terms or our services shall be resolved in the state or federal courts located in Fresno County, California, and you consent to the exclusive jurisdiction of those courts.",
    },
  ];

  return (
    <div className="bg-secondary dark:bg-dark pt-10 md:py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 px-4 sm:px-6 lg:px-8">
        <ScrollLoader>
          <PageHeader
            eyebrow="Legal"
            title="Terms and Conditions"
            description="The terms below outline the rules, responsibilities, and protections that apply when you use the Integritrade LLC website or engage our ITAD, data destruction, recycling, and asset recovery services."
          />
        </ScrollLoader>

      </div>
      {/* Content */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <ScrollLoader>
                  <div className="mb-12 pb-10 border-b border-gray-200 dark:border-gray-800">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#2aac61] mb-3">
                      Last Updated
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      These Terms were last reviewed and updated on January 1, 2026.
                      Please read them carefully before using our website or
                      requesting services.
                    </p>
                  </div>
                </ScrollLoader>

                <div className="space-y-12">
                  {sections.map((section, index) => (
                    <ScrollLoader key={section.title} delay={index * 0.01}>
                      <section
                        key={index}
                        className="grid grid-cols-[auto_1fr] gap-x-6 md:gap-x-10"
                      >
                        <div>
                          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 font-serif mb-4 leading-tight">
                            {section.title}
                          </h2>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                            {section.content}
                          </p>
                        </div>
                      </section>
                    </ScrollLoader>
                  ))}
                </div>

                <ScrollLoader>
                  {/* Agreement Section */}
                  <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#2aac61] mb-3">
                      Acknowledgement
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 font-serif mb-4 leading-tight">
                      Your Agreement
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      By using this website, requesting a quote, or engaging
                      Integritrade for any service, you acknowledge that you have
                      read, understood, and agreed to these Terms of Service and to
                      our Privacy Policy. If you do not agree with any part of these
                      Terms, please discontinue use of the website and refrain from
                      engaging our services.
                    </p>
                  </div>
                </ScrollLoader>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-28 space-y-10 bg-white dark:bg-dark-secondary p-6 rounded-md">
                  <div>
                    <p className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold mb-4">
                      Questions on these Terms?
                    </p>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-serif mb-4 leading-tight">
                      Speak with our compliance team.
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      Reach our team for clarification on any clause, service
                      scope, or compliance requirement before signing an
                      agreement.
                    </p>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-800 pt-8 space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-2">
                        Email
                      </p>
                      <a
                        href="mailto:info@integritradeLLC.com"
                        className="text-gray-700 dark:text-gray-300 hover:text-[#2aac61] dark:hover:text-[#34d399] transition-colors font-medium break-all"
                      >
                        info@integritradeLLC.com
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-2">
                        Phone
                      </p>
                      <a
                        href="tel:+15593254813"
                        className="text-gray-700 dark:text-gray-300 hover:text-[#2aac61] dark:hover:text-[#34d399] transition-colors font-medium"
                      >
                        (559) 325-4813
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-2">
                        Office
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                        1945 N Fine Ave, STE 111
                        <br />
                        Fresno, CA 93727
                      </p>
                    </div>                    
                  </div>

                  <div className="w-full">
                    <PrimaryButton href="/service-book" className="w-full" testId="button-get-quote">
                        Get a Free Quote
                    </PrimaryButton>
                  </div>
                </div>
              </aside>
            </div>
        </div>
      </div>
    </div>
  );
}