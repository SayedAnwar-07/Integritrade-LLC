/**
 * Turn Ian's supplied markdown articles into data/blogArticles.ts.
 *
 *   node scripts/import-blog-articles.mjs
 *
 * The copy is SEO-planned, so nothing here rewrites it. The parser keeps his
 * wording, his bolding and his inline links exactly as written and only moves
 * them into the shape ArticleLayout renders. Re-run it whenever he sends a new
 * article or edits an existing one; the generated file is not hand-edited.
 *
 * Expected markdown shape (all four of his articles follow it):
 *   # Title
 *   optional --- frontmatter --- or "**Suggested URL:** ..." lines
 *   intro paragraphs
 *   ## Section heading
 *   paragraphs / "- " bullets / "1. " numbers / | tables | / ### subheadings
 *   ## Frequently asked questions ...      <- ### under here become FAQs
 *   ## References
 *   [1]: https://...  "Label"
 */
import fs from "node:fs";
import path from "node:path";

const SRC_DIR = "c:/Users/zypher/Desktop/inte/newblog-";
const OUT = "data/blogArticles.ts";

// Per-article facts the markdown does not carry: cover image, category, date.
// Covers are the four that were not already a card image for an existing post.
const CONFIG = {
  "how-to-assess-electronics-recycling-it-asset-disposal-provider": {
    file: "How to Assess an Electronics Recycling or IT Asset Disposal Provider Before You Sign.md",
    image: "ITAD_Vendor",
    imageFile: "ITAD_Vendor.jpg",
    category: "Vendor Selection",
    imageAlt:
      "Two professionals reviewing an IT asset disposition process on screen in a warehouse of racked equipment",
  },
  "bfsi-it-asset-disposition-financial-services-data-destruction": {
    file: "BFSI IT Asset Disposition_ Financial Services Data Destruction, ITAD, and Electronics Recycling.md",
    image: "BfsiCover",
    imageFile: "bloge-cover.jpg",
    category: "Financial Services",
    imageAlt: "Rows of data-center racks lit in blue, representing retired financial services IT infrastructure",
  },
  "law-firm-it-asset-disposition-legal-data-destruction": {
    file: "Law Firm IT Asset Disposition_ A Practical Guide to Legal Data Destruction and Secure Technology Recycling.md",
    image: "LawFirmCover",
    imageFile: "value-data-security.webp",
    category: "Legal & Professional",
    imageAlt: "Secure handling of retired legal technology and data-bearing devices",
  },
  "ferpa-school-it-asset-disposition-chromebook-recycling-student-data-destruction": {
    file: "FERPA-Focused School IT Asset Disposition_ Chromebook Recycling and Student Data Destruction.md",
    image: "FerpaCover",
    imageFile: "blogs-cover.jpg",
    category: "Education",
    imageAlt:
      "Circuit boards arranged into a recycling symbol surrounded by retired electronic devices",
  },
};

// One article (the .docx one) hyperlinks its citations inline as [1](url) and
// leaves its References heading empty, rather than using [1]: url "Label"
// definitions like the other three. These labels let the importer rebuild a
// proper References list from those inline links so every article ends the
// same way.
const REF_LABELS = {
  "https://www.epa.gov/smm-electronics/certified-electronics-recyclers":
    "U.S. Environmental Protection Agency, Certified Electronics Recyclers",
  "https://sustainableelectronics.org/find-an-r2-certified-facility/":
    "SERI, Find an R2 Certified Facility",
  "https://www.iso.org/certification.html": "ISO, Certification",
  "https://iaf.nu/en/certsearch/": "International Accreditation Forum, IAF CertSearch",
  "https://csrc.nist.gov/pubs/sp/800/88/r2/final":
    "NIST SP 800-88 Rev. 2, Guidelines for Media Sanitization",
  "https://integritradellc.com/about/our-equipment/":
    "Integritrade Equipment and Data Destruction Methods",
  "https://integritradellc.com/tracetech/": "TraceTech Asset Tracking by Integritrade",
};

const DATE = "September 20, 2026";
const DATE_ISO = "2026-09-20";
const WPM = 225;

