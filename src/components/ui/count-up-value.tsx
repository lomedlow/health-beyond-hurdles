"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useReducedMotion, animate } from "framer-motion";

/**
 * Splits a stat string like "53%", "53 %", or "$1,200" into a numeric run
 * to animate and the literal text around it, so the count-up lands on
 * exactly the string the page was given, digit for digit.
 */
function splitNumeric(value: string) {
  const match = value.match(/(\d[\d,]*)(\.\d+)?/);
  if (!match) return null;
  const [whole, intPart, decPart] = match;
  const start = match.index ?? 0;
  return {
    prefix: value.slice(0, start),
    suffix: value.slice(start + whole.length),
    target: Number((intPart + (decPart ?? "")).replace(/,/g, "")),
    decimals: decPart ? decPart.length - 1 : 0,
    hasCommas: intPart.includes(","),
  };
}

function formatCount(n: number, decimals: number, hasCommas: boolean) {
  const fixed = n.toFixed(decimals);
  if (!hasCommas) return fixed;
  const [int, dec] = fixed.split(".");
  return int.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (dec ? "." + dec : "");
}

/**
 * Renders `value` as-is, but if it contains a number, counts up to it from
 * zero every time it scrolls into view. `once: false` plus the reset back
 * to zero on exit (below) is what makes each pass genuinely re-count
 * instead of silently flashing an already-settled number: without the
 * reset, the motion value would already sit at the target and a second
 * "entrance" would be a no-op. Falls back to the plain string when
 * there's nothing numeric to animate, or when the reader prefers reduced
 * motion.
 */
export function CountUpValue({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const parsed = splitNumeric(value);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!parsed) return;
    if (shouldReduceMotion) {
      if (ref.current) ref.current.textContent = value;
      return;
    }
    if (!inView) {
      motionValue.set(0);
      if (ref.current) {
        ref.current.textContent = parsed.prefix + formatCount(0, parsed.decimals, parsed.hasCommas) + parsed.suffix;
      }
      return;
    }
    const controls = animate(motionValue, parsed.target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (ref.current && parsed) {
          ref.current.textContent =
            parsed.prefix + formatCount(v, parsed.decimals, parsed.hasCommas) + parsed.suffix;
        }
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- parsed is derived from value each render; re-running on value change is what we want
  }, [inView, value]);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {parsed.prefix + formatCount(0, parsed.decimals, parsed.hasCommas) + parsed.suffix}
    </motion.span>
  );
}
