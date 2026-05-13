import { Metadata } from "next";
import { notFound } from "next/navigation";
import { industriesData, getIndustryBySlug } from "@/data/industriesData";
import Link from "next/link";
import { ChevronRight, Clock, Mail, Phone } from "lucide-react";
import PageHeader from "@/components/shared/PageHeader";
import SectionHeader from "@/components/shared/SectionHeader";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollLoader from "@/components/shared/ScrollLoader";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    return {
      title: "Industry Not Found | Integritrade LLC",
      description: "The requested industry page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: {
      canonical: `/industries/${params.slug}/`,
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      url: `https://integritradellc.com/industries/${params.slug}/`,
      siteName: "Integritrade LLC",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://integritradellc.com/main-logo.png",
          width: 1200,
          height: 630,
          alt: `${industry.title} | Integritrade LLC`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
      images: ["https://integritradellc.com/main-logo.png"],
    },
    robots: { index: true, follow: true },
  };
}

export async function generateStaticParams() {
  return industriesData.map((item) => ({
    slug: item.slug,
  }));
}

export default async function IndustryPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const industry = getIndustryBySlug(params.slug);

  if (!industry) return notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-secondary dark:bg-dark transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 pt-8 pb-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-10">
          <Link href="/" className="hover:text-[#2aac61] transition-colors">
            Home
          </Link>

          <ChevronRight className="h-3 w-3" />

          <Link
            href="/industries/"
            className="hover:text-[#2aac61] transition-colors"
          >
            Industries
          </Link>

          <ChevronRight className="h-3 w-3" />

          <span className="text-gray-700 dark:text-gray-300">
            {industry.title}
          </span>
        </nav>

        {/* header — description removed so the right-side orphan no longer appears.
            The description now leads the content column below. */}
        <ScrollLoader>
          <PageHeader
            eyebrow={industry.eyebrow}
            title={industry.title}
            description={industry.description}
          />
        </ScrollLoader>

        <ScrollLoader>
          <div className="mt-20">
            {/* Image */}
            <div className="mb-10">
              <div className="relative w-full overflow-hidden rounded-md shadow-sm">
                <Image
                  src={industry.image}
                  alt={industry.imageAlt}
                  className="w-full h-[500px] object-cover object-center"
                  placeholder="blur"
                  priority
                  sizes="(max-width: 1280px) 100vw, 1152px"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              {industry.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[15px] text-gray-600 dark:text-gray-300 leading-[1.8] text-justify"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </ScrollLoader>



        {/* ─────────────────────────────────────────────
            Contact CTA
        ───────────────────────────────────────────── */}
        <ScrollLoader>
          <div className="mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left: Lead copy + primary CTA */}
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Get In Touch"
                title="Ready to retire your IT assets responsibly?"
              />
              <p className="text-[17px] text-gray-600 dark:text-gray-300 leading-[1.75] max-w-xl mt-4">
                Schedule a pickup, request a quote, or talk to our team about a custom
                ITAD program tailored to your facility, compliance requirements, and
                data security standards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <PrimaryButton href="/service-book" testId="button-get-quote">
                  Book a Service
                </PrimaryButton>

                <OutlineButton href="/services" testId="button-learn-more">
                  Explore Services
                </OutlineButton>
              </div>
            </div>

            {/* Right: Detached white shadow card with contact details */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-dark-secondary rounded-md shadow-sm p-8 lg:p-10">
                <div className="space-y-7">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <Phone className="h-4 w-4 text-[#2aac61]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-gray-500 dark:text-gray-400 mb-1.5">
                        Call
                      </p>
                      <a
                        href="tel:+15593254813"
                        className="block text-[15px] text-gray-800 dark:text-gray-100 hover:text-[#2aac61] dark:hover:text-[#2aac61] transition-colors"
                      >
                        (559) 325-4813
                      </a>
                    </div>
                  </div>

                  {/* Hairline divider */}
                  <div className="h-px bg-gray-200 dark:bg-gray-700/60" />

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                      <Mail className="h-4 w-4 text-[#2aac61]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-gray-500 dark:text-gray-400 mb-1.5">
                        Email
                      </p>
                      <a
                        href="mailto:info@integritradeLLC.com"
                        className="block text-[15px] text-gray-800 dark:text-gray-100 hover:text-[#2aac61] dark:hover:text-[#2aac61] transition-colors break-all"
                      >
                        info@integritradeLLC.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollLoader>
      </div>
    </section>
  );
}