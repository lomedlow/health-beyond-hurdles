"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-triggered entrance for a block of content. The travel distance is
 * deliberately generous (a third of a heading's height, not a few pixels)
 * so the arrival is legible on a phone, where hover states don't exist and
 * scrolling is the only interaction.
 *
 * `viewport.once` is false on purpose: the piece must play again every
 * time it's scrolled to, in either direction, not just the first time.
 * `exit` mirrors `initial` so the element visibly resets as it leaves the
 * viewport, instead of just snapping back invisibly for the next entrance.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 36,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const hidden = {
    opacity: 0,
    y: shouldReduceMotion ? 0 : y,
    scale: shouldReduceMotion ? 1 : 0.96,
    filter: shouldReduceMotion ? "blur(0px)" : "blur(6px)",
  };

  return (
    <motion.div
      initial={hidden}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={hidden}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: shouldReduceMotion ? 0 : stagger },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 32,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: shouldReduceMotion ? 0 : y,
          scale: shouldReduceMotion ? 1 : 0.95,
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
