import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import SectionHeader from "../shared/PageHeader";
import ScrollLoader from "../shared/ScrollLoader";

import { AllBlogCards } from "@/data/BlogCardsData";
import { readTimeFor } from "@/data/blogReadTimes";

const truncate = (text: string, words: number) => {
  const parts = text.split(" ");

  return parts.length > words
    ? `${parts.slice(0, words).join(" ")}…`
    : text;
};

const latestBlogs = [...AllBlogCards]
  .sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  .slice(0, 3);

export default function BlogHomeSection() {
  return (
    <section className="mt-16 bg-secondary pb-16 transition-colors duration-300 dark:bg-dark md:mt-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <ScrollLoader>
          <SectionHeader
            as="h2"
            eyebrow="From the Insights"
            title="ITAD insights, guides, and compliance resources"
            description="Expert guidance on certified data destruction, secure chain of custody, and asset recovery so you know exactly what happens to your retired IT equipment."
            linkText="View all insights"
            linkHref="/blogs/"
          />
        </ScrollLoader>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latestBlogs.map((blog, index) => (
            <ScrollLoader key={blog.slug} delay={index * 0.08}>
              <article className="group h-full">
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="flex h-full flex-col overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg transition-all duration-300 ease-out hover:border-emerald-600/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:border-gray-800 dark:bg-dark-secondary dark:hover:border-emerald-500/40"
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
                    <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-500">
                      <time dateTime={new Date(blog.date).toISOString()}>
                        {blog.date}
                      </time>

                      {readTimeFor(blog.slug) && (
                        <>
                          <span
                            aria-hidden="true"
                            className="text-gray-300 dark:text-gray-700"
                          >
                            •
                          </span>

                          <span className="text-gray-500 dark:text-gray-400">
                            {`${readTimeFor(blog.slug)} min read`}
                          </span>
                        </>
                      )}
                    </div>

                    <h2 className="mb-3 min-h-[3.5rem] line-clamp-2 font-serif text-xl leading-snug text-gray-900 transition-colors group-hover:text-emerald-700 dark:text-gray-50 dark:group-hover:text-emerald-400">
                      {blog.title}
                    </h2>

                    <p className="custom-text-center mb-6 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {truncate(blog.description, 70)}
                    </p>

                    <div className="click-feel mt-auto flex items-center gap-1.5 border-t border-gray-100 pt-4 dark:border-gray-800">
                      <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-700 dark:text-gray-300">
                        Read article
                      </span>

                      <ArrowUpRight
                        size={14}
                        strokeWidth={2}
                        className="text-emerald-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-emerald-500"
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