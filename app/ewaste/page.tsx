import type { Metadata } from "next";
import Link from "next/link";

import PageHeader from "@/components/shared/PageHeader";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollLoader from "@/components/shared/ScrollLoader";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import ConsultationForm from "@/components/contact/ConsultationForm";

// Positioned as the broad educational pillar page — "what is e-waste" and how
// to verify a recycler's claims. Fresno-specific drop-off intent stays on
// /fresno-electronics-recycling/, which already ranks for it; the two link to
// each other rather than competing for the same query.
export const metadata: Metadata = {
  title: "What Is E-Waste? Data Risks & Recycling",

  description:
    "What e-waste is, why retired electronics still hold data, and how to check that a recycler's certifications are real, current, and cover the right facility.",

  keywords: [
    "what is e-waste",
    "responsible electronics recycling",
    "certified electronics recycler",
    "secure e-waste recycling",
    "verify R2 certification",
    "e-waste data security",
  ],

  alternates: {
    canonical: "/ewaste/",
  },

  openGraph: {
    title: "What Is E-Waste? Data Risks & Recycling",
    description:
      "Retired electronics still hold data. Learn how responsible recycling works and how to check that a recycler's certifications are genuine.",
    url: "/ewaste/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "What Is E-Waste? Data Risks & Recycling",
    description:
      "Retired electronics still hold data. Learn how responsible recycling works and how to verify a recycler's certifications.",
  },
};

/* ---------------------------------------------------------------- data ---- */

const dispositionPaths = [
  {
    condition: "Device is functional and eligible for reuse",
    next: "Approved data erasure, testing, repair, buyback, remarketing, or reuse evaluation.",
  },
  {
    condition: "Device contains data and the client requires physical destruction",
    next: "On-site or controlled physical destruction workflow matched to the media type and project scope.",
  },
  {
    condition: "Device fails approved logical sanitization",
    next: "Physical destruction or another approved escalation pathway.",
  },
  {
    condition: "Device has no reuse potential",
    next: "Responsible materials recovery through Integritrade's qualified downstream recycling process.",
  },
  {
    condition: "Device includes batteries or controlled materials",
    next: "Identification, segregation, containment, and management under applicable handling procedures.",
  },
];

const verificationQuestions = [
  {
    ask: "Are you certified to an industry standard?",
    confirm:
      "Ask the vendor to name the standard, such as R2v3, rather than accepting a generic “certified” claim.",
  },
  {
    ask: "Can I see the current certificate?",
    confirm:
      "Check the legal business name, facility address, issuing body, certificate status, scope, and expiry date.",
  },
  {
    ask: "Does the certificate cover the facility handling my material?",
    confirm:
      "A certificate belonging to a parent company, a different location, or a downstream partner is not the same as a certificate for the facility you are evaluating.",
  },
  {
    ask: "Can I verify R2 certification independently?",
    confirm: "Use the official R2 certified-facility directory to check current status and scope information.",
  },
  {
    ask: "Can I verify the ISO certifications independently?",
    confirm:
      "Search the company name or certificate information through IAF CertSearch, then compare the active status, issuing certification body, scope, and location to the vendor's certificate.",
  },
];

const vendorClaims = [
  {
    claim: "“We destroy hard drives.”",
    followUp:
      "What media types do you destroy, what equipment do you operate, and where does the destruction occur?",
  },
  {
    claim: "“We use a degausser.”",
    followUp:
      "How do you identify compatible magnetic media? Are you applying degaussing to SSDs, NVMe, USB drives, or other flash-based storage? If so, that is not an appropriate method for the flash media.",
  },
  {
    claim: "“Your data is wiped.”",
    followUp:
      "Does the erasure platform produce a device-level, digitally authenticated, tamper-evident report? How is a failed erasure handled?",
  },
  {
    claim: "“We issue certificates.”",
    followUp:
      "Does the Certificate of Destruction identify the customer, project, date, method, quantity, media type, and asset tag or serial number when required by the scope?",
  },
  {
    claim: "“We handle everything in-house.”",
    followUp:
      "Which services are performed on site, and which materials are transferred to qualified downstream partners?",
  },
  {
    claim: "“We recycle responsibly.”",
    followUp:
      "What recognized industry certification applies to the facility, and can I verify the certificate and scope independently?",
  },
];

