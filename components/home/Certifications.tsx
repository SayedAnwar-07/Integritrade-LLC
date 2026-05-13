import Image from "next/image";
import SectionHeader from "../shared/PageHeader";

import Iso9001 from "@/public/ISO/ISO-9001.webp";
import Iso14001 from "@/public/ISO/ISO-14001.webp";
import Iso27001 from "@/public/ISO/ISO-27001.webp";
import Iso45001 from "@/public/ISO/ISO-45001.webp";
import R2v3 from "@/public/ISO/R2V3_certified_logo.webp";
import { Separator } from "../ui/separator";
import ScrollLoader from "../shared/ScrollLoader";

const items = [
  {
    index: 1,
    img: R2v3,
    title: "Responsible Recycling",
    desc: "Full downstream traceability and responsible recovery of every asset.",
    link: "https://sustainableelectronics.org/find-an-r2-certified-facility/?appids=001UQ000001w7S2YAI&tab=2&backto=https://sustainableelectronics.org/find-an-r2-certified-facility/?type=byalias&alias=integritrade",
  },
  {
    index: 2,
    img: Iso14001,
    title: "Environmental Responsibility",
    desc: "Reduced emissions, landfill diversion, and verified ecological impact controls.",
    link: "/certifications/",
  },
  {
    index: 3,
    img: Iso9001,
    title: "Quality Management",
    desc: "Consistent, audit-ready processes refined through continuous improvement cycles.",
    link: "/certifications/",
  },
  {
    index: 4,
    img: Iso27001,
    title: "Data Security",
    desc: "Protected client data and chain-of-custody records at every step.",
    link: "/certifications/",
  },
  {
    index: 5,
    img: Iso45001,
    title: "Workplace Safety",
    desc: "Safe handling, ergonomics, and incident prevention across every facility.",
    link: "/certifications/",
  },
];

export default function Certifications() {
  return (
    <section className="bg-secondary dark:bg-dark py-24 lg:py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollLoader>
          <SectionHeader
            eyebrow="Certifications"
            title="Recognized standards that translate into real outcomes."
            description="Our certifications aren't just labels — they ensure your data is handled safely, your assets are tracked properly, and your business meets compliance expectations."
          />
        </ScrollLoader>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
          {items.map(({ img, title, desc, index, link }) => (
            <ScrollLoader key={title} delay={index * 0.08}>
              <a
                href={link}
                target={link.startsWith("http") ? "_blank" : undefined}
                rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block p-6 bg-white dark:bg-dark-secondary rounded-md shadow-lg"
              >
                {/* Logo */}
                <div className="flex mb-4">
                  <Image
                    src={img}
                    alt={title}
                    className="h-16 w-auto object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl leading-snug text-stone-900 dark:text-white mb-3 min-h-[4rem] line-clamp-2">
                  {title}
                </h3>

                <Separator className="my-3 sm:my-4 border-stone-200 dark:border-slate-700 max-w-60" />

                {/* Description */}
                <p className="text-sm text-stone-700 dark:text-slate-300 leading-relaxed min-h-[6rem] text-justify">
                  {desc}
                </p>
              </a>
            </ScrollLoader>
          ))}
        </div>
      </div>
    </section>
  );
}