import { cn } from "@/lib/utils";

/** The short rule that precedes an eyebrow label. */
export function EyebrowRule({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("block h-px w-8 bg-brand-500", className)} />;
}
