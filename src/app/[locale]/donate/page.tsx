import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HeartHandshake, Sparkles } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/motion/reveal";
import { NewsletterForm } from "@/components/sections/newsletter-form";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "donate" });
  return { title: t("hero.title") };
}

export default async function DonatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DonateBody />;
}

function DonateBody() {
  const t = useTranslations("donate");

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-brand-50 to-background dark:from-brand-950/30">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28 lg:px-8">
          <Reveal>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-coral-soft">
              <HeartHandshake className="h-7 w-7 text-accent-coral" aria-hidden="true" />
            </div>
            <Eyebrow className="mt-6 justify-center">{t("hero.eyebrow")}</Eyebrow>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-base text-muted-foreground">{t("hero.subtitle")}</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <Card className="mx-auto max-w-2xl text-center">
            <Sparkles className="mx-auto h-6 w-6 text-brand-600" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-semibold">
              {t("comingSoon.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80">
              {t("comingSoon.body")}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t("comingSoon.alternative")}
            </p>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 flex max-w-lg flex-col items-center rounded-[2rem] border border-border bg-surface-muted px-8 py-10 text-center">
            <h3 className="font-display text-xl font-semibold">{t("notify.title")}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t("notify.body")}</p>
            <NewsletterForm className="mt-6 w-full" />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
