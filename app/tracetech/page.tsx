import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import PageHeader from "@/components/shared/PageHeader";
import SectionHeader from "@/components/shared/SectionHeader";
import TraceTechTimeline from "@/components/TraceTechTimeline";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

export const metadata: Metadata = {
  title: "TraceTech | Integritrade",
  description:
    "TraceTech turns ITAD from a black box into an accountable workflow.",
};


export default function TraceTechPage() {
  return (
    <main className="min-h-screen bg-secondary dark:bg-dark">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Our Technology"
          title="TraceTech turns ITAD from a black box into an accountable workflow."
          description="TraceTech is Integritrade's proprietary client portal and processing platform built to give authorized teams real-time visibility into their ITAD projects from pickup through documented disposition."
        />
        <p className="mx-auto mt-2 max-w-4xl text-center text-base leading-relaxed text-gray-700 dark:text-gray-300">
          Clients can monitor asset and project status, manage service requests and future pickups, download Certificates of Destruction and Certificates of Erasure, access project reporting, and review estimated CO2e impact associated with documented reuse and recycling pathways.
        </p>
      </section>

      {/* Scroll timeline: stages + feature content */}
      <TraceTechTimeline />

      {/* CTA */}
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title=""
            description="TraceTech gives you visibility, control, and documented accountability after pickup."
            className="items-start text-start"
          />

          <div className="text-center mt-6">
             <PrimaryButton
                href="/service-book/"
                testId="button-get-quote"
                className="text-sm py-3 sm:flex-1 lg:flex-none"
                >
                Request a TraceTech Walkthrough
            </PrimaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}