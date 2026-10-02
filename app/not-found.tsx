import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Recycle,
} from "lucide-react"

import PrimaryButton from "@/components/shared/buttons/PrimaryButton"
import OutlineButton from "@/components/shared/buttons/OutlineButton"
import notFound from "@/public/not-found3.png"
import integritradellc from "@/public/logo/integritrade-loader.png"

export default function NotFound() {
  return (
    <main className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-secondary dark:bg-dark">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        {/* soft green glow */}
        <div className="absolute -right-40 -top-32 h-[620px] w-[620px] rounded-full bg-emerald-500/[0.08] blur-[110px] dark:bg-emerald-500/[0.06]" />

        <div className="absolute -bottom-52 -left-40 h-[520px] w-[520px] rounded-full bg-emerald-900/[0.05] blur-[100px] dark:bg-emerald-400/[0.03]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #14532d 1px, transparent 1px), linear-gradient(to bottom, #14532d 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-[1280px] items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-24">

          {/* LEFT */}
          <div className="order-2 text-center lg:order-1 lg:text-left">

           {/* Brand Badge */}
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-emerald-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur dark:border-emerald-900 dark:bg-white/[0.04]">

            {/* Logo */}
            <Image
                src={integritradellc}
                alt="Integritrade"
                width={28}
                height={28}
                className="h-7 w-7 object-contain"
            />

            {/* Brand Name */}
            <span className="text-sm font-semibold tracking-[0.08em] text-primary">
                Integritrade
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                Error 404
            </span>

            </div>


           <h1 className="mt-8 font-serif text-3xl font-semibold leading-tight text-emerald-950 dark:text-white sm:text-4xl lg:text-[42px]">
              <span className="sr-only">404. </span>
              This page may be gone, but nothing should go to waste.
           </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-[570px] text-base leading-7 text-stone-600 dark:text-slate-300 sm:text-lg sm:leading-8 lg:mx-0">
              The page you're looking for may have been moved, retired, or
              recycled. We can help you get back to the right destination.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <PrimaryButton
                href="/services/"
                testId="button-explore-services"
                className="text-[15px] sm:flex-none"
              >
                Explore Services
              </PrimaryButton>

              <OutlineButton
                href="/"
                testId="button-back-home"
                className="text-[15px] sm:flex-none"
              >
                Back to Home
              </OutlineButton>
            </div>


            {/* Help */}
            <p className="mt-7 text-sm text-stone-500 dark:text-slate-400">
              Still can't find what you need?{" "}
              <Link
                href="/service-book/"
                className="group inline-flex items-center gap-1 font-semibold text-emerald-700 underline-offset-4 transition-colors hover:text-emerald-800 hover:underline dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                Contact our team
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </p>
          </div>

          {/* RIGHT */}
          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative w-full max-w-[560px] xl:max-w-[620px]">

              {/* glow behind illustration */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[70px] dark:bg-emerald-500/[0.07]"
              />

              {/* Image */}
              <div className="relative">
                <Image
                  src={notFound}
                  alt="404 page illustration representing responsible electronics recycling and IT asset disposition"
                  priority
                  sizes="(min-width: 1280px) 620px, (min-width: 1024px) 52vw, (min-width: 640px) 560px, 92vw"
                  className="h-auto w-full object-contain drop-shadow-[0_24px_45px_rgba(10,50,35,0.10)] dark:drop-shadow-[0_24px_45px_rgba(0,0,0,0.25)]"
                />
              </div>

              {/* Small floating status card */}
              <div className="absolute bottom-[5%] left-[2%] hidden rounded-md border border-emerald-950/10 bg-white/90 px-4 py-3 shadow-[0_16px_45px_rgba(17,50,38,0.10)] backdrop-blur-md sm:flex sm:items-center sm:gap-3 dark:border-white/10 dark:bg-[#0b1712]/90">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
                  <Recycle className="h-[18px] w-[18px] text-white" />
                </div>

                <div className="text-left">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-400 dark:text-slate-500">
                    Page status
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[#12362a] dark:text-white">
                    Retired responsibly
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}