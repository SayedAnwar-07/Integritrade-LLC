import Image from "next/image";
import type { Metadata } from "next";
import { Mail, MapPin, Phone, BadgeCheck } from "lucide-react";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import ScrollLoader from "@/components/shared/ScrollLoader";
import ian from "@/public/ian.jpg";
import masood from "@/public/masood.jpg";
import adnan from "@/public/adnan.jpg";
import type { StaticImageData } from "next/image";

export const metadata: Metadata = {
  title: "Leadership | The People Accountable for Your Data",
  description:
    "Meet the founders who personally oversee every ITAD project at Integritrade a scientist with a Nature and Cell publication record and a cybersecurity engineer from Fortune 500 enterprise environments.",
  keywords: [
    "Integritrade leadership",
    "Ian Ziyar founder",
    "Masood Burhani COO",
    "ITAD leadership team",
    "data destruction experts",
    "cybersecurity ITAD leadership",
  ],
  alternates: {
    canonical: "/about/our-team/",
  },
  openGraph: {
    title: "Leadership | The People Accountable for Your Data | Integritrade LLC",
    description:
      "Meet the founders who personally oversee every ITAD project at Integritrade.",
    url: "https://integritradellc.com/about/our-team/",
    siteName: "Integritrade LLC",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://integritradellc.com/logo/integritrade-logo.png",
        width: 1200,
        height: 630,
        alt: "Integritrade LLC Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership | The People Accountable for Your Data | Integritrade LLC",
    description:
      "Meet the founders who personally oversee every ITAD project at Integritrade.",
    images: ["https://integritradellc.com/logo/integritrade-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

type Person = {
  name: string;
  role: string;
  image: StaticImageData;
  bio: string;
  chips: string[];
  stats: { v: string; l: string }[] | null;
  priority?: boolean;
};

const people: Person[] = [
  {
    name: "Ian Ziyar",
    role: "Founder & CEO",
    image: ian,
    priority: true,
    bio: "Ian's career began in precision science. As a researcher at UC San Diego, he co-developed AI-driven diagnostic systems published in Cell and Nature Biomedical Engineering work cited over 6,000 times. He founded Integritrade in 2023 to bring that same research-grade rigor to IT asset disposition, earning R2v3 and four ISO certifications and recurring Fortune 500 and federal work within the first year.",
    chips: ["Published in Cell & Nature", "6,000+ citations", "10+ yrs secure destruction"],
    stats: [
      { v: "10+", l: "Years" },
      { v: "6,000+", l: "Citations" },
      { v: "2023", l: "Founded" },
    ],
  },
  {
    name: "Masood Burhani",
    role: "Chief Operating Officer",
    image: masood,
    bio: "A cybersecurity engineer from Fortune 500 enterprise environments, Masood owns Integritrade's operational backbone chain-of-custody design, sanitization workflows, and audit-trail architecture. He turns certifications into day-to-day execution that holds up to the same security frameworks your CISO and auditors already use.",
    chips: ["(ISC)² CC", "CompTIA Security+", "(ISC)² GRC", "API Security", "CISSP"],
    stats: [
      { v: "10+", l: "Years" },
      { v: "F500", l: "Background" },
      { v: "5+", l: "Credentials" },
    ],
  },
  {
    name: "M. Adnan",
    role: "Director of Engineering",
    image: adnan,
    bio: "Adnan leads Integritrade's engineering. He oversees the team behind TraceTech our proprietary asset-tracking platform and directs its development alongside the company's website and internal systems. His focus is keeping the technology behind every chain-of-custody record fast, reliable, and audit-ready.",
    chips: [
      "Leads engineering",
      "Oversees TraceTech development",
      "Web & internal systems",
      "Practical & reliable",
    ],
    stats: null,
  },
];

export default function OurTeamPage() {
  return (
    <section className="bg-secondary dark:bg-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* ── Intro ── */}
        <ScrollLoader>
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-emerald-700 dark:bg-emerald-500" />
              <span className="font-mono text-[0.95rem] font-bold uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400">
                Leadership
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-stone-900 dark:text-white">
              The people accountable for every shipment.
            </h1>

            <p className="mt-6 text-lg leading-8 text-stone-700 dark:text-slate-300">
              Every retired asset is processed under the direct supervision of a
              named, credentialed person not a subcontractor, not a faceless ops
              team.
            </p>
          </div>
        </ScrollLoader>

        {/* ── People ── */}
        <div className="mt-16 lg:mt-24 space-y-16 lg:space-y-24">
          {people.map((p) => (
            <ScrollLoader key={p.name}>
              <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* TEXT — left */}
                <div className="order-2 lg:order-1 lg:col-span-8">
                  <p className="font-mono text-[0.95rem] font-bold uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400">
                    {p.role}
                  </p>

                  <h2 className="mt-3 font-serif text-4xl md:text-5xl font-semibold tracking-tight text-stone-900 dark:text-white">
                    {p.name}
                  </h2>

                  <p className="mt-5 max-w-2xl text-base lg:text-lg leading-8 text-stone-700 dark:text-slate-300">
                    {p.bio}
                  </p>

                  {/* credential badges */}
                  <div className="mt-7 flex flex-wrap gap-2.5">
                    {p.chips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center gap-2 rounded-md border border-stone-200 bg-white py-2 pl-2.5 pr-3.5 text-[13px] font-medium text-stone-800 shadow-sm ring-1 ring-black/[0.02] dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:ring-white/[0.03]"
                      >
                        <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                        {chip}
                      </span>
                    ))}
                  </div>

                  {/* real-number stats */}
                  {p.stats && (
                    <div className="mt-8 grid max-w-md grid-cols-3 gap-6">
                      {p.stats.map((s) => (
                        <div key={s.l}>
                          <p className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 dark:text-white">
                            {s.v}
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-widest text-stone-500 dark:text-slate-400">
                            {s.l}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* PORTRAIT — right, kept compact */}
                <div className="order-1 lg:order-2 lg:col-span-4">
                  <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-md bg-white dark:bg-dark-secondary lg:mx-0 lg:ml-auto">
                    <Image
                      src={p.image}
                      alt={`${p.name}, ${p.role} of Integritrade LLC`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 280px, 24vw"
                      priority={p.priority}
                    />
                  </div>
                </div>
              </article>
            </ScrollLoader>
          ))}
        </div>

        {/* ── CTA ── */}
        <ScrollLoader>
          <div className="mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-emerald-600 dark:bg-emerald-400" />
                <span className="font-mono text-[0.95rem] font-bold uppercase tracking-[0.25em] text-emerald-800 dark:text-emerald-400">
                  Come See It
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl leading-[1.1] tracking-tight text-stone-900 dark:text-white">
                Site visits welcome. Walk the floor before you sign.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-700 dark:text-slate-300">
                We host scheduled facility tours for prospective clients and
                auditors. Bring your compliance lead they&apos;ll see the same
                process your retired devices will go through.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <PrimaryButton href="/service-book" testId="button-get-quote">
                  Schedule a Tour
                </PrimaryButton>

                <OutlineButton href="/services" testId="button-learn-more">
                  View Service Details
                </OutlineButton>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-md border border-stone-200 bg-white p-8 dark:border-white/10 dark:bg-dark-secondary lg:p-10">
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
                      <dd className="text-sm text-stone-900 dark:text-gray-100">
                        1945 N Fine Ave, STE 111
                        <br />
                        Fresno, CA 93727
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <dt className="mb-1 text-xs uppercase tracking-wider text-muted-foreground dark:text-gray-400">
                        Direct Line
                      </dt>
                      <dd className="text-sm text-stone-900 dark:text-gray-100">
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
                      <dd className="text-sm text-stone-900 dark:text-gray-100">
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
    </section>
  );
}
