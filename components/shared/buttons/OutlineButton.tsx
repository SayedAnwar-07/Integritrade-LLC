"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface OutlineButtonProps {
  href?: string
  children: React.ReactNode
  className?: string
  testId?: string
  external?: boolean
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  loading?: boolean
}

export default function OutlineButton({
  href,
  children,
  className,
  testId,
  external = false,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
}: OutlineButtonProps) {
  const isDisabled = disabled || loading

  const content = (
    <>
      <span className="relative z-10">{children}</span>

      <span className="relative z-10 inline-flex items-center justify-center w-4 h-4 transition-colors duration-300 overflow-hidden">
        {loading ? (
          <Loader2 className="h-2.5 w-2.5 animate-spin" strokeWidth={2.5} />
        ) : (
          <>
            <ChevronRight
              className="h-2.5 w-2.5 absolute transition-all duration-500 ease-out group-hover:opacity-0"
              strokeWidth={2.5}
            />
            <ChevronRight
              className="h-2.5 w-2.5 absolute transition-all duration-500 ease-out opacity-0
              group-hover:opacity-100"
              strokeWidth={2.5}
            />
          </>
        )}
      </span>

      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
        aria-hidden
      />
    </>
  )

  const classes = cn(
    "!bg-brand-accent hover:!bg-[hsl(var(--brand-accent-hover))] !text-white",
    "px-4 py-2.5 text-xs font-semibold tracking-wide rounded-md",
    "relative overflow-hidden transition-all duration-300 hover:scale-[1.01]",
    "active:scale-[0.97] active:brightness-90",
    "group h-auto",
    "disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100",
    className
  )

  if (href) {
    return (
      <Button asChild className={classes} data-testid={testId}>
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center justify-between w-full lg:w-auto lg:justify-center gap-2" // inline-flex items-center gap-2
        >
          {content}
        </Link>
      </Button>
    )
  }

  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={cn(classes, "inline-flex items-center justify-between w-full lg:w-auto lg:justify-center gap-2")}
      data-testid={testId}
    >
      {content}
    </Button>
  )
}