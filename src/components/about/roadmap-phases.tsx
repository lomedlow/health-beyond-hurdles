"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Phase = { label: string; title: string; body: string };

/**
 * The long-term roadmap, as a click-to-expand timeline instead of a wall of
 * always-visible text. Phase 1 opens by default; clicking a title drops its
 * body open beneath it and closes whichever phase was open. A brand-colored
 * line fills in behind the timeline as the reader scrolls past it, so the
 * progression reads as something advancing rather than a static list.
 */
export function RoadmapPhases({ phases }: { phases: Phase[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 45%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative mx-auto mt-16 max-w-4xl">
      {/* Track, then the fill that grows as the section scrolls into view */}
      <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-border" aria-hidden="true" />
      <motion.div
        className="absolute left-0 top-2 w-[2px] origin-top bg-brand-500"
        style={{ height: shouldReduceMotion ? "100%" : lineHeight }}
        aria-hidden="true"
      />

      {phases.map((phase, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={phase.label} className="relative pl-8">
            <span
              className={cn(
                "absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-background transition-colors duration-300",
                isOpen ? "bg-brand-500" : "bg-border",
              )}
              aria-hidden="true"
            />
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-4 py-6 text-left"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
                  {phase.label}
                </p>
                <h3 className="mt-1.5 font-display text-xl font-semibold transition-colors group-hover:text-brand-600 sm:text-2xl">
                  {phase.title}
                </h3>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "mt-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                  isOpen
                    ? "border-brand-500 text-brand-600"
                    : "border-border text-muted-foreground group-hover:border-brand-500 group-hover:text-brand-600",
                )}
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-8 pr-4 text-base leading-relaxed text-muted-foreground">
                    {phase.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            {i < phases.length - 1 && <div className="border-t border-border/70" />}
          </div>
        );
      })}
    </div>
  );
}
