"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PrimaryButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  testId?: string
  external?: boolean
}

export default function PrimaryButton({
  href,
  children,
  className,
  testId,
  external = false,
}: PrimaryButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "btn-bg btn-hover-bg text-white px-4 py-2.5 text-xs font-semibold tracking-wide rounded-md",
        "relative overflow-hidden transition-all duration-300 hover:scale-[1.02]",
        "active:scale-[0.97] active:brightness-90",
        "group h-auto",
        className
      )}
      data-testid={testId}
    >
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="inline-flex items-center gap-2"
      >
        {/* Label */}
        <span className="relative z-10">{children}</span>

        {/* Icon container — diagonal arrow with track */}
        <span className="relative z-10 inline-flex items-center justify-center w-4 h-4 rounded-md bg-white/15 group-hover:bg-white/25 transition-colors duration-300 overflow-hidden">
          <ArrowUpRight
            className="h-2.5 w-2.5 absolute transition-all duration-500 ease-out
            group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-0"
            strokeWidth={2.5}
          />
          <ArrowUpRight
            className="h-2.5 w-2.5 absolute transition-all duration-500 ease-out
            -translate-x-2 translate-y-2 opacity-0
            group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
            strokeWidth={2.5}
          />
        </span>

        {/* Subtle shine sweep on hover */}
        <span
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
          aria-hidden
        />
      </Link>
    </Button>
  )
}