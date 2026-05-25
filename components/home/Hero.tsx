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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7 lg:pt-4">
              <h1 className="font-serif font-bold text-2xl sm:text-4xl lg:text-[3.5rem] leading-[1.15] lg:leading-[1.10] tracking-[0.02em] text-black dark:text-white max-w-5xl">
                Integritrade helps organizations securely retire IT assets
              </h1>

              <div className="mt-8 max-w-2xl">
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                  End-to-end IT asset disposition and electronics recycling you can trust. We manage the removal, tracking, secure erasure, and physical destruction of your retired devices. You receive detailed, serialized reports and comprehensive chain-of-custody documentation built to withstand rigorous audits.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <PrimaryButton href="/service-book/" testId="button-get-quote">
                  Get a Free Quote
                </PrimaryButton>

                <OutlineButton href="/accepted-items/" testId="button-learn-more">
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
          <div className="mt-14 lg:mt-16 border-gray-300 dark:border-white/10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { value: "100%", label: "Data Destruction Guarantee" },
                { value: "5 Industry Certifications", label: "Compliance & Audit Ready" },
                { value: "40+ years", label: "Combined ITAD & Recycling Experience" },
                { value: "Verified", label: "Background-checked personnel handling sensitive assets" },
                { value: "24/7", label: "Video-monitored facility and controlled processing areas" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`py-7 px-5 lg:px-7 border-t border-gray-300 dark:border-white/10 ${
                    i !== 0 ? "lg:border-l" : ""
                  }`}
                >
                  <div className="font-serif text-md md:text-2xl lg:text-3xl font-bold text-black dark:text-white tracking-tight">
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
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              Organizations we’ve served
            </p>
          </div>
        </div>
      </ScrollLoader>
    </section>
  );
}