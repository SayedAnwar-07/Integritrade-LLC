import Link from "next/link"
import type { ComponentType } from "react"
import { ArrowRight } from "lucide-react"
import PrimaryButton from "@/components/shared/buttons/PrimaryButton"
import OutlineButton from "@/components/shared/buttons/OutlineButton"

// The page for every address that does not exist. Static export writes it to
// out/404.html, and public/.htaccess serves that for missing URLs
// (ErrorDocument 404). Until 2026-10-02 the server showed its own generic page
// instead. Next marks it noindex on its own.

/* ── Card icons ────────────────────────────────────────────────────────────
   Line icons in the homepage stats style (components/home/Hero.tsx): navy
   strokes that follow currentColor, one brand-green accent. No tile behind. */

type Glyph = ComponentType<{ className?: string }>

const GREEN = "#2aac61"

function SvgIcon({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

// Services: three service levels stacked, the top one in green.
const ServicesGlyph: Glyph = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M12 3.5 20.5 8 12 12.5 3.5 8Z" stroke={GREEN} />
    <path d="m3.5 12 8.5 4.5 8.5-4.5" />
    <path d="m3.5 16 8.5 4.5 8.5-4.5" />
  </SvgIcon>
)

// Service areas: a folded map with a green location pin.
const AreasGlyph: Glyph = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M9 5.5 3.5 7.5v12L9 17.5l6 2 5.5-2v-5" />
    <path d="M9 5.5v12M15 13.5v6" />
    <path d="M17 11.5s-3.5-3.1-3.5-5.9a3.5 3.5 0 0 1 7 0c0 2.8-3.5 5.9-3.5 5.9Z" stroke={GREEN} />
    <circle cx="17" cy="5.7" r="1.1" stroke={GREEN} />
  </SvgIcon>
)

// Certifications: a rosette with ribbons and a green check.
const CertGlyph: Glyph = ({ className }) => (
  <SvgIcon className={className}>
    <circle cx="12" cy="9.5" r="6" />
    <path d="M8.6 14.4 7.5 21l4.5-2.4 4.5 2.4-1.1-6.6" />
    <path d="m9.5 9.6 1.8 1.8 3.3-3.4" stroke={GREEN} />
  </SvgIcon>
)

// Insights: an open guide with green text lines on the right page.
const InsightsGlyph: Glyph = ({ className }) => (
  <SvgIcon className={className}>
    <path d="M12 7c-2.2-1.6-5.3-2-8.5-1.2v12.5c3.2-.8 6.3-.4 8.5 1.2 2.2-1.6 5.3-2 8.5-1.2V5.8C17.3 5 14.2 5.4 12 7Z" />
    <path d="M12 7v12.5" />
    <path d="M14.5 10c1.2-.4 2.5-.5 3.6-.4M14.5 13c1.2-.4 2.5-.5 3.6-.4" stroke={GREEN} />
  </SvgIcon>
)

const DESTINATIONS: { href: string; Icon: Glyph; title: string; text: string }[] = [
  {
    href: "/services/",
    Icon: ServicesGlyph,
    title: "Services",
    text: "IT asset disposition, data destruction, and secure electronics recycling.",
  },
  {
    href: "/service-area/",
    Icon: AreasGlyph,
    title: "Service areas",
    text: "ITAD and recycling services in 60 California cities.",
  },
  {
    href: "/certifications/",
    Icon: CertGlyph,
    title: "Certifications",
    text: "R2v3, ISO 9001, ISO 14001, ISO 27001, and ISO 45001.",
  },
  {
    href: "/blogs/",
    Icon: InsightsGlyph,
    title: "Insights",
    text: "Guides on ITAD, compliance, and data security.",
  },
]

/* ── The recycling loop ───────────────────────────────────────────────────
   Three chasing arrows in the logo's blue, teal and green, each a gradient
   band with a drawn arrowhead, and a leaf in the gap at the top. Angles run
   clockwise from 12 o'clock. */

const CX = 200
const CY = 212
const R = 160

function point(deg: number, r = R): [number, number] {
  const a = (deg * Math.PI) / 180
  return [+(CX + r * Math.sin(a)).toFixed(2), +(CY - r * Math.cos(a)).toFixed(2)]
}

function arc(from: number, to: number) {
  const [x1, y1] = point(from)
  const [x2, y2] = point(to)
  return `M ${x1} ${y1} A ${R} ${R} 0 0 1 ${x2} ${y2}`
}

// Arrowhead at the end of an arc, pointing clockwise along the circle.
function head(deg: number) {
  const a = (deg * Math.PI) / 180
  const [px, py] = point(deg)
  const t = [Math.cos(a), Math.sin(a)] // clockwise tangent
  const n = [Math.sin(a), -Math.cos(a)] // outward normal
  const f = (x: number) => +x.toFixed(2)
  const bx = px - t[0] * 3
  const by = py - t[1] * 3
  const tip = `${f(px + t[0] * 17)} ${f(py + t[1] * 17)}`
  const c1 = `${f(bx + n[0] * 13)} ${f(by + n[1] * 13)}`
  const c2 = `${f(bx - n[0] * 13)} ${f(by - n[1] * 13)}`
  return `M ${c1} L ${tip} L ${c2} Z`
}

const ARROWS = [
  { id: "green", from: 16, to: 100, start: "#4cc47a", end: "#1c8f45" },
  { id: "teal", from: 136, to: 220, start: "#2bbcae", end: "#0f7f78" },
  { id: "blue", from: 256, to: 340, start: "#5b9be6", end: "#1f5fb3" },
]

