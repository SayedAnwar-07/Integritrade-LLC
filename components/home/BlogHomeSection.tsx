import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import SectionHeader from "../shared/PageHeader";
import ScrollLoader from "../shared/ScrollLoader";

import assetRecoveryBanner from "@/public/blogs/asset-recovery.jpg";
import r2_certified from "@/public/blogs/R2-Certified1.jpg";
import ITADFresnoImage from "@/public/blogs/ITADFresnoImage.png";


const truncate = (text: string, words: number) => {
  const parts = text.split(" ");
  return parts.length > words ? parts.slice(0, words).join(" ") + "…" : text;
};

const blogs = [
  {
    image: ITADFresnoImage,
    title:
      "IT Asset Disposition in Fresno, CA: Secure and Compliant ITAD for Local Businesses",
    description:
      "Learn how IT Asset Disposition (ITAD) works for businesses in Fresno, CA, and why secure data destruction, asset recovery, and compliance matter when retiring IT equipment.",
    date: "February 22, 2026",
    slug: "it-asset-disposition-fresno-ca",
  },
  {
    image: r2_certified,
    title: "Why Choosing an R2-Certified Recycler Matters?",
    description:
      "In today's world, managing electronic waste (e-waste) responsibly is more critical than ever. Improper disposal can lead to severe environmental damage, data breaches, and legal liabilities. For businesses that generate e-waste, choosing an R2-certified recycler ensures that their electronic equipment is handled safely, ethically, and in compliance with international regulations.",
    date: "December 22, 2025",
    slug: "r2-certified-e-waste-recycling-services",
  },
  {
    // TODO: replace with your real data object for this slug
    image: assetRecoveryBanner,
    title: "IT Asset Recovery Services: How to Maximize the Value of Retired Equipment",
    description:
      "Retiring IT equipment doesn't have to mean a total loss. Learn how asset recovery and revenue-sharing turn end-of-life hardware into recovered value for your business.",
    date: "January 15, 2026",
    slug: "it-asset-recovery-services-maximize-value",
  },
];

export default function BlogHomeSection() {
  return (
    <section className="bg-secondary dark:bg-dark py-24 lg:py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollLoader>
          <SectionHeader
            eyebrow="From the Blog"
            title="ITAD insights, guides, and compliance resources"
            description="Expert guidance on certified data destruction, secure chain of custody, and asset recovery so you know exactly what happens to your retired IT equipment."
            linkText="View all articles"
            linkHref="/blogs/"
          />
        </ScrollLoader>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {blogs.map((blog, index) => (
            <ScrollLoader key={blog.slug} delay={index * 0.08}>
              <article className="group h-full">
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="flex h-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 ease-out hover:border-emerald-600/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-gray-800 dark:bg-dark-secondary dark:hover:border-emerald-500/40 shadow-lg"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <time
                      dateTime={new Date(blog.date).toISOString()}
                      className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-500"
                    >
                      {blog.date}
                    </time>

                    <h2 className="mb-3 font-serif text-xl leading-snug text-gray-900 transition-colors group-hover:text-emerald-700 dark:text-gray-50 dark:group-hover:text-emerald-400 line-clamp-2 min-h-[3.5rem]">
                      {blog.title}
                    </h2>

                    <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3 text-justify">
                      {truncate(blog.description, 70)}
                    </p>

                    <div className="mt-auto flex items-center gap-1.5 border-t border-gray-100 pt-4 dark:border-gray-800 click-feel">
                      <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-700 dark:text-gray-300">
                        Read article
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-emerald-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-emerald-500"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </Link>
              </article>
            </ScrollLoader>
          ))}
        </div>
      </div>
    </section>
  );
}