import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  ArrowRight,
  Download,
  BookOpen,
  Stethoscope,
  IdCard,
  Users,
  PhoneCall,
  CalendarCheck,
  ClipboardList,
  HeartPulse,
  ShieldCheck,
  Languages,
  MapPinned,
  BookMarked,
  BookText,
  ArrowUp,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { SectionRenderer } from "@/components/guide/section-renderer";
import { DesktopToc, MobileToc } from "@/components/guide/toc";
import { guideSections as guideSectionsEn, guideMeta as guideMetaEn } from "@/content/guide/en";
import { guideSections as guideSectionsFr, guideMeta as guideMetaFr } from "@/content/guide/fr";
import type { Locale } from "@/i18n/routing";

const guideContent: Record<Locale, { sections: typeof guideSectionsEn; meta: typeof guideMetaEn }> = {
  en: { sections: guideSectionsEn, meta: guideMetaEn },
  fr: { sections: guideSectionsFr, meta: guideMetaFr },
};

const sectionIcons: Record<string, LucideIcon> = {
  welcome: BookOpen,
  system: Stethoscope,
  "health-card": IdCard,
  "care-team": Users,
  "when-to-call": PhoneCall,
  appointments: CalendarCheck,
  referrals: ClipboardList,
  "other-services": HeartPulse,
  rights: ShieldCheck,
  french: Languages,
  beyond: MapPinned,
  glossary: BookText,
  resources: BookMarked,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "guide" });
  return { title: t("hero.title") };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GuideBody locale={locale as Locale} />;
}

function GuideBody({ locale }: { locale: Locale }) {
  const t = useTranslations("guide");
  const { sections, meta } = guideContent[locale];

  const tocEntries = sections.map((s) => ({ id: s.id, number: s.number, title: s.title }));
  const calloutLabels = {
    warning: t("callout.warning"),
    info: t("callout.info"),
    tip: t("callout.tip"),
  };

  return (
    <>
      <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-background dark:from-brand-950/30">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-28 lg:px-8">
          <Reveal>
            <Eyebrow className="justify-center">{t("hero.eyebrow")}</Eyebrow>
            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={`/api/guide/pdf?locale=${locale}`} size="lg" download>
                <Download className="h-4 w-4" />
                {t("hero.downloadPdf")}
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              {t("hero.lastUpdated", { date: meta.lastUpdated })} · {meta.version}
            </p>
          </Reveal>
        </div>
      </section>

      <MobileToc
        entries={tocEntries}
        title={t("toc.title")}
        openLabel={t("toc.openLabel")}
        closeLabel={t("toc.closeLabel")}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="flex gap-16">
          <DesktopToc entries={tocEntries} title={t("toc.title")} />

          <div className="min-w-0 flex-1 space-y-24">
            {sections.map((section) => {
              const Icon = sectionIcons[section.id] ?? BookOpen;
              return (
                <article key={section.id} id={section.id} className="scroll-mt-32">
                  <div className="flex items-start gap-4">
                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 sm:flex">
                      <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-semibold tracking-widest text-brand-500">
                        {section.number}
                      </p>
                      <h2 className="mt-1 font-display text-2xl font-semibold sm:text-3xl">
                        {section.title}
                      </h2>
                      {section.intro && (
                        <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
                          {section.intro}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 sm:pl-[3.75rem]">
                    <SectionRenderer blocks={section.blocks} calloutLabels={calloutLabels} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex justify-center lg:ml-64 lg:justify-start lg:pl-0">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-brand-600"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
            {t("backToTop")}
          </a>
        </div>
      </div>

      <Section tint="brand">
        <Reveal>
          <div className="mx-auto flex max-w-xl flex-col items-center text-center">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">{t("cta.title")}</h2>
            <p className="mt-4 text-base text-white/70">{t("cta.body")}</p>
            <Button href="/contact" variant="accent" className="mt-8">
              {t("cta.button")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
