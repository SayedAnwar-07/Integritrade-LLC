import { Fragment } from "react";
import Image, { type StaticImageData } from "next/image";

/**
 * Our Team hero: the team photo behind the page intro (2026-09-28).
 *
 * The photo is a wide banner whose left third is a soft, empty haze made for
 * text, with the people on the right.
 * - Laptop and up: the photo fills the hero behind the text. Its left edge is
 *   pinned to the content column, so on wide screens the haze stays under the
 *   heading instead of the first person sliding in behind it. It fades into
 *   the page on the left and at the bottom.
 * - Phone and tablet: the photo is a banner on top with the heading laid over
 *   its lower edge (the shirts and table, below everyone's faces) on a dark
 *   scrim, and the intro paragraph underneath.
 *
 * One DOM serves both: below 1024px the two wrappers switch to
 * `display: contents`, so the heading block and the paragraph become cells of
 * a grid and the heading can share the photo's cell. That keeps a single H1.
 * Layout lives in globals.css (.team-hero). Typography reuses the Leadership
 * intro classes (.lead-eyebrow, .lead-h1, .lead-word, .lead-sub).
 */
export default function TeamHero({
  image,
  eyebrow,
  headline,
  intro,
}: {
  image: StaticImageData;
  eyebrow: string;
  headline: string;
  intro: string;
}) {
  // One line per sentence ("Engineering Rigor." / "Executive Accountability."),
  // so the heading never breaks mid-phrase; a long sentence can still wrap
  // inside its own line on narrow screens. Word index keeps running across
  // sentences for the staggered reveal.
  const sentences = headline.split(/(?<=\.)\s+/).map((s) => s.split(" "));
  const starts = sentences.map((_, si) =>
    sentences.slice(0, si).reduce((n, s) => n + s.length, 0)
  );

  return (
    <header className="lead team-hero relative isolate overflow-hidden">
      <div className="team-hero-grid">
        <div className="team-hero-media">
          {/* Decorative: the people are not named team members, so no alt. */}
          <Image
            src={image}
            alt=""
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="team-hero-img object-cover object-[62%_center] lg:object-left"
          />
          <span aria-hidden="true" className="team-hero-scrim lg:hidden" />
          <span aria-hidden="true" className="team-hero-fade-l hidden lg:block" />
          <span aria-hidden="true" className="team-hero-fade-b hidden lg:block" />
        </div>

        <div className="team-hero-inner mx-auto max-w-[1400px] lg:flex lg:min-h-[540px] lg:items-center lg:px-8 lg:py-20 xl:min-h-[580px] 2xl:min-h-[600px]">
          <div className="team-hero-copy">
            <div className="team-hero-head">
              <p className="lead-eyebrow">{eyebrow}</p>

              <h1 className="lead-h1">
                {sentences.map((words, si) => (
                  <span key={si}>
                    <span className="team-hero-line">
                      {/* The space sits between the word spans, not inside
                          them: an inline-block drops its trailing space, which
                          would make the page text read "EngineeringRigor." */}
                      {words.map((w, wi) => (
                        <Fragment key={`${w}-${wi}`}>
                          <span
                            className="lead-word"
                            style={{ animationDelay: `${0.05 + (starts[si] + wi) * 0.07}s` }}
                          >
                            {w}
                          </span>
                          {wi < words.length - 1 ? " " : null}
                        </Fragment>
                      ))}
                    </span>
                    {/* Keeps "Rigor. Executive" separated in the page text. */}
                    {si < sentences.length - 1 ? " " : ""}
                  </span>
                ))}
              </h1>
            </div>

            <p className="lead-sub">{intro}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
