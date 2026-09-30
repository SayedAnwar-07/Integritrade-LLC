/**
 * Build the single certification-badge image used by the email template.
 *
 *   node scripts/make-email-badges.mjs
 *
 * Writes public/email/certification-badges.png from the badge files in
 * public/ISO/. The file name must never change: the EmailJS auto-reply loads
 * it by URL (see public/email/README.md).
 *
 * 1200x240 on white, shown at up to 600x120 in the email (2x for sharp
 * screens). PNG on white rather than transparent: dark-mode mail apps can put
 * a dark background behind transparent images and hide the badge text.
 */
import fs from "node:fs";
import sharp from "sharp";

// The order the email shows them in.
const BADGES = [
  "public/ISO/R2V3_certified_logo.png",
  "public/ISO/ISO-9001.png",
  "public/ISO/ISO-14001.png",
  "public/ISO/ISO-27001.png",
  "public/ISO/ISO-45001.png",
];
const OUT = "public/email/certification-badges.png";
const W = 1200;
const H = 240;
const CELL = 200;
const GAP = (W - BADGES.length * CELL) / (BADGES.length + 1);

const tiles = await Promise.all(
  BADGES.map((f) =>
    sharp(f)
      .trim()
      .resize(CELL, CELL, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toBuffer()
  )
);

fs.mkdirSync("public/email", { recursive: true });
await sharp({ create: { width: W, height: H, channels: 3, background: "#ffffff" } })
  .composite(tiles.map((input, i) => ({ input, left: Math.round(GAP + i * (CELL + GAP)), top: (H - CELL) / 2 })))
  .png({ compressionLevel: 9, palette: true, quality: 95, effort: 10 })
  .toFile(OUT);

console.log(`wrote ${OUT} (${Math.round(fs.statSync(OUT).size / 1024)} KB)`);
