import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import PageHeader from "@/components/shared/PageHeader";
import ScrollLoader from "@/components/shared/ScrollLoader";
import ServiceDetailSidebar from "@/components/service-area/Servicedetailsidebar";
import { ogImage } from "@/lib/og";

import {
  getAllServiceParams,
  getServiceBySlug,
} from "@/data/serviceAreas";

type PageProps = {
  params: Promise<{
    areaSlug: string;
    serviceSlug: string;
  }>;
};

export function generateStaticParams() {
  return getAllServiceParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { areaSlug, serviceSlug } = await params;
  const data = getServiceBySlug(areaSlug, serviceSlug);

  if (!data) {
    return {
      title: "Service Not Found | IntegriTrade",
      description: "The requested service page could not be found.",
    };
  }

  const { area, service } = data;

  // With no openGraph of their own, all 420 of these pages inherited the
  // homepage's title and link and the favicon as their share picture. Each now
  // describes itself, with the photo from the matching service page.
  const title = `${service.metaTitle} | Integritrade LLC`;
  const url = `https://integritradellc.com/service-area/${area.slug}/${service.slug}/`;
  const og = ogImage(SERVICE_OG[service.slug] ?? "home.jpg", `${service.title} in ${area.name}`);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/service-area/${area.slug}/${service.slug}`,
    },
    openGraph: {
      title,
      description: service.metaDescription,
      url,
      siteName: "Integritrade LLC",
      locale: "en_US",
      type: "website",
      images: [og],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.metaDescription,
      images: [og.url],
    },
  };
}

// Share photo for each city service, taken from the matching service page.
const SERVICE_OG: Record<string, string> = {
  "data-destruction-services": "services/data-destruction-services.jpg",
  "certificates-of-destruction": "services/data-destruction-services.jpg",
  "hard-drive-shredding": "services/data-destruction-services.jpg",
  "it-asset-disposition": "services/it-asset-disposition.jpg",
  "asset-recovery": "services/it-asset-disposition.jpg",
  "sell-used-apple-equipment": "services/it-asset-disposition.jpg",
  "data-center-decommissioning": "services.jpg",
  "basic-electronics-recycling": "services/secure-electronics-recycling.jpg",
};

export default async function ServicePage({ params }: PageProps) {
  const { areaSlug, serviceSlug } = await params;
  const data = getServiceBySlug(areaSlug, serviceSlug);

  if (!data) {
    notFound();
  }

  const { area, service } = data;

  const otherServices =
    area.services?.filter((item) => item.slug !== service.slug) ?? [];

  return (
    <main className="min-h-screen bg-secondary transition-colors duration-300 dark:bg-dark">
      {/* Breadcrumb */}
      <div className="">
        <div className="container mx-auto px-4 py-4">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
          >
            <Link
              href="/"
              className="click-feel transition-colors hover:text-foreground"
            >
              Home
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              href="/service-area"
              className="click-feel transition-colors hover:text-foreground"
            >
              Service Areas
            </Link>

            <span aria-hidden="true">/</span>

            <Link
              href={`/service-area/${area.slug}`}
              className="click-feel transition-colors hover:text-foreground"
            >
              {area.name}
            </Link>

            <span aria-hidden="true">/</span>

            <span
              aria-current="page"
              className="font-medium text-foreground"
            >
              {service.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main two-column layout */}
      <div className="container mx-auto px-4 py-10 lg:py-14">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_360px] xl:gap-12">
          {/* Left content */}
          <section className="min-w-0">
            <ScrollLoader>
              <PageHeader
                eyebrow={area.name}
                title={service.heroHeading}
                description={service.heroSubheading}
                align="left"
              />
            </ScrollLoader>

            {/* Hero image */}
            <ScrollLoader>
              <div className="relative mt-10 h-[300px] w-full overflow-hidden rounded-md shadow-md sm:h-[380px] md:h-[450px]">
                <Image
                  src={service.image}
                  alt={`${service.title} in ${area.name} | IntegriTrade LLC`}
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, calc(100vw - 440px)"
                  className="object-cover"
                />
              </div>
            </ScrollLoader>

            {/* Service content */}
            <ScrollLoader>
              <div>
                {service.details.map((item, sectionIndex) => (
                  <article
                    key={`${item.heading}-${sectionIndex}`}
                    className="mt-12"
                  >
                    {item.heading && (
                      <h2 className="text-left text-2xl font-semibold leading-tight text-slate-950 dark:text-gray-100">
                        {item.heading}
                      </h2>
                    )}

                    {item.body &&
                      item.body.split(/\n\n+/).map((paragraph, paragraphIndex) => (
                        <p
                          key={`${sectionIndex}-p-${paragraphIndex}`}
                          className="mt-4 text-left text-base leading-7 text-stone-700 dark:text-slate-300"
                        >
                          {paragraph}
                        </p>
                      ))}

                    {item.bullets && item.bullets.length > 0 && (
                      <ul className="mt-6 space-y-3">
                        {item.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={`${sectionIndex}-${bulletIndex}`}
                            className="flex items-start gap-3 text-left text-[15px] text-slate-700 dark:text-slate-300"
                          >
                            <CheckCircle2
                              aria-hidden="true"
                              className="mt-1.5 h-4 w-4 shrink-0 text-emerald-600"
                            />

                            <span className="leading-7">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.qna && item.qna.length > 0 && (
                      <div className="mt-8">
                        <Accordion
                          type="single"
                          collapsible
                          className="w-full space-y-3"
                        >
                          {item.qna.map((faq, faqIndex) => (
                            <AccordionItem
                              key={`${sectionIndex}-${faqIndex}-${faq.question}`}
                              value={`section-${sectionIndex}-faq-${faqIndex}`}
                              className="rounded-md border border-slate-200 px-5 dark:border-slate-700"
                            >
                              <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:no-underline dark:text-gray-200">
                                {faq.question}
                              </AccordionTrigger>

                              <AccordionContent className="pb-4 text-left text-base leading-7 text-stone-700 dark:text-slate-300">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </ScrollLoader>
          </section>

          {/* Floating sidebar */}
          <aside className="h-fit self-start lg:sticky lg:top-24">
            <ServiceDetailSidebar
              area={area}
              otherServices={otherServices}
              serviceTitle={service.title}
            />
          </aside>
        </div>
      </div>
    </main>
  );
}