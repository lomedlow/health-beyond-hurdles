import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Sparkles, Eye, Users2, ArrowRight, Quote } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Tag } from "@/components/ui/badge";
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

function AboutBody() {
  const t = useTranslations("about");
  const tHome = useTranslations("home");
  const overviewParagraphs = t.raw("overview.paragraphs") as string[];
  const bilingualParagraphs = t.raw("bilingualism.paragraphs") as string[];
  const commitments = t.raw("bilingualism.commitments") as string[];
  const future = t.raw("longTerm.future") as string[];

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

      <Section>
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

      <Section tint="surface">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <Sparkles className="h-6 w-6 text-brand-600" aria-hidden="true" strokeWidth={1.5} />
            <h2 className="mt-5 font-display text-2xl font-semibold">{t("mission.title")}</h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
              {t("mission.body")}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Eye className="h-6 w-6 text-brand-600" aria-hidden="true" strokeWidth={1.5} />
            <h2 className="mt-5 font-display text-2xl font-semibold">{t("vision.title")}</h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
              {t("vision.body")}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tint="brand">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("bilingualism.title")}
            </h2>
            <div className="mt-6 space-y-4">
              {bilingualParagraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-white/70">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <RevealGroup className="flex flex-col divide-y divide-white/10 border-t border-white/10">
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

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("longTerm.title")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {t("longTerm.body")}
            </p>
          </Reveal>
        </div>

        <Reveal>
          <h3 className="mt-16 text-center font-display text-lg font-semibold">
            {t("longTerm.futureTitle")}
          </h3>
        </Reveal>
        <RevealGroup className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3">
          {future.map((f) => (
            <RevealItem key={f}>
              <Tag>{f}</Tag>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <div className="mx-auto mt-20 flex max-w-2xl flex-col items-center text-center">
            <Quote className="h-7 w-7 text-brand-300" aria-hidden="true" strokeWidth={1.5} />
            <p className="mt-4 font-display text-xl font-medium leading-relaxed sm:text-2xl">
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
