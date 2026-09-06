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
import { Tag } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { StatTile } from "@/components/ui/stat-tile";

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

type Stat = { value: string; label: string; note?: string };

function ProgramBody() {
  const t = useTranslations("program");

  const overviewParagraphs = t.raw("overview.paragraphs") as string[];
  const evidenceStats = t.raw("evidence.stats") as Stat[];
  const evidenceReasons = t.raw("evidence.reasons") as string[];
  const regionStats = t.raw("evidence.regionStats") as Stat[];
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
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-background dark:from-brand-950/30">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32 lg:px-8">
          <Reveal>
            <Eyebrow className="justify-center">{t("hero.eyebrow")}</Eyebrow>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t("hero.subtitle")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* How it works */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("overview.title")}
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {overviewParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className="text-lg leading-relaxed text-foreground/85">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Evidence base */}
      <Section tint="surface">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow>{t("evidence.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("evidence.title")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/85">
              {t("evidence.intro")}
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t("evidence.statsLead")}
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {evidenceStats.map((stat) => (
            <RevealItem key={stat.value + stat.label}>
              <StatTile value={stat.value} label={stat.label} note={stat.note} />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-xl font-semibold">
              {t("evidence.reasonsTitle")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("evidence.reasonsIntro")}
            </p>
            <ul className="mt-6 divide-y divide-border border-t border-border">
              {evidenceReasons.map((reason) => (
                <li key={reason} className="py-4 text-sm leading-relaxed text-foreground/80">
                  {reason}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {t("evidence.trendNote")}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h3 className="font-display text-xl font-semibold">
              {t("evidence.regionTitle")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("evidence.regionIntro")}
            </p>
            <ul className="mt-6 divide-y divide-border border-t border-border">
              {regionStats.map((stat) => (
                <li key={stat.value + stat.label} className="flex items-baseline gap-5 py-4">
                  <span className="w-14 shrink-0 font-display text-2xl font-semibold tabular-nums text-brand-600">
                    {stat.value}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/80">{stat.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <div className="mx-auto mt-20 max-w-3xl border-l-2 border-brand-500 pl-6 sm:pl-8">
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              {t("evidence.hingeTitle")}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-foreground/85">
              {t("evidence.hingeBody")}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-16 max-w-3xl space-y-2 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground/70">{t("evidence.sourceLabel")}: </span>
              {t("evidence.source")}
            </p>
            <p>{t("evidence.scopeNote")}</p>
          </div>
        </Reveal>
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

        <Reveal delay={0.08}>
          <div className="mx-auto mt-8 max-w-4xl text-center">
            <Button href="/guide" variant="outline">
              {t("topics.guideCta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Section>

      {/* Distribution + evaluation */}
      <Section tint="surface">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <MapPinned className="h-6 w-6 text-brand-600" aria-hidden="true" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl font-semibold">
              {t("distribution.title")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("distribution.body")}
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              {channels.map((c) => (
                <Tag key={c}>{c}</Tag>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <BarChart3 className="h-6 w-6 text-brand-600" aria-hidden="true" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl font-semibold">
              {t("evaluation.title")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("evaluation.body")}
            </p>
            <ul className="mt-6 space-y-2.5">
              {metrics.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  {m}
                </li>
              ))}
            </ul>
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

        <RevealGroup className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
          {criteria.map((c, i) => {
            const Icon = criteriaIcons[i % criteriaIcons.length];
            return (
              <RevealItem key={c}>
                <div className="flex flex-col items-center text-center">
                  <Icon className="h-5 w-5 text-brand-600" aria-hidden="true" strokeWidth={1.5} />
                  <p className="mt-2 text-xs font-medium leading-snug text-foreground">{c}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-lg font-semibold">{t("whoWeServe.groupsTitle")}</h3>
            <div className="mt-4 flex flex-col gap-2">
              {groups.map((g) => (
                <Tag key={g}>{g}</Tag>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h3 className="font-display text-lg font-semibold">
              {t("whoWeServe.priorityTitle")}
            </h3>
            <div className="mt-4 flex flex-col gap-2">
              {priority.map((p) => (
                <Tag key={p}>{p}</Tag>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mx-auto mt-20 max-w-2xl border-l-2 border-brand-600 pl-6 text-left sm:mx-auto sm:max-w-3xl">
            <h3 className="font-display text-xl font-semibold">{t("whoWeServe.pilotTitle")}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("whoWeServe.pilotBody")}
            </p>
          </div>
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
