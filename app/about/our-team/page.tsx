import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";
import OutlineButton from "@/components/shared/buttons/OutlineButton";
import ScrollLoader from "@/components/shared/ScrollLoader";
import LeadershipGrid, {
  type Person,
  type Stat,
} from "@/components/about/LeadershipGrid";
import ian from "@/public/ian.jpg";
import masood from "@/public/masood.jpg";
import adnan from "@/public/adnan.jpg";

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

// TODO: real LinkedIn URLs — Masood's profile is still outstanding.
// A person with no URL renders no icon rather than a dead link.
const LINKEDIN = {
  ian: "https://www.linkedin.com/in/ian-ziyar-801114237/",
  masood: "",
  adnan: "https://www.linkedin.com/in/muhammad-adnan-9ab26641b",
} as const;

const people: Person[] = [
  {
    name: "Ian Ziyar",
    role: "Founder & CEO",
    image: ian,
    priority: true,
    imgPos: "center 28%",
    linkedin: LINKEDIN.ian,
    bio: [
      "Ian's career began in precision science. As a researcher at UC San Diego, he co-developed AI-driven diagnostic systems published in Cell and Nature Biomedical Engineering work cited over 6,000 times.",
      "He founded Integritrade in 2023 to bring that same research-grade rigor to IT asset disposition, earning R2v3 and four ISO certifications and recurring Fortune 500 and federal work within the first year.",
    ],
    chips: ["Published in Cell & Nature", "6,000+ citations", "10+ yrs secure destruction"],
  },
  {
    name: "Masood Burhani",
    role: "Chief Operating Officer",
    image: masood,
    // Face sits low in this photo; shift the visible window down.
    imgPos: "center 62%",
    linkedin: LINKEDIN.masood,
    bio: [
      "A cybersecurity engineer from Fortune 500 enterprise environments, Masood owns Integritrade's operational backbone chain-of-custody design, sanitization workflows, and audit-trail architecture.",
      "He turns certifications into day-to-day execution that holds up to the same security frameworks your CISO and auditors already use.",
    ],
    chips: ["(ISC)² CC", "CompTIA Security+", "(ISC)² GRC", "API Security", "CISSP"],
  },
  {
    name: "M. Adnan",
    role: "Director of Engineering",
    image: adnan,
    // Studio shot with heavy white padding; zoom in to fill the frame.
    imgPos: "center 46%",
    imgZoom: 1,
    linkedin: LINKEDIN.adnan,
    bio: [
      "Adnan leads Integritrade's engineering. He oversees the team behind TraceTech our proprietary asset-tracking platform and directs its development alongside the company's website and internal systems.",
      "His focus is keeping the technology behind every chain-of-custody record fast, reliable, and audit-ready.",
    ],
    chips: [
      "Leads engineering",
      "Oversees TraceTech development",
      "Web & internal systems",
    ],
  },
];

const stats: Stat[] = [
  { value: "2023", label: "Founded" },
  { value: "R2v3 + 4 ISO", label: "Certifications" },
  { value: "6,000+", label: "Research citations" },
  { value: "100%", label: "In-house processing" },
];

const HEADLINE = "The people accountable for every shipment.";

export default function OurTeamPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@graph": people.map((p) => ({
      "@type": "Person",
      name: p.name,
      jobTitle: p.role,
      description: p.bio.join(" "),
      worksFor: {
        "@type": "Organization",
        name: "Integritrade LLC",
        url: "https://integritradellc.com",
      },
      ...(p.linkedin ? { sameAs: [p.linkedin] } : {}),
    })),
  };

  return (
    <section className="bg-secondary dark:bg-dark transition-colors duration-300">
      {/* Plain <script> so the JSON-LD is present in the prerendered HTML.
          next/script defers to the client, which leaves it out of the SSG output. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <LeadershipGrid
          people={people}
          stats={stats}
          headline={HEADLINE}
          gradientWord="accountable"
          intro="Every retired asset is processed under the direct supervision of a named, credentialed person not a subcontractor, not a faceless ops team."
        />

        {/* ── CTA ── */}
        <ScrollLoader>
          <div className="mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
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
