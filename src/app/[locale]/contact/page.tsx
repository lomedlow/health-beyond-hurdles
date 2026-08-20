import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { MapPin, Mail, ArrowRight, HeartHandshake } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { siteConfig } from "@/config/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactPage" });
  return { title: t("hero.title") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactBody />;
}

function ContactBody() {
  const t = useTranslations("contactPage");

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-brand-50 to-background dark:from-brand-950/30">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28 lg:px-8">
          <Reveal>
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
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-6">
            <Reveal>
              <Card className="bg-accent-mint-soft">
                <MapPin className="h-6 w-6 text-brand-700" aria-hidden="true" />
                <h2 className="mt-4 font-display text-lg font-semibold">{t("info.title")}</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {t("info.body")}
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </Card>
            </Reveal>
            <Reveal delay={0.06}>
              <Card className="bg-accent-peach-soft">
                <HeartHandshake className="h-6 w-6 text-brand-700" aria-hidden="true" />
                <h2 className="mt-4 font-display text-lg font-semibold">
                  {t("donateTeaser.title")}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  {t("donateTeaser.body")}
                </p>
                <Button href="/donate" variant="outline" size="sm" className="mt-4 bg-surface">
                  {t("donateTeaser.cta")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Card>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
