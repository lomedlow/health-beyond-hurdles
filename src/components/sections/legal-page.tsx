import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";
import { Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";

type LegalSection = {
  title: string;
  body?: string;
  items?: string[];
};

/**
 * Shared layout for the privacy policy and the terms of use. Both pages are
 * plain prose: a short header, then numbered sections read from the
 * `legal.<doc>.sections` array in the message files.
 */
export function LegalPage({ doc }: { doc: "privacy" | "terms" }) {
  const t = useTranslations("legal");
  const sections = t.raw(`${doc}.sections`) as LegalSection[];

  return (
    <>
      <section className="border-b border-border bg-surface-muted">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24 lg:px-8">
          <Reveal>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {t(`${doc}.title`)}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t(`${doc}.subtitle`)}
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {t("lastUpdated")}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24 lg:px-8">
        <div className="divide-y divide-border">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={Math.min(index, 4) * 0.04}>
              <section className="py-10 first:pt-0">
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-display text-sm font-semibold tabular-nums text-brand-600"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                    {section.title}
                  </h2>
                </div>

                <div className="mt-4 sm:pl-9">
                  {section.body ? (
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {section.body}
                    </p>
                  ) : null}
                  {section.items ? (
                    <ul className="mt-4 space-y-3">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                        >
                          <span
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            </Reveal>
          ))}
        </div>

        <Link
          href="/"
          className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-brand-600 transition-colors hover:text-brand-700"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t("backHome")}
        </Link>
      </div>
    </>
  );
}
