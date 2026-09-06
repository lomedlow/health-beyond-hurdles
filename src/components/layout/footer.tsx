import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BrandLockup } from "@/components/layout/brand-lockup";
import { siteConfig } from "@/config/site";
import { Mail, MapPin } from "lucide-react";
import { NewsletterForm } from "@/components/sections/newsletter-form";

export function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");

  const columns = [
    {
      title: t("organization"),
      links: [
        { href: "/about" as const, label: t("about") },
        { href: "/program" as const, label: t("program") },
        { href: "/guide" as const, label: t("guide") },
        { href: "/get-involved" as const, label: t("getInvolved") },
        { href: "/partners" as const, label: t("partners") },
      ],
    },
    {
      title: t("connect"),
      links: [
        { href: "/contact" as const, label: t("contact") },
        { href: "/donate" as const, label: t("support") },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-surface-muted">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr_1fr]">
          <div>
            <BrandLockup size="footer" />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {tf("tagline")}
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                {siteConfig.location.city}, {siteConfig.location.province}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-semibold text-foreground">
              {tf("newsletterTitle")}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">{tf("newsletterBody")}</p>
            <NewsletterForm compact className="mt-4" />
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8 text-xs text-muted-foreground">
          <p className="max-w-3xl">{tf("proposedNotice")}</p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Health Beyond Hurdles / Santé Sans Obstacles.{" "}
              {tf("rights")}
            </p>
            <nav className="flex items-center gap-5" aria-label={tf("legal")}>
              <Link href="/privacy" className="transition-colors hover:text-foreground">
                {tf("privacy")}
              </Link>
              <Link href="/terms" className="transition-colors hover:text-foreground">
                {tf("terms")}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
