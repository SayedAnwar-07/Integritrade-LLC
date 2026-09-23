import type { Metadata } from "next";
import Script from "next/script";
import Image, { type StaticImageData } from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import SectionFloatNav from "@/components/shared/SectionFloatNav";

// The file names are the wrong way round: ssd-shredder.jpeg is the Proton hard
// drive shredder and hdd-shredder.jpeg is the SEM SSD shredder (its badge is in
// the photo). The pairings in METHODS below are the correct ones.
import ssdShredderImg from "../../../public/about/ssd-shredder.jpeg";
import hddShredderImg from "../../../public/about/hdd-shredder.jpeg";
import degausserImg from "../../../public/about/degausser.jpeg";
import softwareSanitizationImg from "../../../public/about/software-sanitization.jpg";

import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import { Mail, MapPin, Phone } from "lucide-react";
import ScrollLoader from "@/components/shared/ScrollLoader";

export const metadata: Metadata = {
  title: "How We Destroy Data | Capabilities",
  description:
    "Curious how we destroy your data? Check out the heavy-duty equipment we use to permanently shred hard drives, tapes, and solid-state media with zero recovery.",
  alternates: { canonical: "/about/our-equipment/" },
  openGraph: {
    title: "How We Destroy Data | Capabilities | Integritrade LLC",
    description:
      "Industrial-grade data destruction with documented deliverables: software sanitization, degaussing, and SSD micro-shredding.",
    url: "https://integritradellc.com/about/our-equipment/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://integritradellc.com/logo/integritrade-logo.png",
        width: 1200,
        height: 630,
        alt: "Integritrade LLC Capabilities",
      },
    ],
  },
  robots: {
  index: true,
  follow: true,

  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
},
};

// This page was "Our Equipment" in the nav until 2026-09-24. Ian found that
// too vague: a visitor wants to know how their data gets destroyed, so the
// page now says so. The URL stays /about/our-equipment/ because it carries the
// page's search history and Ian's blog articles link to it directly.
const NAV_SECTIONS = [
  { id: "software", label: "Software Erasure" },
  { id: "degaussing", label: "Degaussing" },
  { id: "shredding", label: "Hard Drive Shredding" },
  { id: "solidstate", label: "SSD Shredding" },
  { id: "equipment", label: "Equipment List" },
  { id: "visit", label: "Site Visits" },
];

type Method = {
  id: string;
  title: string;
  /** Who the method is for, in one line. */
  lead: string;
  body: string;
  specs: { label: string; value: string }[];
  image: StaticImageData;
  alt: string;
  /** Crop focus for photos that are not already 4:3. */
  imagePosition?: string;
};

/**
 * One row per method, every row built the same way: text on the left, photo
 * on the right. The page used to alternate sides (right, left, right, right),
 * which Ian found messy, so the layout now lives in one place. Add a method
 * here and it inherits the same row.
 */
const METHODS: Method[] = [
  {
    id: "software",
    title: "Software erasure",
    lead: "For drives with a second life ahead of them.",
    body: "Each drive is erased and verified, then left intact for resale or redeployment. We can PXE boot entire racks at once, so large jobs are not processed one drive at a time.",
    specs: [
      { label: "Equipment", value: "Blancco and WipeOS, both ADISA-verified" },
      { label: "Media", value: "HDDs, SSDs, NVMe drives, phones, tablets, and computers" },
      { label: "Standard", value: "NIST 800-88 baseline, adjustable to your requirements" },
      { label: "Output", value: "Serialized Certificate of Erasure for every drive" },
    ],
    image: softwareSanitizationImg,
    alt: "Integritrade software sanitization workflow",
  },
  {
    id: "degaussing",
    title: "Degaussing",
    lead: "Step one of two for hard drives and tape being destroyed.",
    body: "A high-energy magnetic field scrambles the magnetic orientation of the platter itself, not just the files stored on it. Either step alone is an industry standard. Hard drives destroyed here get both.",
    specs: [
      { label: "Equipment", value: "Verity Datagauss ZZ001208" },
      { label: "Media", value: "Hard drives and magnetic tape" },
      { label: "Standard", value: "NIST 800-88" },
      { label: "Output", value: "Unreadable by any recovery method" },
    ],
    image: degausserImg,
    alt: "Verity Systems Datagauss ZZ001208 Degausser",
  },
  {
    id: "shredding",
    title: "Hard drive shredding",
    lead: "Step two. Every degaussed drive is then shredded.",
    body: "Platters are reduced to jagged fragments. Even if a fragment were recovered, there is no readable magnetic signature left on it.",
    specs: [
      { label: "Equipment", value: "Proton Data Security Model 104" },
      {
        label: "Media",
        value: "Degaussed 3.5″ and 2.5″ hard drives, magnetic media, and other approved electronic media",
      },
      { label: "Standard", value: "NIST 800-88" },
      { label: "Output", value: "Certificate of Destruction" },
    ],
    image: ssdShredderImg,
    alt: "Proton Data Security Model 104 Hard Drive Shredder",
  },
  {
    id: "solidstate",
    title: "SSD shredding",
    lead: "For SSDs, phones, and other flash storage.",
    body: "SSDs and phones store data on tiny flash chips that a standard hard drive shredder can leave intact and recoverable. This machine shreds to a 2 mm particle size, small enough to destroy the chips themselves.",
    specs: [
      { label: "Equipment", value: "SEM Model 2 SSD-VK" },
      {
        label: "Media",
        value: "2.5″ SATA, M.2 NVMe, M.2 SATA, and mSATA SSDs, USB flash drives, SD and microSD cards, phones, and tablets",
      },
      { label: "Particle size", value: "2 mm" },
      { label: "Output", value: "Serialized Certificate of Destruction" },
    ],
    image: hddShredderImg,
    alt: "SEM Model 2 SSD-VK Shredder at Integritrade",
    // Portrait photo: keep the whole machine in the 4:3 frame, not the shelving above it.
    imagePosition: "object-[center_70%]",
  },
];

