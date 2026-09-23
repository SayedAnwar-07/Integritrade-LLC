import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
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
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import ScrollLoader from "@/components/shared/ScrollLoader";

export const metadata: Metadata = {
  title: { absolute: "Data Destruction Methods | Erasure, Degaussing, Shredding" },
  description:
    "Curious how we destroy your data? Check out the heavy-duty equipment we use to permanently shred hard drives, tapes, and solid-state media with zero recovery.",
  alternates: { canonical: "/about/our-equipment/" },
  openGraph: {
    title: "Data Destruction Methods | Integritrade LLC",
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

// Ian renamed this page "Data Destruction Methods" on 2026-09-24 ("Our
// Equipment" was too vague) and asked for it as a plain 1-2-3: erase, then
// degauss and shred, then 2 mm shredding for flash. The URL stays
// /about/our-equipment/ because it carries the page's search history and his
// blog articles link to it directly.
const NAV_SECTIONS = [
  { id: "software", label: "Software Erasure" },
  { id: "magnetic", label: "Degauss & Shred" },
  { id: "solidstate", label: "SSD & Chip Shredding" },
  { id: "equipment", label: "Equipment List" },
  { id: "visit", label: "Site Visits" },
];

const SAMPLE_COD = "/documents/sample-certificate-of-destruction.pdf";
const TRACETECH_CERTS = "/tracetech/#portal";

type Photo = { src: StaticImageData; alt: string; caption?: string; position?: string };

type Method = {
  id: string;
  title: string;
  /** Who the method is for, in one line. */
  lead: string;
  body: string;
  specs: { label: string; value: string }[];
  /** One photo fills the frame; two sit side by side, one per machine. */
  photos: Photo[];
  /** Ian: the machines generate Certificates of Destruction in TraceTech,
   *  so link a sample and the portal. */
  sampleCertificate?: boolean;
};

/**
 * The three methods, in the order Ian asked for. Every row is built the same
 * way, text on the left and photos on the right, and the numbers match the
 * section nav.
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
    photos: [{ src: softwareSanitizationImg, alt: "Integritrade software sanitization workflow" }],
  },
  {
    id: "magnetic",
    title: "Degaussing and shredding",
    lead: "For magnetic hard drives and LTO tapes that must be destroyed.",
    body: "The degausser scrambles the magnetic orientation of the platter or tape itself, then the shredder reduces it to fragments. Either step alone is an industry standard. We do both.",
    specs: [
      { label: "Degausser", value: "Verity Datagauss ZZ001208" },
      { label: "Shredder", value: "Proton Data Security Model 104" },
      { label: "Media", value: "3.5″ and 2.5″ hard drives, LTO and other magnetic tape" },
      { label: "Standard", value: "NIST 800-88" },
      { label: "Output", value: "Certificate of Destruction, generated in TraceTech" },
    ],
    photos: [
      { src: degausserImg, alt: "Verity Systems Datagauss ZZ001208 Degausser", caption: "Degausser" },
      { src: ssdShredderImg, alt: "Proton Data Security Model 104 Hard Drive Shredder", caption: "Shredder" },
    ],
    sampleCertificate: true,
  },
  {
    id: "solidstate",
    title: "SSD and chip shredding",
    lead: "For SSDs, NAND flash, phones, and anything with a memory chip.",
    body: "Flash chips are small enough to pass through a standard hard drive shredder intact, data and all. This machine pulverizes media to a 2 mm particle size, small enough to destroy the chips themselves.",
    specs: [
      { label: "Equipment", value: "SEM Model 2 SSD-VK" },
      { label: "Particle size", value: "2 mm" },
      {
        label: "Media",
        value: "2.5″ SATA, M.2 NVMe, M.2 SATA, and mSATA SSDs, USB flash drives, SD and microSD cards, phones, and tablets",
      },
      { label: "Output", value: "Serialized Certificate of Destruction, generated in TraceTech" },
    ],
    photos: [
      {
        src: hddShredderImg,
        alt: "SEM Model 2 SSD-VK Shredder at Integritrade",
        // Portrait photo: keep the whole machine in the frame, not the shelving above it.
        position: "object-[center_70%]",
      },
    ],
    sampleCertificate: true,
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
            title="Data destruction methods"
            description="Software erasure for drives being reused. Degaussing and shredding for hard drives and tapes. 2 mm shredding for SSDs and chips. All of it happens inside our Fresno facility, with a certificate for every drive."
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

            {/* ── Methods 1-2-3: text left, photos right, every time ──── */}
            {METHODS.map((m, i) => (
              <section key={m.id} id={m.id} className="scroll-mt-28">
                <ScrollLoader>
                  <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                    <div className="min-w-0">
                      <div className="flex items-center gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-white">
                          {i + 1}
                        </span>
                        <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                          {m.title}
                        </h2>
                      </div>
                      <p className="mt-4 text-[17px] font-medium leading-snug text-stone-800 dark:text-gray-200">
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

                      {m.sampleCertificate && (
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
                          <a
                            href={SAMPLE_COD}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline dark:text-emerald-400"
                          >
                            View a sample Certificate of Destruction
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </a>
                          <Link
                            href={TRACETECH_CERTS}
                            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline dark:text-emerald-400"
                          >
                            How certificates work in TraceTech
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      )}
                    </div>

                    {m.photos.length === 1 ? (
                      <div className="relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-md bg-white dark:bg-dark-secondary">
                        <Image
                          src={m.photos[0].src}
                          alt={m.photos[0].alt}
                          fill
                          className={`object-cover ${m.photos[0].position ?? ""}`}
                          sizes="(max-width: 1023px) 100vw, 540px"
                          priority={i === 0}
                        />
                      </div>
                    ) : (
                      // Two machines, one step: degauss, then shred. Square
                      // tiles keep both machines whole in the frame.
                      <div className="grid min-w-0 grid-cols-2 gap-3">
                        {m.photos.map((p) => (
                          <figure key={p.alt} className="min-w-0">
                            <div className="relative aspect-square w-full overflow-hidden rounded-md bg-white dark:bg-dark-secondary">
                              <Image
                                src={p.src}
                                alt={p.alt}
                                fill
                                className={`object-cover ${p.position ?? ""}`}
                                sizes="(max-width: 1023px) 50vw, 270px"
                              />
                            </div>
                            {p.caption && (
                              <figcaption className="mt-2 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                                {p.caption}
                              </figcaption>
                            )}
                          </figure>
                        ))}
                      </div>
                    )}
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
