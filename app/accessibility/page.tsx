import { Metadata } from "next";
import ScrollLoader from "@/components/shared/ScrollLoader";
import PageHeader from "@/components/shared/PageHeader";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Integritrade LLC is committed to digital accessibility and conformance with WCAG 2.1 Level AA. Learn about our accessibility efforts and how to report an issue.",
  keywords: [
    "accessibility statement",
    "WCAG 2.1 AA",
    "ADA compliance",
    "Integritrade LLC accessibility",
    "web accessibility California",
  ],
  alternates: {
    canonical: "/accessibility/",
  },
  openGraph: {
    title: "Accessibility Statement | Integritrade LLC",
    description:
      "Our commitment to making integritradellc.com accessible to everyone, in line with WCAG 2.1 Level AA.",
    url: "https://integritradellc.com/accessibility/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccessibilityPage() {
  const sections = [
    {
      title: "Our Commitment",
      content:
        "Integritrade LLC is committed to ensuring digital accessibility for people of all abilities. We are continually working to improve the experience for every user and to apply the relevant accessibility standards across integritradellc.com. We believe everyone should be able to access information about our ITAD, data destruction, and electronics recycling services with ease.",
    },
    {
      title: "Conformance Standard",
      content:
        "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. These guidelines explain how to make web content more accessible to people with visual, auditory, cognitive, and physical disabilities, and are the benchmark referenced under the Americans with Disabilities Act (ADA) and California's Unruh Civil Rights Act.",
    },
    {
      title: "Measures We Take",
      content:
        "To support accessibility, we use semantic HTML and ARIA landmarks so assistive technologies can navigate the site, maintain color contrast ratios that meet WCAG 2.1 AA for text and interactive elements, ensure the site is operable with a keyboard, provide descriptive text alternatives for meaningful images, and review accessibility as part of our ongoing development process.",
    },
    {
      title: "Ongoing Effort",
      content:
        "Web accessibility is an ongoing effort rather than a one-time task. We periodically review the website using automated testing tools and manual checks, and we address issues as they are identified. As we add new pages and features, we evaluate them against the same WCAG 2.1 AA standard.",
    },
    {
      title: "Known Limitations",
      content:
        "Despite our best efforts, some content may not yet be fully accessible. Where third-party content or embedded tools are involved, we may have limited control over their accessibility. If you encounter a barrier that is not listed here, please let us know so we can prioritize a fix.",
    },
    {
      title: "Feedback & Contact",
      content:
        "We welcome your feedback on the accessibility of integritradellc.com. If you experience any difficulty accessing any part of this website, or have a suggestion for improvement, please contact us. Please include the page address, a description of the issue, and the assistive technology or browser you were using. We aim to respond to accessibility feedback promptly.",
    },
  ];

  return (
    <div className="bg-secondary dark:bg-dark pt-10 md:py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 px-4 sm:px-6 lg:px-8">
        <ScrollLoader>
          <PageHeader
            eyebrow="Legal"
            title="Accessibility Statement"
            description="Integritrade LLC is committed to digital accessibility and to conforming with WCAG 2.1 Level AA across integritradellc.com."
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
                  <p className="text-sm uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 mb-3">
                    Last Updated
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    This Accessibility Statement was last reviewed and updated on
                    June 20, 2026. It reflects our current accessibility practices
                    and the standards we aim to meet.
                  </p>
                </div>
              </ScrollLoader>

              <div className="space-y-12">
                {sections.map((section) => (
                  <ScrollLoader key={section.title}>
                    <section>
                      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        {section.title}
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                    </section>
                  </ScrollLoader>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ScrollLoader>
                <div className="lg:sticky lg:top-24 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark-secondary p-6">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Report an Accessibility Issue
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    Found a barrier on our site? Tell us the page, the problem, and
                    the browser or assistive technology you were using, and our team
                    will work to resolve it.
                  </p>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:info@integritradeLLC.com"
                        className="text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors font-medium break-all"
                      >
                        info@integritradeLLC.com
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+15593254813"
                        className="text-gray-700 dark:text-gray-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors font-medium"
                      >
                        (559) 325-4813
                      </a>
                    </div>
                  </div>

                  <div className="mt-6">
                    <PrimaryButton href="/service-book/" testId="accessibility-contact">
                      Contact Us
                    </PrimaryButton>
                  </div>
                </div>
              </ScrollLoader>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
