"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";

/**
 * A heading whose words rise into place one after another from behind a
 * mask, the way a title card resolves. Each word sits in its own
 * overflow-hidden box, so the motion reads as the text arriving rather
 * than simply fading in.
 *
 * The scroll trigger lives on the wrapper, not on the words: a word
 * starts translated fully below its mask, so an IntersectionObserver on
 * the word itself sees a clipped, empty rect and never fires, leaving the
 * heading invisible forever. The wrapper is unclipped, so it observes
 * correctly and drives the words through variant propagation.
 *
 * The text stays a single readable string for screen readers and for
 * copy/paste; only the visual boxes are split.
 */
export function AnimatedHeading({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.045,
  duration = 0.75,
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(" ");

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: stagger, delayChildren: delay },
          },
        }}
      >
        {words.map((word, i) => (
          <Fragment key={`${word}-${i}`}>
            {/* pb/-mb keeps descenders (g, p, y) from being clipped by the mask */}
            <span className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom">
              <motion.span
                className="inline-block"
                variants={{
                  hidden: { y: "115%" },
                  visible: {
                    y: "0%",
                    transition: { duration, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {word}
              </motion.span>
            </span>
            {i < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </motion.span>
    </Tag>
  );
}
