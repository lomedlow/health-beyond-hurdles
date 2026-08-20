import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { registerPdfFonts } from "@/lib/pdf/fonts";
import { GuideDocument } from "@/lib/pdf/guide-document";
import { guideSections as sectionsEn, guideMeta as metaEn } from "@/content/guide/en";
import { guideSections as sectionsFr, guideMeta as metaFr } from "@/content/guide/fr";
import { routing, type Locale } from "@/i18n/routing";

export const runtime = "nodejs";

const contentByLocale: Record<Locale, { sections: typeof sectionsEn; meta: typeof metaEn }> = {
  en: { sections: sectionsEn, meta: metaEn },
  fr: { sections: sectionsFr, meta: metaFr },
};

export async function GET(request: NextRequest) {
  const requested = request.nextUrl.searchParams.get("locale");
  const locale: Locale = routing.locales.includes(requested as Locale)
    ? (requested as Locale)
    : routing.defaultLocale;

  registerPdfFonts();

  const { sections, meta } = contentByLocale[locale];
  const buffer = await renderToBuffer(
    <GuideDocument locale={locale} sections={sections} meta={meta} />,
  );

  return new NextResponse(new Uint8Array(buffer), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="health-beyond-hurdles-guide-${locale}.pdf"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
