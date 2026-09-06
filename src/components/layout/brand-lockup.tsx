"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/icons/logo";
import { cn } from "@/lib/utils";

/**
 * Icon plus a two-line bilingual wordmark. The reader's current language sits
 * on top; the other name sits below the rule. Each line is its own link to the
 * home page in that language, so the lockup doubles as a way into either
 * version of the site.
 */
export function BrandLockup({
  size = "header",
  onNavigate,
  className,
}: {
  size?: "header" | "footer";
  onNavigate?: () => void;
  className?: string;
}) {
  const locale = useLocale();
  const t = useTranslations("nav");

  const names = {
    en: {
      label: "Health Beyond Hurdles",
      locale: "en" as const,
      lang: "en",
      aria: t("goHomeEnglish"),
    },
    fr: {
      label: "Santé Sans Obstacles",
      locale: "fr" as const,
      lang: "fr",
      aria: t("goHomeFrench"),
    },
  };

  const [top, bottom] = locale === "fr" ? [names.fr, names.en] : [names.en, names.fr];

  // The header lockup steps down on the narrowest phones (320px), where the
  // wordmark, the theme toggle and the menu button share one row.
  const iconSize =
    size === "header" ? "h-9 w-9 min-[360px]:h-10 min-[360px]:w-10 sm:h-11 sm:w-11" : "h-12 w-12";
  const topText =
    size === "header"
      ? "text-[0.66rem] min-[360px]:text-[0.78rem] sm:text-[0.86rem]"
      : "text-base";
  const bottomText =
    size === "header"
      ? "text-[0.54rem] min-[360px]:text-[0.62rem] sm:text-[0.68rem]"
      : "text-[0.78rem]";

  const line =
    "block whitespace-nowrap font-display font-semibold uppercase leading-tight tracking-[0.01em] transition-colors";

  return (
    <div className={cn("flex items-center gap-2.5 min-[360px]:gap-3", className)}>
      <Logo className={iconSize} />
      <div className="flex flex-col">
        <Link
          href="/"
          locale={top.locale}
          lang={top.lang}
          onClick={onNavigate}
          aria-label={top.aria}
          className={cn(line, topText, "text-foreground hover:text-brand-600")}
        >
          {top.label}
        </Link>
        <span className="my-1 h-px w-full bg-border" aria-hidden="true" />
        <Link
          href="/"
          locale={bottom.locale}
          lang={bottom.lang}
          onClick={onNavigate}
          aria-label={bottom.aria}
          className={cn(line, bottomText, "text-muted-foreground hover:text-brand-600")}
        >
          {bottom.label}
        </Link>
      </div>
    </div>
  );
}
