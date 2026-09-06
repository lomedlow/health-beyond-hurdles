import { cn } from "@/lib/utils";

export function StatTile({
  value,
  label,
  note,
  className,
}: {
  value: string;
  label: string;
  /** Optional smaller line under the label, e.g. a comparison figure. */
  note?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="font-display text-4xl font-semibold leading-none text-brand-600 sm:text-5xl">
        {value}
      </span>
      <span className="mt-3 text-sm leading-snug text-foreground/80">{label}</span>
      {note ? (
        <span className="mt-2 text-xs leading-snug text-muted-foreground">{note}</span>
      ) : null}
    </div>
  );
}
