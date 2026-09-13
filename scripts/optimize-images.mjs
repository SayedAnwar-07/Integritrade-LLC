/**
 * Source-image optimization (v2 — quality-preserving).
 *
 *   node scripts/optimize-images.mjs --dry   # report only
 *   node scripts/optimize-images.mjs         # apply (git-reversible)
 *
 * - Photo/graphic PNGs -> WebP q90 (visually lossless for photos), delete PNG,
 *   rewrite every reference (@/public/… imports + "/…" strings) to .webp.
 * - JPEGs: resize to <=1920px long edge + mozjpeg q88, in place. Written via a
 *   temp file + rename (writing back to the same path sharp is reading fails on
 *   Windows with a file lock — that silently left the JPEGs untouched in v1).
 * - EXCLUDED entirely (left as original): logos/favicons (ISO/, TrustedLogo/,
 *   logo/) and anything TraceTech (per client — product screenshots kept crisp).
 * - Known orphans deleted.
 *
 * Nothing on the site renders wider than ~1600px, so 1920 is a safe cap that
 * never downscales an image below its displayed size.
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const DRY = process.argv.includes("--dry");
const MAX_EDGE = 1920;
const MIN_BYTES = 400 * 1024;
const WEBP_Q = 90; // visually lossless for photographs
const JPEG_Q = 88;
const SKIP_DIRS = ["public/ISO", "public/TrustedLogo", "public/logo"].map((p) =>
  p.replace(/\//g, path.sep)
);
const SKIP_NAME = /tracetech/i; // client: leave TraceTech product visuals untouched
const ORPHANS = ["public/services/serviceArea/electronicRecycling.png"].map((p) =>
  p.replace(/\//g, path.sep)
);
const CODE_DIRS = ["app", "components", "data", "scripts"];

const rel = (p) => p.split(path.sep).join("/");
const excluded = (p) => SKIP_DIRS.some((s) => p.startsWith(s)) || SKIP_NAME.test(p);

const all = [];
(function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(png|jpe?g)$/i.test(e.name)) all.push(p);
  }
})("public");

async function encodePipe(file, toWebp) {
  const meta = await sharp(file, { failOn: "none" }).metadata();
  const longEdge = Math.max(meta.width || 0, meta.height || 0);
  let pipe = sharp(file, { failOn: "none" }).rotate();
  if (longEdge > MAX_EDGE) {
    pipe = pipe.resize({
      width: (meta.width || 0) >= (meta.height || 0) ? MAX_EDGE : undefined,
      height: (meta.height || 0) > (meta.width || 0) ? MAX_EDGE : undefined,
      withoutEnlargement: true,
    });
  }
  if (toWebp) return pipe.webp({ quality: WEBP_Q, effort: 5 }).toBuffer();
  return pipe.jpeg({ quality: JPEG_Q, mozjpeg: true }).toBuffer();
}

let before = 0,
  after = 0;
const report = [];
const pngToWebp = [];

for (const file of all) {
  const size = fs.statSync(file).size;
  before += size;

  if (ORPHANS.some((o) => file.endsWith(o))) {
    report.push(`  DELETE orphan  ${rel(file).replace("public/", "")} (${(size / 1024).toFixed(0)}KB)`);
    if (!DRY) fs.unlinkSync(file);
    continue;
  }
  if (excluded(file) || size < MIN_BYTES) {
    after += size;
    continue;
  }

  const isPng = /\.png$/i.test(file);
  try {
    const buf = await encodePipe(file, isPng);
    if (buf.length >= size && !isPng) {
      after += size; // JPEG didn't get smaller — leave it
      continue;
    }
    after += buf.length;
    if (isPng) {
      const webpPath = file.replace(/\.png$/i, ".webp");
      pngToWebp.push({
        from: rel(file).replace("public/", ""),
        to: rel(webpPath).replace("public/", ""),
      });
      report.push(
        `  PNG->WEBP  ${(size / 1024).toFixed(0).padStart(5)}KB -> ${(buf.length / 1024)
          .toFixed(0)
          .padStart(5)}KB  ${rel(file).replace("public/", "")}`
      );
      if (!DRY) {
        fs.writeFileSync(webpPath, buf);
        fs.unlinkSync(file);
      }
    } else {
      report.push(
        `  JPEG       ${(size / 1024).toFixed(0).padStart(5)}KB -> ${(buf.length / 1024)
          .toFixed(0)
          .padStart(5)}KB  ${rel(file).replace("public/", "")}`
      );
      if (!DRY) {
        const tmp = file + ".tmp"; // avoid read/write-same-path lock (Windows)
        fs.writeFileSync(tmp, buf);
        fs.renameSync(tmp, file);
      }
    }
  } catch (e) {
    console.log("  ERROR", rel(file), e.message);
    after += size;
  }
}

// rewrite references for converted PNGs
let refFiles = 0;
if (pngToWebp.length && !DRY) {
  const codeFiles = [];
  for (const dir of CODE_DIRS)
    (function walk(d) {
      if (!fs.existsSync(d)) return;
      for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        const p = path.join(d, e.name);
        if (e.isDirectory()) walk(p);
        else if (/\.(tsx?|jsx?|mjs)$/.test(e.name)) codeFiles.push(p);
      }
    })(dir);
  for (const cf of codeFiles) {
    let txt = fs.readFileSync(cf, "utf8");
    const orig = txt;
    for (const { from, to } of pngToWebp) {
      txt = txt
        .split(`@/public/${from}`).join(`@/public/${to}`)
        .split(`"/${from}"`).join(`"/${to}"`)
        .split(`'/${from}'`).join(`'/${to}'`);
    }
    if (txt !== orig) {
      refFiles++;
      fs.writeFileSync(cf, txt);
    }
  }
}

report.sort((a, b) => (parseInt(b.replace(/\D+/, "")) || 0) - (parseInt(a.replace(/\D+/, "")) || 0));
console.log(report.join("\n"));
console.log(`\n${DRY ? "DRY RUN" : "APPLIED"}  webp q${WEBP_Q}, jpeg q${JPEG_Q}`);
console.log(`PNG->WebP: ${pngToWebp.length}   code files updated: ${refFiles}`);
console.log(
  `source images: ${(before / 1048576).toFixed(1)}MB -> ${(after / 1048576).toFixed(1)}MB (saved ${(
    (before - after) /
    1048576
  ).toFixed(1)}MB)`
);
