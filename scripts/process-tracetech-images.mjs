import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// Optimize the sanitized TraceTech screenshots for the /tracetech/ page.
// The source images are already cropped to the browser window (chrome + screen)
// by hand — so no cropping here beyond the one explicit crop below. Each image
// keeps its own native aspect ratio; the page sizes each card to the image.
//
//   node scripts/process-tracetech-images.mjs
//
// QUALITY, on Ian's note (2026-09-20): these are UI screenshots, not photos.
// The previous settings — lossy WebP at quality 82, plus a downscale to 1600px
// wide — were visibly costing detail on exactly the things that matter here:
// small label text, hairline table rules and chart gridlines. Two changes:
//
//   * No resize. report-view.png is 1794px and support.png 1792px wide, so the
//     old 1600px cap was throwing away real pixels before encoding.
//   * Lossless WebP for the PNG sources. On flat UI screenshots lossless is
//     cheap (certificates actually gets SMALLER than it was lossy, 53KB -> 25KB)
//     and removes compression artifacts around text entirely.
//
// The one exception is the approved-outcomes diagram, whose source is already a
// JPEG: encoding that losslessly would faithfully preserve its JPEG artifacts at
// triple the size, so it takes a high-quality lossy pass instead. If Haseeb
// sends a PNG or SVG master, move it to the lossless list.

const SRC_DIR = "c:/Users/zypher/Desktop/inte";
const OUT_DIR = "public/images/tracetech";
fs.mkdirSync(OUT_DIR, { recursive: true });

// [source, output, options]
//   crop    — extract region applied before encoding
//   lossy   — quality to use instead of lossless (for already-lossy sources)
const MAP = [
  // dashboard1.png replaced the original portrait screenshot on 2026-09-20:
  // wider, sanitized, and showing far more of the portal. No crop.
  ["dashboard1.png", "dashboard.webp"],
  // ["dashboard.png", "dashboard.webp"],
  ["report-view.png", "reports.webp"],
  ["jobs-cert.png", "certificates.webp", { crop: { top: 0, left: 0, width: 1076, height: 739 } }],
  ["c-r.jpeg", "approved-outcomes.webp", { lossy: 95 }],

  // Not referenced by the page — Ian had these two pulled from the showcase.
  // Left commented rather than deleted: uncomment to regenerate them from the
  // originals, which are still in SRC_DIR. Losslessly esg-impact is 465KB, so
  // there is no reason to ship it while nothing links to it.
  // ["ecg-impact-cert.png", "esg-impact.webp"],
  // ["support.png", "support.webp"],
];

for (const [src, out, opts = {}] of MAP) {
  const srcPath = path.join(SRC_DIR, src);
  if (!fs.existsSync(srcPath)) {
    console.log(`SKIP (missing): ${src}`);
    continue;
  }

  const before = fs.existsSync(path.join(OUT_DIR, out))
    ? fs.statSync(path.join(OUT_DIR, out)).size
    : 0;

  const pipeline = sharp(srcPath);
  if (opts.crop) pipeline.extract(opts.crop);

  // No resize: encode at the source's native resolution.
  const buf = await pipeline
    .webp(opts.lossy ? { quality: opts.lossy } : { lossless: true, effort: 6 })
    .toBuffer();

  fs.writeFileSync(path.join(OUT_DIR, out), buf);

  const m = await sharp(buf).metadata();
  const kb = (n) => `${(n / 1024).toFixed(0)}KB`;
  const mode = opts.lossy ? `lossy q${opts.lossy}` : "lossless";
  const delta = before ? ` (was ${kb(before)})` : "";
  console.log(`${out.padEnd(24)} ${`${m.width}x${m.height}`.padEnd(12)} ${mode.padEnd(10)} ${kb(buf.length)}${delta}`);
}
