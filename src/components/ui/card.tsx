import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group rounded-2xl bg-surface p-8 shadow-sm shadow-brand-950/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-950/[0.06] sm:p-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
