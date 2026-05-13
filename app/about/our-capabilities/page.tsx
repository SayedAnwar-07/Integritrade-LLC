import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
import PageHeader from "@/components/shared/PageHeader";
import ssdShredderImg from "../../../public/about/ssd-shredder.jpeg";
import hddShredderImg from "../../../public/about/hdd-shredder.jpeg";
import degausserImg from "../../../public/about/degausser.jpeg";
import aboutData from '../../../public/about/aboutData.png'
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import { Mail, MapPin, Phone } from "lucide-react";
import ScrollLoader from "@/components/shared/ScrollLoader";

export const metadata: Metadata = {
  title: "How We Destroy Data | Capabilities | Integritrade LLC",
  description:
    "The machinery, methods, and standards behind every Integritrade destruction project NIST 800-88 software sanitization, magnetic degaussing, and 2mm SSD micro-shredding, with a Certificate for every drive.",
  alternates: { canonical: "/about/our-capabilities/" },
  openGraph: {
    title: "How We Destroy Data | Capabilities | Integritrade LLC",
    description:
      "Industrial-grade data destruction with documented deliverables: software sanitization, degaussing, and SSD micro-shredding.",
    url: "https://integritradellc.com/about/our-capabilities/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://integritradellc.com/main-logo.png",
        width: 1200,
        height: 630,
        alt: "Integritrade LLC Capabilities",
      },
    ],
  },
  robots: { index: true, follow: true },
};

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

      <div className="container mx-auto px-4 md:px-6 pt-10 md:pt-24">

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* HERO editorial, confident, lots of breathing room              */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <ScrollLoader>
          <PageHeader
            eyebrow="OUR CAPABILITIES"
            title={
              <>
                Three destruction <em className="italic font-serif">paths.</em> One audit-ready outcome.
              </>
            }
            description="Every retired drive that enters our facility leaves with a name on it a serial number, a method, a Certificate. Below is the equipment we own, the standards we follow, and how we choose between them on your project."
          />
        </ScrollLoader>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* METHOD 01 SOFTWARE SANITIZATION                                */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <ScrollLoader>
            <div id="software" className="py-24 scroll-mt-20">


              {/* Two-up: image + four bullets in 2x2 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-10 items-center">
                <div className="lg:col-span-7">
                  <div className="mb-8 max-w-lg">
                      <SectionHeader
                      eyebrow="Software sanitizatio"
                      title=" For drives with a second life ahead of them."
                      description=""
                      linkText=""
                      linkHref=""
                    />
                  </div>
                  <div className="space-y-8">
                    {[
                      {
                        title: "ADISA-Verified Software: Blancco and WipeOS",
                        body: "Industry-leading erasure platforms that generate tamper-proof, serialized Certificates of Erasure for every single drive processed.",
                      },
                      {
                        title: "PXE Boot Integration for Rack-Scale Throughput",
                        body: "Our facility is optimized for simultaneous, high-throughput erasure. We can PXE boot entire racks of equipment at once, significantly reducing time-to-market for your assets without compromising security.",
                      },
                      {
                        title: "Tamper-Proof Audit Trail",
                        body: "Every sanitized drive triggers a Certificate of Erasure providing a transparent, serialized chain-of-custody that keeps your organization fully compliant with global privacy regulations.",
                      },
                      {
                        title: "NIST 800-88 Baseline Standard",
                        body: "We use the most modern and widely accepted sanitization standard in the world as our baseline, with full flexibility to adjust methods to meet your specific corporate or industry requirements.",
                      },
                    ].map((bullet, i) => (
                      <div key={i} className="flex gap-3">
                        {/* Chevron icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="w-5 h-5 mt-1 flex-shrink-0 text-[#2aac61] dark:text-[#34d399]"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>

                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
                            {bullet.title}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                            {bullet.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/5] w-full rounded-md overflow-hidden bg-white dark:bg-dark-secondary">
                    <Image
                      src={aboutData}
                      alt="Integritrade software sanitization workflow"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </div>
            </div>
        </ScrollLoader>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* METHOD 02 MAGNETIC + PHYSICAL                                  */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <ScrollLoader>
            <div id="magnetic" className="py-24">

              <SectionHeader
                eyebrow="Magnetic media"
                title="Two stages, because one isn&rsquo;t enough."
                description="When magnetic media must be physically destroyed, we run a two-stage process. The drive is degaussed first to neutralize the magnetic signature, then shredded into fragments. Either step alone is industry-standard. Together, they remove the question."
              />

              {/* Phase I + Phase II in editorial split */}
              <div className="grid grid-cols-1 gap-10 sm:gap-16 md:gap-28 overflow-hidden mt-16">

                {/* Phase I */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={degausserImg}
                      alt="Verity Systems Datagauss ZZ001208 Degausser"
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-baseline justify-between mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                      <p className="text-xs font-bold text-[#2aac61] dark:text-[#34d399] uppercase tracking-widest">
                      Phase I
                      </p>
                      <p className="text-sm text-gray-400 dark:text-gray-500 italic font-serif">
                        Magnetic neutralization
                      </p>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
                      Degaussing
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-justify">
                      The drive is exposed to a high-energy magnetic field that scrambles the platter at the molecular level not a deletion, an erasure of the magnetic orientation itself.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-baseline gap-4 py-3 border-t border-gray-300 dark:border-gray-800">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest min-w-[90px]">Equipment</p>
                        <p className="text-sm text-gray-900 dark:text-gray-100">Verity Datagauss ZZ001208</p>
                      </div>
                      <div className="flex items-baseline gap-4 py-3 border-t border-gray-300 dark:border-gray-800">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest min-w-[90px]">Operated</p>
                        <p className="text-sm text-gray-900 dark:text-gray-100">On-site, owned outright</p>
                      </div>
                      <div className="flex items-baseline gap-4 py-3 border-t border-gray-300 dark:border-gray-800">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest min-w-[90px]">Effect</p>
                        <p className="text-sm text-gray-900 dark:text-gray-100">Unreadable by any recovery method</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase II */}
                <div className="flex flex-col-reverse md:flex-row gap-4">          
                  <div className="p-8 lg:p-10">
                    <div className="flex items-baseline justify-between mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                      <p className="text-xs font-bold text-[#2aac61] dark:text-[#34d399] uppercase tracking-widest">
                      Phase II
                      </p>
                      <p className="text-sm text-gray-400 dark:text-gray-500 italic font-serif">
                        Physical destruction
                      </p>
                    </div>

                    <h4 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
                      Shredding
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-justify">
                      Once degaussed, the drive moves to our shredder. Platters are reduced to jagged fragments. Even if a fragment were recovered, there is no readable magnetic signature left.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-baseline gap-4 py-3 border-t border-gray-300 dark:border-gray-800">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest min-w-[90px]">Equipment</p>
                        <p className="text-sm text-gray-900 dark:text-gray-100">Proton Model 104</p>
                      </div>
                      <div className="flex items-baseline gap-4 py-3 border-t border-gray-300 dark:border-gray-800">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest min-w-[90px]">Operated</p>
                        <p className="text-sm text-gray-900 dark:text-gray-100">On-site, owned outright</p>
                      </div>
                      <div className="flex items-baseline gap-4 py-3 border-t border-gray-300 dark:border-gray-800">
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest min-w-[90px]">Output</p>
                        <p className="text-sm text-gray-900 dark:text-gray-100">Certificate of Destruction</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={ssdShredderImg}
                      alt="Proton Data Security Model 104 Hard Drive Shredder"
                      fill
                      className="object-cover rounded-md"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>           
                </div>
              </div>
            </div>
        </ScrollLoader>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* METHOD 03 SSD MICRO-SHREDDING                                  */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <ScrollLoader>
            <div id="solidstate" className="py-24 scroll-mt-20">

              <SectionHeader
                eyebrow="Solid state & flash"
                title="Why standard shredding fails on SSDs."
                description="SSDs and smartphones store data on tiny NAND flash chips. A standard hard-drive shredder can leave those chips physically intact and recoverable. We run a different machine one that reduces media to particles small enough that the chips themselves are pulverized."
              />

              {/* Reverse layout: image right, content left */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mt-20">
                <div className="lg:col-span-6 lg:order-2">
                  <div className="relative aspect-[4/3] w-full rounded-md overflow-hidden">
                    <Image
                      src={hddShredderImg}
                      alt="SEM Model 2 SSD-VK Shredder at Integritrade"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                <div className="lg:col-span-6 lg:order-1">
                  <div className="">
                    <p className="text-xs font-semibold text-[#2aac61] dark:text-[#34d399] uppercase tracking-widest mb-4">
                      SEM Shredder
                    </p>
                    <h4 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 tracking-tight">
                      Model 2 SSD-VK
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-8 text-justify">
                      Designed specifically for solid-state media. Reduces drives, phones, and flash storage to a 2mm particle size small enough that NAND flash chips themselves are destroyed.
                    </p>

                    <div className="space-y-5">
                      {[
                        { label: "Particle size", value: "2mm fine" },
                        {
                          label: "Supported media",
                          value:
                            "2.5″ SATA SSDs, M.2 NVMe SSDs, M.2 SATA SSDs, mSATA SSDs, USB flash drives, SD/microSD cards, phones & tablets",
                        },
                        { label: "Output", value: "Serialized Certificate of Destruction" },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="flex items-start justify-between gap-8 sm:gap-10 md:gap-16 lg:gap-20 pb-4 border-b border-gray-300 dark:border-gray-800 last:border-0 last:pb-0"
                        >
                          <p className="shrink-0 pt-0.5 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                            {row.label}
                          </p>
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100 text-justify leading-relaxed">
                            {row.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </ScrollLoader>

        {/* ════════════════════════════════════════════════════════════════ */}
        {/* EQUIPMENT INVENTORY clean editorial table                      */}
        {/* ════════════════════════════════════════════════════════════════ */}
        <ScrollLoader>
            <div className="py-24">
              <SectionHeader
                eyebrow="EQUIPMENT INVENTORY"
                title="The machinery we own, by name and model."
                description="We list specific equipment because vague claims like industrial-grade machinery are not verifiable. These units operate in our Fresno facility owned outright, not leased, not subcontracted."
                linkText=""
                linkHref=""
              />

              <div className="mt-16 border-t border-gray-200 dark:border-gray-800">
                {[
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
                    media: "HDDs · Post-degaussed media",
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
                    equipment: "Blancco + WipeOS",
                    model: "Software platform",
                    method: "Software sanitization",
                    media: "Drives intended for reuse",
                    standard: "ADISA-verified",
                  },
                ].map((row) => (
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
            </div>
        </ScrollLoader>

        {/* ───────────────── VISIT / CTA ───────────────── */}
        <div className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <ScrollLoader>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400" />
                      <span className="text-[1rem] font-mono uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400 font-bold">
                        Come See It
                      </span>
                    </div>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900 dark:text-gray-100">
                      Site visits welcome. Walk the floor before you sign.
                    </h2>
                    <p className="mt-6 text-muted-foreground dark:text-gray-300 leading-relaxed max-w-xl text-justify">
                      We host scheduled facility tours for prospective clients and
                      auditors. Bring your compliance lead they&apos;ll see the same
                      process your retired devices will go through.
                    </p>
                    {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 mt-10">
                          <PrimaryButton href="/service-book" testId="button-get-quote">
                              Schedule a Tour
                          </PrimaryButton>
                    
                          <OutlineButton href="/services" testId="button-learn-more">
                              Explore Services
                          </OutlineButton>
                      </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-md p-8 lg:p-10 bg-white dark:bg-dark-secondary">
                      <div className="text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400 mb-6">
                        Visit Integritrade
                      </div>

                      <dl className="space-y-6">
                        <div className="flex items-start gap-4">
                          <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <dt className="text-xs uppercase tracking-wider text-muted-foreground dark:text-gray-400 mb-1">
                              Facility
                            </dt>
                            <dd className="text-sm text-gray-900 dark:text-gray-100">
                              1945 N Fine Ave, STE 111
                              <br />
                              Fresno, CA 93727
                            </dd>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <dt className="text-xs uppercase tracking-wider text-muted-foreground dark:text-gray-400 mb-1">
                              Direct Line
                            </dt>
                            <dd className="text-sm text-gray-900 dark:text-gray-100">
                              (559) 325-4813
                            </dd>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <dt className="text-xs uppercase tracking-wider text-muted-foreground dark:text-gray-400 mb-1">
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
                </div>
            </ScrollLoader>
          </div>
        </div>

      </div>
    </section>
  );
}