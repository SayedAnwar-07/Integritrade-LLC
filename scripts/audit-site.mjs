/**
 * Static audit of the built site.
 *
 *   npm run build && node scripts/audit-site.mjs [--full]
 *
 * Reads every page in out/ and reports SEO, accessibility, structured-data and
 * link problems. Runs entirely against local files, so it is fast and safe to
 * re-run. --full lists every affected URL instead of a sample.
 */
import fs from "node:fs";
import path from "node:path";

const OUT = "out";
const ORIGIN = "https://integritradellc.com";
const FULL = process.argv.includes("--full");
const SAMPLE = 5;

// ---------------------------------------------------------------- helpers
const rx = {
  title: /<title>([\s\S]*?)<\/title>/i,
  desc: /<meta[^>]+name=["']description["'][^>]+content=["']([\s\S]*?)["']/i,
  canonical: /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i,
  robots: /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)["']/i,
  viewport: /<meta[^>]+name=["']viewport["']/i,
  h1: /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi,
  img: /<img\b[^>]*>/gi,
  alt: /\balt=["']([\s\S]*?)["']/i,
  jsonld: /<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi,
  aHref: /<a\b[^>]+href=["']([^"']+)["']/gi,
  lang: /<html[^>]+lang=["']([^"']+)["']/i,
};

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .trim();

const strip = (s) => decode(s.replace(/<[^>]*>/g, " ").replace(/\s+/g, " "));

// ---------------------------------------------------------------- collect
const pages = [];
(function walk(dir, rel) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) walk(path.join(dir, e.name), `${rel}${e.name}/`);
    else if (e.name === "index.html") pages.push({ url: rel, file: path.join(dir, e.name) });
  }
})(OUT, "/");

const builtUrls = new Set(pages.map((p) => p.url));
const publicFiles = new Set();
(function walkAll(dir, rel) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) walkAll(path.join(dir, e.name), `${rel}${e.name}/`);
    else publicFiles.add(rel + e.name);
  }
})(OUT, "/");

// ---------------------------------------------------------------- analyse
const findings = {};
const add = (key, url, detail) => {
  (findings[key] = findings[key] || []).push(detail ? `${url}  — ${detail}` : url);
};

const titles = new Map();
const descs = new Map();
let schemaPages = 0;
const schemaTypes = new Map();
let imgTotal = 0;
let imgNoAlt = 0;
const badLinks = new Map();

