import Link from "next/link";
import { Route, ShieldCheck } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import ScrollLoader from "../shared/ScrollLoader";

type Item = {
  index: number
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconColor: string;
  iconBorder: string;
  title: React.ReactNode;
  desc: React.ReactNode;
};

const items: Item[] = [
  {
    index: 1,
    icon: Route,
    iconColor: "text-amber-700 dark:text-amber-300",
    iconBorder: "border-amber-200/80 dark:border-amber-700/40",
    title: (
      <>
        Real-Time Visibility with{" "}
        <Link
          href="/tracetech/"
          className="text-primary underline underline-offset-4 hover:text-primary/80"
        >
          TraceTech
        </Link>
      </>
    ),
    desc: "Track every asset from the moment it leaves your loading dock to final disposition. TraceTech gives you an on-demand audit trail, letting you monitor batch status, schedule pickups, and download serialized Certificates of Destruction in real time. Because your custom rules are hardcoded to every asset tag, our technicians follow your exact handling protocols at every scan.",
  },
  {
    index: 2,
    icon: ShieldCheck,
    iconColor: "text-blue-700 dark:text-blue-300",
    iconBorder: "border-blue-200/80 dark:border-blue-700/40",
    title: "Zero-Compromise Data Security",
    desc: (
      <>
        Protect your brand with certified, defensible data sanitization. Backed by{" "}
        <Link
          href="/certifications/"
          className="text-primary underline underline-offset-4 hover:text-primary/80"
        >
          R2v3, ISO 27001
        </Link>
        , and background-checked technicians, we sanitize drives strictly to NIST SP 800-88
        standards or destroy them on-site with certified industrial shredding, delivering total
        compliance with zero loose ends.
      </>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-secondary dark:bg-dark py-16 transition-colors duration-300 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        
<ScrollLoader>
          <SectionHeader title="Beyond Equipment Removal: Complete Chain of Custody, Security, and Value" />

          <p className="mx-auto mt-6 max-w-4xl text-center text-base leading-relaxed text-stone-700 dark:text-slate-300">
            Integritrade delivers the most comprehensive, secure IT asset disposition process in
            the industry, made completely effortless. We believe enterprise security and
            environmental sustainability shouldn&apos;t come with an inflated price tag. By
            maximizing value recovery through aggressive remarketing, most of our clients pay
            nothing out of pocket for certified sanitization, and many earn money back. Best of
            all, we own and operate a full array of industrial{" "}
            <Link
              href="/about/our-equipment/"
              className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
            >
              destruction equipment
            </Link>
            , eliminating unnecessary third-party handoffs and guaranteeing an unbroken, in-house
            chain of custody for your data security needs.
          </p>
        </ScrollLoader>

        <div className="grid gap-6 sm:grid-cols-2 mt-16">
          {items.map(({ icon: Icon, iconColor, iconBorder, title, desc, index }) => (
             <ScrollLoader key={index} delay={index * 0.08}>
              <article
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