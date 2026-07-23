"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"
import createGlobe, { COBEOptions } from "cobe"
import Image, { type StaticImageData } from "next/image"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import logo from "@/public/logo/integritrade-favicon.png"

import Iso9001 from "@/public/ISO/ISO-9001.webp"
import Iso14001 from "@/public/ISO/ISO-14001.webp"
import Iso27001 from "@/public/ISO/ISO-27001.webp"
import Iso45001 from "@/public/ISO/ISO-45001.webp"
import R2v3 from "@/public/ISO/r2v3.png"
import Nist from "@/public/ISO/nist-800-88.jpg"

import { cn } from "@/lib/utils"
import Link from "next/link"

type Service = {
  image: StaticImageData
  alt: string
  label: string
  angle: number
  description: string
}

type MarkerAnchorStyle = CSSProperties & {
  positionAnchor: string
  opacity: string
}

const FRESNO_HEADQUARTERS = {
  id: "fresno-headquarters",
  label: "Fresno Headquarters",
  address: "1945 N Fine Ave, STE 111",
  location: [36.7686, -119.7303] as [number, number],
}

function locationToAngles(latitude: number, longitude: number) {
  return [
    Math.PI - ((longitude * Math.PI) / 180 - Math.PI / 2),
    (latitude * Math.PI) / 180,
  ] as const
}

const [FRESNO_PHI, FRESNO_THETA] = locationToAngles(
  FRESNO_HEADQUARTERS.location[0],
  FRESNO_HEADQUARTERS.location[1]
)

const SERVICES: Service[] = [
  {
    image: R2v3,
    alt: "R2v3 certified",
    label: "R2v3\nCERTIFIED",
    angle: -90,
    description:
      "Responsible Recycling (R2v3) certification verifies secure electronics reuse, recycling practices, and responsible downstream management.",
  },
  {
    image: Iso14001,
    alt: "ISO 14001",
    label: "ISO 14001\nENVIRONMENT",
    angle: -30,
    description:
      "ISO 14001 certification demonstrates our commitment to environmental management and sustainable electronics recycling practices.",
  },
  {
    image: Iso27001,
    alt: "ISO 27001",
    label: "ISO 27001\nINFO SECURITY",
    angle: 30,
    description:
      "ISO 27001 certification confirms our information security management system protects sensitive data throughout our processes.",
  },
  {
    image: Iso45001,
    alt: "ISO 45001",
    label: "ISO 45001\nHEALTH & SAFETY",
    angle: 90,
    description:
      "ISO 45001 certification ensures a structured occupational health and safety management system for our workplace.",
  },
  {
    image: Iso9001,
    alt: "ISO 9001",
    label: "ISO 9001\nQUALITY",
    angle: 150,
    description:
      "ISO 9001 certification confirms our quality management system focuses on consistent service delivery and continual improvement.",
  },
  {
    image: Nist,
    alt: "NIST 800-88",
    label: "NIST 800-88\nDATA SANITIZATION",
    angle: 210,
    description:
      "NIST 800-88 provides recognized guidelines for secure data sanitization and permanent information removal.",
  },
]

const BASE_CONFIG: Omit<
  COBEOptions,
  "dark" | "baseColor" | "markerColor" | "glowColor" | "mapBrightness" | "diffuse"
> = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: FRESNO_PHI,
  theta: FRESNO_THETA,
  mapSamples: 16000,
  markerElevation: 0.03,
  markers: [
    {
      id: FRESNO_HEADQUARTERS.id,
      location: FRESNO_HEADQUARTERS.location,
      size: 0.04,
      color: [0.1, 0.8, 0.5],
    },
  ],
}
const LIGHT_CONFIG: COBEOptions = {
  ...BASE_CONFIG,
  dark: 0,
  diffuse: 1.2,
  mapBrightness: 1.4,
  baseColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  glowColor: [1, 1, 1],
}

