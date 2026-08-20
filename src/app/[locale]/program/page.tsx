import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  BookOpenCheck,
  GraduationCap,
  ShieldCheck,
  MapPinned,
  BarChart3,
  Clock,
  MapPin,
  Compass,
  Languages,
  CheckCircle2,
} from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "program" });
  return { title: t("hero.title") };
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ProgramBody />;
}

const criteriaIcons = [Clock, MapPin, Compass, Languages] as const;

function ProgramBody() {
  const t = useTranslations("program");

  const overviewParagraphs = t.raw("overview.paragraphs") as string[];
  const topicsItems = t.raw("topics.items") as string[];
  const educationItems = t.raw("education.items") as string[];
  const qualityItems = t.raw("quality.items") as string[];
  const channels = t.raw("distribution.channels") as string[];
  const metrics = t.raw("evaluation.metrics") as string[];
  const criteria = t.raw("whoWeServe.criteria") as string[];
  const groups = t.raw("whoWeServe.groups") as string[];
  const priority = t.raw("whoWeServe.priority") as string[];

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-brand-50 to-background dark:from-brand-950/30">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28 lg:px-8">
          <Reveal>
            <Eyebrow className="justify-center">{t("hero.eyebrow")}</Eyebrow>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t("hero.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* The problem */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              {t("challenge.title")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              {t("challenge.body")}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* How it works */}
      <Section tint="surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              {t("overview.title")}
            </h2>
          </Reveal>
          <div className="mt-6 space-y-5">
            {overviewParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className="text-base leading-relaxed text-foreground/80">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Deep-dive accordions */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">{t("hero.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("topics.title")}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <Accordion className="mx-auto mt-10 max-w-4xl" type="multiple">
            <AccordionItem value="topics" title={t("topics.title")} badge="17">
              <p className="mb-4 text-sm text-muted-foreground">{t("topics.intro")}</p>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {topicsItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
                    <BookOpenCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionItem>

            <AccordionItem value="education" title={t("education.title")} badge="11">
              <p className="mb-4 text-sm text-muted-foreground">{t("education.intro")}</p>
              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {educationItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
                    <GraduationCap
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm italic text-muted-foreground">{t("education.note")}</p>
            </AccordionItem>

            <AccordionItem value="quality" title={t("quality.title")} badge="7">
              <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {qualityItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
                    <ShieldCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </Accordion>
        </Reveal>
      </Section>

      {/* Distribution + evaluation */}
      <Section tint="surface">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <MapPinned className="h-6 w-6 text-brand-600" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-semibold">
                {t("distribution.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t("distribution.body")}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {channels.map((c) => (
                  <Badge key={c} accent="mint">
                    {c}
                  </Badge>
                ))}
              </div>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full">
              <BarChart3 className="h-6 w-6 text-brand-600" aria-hidden="true" />
              <h3 className="mt-4 font-display text-xl font-semibold">
                {t("evaluation.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t("evaluation.body")}
              </p>
              <ul className="mt-5 space-y-2.5">
                {metrics.map((m) => (
                  <li key={m} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    {m}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Who we serve */}
      <Section id="who-we-serve">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("whoWeServe.title")}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">{t("whoWeServe.body")}</p>
          </div>
        </Reveal>

        <RevealGroup className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {criteria.map((c, i) => {
            const Icon = criteriaIcons[i % criteriaIcons.length];
            return (
              <RevealItem key={c}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-border bg-surface p-4 text-center">
                  <Icon className="h-5 w-5 text-brand-600" aria-hidden="true" />
                  <p className="mt-2 text-xs font-semibold leading-snug">{c}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-lg font-semibold">{t("whoWeServe.groupsTitle")}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {groups.map((g) => (
                <Badge key={g} accent="sky">
                  {g}
                </Badge>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h3 className="font-display text-lg font-semibold">
              {t("whoWeServe.priorityTitle")}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {priority.map((p) => (
                <Badge key={p} accent="coral">
                  {p}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <Card className="mx-auto mt-14 max-w-4xl bg-accent-mint-soft text-center">
            <h3 className="font-display text-xl font-semibold">{t("whoWeServe.pilotTitle")}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80">
              {t("whoWeServe.pilotBody")}
            </p>
          </Card>
        </Reveal>
      </Section>

      {/* CTA */}
      <Section tint="brand">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t("cta.title")}</h2>
            <p className="mt-4 text-base text-white/80">{t("cta.body")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/get-involved" variant="accent">
                {t("cta.primary")}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/partners"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                {t("cta.secondary")}
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
