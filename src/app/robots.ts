import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { siteConfig } from "@/config/site";

/**
 * Host-aware so each domain's own /robots.txt points at its own
 * /sitemap.xml (the sitemap itself lists both healthbeyondhurdles.ca and
 * santesansobstacles.ca URLs either way, but declaring a same-origin
 * sitemap is the conventional, unsurprising thing for a crawler to see).
 * Falls back to the canonical domain for any other host (previews,
 * localhost).
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get("host");
  const origin = host ? `https://${host}` : siteConfig.url;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}
