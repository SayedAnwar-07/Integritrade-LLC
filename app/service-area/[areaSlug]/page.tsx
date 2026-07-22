import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight } from "lucide-react";

import { getAllAreaSlugs, getAreaBySlug } from "@/data/serviceAreas";

import { ServicesBlogCard } from "@/components/service-area/ServicesBlogCard";
import ServicesCertificate from "@/components/service-area/ServicesCertificate";
import ScrollLoader from "@/components/shared/ScrollLoader";
import PageHeader from "@/components/shared/PageHeader";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import { generateCityIntro } from "@/data/areas/seo/generateIntro";

type AreaPageProps = {
  params: Promise<{
    areaSlug: string;
  }>;
};

export function generateStaticParams() {
  return getAllAreaSlugs();
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { areaSlug } = await params;
  const area = getAreaBySlug(areaSlug);

  if (!area) {
    return {};
  }

  const cityIntro = generateCityIntro(area.name);

  return {
    title: `${area.name} IT Asset Disposition Services`,
    description: cityIntro,
  };
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { areaSlug } = await params;
  const area = getAreaBySlug(areaSlug);

  if (!area) {
    notFound();
  }

  const cityIntro = generateCityIntro(area.name);
  const hasServices = area.services.length > 0;

  return (
    <main className="min-h-screen overflow-x-hidden bg-secondary dark:bg-dark">
      {/* Breadcrumb */}
      <div className="py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
          <Link
            href="/"
            className="transition-colors hover:text-emerald-600"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            href="/service-area"
            className="transition-colors hover:text-emerald-600"
          >
            Service Areas
          </Link>

          <span>/</span>

          <span className="break-words font-medium text-gray-900 dark:text-white">
            {area.name}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-8">
        <ScrollLoader>
          <PageHeader
            eyebrow="Service Area"
            title={area.name}
            description={cityIntro}
          />
        </ScrollLoader>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <ScrollLoader>
          {hasServices ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {area.services.map((service) => (
                <ServicesBlogCard
                  key={service.slug}
                  service={service}
                  areaSlug={area.slug}
                />
              ))}
            </div>
          ) : (
            <div className="px-2 py-16 text-center sm:py-20">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/30">
                <MapPin className="h-10 w-10 text-emerald-500" />
              </div>

              <h2 className="mb-3 break-words text-2xl font-bold text-gray-900 dark:text-white">
                Services Coming to {area.name} Soon
              </h2>

              <p className="mx-auto mb-8 max-w-md break-words text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
                We&apos;re expanding our services to {area.name}. Contact us to
                discuss your requirements—we may already be able to help.
              </p>

              <Link
                href="/service-book/"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-emerald-700 sm:px-8"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          )}
        </ScrollLoader>
      </section>

      {/* Certificates */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <ServicesCertificate />
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-7xl">
          <ScrollLoader>
            <div className="grid grid-cols-1 gap-12 p-4 lg:grid-cols-12 lg:gap-16 lg:p-12">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 font-mono text-[1rem] font-bold uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400">
                  <span className="h-px w-8 bg-primary" />
                  Outside Our Map
                </div>

                <h2 className="mt-5 font-serif text-3xl leading-[1.1] tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
                  Project-quoted pickups for out-of-state retirements.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
                  Fortune 500 fleet retirements, multi-site decommissions, and
                  regulated-industry projects outside California are quoted
                  individually. We staff the project, maintain the chain of
                  custody, and report against the same audit standards.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4 lg:col-span-5">
                <OutlineButton
                  href="/services/"
                  testId="button-learn-more"
                >
                  View Service Details
                </OutlineButton>

                <PrimaryButton
                  href="/service-book/"
                  testId="button-get-quote"
                >
                  Get a Free Quote
                </PrimaryButton>

                <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  Talk directly to the team that will handle your equipment. No
                  call centers and no account-manager carousel.
                </p>
              </div>
            </div>
          </ScrollLoader>
        </div>
      </section>
    </main>
  );
}