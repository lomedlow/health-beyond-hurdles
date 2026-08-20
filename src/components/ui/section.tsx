import { cn } from "@/lib/utils";

type Tint = "none" | "surface" | "coral" | "peach" | "butter" | "mint" | "sky" | "lavender" | "brand";

const tintClasses: Record<Tint, string> = {
  none: "",
  surface: "bg-surface-muted",
  coral: "bg-accent-coral-soft",
  peach: "bg-accent-peach-soft",
  butter: "bg-accent-butter-soft",
  mint: "bg-accent-mint-soft",
  sky: "bg-accent-sky-soft",
  lavender: "bg-accent-lavender-soft",
  brand: "bg-brand-ink text-white",
};

export function Section({
  children,
  className,
  tint = "none",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tint?: Tint;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-24 sm:py-32", tintClasses[tint], className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-600",
        className,
      )}
    >
      <span className="h-px w-8 bg-brand-500" aria-hidden="true" />
      {children}
    </p>
  );
}
