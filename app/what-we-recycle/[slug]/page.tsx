import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { ChevronRight, ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { productsData, getProductBySlug } from "@/data/productsData";
import ScrollLoader from "@/components/shared/ScrollLoader";
import SectionFloatNav from "@/components/shared/SectionFloatNav";
import IndustryFAQ from "@/components/industries/IndustryFAQ";
import FAQSchema from "@/components/industries/FAQSchema";
import IndustryCertBadges from "@/components/industries/IndustryCertBadges";

const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "notes", label: "What We See" },
  { id: "handling", label: "How We Handle It" },
  { id: "materials", label: "Materials" },
  { id: "value", label: "Value Recovery" },
  { id: "faqs", label: "FAQs" },
];

export async function generateStaticParams() {
  return productsData.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Device Not Found",
      description: "The requested device page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: {
      canonical: `/what-we-recycle/${product.slug}/`,
    },
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      url: `https://integritradellc.com/what-we-recycle/${product.slug}/`,
      siteName: "Integritrade LLC",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://integritradellc.com/logo/integritrade-logo.png",
          width: 1200,
          height: 630,
          alt: `${product.title} | Integritrade LLC`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.metaTitle,
      description: product.metaDescription,
      images: ["https://integritradellc.com/logo/integritrade-logo.png"],
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

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const product = getProductBySlug(params.slug);

  if (!product) return notFound();

  const related = product.related
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://integritradellc.com/" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Basic Electronics Recycling",
        item: "https://integritradellc.com/services/basic-electronics-recycling/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `https://integritradellc.com/what-we-recycle/${product.slug}/`,
      },
    ],
  };

  return (
    <main className="bg-secondary dark:bg-dark pb-10 transition-colors duration-300 md:pb-24">
      <FAQSchema faqs={product.faqs} />

      <div className="relative mx-auto min-w-0 max-w-[1400px] px-6 pt-8 lg:px-10">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex flex-wrap items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400"
        >
          <Link href="/" className="transition-colors hover:text-[#2aac61]">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" />
          <Link
            href="/services/basic-electronics-recycling/"
            className="transition-colors hover:text-[#2aac61]"
          >
            Basic Electronics Recycling
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-gray-700 dark:text-gray-300">{product.name}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="hidden min-w-0 lg:col-span-2 lg:block">
            <SectionFloatNav
              sections={NAV_SECTIONS.filter(
                (sct) => sct.id !== "notes" || Boolean(product.fieldNotes)
              )}
            />
          </aside>

          <div className="min-w-0 lg:col-span-10">
            {/* Overview */}
            <section id="overview" className="scroll-mt-28">
              <ScrollLoader>
                <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-stone-900 dark:text-white sm:text-5xl">
                  {product.title}
                </h1>

                <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-stone-600 dark:text-gray-300">
                  {product.intro}
                </p>
              </ScrollLoader>
            </section>

            {/* Ian writes these per device from real jobs. No notes yet means
                the section simply is not there. */}
            {product.fieldNotes && (
              <section id="notes" className="mt-16 scroll-mt-28">
                <ScrollLoader>
                  <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-stone-900 dark:text-white">
                    {product.fieldNotes.heading}
                  </h2>
                  <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-stone-600 dark:text-gray-300">
                    {product.fieldNotes.text}
                  </p>
                </ScrollLoader>
              </section>
            )}

            {/* Handling */}
            <section id="handling" className="mt-16 scroll-mt-28">
              <ScrollLoader>
                <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-stone-900 dark:text-white">
                  {product.handling.heading}
                </h2>

                <ol className="mt-8 space-y-4">
                  {product.handling.steps.map((step, i) => (
                    <li
                      key={i}
                      className="flex min-w-0 gap-5 rounded-xl bg-white p-6 ring-1 ring-black/5 dark:bg-dark-secondary dark:ring-white/10"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 font-mono text-[13px] font-bold text-[#19723e] dark:bg-emerald-500/10 dark:text-emerald-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-serif text-lg leading-snug text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-stone-600 dark:text-gray-300">
                          {step.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </ScrollLoader>
            </section>

            {/* Materials and compliance */}
            <section id="materials" className="mt-16 scroll-mt-28">
              <ScrollLoader>
                <div className="grid min-w-0 gap-8 md:grid-cols-2">
                  <div className="min-w-0">
                    <h2 className="font-serif text-2xl leading-snug tracking-tight text-stone-900 dark:text-white">
                      Materials recovered
                    </h2>
                    <ul className="mt-5 space-y-3">
                      {product.commodities.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[15px] leading-relaxed text-stone-600 dark:text-gray-300"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2aac61]" />
                          <span className="min-w-0">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="min-w-0">
                    <h2 className="font-serif text-2xl leading-snug tracking-tight text-stone-900 dark:text-white">
                      Standards that apply
                    </h2>
                    <ul className="mt-5 space-y-3">
                      {product.compliance.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-[15px] leading-relaxed text-stone-600 dark:text-gray-300"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-[#19723e] dark:text-emerald-400"
                            strokeWidth={2.5}
                          />
                          <span className="min-w-0">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollLoader>
            </section>

            {/* Value recovery */}
            <section id="value" className="mt-16 scroll-mt-28">
              <ScrollLoader>
                <div className="rounded-xl bg-white p-8 ring-1 ring-black/5 dark:bg-dark-secondary dark:ring-white/10 sm:p-10">
                  <h2 className="font-serif text-2xl leading-snug tracking-tight text-stone-900 dark:text-white sm:text-3xl">
                    What it is realistically worth
                  </h2>
                  <p className="mt-5 max-w-3xl text-[16px] leading-relaxed text-stone-600 dark:text-gray-300">
                    {product.valueRecovery}
                  </p>
                  <Link
                    href="/services/it-asset-disposition/"
                    className="group mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#19723e] transition-colors hover:text-[#2aac61] dark:text-emerald-400"
                  >
                    See how value recovery works
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </ScrollLoader>
            </section>

            {/* FAQs */}
            <section id="faqs" className="mt-16 scroll-mt-28">
              <ScrollLoader>
                <IndustryFAQ faqs={product.faqs} />
              </ScrollLoader>
            </section>

            {/* Related devices */}
            {related.length > 0 && (
              <section className="mt-16">
                <ScrollLoader>
                  <h2 className="font-serif text-2xl leading-snug tracking-tight text-stone-900 dark:text-white">
                    Usually collected alongside
                  </h2>
                  <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-3">
                    {related.map((item) => (
                      <Link
                        key={item.slug}
                        href={`/what-we-recycle/${item.slug}/`}
                        className="group flex min-w-0 items-center justify-between gap-3 rounded-xl bg-white px-5 py-4 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:bg-dark-secondary dark:ring-white/10"
                      >
                        <span className="min-w-0 font-serif text-[15px] leading-snug text-gray-900 dark:text-white">
                          {item.name}
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-[#19723e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-emerald-400" />
                      </Link>
                    ))}
                  </div>
                </ScrollLoader>
              </section>
            )}

            {/* CTA */}
            <section className="mt-16">
              <ScrollLoader>
                <div className="rounded-xl bg-[#19723e] p-8 text-center sm:p-12">
                  <h2 className="font-serif text-2xl leading-snug text-white sm:text-3xl">
                    Retiring {product.name.toLowerCase()}?
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-emerald-50">
                    Tell us what you have and we will confirm the handling, the documentation and
                    any recovery before anything is collected.
                  </p>
                  <Link
                    href="/service-book/"
                    className="mt-7 inline-flex items-center gap-2 rounded-md bg-white px-7 py-4 text-[15px] font-semibold text-[#19723e] transition-colors hover:bg-emerald-50"
                  >
                    Contact Us
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollLoader>
            </section>

            <div className="mt-16">
              <IndustryCertBadges />
            </div>
          </div>
        </div>

        <Script
          id={`breadcrumb-jsonld-${product.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </div>
    </main>
  );
}
