"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Two soft gradient blobs behind the hero copy. They drift slowly and
 * continuously, an ambient bit of life behind static text, well under the
 * threshold where it would compete for attention. Reduced-motion readers
 * get the same blobs, just still.
 */
export function HeroIllustration() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        className="absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full opacity-60 blur-3xl dark:opacity-25"
        style={{
          background:
            "radial-gradient(circle, var(--color-brand-200) 0%, transparent 70%)",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, 24, 0], y: [0, 30, 0], scale: [1, 1.06, 1] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 left-[-8%] h-[420px] w-[420px] rounded-full opacity-40 blur-3xl dark:opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-peach-soft) 0%, transparent 70%)",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : { x: [0, -20, 0], y: [0, -24, 0], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
