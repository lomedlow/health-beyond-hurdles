"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * A thin brand-colored bar across the very top of the window that tracks
 * how far down the page the reader is. Sits above the sticky header.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: shouldReduceMotion ? scrollYProgress : smoothed }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-500 to-brand-300"
    />
  );
}
