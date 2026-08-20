import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { HeartHandshake } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
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
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-background dark:from-brand-950/30">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32 lg:px-8">
          <Reveal>
            <HeartHandshake className="mx-auto h-8 w-8 text-brand-600" aria-hidden="true" strokeWidth={1.5} />
            <Eyebrow className="mt-6 justify-center">{t("hero.eyebrow")}</Eyebrow>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mt-4 text-base text-muted-foreground">{t("hero.subtitle")}</p>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold">{t("comingSoon.title")}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t("comingSoon.body")}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {t("comingSoon.alternative")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-16 flex max-w-lg flex-col items-center rounded-2xl bg-surface-muted px-8 py-10 text-center">
            <h3 className="font-display text-xl font-semibold">{t("notify.title")}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t("notify.body")}</p>
            <NewsletterForm className="mt-6 w-full" />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
