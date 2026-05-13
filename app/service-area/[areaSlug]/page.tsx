import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllAreaSlugs, getAreaBySlug } from "@/data/serviceAreas";
import { MapPin, ArrowRight, ArrowLeft, CheckCircle2, ArrowUpRight } from "lucide-react";
import { ServicesBlogCard } from "@/components/service-area/ServicesBlogCard";
import fresnoCVimg from "@/public/services/serviceArea/fresnoCVimg.jpeg";
import Image from "next/image";
import ServicesCertificate from "@/components/service-area/ServicesCertificate";
import ScrollLoader from "@/components/shared/ScrollLoader";
import PageHeader from "@/components/shared/PageHeader";

export function generateStaticParams() {
  return getAllAreaSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ areaSlug: string }>;
}): Promise<Metadata> {
  const { areaSlug } = await params;
  const area = getAreaBySlug(areaSlug);

  if (!area) return {};

  return {
    title: `${area.name} Services`,
    description: `Certified ITAD, e-waste recycling, and data destruction services in ${area.name}. ${area.tagline}`,
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ areaSlug: string }>;
}) {
  const { areaSlug } = await params;
  const area = getAreaBySlug(areaSlug);

  if (!area) notFound();

  const hasServices = area.services.length > 0;

  return (
    <main className="min-h-screen bg-secondary dark:bg-dark overflow-x-hidden">
      {/* Breadcrumb */}
      <div className="py-4">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/service-area"
            className="hover:text-emerald-600 transition-colors"
          >
            Service Areas
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium break-words">
            {area.name}
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <ScrollLoader>
            <PageHeader
                  eyebrow="Service Area"
                  title={area.name}
                  description={area.tagline}
            />
        </ScrollLoader>

      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        {hasServices ? (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {area.services.map((service, index) => (
                <ScrollLoader key={service.slug} delay={index * 0.08}>
                  <ServicesBlogCard
                    key={service.slug}
                    service={service}
                    areaSlug={area.slug}
                  />
                </ScrollLoader>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16 sm:py-20 px-2">
            <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-emerald-500" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 break-words">
              Services Coming to {area.name} Soon
            </h2>

            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8 text-base sm:text-lg leading-relaxed break-words">
              We&apos;re expanding our services to {area.name}. Contact us to
              discuss your needs — we may already be able to help.
            </p>

            <Link
              href="/service-book/"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 sm:px-8 py-3.5 rounded-xl transition-colors duration-200 shadow-md"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        )}
      </section>

      {/* my certificates */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
         <ServicesCertificate />
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className="">
        <div className="mx-auto max-w-7xl">
          <ScrollLoader>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                  <span className="h-px w-8 bg-primary" />
                  Outside Our Map
                </div>
                <h2 className="mt-5 font-serif text-3xl leading-[1.1] tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">
                  Project-quoted pickups for out-of-state retirements.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
                  Fortune 500 fleet retirements, multi-site decommissions, and
                  regulated-industry projects outside California are quoted
                  individually. We staff the project, hold the chain of custody,
                  and report against the same audit standard.
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4 lg:col-span-5">
                <Link
                  href="/service-book/"
                  className="inline-flex items-center justify-between gap-2 rounded-md bg-primary px-5 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Get a free quote
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services/"
                  className="inline-flex items-center justify-between gap-2 rounded-md border border-gray-300 bg-transparent px-5 py-3.5 text-sm font-medium text-gray-900 transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:border-gray-600 dark:hover:bg-gray-900/40"
                >
                  Explore services
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  Talk directly to the team that will handle your equipment. No
                  call centers, no account-manager carousel.
                </p>
              </div>
            </div>
          </ScrollLoader>
        </div>
      </section>
    </main>
  );
}