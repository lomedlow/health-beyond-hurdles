import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The globe mark. Two files, because the artwork is two-tone: the light
 * version's continents are #082826, which is invisible against the dark
 * theme's #0A1615 background. Only one is ever visible at a time.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("relative block shrink-0", className)}>
      <Image
        src="/brand/logo-globe.png"
        alt=""
        fill
        sizes="64px"
        priority
        className="object-contain dark:hidden"
      />
      <Image
        src="/brand/logo-globe-dark.png"
        alt=""
        fill
        sizes="64px"
        priority
        className="hidden object-contain dark:block"
      />
    </span>
  );
}