const bothNeedToKnow = [
  "What data or personal information may still be present?",
  "What happens after the equipment is picked up or dropped off?",
  "How will the device be evaluated for reuse, erasure, destruction, or recycling?",
  "Who has access to the equipment?",
  "What certificate, report, or other record is available for the service performed?",
  "Are the vendor's claimed certifications real, current, and applicable to the facility?",
];

const faqs = [
  {
    q: "What is e-waste?",
    a: "E-waste is unwanted, retired, broken, obsolete, or surplus electronic equipment. It includes computers, laptops, servers, phones, tablets, monitors, printers, copiers, networking equipment, storage devices, hard drives, SSDs, cables, batteries, and other electronics.",
  },
  {
    q: "Why is e-waste harmful to the environment?",
    a: "Electronics contain valuable metals, plastics, glass, and other materials that require energy and natural resources to manufacture. Some electronics and batteries also contain materials that require controlled handling. Responsible reuse and recycling conserves resources and helps avoid air and water pollution.",
  },
  {
    q: "Can my old laptop, phone, printer, or copier still have personal information on it?",
    a: "Yes. Computers and phones can contain financial information, tax records, account credentials, photos, messages, files, and authentication data. Printers, copiers, scanners, and MFPs may contain internal storage, scans, print queues, configuration data, address books, and paper documents left in the device.",
  },
  {
    q: "How much information can be stored in 1 GB?",
    a: "It depends on file size and compression. As a simple illustration, 1 GB can hold roughly 250 photos at 4 MB each, 1,000 scanned documents at 1 MB each, or about 10 minutes of high-quality video at 100 MB per minute. One small spreadsheet can also contain a large amount of sensitive information. The importance of data is not determined by its file size.",
  },
  {
    q: "Is degaussing effective for SSDs and NVMe drives?",
    a: "No. Degaussing can be used for compatible magnetic media, but NIST states that it should not be used for non-magnetic flash storage such as SSDs. SSDs, NVMe drives, USB drives, SD cards, and other flash-based media need a method appropriate to that storage technology.",
  },
  {
    q: "How do I know whether an e-waste vendor is really certified?",
    a: "Ask for the current certificate, then verify the legal entity, facility address, standard, certification body, status, scope, and expiry date. R2 certification can be checked in the official R2 facility directory. ISO certifications can be checked through IAF CertSearch and compared against the certificate provided by the vendor.",
  },
  {
    q: "Is a business license the same as an R2v3 or ISO certification?",
    a: "No. A business license or local registration may show that a company is authorized to operate, but it does not independently verify an electronics recycler's data-security processes, downstream controls, environmental-management system, or worker-health and safety controls. R2v3 and ISO management-system certifications involve third-party certification and ongoing oversight within the applicable scope.",
  },
  {
    q: "Does Integritrade offer free e-waste drop-off in Fresno?",
    a: "Integritrade offers free drop-off recycling for most accepted IT equipment and electronics in Fresno. Certain bulky or specialized items, including large copy machines and large MFPs, may have nominal charges because of handling and processing requirements. Contact Integritrade before drop-off to confirm current acceptance and any applicable fee.",
  },
  {
    q: "Does Integritrade provide data destruction for residents and businesses?",
    a: "Yes. Integritrade provides logical data sanitization for suitable devices, physical data destruction for client-selected requirements, HDD degaussing followed by shredding, SSD/NVMe physical destruction to 2 mm, chain-of-custody options, Certificates of Erasure, serialized Certificates of Destruction, and enhanced photo, video, live-video, or witnessed-destruction services based on scope.",
  },
  {
    q: "Can Integritrade buy used corporate IT equipment?",
    a: "For qualifying enterprise equipment, Integritrade can evaluate direct buyback or remarketing options. Value depends on device type, age, condition, configuration, quantity, market demand, corporate-lock status, customer requirements, and testing results. Reuse and value recovery are evaluated before final materials recovery when appropriate.",
  },
];

