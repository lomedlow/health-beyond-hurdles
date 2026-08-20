import { cn } from "@/lib/utils";

type Accent = "coral" | "peach" | "butter" | "mint" | "sky" | "lavender" | "brand";

const accentClasses: Record<Accent, string> = {
  coral: "bg-accent-coral-soft text-foreground",
  peach: "bg-accent-peach-soft text-foreground",
  butter: "bg-accent-butter-soft text-foreground",
  mint: "bg-accent-mint-soft text-foreground",
  sky: "bg-accent-sky-soft text-foreground",
  lavender: "bg-accent-lavender-soft text-foreground",
  brand: "bg-brand-100 text-brand-800 dark:bg-brand-100 dark:text-brand-900",
};

export function Badge({
  children,
  accent = "brand",
  className,
}: {
  children: React.ReactNode;
  accent?: Accent;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide",
        accentClasses[accent],
        className,
      )}
    >
      {children}
    </span>
  );
}

export const ACCENT_ORDER: Accent[] = [
  "coral",
  "peach",
  "butter",
  "mint",
  "sky",
  "lavender",
];
