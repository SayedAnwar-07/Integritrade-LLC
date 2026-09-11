/**
 * Which pages changed in CONTENT, ignoring the chunk filenames that Turbopack
 * regenerates on every build?
 *
 *   node scripts/content-diff.mjs
 *
 * Turbopack gives chunks a fresh hash each build, so every page's HTML differs
 * even when nothing about it changed. Normalising those references away shows
 * the pages a human actually altered — which is the set worth uploading, since
 * the previous chunks stay on the server and keep untouched pages working.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const OUT = "out";
const SNAP = "build-snapshot-content.json";
const mode = process.argv[2] ?? "diff";

const normalise = (buf, rel) => {
  if (!/\.(html|txt)$/.test(rel)) return buf;
  return Buffer.from(
    buf
      .toString("utf8")
      // chunk + media filenames carry a per-build hash
      .replace(/\/_next\/static\/chunks\/[^"'\s)]+/g, "/_next/static/chunks/X")
      .replace(/\/_next\/static\/media\/[^"'\s)]+/g, "/_next/static/media/X")
      .replace(/\/_next\/static\/[A-Za-z0-9_~-]{16,}\//g, "/_next/static/BUILDID/")
  );
};

function hashTree() {
  const map = {};
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else {
        const rel = path.relative(OUT, p).split(path.sep).join("/");
        if (rel.startsWith("_next/static/")) continue; // assets handled separately
        map[rel] = crypto.createHash("md5").update(normalise(fs.readFileSync(p), rel)).digest("hex");
      }
    }
  })(OUT);
  return map;
}

if (mode === "snapshot") {
  fs.writeFileSync(SNAP, JSON.stringify(hashTree()));
  console.log("content snapshot written");
} else {
  if (!fs.existsSync(SNAP)) {
    console.error(`${SNAP} missing — run "snapshot" against the deployed build first.`);
    process.exit(1);
  }
  const before = JSON.parse(fs.readFileSync(SNAP, "utf8"));
  const after = hashTree();
  const changed = Object.keys(after).filter((f) => !(f in before) || before[f] !== after[f]);
  console.log(`pages whose content really changed: ${changed.length}`);
  changed.slice(0, 40).forEach((f) => console.log("  " + f));
  if (changed.length > 40) console.log(`  … ${changed.length - 40} more`);
}
