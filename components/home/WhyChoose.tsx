import {
  ClipboardCheck,
  Route,
  ArrowUpRight,
  SplitSquareHorizontal,
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
    index:1,
    icon: ClipboardCheck,
    iconColor: "text-amber-700 dark:text-amber-300",
    iconBorder: "border-amber-200/80 dark:border-amber-700/40",
    title: "Documented Chain of Custody",
    desc: "Every asset is tracked from pickup to final processing, giving your team clear records of where devices went, how they were handled, and what happened next.",
  },
  {
    index:2,
    icon: Route,
    iconColor: "text-blue-700 dark:text-blue-300",
    iconBorder: "border-blue-200/80 dark:border-blue-700/40",
    title: "Pickup-to-Report Workflow",
    desc: "We do more than remove equipment. Our process connects scheduling, collection, sorting, data handling, recycling, resale, and final reporting in one organized workflow.",
  },
  {
    index:3,
    icon: ArrowUpRight,
    iconColor: "text-emerald-700 dark:text-emerald-300",
    iconBorder: "border-emerald-200/80 dark:border-emerald-700/40",
    title: "Value Recovery When Possible",
    desc: "Usable assets are evaluated for resale or recovery value before recycling, helping businesses reduce disposal costs and recover more from surplus IT equipment.",
  },
  {
    index:4,
    icon: SplitSquareHorizontal,
    iconColor: "text-rose-700 dark:text-rose-300",
    iconBorder: "border-rose-200/80 dark:border-rose-700/40",
    title: "Separate Paths for Every User",
    desc: "Business ITAD projects, commercial cleanouts, and local electronics recycling are handled with different workflows, so each customer gets the right service and documentation.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-secondary dark:bg-dark pt-24 lg:pt-32 transition-colors duration-300 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        
         <ScrollLoader>
            <SectionHeader
              eyebrow="Why Integritrade"
              title="More than equipment removal a clear process your team can verify."
              description="We help businesses and local customers move from pickup to final outcome with organized tracking, responsible handling, value recovery, and the right documentation for each service."
            />
        </ScrollLoader>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
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

                  <p className="text-[14px] leading-relaxed text-stone-700 dark:text-slate-300 mb-4 text-justify">
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