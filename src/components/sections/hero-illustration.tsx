"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Two soft gradient blobs behind the hero copy. Each one does two things
 * at once: a slow continuous drift (ambient life behind static text) and
 * a scroll-linked parallax, so the background moves at a different rate
 * than the words in front of it.
 *
 * The two motions live on nested elements on purpose: the outer element
 * owns the scroll transform, the inner one owns the looping drift, so
 * they don't fight over the same transform property.
 */
export function HeroIllustration() {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const slowDrift = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fastDrift = useTransform(scrollYProgress, [0, 1], [0, -90]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        className="absolute -top-40 right-[-10%]"
        style={shouldReduceMotion ? undefined : { y: slowDrift }}
      >
        <motion.div
          className="h-[620px] w-[620px] rounded-full opacity-60 blur-3xl dark:opacity-25"
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
      </motion.div>

      <motion.div
        className="absolute -bottom-32 left-[-8%]"
        style={shouldReduceMotion ? undefined : { y: fastDrift }}
      >
        <motion.div
          className="h-[420px] w-[420px] rounded-full opacity-40 blur-3xl dark:opacity-20"
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
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
