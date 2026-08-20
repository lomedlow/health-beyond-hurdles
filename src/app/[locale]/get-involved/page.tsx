import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Stethoscope,
  GraduationCap,
  HeartHandshake,
  Users,
  UserCheck,
  Languages,
  BookOpen,
  Handshake,
  ShieldCheck,
  Lock,
  Scale,
  Sparkle,
  LifeBuoy,
  AlertTriangle,
  MessagesSquare,
  ClipboardList,
  Award,
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
  const t = await getTranslations({ locale, namespace: "getInvolved" });
  return { title: t("hero.title") };
}

export default async function GetInvolvedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GetInvolvedBody />;
}

const roleIcons = [
  Stethoscope,
  GraduationCap,
  HeartHandshake,
  Users,
  UserCheck,
  Languages,
  BookOpen,
  Handshake,
] as const;

const trainingIcons = [
  ShieldCheck,
  Lock,
  Scale,
  Sparkle,
  LifeBuoy,
  ClipboardList,
  AlertTriangle,
  MessagesSquare,
] as const;

function GetInvolvedBody() {
  const t = useTranslations("getInvolved");
  const roles = t.raw("roles.items") as { title: string; body: string }[];
  const training = t.raw("training.items") as string[];

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
            {t("roles.title")}
          </h2>
        </Reveal>
        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roles.map((role, i) => {
            const Icon = roleIcons[i % roleIcons.length];
            return (
              <RevealItem key={role.title}>
                <Card className="h-full">
                  <IconTile icon={Icon} accent={ACCENT_CYCLE[i % ACCENT_CYCLE.length]} />
                  <h3 className="mt-4 font-display text-base font-semibold">{role.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {role.body}
                  </p>
                </Card>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Section>

      <Section tint="surface">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="text-center">
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                {t("training.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
                {t("training.body")}
              </p>
            </div>
          </Reveal>
          <RevealGroup className="mt-12 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-border pt-2 sm:grid-cols-2">
            {training.map((item, i) => {
              const Icon = trainingIcons[i % trainingIcons.length];
              return (
                <RevealItem key={item}>
                  <div className="flex items-center gap-4 border-b border-border py-4">
                    <Icon className="h-5 w-5 shrink-0 text-brand-600" aria-hidden="true" strokeWidth={1.5} />
                    <p className="text-sm font-medium leading-snug text-foreground">{item}</p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <Award className="h-6 w-6 text-brand-600" aria-hidden="true" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl font-semibold">
              {t("pathways.advisorTitle")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("pathways.advisorBody")}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Users className="h-6 w-6 text-brand-600" aria-hidden="true" strokeWidth={1.5} />
            <h3 className="mt-4 font-display text-xl font-semibold">
              {t("pathways.peerTitle")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t("pathways.peerBody")}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tint="brand">
        <Reveal>
          <div className="mx-auto flex max-w-xl flex-col items-center text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t("cta.title")}</h2>
            <p className="mt-4 text-base text-white/80">{t("cta.body")}</p>
            <Button href={`mailto:${siteConfig.email}?subject=Volunteering`} variant="accent" className="mt-8">
              <Mail className="h-4 w-4" />
              {t("cta.button")}
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
