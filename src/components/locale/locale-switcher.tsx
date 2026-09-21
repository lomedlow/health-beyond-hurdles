"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter, getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { getLocaleOrigin } from "@/config/site";
import { useOnLocaleDomain } from "@/lib/use-on-locale-domain";
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
  const onLocaleDomain = useOnLocaleDomain();

  function switchTo(loc: string) {
    if (loc === locale) return;

    // On the real domains, jump straight to the sibling domain's bare,
    // unprefixed URL for this same page. `router.replace({ locale })`
    // below would also arrive there eventually (the middleware redirects
    // a mismatched locale/domain pair to the right domain automatically),
    // but it forces a "/fr" or "/en" prefix that's then immediately
    // redirected away on arrival, since the target domain serves that
    // locale with no prefix. Building the final URL here skips that
    // extra hop.
    if (onLocaleDomain) {
      const target =
        getLocaleOrigin(loc as (typeof routing.locales)[number]) +
        // @ts-expect-error -- pathname/params are dynamically typed by next-intl
        getPathname({ locale: loc, href: { pathname, params }, forcePrefix: false });
      window.location.assign(target);
      return;
    }

    router.replace(
      // @ts-expect-error -- pathname/params are dynamically typed by next-intl
      { pathname, params },
      { locale: loc },
    );
  }

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
          onClick={() => switchTo(loc)}
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
