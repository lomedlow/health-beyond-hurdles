import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";

const pages = ["/", "/about", "/program", "/get-involved", "/partners", "/contact", "/donate"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${siteConfig.url}${getPathname({ locale: routing.defaultLocale, href: page })}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [
          locale,
          `${siteConfig.url}${getPathname({ locale, href: page })}`,
        ]),
      ),
    },
  }));
}
