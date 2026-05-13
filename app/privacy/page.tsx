import { Metadata } from "next";
import ScrollLoader from "@/components/shared/ScrollLoader";
import PageHeader from "@/components/shared/PageHeader";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Integritrade LLC protects your data. See how we collect, use, and secure your personal information and your rights.",

  keywords: [
    "Privacy Policy Integritrade LLC",
    "data protection policy",
    "user data security",
    "personal information privacy",
    "ITAD privacy policy",
    "data collection practices",
    "website privacy terms",
  ],

  alternates: {
    canonical: "/privacy/",
  },

  openGraph: {
    title: "Privacy Policy | Integritrade LLC",
    description:
      "Learn how Integritrade LLC protects your data and manages personal information securely.",
    url: "https://integritradellc.com/privacy/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://integritradellc.com/main-logo.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy | Integritrade LLC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Integritrade LLC",
    description:
      "Learn how Integritrade LLC protects your data and ensures privacy compliance.",
    images: ["https://integritradellc.com/main-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect information you share with us when you request a quote, schedule a pickup, sign a service agreement, or release equipment for processing. This typically includes contact details, company information, asset inventories, serial numbers, pickup addresses, and reporting preferences. We also collect limited technical data when you visit this website, including IP address, browser type, pages viewed, and referral source, used solely to operate the site and improve the experience.",
    },
    {
      title: "How We Use Your Information",
      content:
        "Information is used to deliver the ITAD, data destruction, recycling, and asset recovery services you have engaged us for, to maintain serialized chain-of-custody records, to issue Certificates of Data Destruction or Erasure, to fulfill our obligations under R2v3 and ISO management system requirements, to communicate about ongoing projects and reporting deliverables, and to satisfy applicable legal, regulatory, and environmental reporting duties.",
    },
    {
      title: "Data Handled During Service Delivery",
      content:
        "Where data-bearing devices enter our chain of custody, the residual data on those devices is treated as confidential client information at every stage of intake, transport, and processing. Devices are inventoried, secured, and processed under documented procedures aligned with NIST 800-88 and DoD 5220.22-M, with access restricted to background-checked personnel trained in our information security program. Once destruction or erasure is verified, we retain only the metadata required for the certificate and audit record.",
    },
    {
      title: "Information Security",
      content:
        "Integritrade maintains administrative, technical, and physical safeguards consistent with our ISO 27001 information security program. These include access controls, encryption of sensitive records, secured facility zones for data-bearing assets, employee confidentiality agreements, and routine review of our security posture. While no system can guarantee absolute security, our controls are designed to protect personal and client information against unauthorized access, alteration, disclosure, or loss.",
    },
    {
      title: "Data Retention",
      content:
        "Service records, certificates, weight tickets, downstream documentation, and chain-of-custody logs are retained for the periods required by R2v3, ISO, and applicable law, so that audit and traceability obligations can be met. Personal information that is not tied to a compliance record is retained only as long as it is needed for the purpose for which it was collected. You may request deletion of personal data that is not subject to a legal retention requirement.",
    },
    {
      title: "Sharing of Information",
      content:
        "Integritrade does not sell personal information. We share information only as necessary to deliver our services and meet our obligations: with audited downstream recycling and refurbishment partners under contract, with certifying bodies and auditors verifying our R2v3 and ISO compliance, with insurers and legal advisors when required, and with government or regulatory authorities where disclosure is required by law. All third parties receiving information are bound by confidentiality and data protection commitments consistent with this policy.",
    },
    {
      title: "Cookies and Website Analytics",
      content:
        "This website uses a limited set of cookies and analytics tools to measure performance, understand how visitors navigate the site, and improve content. These tools collect aggregate usage data and do not identify individual visitors for marketing purposes. You may disable cookies through your browser settings; some site features may not function as intended when cookies are disabled.",
    },
    {
      title: "Your Rights and Choices",
      content:
        "Subject to applicable law, you may request access to the personal information we hold about you, ask that we correct inaccurate information, request deletion of information that is not bound by a regulatory retention period, request copies of your certificates and compliance records, or opt out of non-essential communications. Requests can be submitted to the contact provided in this policy and are typically reviewed within thirty days.",
    },
    {
      title: "California Privacy Rights",
      content:
        "California residents have specific rights under the California Consumer Privacy Act, including the right to know what categories of personal information are collected and the purposes for which they are used, the right to request access or deletion of that information, and the right not to be discriminated against for exercising these rights. Integritrade does not sell personal information as defined under the CCPA.",
    },
    {
      title: "Third-Party Links",
      content:
        "This website may link to external resources, partner sites, or downstream vendor pages for reference. Integritrade is not responsible for the privacy practices or content of websites we do not operate. We encourage you to review the privacy policy of any third-party site before sharing personal information.",
    },
    {
      title: "Children's Privacy",
      content:
        "Our services are intended for businesses and adult users. We do not knowingly collect personal information from children under the age of thirteen. If we become aware that we have inadvertently collected such information, it will be promptly deleted from our records.",
    },
    {
      title: "Changes to This Policy",
      content:
        "Integritrade may update this Privacy Policy to reflect changes in our services, certifications, technology, or legal requirements. The effective date of the most recent revision will be posted on this page. Continued use of the website or our services after an update indicates acceptance of the revised policy.",
    },
    {
      title: "Contacting Us",
      content:
        "If you have questions about this Privacy Policy, would like to exercise any of the rights described above, or need clarification on how your information is handled during a project, please contact our team using the details provided on this page. We are committed to addressing your inquiry promptly and in line with the protections set out in this policy.",
    },
  ];

  return (
    <div className="bg-secondary dark:bg-dark pt-10 md:py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 px-4 sm:px-6 lg:px-8">
        <ScrollLoader>
          <PageHeader
            eyebrow="Legal"
            title="Privacy Policy"
            description="How Integritrade LLC collects, uses, protects, and shares the information you entrust to us across our website, ITAD projects, and certified data destruction services."
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
                    This Privacy Policy was last reviewed and updated on
                    January 1, 2026. Please read it carefully to understand how
                    your information is collected, used, and protected when
                    engaging with Integritrade LLC.
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
                {/* Acknowledgement Section */}
                <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#2aac61] mb-3">
                    Acknowledgement
                  </p>
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 font-serif mb-4 leading-tight">
                    Your Trust, Documented
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                    By using this website, requesting a quote, or engaging
                    Integritrade for any service, you acknowledge that you have
                    read and understood this Privacy Policy and our Terms of
                    Service. The same discipline we apply to your retired
                    assets, traceable, documented, and verifiable, is the
                    discipline we apply to the information you share with us.
                  </p>
                </div>
              </ScrollLoader>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-10 bg-white dark:bg-dark-secondary p-6 rounded-md">
                <div>
                  <p className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold mb-4">
                    Privacy Inquiries
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 font-serif mb-4 leading-tight">
                    Speak with our privacy team.
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Reach our team to access your records, request deletion of
                    eligible information, or ask any question about how your
                    data is handled across a project.
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
                  <PrimaryButton
                    href="/service-book"
                    className="w-full"
                    testId="button-get-quote"
                  >
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