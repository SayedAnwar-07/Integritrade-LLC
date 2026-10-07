import fs from "node:fs";
import sharp from "sharp";

// Regenerate the browser/search favicon as a MARK-ONLY square. The brand SVG
// stacks the loop mark on top and the "INTEGRITRADE / LIFECYCLE SOLUTIONS"
// wordmark below; at 16-32px the wordmark turns to blur (Ian's complaint).
// Reframing the viewBox to the mark's bbox crops the text out (content outside
// the viewBox is clipped) and renders from vector, so it stays crisp.
//
//   node scripts/make-favicon.mjs

const svg = fs.readFileSync("public/logo/integritrade-favicon.svg", "utf8");
const markOnly = svg.replace(/viewBox="[^"]*"/, 'viewBox="130 140 1610 700"');

const SIZE = 512;
const MARK_W = 470; // small, even margin inside the square

const markPng = await sharp(Buffer.from(markOnly)).resize({ width: MARK_W }).png().toBuffer();

const square = await sharp({
  create: { width: SIZE, height: SIZE, channels: 4, background: "#ffffff" },
})
  .composite([{ input: markPng, gravity: "center" }])
  .png()
  .toBuffer();

fs.writeFileSync("app/icon.png", square);
fs.writeFileSync("public/logo/integritradellc-favicon.png", square);

const meta = await sharp(square).metadata();
console.log(`wrote ${meta.width}x${meta.height} mark-only favicon to app/icon.png and public/logo/integritradellc-favicon.png`);

// The smaller sizes are downscaled from the same square, so every icon is the
// same tile. /favicon.ico matters on its own: many crawlers and link-preview
// services (AI chat answers, DuckDuckGo) only request that path.
const resized = (size) => sharp(square).resize(size, size, { kernel: "lanczos3" });

// One .ico image entry as a classic 32-bit BMP (the most widely readable form):
// header, bottom-up BGRA rows, then an all-zero AND mask (the alpha is used).
async function icoEntry(size) {
  const rgba = await resized(size).ensureAlpha().raw().toBuffer();
  const header = Buffer.alloc(40);
  header.writeUInt32LE(40, 0);
  header.writeInt32LE(size, 4);
  header.writeInt32LE(size * 2, 8); // colour rows + mask rows
  header.writeUInt16LE(1, 12);
  header.writeUInt16LE(32, 14);
  header.writeUInt32LE(size * size * 4, 20);
  const bgra = Buffer.alloc(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const from = ((size - 1 - y) * size + x) * 4;
      const to = (y * size + x) * 4;
      bgra[to] = rgba[from + 2];
      bgra[to + 1] = rgba[from + 1];
      bgra[to + 2] = rgba[from];
      bgra[to + 3] = rgba[from + 3];
    }
  }
  const mask = Buffer.alloc(Math.ceil(size / 32) * 4 * size);
  return Buffer.concat([header, bgra, mask]);
}

const ICO_SIZES = [16, 32, 48];
const entries = await Promise.all(ICO_SIZES.map(icoEntry));
const directory = Buffer.alloc(6 + 16 * ICO_SIZES.length);
directory.writeUInt16LE(1, 2); // type: icon
directory.writeUInt16LE(ICO_SIZES.length, 4);
let offset = directory.length;
ICO_SIZES.forEach((size, i) => {
  const at = 6 + 16 * i;
  directory.writeUInt8(size, at);
  directory.writeUInt8(size, at + 1);
  directory.writeUInt16LE(1, at + 4);
  directory.writeUInt16LE(32, at + 6);
  directory.writeUInt32LE(entries[i].length, at + 8);
  directory.writeUInt32LE(offset, at + 12);
  offset += entries[i].length;
});

fs.writeFileSync("public/favicon.ico", Buffer.concat([directory, ...entries]));
fs.writeFileSync("public/logo/integritradellc-favicon-32.png", await resized(32).png().toBuffer());
fs.writeFileSync("public/logo/integritradellc-favicon-192.png", await resized(192).png().toBuffer());
fs.writeFileSync("public/apple-touch-icon.png", await resized(180).png().toBuffer());
console.log("wrote public/favicon.ico (16/32/48), 32px and 192px PNGs, and public/apple-touch-icon.png (180px)");
