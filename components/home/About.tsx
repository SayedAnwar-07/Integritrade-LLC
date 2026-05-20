import { ShieldCheck, Target, Recycle } from "lucide-react";
import PrimaryButton from "../shared/buttons/PrimaryButton";
import OutlineButton from "../shared/buttons/OutlineButton";
import eWasteManagement from "../../public/services/E-WasteManagement.jpeg";
import { Separator } from "../ui/separator";
import ScrollLoader from "../shared/ScrollLoader";

const pillars = [
  {
    index:1,
    label: "Built for Businesses & Local Recycling",
    desc: "We support companies retiring IT assets, facilities clearing equipment, and local users looking for responsible electronics recycling.",
    icon: ShieldCheck,
    iconColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-500 dark:border-blue-400",
  },
  {
    index:2,
    label: "Reliable From Pickup to Paperwork",
    desc: "Our team follows a structured workflow for scheduling, collection, sorting, data handling, recycling, resale, and final reporting.",
    icon: Target,
    iconColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-500 dark:border-amber-400",
  },
  {
    index:3,
    label: "Facility-Backed Processing Proof",
    desc: "Assets are handled through organized processing, verified downstream recycling, and documentation that helps customers confirm final outcomes.",
    icon: Recycle,
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-500 dark:border-emerald-400",
  },
];

export default function About() {
  return (
    <section className="bg-secondary dark:bg-dark pb-24 lg:pb-32 transition-colors duration-300">
      <div
        className="relative py-24 lg:py-32"
        style={{
          backgroundImage: `url(${eWasteManagement.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10">
          <ScrollLoader>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-primary" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-[1rem] font-mono text-primary">
                  About Integritrade
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
                <div className="lg:col-span-7">
                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-white">
                    A practical ITAD partner for businesses that need proof, not
                    promises.
                  </h1>
                </div>

                <div className="lg:col-span-5 lg:pb-3">
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify">
                    Integritrade helps organizations and local customers remove,
                    track, process, recycle, and recover value from unwanted
                    electronics with a clear workflow and documented outcomes.
                  </p>
                </div>
              </div>
            </div>
          </ScrollLoader>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 mt-20">
              {pillars.map(
                ({ label, desc, icon: Icon, iconColor, borderColor, index }) => (
                  <ScrollLoader key={label} delay={index * 0.08}>
                    <div
                      key={label}
                      className="relative bg-white dark:bg-dark-secondary rounded-md p-6"
                    >
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 rounded-md border ${borderColor} mb-4`}
                      >
                        <Icon
                          className={`w-6 h-6 ${iconColor}`}
                          strokeWidth={1.75}
                        />
                      </div>

                      <h3 className="font-serif text-2xl leading-snug text-stone-900 dark:text-white mb-3 min-h-[4rem] line-clamp-2">
                        {label}
                      </h3>

                      <Separator className="my-4 border-stone-200 dark:border-slate-700" />

                      <p className="text-[15px] leading-relaxed text-stone-600 dark:text-slate-400 max-w-sm text-justify min-h-[98px]">
                        {desc}
                      </p>
                    </div>
                  </ScrollLoader>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollLoader>
          <div className="mt-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 pt-10">
            <div className="max-w-2xl">
              <h3 className="font-serif text-2xl lg:text-3xl text-stone-900 dark:text-white leading-tight mb-3">
                Ready to plan a pickup with a team that documents the outcome?
              </h3>

              <p className="text-stone-600 dark:text-slate-400">
                Tell us what you need removed, where it is, and when it needs to
                happen. We’ll help you choose the right service path.
              </p>
            </div>

            <div className="flex flex-col gap-3 flex-shrink-0">
              <PrimaryButton href="/service-book" testId="button-get-quote">
                Get a Free Quote
              </PrimaryButton>

              <OutlineButton href="/about" testId="button-learn-more">
                Learn More About Us
              </OutlineButton>
            </div>
          </div>
        </ScrollLoader>
      </div>
    </section>
  );
}