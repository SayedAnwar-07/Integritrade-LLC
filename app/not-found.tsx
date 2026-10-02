import Link from "next/link"
import {
  Recycle,
  Cpu,
  Leaf,
  ArrowRight,
} from "lucide-react"
import integritradellc from "@/public/logo/integritrade-loader.png"
import Image from "next/image"
import PrimaryButton from "@/components/shared/buttons/PrimaryButton"
import OutlineButton from "@/components/shared/buttons/OutlineButton"

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-secondary px-4 py-16 dark:bg-dark sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5" />
        <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/5" />
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            {/* Brand Badge */}
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur dark:border-emerald-900 dark:bg-white/[0.04]">

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

            <h2 className="mt-5 max-w-xl font-serif text-3xl leading-tight text-stone-900 dark:text-white sm:text-4xl">
              This page may be gone,
              <span className="block text-emerald-700 dark:text-emerald-400">
                but nothing should go to waste.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-stone-600 dark:text-slate-300 sm:text-lg sm:leading-8">
              The page you were looking for may have been moved, recycled, or
              retired. Let&apos;s get you back to a useful destination.
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

          {/* RIGHT VISUAL */}
          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative mx-auto w-[300px] aspect-square sm:w-[380px] md:w-[440px] lg:w-[500px] xl:w-[540px]">

              {/* Outer rings */}
              <div className="absolute inset-[4%] rounded-full border border-emerald-200/70 dark:border-emerald-500/20" />
              <div className="absolute inset-[14%] rounded-full border border-dashed border-stone-300 dark:border-white/10" />
              <div className="absolute inset-[25%] rounded-full border border-sky-200 dark:border-sky-500/20" />

              {/* Main card */}
              <div className="absolute inset-[20%] flex flex-col items-center justify-center rounded-full border border-stone-200 bg-white shadow-xl dark:border-white/10 dark:bg-dark-secondary">


                <div className="mt-4 font-serif text-[40px] font-semibold leading-none tracking-tight text-stone-900 dark:text-white sm:text-[100px]">
                  404
                </div>

                <p className="mt-2 text-center text-xs text-stone-500 dark:text-slate-400 sm:text-sm">
                  Route retired
                </p>
              </div>

              {/* Orbit items */}
              <div className="absolute left-[2%] top-[42%] flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 bg-white shadow-sm dark:border-white/10 dark:bg-dark-secondary sm:h-14 sm:w-14">
                <Recycle className="h-5 w-5 text-emerald-600 dark:text-emerald-400 sm:h-6 sm:w-6" />
              </div>

              <div className="absolute right-[6%] top-[18%] flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 bg-white shadow-sm dark:border-white/10 dark:bg-dark-secondary sm:h-14 sm:w-14">
                <Cpu className="h-5 w-5 text-sky-600 dark:text-sky-400 sm:h-6 sm:w-6" />
              </div>

              <div className="absolute bottom-[7%] right-[18%] flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 bg-white shadow-sm dark:border-white/10 dark:bg-dark-secondary sm:h-14 sm:w-14">
                <Leaf className="h-5 w-5 text-emerald-600 dark:text-emerald-400 sm:h-6 sm:w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}