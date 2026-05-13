import Link from "next/link";
import { Building2, ShieldCheck, Recycle, ArrowUpRight } from "lucide-react";
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
    desc: "Office refreshes, data center decommissions, and fleet retirements handled with serialized asset tracking, certified data destruction, and audit-ready reporting your finance team can file with confidence.",
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
    id:3,
    icon: Recycle,
    iconColor: "text-amber-700 dark:text-amber-300",
    iconBorder: "border-amber-200/80 dark:border-amber-700/40",
    title: "Free e-waste drop-off and local pickups",
    desc: "Households, small offices, and community sites can drop off old electronics at our Fresno facility, or schedule a free local pickup across our California service zones for qualifying volumes.",
    ctaLabel: "Explore Drop-off",
    href: "/accepted-items/",
  },
];

export default function ServicePaths() {
  return (
    <section className="bg-secondary dark:bg-dark pt-24 lg:pt-32 transition-colors duration-300 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
         <ScrollLoader>
            <SectionHeader
              eyebrow="Choose Your Path"
              title="Different needs, different workflows."
              description="Whether you're retiring a fleet of company laptops, running an audit-bound industry program, or simply dropping off old electronics, we route each request through the right process from day one."
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
                  className="group flex flex-col p-6 bg-white dark:bg-dark-secondary rounded-md transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between mb-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-md border ${iconBorder}`}>
                        <Icon className={`w-5 h-5 ${iconColor}`} />
                      </div>
                  </div>

                  <h3 className="font-serif text-2xl leading-snug text-stone-900 dark:text-white mb-4 md:h-16">
                    {title}
                  </h3>

                  <p className="text-[14px] leading-relaxed text-stone-700 dark:text-slate-300 mb-5 text-justify">
                    {desc}
                  </p>

                  {/* Footer — pinned to bottom */}
                  <div className="mt-auto pt-5 border-t border-stone-200 dark:border-slate-600">
                    <Link
                      href={href}
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-stone-900 dark:text-white transition-colors duration-300 hover:text-emerald-700 dark:hover:text-emerald-400"
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