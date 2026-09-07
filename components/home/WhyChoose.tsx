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
    title: "TraceTech Control & Visibility",
    desc: "Authorized clients can follow project and device status after pickup, manage future service requests, and access available Certificates of Erasure and Destruction. When an asset tag is scanned, TraceTech displays the job's approved handling instructions and applicable SOP prompts, ensuring client-specific requirements are addressed.",
  },
  {
    index: 2,
    icon: ClipboardCheck,
    iconColor: "text-blue-700 dark:text-blue-300",
    iconBorder: "border-blue-200/80 dark:border-blue-700/40",
    title: "Data Security by Design",
    desc: "R2v3 and ISO 27001-certified management systems, access-controlled handling, background-checked personnel, and documented data workflows help keep sensitive assets under control. Each project is processed according to the client's approved data-handling requirements. Where a client does not specify a method, Integritrade follows its documented NIST 800-88-based sanitization process, with physical destruction available when required.",
  },
  {
    index: 3,
    icon: Recycle,
    iconColor: "text-emerald-700 dark:text-emerald-300",
    iconBorder: "border-emerald-200/80 dark:border-emerald-700/40",
    title: "Value First. Recovery Before Recycling.",
    desc: "We evaluate eligible equipment for reuse, direct buyback, remarketing, and parts harvesting before materials recovery. For qualifying ITAD projects, recovered value can offset disposition costs or generate a positive financial return. Contact us to discuss your specific needs.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-secondary dark:bg-dark py-16 transition-colors duration-300 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        
         <ScrollLoader>
            <SectionHeader
              eyebrow="Why Choose Integritrade"
              title="More than equipment removal. A process built for visibility, security, and value"
              description="Integritrade helps organizations manage retired IT from pickup through documented disposition with TraceTech visibility, secure data-handling workflows, reuse and value recovery, and qualified downstream recycling when recycling is required."
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