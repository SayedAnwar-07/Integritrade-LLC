import {
  ClipboardCheck,
  Route,
  Recycle,
} from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import ScrollLoader from "../shared/ScrollLoader";

type Item = {
  index: number
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  iconBorder: string;
  title: string;
  desc: string;
};

const items: Item[] = [
  {
    index: 1,
    icon: Route,
    iconColor: "text-amber-700 dark:text-amber-300",
    iconBorder: "border-amber-200/80 dark:border-amber-700/40",
    title: "TraceTech Visibility",
    desc: "Track each project from pickup through final disposition. Manage future pickups and download Certificates of Destruction and Erasure on demand.",
  },
  {
    index: 2,
    icon: ClipboardCheck,
    iconColor: "text-blue-700 dark:text-blue-300",
    iconBorder: "border-blue-200/80 dark:border-blue-700/40",
    title: "Certified Data Security",
    desc: "R2v3 and ISO 27001 certified processes, access-controlled handling, and verified NIST 800-88 erasure or physical destruction when needed.",
  },
  {
    index: 3,
    icon: Recycle,
    iconColor: "text-emerald-700 dark:text-emerald-300",
    iconBorder: "border-emerald-200/80 dark:border-emerald-700/40",
    title: "Value-First Asset Recovery",
    desc: "We evaluate reuse and remarketing before materials recovery, helping qualifying ITAD projects recover value or remain net-positive.",
  },
];;

export default function WhyChoose() {
  return (
    <section className="bg-secondary dark:bg-dark py-16 transition-colors duration-300 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        
         <ScrollLoader>
            <SectionHeader
              eyebrow="Why Choose Integritrade"
              title="More than equipment removal, a clear process your team can verify."
              description="We help businesses and local customers move from pickup to final outcome with organized tracking, responsible handling, value recovery, and the right documentation for each service."
            />
        </ScrollLoader>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
          {items.map(({ icon: Icon, iconColor, iconBorder, title, desc, index }) => (
             <ScrollLoader key={title} delay={index * 0.08}>
              <article
                key={title}
                className="group p-6 bg-white dark:bg-dark-secondary rounded-md transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-md border ${iconBorder}`}
                  >
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl leading-snug text-stone-900 dark:text-white mb-4 md:h-16">
                    {title}
                  </h3>

                  <div className="my-4 h-px w-full bg-stone-200 dark:bg-slate-700" />

                  <p className="text-[14px] leading-relaxed text-stone-700 dark:text-slate-300 mb-4 custom-text-center">
                    {desc}
                  </p>
                </div>
              </article>
            </ScrollLoader>
          ))}
        </div>
      </div>
    </section>
  );
}