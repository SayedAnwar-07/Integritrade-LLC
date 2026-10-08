"use client"

import Image from "next/image"
import { useEffect, useRef, useState, type ReactNode } from "react"
import {
  BarChart3,
  Check,
  Clock,
  Download,
  FileText,
  Files,
  Info,
  ChevronLeft,
  ChevronRight,
  Copy,
  LayoutGrid,
  PanelLeft,
  RotateCw,
  Share,
  ShieldHalf,
  Leaf,
  LifeBuoy,
  LogOut,
  MessageCircle,
  Monitor,
  Package,
  Plus,
  RefreshCw,
  ShieldCheck,
  User,
  CircleCheck,
} from "lucide-react"

import integritradeMark from "@/public/logo/integritrade-favicon.png"
import integritradeLogo from "@/public/logo/integritrade-logo.svg"

/**
 * Animated walkthrough of the TraceTech client portal for the About page (Ian,
 * 2026-10-08), styled on the real portal and filled with sample data only.
 *
 * A cursor moves and clicks through Dashboard, My jobs and Certificates: the counters
 * count up and the donut draws, a job completes and a new certificate is
 * downloaded. Title cards open and close it (intro "Your Assets Left the
 * Building. Your Visibility Didn't.", outro
 * "Every Asset. Fully Accounted For."), and it loops about every 23 seconds.
 * It sits in a browser window and is drawn at a fixed 1040x620 design size and scaled to its container, so
 * it behaves like a video at every width. It only plays while on screen; with
 * reduced motion (and before hydration) it shows the finished dashboard.
 */

const W = 1040
const H = 590 // the portal itself (a little taller than the old screenshot, per Adnan)
const CHROME = 30 // Safari-style browser bar above it
const LOOP_MS = 23300

type Scene = "dashboard" | "jobs" | "certificates"
type Target = "nav-dashboard" | "nav-jobs" | "nav-certificates" | "download"

// The cursor glides for CURSOR_MS; each screen opens just after it arrives.
const CURSOR_MS = 1300
const SCRIPT: [number, string][] = [
  [0, "intro"],
  [3800, "start"],
  [8200, "move:nav-jobs"],
  [9550, "click"],
  [9800, "scene:jobs"],
  [11800, "job-complete"],
  [13200, "move:nav-certificates"],
  [14550, "click"],
  [14800, "scene:certificates"],
  [16200, "move:download"],
  [17550, "click"],
  [17750, "downloaded"],
  [19100, "outro"],
]

/* --------------------------- small building blocks --------------------------- */

function CountUp({ to, play, decimals = 0, duration = 1500 }: { to: number; play: number; decimals?: number; duration?: number }) {
  const [value, setValue] = useState(play ? 0 : to)
  useEffect(() => {
    if (!play) return
    let raf = 0
    const t0 = performance.now()
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / duration)
      setValue(to * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    setValue(0)
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [play, to, duration])
  return <>{decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString("en-US")}</>
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-xl bg-white ring-1 ring-slate-200/80 ${className}`}>{children}</div>
}

function Kpi({ icon, tint, label, value, valueClass = "text-slate-900" }: { icon: ReactNode; tint: string; label: string; value: ReactNode; valueClass?: string }) {
  return (
    <Card className="flex items-center gap-3 px-4 py-3.5">
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${tint}`}>{icon}</span>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase leading-tight tracking-[0.06em] text-slate-700">{label}</div>
        <div className={`mt-1 text-[22px] font-bold leading-none tabular-nums ${valueClass}`}>{value}</div>
      </div>
    </Card>
  )
}

function Bar({ label, value, total, pct, color, show }: { label: string; value: number; total: number; pct: number; color: string; show: boolean }) {
  return (
    <div>
      <div className="flex justify-between text-[11px]">
        <span className="text-slate-700">{label}</span>
        <span className="tabular-nums text-slate-800">
          {value} <span className="text-slate-400">/ {total}</span>
        </span>
      </div>
      <div className="mt-1.5 h-[6px] rounded-full bg-slate-100">
        <div
          className="h-full rounded-full transition-[width] duration-[1100ms] ease-out"
          style={{ width: show ? `${pct}%` : "0%", backgroundColor: color }}
        />
      </div>
    </div>
  )
}

