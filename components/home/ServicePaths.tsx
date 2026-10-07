import Link from "next/link";
import { Building2, ShieldCheck, Truck, ArrowUpRight } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import ScrollLoader from "../shared/ScrollLoader";


type Path = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  id: number;
  iconColor: string;
  iconBorder: string;
  title: string;
  desc: string;
  ctaLabel: string;
  href: string;
};

const paths: Path[] = [
  {
    id:1,
    icon: Building2,
    iconColor: "text-emerald-700 dark:text-emerald-300",
    iconBorder: "border-emerald-200/80 dark:border-emerald-700/40",
    title: "Retiring IT assets at scale",
    desc: "Office refreshes, data center decommissions, and fleet retirements processed at our 30,000 sq ft, 24/7 video-monitored Fresno facility, with serialized asset tracking, certified data destruction, and audit-ready reporting your finance team can file with confidence.",
    ctaLabel: "Explore Business",
    href: "/services/",
  },
  {
    id:2,
    icon: ShieldCheck,
    iconColor: "text-blue-700 dark:text-blue-300",
    iconBorder: "border-blue-200/80 dark:border-blue-700/40",
    title: "Regulated sectors with strict rules",
    desc: "Workflows aligned to HIPAA, GLBA, SOX, FERPA, and NIST 800-88, built for healthcare networks, banking institutions, government agencies, and education systems that face audit on every project.",
    ctaLabel: "Explore Industries",
    href: "/industries/",
  },
  {
    // 2026-10-07: replaced the drop-off card (the residential drop-off page
    // stays in the Services menu).
    id:3,
    icon: Truck,
    iconColor: "text-amber-700 dark:text-amber-300",
    iconBorder: "border-amber-200/80 dark:border-amber-700/40",
    title: "White-glove packing and transport",
    desc: "On-site packing and secure transit utilizing dedicated lockable, tamper-evident rolling bins. Complete labor, serialized handoff, and direct logistics managed end-to-end to maintain an unbroken, audit-verified chain of custody.",
    ctaLabel: "Explore Logistics",
    href: "/services/it-asset-disposition/",
  },
];

export default function ServicePaths() {
  return (
    <section className="bg-secondary dark:bg-dark pt-8 lg:pt-16 lg:pb-10 transition-colors duration-300 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
         <ScrollLoader>
            <SectionHeader
              eyebrow="Choose Your Path"
              title="Tailored Disposition for Every Scale"
              description="Whether managing enterprise fleet refreshes, navigating strict regulatory audits, or arranging secure on-site packing and transport, we have a dedicated path built for you"
            />
        </ScrollLoader>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
          {paths.map(
            ({
              id,
              icon: Icon,
              iconColor,
              iconBorder,
              title,
              desc,
              ctaLabel,
              href,
            }) => (
              <ScrollLoader key={title} delay={id * 0.08}>
                <article
                  key={id}
                  className="group flex h-full flex-col p-6 bg-white dark:bg-dark-secondary rounded-md transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-md border ${iconBorder}`}>
                        <Icon className={`w-5 h-5 ${iconColor}`} />
                      </div>
                  </div>

                  <h3 className="font-serif text-2xl leading-snug text-stone-900 dark:text-white mb-4 md:h-16">
                    {title}
                  </h3>

                  <p className="text-[14px] leading-relaxed text-stone-700 dark:text-slate-300 mb-5 custom-text-center">
                    {desc}
                  </p>

                  {/* Footer — pinned to bottom */}
                  <div className="mt-auto pt-5 border-t border-stone-200 dark:border-slate-600">
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-stone-900 dark:text-white transition-colors duration-300 hover:text-primary dark:hover:text-primary click-feel"
                    >
                      {ctaLabel}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              </ScrollLoader>
            )
          )}
        </div>
      </div>
    </section>
  );
}