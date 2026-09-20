"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  /** Vertical drift, as a fraction of viewport travel. 0.1 is subtle. */
  speed?: number;
  /** Degrees of rotateX applied while the element is still below centre. */
  tilt?: number;
};

/**
 * Scroll-linked drift (and optional tilt) for showcase imagery.
 *
 * Follows the same rules as ScrollLoader: the server-rendered markup carries no
 * transform at all, so content is correct and visible even if JavaScript never
 * runs. Transforms are applied only from an effect, are skipped entirely for
 * `prefers-reduced-motion`, and are cleared on unmount.
 *
 * Work is confined to frames where the element is actually on screen: an
 * IntersectionObserver gates the scroll listener, and updates are coalesced
 * into a single requestAnimationFrame so scrolling stays smooth.
 */
export default function Parallax({
  children,
  className = "",
  speed = 0.1,
  tilt = 0,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let onScreen = false;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;

      // +1 when the element sits a full screen below centre, 0 at centre,
      // -1 once it has travelled the same distance above.
      const distance = rect.top + rect.height / 2 - viewport / 2;
      const range = viewport / 2 + rect.height / 2;
      const progress = Math.max(-1, Math.min(1, distance / range));

      // Whole pixels only. A fractional translate (12.37px) lands the promoted
      // layer off the device pixel grid, and the browser resamples everything
      // inside it — which showed up as a visibly soft dashboard screenshot on
      // /tracetech/ while the same file opened in a tab was sharp. Rounding
      // costs nothing perceptually at these speeds and keeps text crisp.
      const shift = Math.round(progress * speed * 100);
      const angle = tilt ? Math.max(0, progress) * tilt : 0;

      el.style.transform = angle
        ? `perspective(1200px) translate3d(0, ${shift}px, 0) rotateX(${angle.toFixed(2)}deg)`
        : `translate3d(0, ${shift}px, 0)`;
    };

    const request = () => {
      if (!frame && onScreen) frame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) request();
        else if (frame) {
          cancelAnimationFrame(frame);
          frame = 0;
        }
      },
      { threshold: 0 }
    );

    observer.observe(el);
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (frame) cancelAnimationFrame(frame);
      el.style.transform = "";
    };
  }, [speed, tilt]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