const EQUIPMENT = [
  {
    num: "01",
    equipment: "Verity Datagauss",
    model: "ZZ001208",
    method: "Magnetic degaussing",
    media: "HDDs · Magnetic tape",
    standard: "NIST 800-88",
  },
  {
    num: "02",
    equipment: "Proton Data Security",
    model: "Model 104",
    method: "Physical shredding",
    media: "Degaussed 3.5-inch and 2.5-inch hard disk drives (HDDs), magnetic media, and other approved electronic media",
    standard: "NIST 800-88",
  },
  {
    num: "03",
    equipment: "SEM Shredder",
    model: "Model 2 SSD-VK",
    method: "2mm micro-shredding",
    media: "SSD · Phone · Tablet · USB",
    standard: "NIST 800-88 Purge",
  },
  {
    num: "04",
    equipment: "PXE-Boot, USB Boot, Server-Rack Erasure",
    model: "Software platform",
    method: "Software sanitization",
    media: "SSDs, HDDs, NVMes, Cell Phones, Tablets, Computers, etc",
    standard: "ADISA-verified",
  },
];

export default function OurCapabilitiesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IT Asset Disposition and Data Destruction",
    provider: {
      "@type": "Organization",
      name: "Integritrade LLC",
      url: "https://integritradellc.com",
    },
    description:
      "Industrial-grade data destruction services including NIST 800-88 software sanitization, degaussing, hard drive shredding, and SSD micro-chip destruction.",
    areaServed: "US",
  };

  return (
    <section className="bg-secondary dark:bg-dark transition-colors duration-300">
      <Script
        id="capabilities-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="mx-auto max-w-[1400px] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <ScrollLoader>
          <PageHeader
            title="How we destroy your data"
            description="Drives headed for reuse are erased with certified software. Hard drives being destroyed are degaussed, then shredded. SSDs, phones, and other flash media are shredded to 2 mm. Everything happens inside our Fresno facility, run by our own staff, with a certificate for every drive."
          />
        </ScrollLoader>
      </div>

      {/* Everything after the hero shares the sticky section nav, as on the
          Services and TraceTech pages. */}
      <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-16 sm:px-6 md:pt-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

          <aside className="hidden min-w-0 lg:col-span-2 lg:block">
            <SectionFloatNav sections={NAV_SECTIONS} />
          </aside>

          <div className="min-w-0 space-y-24 md:space-y-32 lg:col-span-10">

            {/* ── Methods: text left, photo right, every time ─────────── */}
            {METHODS.map((m, i) => (
              <section key={m.id} id={m.id} className="scroll-mt-28">
                <ScrollLoader>
                  <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    <div className="min-w-0">
                      <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                        {m.title}
                      </h2>
                      <p className="mt-3 text-[17px] font-medium leading-snug text-stone-800 dark:text-gray-200">
                        {m.lead}
                      </p>
                      <p className="custom-text-center mt-4 text-[15px] leading-relaxed text-stone-600 dark:text-slate-300">
                        {m.body}
                      </p>

                      <dl className="mt-8">
                        {m.specs.map((s) => (
                          <div
                            key={s.label}
                            className="grid grid-cols-[7.5rem_minmax(0,1fr)] gap-4 border-t border-gray-300 py-3 dark:border-gray-800"
                          >
                            <dt className="pt-0.5 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                              {s.label}
                            </dt>
                            <dd className="text-sm text-gray-900 dark:text-gray-100">{s.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-md bg-white dark:bg-dark-secondary">
                      <Image
                        src={m.image}
                        alt={m.alt}
                        fill
                        className={`object-cover ${m.imagePosition ?? ""}`}
                        sizes="(max-width: 1023px) 100vw, 540px"
                        priority={i === 0}
                      />
                    </div>
                  </div>
                </ScrollLoader>
              </section>
            ))}

            {/* ── Equipment list ──────────────────────────────────────── */}
            <section id="equipment" className="scroll-mt-28">
              <ScrollLoader>
                <div className="max-w-3xl">
                  <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                    The machinery we operate, by name and model.
                  </h2>
                  <p className="custom-text-center mt-5 text-[16px] leading-relaxed text-stone-600 dark:text-slate-300">
                    We list specific equipment because vague claims like &ldquo;industrial-grade
                    machinery&rdquo; are not verifiable. These units operate inside our Fresno
                    facility and are run by our own trained personnel, never subcontracted.
                  </p>
                </div>

                <div className="mt-10 border-t border-gray-200 dark:border-gray-800">
                  {EQUIPMENT.map((row) => (
                    <div
                      key={row.num}
                      className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-8 lg:py-10 border-b border-gray-200 dark:border-gray-800"
                    >
                      <div className="md:col-span-1">
                        <span className="text-2xl font-light text-gray-400 dark:text-gray-600 tabular-nums">
                          {row.num}
                        </span>
                      </div>
                      <div className="md:col-span-3">
                        <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest md:hidden mb-1">Equipment</p>
                        <p className="font-semibold text-gray-900 dark:text-gray-100 text-base">{row.equipment}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic font-serif mt-0.5">{row.model}</p>
                      </div>
                      <div className="md:col-span-3">
                        <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest md:hidden mb-1">Method</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{row.method}</p>
                      </div>
                      <div className="md:col-span-3">
                        <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest md:hidden mb-1">Media</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{row.media}</p>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest md:hidden mb-1">Standard</p>
                        <p className="text-sm font-medium">{row.standard}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollLoader>
            </section>

            {/* ── Visit ───────────────────────────────────────────────── */}
            <section id="visit" className="scroll-mt-28">
              <ScrollLoader>
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                  <div className="min-w-0">
                    <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                      Site visits welcome. Walk the floor before you sign.
                    </h2>
                    <p className="custom-text-center mt-6 max-w-xl text-base leading-relaxed text-stone-700 dark:text-slate-300">
                      We host scheduled facility tours for prospective clients and
                      auditors. Bring your compliance lead. They&apos;ll see the same
                      process your retired devices will go through.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                      <OutlineButton href="/services" testId="button-learn-more">
                        View Service Details
                      </OutlineButton>
                      <PrimaryButton href="/service-book" testId="button-get-quote">
                        Schedule a Tour
                      </PrimaryButton>
                    </div>
                  </div>

                  <div className="min-w-0 rounded-md bg-white p-8 lg:p-10 dark:bg-dark-secondary">
                    <div className="mb-6 text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                      Visit Integritrade
                    </div>

                    <dl className="space-y-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <div>
                          <dt className="mb-1 text-xs uppercase tracking-wider text-muted-foreground dark:text-gray-400">
                            Facility
                          </dt>
                          <dd className="text-sm text-gray-900 dark:text-gray-100">
                            944 S Topeka Ave
                            <br />
                            Fresno, CA 93721
                          </dd>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Phone className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <div>
                          <dt className="mb-1 text-xs uppercase tracking-wider text-muted-foreground dark:text-gray-400">
                            Direct Line
                          </dt>
                          <dd className="text-sm text-gray-900 dark:text-gray-100">
                            (559) 325-4813
                          </dd>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        <div>
                          <dt className="mb-1 text-xs uppercase tracking-wider text-muted-foreground dark:text-gray-400">
                            Email
                          </dt>
                          <dd className="text-sm text-gray-900 dark:text-gray-100">
                            info@integritradeLLC.com
                          </dd>
                        </div>
                      </div>
                    </dl>
                  </div>
                </div>
              </ScrollLoader>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
}
