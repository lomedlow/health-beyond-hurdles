import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/icons/logo";
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
            <Link href="/" className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="font-display text-lg font-semibold">
                Health Beyond Hurdles
              </span>
            </Link>
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

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Health Beyond Hurdles / Santé sans obstacles.{" "}
            {tf("rights")}
          </p>
          <p className="max-w-2xl">{tf("proposedNotice")}</p>
        </div>
      </div>
    </footer>
  );
}
