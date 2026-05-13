import Link from "next/link"
import { Building2, HeartPulse, Landmark, GraduationCap, ArrowUpRight } from "lucide-react"
import SectionHeader from "../shared/SectionHeader"
import Image from "next/image"
import IndustriesCover from "@/public/industries/Industries.jpeg"
import ScrollLoader from "../shared/ScrollLoader"

const industries = [
  {
    index:1,
    icon: Building2,
    name: "Banking & Finance",
    slug: "finance",
    desc: "Secure disposal services ensuring GLBA and SOX compliance standards.",
    iconBorder: "border-amber-200 dark:border-amber-900/40",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    index:2,
    icon: HeartPulse,
    name: "Healthcare",
    slug: "healthcare",
    desc: "Compliant IT asset disposal protecting PHI under strict HIPAA regulations.",
    iconBorder: "border-rose-200 dark:border-rose-900/40",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
  {
    index:3,
    icon: Landmark,
    name: "Business & Corporate",
    slug: "business-corporate",
    desc: "Secure enterprise ITAD workflows for corporate devices, offices, and data centers.",
    iconBorder: "border-blue-200 dark:border-blue-900/40",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    index:4,
    icon: GraduationCap,
    name: "Education",
    slug: "education",
    desc: "Safe IT disposal protecting student data under FERPA compliance requirements.",
    iconBorder: "border-emerald-200 dark:border-emerald-900/40",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
];

export default function Industries() {
  return (
    <section className="pt-20 lg:pt-28 bg-secondary dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <ScrollLoader>
            <SectionHeader
              eyebrow="Industries We Serve"
              title="Built for Industries Where Compliance Isn't Optional"
              description="Every regulated industry carries its own disposition rulebook. We've built workflows for each one so your retirement project clears audit on the first pass."
              linkText="View All Industries"
              linkHref="/industries"
            />
        </ScrollLoader>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image — left side */}
           <ScrollLoader>
              <div className="relative w-full h-[420px] lg:h-[560px] rounded-md overflow-hidden order-2 lg:order-1">
                <Image
                  src={IndustriesCover}
                  alt="Industries we serve"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
          </ScrollLoader>

          {/* Cards — right side, 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-2">
            {industries.map(({ icon: Icon, name, slug, desc, iconBorder, iconColor,index }) => (
               <ScrollLoader key={name} delay={index * 0.08}>
                <div
                  key={name}
                  className="group bg-white dark:bg-dark-secondary rounded-md p-7 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {/* Icon — border only, no background */}
                  <div className={`inline-flex items-center justify-center w-11 h-11 rounded-md border ${iconBorder}`}>
                    <Icon className={`h-5 w-5 ${iconColor}`} strokeWidth={1.75} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-lg font-semibold text-black dark:text-white leading-snug">
                    {name}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400 min-h-[3.5rem]">
                    {desc}
                  </p>

                  {/* Divider */}
                  <div className="mt-5 h-px bg-gray-200 dark:bg-white/10" />

                  {/* Footer link */}
                  <div className="pt-5">
                    <Link
                      href={`/industries/${slug}/`}
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-stone-900 dark:text-white transition-colors duration-300 hover:text-emerald-700 dark:hover:text-emerald-400"
                    >
                      Explore Industry
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </ScrollLoader>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}