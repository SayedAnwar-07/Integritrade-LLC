import { Truck, ClipboardList, ShieldCheck, FileCheck } from "lucide-react"
import SectionHeader from "../shared/SectionHeader"
import { Separator } from "../ui/separator"
import ScrollLoader from "../shared/ScrollLoader"

const steps = [
  {
    index:1,
    num: "01",
    icon: Truck,
    title: "Schedule & Secure Pickup",
    desc: "We coordinate logistics, GPS-tracked transport, and sealed containers from your site.",
    color: {
      text: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-50 dark:bg-blue-400/10",
      glow: "bg-blue-600 dark:bg-blue-400",
      border: "group-hover:border-blue-600/50 dark:group-hover:border-blue-400/50",
      borderHover: "hover:border-blue-600/30 dark:hover:border-blue-400/30",
      line: "group-hover:via-blue-600/40 dark:group-hover:via-blue-400/40",
      iconBorder: "border-blue-600/30 dark:border-blue-400/30",
    },
  },
  {
    index:2,
    num: "02",
    icon: ClipboardList,
    title: "Chain of Custody & Inventory",
    desc: "Every asset scanned and serialized. Full audit trail from pickup to disposition.",
    color: {
      text: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-emerald-50 dark:bg-emerald-400/10",
      glow: "bg-emerald-600 dark:bg-emerald-400",
      border: "group-hover:border-emerald-600/50 dark:group-hover:border-emerald-400/50",
      borderHover: "hover:border-emerald-600/30 dark:hover:border-emerald-400/30",
      line: "group-hover:via-emerald-600/40 dark:group-hover:via-emerald-400/40",
      iconBorder: "border-emerald-600/30 dark:border-emerald-400/30",
    },
  },
  {
    index:3,
    num: "03",
    icon: ShieldCheck,
    title: "Data Destruction",
    desc: "NIST 800-88 wiping or physical shredding. Video verification available.",
    color: {
      text: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-50 dark:bg-amber-400/10",
      glow: "bg-amber-600 dark:bg-amber-400",
      border: "group-hover:border-amber-600/50 dark:group-hover:border-amber-400/50",
      borderHover: "hover:border-amber-600/30 dark:hover:border-amber-400/30",
      line: "group-hover:via-amber-600/40 dark:group-hover:via-amber-400/40",
      iconBorder: "border-amber-600/30 dark:border-amber-400/30",
    },
  },
  {
    index:4,
    num: "04",
    icon: FileCheck,
    title: "Reporting & Final Disposition",
    desc: "Certificates of Destruction, remarketing reports, and R2v3 recycling documentation.",
    color: {
      text: "text-violet-600 dark:text-violet-400",
      bg: "bg-violet-50 dark:bg-violet-400/10",
      glow: "bg-violet-600 dark:bg-violet-400",
      border: "group-hover:border-violet-600/50 dark:group-hover:border-violet-400/50",
      borderHover: "hover:border-violet-600/30 dark:hover:border-violet-400/30",
      line: "group-hover:via-violet-600/40 dark:group-hover:via-violet-400/40",
      iconBorder: "border-violet-600/30 dark:border-violet-400/30",
    },
  },
]

export default function Process() {
  return (
    <section id="how-it-works" className="py-24 bg-secondary dark:bg-dark transition-colors duration-300 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <ScrollLoader>
          <SectionHeader
                eyebrow="Process"
                title="Our Four Step Disposition Process"
                description="Serialized accountability from the loading dock to the downstream processor. No black boxes, no gaps in the trail."
          />
        </ScrollLoader>


        {/* Connecting line for desktop */}
        <div className="mt-20 relative">
          <div
            aria-hidden
            className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ num, icon: Icon, title, desc, color, index }) => (
              <ScrollLoader key={title} delay={index * 0.08}>
                <div key={num} className="group relative">
                  {/* Card */}
                  <div className={`relative rounded-md border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-dark-secondary p-7`}>
                    {/* Icon */}
                    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-md border ${color.iconBorder} mb-5`}>
                      <Icon className={`h-5 w-5 ${color.text}`} strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <h3 className="text-base font-semibold dark:text-white text-black tracking-tight">
                      {title}
                    </h3>
                    <Separator className="my-4 bg-stone-200 dark:bg-slate-700" />
                    <p className="mt-3 text-sm leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
                      {desc}
                    </p>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-transparent to-transparent ${color.line} transition-all duration-500`} />
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