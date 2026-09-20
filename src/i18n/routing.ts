import { defineRouting } from "next-intl/routing";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  // Falls back to this for any host that isn't one of the two domains
  // below (a Vercel preview URL, localhost): both languages stay
  // reachable there via /en and /fr, exactly as before.
  localePrefix: "always",
  /**
   * One language, one domain, no prefix, like francaisanglais.ca and
   * englishfrench.ca: healthbeyondhurdles.ca serves English only, at
   * bare paths ("/about", not "/en/about"); santesansobstacles.ca serves
   * French only, same way. Each domain's `locales` array is
   * intentionally restricted to just its own language, so a link built
   * for the other locale (e.g. the header's language switcher) is
   * automatically 307-redirected by the middleware to the sibling
   * domain rather than rendering the other language on this one, and a
   * bookmarked "wrong" URL like healthbeyondhurdles.ca/fr behaves the
   * same way instead of silently serving French off the English domain.
   * www subdomains are included so this still matches if Vercel ever
   * serves a request from the www host instead of the apex.
   */
  domains: [
    {
      domain: "healthbeyondhurdles.ca",
      defaultLocale: "en",
      locales: ["en"],
      localePrefix: "as-needed",
    },
    {
      domain: "www.healthbeyondhurdles.ca",
      defaultLocale: "en",
      locales: ["en"],
      localePrefix: "as-needed",
    },
    {
      domain: "santesansobstacles.ca",
      defaultLocale: "fr",
      locales: ["fr"],
      localePrefix: "as-needed",
    },
    {
      domain: "www.santesansobstacles.ca",
      defaultLocale: "fr",
      locales: ["fr"],
      localePrefix: "as-needed",
    },
  ],
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      fr: "/a-propos",
    },
    "/program": {
      en: "/program",
      fr: "/programme",
    },
    "/guide": {
      en: "/guide",
      fr: "/guide",
    },
    "/get-involved": {
      en: "/get-involved",
      fr: "/simpliquer",
    },
    "/partners": {
      en: "/partners",
      fr: "/partenaires",
    },
    "/contact": {
      en: "/contact",
      fr: "/contact",
    },
    "/donate": {
      en: "/donate",
      fr: "/faire-un-don",
    },
    "/privacy": {
      en: "/privacy",
      fr: "/confidentialite",
    },
    "/terms": {
      en: "/terms",
      fr: "/conditions",
    },
  },
});