const DARK_CONFIG: COBEOptions = {
  ...BASE_CONFIG,
  dark: 1,
  diffuse: 3,
  mapBrightness: 8,
  baseColor: [0.35, 0.35, 0.33],
  markerColor: [0.1, 0.8, 0.5],
  glowColor: [0.173, 0.173, 0.165],
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
  const phi = useRef(FRESNO_PHI)
  const width = useRef(0)
  const pointerInteracting = useRef<number | null>(null)
  const pointerMovement = useRef(0)
  const r = useRef(0)
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
      if (pointerInteracting.current === null) {
        phi.current += 0.003
      }
      globe.update({
        phi: phi.current + r.current,
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

  const onPointerDown = (clientX: number) => {
    pointerInteracting.current = clientX - pointerMovement.current
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
  }

  const onPointerUp = () => {
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
  }

  const onPointerMove = (clientX: number) => {
    if (pointerInteracting.current === null) return
    const delta = clientX - pointerInteracting.current
    pointerMovement.current = delta
    r.current = delta / 200
  }

  return (
    <TooltipPrimitive.Provider delayDuration={150}>
      <div
        className={cn(
          "relative mx-auto aspect-square w-full max-w-[720px]",
          className
        )}
      >
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full text-gray-300 dark:text-[#3a3a37]"
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
            <ellipse cx="100" cy="30" rx="82" ry="14" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
            <ellipse cx="100" cy="30" rx="68" ry="11" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
            <ellipse cx="100" cy="30" rx="55" ry="8" fill="none" stroke="currentColor" strokeWidth="0.25" opacity="0.2" />
            <ellipse cx="100" cy="30" rx="42" ry="6" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.15" />
          </svg>
        </div>

        <div className="absolute inset-[22%]">
          <canvas
            ref={canvasRef}
            className="h-full w-full cursor-grab opacity-0 transition-opacity duration-700 [contain:layout_paint_size]"
            onPointerDown={(e) => onPointerDown(e.clientX)}
            onPointerUp={onPointerUp}
            onPointerOut={onPointerUp}
            onMouseMove={(e) => onPointerMove(e.clientX)}
            onTouchStart={(e) => e.touches[0] && onPointerDown(e.touches[0].clientX)}
            onTouchEnd={onPointerUp}
            onTouchMove={(e) => e.touches[0] && onPointerMove(e.touches[0].clientX)}
          />
        </div>

        <div
          aria-label={`${FRESNO_HEADQUARTERS.label}, ${FRESNO_HEADQUARTERS.address}, Fresno, California`}
          className="fresno-headquarters-marker pointer-events-none z-20 flex items-center"
          style={
            {
              positionAnchor: `--cobe-${FRESNO_HEADQUARTERS.id}`,
              opacity: `var(--cobe-visible-${FRESNO_HEADQUARTERS.id}, 0)`,
            } as MarkerAnchorStyle
          }
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-amber-300 bg-white shadow-md dark:border-amber-500 sm:h-7 sm:w-7">
            <Image
              src={logo}
              alt="Integritrade"
              width={22}
              height={22}
              className="object-contain"
            />
          </span>

          <span className="h-px w-3 bg-amber-500 sm:w-4" aria-hidden="true" />

          <span className="rounded-md border border-gray-200 bg-white px-2 py-1 shadow-md dark:border-gray-700  sm:px-2.5 sm:py-1.5">
            <span className="block whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.08em] text-gray-950  sm:text-[10px]">
              {FRESNO_HEADQUARTERS.label}
            </span>
            <span className="hidden whitespace-nowrap text-[8px] text-gray-600  sm:block sm:text-[9px]">
              Fresno, California
            </span>
          </span>
        </div>

        {SERVICES.map((service, i) => {
          const rad = (service.angle * Math.PI) / 180
          const radius = 44
          const x = 50 + radius * Math.cos(rad)
          const y = 50 + radius * Math.sin(rad)
          const name = service.label.replace("\n", " ")

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
              <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                  <button
                    type="button"
                    className="
                      relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full
                      border border-gray-200 bg-white
                      shadow-[0_4px_14px_-2px_rgba(0,0,0,0.12)]
                      transition-transform duration-200
                      hover:scale-105 hover:shadow-[0_6px_18px_-2px_rgba(0,0,0,0.18)]
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500
                      dark:border-gray-700
                      dark:shadow-[0_4px_14px_-2px_rgba(0,0,0,0.6)]
                      sm:h-16 sm:w-16
                    "
                  >
<Link
  href="/certifications/"
  className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-white sm:h-16 sm:w-16"
>
  <Image
    src={service.image}
    alt={service.alt}
    fill
    sizes="64px"
    className="object-contain p-1.5"
  />
</Link>
                  </button>
                </TooltipPrimitive.Trigger>

                <TooltipPrimitive.Portal>
                  <TooltipPrimitive.Content
                    side="top"
                    sideOffset={8}
                    className="
                      z-50 max-w-xs rounded-lg border border-gray-200 bg-white p-3
                      shadow-lg
                      dark:border-gray-600 dark:bg-dark-secondary
                      data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95
                    "
                  >
                    <p className="text-sm font-semibold text-black dark:text-white">
                      {name}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                    <TooltipPrimitive.Arrow className="fill-white dark:fill-gray-900" />
                  </TooltipPrimitive.Content>
                </TooltipPrimitive.Portal>
              </TooltipPrimitive.Root>

              <div
                className="
                  pointer-events-none whitespace-pre text-center
                  text-[9px] font-bold leading-tight tracking-[0.08em]
                  text-black dark:text-white
                  sm:text-[10px] md:text-xs
                "
              >
                {service.label}
              </div>
            </div>
          )
        })}

        <style>{`
  .fresno-headquarters-marker {
    position: absolute;
    left: anchor(center);
    top: anchor(center);
    translate: -12px -50%;
    transition: opacity 180ms ease;
    will-change: left, top;
    contain: paint;
  }

  @keyframes nodeIn {
    from { opacity: 0; transform: translate(-50%, -50%) scale(0.85); }
    to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
  }
`}</style>
      </div>
    </TooltipPrimitive.Provider>
  )
}