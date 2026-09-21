import type { MetadataRoute } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { getLocaleOrigin } from "@/config/site";

const pages = [
  "/",
  "/about",
  "/program",
  "/guide",
  "/get-involved",
  "/partners",
  "/contact",
  "/donate",
  "/privacy",
  "/terms",
] as const;

/**
 * The bare, unprefixed path for a page in a given locale, straight from
 * the pathnames map in routing.ts ("/about" in English, "/a-propos" in
 * French). Deliberately not `getPathname` from the navigation helpers:
 * that always applies the top-level `always` localePrefix mode (giving
 * "/en/about"), which is only correct for the Vercel-preview/localhost
 * fallback, not for the real domains, where each locale's own domain
 * serves it with no prefix at all (routing.ts's per-domain "as-needed").
 */
function localizedPath(page: (typeof pages)[number], locale: Locale): string {
  const entry = routing.pathnames[page];
  return typeof entry === "string" ? entry : entry[locale];
}

/**
 * Each language is its own site on its own domain (healthbeyondhurdles.ca,
 * santesansobstacles.ca), not two versions of one site, so every page
 * gets one sitemap entry per locale rather than a single canonical URL
 * with alternates. Each entry still cross-links to its sibling via
 * hreflang alternates.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: `${getLocaleOrigin(locale)}${localizedPath(page, locale)}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((altLocale) => [
            altLocale,
            `${getLocaleOrigin(altLocale)}${localizedPath(page, altLocale)}`,
          ]),
        ),
      },
    })),
  );
}