function RecyclingLoop404() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="h-auto w-full drop-shadow-[0_18px_40px_rgba(15,43,70,0.12)] dark:drop-shadow-none"
      aria-hidden="true"
    >
      <defs>
        {ARROWS.map((a) => {
          const [x1, y1] = point(a.from)
          const [x2, y2] = point(a.to)
          return (
            <linearGradient key={a.id} id={`nf-grad-${a.id}`} gradientUnits="userSpaceOnUse" x1={x1} y1={y1} x2={x2} y2={y2}>
              <stop offset="0" stopColor={a.start} />
              <stop offset="1" stopColor={a.end} />
            </linearGradient>
          )
        })}
      </defs>

      {/* Faint track the arrows travel along */}
      <circle cx={CX} cy={CY} r={R} fill="none" strokeWidth="1.5" className="stroke-gray-200 dark:stroke-white/10" />

      {ARROWS.map((a) => (
        <g key={a.id} data-arrow={a.id}>
          <path d={arc(a.from, a.to)} fill="none" stroke={`url(#nf-grad-${a.id})`} strokeWidth="9" strokeLinecap="round" />
          <path d={head(a.to)} fill={a.end} stroke={a.end} strokeWidth="3" strokeLinejoin="round" />
        </g>
      ))}

      {/* Leaf growing out of the gap at the top of the loop */}
      <g>
        <path d="M200 70 L200 40" stroke="#1c7e33" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M200 46 C204 31 217 22 234 22 C232 37 219 48 200 46 Z" fill="#22a052" />
        <path d="M200 55 C196 42 185 35 169 35 C171 48 183 56 200 55 Z" fill="#2aac61" />
      </g>

      {/* Centre disc */}
      <circle
        cx={CX}
        cy={CY}
        r="122"
        className="fill-white stroke-gray-200 dark:fill-[hsl(var(--dark-secondary))] dark:stroke-white/10"
        strokeWidth="1.5"
      />
      <circle
        cx={CX}
        cy={CY}
        r="108"
        fill="none"
        strokeWidth="1.5"
        strokeDasharray="2 7"
        strokeLinecap="round"
        className="nf-orbit stroke-emerald-600/40 dark:stroke-emerald-400/30"
      />
      <text
        x={CX}
        y={CY + 22}
        textAnchor="middle"
        className="fill-[#0f2b46] font-serif dark:fill-white"
        fontSize="86"
        fontWeight="800"
        letterSpacing="-3"
      >
        404
      </text>
      <text
        x={CX}
        y={CY + 54}
        textAnchor="middle"
        className="fill-gray-500 dark:fill-gray-400"
        fontSize="15"
        fontWeight="500"
      >
        Page not found
      </text>
    </svg>
  )
}

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-secondary dark:bg-dark">
      <title>Page Not Found | Integritrade LLC</title>

      {/* A faint grid of dots, like a circuit board seen from far away */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(15_43_70/0.08)_1px,transparent_0)] [background-size:28px_28px] dark:bg-[radial-gradient(circle_at_1px_1px,rgb(255_255_255/0.05)_1px,transparent_0)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-500/5" />

      <div className="relative mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <h1 className="font-serif text-[2rem] font-bold leading-[1.12] tracking-[-0.02em] text-[#0f2b46] [text-wrap:balance] dark:text-white sm:text-[2.6rem] lg:text-[3.1rem]">
              This page may be gone,{" "}
              <span className="text-primary dark:text-emerald-400 lg:block">
                but nothing should go to waste.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-8 lg:mx-0">
              The page you were looking for may have been moved, recycled, or
              retired. Let&apos;s get you back to a useful destination.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <PrimaryButton
                href="/services/"
                testId="button-explore-services"
                className="py-3.5 text-[15px] sm:flex-none"
              >
                Explore Services
              </PrimaryButton>
              <OutlineButton
                href="/"
                testId="button-back-home"
                className="py-3.5 text-[15px] sm:flex-none"
              >
                Back to Home
              </OutlineButton>
            </div>

            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Still can&apos;t find what you need?{" "}
              <Link
                href="/service-book/"
                className="group inline-flex items-center gap-1 font-semibold text-primary underline-offset-4 hover:underline dark:text-emerald-400"
              >
                Contact our team
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </p>
          </div>

          <div className="order-1 mx-auto w-[220px] sm:w-[280px] lg:order-2 lg:w-full lg:max-w-[440px]">
            <RecyclingLoop404 />
          </div>
        </div>

        <nav aria-labelledby="nf-popular" className="mt-14 border-t border-gray-200 pt-10 dark:border-white/10 lg:mt-20">
          <h2
            id="nf-popular"
            className="text-center font-serif text-lg font-semibold text-[#0f2b46] dark:text-white lg:text-left"
          >
            Popular pages
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {DESTINATIONS.map(({ href, Icon, title, text }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex h-full flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md dark:border-white/10 dark:bg-dark-secondary dark:hover:border-emerald-500/40"
                >
                  <Icon className="h-9 w-9 text-[#0f2b46] dark:text-slate-100" />
                  <span className="mt-4 flex items-center gap-1.5 font-serif text-base font-semibold text-[#0f2b46] dark:text-white">
                    {title}
                    <ArrowRight className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-primary dark:group-hover:text-emerald-400" />
                  </span>
                  <span className="mt-1.5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {text}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
