import PrimaryButton from "../shared/buttons/PrimaryButton";
import OutlineButton from "../shared/buttons/OutlineButton";
import ScrollLoader from "../shared/ScrollLoader";
import { ItadGlobe } from "../ui/globe";

import {
  ShieldCheck,
  Award,
 Users,
  BadgeCheck,
  Camera,
} from "lucide-react";

export default function Hero() {

  const trustItems = [
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Guaranteed Data Destruction",
      color: "text-green-600 border-green-300",
    },
    {
      icon: Award,
      value: "5",
      label: "Industry Certifications",
      color: "text-blue-600 border-blue-300",
    },
    {
      icon: Users,
      value: "40+",
      label: "Years Combined Experience",
      color: "text-purple-600 border-purple-300",
    },
    {
      icon: BadgeCheck,
      value: "Verified",
      label: "Background-Checked Personnel",
      color: "text-orange-600 border-orange-300",
    },
    {
      icon: Camera,
      value: "24/7",
      label: "Secure Video-Monitored Facility",
      color: "text-red-600 border-red-300",
    },
  ];

  return (
    <section className="relative pt-20 lg:pt-28 bg-secondary dark:bg-dark transition-colors duration-300 overflow-hidden">
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
                  tracking-[-0.02em]
                  text-black dark:text-white"
              >
                California's trusted partner for ITAD and ITAM  - done with full accountability, every time.
              </h1>

              <div className="mt-8 max-w-2xl">
                <p className="text-[15px] leading-7
                  sm:text-[17px] sm:leading-8
                  md:text-[18px] md:leading-8
                  lg:text-[19px] lg:leading-9
                  text-gray-700 dark:text-gray-300
                  custom-text-center"
                >
                  Integritrade manages the complete lifecycle of your retired electronics - secure data destruction, responsible recycling, and certified asset disposition -  all backed by documentation you can stand behind. Whether you're retiring 10 devices or 10,000, we give you the chain-of-custody reporting and compliance confidence your organization demands.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <OutlineButton href="/services/" testId="button-learn-more">
                  See How It Works
                </OutlineButton>

                <PrimaryButton href="/service-book/" testId="button-get-quote">
                  Get a Free Quote
                </PrimaryButton>
                
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
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {trustItems.map((item, i) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`text-center py-7 px-5 rounded-md`}
                  >
                    <div
                      className={`w-11 h-11 mx-auto mb-3 flex items-center justify-center rounded-md border ${item.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="text-2xl lg:text-3xl font-bold text-black dark:text-white mt-5">
                      {item.value}
                    </div>

                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-tight">
                      {item.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-14">
            <p className="text-2xl md:text-4xl fob text-center font-serif">
              Organizations we’ve served
            </p>
          </div>
        </div>
      </ScrollLoader>
    </section>
  );
}