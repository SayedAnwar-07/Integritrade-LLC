/**
 * Rebuild public/sitemap.xml from the pages actually present in out/.
 *
 *   npm run build && node scripts/build-sitemap.mjs
 *
 * Existing entries keep their lastmod, changefreq and priority verbatim, so a
 * rebuild never fakes freshness on pages that did not change. Only genuinely
 * new URLs get today's date, with priority derived from the conventions the
 * sitemap already uses (see BUCKETS).
 *
 * Pages carrying a noindex robots tag are skipped, as are the 404 routes.
 */
import fs from "node:fs";
import path from "node:path";

const ORIGIN = "https://integritradellc.com";
const OUT_DIR = "out";
const SITEMAP = "public/sitemap.xml";
const TODAY = new Date().toISOString().slice(0, 10);

// Weighting conventions already established in the sitemap.
const BUCKETS = [
  [(u) => u === "/", "weekly", "1.0"],
  [(u) => /^\/(privacy|terms|accessibility)\/$/.test(u), "yearly", "0.3"],
  [(u) => /^\/(services|industries|about|blogs|service-area)\/$/.test(u), "weekly", "0.9"],
  [(u) => /^\/service-area\/[^/]+\/$/.test(u), "monthly", "0.7"],
  [(u) => /^\/service-area\/[^/]+\/[^/]+\/$/.test(u), "monthly", "0.6"],
  [(u) => /^\/(services|industries)\/[^/]+\/$/.test(u), "monthly", "0.8"],
  [(u) => /^\/about\/[^/]+\/$/.test(u), "monthly", "0.7"],
  [(u) => /^\/blogs\/[^/]+\/$/.test(u), "monthly", "0.6"],
  [() => true, "monthly", "0.7"], // top-level pages: certifications, tracetech, service-book…
];

function weigh(u) {
  const [, changefreq, priority] = BUCKETS.find(([test]) => test(u));
  return { changefreq, priority };
}

// ---- collect the URLs that actually exist -------------------------------
const urls = [];
(function walk(dir, rel) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) walk(path.join(dir, e.name), `${rel}${e.name}/`);
    else if (e.name === "index.html") urls.push({ url: rel, file: path.join(dir, e.name) });
  }
})(OUT_DIR, "/");

const skipped = [];
const pages = urls
  .filter(({ url }) => {
    if (/^\/(404|_not-found)\//.test(url)) return skipped.push(url) && false;
    return true;
  })
  .filter(({ url, file }) => {
    // Never advertise a page that tells Google not to index it.
    const html = fs.readFileSync(file, "utf8");
    if (/<meta name="robots"[^>]*noindex/i.test(html)) return skipped.push(url) && false;
    return true;
  })
  .map(({ url }) => url)
  .sort();

// ---- preserve everything already recorded -------------------------------
const previous = new Map();
if (fs.existsSync(SITEMAP)) {
  const xml = fs.readFileSync(SITEMAP, "utf8");
  for (const block of xml.split("<url>").slice(1)) {
    const loc = block.match(/<loc>\s*([^<\s]+)\s*<\/loc>/);
    if (!loc) continue;
    previous.set(loc[1].replace(ORIGIN, ""), {
      lastmod: (block.match(/<lastmod>\s*([^<\s]+)/) || [])[1],
      changefreq: (block.match(/<changefreq>\s*([^<\s]+)/) || [])[1],
      priority: (block.match(/<priority>\s*([^<\s]+)/) || [])[1],
    });
  }
}

let kept = 0;
let added = 0;
const body = pages
  .map((u) => {
    const prev = previous.get(u);
    let lastmod, changefreq, priority;
    if (prev && prev.lastmod) {
      ({ lastmod, changefreq, priority } = prev);
      kept++;
    } else {
      ({ changefreq, priority } = weigh(u));
      lastmod = TODAY;
      added++;
    }
    return `  <url>
    <loc>${ORIGIN}${u}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${body}
</urlset>
`;

fs.writeFileSync(SITEMAP, xml);

const dropped = [...previous.keys()].filter((u) => !pages.includes(u));
console.log(`total ${pages.length}  (kept ${kept}, added ${added})`);
console.log(`skipped (noindex/404): ${skipped.length}`);
console.log(`dropped (no page built): ${dropped.length}${dropped.length ? " " + JSON.stringify(dropped) : ""}`);
