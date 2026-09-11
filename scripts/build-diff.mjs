/**
 * Work out exactly which built files changed, so a deploy uploads only those.
 *
 *   node scripts/build-diff.mjs snapshot     # before rebuilding
 *   npm run build
 *   node scripts/build-diff.mjs diff         # writes deploy9.txt
 *
 * Always includes the whole of _next/static in the upload set. It is ~130 small
 * files, and a missing hashed chunk takes the entire site down — that already
 * happened once. Never trust a computed diff to decide which chunks matter.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const OUT = "out";
const SNAP = "build-snapshot.json";
const LIST = "deploy9.txt";
const mode = process.argv[2];

function hashTree() {
  const map = {};
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else {
        const rel = path.relative(OUT, p).split(path.sep).join("/");
        map[rel] = crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
      }
    }
  })(OUT);
  return map;
}

if (mode === "snapshot") {
  const map = hashTree();
  fs.writeFileSync(SNAP, JSON.stringify(map));
  console.log(`snapshot: ${Object.keys(map).length} files`);
} else if (mode === "diff") {
  if (!fs.existsSync(SNAP)) {
    console.error(`${SNAP} missing — run "snapshot" before rebuilding.`);
    process.exit(1);
  }
  const before = JSON.parse(fs.readFileSync(SNAP, "utf8"));
  const after = hashTree();

  const changed = [];
  const added = [];
  for (const [f, h] of Object.entries(after)) {
    if (!(f in before)) added.push(f);
    else if (before[f] !== h) changed.push(f);
  }
  const removed = Object.keys(before).filter((f) => !(f in after));

  // Every static asset, always — see the note at the top.
  const statics = Object.keys(after).filter((f) => f.startsWith("_next/static/"));
  const upload = [...new Set([...changed, ...added, ...statics])].sort();

  fs.writeFileSync(LIST, upload.join("\n") + "\n");

  console.log(`changed: ${changed.length}`);
  console.log(`added:   ${added.length}`);
  console.log(`removed: ${removed.length}${removed.length ? " (left on server, harmless)" : ""}`);
  console.log(`_next/static always included: ${statics.length}`);
  console.log(`\n-> ${LIST}: ${upload.length} files (full build is ${Object.keys(after).length})`);

  const interesting = [...changed, ...added].filter((f) => !f.startsWith("_next/"));
  if (interesting.length && interesting.length <= 25) {
    console.log("\nnon-asset changes:");
    interesting.forEach((f) => console.log("  " + f));
  }
} else {
  console.error('Usage: build-diff.mjs snapshot | diff');
  process.exit(1);
}
