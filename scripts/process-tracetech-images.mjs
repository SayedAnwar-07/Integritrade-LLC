import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// Optimize the sanitized TraceTech screenshots for the /tracetech/ page.
// The source images are already cropped to the browser window (chrome + screen)
// by hand — so no cropping here, just resize + WebP. Each image keeps its own
// native aspect ratio; the page sizes each card to the image (no white padding).
//
//   node scripts/process-tracetech-images.mjs

const SRC_DIR = "c:/Users/zypher/Desktop/inte";
const OUT_DIR = "public/images/tracetech";
fs.mkdirSync(OUT_DIR, { recursive: true });

const MAP = [
  ["dashboard.png", "dashboard.webp"],
  ["report-view.png", "reports.webp"],
  ["jobs-certificate.png", "certificates.webp"],
  ["ecg-impact-cert.png", "esg-impact.webp"],
  ["support.png", "support.webp"],
];

for (const [src, out] of MAP) {
  const srcPath = path.join(SRC_DIR, src);
  if (!fs.existsSync(srcPath)) {
    console.log(`SKIP (missing): ${src}`);
    continue;
  }
  const buf = await sharp(srcPath)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toBuffer();
  fs.writeFileSync(path.join(OUT_DIR, out), buf);
  const m = await sharp(buf).metadata();
  console.log(`${out}  ${m.width}x${m.height}  ${(buf.length / 1024).toFixed(0)}KB`);
}
