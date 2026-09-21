"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * The short rule that precedes an eyebrow label. It draws itself out from
 * the left when the section scrolls into view and retracts when it
 * leaves, a small consistent beat that repeats every time you pass it,
 * down every page.
 */
export function EyebrowRule({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className={cn("block h-px w-8 origin-left bg-brand-500", className)}
      initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