/* ── helpers ─────────────────────────────────────────────────────────────── */

const isHeading = (l) => /^#{1,6}\s/.test(l);
const headingLevel = (l) => l.match(/^(#+)\s/)[1].length;
const headingText = (l) => l.replace(/^#+\s*/, "").trim();
const isBullet = (l) => /^[-*]\s+/.test(l);
const isNumbered = (l) => /^\d+\.\s+/.test(l);
const isTableRow = (l) => l.trim().startsWith("|");
const isQuote = (l) => /^>\s+/.test(l);
const isTableDivider = (l) => /^\|[\s:|-]+\|$/.test(l.trim());
const cells = (l) =>
  l.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

/** Strip a leading "**Label:**" run that Word merged into one paragraph. */
function splitMetaLine(text) {
  const out = {};
  const re = /\*\*(Suggested URL|Suggested SEO title|SEO title|Suggested meta description|Meta description):\*\*\s*/g;
  const parts = text.split(re);
  for (let i = 1; i < parts.length; i += 2) {
    out[parts[i]] = (parts[i + 1] || "").trim();
  }
  return out;
}

/** Group consecutive body lines into paragraph / list / table blocks. */
function toBlocks(lines) {
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i++; continue; }

    if (isHeading(line) && headingLevel(line) >= 3) {
      blocks.push({ type: "h3", text: headingText(line) });
      i++;
      continue;
    }

    if (isQuote(line)) {
      // Ian quotes NIST directly in the FERPA article. Without this the ">"
      // rendered as a literal character on the page.
      blocks.push({ type: "quote", text: line.replace(/^>\s+/, "").trim() });
      i++;
      continue;
    }

    if (isBullet(line)) {
      const items = [];
      while (i < lines.length && isBullet(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s+/, "").trim());
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (isNumbered(line)) {
      const items = [];
      while (i < lines.length && isNumbered(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, "").trim());
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    if (isTableRow(line)) {
      const rows = [];
      while (i < lines.length && isTableRow(lines[i])) {
        if (!isTableDivider(lines[i])) rows.push(cells(lines[i]));
        i++;
      }
      if (rows.length) blocks.push({ type: "table", head: rows[0], rows: rows.slice(1) });
      continue;
    }

    blocks.push({ type: "p", text: line.trim() });
    i++;
  }

  return blocks;
}

/* ── parse one article ───────────────────────────────────────────────────── */

function parse(slug, cfg) {
  const raw = fs.readFileSync(path.join(SRC_DIR, cfg.file), "utf8");

  const meta = {};
  let body = raw;

  // YAML-ish frontmatter
  const fm = body.match(/^---\n([\s\S]*?)\n---\n/);
  if (fm) {
    for (const line of fm[1].split("\n")) {
      const m = line.match(/^(\w+):\s*(.*)$/);
      if (m) meta[m[1]] = m[2].trim();
    }
    body = body.slice(fm[0].length);
  }

  const lines = body.split("\n");

  let title = "";
  const intro = [];
  const sections = [];
  const faqs = [];
  const references = [];
  let current = null;
  let mode = "intro";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;

    // reference definitions: [1]: https://... "Label"
    const ref = line.match(/^\[(\d+)\]:\s*(\S+)\s*"([^"]+)"/);
    if (ref) {
      references.push({ n: Number(ref[1]), href: ref[2], label: ref[3] });
      continue;
    }

    if (isHeading(line)) {
      const level = headingLevel(line);
      const text = headingText(line);

      if (level === 1) { title = text; continue; }

      if (level === 2) {
        if (/^references$/i.test(text)) { mode = "refs"; current = null; continue; }
        if (/frequently asked/i.test(text)) { mode = "faq"; current = null; continue; }
        mode = "body";
        current = { heading: text, lines: [] };
        sections.push(current);
        continue;
      }

      if (level === 3 && mode === "faq") {
        faqs.push({ question: text.replace(/^\d+\.\s*/, ""), answerLines: [] });
        continue;
      }
    }

    if (mode === "intro") {
      const metaBits = splitMetaLine(line);
      if (Object.keys(metaBits).length) {
        Object.assign(meta, {
          suggested_url: metaBits["Suggested URL"] ?? meta.suggested_url,
          seo_title: metaBits["Suggested SEO title"] ?? metaBits["SEO title"] ?? meta.seo_title,
          meta_description:
            metaBits["Suggested meta description"] ?? metaBits["Meta description"] ?? meta.meta_description,
        });
        continue;
      }
      intro.push(line.trim());
    } else if (mode === "faq" && faqs.length) {
      faqs[faqs.length - 1].answerLines.push(line);
    } else if (current) {
      current.lines.push(line);
    }
  }

  // Fall back to inline [n](url) citations when there are no [n]: definitions.
  if (!references.length) {
    const seen = new Map();
    for (const m of raw.matchAll(/\[(\d+)\]\((https?:\/\/[^)]+)\)/g)) {
      const n = Number(m[1]);
      if (!seen.has(n)) seen.set(n, m[2]);
    }
    for (const [n, href] of [...seen.entries()].sort((a, b) => a[0] - b[0])) {
      references.push({ n, href, label: REF_LABELS[href] || href });
    }
  }

  const wordCount = raw.split(/\s+/).length;

  return {
    slug,
    title,
    metaTitle: (meta.seo_title || title).trim(),
    description: (meta.meta_description || "").trim(),
    cardDescription: (meta.meta_description || "").trim(),
    category: cfg.category,
    date: DATE,
    dateISO: DATE_ISO,
    readMinutes: Math.max(1, Math.round(wordCount / WPM)),
    imageVar: cfg.image,
    imageFile: cfg.imageFile,
    imageAlt: cfg.imageAlt,
    // The intro goes through the same block parser as the body: Ian opens the
    // FERPA article with a blockquote from NIST, which would otherwise render
    // its "> " as a literal character.
    intro: toBlocks(intro),
    sections: sections.map((s) => ({ heading: s.heading, blocks: toBlocks(s.lines) })),
    faqs: faqs.map((f) => ({
      question: f.question,
      answer: f.answerLines.join(" ").replace(/\s+/g, " ").trim(),
    })),
    references: references.sort((a, b) => a.n - b.n),
  };
}

