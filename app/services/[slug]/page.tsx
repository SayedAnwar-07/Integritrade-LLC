import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData, getServiceBySlug } from "@/data/servicesData";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ServicesCTA from "@/components/services/Servicescta";
import ScrollLoader from "@/components/shared/ScrollLoader";
import PageHeader from "@/components/shared/PageHeader";

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
          url: "https://integritradellc.com/logo/integritrade-logo.png",
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
      images: ["https://integritradellc.com/logo/integritrade-logo.png"],
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
    <div className="min-h-screen bg-secondary transition-colors duration-300 dark:bg-dark">
      {/* ────────────────────────────────────────────────────────
          HERO
      ──────────────────────────────────────────────────────── */}
      <section>
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-12 lg:pt-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 lg:mb-10"
          >
            <Link
              href="/"
              className="click-feel transition-colors hover:text-primary"
            >
              Home
            </Link>

            <ChevronRight className="h-2.5 w-2.5" />

            <Link
              href="/services/"
              className="click-feel transition-colors hover:text-primary"
            >
              Services
            </Link>

            <ChevronRight className="h-2.5 w-2.5" />

            <span className="text-gray-700 dark:text-gray-300">
              {service.pageTitle}
            </span>
          </nav>

          <ScrollLoader>
            <div>
              <PageHeader
                eyebrow={tier ? `Tier ${tier} · Service Level` : "Service"}
                title={service.pageTitle}
                description={service.pageSubtitle}
              />
            </div>
          </ScrollLoader>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          HERO IMAGE
      ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollLoader>
          <figure className="relative h-[320px] overflow-hidden rounded-md md:h-[440px]">
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
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ─── SIDEBAR ─────────────────────────────────── */}
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-gray-500 dark:text-gray-400">
                All Services
              </p>

              <nav aria-label="All services">
                {servicesData.map((s, idx) => {
                  const num = String(idx + 1).padStart(2, "0");
                  const isActive = s.slug === service.slug;

                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}/`}
                      className={`click-feel group flex items-baseline gap-4 border-b border-gray-200 py-3.5 transition-colors dark:border-gray-800 ${
                        isActive
                          ? "text-primary"
                          : "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] tabular-nums tracking-widest ${
                          isActive
                            ? "text-primary"
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                      >
                        {num}
                      </span>

                      <span className="flex-1 font-serif text-[15px] leading-snug">
                        {s.pageTitle}
                      </span>

                      {isActive && (
                        <span className="font-mono text-[10px] leading-none text-primary">
                          ●
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ─── CONTENT ─────────────────────────────────── */}
          <div className="space-y-14 lg:col-span-9 lg:space-y-16">
            {/* OVERVIEW */}
            <ScrollLoader>
              <article>
                <h2 className="mb-5 max-w-3xl font-serif text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-3xl">
                  {service.heroTitle}
                </h2>

                <p className="custom-text-center text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base">
                  {service.heroDescription}
                </p>
              </article>
            </ScrollLoader>

            {/* SECTIONS — plain prose, no check bullets */}
            {service.sections.map((section, index) => {
              const sectionNum = String(index + 1).padStart(2, "0");

              return (
                <ScrollLoader key={index}>
                  <article>
                    <h2 className="mb-5 max-w-3xl font-serif text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-3xl">
                      {section.title}
                    </h2>

                    {section.intro && (
                      <p className="custom-text-center mb-8 max-w-3xl text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                        {section.intro}
                      </p>
                    )}

                    {section.items && (
                      <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                        {section.items.map((item, i) => (
                          <div
                            key={i}
                            className="flex flex-col border-l-2 border-primary/40 pl-5"
                          >
                            <dt className="mb-2 font-serif text-base font-semibold text-gray-900 dark:text-white">
                              {item.label}
                            </dt>

                            <dd className="text-[14px] leading-relaxed text-gray-700 dark:text-gray-300">
                              {item.description}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    {section.compare && (
                      <div className="pt-6">
                        <div className="mb-2 grid grid-cols-2 gap-x-8 border-b border-gray-200 pb-4 dark:border-gray-800">
                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
                            {section.compare.leftLabel}
                          </p>

                          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                            {section.compare.rightLabel}
                          </p>
                        </div>

                        <dl className="divide-y divide-gray-200 dark:divide-gray-800">
                          {section.compare.rows.map((row, i) => (
                            <div
                              key={i}
                              className="grid grid-cols-2 gap-x-8 py-4"
                            >
                              <dt className="text-[14px] leading-relaxed text-gray-500 line-through decoration-gray-300 dark:text-gray-500 dark:decoration-gray-700">
                                {row.left}
                              </dt>

                              <dd className="text-[14px] font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                                {row.right}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    )}

                    {section.content && (
                      <div className="custom-text-center space-y-4 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">
                        {section.content.map((paragraph, pIndex) => (
                          <p
                            key={pIndex}
                            className="[&_strong]:font-semibold [&_strong]:text-black dark:[&_strong]:text-white"
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                          />
                        ))}
                      </div>
                    )}
                  </article>
                </ScrollLoader>
              );
            })}

            {/* WHY CHOOSE — definition list, no boxes / no icons */}
            <ScrollLoader>
              <section>
                <h2 className="mb-7 max-w-3xl font-serif text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-3xl">
                  What you can expect from this engagement.
                </h2>

                <dl className="grid gap-x-12 gap-y-3 sm:grid-cols-2">
                  {service.whyChoose.map((item, index) => {
                    return (
                      <div key={index} className="flex flex-col">
                        <dt className="mb-2 font-serif text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                          {item.title}
                        </dt>

                        <dd className="custom-text-center text-[14px] leading-relaxed text-gray-700 dark:text-gray-300">
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
                <h2 className="mb-7 max-w-3xl font-serif text-2xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-3xl">
                  Who we serve
                </h2>

                <dl className="grid sm:grid-cols-2 lg:grid-cols-3">
                  {service.industries.map((industry, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-baseline gap-4 border-b border-gray-200 py-4 dark:border-gray-800"
                      >
                        <Link
                          href={industry.href}
                          className="
                            font-serif text-[15px] text-gray-800
                            transition-all duration-150
                            hover:text-primary
                            active:translate-y-[1px]
                            active:scale-95
                            dark:text-gray-200
                            dark:hover:text-primary
                          "
                        >
                          {industry.label}
                        </Link>
                      </div>
                    );
                  })}
                </dl>
              </section>
            </ScrollLoader>
          </div>
        </div>

        {/* ─── CTA ─────────────────────────────────────── */}
        <div className="mt-20 lg:mt-24">
          <ServicesCTA />
        </div>
      </section>
    </div>
  );
}