"use client";

import { motion } from "framer-motion";

/**
 * Wraps every page's content. App Router remounts a template on each
 * navigation, so this gives a clean cross-page fade instead of the new
 * page snapping in.
 *
 * Deliberately opacity-only: an ancestor with a transform would become a
 * containing block and change how `fixed` and `sticky` children behave
 * (the guide's sticky table of contents, for one).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
