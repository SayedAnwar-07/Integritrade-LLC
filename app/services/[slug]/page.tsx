import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/data/servicesData";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ServicesCTA from "@/components/services/Servicescta";
import ScrollLoader from "@/components/shared/ScrollLoader";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found | Integritrade LLC",
      description: "The requested service page could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const canonicalPath = `/services/${params.slug}/`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://integritradellc.com/services/${params.slug}/`,
      siteName: "Integritrade LLC",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://integritradellc.com/main-logo.png",
          width: 1200,
          height: 630,
          alt: `${service.pageTitle} | Integritrade LLC`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["https://integritradellc.com/main-logo.png"],
    },
    robots: { index: true, follow: true },
  };
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const service = getServiceBySlug(params.slug);

  if (!service) return notFound();

  const tier = service.serviceLevel?.tier;

  return (
    <div className="min-h-screen bg-secondary dark:bg-dark transition-colors duration-300">

      {/* ────────────────────────────────────────────────────────
          HERO
      ──────────────────────────────────────────────────────── */}
      <section className="border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-20">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-12">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-2.5 w-2.5" />
            <Link href="/services/" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="h-2.5 w-2.5" />
            <span className="text-gray-700 dark:text-gray-300">{service.pageTitle}</span>
          </nav>

          <ScrollLoader>
            <div>
              {/* Tier eyebrow — only shows for services in the comparison */}
              <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-primary mb-6">
                {tier ? `Tier ${tier} · Service Level` : "Service"}
              </p>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-gray-900 dark:text-white mb-8">
                {service.pageTitle}
              </h1>

              {service.pageSubtitle && (
                <p className="max-w-3xl text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  {service.pageSubtitle}
                </p>
              )}
            </div>
          </ScrollLoader>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          HERO IMAGE
      ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <ScrollLoader>
          <figure className="relative h-[320px] md:h-[440px] overflow-hidden rounded-lg">
            <Image
              src={service.image}
              alt={service.pageTitle}
              fill
              className="object-cover object-center"
              priority
            />
          </figure>
        </ScrollLoader>
      </section>

      {/* ────────────────────────────────────────────────────────
          MAIN
      ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

          {/* ─── SIDEBAR ─────────────────────────────────── */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400 mb-6">
                All Services
              </p>
              <nav className="border-t border-gray-200 dark:border-gray-800">
                {servicesData.map((s, idx) => {
                  const num = String(idx + 1).padStart(2, "0");
                  const isActive = s.slug === service.slug;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}/`}
                      className={`group flex items-baseline gap-4 py-4 border-b border-gray-200 dark:border-gray-800 transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] tabular-nums tracking-widest ${
                          isActive ? "text-primary" : "text-gray-400 dark:text-gray-500"
                        }`}
                      >
                        {num}
                      </span>
                      <span className="flex-1 font-serif text-[15px] leading-snug">
                        {s.pageTitle}
                      </span>
                      {isActive && (
                        <span className="font-mono text-[10px] text-primary leading-none">●</span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ─── CONTENT ─────────────────────────────────── */}
          <div className="lg:col-span-9 space-y-20 lg:space-y-24">

            {/* OVERVIEW */}
            <ScrollLoader>
              <article>
                <div className="flex items-center gap-4 mb-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                    Overview
                  </p>
                  <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                </div>

                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white tracking-tight leading-tight mb-8 max-w-3xl">
                  {service.heroTitle}
                </h2>

                <p className="text-[15px] lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  {service.heroDescription}
                </p>
              </article>
            </ScrollLoader>

            {/* OPTIONAL GALLERY — rendered cleanly if data is present */}
            {service.gallery && (
              <ScrollLoader>
                <section>
                  {service.gallery.mainCaption && (
                    <p className="max-w-3xl text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed text-justify mb-12">
                      {service.gallery.mainCaption}
                    </p>
                  )}
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
                    {service.gallery.items.map((item, index) => {
                      const itemNum = String(index + 1).padStart(2, "0");
                      const total = String(service.gallery!.items.length).padStart(2, "0");
                      return (
                        <figure key={index} className="flex flex-col">
                          <div className="relative h-[260px] overflow-hidden rounded-md mb-5">
                            <Image src={item.image} alt={item.alt} fill className="object-cover" />
                          </div>
                          <figcaption>
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-2">
                              {itemNum} / {total} · {item.label}
                            </p>
                            <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                              {item.caption}
                            </p>
                          </figcaption>
                        </figure>
                      );
                    })}
                  </div>
                </section>
              </ScrollLoader>
            )}

            {/* SECTIONS — plain prose, no check bullets */}
            {service.sections.map((section, index) => {
              const sectionNum = String(index + 1).padStart(2, "0");
              return (
                <ScrollLoader key={index}>
                  <article>
                    <div className="flex items-center gap-4 mb-8">
                      <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
                        Section {sectionNum}
                      </p>
                      <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                    </div>

                    <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white tracking-tight leading-tight mb-8 max-w-3xl">
                      {section.title}
                    </h2>

                    <div className="space-y-5 text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </ScrollLoader>
              );
            })}

            {/* WHY CHOOSE — definition list, no boxes / no icons */}
            <ScrollLoader>
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                    Why Integritrade
                  </p>
                  <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                </div>

                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white tracking-tight leading-tight mb-12 max-w-3xl">
                  What you can expect from this engagement.
                </h2>

                <dl className="grid sm:grid-cols-2 gap-x-12 gap-y-10 border-t border-gray-200 dark:border-gray-800 pt-10">
                  {service.whyChoose.map((item, index) => {
                    const num = String(index + 1).padStart(2, "0");
                    return (
                      <div key={index} className="flex flex-col">
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary mb-3">
                          {num}
                        </p>
                        <dt className="font-serif text-lg font-semibold text-gray-900 dark:text-white tracking-tight mb-3">
                          {item.title}
                        </dt>
                        <dd className="text-[14px] text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                          {item.description}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </section>
            </ScrollLoader>

            {/* INDUSTRIES — numbered list with hairlines, no icon pills */}
            <ScrollLoader>
              <section>
                <div className="flex items-center gap-4 mb-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-primary">
                    Industries
                  </p>
                  <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
                </div>

                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white tracking-tight leading-tight mb-12 max-w-3xl">
                  Who we serve.
                </h2>

                <dl className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-gray-200 dark:border-gray-800">
                  {service.industries.map((industry, index) => {
                    const num = String(index + 1).padStart(2, "0");
                    return (
                      <div
                        key={index}
                        className="flex items-baseline gap-4 py-5 border-b border-gray-200 dark:border-gray-800"
                      >
                        <span className="font-mono text-[10px] tabular-nums tracking-widest text-gray-400 dark:text-gray-500">
                          {num}
                        </span>
                        <span className="font-serif text-[15px] text-gray-800 dark:text-gray-200">
                          {industry}
                        </span>
                      </div>
                    );
                  })}
                </dl>
              </section>
            </ScrollLoader>

          </div>
        </div>

        {/* ─── CTA ─────────────────────────────────────── */}
        <div className="mt-24 lg:mt-32">
          <ServicesCTA />
        </div>
      </section>

    </div>
  );
}