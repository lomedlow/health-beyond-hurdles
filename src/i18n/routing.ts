import { defineRouting } from "next-intl/routing";

export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always",
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
  },
});