const sources = [
  {
    name: "U.S. EPA — Electronics Donation and Recycling",
    href: "https://www.epa.gov/recycle/electronics-donation-and-recycling",
    relevance:
      "Environmental benefits of responsible electronics donation and recycling, plus pre-disposal consumer actions.",
  },
  {
    name: "U.S. EPA — Certified Electronics Recyclers",
    href: "https://www.epa.gov/smm-electronics/certified-electronics-recyclers",
    relevance: "Third-party recycler certification and certified-recycler selection.",
  },
  {
    name: "NIST SP 800-88 — Guidelines for Media Sanitization",
    href: "https://csrc.nist.gov/pubs/sp/800/88/r1/final",
    relevance: "Media-appropriate sanitization methods and sanitization validation.",
  },
  {
    name: "FTC — Before You Get Rid of Your Computer",
    href: "https://consumer.ftc.gov/articles/how-protect-your-data-you-get-rid-your-computer",
    relevance: "Consumer guidance on preparing device data before disposal.",
  },
  {
    name: "IAF CertSearch",
    href: "https://www.iafcertsearch.org/",
    relevance: "Certificate-search service for verifying accredited management-system certifications.",
  },
  {
    name: "SERI — Find an R2 Certified Facility",
    href: "https://sustainableelectronics.org/find-an-r2-certified-facility/",
    relevance: "Official directory for R2 certified-facility verification.",
  },
];

/* --------------------------------------------------------------- helpers -- */

const H2 =
  "font-serif text-2xl sm:text-3xl leading-tight tracking-tight text-gray-900 dark:text-white";
const P = "text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 lg:text-base";
const TABLE_WRAP =
  "overflow-x-auto rounded-md border border-gray-200 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dark:border-gray-800";
const TH = "px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white";
const TD_KEY = "px-6 py-4 text-sm font-medium text-gray-900 dark:text-white align-top";
const TD = "px-6 py-4 text-sm text-gray-700 dark:text-gray-300 align-top";
const EXT = { target: "_blank", rel: "noopener noreferrer" } as const;
const extLink =
  "font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300";

/* ------------------------------------------------------------------ page -- */

