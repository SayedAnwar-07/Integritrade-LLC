import Image from "next/image"
import ISO9001 from "@/public/ISO/ISO-9001.webp"
import ISO14001 from "@/public/ISO/ISO-14001.webp"
import ISO27001 from "@/public/ISO/ISO-27001.webp"
import ISO45001 from "@/public/ISO/ISO-45001.webp"
import R2V3 from "@/public/ISO/R2V3_certified_logo.webp"
import SectionHeader from "../shared/SectionHeader"
import ScrollLoader from "../shared/ScrollLoader"

const standards = [
  {
    img: R2V3,
    label: "R2v3",
    framework: "Responsible Recycling",
    purpose:
      "SERI's global standard for ethical recycling. We ensure full downstream traceability and responsible material recovery.",
  },
  {
    img: ISO27001,
    label: "ISO/IEC 27001",
    framework: "Information Security",
    purpose:
      "Global information security standard. We safeguard client data and chain-of-custody records throughout every disposition.",
  },
  {
    img: ISO9001,
    label: "ISO 9001",
    framework: "Quality Management",
    purpose:
      "International quality management standard. We deliver consistent, audit-ready processes refined through continuous improvement.",
  },
  {
    img: ISO14001,
    label: "ISO 14001",
    framework: "Environmental Management",
    purpose:
      "Global environmental management standard. We minimize emissions, landfill diversion, and ecological impact at every facility.",
  },
  {
    img: ISO45001,
    label: "ISO 45001",
    framework: "Occupational Health & Safety",
    purpose:
      "International workplace safety standard. We protect every technician through rigorous handling, ergonomics, and incident controls.",
  },
]

export default function ServicesCertificate() {
  return (
    <div className="">
      {/* Sticky left rail */}
      <aside className="">
        <div className="">
          <ScrollLoader>
              <SectionHeader
                    eyebrow="Independently Verified"
                    title="Audited against the standards our clients answer to."
                    description="Five third-party frameworks govern how we operate from information governance to workforce safety. Each is reviewed annually by external assessors, not self-attested."
                    linkText="View accreditation records"
                    linkHref="/certifications/"
                />  
          </ScrollLoader>     
        </div>
      </aside>

      {/* Numbered framework list */}
      <div className="mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {standards.map((s,i) => (
            <ScrollLoader key={s.label} delay={i * 0.08}>
              <div
                key={s.label}
                className=""
              >

                <div className="bg-white dark:bg-dark-secondary p-6 rounded-md shadow-lg">
                  <div className="flex gap-2 items-center">
                      <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                          <Image
                          src={s.img}
                          alt={s.label}
                          fill
                          className="object-contain"
                          sizes="80px"
                          />
                      </div>
                      <div>                        
                          <h3 className="mt-1 text-xl leading-tight text-gray-900 dark:text-gray-50 sm:text-2xl">
                          {s.label}
                          </h3>
                          <div className="text-xs font-medium uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                          {s.framework}
                          </div>
                      </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {s.purpose}
                  </p>
                </div>
              </div>
            </ScrollLoader>
          ))}
        </div>
      </div>
    </div>
  )
}