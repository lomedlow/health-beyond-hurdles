import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  Languages,
  CheckCircle2,
  Globe2,
  Type,
  HeartHandshake,
  HandHeart,
  Clock,
  MapPin,
  Compass,
  Handshake,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow } from "@/components/ui/section";
import { IconTile } from "@/components/ui/icon-tile";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { NewsletterForm } from "@/components/sections/newsletter-form";
import { HeroIllustration } from "@/components/sections/hero-illustration";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("defaultTitle") };
}

const bilingualIcons = [Globe2, Type, HeartHandshake] as const;
const criteriaIcons = [Clock, MapPin, Compass, Languages] as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomeBody />;
}

function HomeBody() {
  const t = useTranslations("home");
  const tc = useTranslations("common");

  const bilingualPoints = t.raw("bilingual.points") as string[];
  const criteria = t.raw("whoWeServe.criteria") as string[];
  const outcomes = t.raw("outcomes.items") as string[];
  const programBullets = t.raw("programTeaser.bullets") as string[];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-background to-background dark:from-brand-950/40" />
        <HeroIllustration />
        <div className="mx-auto max-w-7xl px-6 pb-28 pt-24 sm:pb-36 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
                {tc("proposedBadge")}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-7 font-display text-[2.75rem] font-semibold leading-[1.06] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {t("hero.title")}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {t("hero.subtitle")}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/program" size="lg">
                  {t("hero.ctaPrimary")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/guide" size="lg" variant="ghost">
                  {t("hero.ctaSecondary")}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* First program, high on the page */}
      <Section tint="surface">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>{t("programTeaser.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              {t("programTeaser.title")}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              {t("programTeaser.body")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/program">
                {t("programTeaser.cta")}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/guide" variant="outline">
                {t("programTeaser.ctaSecondary")}
              </Button>
            </div>
          </Reveal>
          <RevealGroup className="flex flex-col divide-y divide-border border-t border-border lg:mt-3">
            {programBullets.map((bullet) => (
              <RevealItem key={bullet}>
                <div className="flex items-start gap-3 py-5 text-base leading-relaxed text-foreground">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                  {bullet}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* Who we serve */}
      <Section>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>{t("whoWeServe.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("whoWeServe.title")}
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              {t("whoWeServe.body")}
            </p>
            <Button href="/program" variant="outline" className="mt-7">
              {t("whoWeServe.cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <RevealGroup className="grid grid-cols-2 gap-x-8 gap-y-10">
            {criteria.map((c, i) => {
              const Icon = criteriaIcons[i % criteriaIcons.length];
              return (
                <RevealItem key={c}>
                  <Icon className="h-5 w-5 text-brand-600" aria-hidden="true" strokeWidth={1.5} />
                  <p className="mt-3 text-sm font-medium leading-snug text-foreground">{c}</p>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Section>

      {/* Bilingual identity */}
      <Section tint="brand">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <Eyebrow className="text-brand-ink-accent">{t("bilingual.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl lg:text-5xl">
              {t("bilingual.title")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">{t("bilingual.body")}</p>
            <Button
              href="/about"
              variant="outline"
              className="mt-8 border-white/20 bg-transparent text-white hover:bg-white/10"
            >
              {t("bilingual.cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <RevealGroup className="flex flex-col divide-y divide-white/10 border-t border-white/10">
            {bilingualPoints.map((point, i) => {
              const Icon = bilingualIcons[i % bilingualIcons.length];
              return (
                <RevealItem key={point}>
                  <div className="flex items-start gap-4 py-6">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-ink-accent" aria-hidden="true" strokeWidth={1.5} />
                    <p className="text-base leading-relaxed text-white/85">{point}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Section>

      {/* Outcomes */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">{t("outcomes.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("outcomes.title")}
            </h2>
          </div>
        </Reveal>
        <RevealGroup className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2">
          {outcomes.map((item) => (
            <RevealItem key={item}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                <p className="text-base leading-relaxed text-foreground">{item}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Three ways in */}
      <Section tint="surface">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <Reveal>
            <IconTile icon={BookOpen} accent="sky" />
            <Eyebrow className="mt-5">{t("guideTeaser.eyebrow")}</Eyebrow>
            <h3 className="font-display text-2xl font-semibold">{t("guideTeaser.title")}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("guideTeaser.body")}
            </p>
            <Button href="/guide" variant="ghost" size="sm" className="-ml-4 mt-4">
              {t("guideTeaser.cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <Reveal delay={0.08}>
            <IconTile icon={HandHeart} accent="coral" />
            <Eyebrow className="mt-5">{t("getInvolvedTeaser.eyebrow")}</Eyebrow>
            <h3 className="font-display text-2xl font-semibold">
              {t("getInvolvedTeaser.title")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("getInvolvedTeaser.body")}
            </p>
            <Button href="/get-involved" variant="ghost" size="sm" className="-ml-4 mt-4">
              {t("getInvolvedTeaser.cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <Reveal delay={0.16}>
            <IconTile icon={Handshake} accent="lavender" />
            <Eyebrow className="mt-5">{t("partnersTeaser.eyebrow")}</Eyebrow>
            <h3 className="font-display text-2xl font-semibold">{t("partnersTeaser.title")}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("partnersTeaser.body")}
            </p>
            <Button href="/partners" variant="ghost" size="sm" className="-ml-4 mt-4">
              {t("partnersTeaser.cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section>
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Eyebrow className="justify-center">{t("newsletterCta.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("newsletterCta.title")}
            </h2>
            <p className="mt-4 max-w-lg text-base text-muted-foreground">
              {t("newsletterCta.body")}
            </p>
            <NewsletterForm className="mt-8 w-full max-w-md" />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
