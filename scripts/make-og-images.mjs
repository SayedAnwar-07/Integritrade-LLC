/**
 * Build the Open Graph images: the preview picture LinkedIn, X, Facebook,
 * Reddit and iMessage show when a page is shared.
 *
 *   node scripts/make-og-images.mjs
 *
 * Every page used to share the logo, which those platforms crop to a 1.91:1
 * strip, so a shared link showed a sliver of "INTEGRIT". Ian flagged it on
 * 2026-09-26: "It's supposed to be a content photo." Each page now gets a real
 * photo from the site, cropped to the 1200x630 size all of them expect.
 *
 * The crop uses sharp's attention strategy, which keeps the busiest part of
 * the photo (the hard drive, the hands, the rack) rather than the dead centre.
 *
 * Output goes to public/og/, and lib/og.ts is where pages look the files up,
 * so add a line in both when a new page gets its own image.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT = "public/og";
const W = 1200;
const H = 630;

// [output file, source photo]
const PHOTOS = [
  ["home.jpg", "public/about/itadWarehouse.jpeg"],
  ["services.jpg", "public/services/rack-of-servers.jpg"],
  ["industries.jpg", "public/services/serviceArea/electronicRecyclingWarehouse.jpeg"],
  ["about.jpg", "public/about/itadAssemblyLine.webp"],
  ["fresno-residential-electronics-recycling.jpg", "public/services/E-Recycling.jpeg"],
  ["tracetech.jpg", "public/images/tracetech/dashboard.webp"],
  ["equipment.jpg", "public/about/degausser.jpeg"],

  ["services/data-destruction-services.jpg", "public/services/dataDestruction.webp"],
  ["services/secure-electronics-recycling.jpg", "public/services/E-Recycling.jpeg"],
  ["services/it-asset-disposition.jpg", "public/services/assetDispositionWarehouse.jpeg"],
  ["services/demanufacturing-prototype-destruction.jpg", "public/services/demanufacturing.jpeg"],
  ["services/remote-it-asset-recovery.jpg", "public/services/RemoteITAssetRecovery.jpg"],

  ["industries/business-corporate.jpg", "public/industries/business-corporate.webp"],
  ["industries/education.jpg", "public/industries/education.webp"],
  ["industries/legal-professional-services.jpg", "public/industries/law-firm-data.webp"],
  ["industries/government-public-sector.jpg", "public/industries/government-IT-equipment.webp"],
  ["industries/healthcare.jpg", "public/industries/healthcare.webp"],
  ["industries/finance.jpg", "public/industries/finance.webp"],
  ["industries/retail-hospitality.jpg", "public/industries/secure-retail-POS.webp"],
  // defense-contractors: none yet. Ian wants that page's photo replaced with
  // a licensed stock image first; until then it keeps the logo rather than
  // spreading a picture he has already said looks bad.
];

// Certifications has no photo, so its preview is the badges themselves.
// ISO 45001 is left out on purpose: its badge artwork reads "Occupational
// HEATH and Safety". Add it back once the badge file is corrected.
const BADGES = [
  "public/ISO/R2V3_certified_logo.webp",
  "public/ISO/ISO-27001.webp",
  "public/ISO/ISO-9001.webp",
  "public/ISO/ISO-14001.webp",
];

async function photo(out, src) {
  const dest = path.join(OUT, out);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  await sharp(src)
    .resize(W, H, { fit: "cover", position: sharp.strategy.attention })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(dest);
  return dest;
}

async function badges(out) {
  const dest = path.join(OUT, out);
  const BADGE_H = 250;
  const GAP = 44;
  const tiles = [];
  for (const src of BADGES) {
    const buf = await sharp(src).resize({ height: BADGE_H, fit: "inside" }).png().toBuffer();
    const { width } = await sharp(buf).metadata();
    tiles.push({ buf, width });
  }
  const rowW = tiles.reduce((s, t) => s + t.width, 0) + GAP * (tiles.length - 1);
  let left = Math.round((W - rowW) / 2);
  const top = Math.round((H - BADGE_H) / 2);
  const composite = tiles.map((t) => {
    const c = { input: t.buf, left, top };
    left += t.width + GAP;
    return c;
  });
  await sharp({ create: { width: W, height: H, channels: 3, background: "#f5f5f4" } })
    .composite(composite)
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(dest);
  return dest;
}

// Blog posts: each one's own cover image, read from the blog card data so a
// new post picks this up without another edit here.
function blogCovers() {
  const src = fs.readFileSync("data/BlogCardsData.tsx", "utf8");
  const imports = Object.fromEntries(
    [...src.matchAll(/import\s+(\w+)\s+from\s+["']@\/public\/([^"']+)["']/g)].map((m) => [m[1], `public/${m[2]}`])
  );
  const covers = [];
  // The trailing comma skips the interface's `image: any;` declaration.
  for (const m of src.matchAll(/image:\s*(\w+),[\s\S]*?slug:\s*["']([a-z0-9-]+)["']/g)) {
    const file = imports[m[1]];
    if (file && fs.existsSync(file)) covers.push([`blogs/${m[2]}.jpg`, file]);
    else console.log(`no cover image for blog ${m[2]} (${m[1]})`);
  }
  return covers;
}

fs.mkdirSync(OUT, { recursive: true });
PHOTOS.push(...blogCovers());
for (const [out, src] of PHOTOS) {
  const dest = await photo(out, src);
  console.log(`${dest.padEnd(62)} ${Math.round(fs.statSync(dest).size / 1024)}KB  <- ${src}`);
}
const cert = await badges("certifications.jpg");
console.log(`${cert.padEnd(62)} ${Math.round(fs.statSync(cert).size / 1024)}KB  <- R2v3 + ISO badges`);
