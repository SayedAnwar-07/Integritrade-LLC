# Email assets

Images in this folder are loaded by the EmailJS auto-reply template (the
"Thank you for contacting Integritrade" email sent by the booking and
consultation forms), by their exact URL:

- https://integritradellc.com/email/certification-badges.png
  (R2v3, ISO 9001, ISO 14001, ISO 27001, ISO 45001 in one image)

**Never rename, move, convert (for example to .webp) or delete anything
here.** Emails already sitting in clients' inboxes keep loading these URLs,
so a rename breaks every past email as well as future ones. This happened on
2026-09-30, when the site's badge files changed from .webp to .png and every
badge in the email showed as a broken image.

To change the badges: update the files in public/ISO/, run
`node scripts/make-email-badges.mjs` (it rebuilds the image under the same
name), deploy, then purge that one URL in Cloudflare (Caching > Configuration
> Custom Purge). Images are cached for 7 days.