/* ── emit ────────────────────────────────────────────────────────────────── */

const articles = Object.entries(CONFIG).map(([slug, cfg]) => parse(slug, cfg));

const imports = articles
  .map((a) => `import ${a.imageVar} from "@/public/blogs/${a.imageFile}";`)
  .join("\n");

const j = (v) => JSON.stringify(v, null, 2).replace(/\n/g, "\n  ");

const body = articles
  .map(
    (a) => `  {
    slug: ${JSON.stringify(a.slug)},
    title: ${JSON.stringify(a.title)},
    metaTitle: ${JSON.stringify(a.metaTitle)},
    description: ${JSON.stringify(a.description)},
    cardDescription: ${JSON.stringify(a.cardDescription)},
    category: ${JSON.stringify(a.category)},
    date: ${JSON.stringify(a.date)},
    dateISO: ${JSON.stringify(a.dateISO)},
    readMinutes: ${a.readMinutes},
    image: ${a.imageVar},
    imageAlt: ${JSON.stringify(a.imageAlt)},
    intro: ${j(a.intro)},
    sections: ${j(a.sections)},
    faqs: ${j(a.faqs)},
    references: ${j(a.references)},
  }`
  )
  .join(",\n");

const file = `// GENERATED by scripts/import-blog-articles.mjs - do not edit by hand.
// Source: Ian's markdown in ${SRC_DIR}
// Re-run after he sends a new or revised article:
//   node scripts/import-blog-articles.mjs

import type { Article } from "@/components/blogs/ArticleLayout";
${imports}

export const blogArticles: Article[] = [
${body},
];

export function getArticleBySlug(slug: string): Article | undefined {
  return blogArticles.find((a) => a.slug === slug);
}
`;

fs.writeFileSync(OUT, file);

console.log(`wrote ${OUT}`);
for (const a of articles) {
  console.log(
    `  ${a.slug}\n    sections ${a.sections.length}  faqs ${a.faqs.length}  refs ${a.references.length}  ${a.readMinutes} min`
  );
}
