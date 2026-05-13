"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type ScrollLoaderProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
};

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

export default function ScrollLoader({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  y = 40,
  once = true,
}: ScrollLoaderProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        filter: "blur(6px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once,
        amount: 0.18,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}