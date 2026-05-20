import Image from 'next/image';
import Link from 'next/link';
import { AllBlogCards, BlogCard } from '@/data/AllBlogCards';
import { ReactElement } from "react";

const AllBlogCardsComponent = (): ReactElement => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="blogcards space-y-8">
          {AllBlogCards.slice(0, 8).map((blog: BlogCard, index: number) => (
            <article
              key={`${blog.slug}-${index}`}
              className="blogcard group border-b border-gray-100 pb-8 last:border-0 last:pb-0"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Image */}
                <div className="relative w-full md:w-32 h-48 md:h-32 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 128px"
                    className="object-cover"
                    placeholder="blur"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-sm font-medium text-gray-800 dark:text-white mb-3">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      {blog.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 font-light text-sm mb-4 line-clamp-2">
                    {blog.description}
                  </p>
                </div>
              </div>

              <Link
                href={`/blogs/${blog.slug}`}
                className="mt-3 flex items-center justify-between text-sm text-green-600 hover:text-[#2bb563]"
              >
                <span>Continue reading</span>
                <span>→</span>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/blogs"
              className="inline-flex w-full justify-center items-center gap-2 px-6 py-3 text-sm font-medium btn-bg rounded-md"
            >
              View All Articles
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBlogCardsComponent;