for (const { url, file } of pages) {
  const html = fs.readFileSync(file, "utf8");
  const noindex = (html.match(rx.robots) || [])[1]?.includes("noindex");

  // ---- title
  const rawTitle = (html.match(rx.title) || [])[1];
  const title = rawTitle ? decode(rawTitle) : "";
  if (!title) add("Missing <title>", url);
  else if (!noindex) {
    if (title.length > 60) add("Title over 60 chars (truncated in results)", url, `${title.length}: ${title}`);
    if (title.length < 25) add("Title under 25 chars (thin)", url, title);
    const brand = (title.match(/Integritrade/gi) || []).length;
    if (brand > 1) add("Brand repeated in title", url, title);
    titles.set(title, [...(titles.get(title) || []), url]);
  }

  // ---- description
  const rawDesc = (html.match(rx.desc) || [])[1];
  const desc = rawDesc ? decode(rawDesc) : "";
  if (!noindex) {
    if (!desc) add("Missing meta description", url);
    else {
      if (desc.length > 160) add("Description over 160 chars", url, `${desc.length} chars`);
      if (desc.length < 70) add("Description under 70 chars (thin)", url, `${desc.length}: ${desc}`);
      descs.set(desc, [...(descs.get(desc) || []), url]);
    }
  }

  // ---- canonical
  const canonical = (html.match(rx.canonical) || [])[1];
  if (!noindex) {
    if (!canonical) add("Missing canonical", url);
    else {
      const expect = `${ORIGIN}${url}`;
      if (canonical !== expect) add("Canonical does not match its own URL", url, `-> ${canonical}`);
    }
  }

  // ---- h1
  const h1s = [...html.matchAll(rx.h1)].map((m) => strip(m[1])).filter(Boolean);
  if (!noindex) {
    if (h1s.length === 0) add("No <h1>", url);
    else if (h1s.length > 1) add("Multiple <h1>", url, `${h1s.length}: ${h1s.slice(0, 3).join(" | ")}`);
  }

  // ---- structured data
  const blocks = [...html.matchAll(rx.jsonld)];
  if (blocks.length) {
    schemaPages++;
    for (const b of blocks) {
      try {
        const parsed = JSON.parse(b[1]);
        const nodes = parsed["@graph"] || (Array.isArray(parsed) ? parsed : [parsed]);
        for (const n of nodes) {
          const t = n && n["@type"];
          if (t) schemaTypes.set(String(t), (schemaTypes.get(String(t)) || 0) + 1);
        }
      } catch {
        add("Invalid JSON-LD (will not parse)", url);
      }
    }
  } else if (!noindex) {
    add("No structured data", url);
  }

  // ---- images
  for (const m of [...html.matchAll(rx.img)]) {
    imgTotal++;
    const tag = m[0];
    const alt = tag.match(rx.alt);
    if (!alt) {
      imgNoAlt++;
      add("Image missing alt attribute", url, tag.slice(0, 90));
    } else if (!alt[1].trim() && !/role=["']presentation["']|aria-hidden/.test(tag)) {
      imgNoAlt++;
      add("Image with empty alt (not marked decorative)", url, tag.slice(0, 90));
    }
  }

  // ---- misc
  if (!rx.viewport.test(html)) add("Missing viewport meta", url);
  if (!rx.lang.test(html)) add("Missing lang on <html>", url);

  // ---- internal links
  for (const m of [...html.matchAll(rx.aHref)]) {
    let href = m[1];
    if (/^(https?:|mailto:|tel:|sms:|#|data:)/i.test(href)) {
      if (href.startsWith(ORIGIN)) href = href.slice(ORIGIN.length) || "/";
      else continue;
    }
    if (!href.startsWith("/")) continue;
    // Filenames on disk contain literal spaces; hrefs percent-encode them.
    let clean = href.split(/[?#]/)[0];
    try {
      clean = decodeURIComponent(clean);
    } catch {
      /* malformed escape — compare raw */
    }
    const asPage = clean.endsWith("/") ? clean : `${clean}/`;
    if (builtUrls.has(asPage) || publicFiles.has(clean) || clean === "/") continue;
    badLinks.set(clean, (badLinks.get(clean) || 0) + 1);
  }
}

// ---- duplicates
for (const [t, urls] of titles) if (urls.length > 1) add("Duplicate title", `${urls.length} pages: "${t}"`, urls.slice(0, 3).join(", "));
for (const [d, urls] of descs) if (urls.length > 1 && urls.length < 400)
  add("Duplicate meta description", `${urls.length} pages`, `${d.slice(0, 70)}… (${urls.slice(0, 2).join(", ")})`);

for (const [href, count] of [...badLinks].sort((a, b) => b[1] - a[1]))
  add("Internal link to a page that does not exist", href, `linked ${count}x`);

// ---------------------------------------------------------------- report
console.log(`\nAUDIT — ${pages.length} pages\n${"=".repeat(60)}`);
console.log(`Structured data:  ${schemaPages}/${pages.length} pages`);
if (schemaTypes.size) console.log(`  types: ${[...schemaTypes].map(([t, n]) => `${t}(${n})`).join(", ")}`);
console.log(`Images:           ${imgTotal} total, ${imgNoAlt} missing/empty alt`);

const keys = Object.keys(findings).sort((a, b) => findings[b].length - findings[a].length);
if (!keys.length) console.log("\nNo issues found.");
for (const k of keys) {
  const list = findings[k];
  console.log(`\n${k}  [${list.length}]`);
  for (const line of FULL ? list : list.slice(0, SAMPLE)) console.log(`   ${line}`);
  if (!FULL && list.length > SAMPLE) console.log(`   … ${list.length - SAMPLE} more (--full to list)`);
}
console.log();