function Pill({ children, className }: { children: ReactNode; className: string }) {
  return <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold ${className}`}>{children}</span>
}

function Words({ words, start, green = false }: { words: string[]; start: number; green?: boolean }) {
  return (
    <div>
      {words.map((w, i) => (
        <span
          key={w}
          className={`mr-[0.25em] inline-block ${green ? "-mb-[0.18em] bg-gradient-to-r from-[#5eead4] via-[#34d399] to-[#22c55e] bg-clip-text pb-[0.18em] text-transparent" : ""}`}
          style={{ animation: `tt-word 750ms cubic-bezier(0.2, 0.7, 0.2, 1) ${start + i * 140}ms both` }}
        >
          {w}
        </span>
      ))}
    </div>
  )
}

const DONUT = [
  { label: "Sanitized / processed", value: 172, color: "#1e7a4f" },
  { label: "Securely destroyed", value: 96, color: "#1f5fa8" },
  { label: "Recycled", value: 96, color: "#e8811a" },
  { label: "In processing", value: 48, color: "#cbd5e1" },
]
const DONUT_TOTAL = 412

const JOBS = [
  { id: "ITIB-7QK2M4R-IT", date: "2026-10-06", material: "Laptops", qty: "48" },
  { id: "ITIB-3HV8XN2-IT", date: "2026-09-28", material: "Loose drives", qty: "186 · 240 lbs" },
  { id: "ITIB-9TD4LW6-IT", date: "2026-09-15", material: "Servers", qty: "12 · 610 lbs" },
  { id: "ITIB-5RB1PC9-IT", date: "2026-09-02", material: "Desktops", qty: "64" },
  { id: "ITIB-2MX7GF3-IT", date: "2026-08-21", material: "Small domestic appliances (SDA)", qty: "102 · 380 lbs" },
]

const CERTS = [
  { no: "ITG-COE-20261006-0041", tag: "100245_00000412", type: "Erasure", method: "NIST 800-88 Purge (software erasure)", date: "2026-10-06" },
  { no: "ITG-COD-20261006-0040", tag: "100245_00000411", type: "Destruction", method: "Shred (2 mm particle size)", date: "2026-10-06" },
  { no: "ITG-COD-20261003-0039", tag: "100245_00000398", type: "Destruction", method: "Degauss + Shred", date: "2026-10-03" },
  { no: "ITG-NDD-20261002-0038", tag: "100245_00000390", type: "No data device", method: "Verified no storage present", date: "2026-10-02" },
]

const TYPE_PILL: Record<string, string> = {
  Erasure: "bg-blue-50 text-blue-700 ring-1 ring-blue-100",
  Destruction: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100",
  "No data device": "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
}

/* --------------------------------- component --------------------------------- */

// startWithIntro opens on the intro card with no fade from the dashboard. It is
// for exporting the walkthrough as a video; the site leaves it off.
export default function TraceTechAnimation({ startWithIntro = false }: { startWithIntro?: boolean }) {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const targets = useRef<Partial<Record<Target, HTMLElement | null>>>({})
  const setTarget = (key: Target) => (el: HTMLElement | null) => {
    targets.current[key] = el
  }

  const [scale, setScale] = useState(1)
  const [scene, setScene] = useState<Scene>("dashboard")
  const [play, setPlay] = useState(0) // 0 = static (server render, reduced motion)
  const [drawn, setDrawn] = useState(true)
  const [jobDone, setJobDone] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const [cursor, setCursor] = useState({ x: 640, y: 360, visible: false, click: 0 })
  const [pressed, setPressed] = useState<Target | null>(null)
  // Title card over the portal; the content stays while it fades out.
  const [card, setCard] = useState<{ kind: "intro" | "outro"; key: number } | null>(startWithIntro ? { kind: "intro", key: 0 } : null)
  const [cardShown, setCardShown] = useState(startWithIntro)

  // Scale the fixed-size design to the container width.
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / W))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Draw the donut from zero each time the dashboard starts.
  useEffect(() => {
    if (!play) return
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setDrawn(true)))
    return () => cancelAnimationFrame(raf)
  }, [play])

  // Run the script while at least a third of it is on screen.
  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let timers: number[] = []
    let aimed: Target | null = null
    const moveTo = (key: Target) => {
      aimed = key
      const el = targets.current[key]
      const stage = stageRef.current
      if (!el || !stage) return
      const r = el.getBoundingClientRect()
      const s = stage.getBoundingClientRect()
      const k = s.width / W
      setCursor((c) => ({ ...c, visible: true, x: (r.left - s.left + Math.min(r.width * 0.5, 40)) / k, y: (r.top - s.top + r.height * 0.6) / k }))
    }

    const click = () => {
      setCursor((c) => ({ ...c, click: c.click + 1 }))
      setPressed(aimed)
      timers.push(window.setTimeout(() => setPressed(null), 220))
    }

    const apply = (action: string) => {
      if (action === "click") return click()
      if (action === "start") {
        setScene("dashboard")
        setPlay((n) => n + 1)
        setCardShown(false)
        setDrawn(false)
        // Nothing is clicked on the dashboard, so the cursor rests on its menu item.
        moveTo("nav-dashboard")
        setJobDone(false)
        setDownloaded(false)
      }
      else if (action === "job-complete") setJobDone(true)
      else if (action === "intro" || action === "outro") {
        setCursor((c) => ({ ...c, visible: false }))
        setCard((c) => ({ kind: action, key: (c?.key ?? 0) + 1 }))
        setCardShown(true)
      }
      else if (action === "downloaded") setDownloaded(true)
      else if (action.startsWith("scene:")) setScene(action.slice(6) as Scene)
      else if (action.startsWith("move:")) moveTo(action.slice(5) as Target)
    }

    let running = false
    const run = () => {
      SCRIPT.forEach(([at, action]) => timers.push(window.setTimeout(() => apply(action), at)))
      timers.push(window.setTimeout(run, LOOP_MS))
    }
    const stop = () => {
      timers.forEach((t) => window.clearTimeout(t))
      timers = []
      running = false
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true
          run()
        } else if (!entry.isIntersecting && running) stop()
      },
      { threshold: 0.35 },
    )
    io.observe(wrap)
    return () => {
      io.disconnect()
      stop()
    }
  }, [])

  const showBars = drawn

  const nav = [
    { key: "dashboard" as Scene, icon: LayoutGrid, text: "Dashboard" },
    { key: "jobs" as Scene, icon: Package, text: "My jobs" },
    { key: "certificates" as Scene, icon: Files, text: "Certificates" },
  ]

  const headers: Record<Scene, { title: string; sub: string }> = {
    dashboard: { title: "Welcome, Sample Client", sub: "Your asset disposition overview" },
    jobs: { title: "Your jobs", sub: "Every collection we have processed for you" },
    certificates: { title: "Your certificates", sub: "Destruction, erasure and no-data-device certificates" },
  }

  // Donut geometry
  const R = 46
  const C = 2 * Math.PI * R
  let offset = 0

  return (
    <div
      ref={wrapRef}
      role="img"
      aria-label="Animated walkthrough of the TraceTech client portal with sample data: the dashboard counts assets received, sanitized and recycled, a job is completed, and a new certificate of erasure is downloaded."
      className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-[#eef2f6] shadow-[0_30px_70px_rgba(15,43,70,0.16)] dark:border-white/10"
      style={{ aspectRatio: `${W} / ${H + CHROME}` }}
      data-nosnippet
    >
      <div
        ref={stageRef}
        aria-hidden="true"
        className="absolute left-0 top-0 origin-top-left select-none text-[12px] text-slate-700"
        style={{ width: W, height: H + CHROME, transform: `scale(${scale})` }}
      >
        {/* Browser window: a slim Safari-style bar, as in the screenshot this replaced */}
        <div className="absolute inset-x-0 top-0 flex h-[30px] items-center border-b border-slate-200 bg-[#fafafa] px-3 text-slate-400">
          <div className="flex items-center gap-[5px]">
            <span className="h-[9px] w-[9px] rounded-full bg-[#ff5f57]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#febc2e]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#28c840]" />
          </div>
          <PanelLeft className="ml-4 h-3.5 w-3.5" strokeWidth={1.6} />
          <ChevronLeft className="ml-3 h-3.5 w-3.5" strokeWidth={1.8} />
          <ChevronRight className="ml-1 h-3.5 w-3.5 text-slate-300" strokeWidth={1.8} />
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
            <ShieldHalf className="h-3 w-3" strokeWidth={1.8} />
            <div className="relative flex h-[19px] w-[380px] items-center justify-center rounded-md bg-slate-100 text-[10.5px] text-slate-500">
              tracetech.integritradellc.com
              <RotateCw className="absolute right-2 h-2.5 w-2.5" strokeWidth={2} />
            </div>
          </div>
          <div className="ml-auto flex items-center gap-3.5">
            <Download className="h-3.5 w-3.5" strokeWidth={1.6} />
            <Share className="h-3.5 w-3.5" strokeWidth={1.6} />
            <Plus className="h-3.5 w-3.5" strokeWidth={1.6} />
            <Copy className="h-3.5 w-3.5" strokeWidth={1.6} />
          </div>
        </div>

        {/* Portal */}
        <div className="absolute inset-x-0 bottom-0 top-[30px] bg-[#eef2f6]">
        {/* Top bar */}
        <div className="absolute left-2 right-2 top-2 flex h-[46px] items-center justify-between rounded-[14px] bg-gradient-to-r from-[#0f2b46] via-[#13324f] to-[#0f2b46] px-4 text-white shadow-md">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
              <Image src={integritradeMark} alt="" width={20} height={20} className="h-auto w-5" />
            </span>
            <span className="text-[15px] font-bold tracking-tight">TraceTech</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] font-semibold">
            <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Connected
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/10 py-1 pl-1 pr-3 ring-1 ring-white/15">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600"><Leaf className="h-3 w-3" /></span>
              <span className="leading-tight">SAMPLE<span className="block text-[9px] font-normal text-white/60">Client</span></span>
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-300" /> Two-factor
              <span className="ml-1 flex items-center gap-1 rounded-full bg-white/10 px-2 py-0.5"><LogOut className="h-3 w-3" /> Sign out</span>
            </span>
          </div>
        </div>

        {/* Sidebar */}
        <div className="absolute bottom-0 left-0 top-[62px] w-[176px] rounded-tr-[18px] bg-white px-2.5 py-4 shadow-sm">
          <div className="px-2.5 text-[10px] font-semibold tracking-[0.12em] text-slate-400">CLIENT</div>
          <div className="mt-2.5 space-y-0.5">
            {nav.map(({ key, icon: Icon, text }) => (
              <div
                key={key}
                ref={setTarget(`nav-${key}` as Target)}
                className={`flex h-[34px] items-center gap-2.5 rounded-lg px-2.5 text-[12.5px] transition-[background-color,color,transform] duration-200 ${
                  scene === key ? "bg-[#e8f0fb] font-semibold text-[#1e4f8a]" : "font-medium text-slate-700"
                } ${pressed === `nav-${key}` ? "scale-[0.96] bg-[#dbe7f7]" : ""}`}
              >
                <Icon className="h-[15px] w-[15px]" strokeWidth={1.9} />
                {text}
              </div>
            ))}
            <div className="flex h-[34px] items-center gap-2.5 rounded-lg px-2.5 text-[12.5px] font-medium text-slate-700">
              <BarChart3 className="h-[15px] w-[15px]" strokeWidth={1.9} /> Reports
            </div>
            <div className="flex h-[34px] items-center gap-2.5 rounded-lg px-2.5 text-[12.5px] font-medium text-slate-700">
              <LifeBuoy className="h-[15px] w-[15px]" strokeWidth={1.9} /> Support
              <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-[#0f2b46] text-[9px] font-bold text-white">1</span>
            </div>
            <div className="flex h-[34px] items-center gap-2.5 rounded-lg px-2.5 text-[12.5px] font-medium text-slate-700">
              <User className="h-[15px] w-[15px]" strokeWidth={1.9} /> My profile
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="absolute bottom-0 left-[200px] right-6 top-[74px]">
          {/* Page header */}
          <div className="flex h-[54px] items-center justify-between">
            <div className="flex items-center gap-3">
              <div key={scene} style={{ animation: "tt-in 350ms ease-out" }}>
                <div className="text-[19px] font-bold tracking-tight text-slate-900">{headers[scene].title}</div>
                <div className="text-[11.5px] text-slate-500">
                  {headers[scene].sub} · Sample data · Client ID <span className="font-mono">100245</span>
                </div>
              </div>
            </div>
            {scene === "dashboard" && (
              <span className="flex items-center gap-1.5 rounded-lg bg-[#0f2b46] px-3.5 py-2 text-[12px] font-semibold text-white">
                <Plus className="h-3.5 w-3.5" /> New request
              </span>
            )}
          </div>

          {/* Scene viewport */}
          <div className="absolute inset-x-0 bottom-0 top-[68px] overflow-hidden">
            {scene === "dashboard" && (
              <div className="space-y-3">
                <div className="grid grid-cols-4 gap-3">
                  <Kpi icon={<LayoutGrid className="h-4 w-4 text-blue-600" />} tint="bg-blue-50" label="Assets received" value={<CountUp to={412} play={play} />} />
                  <Kpi icon={<CircleCheck className="h-4 w-4 text-emerald-600" />} tint="bg-emerald-50" label="Data sanitized / destroyed" value={<CountUp to={268} play={play} />} valueClass="text-emerald-700" />
                  <Kpi icon={<RefreshCw className="h-4 w-4 text-amber-600" />} tint="bg-amber-50" label="Recycled" value={<CountUp to={96} play={play} />} valueClass="text-amber-600" />
                  <Kpi icon={<FileText className="h-4 w-4 text-slate-600" />} tint="bg-slate-100" label="Certificates available" value={<CountUp to={41} play={play} />} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Card className="px-5 py-4">
                    <div className="text-[13px] font-semibold text-slate-900">Asset disposition</div>
                    <div className="text-[11px] text-slate-500">Where your equipment ended up</div>
                    <div className="mt-3 flex items-center gap-5">
                      <div className="relative h-[120px] w-[120px] shrink-0">
                        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                          <circle cx="60" cy="60" r={R} fill="none" stroke="#e2e8f0" strokeWidth="16" />
                          {DONUT.map((d) => {
                            const len = (d.value / DONUT_TOTAL) * C
                            const el = (
                              <circle
                                key={d.label}
                                cx="60"
                                cy="60"
                                r={R}
                                fill="none"
                                stroke={d.color}
                                strokeWidth="16"
                                strokeDasharray={`${drawn ? len : 0} ${C}`}
                                strokeDashoffset={-offset}
                                style={{ transition: "stroke-dasharray 1200ms ease-out" }}
                              />
                            )
                            offset += len
                            return el
                          })}
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-[22px] font-bold leading-none text-slate-900"><CountUp to={412} play={play} /></span>
                          <span className="mt-1 text-[9px] tracking-[0.08em] text-slate-400">ASSETS</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-2.5">
                        {DONUT.map((d) => (
                          <div key={d.label} className="flex items-center text-[11.5px]">
                            <span className="mr-2 h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: d.color }} />
                            <span className="flex-1 text-slate-700">{d.label}</span>
                            <span className="w-9 text-right tabular-nums text-slate-900">{d.value}</span>
                            <span className="w-9 text-right text-[10.5px] tabular-nums text-slate-400">{Math.round((d.value / DONUT_TOTAL) * 100)}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <Card className="px-5 py-4">
                    <div className="text-[13px] font-semibold text-slate-900">Your environmental impact</div>
                    <div className="text-[11px] text-slate-500">CO₂e avoided through reuse and recycling (EPA WARM)</div>
                    <div className="mt-3 rounded-xl bg-gradient-to-r from-[#1e7a4f] to-[#34b36a] px-4 py-3 text-white">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[28px] font-bold leading-none tabular-nums"><CountUp to={6.12} play={play} decimals={2} /></span>
                        <span className="text-[12px] font-semibold">metric tons CO₂e</span>
                      </div>
                      <div className="mt-1 text-[11px] text-white/85">13,492 lbs avoided to date</div>
                    </div>
                    <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                      <div className="rounded-lg bg-emerald-50/70 px-3 py-2 text-center ring-1 ring-emerald-100">
                        <div className="text-[15px] font-bold text-[#1e7a4f]">1</div>
                        <div className="text-[9.5px] leading-tight text-slate-500">Car off the road for a year</div>
                      </div>
                      <div className="rounded-lg bg-emerald-50/70 px-3 py-2 text-center ring-1 ring-emerald-100">
                        <div className="text-[15px] font-bold text-[#1e7a4f]"><CountUp to={282} play={play} /></div>
                        <div className="text-[9.5px] leading-tight text-slate-500">Tree seedlings grown for 10 years</div>
                      </div>
                    </div>
                    <div className="mt-2.5 text-[11.5px] font-semibold text-[#1e7a4f]">Open ESG certificate ›</div>
                  </Card>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Card className="space-y-3.5 px-5 py-4">
                    <div>
                      <div className="text-[13px] font-semibold text-slate-900">Certificates issued</div>
                      <div className="text-[11px] text-slate-500">Every device is certified by destruction, erasure or verified no-data</div>
                    </div>
                    <Bar label="Certificates of Destruction" value={24} total={41} pct={58} color="#1e7a4f" show={showBars} />
                    <Bar label="Certificates of Erasure" value={15} total={41} pct={37} color="#1f5fa8" show={showBars} />
                    <Bar label="No data device verified" value={2} total={41} pct={5} color="#94a3b8" show={showBars} />
                  </Card>
                  <Card className="space-y-3.5 px-5 py-4">
                    <div>
                      <div className="text-[13px] font-semibold text-slate-900">Processing status</div>
                      <div className="text-[11px] text-slate-500">Progress across everything you have sent us</div>
                    </div>
                    <Bar label="Completed" value={364} total={412} pct={88} color="#1e7a4f" show={showBars} />
                    <Bar label="Still in processing" value={48} total={412} pct={12} color="#e8811a" show={showBars} />
                    <Bar label="Jobs closed" value={5} total={6} pct={83} color="#0f2b46" show={showBars} />
                  </Card>
                </div>
              </div>
            )}

            {scene === "dashboard" && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#eef2f6] to-transparent" />
            )}

            {scene === "jobs" && (
              <div className="space-y-3" style={{ animation: "tt-in 400ms ease-out" }}>
                <div className="grid grid-cols-3 gap-3">
                  <Kpi icon={<Package className="h-4 w-4 text-blue-600" />} tint="bg-blue-50" label="Total jobs" value="6" />
                  <Kpi icon={<Monitor className="h-4 w-4 text-slate-600" />} tint="bg-slate-100" label="Devices collected" value="412" />
                  <Kpi icon={<Clock className="h-4 w-4 text-amber-600" />} tint="bg-amber-50" label="Still in progress" value={jobDone ? "0" : "1"} valueClass="text-amber-600" />
                </div>
                <Card className="overflow-hidden">
                  <div className="px-5 pb-3 pt-4">
                    <div className="text-[13px] font-semibold text-slate-900">All jobs</div>
                    <div className="text-[11px] text-slate-500">Select a job to open its full report and certificates</div>
                  </div>
                  <div className="grid grid-cols-[1.3fr_0.9fr_1.9fr_0.9fr_0.9fr_0.7fr] gap-2 bg-slate-50 px-5 py-2.5 text-[10px] font-semibold tracking-[0.06em] text-slate-500">
                    <span>JOB #</span><span>RECEIVED</span><span>MATERIAL</span><span className="text-right">QTY</span><span className="pl-4">STATUS</span><span />
                  </div>
                  {JOBS.map((job, i) => {
                    const done = i > 0 || jobDone
                    return (
                      <div
                        key={job.id}
                        className="grid grid-cols-[1.3fr_0.9fr_1.9fr_0.9fr_0.9fr_0.7fr] items-center gap-2 border-t border-slate-100 px-5 py-[11px] text-[11.5px]"
                        style={{ animation: `tt-in 400ms ease-out ${i * 90}ms both` }}
                      >
                        <span className="font-mono text-[11px] text-slate-800">{job.id}</span>
                        <span className="text-slate-600">{job.date}</span>
                        <span className="truncate text-slate-700">{job.material}</span>
                        <span className="text-right tabular-nums text-slate-600">{job.qty}</span>
                        <span className="pl-4">
                          {done ? (
                            <Pill className="bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                              <Check className="h-3 w-3" /> Completed
                            </Pill>
                          ) : (
                            <Pill className="bg-blue-50 text-blue-700 ring-1 ring-blue-100">In progress</Pill>
                          )}
                        </span>
                        <span className="text-right text-[11px] font-medium text-blue-600">View report ›</span>
                      </div>
                    )
                  })}
                </Card>
              </div>
            )}

            {scene === "certificates" && (
              <div className="space-y-3" style={{ animation: "tt-in 400ms ease-out" }}>
                <Card className="flex items-center gap-3 px-5 py-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600"><Info className="h-4 w-4" /></span>
                  <div className="flex-1">
                    <div className="text-[12.5px] font-semibold text-slate-900">Environmental impact certificate</div>
                    <div className="text-[11px] text-slate-500">
                      Covers your whole account: <span className="font-semibold text-emerald-700">6.12</span> metric tons CO₂e avoided (13,492 lbs) to date.
                    </div>
                  </div>
                  <span className="rounded-md bg-white px-3 py-1.5 text-[10.5px] text-slate-600 ring-1 ring-slate-200">ITIB-7QK2M4R-IT · 2026-10-06</span>
                  <span className="rounded-md bg-[#1e9e5a] px-3 py-1.5 text-[11px] font-semibold text-white">Open ESG certificate</span>
                </Card>
                <Card className="flex items-center gap-2 px-5 py-3 text-[11px]">
                  <span className="rounded-md bg-[#0f2b46] px-2.5 py-1 font-semibold text-white">All 41</span>
                  <span className="rounded-md px-2.5 py-1 font-medium text-slate-600 ring-1 ring-slate-200">Destruction 24</span>
                  <span className="rounded-md px-2.5 py-1 font-medium text-slate-600 ring-1 ring-slate-200">Erasure 15</span>
                  <span className="rounded-md px-2.5 py-1 font-medium text-slate-600 ring-1 ring-slate-200">No data device 2</span>
                  <span className="ml-auto w-[220px] rounded-md px-3 py-1 text-slate-400 ring-1 ring-slate-200">Search asset tag or certificate no...</span>
                </Card>
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-[1.45fr_1.1fr_0.95fr_1.9fr_0.8fr_0.85fr] gap-2 bg-slate-50 px-5 py-2.5 text-[10px] font-semibold tracking-[0.06em] text-slate-500">
                    <span>CERTIFICATE #</span><span>ASSET TAG</span><span>TYPE</span><span>METHOD</span><span>DATE</span><span className="text-right">DOWNLOAD</span>
                  </div>
                  {CERTS.map((c, i) => (
                    <div
                      key={c.no}
                      className={`grid grid-cols-[1.45fr_1.1fr_0.95fr_1.9fr_0.8fr_0.85fr] items-center gap-2 border-t border-slate-100 px-5 py-[11px] text-[11px] ${i === 0 ? "bg-emerald-50/60" : ""}`}
                      style={{ animation: `tt-in 400ms ease-out ${i * 90}ms both` }}
                    >
                      <span className="font-mono text-[10.5px] text-slate-800">{c.no}</span>
                      <span className="font-mono text-[10.5px] text-slate-600">{c.tag}</span>
                      <span><Pill className={TYPE_PILL[c.type]}>{c.type}</Pill></span>
                      <span className="truncate text-slate-600">{c.method}</span>
                      <span className="text-slate-600">{c.date}</span>
                      <span
                        ref={i === 0 ? setTarget("download") : undefined}
                        className={`flex items-center justify-end gap-1 font-medium transition-transform duration-200 ${i === 0 && downloaded ? "text-emerald-600" : "text-blue-600"} ${i === 0 && pressed === "download" ? "scale-90" : ""}`}
                      >
                        {i === 0 && downloaded ? <Check className="h-3.5 w-3.5" /> : <Download className="h-3.5 w-3.5" />}
                        {i === 0 && downloaded ? "Downloaded" : "Download"}
                      </span>
                    </div>
                  ))}
                </Card>
              </div>
            )}

          </div>
        </div>

        {/* AI assistant bubble, as in the portal */}
        <div className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#14576b] text-white shadow-lg">
          <MessageCircle className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-1 rounded-full bg-emerald-400 px-1 text-[8px] font-bold text-[#06210f]">AI</span>
        </div>

        </div>

        {/* Title cards */}
        {card && (
          <div
            className="absolute inset-x-0 bottom-0 top-[30px] z-30 flex flex-col items-center justify-center overflow-hidden bg-[#0b2236] text-center text-white"
            style={{ opacity: cardShown ? 1 : 0, transition: "opacity 700ms ease", pointerEvents: "none" }}
          >
            <div
              className="absolute left-1/2 top-1/2 h-[560px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: "radial-gradient(closest-side, rgba(52,179,106,0.28), rgba(52,179,106,0.08) 55%, transparent)" }}
            />
            <div key={card.key} className="relative flex flex-col items-center">
              {card.kind === "intro" ? (
                <Image src={integritradeLogo} alt="" className="h-auto w-[300px]" style={{ animation: "tt-word 700ms ease-out both" }} />
              ) : (
                <div className="flex items-center gap-2.5" style={{ animation: "tt-word 700ms ease-out both" }}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                    <Image src={integritradeMark} alt="" width={26} height={26} className="h-auto w-[26px]" />
                  </span>
                  <span className="text-[20px] font-bold tracking-tight">TraceTech</span>
                </div>
              )}

              <div className={`mt-7 font-bold leading-[1.05] tracking-[-0.02em] ${card.kind === "intro" ? "text-[50px]" : "text-[56px]"}`}>
                <Words words={card.kind === "intro" ? ["Your", "Assets", "Left", "the", "Building."] : ["Every", "Asset."]} start={300} />
                <Words words={card.kind === "intro" ? ["Your", "Visibility", "Didn’t."] : ["Fully", "Accounted", "For."]} start={card.kind === "intro" ? 1000 : 640} green />
              </div>

              <p className="mt-6 max-w-[560px] text-[16px] leading-relaxed text-white/75" style={{ animation: "tt-word 700ms ease-out 1250ms both" }}>
                {card.kind === "intro"
                  ? "Meet TraceTech, the client portal behind every Integritrade project."
                  : "Live tracking, serialized certificates and audit-ready reports, from pickup to final disposition."}
              </p>

              {card.kind === "outro" && (
                <span
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-semibold text-white ring-1 ring-white/20"
                  style={{ animation: "tt-word 700ms ease-out 1600ms both" }}
                >
                  <Check className="h-3.5 w-3.5 text-emerald-300" /> Included at no cost for ITAD clients
                </span>
              )}
            </div>
          </div>
        )}

        {/* Cursor (stage coordinates, so it can sit over the whole window) */}
        {play > 0 && (
          <div
            className="pointer-events-none absolute left-0 top-0 z-40 will-change-transform"
            style={{
              transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
              opacity: cursor.visible ? 1 : 0,
              transition: `transform ${CURSOR_MS}ms cubic-bezier(0.45, 0, 0.2, 1), opacity 300ms ease`,
            }}
          >
            {cursor.click > 0 && (
              <span
                key={cursor.click}
                className="absolute left-[2px] top-[1.5px] h-12 w-12 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(52,179,106,0.55) 0%, rgba(52,179,106,0.22) 42%, rgba(52,179,106,0) 70%)",
                  animation: "tt-ripple 650ms cubic-bezier(0.2, 0.7, 0.2, 1) forwards",
                }}
              />
            )}
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              className="relative origin-[2px_1.5px] drop-shadow-md transition-transform duration-150 ease-out"
              style={{ transform: pressed ? "scale(0.82)" : "none" }}
            >
              <path d="M2 1.5 L2 17.5 L6.4 13.6 L9.3 20.2 L12.2 19 L9.4 12.5 L15.3 12.5 Z" fill="#0f172a" stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
