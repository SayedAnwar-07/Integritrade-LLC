# Email assets

Every image in the EmailJS auto-reply email (template `template_v94ram3`,
"Thank you for contacting Integritrade", sent to the customer by the booking
and consultation forms) loads from this folder by its exact URL:

- https://integritradellc.com/email/integritrade-logo.png (logo, shown 244x64)
- https://integritradellc.com/email/certification-badges.png
  (R2v3, ISO 9001, ISO 14001, ISO 27001, ISO 45001 in one image)
- https://integritradellc.com/email/icon-globe.png (footer, shown 18x18)
- https://integritradellc.com/email/icon-whatsapp.png (footer, shown 18x18)

The template's source is kept in `emailjs/auto-reply.html`. EmailJS only uses
what is pasted into its dashboard, so after editing that file, paste it into
EmailJS (Email Templates > template_v94ram3 > Edit Content > Code Editor) and
save.

**Never rename, move, convert (for example to .webp) or delete anything
here.** Emails already sitting in clients' inboxes keep loading these URLs,
so a rename breaks every past email as well as future ones. This happened on
2026-09-30, when the site's badge files changed from .webp to .png and every
badge in the email showed as a broken image. For the same reason, keep
`public/email-icons/` and the `/ISO/*.webp` rewrites in `public/.htaccess`:
emails sent before that date still point at them.

The images are PNG on a white background at twice their size in the email:
Gmail and Outlook don't show SVG, Outlook for Windows doesn't show WebP.

To change an image: update its source (public/ISO/ for the badges,
public/logo/integritrade-logo.svg for the logo), run
`node scripts/make-email-assets.mjs` (it rebuilds everything here under the
same names), deploy, then purge those URLs in Cloudflare (Caching >
Configuration > Custom Purge). Images are cached for 7 days.
