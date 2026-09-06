import Image from "next/image";
import { cn } from "@/lib/utils";

/** The globe mark, used as-is in both themes. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("relative block shrink-0", className)}>
      <Image
        src="/brand/logo-globe.png"
        alt=""
        fill
        sizes="64px"
        priority
        className="object-contain"
      />
    </span>
  );
}
