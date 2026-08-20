import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Sparkles, Globe2, Users2, ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full bg-accent-mint-soft">
              <Sparkles className="h-6 w-6 text-brand-600" aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl font-semibold">{t("mission.title")}</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">
                {t("mission.body")}
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.08}>
            <Card className="h-full bg-accent-sky-soft">
              <Globe2 className="h-6 w-6 text-brand-600" aria-hidden="true" />
              <h2 className="mt-4 font-display text-2xl font-semibold">{t("vision.title")}</h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">
                {t("vision.body")}
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section tint="brand">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("bilingualism.title")}
            </h2>
            <div className="mt-6 space-y-4">
              {bilingualParagraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-white/80">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-4">
            {commitments.map((c) => (
              <RevealItem key={c}>
                <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                  <Users2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-ink-accent" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-white/90">{c}</p>
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
          <h3 className="mt-14 text-center font-display text-lg font-semibold">
            {t("longTerm.futureTitle")}
          </h3>
        </Reveal>
        <RevealGroup className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-3">
          {future.map((f, i) => (
            <RevealItem key={f}>
              <span
                className={`inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium ${
                  ["bg-accent-coral-soft", "bg-accent-peach-soft", "bg-accent-butter-soft", "bg-accent-mint-soft", "bg-accent-sky-soft", "bg-accent-lavender-soft"][
                    i % 6
                  ]
                }`}
              >
                {f}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal>
          <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-border bg-surface p-8 text-center">
            <p className="font-display text-lg font-medium leading-relaxed">
              {t("longTerm.closing")}
            </p>
            <Button href="/program" className="mt-6">
              {tHome("programTeaser.cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
