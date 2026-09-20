import Image, { type StaticImageData } from "next/image";
import { Calendar, Tag } from "lucide-react";

import PageHeader from "@/components/shared/PageHeader";
import AllBlogCardsComponent from "@/components/EightBlogCards";
import ScrollLoader from "@/components/shared/ScrollLoader";
import { blogReadTimes } from "@/data/blogReadTimes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Shared renderer for the articles Ian supplies as markdown.
 *
 * The 30-odd older posts are each a hand-written component, which means the
 * same 370 lines of header, meta row, figure, FAQ accordion, references block
 * and sidebar are copied per post. The markup below is that structure, lifted
 * verbatim so new posts are visually identical to the existing ones, with the
 * prose moved into data. Same result on screen, one place to change it.
 *
 * Existing posts are deliberately left alone. This is for new ones.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] };

export type ArticleSection = {
  heading: string;
  blocks: ArticleBlock[];
};

export type ArticleFAQ = { question: string; answer: string };

export type ArticleReference = { n: number; label: string; href: string };

export type Article = {
  slug: string;
  /** H1 and <title> base. */
  title: string;
  /** Sits under the H1 and doubles as the meta description. */
  description: string;
  metaTitle: string;
  category: string;
  /** Human date, e.g. "September 20, 2026". */
  date: string;
  /** Machine date for <time dateTime>, e.g. "2026-09-20". */
  dateISO: string;
  readMinutes: number;
  image: StaticImageData;
  imageAlt: string;
  /** Card blurb on the blog index. */
  cardDescription: string;
  intro: ArticleBlock[];
  sections: ArticleSection[];
  faqs: ArticleFAQ[];
  references: ArticleReference[];
};

/**
 * Ian's copy is SEO-planned, so it is stored exactly as he wrote it, markdown
 * and all, and rendered here. That keeps his keyword phrasing, his bolding and
 * — the part that matters most — his internal links to /tracetech/,
 * /industries/education/ and so on, rather than flattening them to plain text.
 */
function RichText({ text }: { text: string }) {
  // **bold** and [label](href), in one pass so they cannot overlap badly.
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;

        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-gray-900 dark:text-white">
              {part.slice(2, -2)}
            </strong>
          );
        }

        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          const external = /^https?:\/\//.test(href) && !href.includes("integritradellc.com");
          return (
            <a
              key={i}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="font-medium text-[#19723e] underline underline-offset-4 transition-colors hover:text-[#2aac61] dark:text-emerald-400"
            >
              {label}
            </a>
          );
        }

        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

/** Renders one content block inside a section. */
function Block({ block }: { block: ArticleBlock }) {
  if (block.type === "h3") {
    return (
      <h3 className="pt-3 font-serif text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {block.text}
      </h3>
    );
  }

  if (block.type === "quote") {
    return (
      <blockquote className="border-l-2 border-[#2aac61] pl-5 italic text-stone-600 dark:text-gray-300">
        <RichText text={block.text} />
      </blockquote>
    );
  }

  if (block.type === "p") {
    return (
      <p className="custom-text-center">
        <RichText text={block.text} />
      </p>
    );
  }

  if (block.type === "ul") {
    return (
      <ul className="space-y-3">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2aac61]" />
            <span className="min-w-0">
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "ol") {
    return (
      <ol className="space-y-3">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-0.5 font-mono text-[13px] font-bold text-[#19723e] dark:text-emerald-400">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0">
              <RichText text={item} />
            </span>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <div className="mt-8 overflow-x-auto rounded-md border border-gray-200 dark:border-gray-800">
      <table className="w-full min-w-[520px] bg-white text-left dark:bg-dark-secondary">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-800">
            {block.head.map((h) => (
              <th
                key={h}
                className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {block.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, k) => (
                <td
                  key={k}
                  className={
                    k === 0
                      ? "px-6 py-4 text-sm font-medium text-gray-900 dark:text-white"
                      : "px-6 py-4 text-sm text-gray-700 dark:text-gray-300"
                  }
                >
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ArticleLayout({ article }: { article: Article }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className="bg-secondary pb-16 pt-10 transition-colors duration-300 dark:bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <ScrollLoader>
          <PageHeader
            eyebrow={article.category}
            title={article.title}
            description={article.description}
          />
        </ScrollLoader>

        {/* Meta row */}
        <ScrollLoader>
          <div className="my-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={article.dateISO}>{article.date}</time>
            </div>
            <span className="hidden text-gray-300 dark:text-gray-700 sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span>{article.category}</span>
            </div>
            <span className="hidden text-gray-300 dark:text-gray-700 sm:inline">•</span>
            {/* blogReadTimes is generated from the rendered page by
                scripts/build-read-times.mjs, the same source the rest of the
                blog uses. The value on the article is only a fallback for a
                post that has not been through that script yet. */}
            <span>{blogReadTimes[article.slug] ?? article.readMinutes} min read</span>
          </div>
        </ScrollLoader>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
          <article className="min-w-0 lg:col-span-2">
            {/* Featured image */}
            <ScrollLoader>
              <figure className="mb-12 overflow-hidden rounded-md">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 860px"
                  priority
                />
              </figure>
            </ScrollLoader>

            {/* Introduction */}
            <ScrollLoader>
              <div className="mb-16 space-y-5 leading-relaxed text-gray-700 dark:text-gray-300">
                {article.intro.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
            </ScrollLoader>

            {/* Body */}
            {article.sections.map((section) => (
              <ScrollLoader key={section.heading}>
                <section className="mb-16">
                  <h2 className="mb-6 font-serif text-2xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="space-y-5 leading-relaxed text-gray-700 dark:text-gray-300">
                    {section.blocks.map((block, i) => (
                      <Block key={i} block={block} />
                    ))}
                  </div>
                </section>
              </ScrollLoader>
            ))}

            {/* FAQs */}
            {article.faqs.length > 0 && (
              <ScrollLoader>
                <section className="mb-16">
                  <h2 className="mb-6 font-serif text-2xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-3xl">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {article.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-left text-lg font-medium text-gray-900 dark:text-white">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="custom-text-center leading-relaxed text-gray-700 dark:text-gray-300">
                            <RichText text={faq.answer} />
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              </ScrollLoader>
            )}

            {/* References */}
            {article.references.length > 0 && (
              <ScrollLoader>
                <section className="mb-10">
                  <h2 className="mb-4 font-serif text-2xl font-semibold tracking-tight text-gray-900 dark:text-white md:text-3xl">
                    References
                  </h2>
                  <div className="space-y-3 leading-relaxed text-gray-700 dark:text-gray-300">
                    {article.references.map((r) => (
                      <p key={r.n}>
                        [{r.n}]{" "}
                        <a
                          href={r.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium transition-all duration-300 hover:text-blue-600 hover:underline dark:hover:text-blue-400"
                        >
                          {r.label}
                        </a>
                      </p>
                    ))}
                  </div>
                </section>
              </ScrollLoader>
            )}
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:col-span-1 lg:block">
            <div className="sticky top-24">
              <AllBlogCardsComponent />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
