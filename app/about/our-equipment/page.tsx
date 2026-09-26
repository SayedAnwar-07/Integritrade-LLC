import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import PageHeader from "@/components/shared/PageHeader";
import SectionFloatNav from "@/components/shared/SectionFloatNav";
import MediaMethodMatrix from "@/components/about/MediaMethodMatrix";

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
import ConsultationForm from "@/components/contact/ConsultationForm";

export const metadata: Metadata = {
  title: { absolute: "Data Destruction Equipment & Methods | Integritrade" },
  description: 
    "Industrial media shredding, degaussing, and NIST 800-88 erasure. Automated tracking eliminates manual errors with serialized audit CODs. Request a quote.",
  alternates: { canonical: "/about/our-equipment/" },
  openGraph: {
    title: "Data Destruction Equipment & Methods | Integritrade",
    description: 
      "Industrial media shredding, degaussing, and NIST 800-88 erasure. Automated tracking eliminates manual errors with serialized audit CODs. Request a quote.",
    url: "https://integritradellc.com/about/our-equipment/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://integritradellc.com/og/equipment.jpg",
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

// Ian renamed this page on 2026-09-24 ("Our Equipment" was too vague), settling
// on "Our Data Destruction Methods", and asked for it as a plain 1-2-3: erase,
// then degauss and shred, then 2 mm shredding for flash. The URL stays
// /about/our-equipment/ because it carries the page's search history and his
// blog articles link to it directly.
const NAV_SECTIONS = [
  { id: "software", label: "Data Erasure" },
  { id: "magnetic", label: "Magnetic Neutralization" },
  { id: "solidstate", label: "2mm Disintegration" },
  { id: "visit", label: "Site Visits" },
];

const SAMPLE_COD = "/documents/sample-certificate-of-destruction.pdf";
// A real Blancco erasure report from an iPhone, with the IMEI and serial
// masked down to their last digits as Ian asked.
const SAMPLE_COE = "/documents/sample-certificate-of-erasure.pdf";
const TRACETECH_CERTS = "/tracetech/#portal";

type Photo = { src: StaticImageData; alt: string; caption?: string; position?: string };

type Method = {
  id: string;
  title: string;
  /** Who the method is for, in one line. */
  lead: string;
  body: string;

  /**
   * Ian requested clickable links inside specification values
   * (for example, linking TraceTech certificate verification).
   *
   * Therefore, value supports React nodes instead of plain strings.
   */
  specs: { label: string; value: React.ReactNode }[];
  /** One photo fills the frame; two sit side by side, one per machine. */
  photos: Photo[];
  /** A sample of the certificate this method produces. */
  certificate: { label: string; href: string };
  /** Ian: the two machines generate their certificates in TraceTech, so
   *  those methods also link the portal. */
  tracetech?: boolean;
};

/**
 * The three methods, in the order Ian asked for. Every row is built the same
 * way, text on the left and photos on the right, and the numbers match the
 * section nav.
 */
const METHODS: Method[] = [
  {
    id: "software",
    title: "Certified Software Erasure & Sanitization",
    lead: "Preserving residual hardware value through verified, non-destructive data elimination",
    body: "Assets are cryptographically sanitized and independently verified, preserving hardware integrity for redeployment, lease return, or resale remarketing. Our network-based PXE boot infrastructure supports automated, high-throughput batch processing across entire server racks simultaneously - eliminating serial processing bottlenecks and minimizing chain-of-custody exposure.",
    specs: [
      { 
        label: "Equipment", 
        value: "Blancco and WipeOS, both ADISA-verified" 
      },
      { 
        label: "Media", 
        value: "HDDs, SSDs, NVMe drives, phones, tablets, and computers" 
      },
      { 
        label: "Standard", 
        value: "NIST 800-88 baseline, adjustable to your requirements" 
      },
      { 
        label: "Output", 
        value: "Serialized Certificate of Erasure for every asset" 
      },
    ],
    photos: [
      { 
        src: softwareSanitizationImg, 
        alt: "Integritrade software sanitization workflow" 
      }
    ],
    certificate: { 
      label: "View a Sample Certificate of Erasure", 
      href: SAMPLE_COE 
    },
  },
  {
    id: "magnetic",
    title: "Magnetic Degaussing & Mechanical Shredding",
    lead: "Dual-stage sanitization ensuring complete magnetic neutralization and physical destruction for non-reusable storage media.",
    body: "For end-of-life magnetic assets, we execute a defense-in-depth destruction protocol combining magnetic field purging with mechanical disintegration. Drives and tapes first pass through a high-field degausser to permanently neutralize magnetic domains at the substrate level, followed by industrial shredding to render the media physically irrecoverable. While either process independently satisfies baseline compliance benchmarks, combining both protocols eliminates data remanence risk in high-security environments.",
    specs: [
      { label: "Degausser", value: "Verity Datagauss ZZ001208" },
      { label: "Shredder", value: "Proton Data Security Model 104" },
      { label: "Supported Media",  value: "2.5\" & 3.5\" Hard Disk Drives (HDDs), LTO Cartridges, and Enterprise Magnetic Tape"},
      { label: "Standard", value: "NIST 800-88" },
      { 
        label: "Output",
        /**
         * Ian requested:
         * The TraceTech reference in the destruction certificate output should be clickable.
         *
         * Previously:
         * "Serialized Certificate of Destruction (TraceTech-tracked)"
         * was plain text only.
         *
         * Update:
         * Keep the certificate output wording, but link the "TraceTech-tracked"
         * text directly to the TraceTech certificate portal so users can verify
         * the certificate tracking system.
         */
        value: (
          <>
            Serialized Certificate of Destruction (
            <Link 
              href={TRACETECH_CERTS}
              className="text-primary underline"
            >
              TraceTech-tracked
            </Link>
            )
          </>
        ),
       },
    ],
    photos: [
      { src: degausserImg, alt: "Verity Systems Datagauss ZZ001208 Degausser", caption: "Degausser" },
      { src: ssdShredderImg, alt: "Proton Data Security Model 104 Hard Drive Shredder", caption: "Shredder" },
    ],
    certificate: { label: "View a Sample Certificate of Destruction", href: SAMPLE_COD },
    tracetech: true,
  },
  {
    id: "solidstate",
    title: "Solid-State Disintegration & Micro-Shredding (≤ 2 mm)",
    lead: "High-security physical destruction engineered specifically for high-density flash architecture and embedded silicon dies.",
    body: "Because solid-state memory relies on micro-scale NAND flash dies, these chips can slip through standard coarse mechanical shredder blades fully intact. Our precision disintegration system pulverizes solid-state media into a nominal ≤ 2 mm particle size, fracturing individual semiconductor dies and rendering forensic lab recovery physically impossible.",
    specs: [
      { label: "Equipment", value: "SEM Model 2 SSD-VK" },
      { label: "Particle size", value: "2 mm" },
      {
        label: "Supported Media",
        value: 'Enterprise & Client SSDs (2.5", U.2, M.2 NVMe, mSATA), Removable Flash (USB, SD, microSD), and Mobile Logic Boards'
      },
      { 
        label: "Output",
        /**
         * Ian requested:
         * The TraceTech reference in the destruction certificate output should be clickable.
         *
         * Previously:
         * "Serialized Certificate of Destruction ( TraceTech-verified)"
         * was plain text only.
         *
         * Update:
         * Keep the certificate output wording, but link the " TraceTech-verified"
         * text directly to the TraceTech certificate portal so users can verify
         * the certificate tracking system.
         */
        value: (
          <>
            Serialized Certificate of Destruction (
            <Link 
              href={TRACETECH_CERTS}
              className="text-primary underline"
            >
               TraceTech-verified
            </Link>
            )
          </>
        ),
       },
    ],
    photos: [
      {
        src: hddShredderImg,
        alt: "SEM Model 2 SSD-VK Shredder at Integritrade",
        // Portrait photo: keep the whole machine in the frame, not the shelving above it.
        position: "object-[center_70%]",
      },
    ],
    certificate: { label: "View a Sample Certificate of Destruction", href: SAMPLE_COD },
    tracetech: true,
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
            title="Our data destruction methods"
            description="We offer a full array of data destruction methods, because no single method works on every kind of media. Each hard drive, SSD, phone and tape gets the method that actually destroys its data, carried out in our Fresno facility and documented with a certificate."
          />
        </ScrollLoader>

        {/* What works on what, in green and red, before the detail. Ian's
            point: visitors who don't already know that degaussing does
            nothing to flash are exactly the ones this convinces. */}
        <ScrollLoader>
          <MediaMethodMatrix />
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

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
                        <a
                          href={m.certificate.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline dark:text-emerald-400"
                        >
                          {m.certificate.label}
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                      </div>
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

            {/* ── Visit ───────────────────────────────────────────────── */}
            <section id="visit" className="scroll-mt-28">
              <ScrollLoader>
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                  <div className="min-w-0 order-2 lg:order-1">
                    <h2 className="font-serif text-3xl leading-[1.15] tracking-tight text-stone-900 dark:text-white sm:text-4xl">
                      Site visits welcome. Walk the floor before you sign.
                    </h2>
                    <p className="custom-text-center mt-6 max-w-xl text-base leading-relaxed text-stone-700 dark:text-slate-300">
                      We host scheduled facility tours for prospective clients and
                      auditors. Bring your compliance lead. They&apos;ll see the same
                      process your retired devices will go through.
                    </p>

                    <div className="rounded-md border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-dark-secondary p-6 shadow-sm my-8">
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
                              <span data-nosnippet="">info@integritradeLLC.com</span>
                            </dd>
                          </div>
                        </div>
                      </dl>
                    </div>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                      <OutlineButton href="/services" testId="button-learn-more">
                        View Service Details
                      </OutlineButton>
                      <PrimaryButton href="/service-book" testId="button-get-quote">
                        Schedule a Tour
                      </PrimaryButton>
                    </div>
                  </div>

                  <div className="order-1 lg:order-2">
                    {/* 
                      Ian wants:
                      Add a contact form at the end of the page.

                      Purpose:
                      Allow potential clients to submit inquiries about data destruction,
                      IT asset disposition, and related services.

                      Existing ConsultationForm component is reused because it already
                      handles validation, email delivery, and consultation requests.
                    */}

                     <ConsultationForm />
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