export default function EWastePage() {
  // Generated from the same `faqs` array the page renders, so the schema can
  // never drift from the visible questions.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="bg-secondary dark:bg-dark transition-colors duration-300">
      {/* Plain <script> so the JSON-LD is in the prerendered HTML; next/script
          defers to the client and would leave it out of the static export. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <PageHeader
          eyebrow="E-Waste Recycling"
          title="What Is E-Waste? Your Data and the Environment Deserve Better Than “Just Recycling.”"
          description="E-waste, short for electronic waste, includes retired computers, laptops, servers, phones, tablets, printers, copiers, monitors, TVs, networking equipment, hard drives, SSDs, cables, batteries, and other devices that have reached the end of their current use."
        />

        <div className="mx-auto mt-8 max-w-4xl space-y-5">
          <p className={P}>
            But a retired device is not automatically harmless. It may still contain sensitive
            personal or business data. It may contain lithium-ion batteries, circuit boards,
            mercury-containing components, or other materials that require controlled handling. It
            may also contain equipment and components that can be reused, repaired, remarketed, or
            recovered instead of being treated as scrap.
          </p>
          <p className={P}>
            Responsible e-waste recycling is not simply getting electronics out of your building. It
            is knowing what is inside the equipment, protecting the data, preserving useful value
            where possible, and managing the material through the right next step.
          </p>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <PrimaryButton href="/service-book/" testId="button-ewaste-evaluation">
            Request an ITAD or Recycling Evaluation
          </PrimaryButton>
          <OutlineButton href="/tracetech/" testId="button-ewaste-tracetech">
            See TraceTech Client Visibility
          </OutlineButton>
        </div>

        {/* Body sits beside a sticky enquiry form. The tables are all two
            column, so an 8/4 split still leaves them room to breathe. */}
        <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">

        {/* ── Why e-waste matters ──────────────────────────────── */}
        <ScrollLoader>
          <section className="mx-auto mt-20 max-w-4xl lg:mt-28">
            <h2 className={H2}>Why E-Waste Matters</h2>
            <div className="mt-6 space-y-5">
              <p className={P}>
                Electronics contain materials such as metals, plastics, and glass that require
                energy and natural resources to produce. The U.S. Environmental Protection Agency
                explains that donating or recycling electronics conserves natural resources and
                helps avoid air and water pollution, and that electronics should be recycled or
                donated safely and correctly.{" "}
                <a
                  className={extLink}
                  href="https://www.epa.gov/recycle/electronics-donation-and-recycling"
                  {...EXT}
                >
                  EPA: Electronics Donation and Recycling
                </a>
              </p>
              <p className={P}>
                The environmental side matters, but so does the data side. A device can hold much
                more than a few files. A one-gigabyte folder can hold roughly 250 photos at 4 MB
                each, about 1,000 scanned documents at 1 MB each, or roughly 10 minutes of
                high-quality video at 100 MB per minute. These are only illustrations — actual file
                size varies widely. The point is that a small amount of data can hold a great deal of
                personal or business information.
              </p>
              <p className={P}>
                A single spreadsheet smaller than 1 MB may contain customer information, employee
                details, financial records, passwords, or proprietary information. A phone can
                contain years of messages, contacts, photos, authentication information, and
                account-recovery tools. A printer or copier can contain stored scans, print queues,
                address books, internal storage, or paper documents that were simply left in the
                scanner bed or paper tray.
              </p>

              <blockquote className="border-l-2 border-emerald-600 pl-6 dark:border-emerald-400">
                <p className="font-serif text-lg leading-relaxed text-gray-900 dark:text-white sm:text-xl">
                  Would you hand a stranger your unlocked phone, family photos, saved passwords, tax
                  records, and email without knowing what happens next?
                </p>
              </blockquote>

              <p className={P}>
                Retired electronics deserve the same level of thought. The data does not stop being
                sensitive just because the device is old.
              </p>
              <p className={P}>
                The Federal Trade Commission advises consumers to back up needed information and
                erase personal information before disposing of an old computer or phone. It also
                recommends removing SIM and SD cards from phones before they are sold, donated,
                traded in, or recycled.{" "}
                <a
                  className={extLink}
                  href="https://consumer.ftc.gov/articles/how-protect-your-data-you-get-rid-your-computer"
                  {...EXT}
                >
                  FTC: Before You Get Rid of Your Computer
                </a>
              </p>
            </div>
          </section>
        </ScrollLoader>

        {/* ── Disposition pathways ─────────────────────────────── */}
        <ScrollLoader>
          <section className="mt-20 lg:mt-28">
            <SectionHeader
              eyebrow="The Right Path"
              title="Responsible recycling starts with the right path"
              description="Not every device needs the same outcome. A responsible process begins by identifying the asset, the data risk, the customer's requirements, and the most appropriate disposition pathway."
            />

            <div className={`${TABLE_WRAP} mt-10`}>
              <table className="w-full bg-white text-left dark:bg-dark-secondary">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className={TH}>Asset condition or customer requirement</th>
                    <th className={TH}>Appropriate next step</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {dispositionPaths.map((row) => (
                    <tr key={row.condition}>
                      <td className={TD_KEY}>{row.condition}</td>
                      <td className={TD}>{row.next}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className={`${P} mx-auto mt-6 max-w-4xl`}>
              The goal is not to force every asset into resale or destruction. It is to apply the
              right documented process to the equipment, media type, customer instruction, and risk
              level. See our{" "}
              <Link className={extLink} href="/services/data-destruction-services/">
                data destruction services
              </Link>{" "}
              and{" "}
              <Link className={extLink} href="/services/it-asset-disposition/">
                IT asset disposition
              </Link>{" "}
              options for how each pathway is documented.
            </p>
          </section>
        </ScrollLoader>

        {/* ── Fresno drop-off ──────────────────────────────────── */}
        <ScrollLoader>
          <section className="mx-auto mt-20 max-w-4xl lg:mt-28">
            <h2 className={H2}>Free E-Waste Drop-Off in Fresno for Most IT Equipment</h2>
            <div className="mt-6 space-y-5">
              <p className={P}>
                Integritrade offers free Fresno drop-off recycling for most IT equipment and
                electronics. That can include common computers, laptops, monitors, phones, tablets,
                servers, networking equipment, cables, accessories, and other accepted electronics.
              </p>
              <p className={P}>
                Certain items require additional handling, labor, storage, or downstream processing.
                Large copy machines, large multifunction printers, and similar bulky equipment may
                have nominal charges. Contact Integritrade before drop-off to confirm acceptance,
                current handling requirements, and any applicable fee for oversized or specialized
                equipment.
              </p>
              <p className={P}>
                For business, enterprise, and qualifying-volume projects, Integritrade also supports
                secure pickup, chain-of-custody options, asset tracking, data sanitization or
                physical destruction, equipment buyback, remarketing, and California-wide ITAD
                services. Full details are on the{" "}
                <Link className={extLink} href="/fresno-electronics-recycling/">
                  Fresno electronics recycling and drop-off page
                </Link>
                .
              </p>
            </div>
          </section>
        </ScrollLoader>

        {/* ── Certified to what ────────────────────────────────── */}
        <ScrollLoader>
          <section className="mt-20 lg:mt-28">
            <SectionHeader
              eyebrow="Verify The Claim"
              title="“Certified” is not enough. Certified to what?"
              description="A vendor may say it is certified. That phrase is not meaningful until the company identifies the standard, the issuing body, the facility covered, the certificate scope, and the current certificate status."
            />

            <div className="mx-auto mt-8 max-w-4xl space-y-5">
              <p className={P}>
                A business license, local registration, insurance policy, or reseller permit may be
                important, but none of those documents independently verify an electronics
                recycler&apos;s data-security controls, downstream-vendor process, worker health and
                safety controls, or environmental-management system.
              </p>
              <p className={P}>
                EPA encourages electronics recyclers to demonstrate conformance to recognized
                standards through an accredited, independent third-party auditor, explaining that
                accredited recycler standards assess the environmental, worker health and safety,
                and security practices of entities managing used electronics.{" "}
                <a
                  className={extLink}
                  href="https://www.epa.gov/smm-electronics/certified-electronics-recyclers"
                  {...EXT}
                >
                  EPA: Certified Electronics Recyclers
                </a>
              </p>
              <p className="font-serif text-lg text-gray-900 dark:text-white">
                Verify the certificate. Do not just look at the logo.
              </p>
            </div>

            <div className={`${TABLE_WRAP} mt-10`}>
              <table className="w-full bg-white text-left dark:bg-dark-secondary">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className={TH}>Ask this</th>
                    <th className={TH}>What to confirm</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {verificationQuestions.map((row) => (
                    <tr key={row.ask}>
                      <td className={TD_KEY}>{row.ask}</td>
                      <td className={TD}>{row.confirm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mx-auto mt-8 max-w-4xl space-y-5">
              <p className={P}>
                Check R2 status in the{" "}
                <a className={extLink} href="https://sustainableelectronics.org/find-an-r2-certified-facility/" {...EXT}>
                  official R2 certified-facility directory
                </a>{" "}
                and management-system certifications through{" "}
                <a className={extLink} href="https://www.iafcertsearch.org/" {...EXT}>
                  IAF CertSearch
                </a>
                .
              </p>
              <p className={P}>
                If the certificate is expired, the address does not match, the scope is vague, the
                vendor cannot explain the issuing body, or the directory information conflicts with
                the claim, stop and investigate before you hand over material. Unresolved
                discrepancies are a reason to choose another vendor.
              </p>
            </div>
          </section>
        </ScrollLoader>

        {/* ── Data destruction questions ───────────────────────── */}
        <ScrollLoader>
          <section className="mt-20 lg:mt-28">
            <SectionHeader
              eyebrow="Ask Better Questions"
              title="Data destruction claims should lead to specific questions"
              description="A recycler may claim to offer data destruction. The next question is: what equipment do you use, what media does it work on, and how do you document the result?"
            />

            <div className="mx-auto mt-8 max-w-4xl space-y-5">
              <p className={P}>
                A basic degausser is not a universal data-destruction solution. Degaussing can be a
                legitimate method for compatible magnetic media, but NIST&apos;s media-sanitization
                guidance states that degaussing should not be used for non-magnetic storage such as
                flash storage and SSDs. NIST also emphasizes sanitization validation — determining
                whether target data was effectively sanitized.{" "}
                <a className={extLink} href="https://csrc.nist.gov/pubs/sp/800/88/r1/final" {...EXT}>
                  NIST SP 800-88
                </a>
              </p>
              <p className={P}>
                Modern equipment can contain magnetic hard drives, 2.5-inch SSDs, M.2 NVMe drives,
                USB storage, SD cards, embedded flash, cache modules, optical media, and other
                data-bearing components. Some short M.2 2230 cards are Wi-Fi or Bluetooth adapters,
                while others are solid-state storage. Form factor alone is not proof. A proper
                process verifies what the component actually is before deciding how to handle it.
              </p>
            </div>

            <div className={`${TABLE_WRAP} mt-10`}>
              <table className="w-full bg-white text-left dark:bg-dark-secondary">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className={TH}>Vendor claim</th>
                    <th className={TH}>Ask this follow-up question</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {vendorClaims.map((row) => (
                    <tr key={row.claim}>
                      <td className={TD_KEY}>{row.claim}</td>
                      <td className={TD}>{row.followUp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mx-auto mt-8 max-w-4xl space-y-5">
              <p className={P}>
                If a vendor claims it can securely destroy solid-state media, ask what that means in
                practice. Can it physically shred SSDs and NVMe media into small particles?
                Integritrade offers physical destruction for SSDs and NVMe media down to 2 mm when
                that is the approved requirement. For hard disk drives, Integritrade uses degaussing
                followed by shredding. For suitable reusable devices, the company uses high-volume
                PXE-based erasure so the device can remain in the circular economy when the
                client&apos;s requirements allow it.
              </p>
              <p className={P}>
                The correct method depends on the actual media, the customer&apos;s instructions, and
                the required outcome. A vendor that cannot explain those differences should not be
                asking you to trust it with sensitive data. Every project can be closed out with
                serialized certificates through our{" "}
                <Link className={extLink} href="/services/data-destruction-services/">
                  data destruction services
                </Link>
                .
              </p>
            </div>
          </section>
        </ScrollLoader>

        {/* ── Homes and businesses ─────────────────────────────── */}
        <ScrollLoader>
          <section className="mx-auto mt-20 max-w-4xl lg:mt-28">
            <h2 className={H2}>
              Why homes and businesses both need a certified, capable vendor
            </h2>
            <div className="mt-6 space-y-5">
              <p className={P}>
                A residential customer might be recycling one laptop, an old phone, a printer, or a
                family desktop. A company might be retiring 5,000 laptops, storage arrays, printers,
                networking equipment, and data-bearing media across several locations. The scale is
                different. The core questions are not.
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-700 dark:text-emerald-400">
                Both need to know
              </p>
              <ul className="space-y-3">
                {bothNeedToKnow.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400"
                    />
                    <span className={P}>{item}</span>
                  </li>
                ))}
              </ul>
              <p className={P}>
                For businesses, the process must also align to client-specific requirements,
                contracts, audit needs, and potential value recovery. For individuals, it should
                provide confidence that old technology is not being treated as a black box with a
                recycling label on it.
              </p>
            </div>
          </section>
        </ScrollLoader>

        {/* ── Why Integritrade ─────────────────────────────────── */}
        <ScrollLoader>
          <section className="mt-20 lg:mt-28">
            <SectionHeader
              eyebrow="Why Integritrade"
              title="Why choose Integritrade for e-waste recycling and ITAD?"
            />

            <div className="mx-auto mt-8 max-w-4xl space-y-5">
              <p className={P}>
                Integritrade is a Fresno-based California IT asset disposition, electronics
                recycling, data destruction, and asset recovery company. The company operates from a
                31,000 square foot controlled-access, video-monitored facility with secure asset
                staging, lift equipment, dock access, racking, PXE erasure capability, and physical
                data-destruction equipment. Assets are handled by background-checked personnel under
                documented processes.
              </p>
              <p className={P}>
                Integritrade is R2v3 certified and maintains ISO 9001, ISO 14001, ISO 45001, and ISO
                27001 certifications. The company combines those management-system controls with
                practical services: free drop-off recycling for most accepted electronics in Fresno,
                secure ITAD pickup, logical data sanitization, physical destruction, data-center
                decommissioning, corporate equipment buyback and remarketing through{" "}
                <Link className={extLink} href="/services/it-asset-disposition/">
                  IT asset disposition and value recovery
                </Link>
                , returns processing, and responsible downstream recycling when recovery is the right
                path. All certifications can be reviewed on our{" "}
                <Link className={extLink} href="/certifications/">
                  certifications page
                </Link>
                .
              </p>
              <p className={P}>
                Through{" "}
                <Link className={extLink} href="/tracetech/">
                  TraceTech
                </Link>
                , authorized clients can follow project and device status after pickup, manage
                service requests, access available Certificates of Erasure and serialized
                Certificates of Destruction, and review project-specific reporting. The platform can
                also show assigned handling instructions at the point of asset scan, helping
                technicians follow approved requirements for erasure, destruction, remarketing, reuse
                evaluation, recycling, or another client-selected disposition pathway.
              </p>
              <p className="font-serif text-lg leading-relaxed text-gray-900 dark:text-white sm:text-xl">
                Do not trust your data to just anyone. Ask the questions. Verify the certificates.
                Choose a vendor with the equipment, facility, process, and accountability to give you
                real answers.
              </p>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <PrimaryButton href="/service-book/" testId="button-ewaste-evaluation-2">
                Request an ITAD or Recycling Evaluation
              </PrimaryButton>
              <OutlineButton href="/service-area/fresno/" testId="button-ewaste-fresno">
                Fresno Service Area
              </OutlineButton>
            </div>
          </section>
        </ScrollLoader>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <ScrollLoader>
          <section className="mt-20 lg:mt-28">
            <SectionHeader
              eyebrow="Questions"
              title="Frequently asked questions about e-waste recycling"
            />

            <dl className="mx-auto mt-10 max-w-4xl divide-y divide-gray-200 dark:divide-gray-800">
              {faqs.map((f) => (
                <div key={f.q} className="py-6 first:pt-0">
                  <dt className="font-serif text-lg leading-snug text-gray-900 dark:text-white">
                    {f.q}
                  </dt>
                  <dd className={`${P} mt-3`}>{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </ScrollLoader>

        {/* ── Sources ──────────────────────────────────────────── */}
        <ScrollLoader>
          <section className="mt-20 lg:mt-28">
            <SectionHeader
              eyebrow="References"
              title="Sources and further reading"
            />

            <div className={`${TABLE_WRAP} mt-10`}>
              <table className="w-full bg-white text-left dark:bg-dark-secondary">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className={TH}>Source</th>
                    <th className={TH}>Relevance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {sources.map((s) => (
                    <tr key={s.name}>
                      <td className={TD_KEY}>
                        <a className={extLink} href={s.href} {...EXT}>
                          {s.name}
                        </a>
                      </td>
                      <td className={TD}>{s.relevance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </ScrollLoader>

          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <ConsultationForm industry="E-Waste Recycling" />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
