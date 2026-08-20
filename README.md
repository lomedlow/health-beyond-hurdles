# Health Beyond Hurdles / Santé sans obstacles

The website for **Health Beyond Hurdles / Santé sans obstacles**, a proposed bilingual (French & English) nonprofit based in Regina, Saskatchewan. It introduces the organization's mission and vision, and its first program, the **Newcomer Health Navigation Project**, to newcomers, volunteers, partners, and funders.

Built with Next.js 16 (App Router), fully bilingual (`/en` and `/fr`), with light and dark themes, and mobile-first responsive layouts throughout.

## Tech stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **next-intl**: locale routing (`/en`, `/fr`) with localized URLs (e.g. `/fr/a-propos`), all content translated
- **next-themes**: light/dark mode, respects system preference
- **Tailwind CSS v4**: design tokens (teal brand scale + pastel accent palette) defined in `src/app/globals.css`
- **Framer Motion**: scroll-reveal animation, respects `prefers-reduced-motion`
- **Radix UI**: accessible mobile nav (Dialog) and collapsible topic lists (Accordion)
- **lucide-react**: icons
- `Fraunces` (display serif) + `Inter` (body) via `next/font`, self-hosted

No stock photography is used; the design relies on typography, color, and custom SVG illustration instead.

## Getting started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000). It redirects to `/en` (or `/fr` based on your browser's language).

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## Deploying

The easiest path is [Vercel](https://vercel.com/new): import this GitHub repository, leave the default Next.js settings, and deploy. No environment variables are required for the site to run; see **Before going live**, below, for what to configure first.

## Project structure

```
src/
  app/
    [locale]/            # every page, once per locale (en/fr)
      page.tsx           # home
      about/  program/  get-involved/  partners/  contact/  donate/
      layout.tsx         # root layout: fonts, theme + i18n providers, header/footer
      opengraph-image.tsx
    api/
      contact/route.ts   # contact form submission handler (stub, see below)
      newsletter/route.ts
    sitemap.ts  robots.ts  icon.svg
  components/
    ui/          # Button, Badge, Card, Section, Accordion, IconTile, StatTile...
    layout/      # Header, Footer
    theme/       # ThemeProvider, ThemeToggle
    locale/      # LocaleSwitcher
    sections/    # page-specific pieces (forms, hero illustration)
  i18n/          # next-intl routing, navigation, request config
  config/site.ts # site-wide facts (see below)
  proxy.ts       # next-intl locale middleware (Next 16 renamed "middleware" to "proxy";
                 # must live inside src/ since the project uses a src directory)
messages/
  en.json  fr.json        # every string on the site, in both languages
```

## Editing content

All copy lives in `messages/en.json` and `messages/fr.json`, organized by page. Both files must have exactly matching keys; next-intl will throw if a translation is missing. Edit both languages together to keep them in sync.

## Before going live

A few things are intentionally left as clearly-marked placeholders, since the organization is still proposed and this information wasn't available yet:

- **`src/config/site.ts`**: real domain, monitored email inbox, and social links (each marked `TODO`).
- **Contact & newsletter forms** (`src/app/api/contact/route.ts`, `src/app/api/newsletter/route.ts`): currently validate input and return success so the UI is fully demoable, but don't send anywhere yet. Wire them up to a real email/CRM provider (e.g. Resend, Mailchimp) before launch.
- **Donate page**: intentionally a "coming soon" page with a newsletter opt-in, since the organization can't yet accept donations. Replace with real payment/donation infrastructure once the nonprofit is formally established.

## Notes on Next.js 16

This project uses `src/proxy.ts` (not `middleware.ts`). Next 16 renamed the file/export from `middleware` to `proxy`. It must live inside `src/` because the project uses a `src` directory; a `proxy.ts`/`middleware.ts` at the repo root is silently ignored.
