import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  Languages,
  BookOpenText,
  Users,
  Bus,
  CircleHelp,
  CheckCircle2,
  Globe2,
  Type,
  HeartHandshake,
  HandHeart,
  Clock,
  MapPin,
  Compass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
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

const challengeIcons = [Languages, BookOpenText, Users, Bus, CircleHelp] as const;
const challengeAccents = ["coral", "peach", "butter", "sky", "lavender"] as const;
const bilingualIcons = [Globe2, Type, HeartHandshake, HandHeart] as const;
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

  const challengeItems = t.raw("challenge.items") as { title: string; body: string }[];
  const bilingualPoints = t.raw("bilingual.points") as string[];
  const criteria = t.raw("whoWeServe.criteria") as string[];
  const outcomes = t.raw("outcomes.items") as string[];
  const heroBadges = t.raw("hero.badges") as string[];
  const programBullets = t.raw("programTeaser.bullets") as string[];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-background to-background dark:from-brand-950/40" />
        <HeroIllustration />
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Badge accent="mint">{tc("proposedBadge")}</Badge>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t("hero.title")}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {t("hero.subtitle")}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/program" size="lg">
                  {t("hero.ctaPrimary")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/get-involved" size="lg" variant="outline">
                  {t("hero.ctaSecondary")}
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                {heroBadges.map((b) => (
                  <Badge key={b} accent="brand">
                    {b}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full bg-accent-mint-soft">
              <Eyebrow>{t("mission.eyebrow")}</Eyebrow>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                {t("mission.title")}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                {t("mission.body")}
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full bg-accent-sky-soft">
              <Eyebrow>{t("vision.eyebrow")}</Eyebrow>
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                {t("vision.title")}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                {t("vision.body")}
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* The Challenge */}
      <Section tint="surface">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">{t("challenge.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("challenge.title")}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">{t("challenge.subtitle")}</p>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {challengeItems.map((item, i) => {
            const Icon = challengeIcons[i % challengeIcons.length];
            return (
              <RevealItem key={item.title}>
                <Card className="h-full">
                  <IconTile icon={Icon} accent={challengeAccents[i % challengeAccents.length]} />
                  <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </Card>
              </RevealItem>
            );
          })}
          <RevealItem>
            <Card className="flex h-full flex-col justify-center bg-brand-600 text-white">
              <p className="text-base font-medium leading-relaxed">{t("challenge.consequence")}</p>
            </Card>
          </RevealItem>
        </RevealGroup>
      </Section>

      {/* Program teaser */}
      <Section>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>{t("programTeaser.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("programTeaser.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t("programTeaser.body")}
            </p>
            <Button href="/program" className="mt-7">
              {t("programTeaser.cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.06}>
            {programBullets.map((bullet, i) => (
              <RevealItem key={bullet}>
                <div
                  className={`h-full rounded-2xl border border-border p-5 text-sm font-medium leading-snug ${
                    ["bg-accent-coral-soft", "bg-accent-peach-soft", "bg-accent-mint-soft", "bg-accent-sky-soft"][i % 4]
                  }`}
                >
                  {bullet}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* Bilingualism */}
      <Section tint="brand">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <Eyebrow className="text-brand-ink-accent">{t("bilingual.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("bilingual.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">{t("bilingual.body")}</p>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {bilingualPoints.map((point, i) => {
              const Icon = bilingualIcons[i % bilingualIcons.length];
              return (
                <RevealItem key={point}>
                  <div className="flex h-full items-start gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-ink-accent" aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-white/90">{point}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Section>

      {/* Who we serve */}
      <Section tint="surface">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>{t("whoWeServe.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("whoWeServe.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t("whoWeServe.body")}
            </p>
            <Button href="/program" variant="outline" className="mt-7">
              {t("whoWeServe.cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <RevealGroup className="grid grid-cols-2 gap-4">
            {criteria.map((c, i) => {
              const Icon = criteriaIcons[i % criteriaIcons.length];
              return (
                <RevealItem key={c}>
                  <Card className="h-full">
                    <Icon className="h-5 w-5 text-brand-600" aria-hidden="true" />
                    <p className="mt-3 text-sm font-semibold leading-snug">{c}</p>
                  </Card>
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
        <RevealGroup className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {outcomes.map((item) => (
            <RevealItem key={item}>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" />
                <p className="text-sm font-medium leading-relaxed">{item}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Get involved + partners teasers */}
      <Section tint="surface">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full bg-accent-coral-soft">
              <Eyebrow>{t("getInvolvedTeaser.eyebrow")}</Eyebrow>
              <h3 className="font-display text-2xl font-semibold">
                {t("getInvolvedTeaser.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                {t("getInvolvedTeaser.body")}
              </p>
              <Button href="/get-involved" variant="outline" size="sm" className="mt-6 bg-surface">
                {t("getInvolvedTeaser.cta")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full bg-accent-lavender-soft">
              <Eyebrow>{t("partnersTeaser.eyebrow")}</Eyebrow>
              <h3 className="font-display text-2xl font-semibold">{t("partnersTeaser.title")}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                {t("partnersTeaser.body")}
              </p>
              <Button href="/partners" variant="outline" size="sm" className="mt-6 bg-surface">
                {t("partnersTeaser.cta")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section>
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[2.5rem] border border-border bg-surface px-8 py-14 text-center sm:px-16">
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
