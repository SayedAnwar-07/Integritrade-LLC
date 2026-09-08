import { Metadata } from "next";
import { notFound } from "next/navigation";
import { industriesData, getIndustryBySlug } from "@/data/industriesData";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ChevronRight, Mail, Phone } from "lucide-react";

import PageHeader from "@/components/shared/PageHeader";
import SectionHeader from "@/components/shared/SectionHeader";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import ScrollLoader from "@/components/shared/ScrollLoader";
import IndustryFAQ from "@/components/industries/IndustryFAQ";
import FAQSchema from "@/components/industries/FAQSchema";


const ConsultationForm = dynamic(
  () => import("@/components/contact/ConsultationForm"),
  {
    loading: () => (
      <div className="h-[500px] rounded-md bg-gray-100 animate-pulse" />
    ),
  }
);


export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {

  const params = await props.params;
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    return {
      title: "Industry Not Found",
      description: "The requested industry page could not be found.",
      robots: {
        index: false,
        follow: false,
      },
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
          url: "https://integritradellc.com/logo/integritrade-logo.png",
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
      images: [
        "https://integritradellc.com/logo/integritrade-logo.png",
      ],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}


export async function generateStaticParams() {

  return industriesData.map((item) => ({
    slug: item.slug,
  }));

}


export default async function IndustryPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {

  const params = await props.params;
  const industry = getIndustryBySlug(params.slug);

  if (!industry) return notFound();


  return (
    <section className="bg-secondary dark:bg-dark transition-colors duration-300">

      <FAQSchema faqs={industry.faqs}/>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-12 lg:px-16 pt-8 pb-16">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-10">

          <Link href="/" className="hover:text-[#2aac61] transition-colors">
            Home
          </Link>

          <ChevronRight className="h-3 w-3"/>

          <Link href="/industries/" className="hover:text-[#2aac61] transition-colors">
            Industries
          </Link>

          <ChevronRight className="h-3 w-3"/>

          <span className="text-gray-700 dark:text-gray-300">
            {industry.title}
          </span>

        </nav>


        {/* Page Header */}
        <ScrollLoader>

          <PageHeader
            eyebrow={industry.eyebrow}
            title={industry.title}
            description={industry.description}
          />

        </ScrollLoader>


        {/* Hero Image */}
        <div className="mt-20 mb-10 aspect-[2/1] overflow-hidden rounded-md shadow-sm">
          <Image
            src={industry.image}
            alt={industry.imageAlt}
            width={1200}
            height={600}
            priority
            placeholder="blur"
            sizes="(max-width:768px)100vw,(max-width:1280px)90vw,1200px"
            className="h-full w-full object-cover object-center"
            quality={75}
          />
        </div>


        {/* Content + Consultation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">


          {/* Content */}
          <div className="lg:col-span-7 space-y-8">

            {industry.contentSections?.length ? (

              <div className="space-y-8">

                {industry.contentSections.map((section,index)=>(

                  <div key={index} className="space-y-4">

                    {section.heading && (

                      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {section.heading}
                      </h2>

                    )}


                    {section.paragraphs?.map((paragraph,i)=>(

                      <p key={i} className="text-[15px] text-gray-600 dark:text-gray-300 leading-[1.8]">
                        {paragraph}
                      </p>

                    ))}


                    {section.bullets?.length ? (

                      <ul className="space-y-3">

                        {section.bullets.map((bullet,i)=>(

                          <li key={i} className="flex items-start gap-3 text-[15px] text-gray-600 dark:text-gray-300 leading-[1.8]">

                            <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[#2aac61]"/>

                            <span>

                              {typeof bullet==="string"
                              ? bullet
                              :
                              <>
                                <strong className="font-semibold text-gray-900 dark:text-white">
                                  {bullet.title}:
                                </strong>{" "}
                                {bullet.link ? (
                                  <>
                                    <a
                                      href={bullet.link.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-[#19723e] underline"
                                    >
                                      {bullet.link.text}
                                    </a>
                                    {bullet.text.replace(bullet.link.text, "")}
                                  </>
                                ) : (
                                  bullet.text
                                )}
                              </>
                              }

                            </span>

                          </li>

                        ))}

                      </ul>

                    ):null}

                  </div>

                ))}

              </div>

            ):(

              <div className="space-y-6">

                {industry.content.map((text,index)=>(

                  <p key={index} className="text-[15px] text-gray-600 dark:text-gray-300 leading-[1.8]">
                    {text}
                  </p>

                ))}

              </div>

            )}

          </div>


          {/* Consultation */}
          <aside className="lg:col-span-5">

            <div className="lg:sticky lg:top-28">

              <ConsultationForm industry={industry.title}/>

            </div>

          </aside>


        </div>


        {/* FAQ */}
        <IndustryFAQ faqs={industry.faqs}/>


        {/* Contact CTA */}
        <ScrollLoader>

          <div className="mt-8 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">


            <div className="lg:col-span-7">
              <h3 className="font-serif text-2xl leading-snug text-stone-900 dark:text-white mb-4">Ready to retire your IT assets responsibly?</h3>

              <p className="text-[17px] text-gray-600 dark:text-gray-300 leading-[1.75] max-w-xl mt-4">
                Schedule a pickup, request a quote, or talk to our team about a custom ITAD program tailored to your facility, compliance requirements, and data security standards.
              </p>


              <div className="flex flex-col sm:flex-row gap-4 mt-4">

                <OutlineButton href="/services" testId="button-learn-more">
                  See How We Can Help
                </OutlineButton>

                <PrimaryButton href="/service-book" testId="button-get-quote">
                  Book a Service
                </PrimaryButton>

              </div>

            </div>


            <div className="lg:col-span-5">

              <div className="bg-white dark:bg-dark-secondary rounded-md shadow-sm p-8 lg:p-10">

                <div className="space-y-7">

                  <div className="flex items-start gap-4">

                    <Phone className="h-4 w-4 text-emerald-700 dark:text-emerald-400 mt-1"/>

                    <a href="tel:+15593254813" className="text-[15px] text-gray-800 dark:text-gray-100">
                      (559)325-4813
                    </a>

                  </div>


                  <div className="h-px bg-gray-200 dark:bg-gray-700/60"/>


                  <div className="flex items-start gap-4">

                    <Mail className="h-4 w-4 text-emerald-700 dark:text-emerald-400 mt-1"/>

                    <a href="mailto:info@integritradeLLC.com" className="text-[15px] text-gray-800 dark:text-gray-100 break-all">
                      info@integritradeLLC.com
                    </a>

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