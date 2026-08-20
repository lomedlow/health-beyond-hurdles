import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type Accent = "coral" | "peach" | "butter" | "mint" | "sky" | "lavender";

const bgClasses: Record<Accent, string> = {
  coral: "bg-accent-coral-soft text-accent-coral",
  peach: "bg-accent-peach-soft text-accent-peach",
  butter: "bg-accent-butter-soft text-accent-butter",
  mint: "bg-accent-mint-soft text-accent-mint",
  sky: "bg-accent-sky-soft text-accent-sky",
  lavender: "bg-accent-lavender-soft text-accent-lavender",
};

export const ACCENT_CYCLE: Accent[] = ["coral", "peach", "mint", "sky", "lavender", "butter"];

export function IconTile({
  icon: Icon,
  accent = "mint",
  className,
}: {
  icon: LucideIcon;
  accent?: Accent;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
        bgClasses[accent],
        className,
      )}
    >
      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
    </div>
  );
}
