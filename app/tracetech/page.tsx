import type { Metadata } from "next";

import {
  ArrowRight,
  Eye,
  ClipboardList,
  BookCheck,
  BarChart3,
} from "lucide-react";

import PageHeader from "@/components/shared/PageHeader";
import SectionHeader from "@/components/shared/SectionHeader";
import TraceTechTimeline from "@/components/TraceTechTimeline";
import PrimaryButton from "@/components/shared/buttons/PrimaryButton";

export const metadata: Metadata = {
  title:
    "TraceTech | ITAD Client Portal & Real-Time Asset Tracking | Integritrade",

  description:
    "TraceTech is Integritrade's ITAD client portal for real-time asset tracking, job-specific handling controls, Certificates of Destruction/Erasure, service requests, and CO2e sustainability reporting.",

  keywords: [
    "ITAD client portal",
    "real-time IT asset tracking",
    "ITAD asset management software",
    "ITAD service request management",
    "ITAD sustainability reporting",
  ],

  openGraph: {
    title: "TraceTech | ITAD Client Portal & Real-Time Asset Tracking",
    description:
      "Visibility, control, and documented accountability for your ITAD program — from pickup through disposition.",
    url: "/tracetech/",
  },
};


const benefits = [
  {
    icon: Eye,
    title: "Real-time project visibility",
    description:
      "Follow asset and project status after pickup instead of losing visibility when equipment leaves your site.",
  },

  {
    icon: ClipboardList,
    title: "Job-specific handling controls",
    description:
      "Client requirements are connected to the project and asset record, then surfaced when the asset tag is scanned.",
  },

  {
    icon: BookCheck,
    title: "SOPs at the point of work",
    description:
      "Technicians can access applicable instructions and verification steps before processing devices, media, printers, and other data-risk equipment.",
  },

  {
    icon: BarChart3,
    title: "Service, certificates, and sustainability reporting",
    description:
      "Manage service requests, retrieve documentation, and view estimated CO2e impact by documented disposition pathway.",
  },
];


const portalPreviews = [
  {
    label: "Sample Certificate of Destruction",
    src: "/images/tracetech/sample-certificate-of-destruction.png",
  },

  {
    label: "Sample Certificate of Erasure",
    src: "/images/tracetech/sample-certificate-of-erasure.png",
  },

  {
    label: "Sample ESG / CO2e impact reporting",
    src: "/images/tracetech/sample-esg-co2e-report.png",
  },

  {
    label: "Asset & project status dashboard",
    src: "/images/tracetech/dashboard-asset-status.png",
  },

  {
    label: "Service request & pickup scheduling",
    src: "/images/tracetech/dashboard-service-requests.png",
  },
];


export default function TraceTechPage() {

  return (
    <main className="min-h-screen bg-secondary dark:bg-dark">

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-4 pt-16 sm:px-6 lg:px-8">

        <PageHeader
          eyebrow="Our Technology"
          title="TraceTech turns ITAD from a black box into an accountable workflow."
          description="TraceTech is Integritrade's proprietary client portal and processing platform built to give authorized teams real-time visibility into their ITAD projects from pickup through documented disposition."
        />


        <p className="mx-auto mt-2 max-w-4xl text-center text-base leading-relaxed text-gray-700 dark:text-gray-300">

          Clients can monitor asset and project status, manage service requests
          and future pickups, download Certificates of Destruction and
          Certificates of Erasure, access project reporting, and review
          estimated CO2e impact associated with documented reuse and recycling
          pathways.

        </p>


        <div className="mt-8 flex justify-center">

          <PrimaryButton
            href="/service-book/"
            testId="button-hero-walkthrough"
            className="py-3 text-sm"
          >
            Request a TraceTech Walkthrough

          </PrimaryButton>

        </div>

      </section>


      {/* Timeline */}
      <TraceTechTimeline />


      {/* Benefits */}

      <section className="mx-auto max-w-[1400px] px-4 pt-12 sm:px-6 lg:px-8">

        <SectionHeader
          eyebrow="Why It Matters"
          title="What TraceTech changes for your team"
          description="Four ways TraceTech replaces guesswork with a documented, auditable process."
        />


        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((b)=>{

            const Icon = b.icon;

            return (

              <div
                key={b.title}
                className="flex h-full flex-col rounded-md bg-white p-6 dark:bg-dark-secondary"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">

                  <Icon
                    className="h-5 w-5"
                    strokeWidth={1.75}
                  />

                </div>


                <h3 className="mt-4 font-serif text-lg font-semibold text-gray-900 dark:text-white">

                  {b.title}

                </h3>


                <div className="mt-3 border-t border-gray-100 dark:border-gray-800"/>


                <p className="mt-3 text-[15px] leading-relaxed text-gray-700 dark:text-gray-300">

                  {b.description}

                </p>

              </div>

            );

          })}

        </div>

      </section>



      {/* Portal Preview */}
      {/* <section className="mx-auto max-w-[1400px] px-4 pt-16 sm:px-6 lg:px-8">


        <SectionHeader

          eyebrow="Inside The Portal"

          title="See what your team gets access to"

          description="Sample views from the TraceTech portal, shown with test data only — no customer information."

        />



        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">


          {portalPreviews.map((p)=>(

            <figure
              key={p.label}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900/40"
            >


              <img
                src={p.src}
                alt={`${p.label} (sample/test data, no customer information)`}
                className="aspect-video w-full object-cover"
              />


              <figcaption className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">

                {p.label}

              </figcaption>


            </figure>

          ))}


        </div>


      </section> */}



      {/* CTA */}

      <section className="px-4 pb-10 pt-16 sm:px-6 lg:px-8">


        <div className="mx-auto max-w-4xl">


          <SectionHeader

            eyebrow="Get Started"

            title="TraceTech gives you visibility, control, and documented accountability after pickup."

            description="See exactly what your team gains access to — real-time asset status, service requests, certificates, and CO2e reporting — in a short walkthrough of the TraceTech portal."

            className="items-center text-center"

          />


          <div className="mt-6 flex justify-center">


            <PrimaryButton

              href="/service-book/"

              testId="button-get-quote"

              className="py-3 text-sm sm:flex-1 lg:flex-none"

            >
              Request a TraceTech Walkthrough
            </PrimaryButton>


          </div>


        </div>


      </section>


    </main>
  );
}