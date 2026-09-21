/**
 * Central place for real-world facts that are still placeholders.
 * Replace these before the site goes live publicly; everything here
 * is either explicitly provided by the org or an honest "TBD" placeholder,
 * never an invented fact (no fake phone numbers, staff names, or addresses).
 */
import type { Locale } from "@/i18n/routing";

export const siteConfig = {
  name: "Health Beyond Hurdles",
  nameFr: "Santé Sans Obstacles",
  shortName: "HBH",
  // The canonical/primary domain. Each locale actually lives on its own
  // domain in production (see localeDomains below); this one is the
  // fallback used wherever a single URL is unavoidably needed (e.g. a
  // metadataBase default, JSON-LD, etc.) without a locale in scope.
  url: "https://healthbeyondhurdles.ca",
  email: "info@healthbeyondhurdles.ca",
  /**
   * One domain per language, like francaisanglais.ca / englishfrench.ca:
   * the English site lives at healthbeyondhurdles.ca, the French one at
   * santesansobstacles.ca, each with no /en or /fr prefix. Configured in
   * `src/i18n/routing.ts`'s `domains` option; used here to build absolute,
   * locale-correct URLs for metadata and the sitemap. On any other host
   * (a Vercel preview URL, localhost), next-intl falls back to the
   * ordinary /en, /fr prefixed routing untouched by any of this.
   */
  localeDomains: {
    en: "https://healthbeyondhurdles.ca",
    fr: "https://santesansobstacles.ca",
  } satisfies Record<Locale, string>,
  location: {
    city: "Regina",
    province: "Saskatchewan",
    country: "Canada",
  },
  social: {
    // TODO: add real social profiles once created
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  status: "proposed" as const,
};

export function getLocaleOrigin(locale: Locale): string {
  return siteConfig.localeDomains[locale];
}

export type SiteConfig = typeof siteConfig;
