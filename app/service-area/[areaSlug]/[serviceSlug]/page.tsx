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
      <div className="border-t">
        <div className="container mx-auto px-4 py-4 text-sm text-muted-foreground">
          <nav className="flex flex-wrap items-center gap-2">
            <Link href="/" className="hover:text-foreground transition">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/service-area"
              className="hover:text-foreground transition"
            >
              Service Areas
            </Link>
            <span>/</span>
            <Link
              href={`/service-area/${area.slug}`}
              className="hover:text-foreground transition"
            >
              {area.name}
            </Link>
            <span>/</span>
            <span className="font-medium text-foreground">{service.title}</span>
          </nav>
        </div>
      </div>

      <section className="">
        <div className="container mx-auto px-4 pt-10">
          <ScrollLoader>
            <Link
              href={`/service-area/${area.slug}`}
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 transition hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {area.name} Services
            </Link>

            <div className="max-w-4xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 px-4 py-1.5 text-sm font-medium backdrop-blur text-white">
                <MapPin className="h-4 w-4" />
                {area.name}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl leading-[1.05] tracking-tight text-stone-900 dark:text-white">
                {service.heroHeading}
              </h1>

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-stone-700 dark:text-slate-300">
                {service.heroSubheading}
              </p>
            </div>
          </ScrollLoader>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
          <section className="min-w-0">
      
            <div className="">
              <div className="max-w-6xl mx-auto px-4">
                <ScrollLoader>
                  <div className="relative w-full h-[300px] md:h-[450px] mt-6">
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
              {service.details.map((item, index) => (
                <ScrollLoader key={item.heading}>          
                    <article
                      key={`${item.heading}-${index}`}
                      className="p-2 sm:p-4"
                    >
                      <h2 className="text-2xl font-semibold dark:text-gray-100">
                        {item.heading}
                      </h2>

                      {item.body && (
                        <p className="mt-4 text-muted-foreground dark:text-gray-300 text-justify">
                          {item.body}
                        </p>
                      )}

                      {item.bullets && item.bullets.length > 0 && (
                        <ul className="mt-6 space-y-3">
                          {item.bullets.map((bullet, bulletIndex) => (
                            <li
                              key={`${bulletIndex}-${bullet}`}
                              className="flex items-start gap-3 text-slate-600 text-justify"
                            >
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
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

                                <AccordionContent className="pb-4 text-muted-foreground dark:text-gray-300 leading-7">
                                  {faq.answer}
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </div>
                      )}
                    </article>
                </ScrollLoader>
              ))}
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