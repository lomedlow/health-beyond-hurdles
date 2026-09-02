import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Sparkles,
  Eye,
  Users2,
  ArrowRight,
  Languages,
  BookOpenText,
  Users,
  Bus,
  CircleHelp,
} from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { IconTile } from "@/components/ui/icon-tile";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("hero.title") };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutBody />;
}

const challengeIcons = [Languages, BookOpenText, Users, Bus, CircleHelp] as const;
const challengeAccents = ["coral", "peach", "butter", "sky", "lavender"] as const;

function AboutBody() {
  const t = useTranslations("about");
  const tHome = useTranslations("home");
  const overviewParagraphs = t.raw("overview.paragraphs") as string[];
  const challengeItems = t.raw("challenge.items") as { title: string; body: string }[];
  const bilingualParagraphs = t.raw("bilingualism.paragraphs") as string[];
  const commitments = t.raw("bilingualism.commitments") as string[];
  const phases = t.raw("longTerm.phases") as { label: string; title: string; body: string }[];

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

      {/* Who we are */}
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

      {/* Mission & Vision */}
      <Section tint="surface">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <Sparkles className="h-6 w-6 text-brand-600" aria-hidden="true" strokeWidth={1.5} />
            <Eyebrow className="mt-5">{t("mission.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold">{t("mission.title")}</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              {t("mission.body")}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Eye className="h-6 w-6 text-brand-600" aria-hidden="true" strokeWidth={1.5} />
            <Eyebrow className="mt-5">{t("vision.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold">{t("vision.title")}</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              {t("vision.body")}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* The challenge */}
      <Section>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="justify-center">{t("challenge.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("challenge.title")}
            </h2>
            <p className="mt-4 text-base text-muted-foreground">{t("challenge.subtitle")}</p>
          </div>
        </Reveal>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {challengeItems.map((item, i) => {
            const Icon = challengeIcons[i % challengeIcons.length];
            return (
              <RevealItem key={item.title}>
                <IconTile icon={Icon} accent={challengeAccents[i % challengeAccents.length]} />
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </RevealItem>
            );
          })}
          <RevealItem>
            <div className="flex h-full flex-col justify-center border-l-2 border-brand-600 pl-6">
              <p className="text-base font-medium leading-relaxed text-foreground">
                {t("challenge.consequence")}
              </p>
            </div>
          </RevealItem>
        </RevealGroup>
      </Section>

      {/* Bilingualism */}
      <Section tint="brand">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <Eyebrow className="text-brand-ink-accent">{t("bilingualism.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("bilingualism.title")}
            </h2>
            <div className="mt-6 space-y-5">
              {bilingualParagraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-white/70">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <RevealGroup className="flex flex-col divide-y divide-white/10 border-t border-white/10 lg:mt-14">
            {commitments.map((c) => (
              <RevealItem key={c}>
                <div className="flex items-start gap-4 py-5">
                  <Users2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-ink-accent" aria-hidden="true" strokeWidth={1.5} />
                  <p className="text-sm leading-relaxed text-white/85">{c}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* Roadmap */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">{t("longTerm.eyebrow")}</Eyebrow>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("longTerm.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t("longTerm.body")}
            </p>
          </Reveal>
        </div>

        <RevealGroup className="mx-auto mt-16 max-w-4xl">
          {phases.map((phase) => (
            <RevealItem key={phase.label}>
              <div className="relative grid grid-cols-1 gap-2 border-l-2 border-border pb-16 pl-8 last:pb-0 sm:grid-cols-[8rem_1fr] sm:gap-10">
                <span
                  className="absolute -left-[7px] top-2 h-3 w-3 rounded-full border-2 border-background bg-brand-500"
                  aria-hidden="true"
                />
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-600 sm:pt-1.5">
                  {phase.label}
                </p>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{phase.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {phase.body}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center text-center">
            <p className="font-display text-xl font-medium leading-relaxed sm:text-2xl">
              {t("longTerm.closing")}
            </p>
            <Button href="/program" className="mt-8">
              {tHome("programTeaser.cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
