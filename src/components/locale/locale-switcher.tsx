"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";

const labels: Record<string, string> = {
  en: "EN",
  fr: "FR",
};

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-border bg-surface p-0.5",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          aria-current={loc === locale}
          onClick={() =>
            router.replace(
              // @ts-expect-error -- pathname/params are dynamically typed by next-intl
              { pathname, params },
              { locale: loc },
            )
          }
          className={cn(
            "rounded-full px-2.5 py-1.5 text-xs font-semibold tracking-wide transition-colors",
            loc === locale
              ? "bg-brand-600 text-white"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
