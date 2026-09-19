"use client";

import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { useHasMounted } from "@/lib/use-has-mounted";

// Minimal shape of the (still-experimental) View Transitions API, which
// TypeScript's DOM lib doesn't fully type yet.
type ViewTransitionDocument = Document & {
  startViewTransition?: (callback: () => void) => { ready: Promise<void> };
};

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("common.theme");
  const mounted = useHasMounted();

  const isDark = mounted && resolvedTheme === "dark";

  function handleToggle(event: React.MouseEvent<HTMLButtonElement>) {
    const next = isDark ? "light" : "dark";
    const doc = document as ViewTransitionDocument;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Without View Transitions (or with reduced motion requested), just
    // flip the theme; the sun/moon icon swap below still animates.
    if (!doc.startViewTransition || prefersReducedMotion) {
      setTheme(next);
      return;
    }

    // A circle grows from the button, the new theme revealed inside it,
    // like a light switching on or off from that point. See the View
    // Transitions circular-reveal recipe this follows:
    // https://developer.chrome.com/docs/web-platform/view-transitions/
    const { clientX: x, clientY: y } = event;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = doc.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`],
        },
        {
          duration: 550,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={isDark ? t("switchToLight") : t("switchToDark")}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
    >
      {mounted && (
        <>
          <Sun
            className={cn(
              "h-[18px] w-[18px] transition-all duration-300",
              isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
            )}
          />
          <Moon
            className={cn(
              "absolute h-[18px] w-[18px] transition-all duration-300",
              isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0",
            )}
          />
        </>
      )}
    </button>
  );
}
