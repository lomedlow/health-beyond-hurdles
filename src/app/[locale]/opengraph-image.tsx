import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import fs from "node:fs/promises";
import path from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = {
  ink: "#082826",
  deep: "#0e3f3a",
  mid: "#146157",
  accent: "#8fd0bd",
  pale: "#d9f0e8",
};

/**
 * The share preview. The wordmark follows the language of the page being
 * shared: a French page puts Santé Sans Obstacles on top, an English page
 * puts Health Beyond Hurdles on top.
 */
export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const root = process.cwd();
  const [mark, fraunces, interRegular, interSemi] = await Promise.all([
    fs.readFile(path.join(root, "public/brand/logo-globe.png")),
    fs.readFile(path.join(root, "src/lib/pdf/fonts/Fraunces-SemiBold.woff")),
    fs.readFile(path.join(root, "src/lib/pdf/fonts/Inter-Regular.woff")),
    fs.readFile(path.join(root, "src/lib/pdf/fonts/Inter-SemiBold.woff")),
  ]);

  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;
  const isFr = locale === "fr";
  const topName = isFr ? "SANTÉ SANS OBSTACLES" : "HEALTH BEYOND HURDLES";
  const bottomName = isFr ? "HEALTH BEYOND HURDLES" : "SANTÉ SANS OBSTACLES";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 76px",
          background: `linear-gradient(135deg, ${BRAND.ink} 0%, ${BRAND.deep} 55%, ${BRAND.mid} 100%)`,
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        {/* soft glow behind the mark */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: "rgba(143, 208, 189, 0.13)",
          }}
        />

        {/* wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 26 }}>
          <img src={markSrc} width={104} height={104} alt="" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 34,
                fontWeight: 600,
                letterSpacing: 0.5,
                color: "#ffffff",
              }}
            >
              {topName}
            </div>
            <div
              style={{
                width: "100%",
                height: 1,
                background: "rgba(255,255,255,0.28)",
                marginTop: 9,
                marginBottom: 9,
              }}
            />
            <div
              style={{
                fontSize: 22,
                letterSpacing: 1.6,
                color: BRAND.accent,
              }}
            >
              {bottomName}
            </div>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Fraunces",
              fontSize: 56,
              fontWeight: 600,
              lineHeight: 1.12,
              color: "#ffffff",
              maxWidth: 940,
            }}
          >
            {t("defaultTitle").split(":")[0]}
          </div>
          <div
            style={{
              fontSize: 24,
              marginTop: 22,
              lineHeight: 1.45,
              color: BRAND.pale,
              opacity: 0.82,
              maxWidth: 900,
            }}
          >
            {t("description")}
          </div>
        </div>

        {/* footer rule */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 52, height: 3, background: BRAND.accent }} />
          <div style={{ fontSize: 21, color: BRAND.accent, fontWeight: 600 }}>
            Regina, Saskatchewan
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interSemi, weight: 600, style: "normal" },
      ],
    },
  );
}
