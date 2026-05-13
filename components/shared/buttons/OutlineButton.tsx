"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface OutlineButtonProps {
  href: string
  children: React.ReactNode
  className?: string
  testId?: string
  external?: boolean
}

export default function OutlineButton({
  href,
  children,
  className,
  testId,
  external = false,
}: OutlineButtonProps) {
  return (
    <Button
      asChild
      variant="outline"
      className={cn(
        "px-4 py-2.5 text-xs font-semibold rounded-md h-auto",
        "border border-gray-300 bg-transparent text-black",
        "dark:bg-[#02222e] dark:border-gray-700 dark:text-gray-200",
        "transition-all duration-300 hover:scale-[1.02]",
        "active:scale-[0.97] active:brightness-90",
        "hover:border-emerald-600/60 hover:bg-emerald-50/50",
        "dark:hover:border-emerald-400/40 dark:hover:bg-emerald-900/10",
        "group relative",
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
        <span className="relative">{children}</span>

        {/* Icon container — rotating plus that becomes an X-cross */}
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-md border border-gray-300 dark:border-gray-600 group-hover:border-emerald-600 dark:group-hover:border-emerald-400 transition-colors duration-300">
          <Plus
            className="h-2.5 w-2.5 text-gray-700 dark:text-gray-300 group-hover:text-emerald-700 dark:group-hover:text-emerald-400
            transition-all duration-500 ease-out
            group-hover:rotate-[135deg]"
            strokeWidth={2.5}
          />
        </span>
      </Link>
    </Button>
  )
}