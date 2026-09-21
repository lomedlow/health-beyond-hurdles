import type { ReactNode } from "react";

/**
 * Plain layout wrappers. These used to carry a scroll-triggered fade/slide
 * entrance, but the site had too much motion happening as content scrolled
 * into view — headings (see AnimatedHeading) are the one animation left;
 * everything wrapped here now just renders.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function RevealGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return <div className={className}>{children}</div>;
}
