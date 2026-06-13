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
      <span className="relative">{children}</span>

      <span className="inline-flex items-center justify-center w-4 h-4 rounded-md transition-colors duration-300">
        {loading ? (
          <Loader2 className="h-2.5 w-2.5 animate-spin text-gray-700 dark:text-gray-300" strokeWidth={2.5} />
        ) : (
          <ChevronRight
            className="h-2.5 w-2.5 text-gray-700 dark:text-gray-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400
            transition-all duration-500 ease-out"
            strokeWidth={2.5}
          />
        )}
      </span>
    </>
  )

  const classes = cn(
    "px-4 py-2.5 text-xs font-semibold rounded-md h-auto",
    "border border-gray-300 bg-transparent text-black",
    "dark:bg-dark-secondary dark:border-gray-700 dark:text-gray-200",
    "transition-all duration-300 hover:scale-[1.02]",
    "active:scale-[0.97] active:brightness-90",
    "hover:border-emerald-600/60 hover:bg-emerald-50/50",
    "dark:hover:border-emerald-400/40 dark:hover:bg-emerald-900/10",
    "group relative",
    "disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100",
    className
  )

  if (href) {
    return (
      <Button asChild variant="outline" className={classes} data-testid={testId}>
        <Link
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2"
        >
          {content}
        </Link>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={cn(classes, "inline-flex items-center gap-2")}
      data-testid={testId}
    >
      {content}
    </Button>
  )
}