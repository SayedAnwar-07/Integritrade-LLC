/**
 * Push changed URLs to IndexNow so Bing (and Yandex, Seznam, Naver) pick them
 * up in minutes instead of waiting for a crawl.
 *
 *   node scripts/submit-indexnow.mjs --urls /ewaste/,/tracetech/
 *   node scripts/submit-indexnow.mjs --all          # every indexable URL
 *   node scripts/submit-indexnow.mjs --all --dry-run
 *
 * Bing's own top recommendation for this site, and the lever that matters for
 * AI citation: ChatGPT's web search runs on Bing's index, so a page Bing has
 * not indexed cannot be cited.
 *
 * IMPORTANT: the key file must already be live at
 * https://integritradellc.com/<key>.txt before submitting — IndexNow fetches it
 * to prove we own the host. Deploy first, then submit.
 *
 * Submit only what actually changed. Re-submitting the whole site on every
 * deploy is treated as spam and the endpoint will start ignoring us.
 */
import fs from "node:fs";
import path from "node:path";

const HOST = "integritradellc.com";
const ORIGIN = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const SITEMAP = "public/sitemap.xml";
const MAX_PER_REQUEST = 10000;

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const submitAll = args.includes("--all");
const urlsArg = (() => {
  const i = args.indexOf("--urls");
  return i >= 0 ? args[i + 1] : null;
})();

// ---- find the key file that sits in public/ ------------------------------
const keyFile = fs
  .readdirSync("public")
  .find((f) => /^[a-f0-9]{8,128}\.txt$/i.test(f));

if (!keyFile) {
  console.error("No IndexNow key file found in public/ (expected <key>.txt).");
  process.exit(1);
}

const key = path.basename(keyFile, ".txt");
const stored = fs.readFileSync(path.join("public", keyFile), "utf8").trim();
if (stored !== key) {
  console.error(`Key file ${keyFile} must contain exactly "${key}" (found "${stored}").`);
  process.exit(1);
}

// ---- work out which URLs to send -----------------------------------------
let urlList = [];

if (urlsArg) {
  urlList = urlsArg
    .split(",")
    .map((u) => u.trim())
    .filter(Boolean)
    .map((u) => (u.startsWith("http") ? u : `${ORIGIN}${u.startsWith("/") ? "" : "/"}${u}`));
} else if (submitAll) {
  if (!fs.existsSync(SITEMAP)) {
    console.error(`${SITEMAP} not found.`);
    process.exit(1);
  }
  urlList = [...fs.readFileSync(SITEMAP, "utf8").matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map(
    (m) => m[1]
  );
} else {
  console.error("Pass --urls <comma,separated> or --all. Prefer --urls: only send what changed.");
  process.exit(1);
}

if (!urlList.length) {
  console.error("Nothing to submit.");
  process.exit(1);
}

const offHost = urlList.filter((u) => !u.startsWith(`${ORIGIN}/`) && u !== ORIGIN);
if (offHost.length) {
  console.error(`Refusing to submit URLs on another host: ${offHost.slice(0, 3).join(", ")}`);
  process.exit(1);
}

console.log(`host:        ${HOST}`);
console.log(`key:         ${key}`);
console.log(`keyLocation: ${ORIGIN}/${keyFile}`);
console.log(`urls:        ${urlList.length}`);

if (dryRun) {
  console.log("\n--dry-run, nothing sent. First few:");
  urlList.slice(0, 10).forEach((u) => console.log("  " + u));
  process.exit(0);
}

// ---- verify the key file is actually reachable ---------------------------
const check = await fetch(`${ORIGIN}/${keyFile}`).catch(() => null);
if (!check || !check.ok) {
  console.error(
    `\nKey file is not live at ${ORIGIN}/${keyFile} (${check ? check.status : "unreachable"}).`
  );
  console.error("Deploy it first — IndexNow fetches this to verify ownership.");
  process.exit(1);
}
const liveKey = (await check.text()).trim();
if (liveKey !== key) {
  console.error(`\nLive key file says "${liveKey}", expected "${key}".`);
  process.exit(1);
}
console.log("key file verified live\n");

// ---- submit ---------------------------------------------------------------
let failed = false;
for (let i = 0; i < urlList.length; i += MAX_PER_REQUEST) {
  const batch = urlList.slice(i, i + MAX_PER_REQUEST);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation: `${ORIGIN}/${keyFile}`, urlList: batch }),
  }).catch((e) => ({ ok: false, status: 0, statusText: String(e) }));

  // 200 accepted, 202 accepted but key still being validated.
  const ok = res.status === 200 || res.status === 202;
  if (!ok) failed = true;
  console.log(`batch ${i / MAX_PER_REQUEST + 1}: ${batch.length} urls -> ${res.status} ${res.statusText || ""}`);
  if (!ok) {
    const body = await (res.text ? res.text().catch(() => "") : "");
    if (body) console.log(`  ${body.slice(0, 300)}`);
  }
}

process.exit(failed ? 1 : 0);
