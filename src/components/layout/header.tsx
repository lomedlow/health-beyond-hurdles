"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { BrandLockup } from "@/components/layout/brand-lockup";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { LocaleSwitcher } from "@/components/locale/locale-switcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/program", key: "program" },
  { href: "/guide", key: "guide" },
  { href: "/get-involved", key: "getInvolved" },
  { href: "/partners", key: "partners" },
  { href: "/contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <BrandLockup onNavigate={() => setOpen(false)} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-surface-muted hover:text-foreground xl:px-4",
                  active ? "text-brand-600" : "text-muted-foreground",
                )}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex xl:gap-3">
          <LocaleSwitcher />
          <ThemeToggle />
          <Button href="/donate" size="sm" variant="accent">
            {t("support")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label={t("openMenu")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground"
              >
                <Menu className="h-5 w-5" />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-brand-950/40 backdrop-blur-sm data-[state=open]:animate-fade-in" />
              <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col gap-8 bg-background p-6 shadow-2xl focus:outline-none">
                <div className="flex items-start justify-between gap-4">
                  <Dialog.Title className="sr-only">
                    Health Beyond Hurdles / Santé Sans Obstacles
                  </Dialog.Title>
                  <BrandLockup onNavigate={() => setOpen(false)} />
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      aria-label={t("closeMenu")}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </Dialog.Close>
                </div>

                <nav className="flex flex-col gap-1" aria-label="Primary">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-lg font-medium transition-colors hover:bg-surface-muted",
                        pathname === item.href ? "text-brand-600" : "text-foreground",
                      )}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto flex flex-col gap-4">
                  <LocaleSwitcher className="self-start" />
                  <Button href="/donate" onClick={() => setOpen(false)} variant="accent">
                    {t("support")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
