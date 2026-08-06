import Image from "next/image"
import SectionHeader from "../shared/SectionHeader"
import ScrollLoader from "../shared/ScrollLoader"
import fourStepDiagramLight from "@/public/services/four-step-diagram.jpeg"
import fourStepDiagramDark from "@/public/services/four-step-diagram-dark.jpeg"

// Kept for the screen-reader / SEO fallback below — the visible content is the
// designer diagram, whose text is baked into the image and not machine-readable.
const steps = [
  {
    num: "01",
    title: "Schedule & Secure Pickup",
    desc: "We coordinate logistics, GPS-tracked transport, and sealed containers from your site.",
  },
  {
    num: "02",
    title: "Chain of Custody & Inventory",
    desc: "Every asset scanned and serialized. Full audit trail from pickup to disposition.",
  },
  {
    num: "03",
    title: "Data Destruction",
    desc: "NIST 800-88 wiping or physical shredding. Video verification available.",
  },
  {
    num: "04",
    title: "Reporting & Final Disposition",
    desc: "Certificates of Destruction, remarketing reports, and R2v3 recycling documentation.",
  },
]

export default function Process() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-secondary dark:bg-dark transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <ScrollLoader>
          <SectionHeader
            eyebrow="Process"
            title="Our Four Step Disposition Process"
            description="Serialized accountability from the loading dock to the downstream processor. No black boxes, no gaps in the trail."
          />
        </ScrollLoader>

        {/* Designer diagram — full-bleed on mobile so the detail stays readable */}
        <ScrollLoader>
          <div className="mt-14 lg:mt-16 -mx-4 sm:mx-0">
            {/* Light-mode diagram */}
            <Image
              src={fourStepDiagramLight}
              alt="Integritrade's four-step disposition process: 01 Schedule & Secure Pickup — GPS-tracked transport and sealed containers; 02 Chain of Custody & Inventory — every asset scanned and serialized with a full audit trail; 03 Data Destruction — NIST 800-88 wiping or physical shredding with video verification; 04 Reporting & Final Disposition — Certificates of Destruction, remarketing reports, and R2v3 recycling documentation."
              sizes="(max-width: 1024px) 100vw, 896px"
              className="mx-auto h-auto w-full max-w-4xl dark:hidden"
            />
            {/* Dark-mode diagram (same content, decorative — text covered by the light image + list) */}
            <Image
              src={fourStepDiagramDark}
              alt=""
              aria-hidden="true"
              sizes="(max-width: 1024px) 100vw, 896px"
              className="mx-auto hidden h-auto w-full max-w-4xl dark:block"
            />
          </div>
        </ScrollLoader>

        {/* Visually-hidden step list — keeps the process text readable to search
            engines and screen readers even though the diagram is an image. */}
        <ol className="sr-only">
          {steps.map((s) => (
            <li key={s.num}>
              <strong>{`Step ${s.num}: ${s.title}.`}</strong> {s.desc}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
