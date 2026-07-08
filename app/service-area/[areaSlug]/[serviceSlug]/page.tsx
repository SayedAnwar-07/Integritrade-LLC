import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getAllServiceParams, getServiceBySlug } from "@/data/serviceAreas";
import ServiceDetailSidebar from "@/components/service-area/Servicedetailsidebar";
import Image from "next/image";
import ScrollLoader from "@/components/shared/ScrollLoader";
import PageHeader from "@/components/shared/PageHeader";

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

  const { service, area } = data;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/service-area/${area.slug}/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { areaSlug, serviceSlug } = await params;
  const data = getServiceBySlug(areaSlug, serviceSlug);

  if (!data) notFound();

  const { area, service } = data;

  const otherServices =
    area.services?.filter((item) => item.slug !== service.slug) ?? [];


  return (
    <main className="bg-secondary dark:bg-dark transition-colors duration-300">
      {/* breadcrumb */}
      <div className="">
        <div className="container mx-auto px-4 py-4 text-sm text-muted-foreground">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-foreground transition click-feel">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/service-area"
              className="hover:text-foreground transition click-feel"
            >
              Service Areas
            </Link>
            <span>/</span>
            <Link
              href={`/service-area/${area.slug}`}
              className="hover:text-foreground transition click-feel"
            >
              {area.name}
            </Link>
            <span>/</span>
            <span className="font-medium text-foreground">{service.title}</span>
          </nav>
        </div>
      </div>

      <section className="">
        <div className="container mx-auto px-4 py-10">
          <ScrollLoader>
            <PageHeader
                eyebrow={area.name}
                title={service.heroHeading}
                description={service.heroSubheading}
            />
          </ScrollLoader>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-12 lg:pb-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <section className="min-w-0">
      
            <div className="">
              <div className="max-w-6xl mx-auto">
                <ScrollLoader>
                  <div className="relative w-full h-[300px] md:h-[450px]">
                    <Image
                      src={service.image}
                      alt={`${service.title} in ${area.name} | IntegriTrade LLC`}
                      fill
                      className="object-cover rounded-md shadow-md"
                      priority
                    />
                  </div>
                </ScrollLoader>
              </div>

              <ScrollLoader>
                {service.details.map((item, index) => (         
                      <article
                        key={`${item.heading}-${index}`}
                        className="mt-12"
                      >
                        <h2 className="text-2xl font-semibold dark:text-gray-100">
                          {item.heading}
                        </h2>

                        {item.body && (
                          <p className="mt-4 text-base leading-relaxed text-stone-700 dark:text-slate-300 custom-text-center">
                            {item.body}
                          </p>
                        )}

                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="mt-6 space-y-3 pl-4">
                            {item.bullets.map((bullet, bulletIndex) => (
                              <li
                                key={`${bulletIndex}-${bullet}`}
                                className="flex text-[15px] items-start gap-3 text-slate-700 dark:text-slate-300 custom-text-center "
                              >
                                <CheckCircle2 className="mt-1.5 h-4 w-4 shrink-0 text-emerald-600" />
                                <span className="leading-7">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.qna && item.qna.length > 0 && (
                          <div className="mt-8">
                            <Accordion type="single" collapsible className="w-full space-y-3">
                              {item.qna.map((faq, faqIndex) => (
                                <AccordionItem
                                  key={`${faq.question}-${faqIndex}`}
                                  value={`item-${faqIndex}`}
                                  className="rounded-md border border-slate-200 dark:border-slate-700 px-5"
                                >
                                  <AccordionTrigger className="text-left text-base dark:text-gray-200 text-slate-900 hover:no-underline">
                                    {faq.question}
                                  </AccordionTrigger>

                                  <AccordionContent className="pb-4 text-base leading-relaxed text-stone-700 dark:text-slate-300">
                                    {faq.answer}
                                  </AccordionContent>
                                </AccordionItem>
                              ))}
                            </Accordion>
                          </div>
                        )}
                      </article>

                ))}
              </ScrollLoader>
            </div>            
          </section>

          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
             <ServiceDetailSidebar area={area} otherServices={otherServices} />
          </aside>
        </div>
      </div>
    </main>
  );
}