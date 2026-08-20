import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Users,
  Globe2,
  Stethoscope,
  Pill,
  GraduationCap,
  Library,
  Landmark,
  HeartHandshake,
  Church,
  Coins,
  Handshake,
  Building2,
  UserPlus,
  Presentation,
  Languages,
  Wallet,
  Gift,
  Mail,
} from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { IconTile, ACCENT_CYCLE } from "@/components/ui/icon-tile";
import { Button } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { siteConfig } from "@/config/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "partners" });
  return { title: t("hero.title") };
}

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PartnersBody />;
}

const categoryIcons = [
  Users,
  Globe2,
  Stethoscope,
  Pill,
  GraduationCap,
  Library,
  Landmark,
  HeartHandshake,
  Church,
  Coins,
] as const;

const contributionIcons = [
  Handshake,
  Building2,
  UserPlus,
  Presentation,
  Presentation,
  Languages,
  Wallet,
  Gift,
] as const;

function PartnersBody() {
  const t = useTranslations("partners");
  const categories = t.raw("categories.items") as { title: string; body: string }[];
  const contributions = t.raw("contributions.items") as string[];

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
        <Reveal>
          <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">
            {t("categories.title")}
          </h2>
        </Reveal>
        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <RevealItem key={cat.title}>
              <Card className="h-full">
                <IconTile
                  icon={categoryIcons[i % categoryIcons.length]}
                  accent={ACCENT_CYCLE[i % ACCENT_CYCLE.length]}
                />
                <h3 className="mt-4 font-display text-base font-semibold">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.body}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tint="surface">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              {t("contributions.title")}
            </h2>
          </Reveal>
        </div>
        <RevealGroup className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
          {contributions.map((c, i) => {
            const Icon = contributionIcons[i % contributionIcons.length];
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
      </Section>

      <Section tint="brand">
        <Reveal>
          <div className="mx-auto flex max-w-xl flex-col items-center text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t("cta.title")}</h2>
            <p className="mt-4 text-base text-white/80">{t("cta.body")}</p>
            <Button href={`mailto:${siteConfig.email}?subject=Partnership`} variant="accent" className="mt-8">
              <Mail className="h-4 w-4" />
              {t("cta.button")}
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
