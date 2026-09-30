/**
 * Build every image the email templates use, into public/email/.
 *
 *   node scripts/make-email-assets.mjs
 *
 * The EmailJS "Auto-Reply" template (template_v94ram3, the "Thank you for
 * contacting Integritrade" email, source in emailjs/auto-reply.html) loads
 * these by URL, so the file names must never change (see
 * public/email/README.md). All PNG on white at 2x their
 * size in the email: PNG is the one format every mail app shows (Gmail and
 * Outlook show no SVG, Outlook for Windows no WebP), and a white background
 * keeps them readable in dark-mode mail apps.
 *
 *   certification-badges.png  1200x240, shown at up to 560 wide
 *   integritrade-logo.png     488x128,  shown at 244x64
 *   icon-globe.png            36x36,    shown at 18x18
 *   icon-whatsapp.png         36x36,    shown at 18x18
 */
import fs from "node:fs";
import sharp from "sharp";

const OUT = "public/email";
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };
const png = (img) => img.png({ compressionLevel: 9, palette: true, quality: 95, effort: 10 });
fs.mkdirSync(OUT, { recursive: true });

// 1. The five certification badges in one row, R2v3 first.
{
  const BADGES = [
    "public/ISO/R2V3_certified_logo.png",
    "public/ISO/ISO-9001.png",
    "public/ISO/ISO-14001.png",
    "public/ISO/ISO-27001.png",
    "public/ISO/ISO-45001.png",
  ];
  const W = 1200, H = 240, CELL = 200;
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
  await png(
    sharp({ create: { width: W, height: H, channels: 3, background: "#ffffff" } }).composite(
      tiles.map((input, i) => ({ input, left: Math.round(GAP + i * (CELL + GAP)), top: (H - CELL) / 2 }))
    )
  ).toFile(`${OUT}/certification-badges.png`);
}

// 2. The logo, rendered from the SVG (height 128 = 2x the email's 64px), with
//    the width padded to an even number so the email can size it exactly.
{
  const { data, info } = await sharp("public/logo/integritrade-logo.svg", { density: 300 })
    .resize({ height: 128 })
    .flatten({ background: WHITE })
    .toBuffer({ resolveWithObject: true });
  await png(sharp(data).extend({ right: info.width % 2, background: WHITE })).toFile(
    `${OUT}/integritrade-logo.png`
  );
}

// 3. The footer icons (2x the email's 18px).
for (const [src, name] of [
  ["public/email-icons/globe.webp", "icon-globe.png"],
  ["public/email-icons/whatsapp.webp", "icon-whatsapp.png"],
]) {
  await png(
    sharp(src).resize(36, 36, { fit: "contain", background: WHITE }).flatten({ background: WHITE })
  ).toFile(`${OUT}/${name}`);
}

for (const f of fs.readdirSync(OUT).filter((f) => f.endsWith(".png"))) {
  const m = await sharp(`${OUT}/${f}`).metadata();
  console.log(`${OUT}/${f}  ${m.width}x${m.height}  ${Math.round(fs.statSync(`${OUT}/${f}`).size / 1024)} KB`);
}
