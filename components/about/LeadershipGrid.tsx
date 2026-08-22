"use client";

import { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export type Person = {
  name: string;
  role: string;
  image: StaticImageData;
  /** One entry per rendered <p>. Rendered exactly once — never duplicated. */
  bio: string[];
  chips: string[];
  /** Omit or leave empty to hide the button rather than ship a dead link. */
  linkedin?: string;
  /** CSS object-position for the portrait crop, e.g. "center 30%". */
  imgPos?: string;
  /** Zoom factor for portraits with lots of baked-in padding. */
  imgZoom?: number;
  profileHref?: string;
  priority?: boolean;
};

export type Stat = { value: string; label: string };

/**
 * Leadership card grid.
 *
 * The interaction lives in CSS so it still works without JS; this script only
 * adds the scroll stagger, the cursor spotlight, and tap-to-open on touch.
 * Every :hover rule is mirrored with :focus-within so keyboard users get the
 * same expansion when they tab into a card.
 */
export default function LeadershipGrid({
  people,
  stats,
  headline,
  gradientWord,
  intro,
  eyebrow = "Leadership",
}: {
  people: Person[];
  stats: Stat[];
  /** Split into words for the load reveal. Must match the approved H1 text. */
  headline: string;
  /** The single word rendered in the brand gradient. */
  gradientWord: string;
  intro: string;
  eyebrow?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cards = Array.from(
      root.querySelectorAll<HTMLElement>("[data-lead-card]")
    );

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let io: IntersectionObserver | null = null;
    if (reduce) {
      cards.forEach((c) => c.classList.add("is-in"));
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            const delay = (Number(el.dataset.index ?? 0) % 3) * 110;
            window.setTimeout(() => el.classList.add("is-in"), delay);
            io?.unobserve(el);
          });
        },
        { threshold: 0.15 }
      );
      cards.forEach((c) => io!.observe(c));
    }

    const onMove = (ev: MouseEvent) => {
      const card = ev.currentTarget as HTMLElement;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${ev.clientX - r.left}px`);
      card.style.setProperty("--my", `${ev.clientY - r.top}px`);
    };
    if (!reduce) cards.forEach((c) => c.addEventListener("mousemove", onMove));

    // Touch devices get no hover behaviour at all — an explicit
    // "Read more" button expands the bio in place instead.
    const buttons = Array.from(
      root.querySelectorAll<HTMLButtonElement>(".lead-more")
    );
    const onToggle = (ev: Event) => {
      const btn = ev.currentTarget as HTMLButtonElement;
      const card = btn.closest<HTMLElement>("[data-lead-card]");
      if (!card) return;
      const open = card.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Show less" : "Read more";
    };
    buttons.forEach((b) => b.addEventListener("click", onToggle));

    return () => {
      io?.disconnect();
      cards.forEach((c) => c.removeEventListener("mousemove", onMove));
      buttons.forEach((b) => b.removeEventListener("click", onToggle));
    };
  }, []);

  const words = headline.split(" ");

  return (
    <div ref={rootRef} className="lead">
      <p className="lead-eyebrow">{eyebrow}</p>

      <h1 className="lead-h1">
        {words.map((w, i) => {
          const clean = w.replace(/[^A-Za-z]/g, "");
          const isGrad = clean.toLowerCase() === gradientWord.toLowerCase();
          return (
            <span
              key={`${w}-${i}`}
              className={`lead-word${isGrad ? " lead-grad" : ""}`}
              style={{ animationDelay: `${0.05 + i * 0.07}s` }}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </span>
          );
        })}
      </h1>

      <p className="lead-sub">{intro}</p>

      <div className="lead-grid">
        {people.map((p, i) => (
          <article
            key={p.name}
            data-lead-card
            data-index={i}
            className="lead-card"
          >
            <span className="lead-spot" aria-hidden="true" />
            <span className="lead-ring" aria-hidden="true" />
            <span className="lead-ring lead-ring-lit" aria-hidden="true" />

            {p.linkedin ? (
              <a
                className="lead-li"
                href={p.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} on LinkedIn`}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    fill="currentColor"
                    d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
                  />
                </svg>
              </a>
            ) : null}

            <div className="lead-media">
              <Image
                src={p.image}
                alt={`${p.name}, ${p.role} of Integritrade`}
                width={420}
                height={384}
                sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
                className="lead-img"
                style={
                  {
                    objectPosition: p.imgPos ?? "center 25%",
                    "--img-zoom": p.imgZoom ?? 1,
                  } as React.CSSProperties
                }
                priority={p.priority}
                loading={p.priority ? undefined : "lazy"}
              />
            </div>

            <div className="lead-body">
              <p className="lead-role">{p.role}</p>
              <h3 className="lead-name">{p.name}</h3>
              <span className="lead-rule" aria-hidden="true" />

              {/* Bio rendered ONCE: the first paragraph clamps, the rest
                  collapse to max-height 0. All text stays in the DOM. */}
              <div className="lead-bio">
                {p.bio.map((para, bi) => (
                  <p
                    key={bi}
                    className={bi === 0 ? "lead-p lead-p-first" : "lead-p"}
                    style={{ transitionDelay: `${0.2 + bi * 0.12}s` }}
                  >
                    {para}
                  </p>
                ))}

                <div className="lead-tags">
                  {p.chips.map((c) => (
                    <span key={c} className="lead-tag">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="lead-more"
                aria-expanded="false"
              >
                Read more
              </button>

              <div className="lead-foot">
                {p.profileHref ? (
                  <Link className="lead-lnk" href={p.profileHref}>
                    Full profile <span aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <span />
                )}
                <span className="lead-idx">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(people.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="lead-strip">
        {stats.map((s) => (
          <div key={s.label} className="lead-stat">
            <b>{s.value}</b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
