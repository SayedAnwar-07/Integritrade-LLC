"use client";

import { useState } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "never";

interface ReadMoreProps {
  children: React.ReactNode;
  previewLines?: 2 | 3 | 4 | 5 | 6;
  /** Breakpoint at which content is always fully shown and the button is hidden. Default: "never". */
  expandAt?: Breakpoint;
}

const clampMap: Record<number, Record<Breakpoint, string>> = {
  2: {
    never: "line-clamp-2",
    sm: "line-clamp-2 sm:line-clamp-none",
    md: "line-clamp-2 md:line-clamp-none",
    lg: "line-clamp-2 lg:line-clamp-none",
    xl: "line-clamp-2 xl:line-clamp-none",
  },
  3: {
    never: "line-clamp-3",
    sm: "line-clamp-3 sm:line-clamp-none",
    md: "line-clamp-3 md:line-clamp-none",
    lg: "line-clamp-3 lg:line-clamp-none",
    xl: "line-clamp-3 xl:line-clamp-none",
  },
  4: {
    never: "line-clamp-4",
    sm: "line-clamp-4 sm:line-clamp-none",
    md: "line-clamp-4 md:line-clamp-none",
    lg: "line-clamp-4 lg:line-clamp-none",
    xl: "line-clamp-4 xl:line-clamp-none",
  },
  5: {
    never: "line-clamp-5",
    sm: "line-clamp-5 sm:line-clamp-none",
    md: "line-clamp-5 md:line-clamp-none",
    lg: "line-clamp-5 lg:line-clamp-none",
    xl: "line-clamp-5 xl:line-clamp-none",
  },
  6: {
    never: "line-clamp-6",
    sm: "line-clamp-6 sm:line-clamp-none",
    md: "line-clamp-6 md:line-clamp-none",
    lg: "line-clamp-6 lg:line-clamp-none",
    xl: "line-clamp-6 xl:line-clamp-none",
  },
};

const buttonHideMap: Record<Breakpoint, string> = {
  never: "",
  sm: "sm:hidden",
  md: "md:hidden",
  lg: "lg:hidden",
  xl: "xl:hidden",
};

export default function ReadMore({
  children,
  previewLines = 4,
  expandAt = "never",
}: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div className={!expanded ? clampMap[previewLines][expandAt] : ""}>
        {children}
      </div>

      <div className={`text-end ${buttonHideMap[expandAt]}`}>
        <button
          type="button"
          onClick={() => setExpanded(prev => !prev)}
          aria-expanded={expanded}
          className="mt-5 inline-flex items-center gap-2 text-[13px] text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors font-semibold"
        >
          <span>{expanded ? "Show less" : "Read more"}</span>
          <svg
            width="11"
            height="11"
            viewBox="0 0 9 9"
            fill="none"
            aria-hidden="true"
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          >
            <path
              d="M2 3.25L4.5 5.75L7 3.25"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}