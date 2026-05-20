"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"

import serviceAreaMap from "@/public/services/serviceAreaMap.png"
import serviceAreaMapDark from "@/public/services/serviceAreaMapDark.png"

export default function ServiceMap() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const mapImage =
    resolvedTheme === "dark" ? serviceAreaMapDark : serviceAreaMap

  return (
    <div className="overflow-hidden rounded-md">
      <Image
        src={mapImage}
        alt="Integritrade California service area map"
        className="h-auto w-full object-cover"
        priority
      />
    </div>
  )
}