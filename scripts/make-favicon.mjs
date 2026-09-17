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
