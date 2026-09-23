/**
 * Push changed URLs to IndexNow so Bing (and Yandex, Seznam, Naver) pick them
 * up in minutes instead of waiting for a crawl.
 *
 *   node scripts/submit-indexnow.mjs --urls /ewaste/,/tracetech/
 *   node scripts/submit-indexnow.mjs --urls /tracetech/ --dry-run
 *
 * Bing's own top recommendation for this site, and the lever that matters for
 * AI citation: ChatGPT's web search runs on Bing's index, so a page Bing has
 * not indexed cannot be cited.
 *
 * IMPORTANT: the key file must already be live at
 * https://integritradellc.com/<key>.txt before submitting — IndexNow fetches it
 * to prove we own the host. Deploy first, then submit.
 *
 * STREAMING, NOT BATCHES. On 2026-09-24 Bing Webmaster Tools flagged "IndexNow
 * is in batch mode" (severity Moderate). This script used to send every URL in
 * one request, and --all sent the whole sitemap at once. Bing wants each change
 * reported as it happens, individually or in small groups. So now:
 *
 *   * each URL goes in its own request, with a pause between requests;
 *   * a normal run is capped at MAX_URLS. A deploy that touches more pages
 *     than that is a template change, which Bing will pick up by crawling;
 *   * the old whole-sitemap --all needs --force-all as well, and should only
 *     ever be used once, for recovery (for example after an indexing block).
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
// One URL per request, a short pause between them: what Bing calls streaming.
const PAUSE_MS = 1500;
// More changed pages than this in one deploy means a template change; send
// those only with --force-all, and expect Bing to recrawl them anyway.
const MAX_URLS = 50;

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const forceAll = args.includes("--force-all");
const submitAll = args.includes("--all");
if (submitAll && !forceAll) {
  console.error(
    "--all resubmits the whole sitemap in one go, which is what made Bing flag this\n" +
      "site as 'IndexNow is in batch mode'. Pass --urls with just the pages that\n" +
      "changed. For a one-off recovery only, add --force-all."
  );
  process.exit(1);
}
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

if (urlList.length > MAX_URLS && !forceAll) {
  console.error(
    `${urlList.length} URLs is more than the ${MAX_URLS} a normal deploy should send.\n` +
      "That is a template-wide change: let Bing recrawl it, or add --force-all if you\n" +
      "are sure. Bulk sends are what put this site in 'batch mode'."
  );
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

// ---- submit, one URL at a time -------------------------------------------
let failed = 0;
for (const [i, url] of urlList.entries()) {
  if (i > 0) await new Promise((r) => setTimeout(r, PAUSE_MS));
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation: `${ORIGIN}/${keyFile}`, urlList: [url] }),
  }).catch((e) => ({ ok: false, status: 0, statusText: String(e) }));

  // 200 accepted, 202 accepted but key still being validated.
  const ok = res.status === 200 || res.status === 202;
  if (!ok) failed++;
  console.log(`${String(i + 1).padStart(3)}/${urlList.length}  ${res.status}  ${url.replace(ORIGIN, "")}`);
  if (!ok) {
    const body = await (res.text ? res.text().catch(() => "") : "");
    if (body) console.log(`       ${body.slice(0, 300)}`);
  }
}

console.log(failed ? `\n${failed} of ${urlList.length} not accepted.` : `\nAll ${urlList.length} accepted.`);
process.exit(failed ? 1 : 0);
