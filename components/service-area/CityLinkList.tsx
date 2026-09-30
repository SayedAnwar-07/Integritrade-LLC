import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type CityLink = { href: string; label: string };

/**
 * A heading plus a grid of city links, in the same list style as the cities
 * on the service-area page. Used for "nearby" links on city pages and the
 * city links on the main service pages (see lib/serviceAreaLinks.ts).
 */
export default function CityLinkList({
  id,
  heading,
  intro,
  links,
  wide = false,
  className = "",
}: {
  id: string;
  heading: string;
  intro?: string;
  links: CityLink[];
  /** Long labels ("IT asset disposition in San Diego") get fewer columns. */
  wide?: boolean;
  className?: string;
}) {
  if (!links.length) return null;

  return (
    <section aria-labelledby={id} className={className}>
      <h2
        id={id}
        className="font-serif text-2xl leading-tight tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl"
      >
        {heading}
      </h2>

      {intro && (
        <p className="mt-3 max-w-2xl text-[15px] leading-7 text-gray-600 dark:text-gray-300">
          {intro}
        </p>
      )}

      <ul
        className={`mt-6 grid gap-x-6 gap-y-1 ${
          wide ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-2 sm:grid-cols-3"
        }`}
      >
        {links.map((l) => (
          <li key={l.href} className="min-w-0 border-b border-gray-200 py-2.5 dark:border-gray-800">
            <Link
              href={l.href}
              className="group/city flex items-center justify-between gap-2 text-sm font-medium text-primary transition-colors hover:text-emerald-700 dark:hover:text-emerald-400 click-feel"
            >
              <span className="min-w-0">{l.label}</span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0 -translate-x-1 transition group-hover/city:translate-x-0"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
