"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollLoaderProps = {
  children: ReactNode;
  className?: string;
  /** Stagger, in seconds, for items revealed together. */
  delay?: number;
};

/**
 * Fades content in as it scrolls into view.
 *
 * Two rules this component has to respect, both learned the hard way:
 *
 * 1. Content is VISIBLE unless JavaScript has taken over. The previous version
 *    set opacity:0 in the server-rendered markup, so anyone whose JS failed,
 *    was slow, or was blocked saw a blank page — and if the reveal never fired,
 *    it stayed blank forever. Hidden state is now applied only from an effect,
 *    which cannot run unless JS is alive to undo it.
 *
 * 2. The trigger fires when ANY part of the block is on screen. A previous
 *    threshold of "15% of the element" could never be met by a block taller
 *    than ~6x the viewport, which blanked 120 city service pages for four days.
 *
 * Anything already on screen at mount is left alone rather than hidden and
 * re-shown, so there is no flash of disappearing content on load.
 */
export default function ScrollLoader({
  children,
  className = "",
  delay = 0,
}: ScrollLoaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"static" | "hidden" | "shown">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect the OS setting: no animation, content simply stays visible.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already in view on mount — showing then hiding it would flash.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    setPhase("hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPhase("shown");
        observer.disconnect();
      },
      // threshold 0: any sliver of the block counts, however tall it is.
      { threshold: 0, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style =
    phase === "static"
      ? undefined
      : {
          opacity: phase === "shown" ? 1 : 0,
          transform: phase === "shown" ? "none" : "translateY(16px)",
          transition: `opacity 350ms ease-out ${delay}s, transform 350ms ease-out ${delay}s`,
          willChange: phase === "hidden" ? ("opacity, transform" as const) : undefined,
        };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
