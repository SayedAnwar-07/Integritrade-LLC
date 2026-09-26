import type { ReactNode } from "react";

type ScrollLoaderProps = {
  children: ReactNode;
  className?: string;
  /** No longer used; kept so existing call sites compile. */
  delay?: number;
};

/**
 * Used to fade blocks in as they scrolled into view. Ian asked on 2026-09-26
 * for pages to load all at once instead ("I don't like the disappearing
 * animation thing where you scroll down and the page loads"), so it now
 * renders its children straight away, with no fade and no delay.
 *
 * It stays as a plain wrapper rather than being removed because 74 files use
 * it, and the wrapper div keeps their layout exactly as it was.
 */
export default function ScrollLoader({ children, className = "" }: ScrollLoaderProps) {
  return <div className={className}>{children}</div>;
}
