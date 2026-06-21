import PrimaryButton from "../shared/buttons/PrimaryButton";
import OutlineButton from "../shared/buttons/OutlineButton";
import ScrollLoader from "../shared/ScrollLoader";
import { ItadGlobe } from "../ui/globe";

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-28 bg-secondary dark:bg-dark transition-colors duration-300 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <ScrollLoader>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 lg:pt-4">
              <h1  className="
                  font-serif font-bold
                  text-[2rem] leading-[1.2]
                  sm:text-[2.75rem] sm:leading-[1.15]
                  md:text-[3.25rem] md:leading-[1.12]
                  lg:text-[4rem] lg:leading-[1.08]
                  xl:text-[4.5rem] xl:leading-[1.05]
                  tracking-[-0.02em]
                  text-black dark:text-white
                  max-w-[16ch]"
              >
                Integritrade helps organizations securely retire IT assets
              </h1>

              <div className="mt-8 max-w-2xl">
                <p className="text-[15px] leading-7
                  sm:text-[17px] sm:leading-8
                  md:text-[18px] md:leading-8
                  lg:text-[19px] lg:leading-9
                  text-gray-700 dark:text-gray-300
                  text-justify"
                >
                  End-to-end IT asset disposition and electronics recycling you can trust. We manage the removal, tracking, secure erasure, and physical destruction of your retired devices. You receive detailed, serialized reports and comprehensive chain-of-custody documentation built to withstand rigorous audits.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <PrimaryButton href="/service-book/" testId="button-get-quote">
                  Get a Free Quote
                </PrimaryButton>

                <OutlineButton href="/fresno-electronics-recycling/" testId="button-learn-more">
                  See How It Works
                </OutlineButton>
              </div>
            </div>

            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-4 bg-gray-200/60 dark:bg-gray-800/30 blur-2xl rounded-md opacity-60 group-hover:opacity-80 transition duration-500" />
              <div className="relative">
                <div>
                  <ItadGlobe />
                </div>
              </div>
            </div>
          </div>

          {/* Data ribbon */}
          <div className="lg:mt-16 border-gray-300 dark:border-white/10">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
              {[
                { value: "100%", label: "Data Destruction Guarantee" },
                { value: "5 Industry Certifications", label: "Compliance & Audit Ready" },
                { value: "40+ years", label: "Combined ITAD & Recycling Experience" },
                { value: "Verified", label: "Background-checked personnel handling sensitive assets" },
                { value: "24/7", label: "Video-monitored facility and controlled processing areas" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`py-7 px-5 lg:px-7 rounded-md text-center ${
                    i !== 0 ? "lg:border-l" : ""
                  }`}
                >
                  <div className="font-serif text-md md:text-2xl lg:text-3xl font-bold text-black dark:text-white tracking-tight min-h-[2.5rem] md:min-h-[5.5rem]">
                    {item.value}
                  </div>
                  <div className="font-mono text-[11px] text-gray-600 dark:text-gray-400 mt-1.5 leading-tight">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-700 dark:text-gray-300 text-center">
              Organizations we’ve served
            </p>
          </div>
        </div>
      </ScrollLoader>
    </section>
  );
}