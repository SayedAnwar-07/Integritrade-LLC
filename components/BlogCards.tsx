"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AllBlogCards } from "@/data/BlogCardsData";
import { truncate } from "@/lib/truncate";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ScrollLoader from "./shared/ScrollLoader";

const POSTS_PER_PAGE = 6;

export function BlogCards() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(AllBlogCards.length / POSTS_PER_PAGE);

  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return AllBlogCards.slice(start, start + POSTS_PER_PAGE);
  }, [currentPage]);

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    // Scroll to top of grid smoothly
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  // Build page numbers with ellipsis logic
  const pageNumbers = useMemo(() => {
    const pages: (number | "ellipsis")[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) pages.push("ellipsis");

      // Pages around current
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("ellipsis");

      // Always show last page
      pages.push(totalPages);
    }
    return pages;
  }, [currentPage, totalPages]);

  return (
    <>
      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {paginatedBlogs.map((blog, idx) => (
          <ScrollLoader key={blog.slug} delay={idx * 0.08}>
            <article key={blog.slug} className="group h-full">
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

                  <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-3">
                    {truncate(blog.description, 70)}
                  </p>

                  <div className="mt-auto flex items-center gap-1.5 border-t border-gray-100 pt-4 dark:border-gray-800">
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

      {/* Pagination — only show if more than one page */}
      {totalPages > 1 && (
        <div className="mt-16 flex flex-col items-center gap-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage(currentPage - 1);
                  }}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-40"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>

              {pageNumbers.map((page, i) =>
                page === "ellipsis" ? (
                  <PaginationItem key={`ellipsis-${i}`}>
                    <PaginationEllipsis />
                  </PaginationItem>
                ) : (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={page === currentPage}
                      onClick={(e) => {
                        e.preventDefault();
                        goToPage(page);
                      }}
                      className="cursor-pointer"
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goToPage(currentPage + 1);
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-40"
                      : "cursor-pointer"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

          {/* Page indicator — small editorial touch */}
          <p className="text-xs uppercase tracking-[0.15em] text-gray-500 dark:text-gray-500">
            Page {currentPage} of {totalPages} ·{" "}
            <span className="text-gray-700 dark:text-gray-300">
              {AllBlogCards.length} articles
            </span>
          </p>
        </div>
      )}
    </>
  );
}