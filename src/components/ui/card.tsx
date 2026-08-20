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
        "rounded-2xl bg-surface p-8 sm:p-10",
        className,
      )}
    >
      {children}
    </div>
  );
}
