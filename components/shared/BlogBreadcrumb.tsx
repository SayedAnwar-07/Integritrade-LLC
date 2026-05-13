"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AllBlogCards } from "@/data/BlogCardsData";
import { truncate } from "@/lib/truncate";

type BlogBreadcrumbProps = {
  slug: string;
};

export default function BlogBreadcrumb({ slug }: BlogBreadcrumbProps) {
  const blog = AllBlogCards.find((b) => b.slug === slug);

  if (!blog) return null;

  return (
    <div className="bg-secondary dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 pt-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
        >
          <Link
            href="/"
            className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
          >
            Home
          </Link>

          <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-700" />

          <Link
            href="/blogs"
            className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
          >
            Blogs
          </Link>

          <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-700" />

          <span
            className="font-medium text-gray-900 dark:text-white truncate max-w-[60ch]"
            aria-current="page"
          >
            {blog.title}
          </span>
        </nav>
      </div>
    </div>
  );
}