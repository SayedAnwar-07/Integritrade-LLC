"use client"

import { useEffect, useRef, useState } from "react"
import createGlobe, { COBEOptions } from "cobe"
import {
  Truck,
  Recycle,
  BadgeCheck,
  ClipboardList,
  HardDrive,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"


type Service = {
  icon: LucideIcon
  label: string
  angle: number
}

const SERVICES: Service[] = [
  { icon: Truck,         label: "SECURE\nCOLLECTION",          angle: -90 },
  { icon: Recycle,       label: "RESPONSIBLE\nRECYCLING",      angle: -32 },
  { icon: BadgeCheck,    label: "COMPLIANCE\n& CERTIFICATION", angle:  32 },
  { icon: ClipboardList, label: "AUDIT TRAIL &\nREPORTING",    angle: 148 },
  { icon: HardDrive,     label: "CERTIFIED DATA\nDESTRUCTION", angle: 212 },
]


const BASE_CONFIG: Omit <
  COBEOptions,
  "dark" | "baseColor" | "markerColor" | "glowColor" | "mapBrightness"
> = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.25,
  diffuse: 1.2,
  mapSamples: 16000,
}

const LIGHT_CONFIG: COBEOptions = {
  ...BASE_CONFIG,
  dark: 0,
  mapBrightness: 1.4,
  baseColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  glowColor: [1, 1, 1],
}

const DARK_CONFIG: COBEOptions = {
  ...BASE_CONFIG,
  dark: 1,
  mapBrightness: 1.4,
  baseColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  glowColor: [1, 1, 1],
}

function useIsDark() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"))
    check()

    const observer = new MutationObserver(check)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })
    return () => observer.disconnect()
  }, [])

  return isDark
}


export function ItadGlobe({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phi = useRef(0)
  const width = useRef(0)
  const isDark = useIsDark()

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) width.current = canvasRef.current.offsetWidth
    }
    window.addEventListener("resize", onResize)
    onResize()

    const config = isDark ? DARK_CONFIG : LIGHT_CONFIG

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width.current * 2,
      height: width.current * 2,
    })

    let rafId = 0
    const tick = () => {
      phi.current += 0.003
      globe.update({
        phi: phi.current,
        width: width.current * 2,
        height: width.current * 2,
      })
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    setTimeout(() => {
      if (canvasRef.current) canvasRef.current.style.opacity = "1"
    }, 0)

    return () => {
      cancelAnimationFrame(rafId)
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [isDark])

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[720px]",
        className
      )}
    >
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-gray-300 dark:text-gray-700"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <ellipse
          cx="50" cy="50" rx="46" ry="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.15"
          strokeDasharray="0.4 0.6"
        />
        <ellipse
          cx="50" cy="52" rx="38" ry="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.15"
          strokeDasharray="0.4 0.6"
        />
      </svg>

      <div className="pointer-events-none absolute inset-x-0 bottom-[14%] flex justify-center">
        <svg
          viewBox="0 0 200 60"
          className="w-[62%] text-gray-300 dark:text-gray-700"
          aria-hidden
        >
          <ellipse cx="100" cy="30" rx="82" ry="14" fill="none" stroke="currentColor" strokeWidth="0.4"  opacity="0.9" />
          <ellipse cx="100" cy="30" rx="68" ry="11" fill="none" stroke="currentColor" strokeWidth="0.3"  opacity="0.7" />
          <ellipse cx="100" cy="30" rx="55" ry="8"  fill="none" stroke="currentColor" strokeWidth="0.25" opacity="0.5" />
          <ellipse cx="100" cy="30" rx="42" ry="6"  fill="none" stroke="currentColor" strokeWidth="0.2"  opacity="0.3" />
        </svg>
      </div>
      <div className="absolute inset-[22%]">
        <canvas
          ref={canvasRef}
          className="h-full w-full opacity-0 transition-opacity duration-700 [contain:layout_paint_size]"
        />
      </div>

      {SERVICES.map((service, i) => {
        const rad = (service.angle * Math.PI) / 180
        const r = 44 // % from centre
        const x = 50 + r * Math.cos(rad)
        const y = 50 + r * Math.sin(rad)
        const Icon = service.icon

        return (
          <div
            key={service.label}
            className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 sm:gap-2"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              animation: `nodeIn 700ms cubic-bezier(.2,.7,.2,1) ${i * 90}ms both`,
            }}
          >
            {/* icon disc */}
            <div
              className="
                relative flex h-11 w-11 items-center justify-center rounded-full
                border border-gray-200 bg-gray-50
                shadow-[0_4px_14px_-2px_rgba(0,0,0,0.12)]
                dark:border-gray-800 dark:bg-dark-secondary
                dark:shadow-[0_4px_14px_-2px_rgba(0,0,0,0.6)]
                sm:h-14 sm:w-14
              "
            >
              <Icon
                className="h-5 w-5 text-black dark:text-white sm:h-6 sm:w-6 md:h-7 md:w-7"
                strokeWidth={1.6}
                aria-hidden
              />
            </div>

            <div
              className="
                max-w-[88px] whitespace-pre-line text-center
                text-[9px] font-bold leading-tight tracking-[0.08em]
                text-black dark:text-white
                sm:max-w-[110px] sm:text-[10px] md:text-xs
              "
            >
              {service.label}
            </div>
          </div>
        )
      })}

      <style>{`
        @keyframes nodeIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.85); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  )
}