import Image from "next/image"
import hero from "@/public/hero3.png"
import PrimaryButton from "../shared/buttons/PrimaryButton"
import OutlineButton from "../shared/buttons/OutlineButton"
import ScrollLoader from "../shared/ScrollLoader"
import { ItadGlobe } from "../ui/globe"


export default function Hero() {
  return (
    <section className="relative py-20 lg:py-28 bg-secondary dark:bg-dark transition-colors duration-300 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />
         <ScrollLoader>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* Asymmetric grid 7/5 split, top-aligned */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                {/* Left Content 7 columns */}
                <div className="lg:col-span-7 lg:pt-4">
                  <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-[4rem] leading-[1.05] tracking-tight text-black dark:text-white text-balance">
                    Business ITAD services built around pickup, proof, and final reporting
                  </h1>

                  <div className="mt-8 max-w-2xl">
                    <div className="">
                      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                        We help companies remove, track, and destroy retired IT equipment while delivering serialized reports and chain-of-custody documentation your audit team can verify line by line.
                      </p>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-10">
                      <PrimaryButton href="/service-book/" testId="button-get-quote">
                        Get a Free Quote
                      </PrimaryButton>

                      <OutlineButton href="/accepted-items/" testId="button-learn-more">
                        See How It Works
                      </OutlineButton>
                  </div>
                </div>

                {/* Right Image 5 columns, with floating badge */}
                <div className="lg:col-span-5 relative group">
                  {/* Backdrop glow */}
                  <div className="absolute -inset-4 bg-gray-200/60 dark:bg-gray-800/30 blur-2xl rounded-md opacity-60 group-hover:opacity-80 transition duration-500" />

                  <div className="relative">
                    {/* <Image
                      src={hero}
                      alt="Certified IT asset disposition and electronic recycling Integritrade R2v3 facility"
                      width={800}
                      height={600}
                      className="relative rounded-md shadow-2xl w-full h-auto transition-transform duration-500 dark:shadow-black/40"
                      data-testid="img-hero"
                      priority
                    /> */}
                    <div><ItadGlobe /></div>
                  
                  </div>
                </div>
              </div>

              {/* Bottom ticker magazine-style data ribbon */}
              <div className="mt-20 lg:mt-24 border-gray-300 dark:border-white/10">
                <div className="grid grid-cols-3">
                  { [
                      { num: "01", value: "100%", label: "Data Destruction Guarantee" },
                      { num: "02", value: "Certified", label: "Compliance & Audit Ready" },
                      { num: "03", value: "40+ years", label: "Combined ITAD & Recycling Experience" },
                    ].map((item, i) => (
                    <div
                      key={item.num}
                      className={`py-7 px-5 lg:px-7 ${
                        i !== 0 ? "border-l border-gray-300 dark:border-white/10" : ""
                      } `}
                    >
                      <div className="flex items-baseline gap-2 mb-2">
                      </div>
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
            </div>
        </ScrollLoader>
    </section>
  )
}