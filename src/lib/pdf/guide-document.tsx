import { Document, Page, Text, View, StyleSheet, Link, Svg, Circle, Path } from "@react-pdf/renderer";
import type { GuideBlock, GuideMeta, GuideSection } from "@/content/guide/types";
import type { Locale } from "@/i18n/routing";
import { pdfColors as c } from "./colors";
import { pdfLabels } from "./labels";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 10.5,
    color: c.foreground,
    backgroundColor: c.background,
    paddingTop: 56,
    paddingBottom: 56,
    paddingHorizontal: 48,
  },
  coverPage: {
    fontFamily: "Inter",
    backgroundColor: c.brand950,
    color: "#ffffff",
    padding: 56,
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 8,
    color: c.muted,
    borderTopWidth: 0.75,
    borderTopColor: c.border,
    paddingTop: 8,
  },
});

function Footer({ orgLabel }: { orgLabel: string }) {
  return (
    <View style={styles.footer} fixed>
      <Text>{orgLabel}</Text>
      <Text
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
    </View>
  );
}

function Monogram({ size = 64 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40">
      <Circle cx={20} cy={20} r={19.5} fill={c.brand600} stroke={c.brand500} />
      <Path
        d="M11 27V13M11 20H16.5M16.5 13V27M23.5 27V13M23.5 20H29M29 13V27"
        stroke="#ffffff"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  );
}

function CoverPage({
  meta,
  labels,
}: {
  meta: GuideMeta;
  labels: (typeof pdfLabels)[Locale];
}) {
  return (
    <Page size="A4" style={styles.coverPage}>
      <Monogram size={56} />
      <View style={{ marginTop: 28 }}>
        <Text style={{ fontSize: 9, fontWeight: 600, letterSpacing: 1.5, color: c.brand100, textTransform: "uppercase" }}>
          {labels.kicker}
        </Text>
        <Text style={{ fontFamily: "Fraunces", fontWeight: 600, fontSize: 34, marginTop: 14, lineHeight: 1.15 }}>
          {labels.title}
        </Text>
        <Text style={{ fontSize: 12.5, marginTop: 14, color: c.brand100, lineHeight: 1.5, maxWidth: 380 }}>
          {labels.subtitle}
        </Text>
      </View>

      <View style={{ marginTop: "auto" }}>
        <View style={{ height: 0.75, backgroundColor: "rgba(255,255,255,0.15)", marginBottom: 16 }} />
        <Text style={{ fontFamily: "Fraunces", fontStyle: "italic", fontSize: 11, color: c.brand100, lineHeight: 1.5, maxWidth: 420 }}>
          {labels.preparedFor}
        </Text>
        <Text style={{ fontSize: 9, marginTop: 14, color: "rgba(255,255,255,0.55)" }}>
          {meta.lastUpdated} · {meta.version}
        </Text>
        <Text style={{ fontSize: 8.5, marginTop: 10, color: "rgba(255,255,255,0.55)", maxWidth: 420, lineHeight: 1.5 }}>
          {labels.disclaimer}
        </Text>
      </View>
    </Page>
  );
}

function TocPage({
  sections,
  labels,
}: {
  sections: GuideSection[];
  labels: (typeof pdfLabels)[Locale];
}) {
  return (
    <Page size="A4" style={styles.page}>
      <Text style={{ fontFamily: "Fraunces", fontSize: 22, fontWeight: 600, marginBottom: 24, color: c.brand900 }}>
        {labels.toc}
      </Text>
      <View>
        {sections.map((s) => (
          <Link key={s.id} src={`#sec-${s.id}`} style={{ textDecoration: "none" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 14,
                paddingVertical: 9,
                borderBottomWidth: 0.75,
                borderBottomColor: c.border,
              }}
            >
              <Text style={{ fontSize: 9, color: c.brand500, fontWeight: 600, width: 20 }}>{s.number}</Text>
              <Text style={{ fontSize: 11.5, color: c.foreground, fontWeight: 500 }}>{s.title}</Text>
            </View>
          </Link>
        ))}
      </View>
      <Footer orgLabel={labels.footerOrg} />
    </Page>
  );
}

const calloutTone: Record<string, { bg: string; bar: string }> = {
  warning: { bg: c.coralSoft, bar: c.coral },
  info: { bg: c.skySoft, bar: c.sky },
  tip: { bg: c.butterSoft, bar: c.butter },
};

function Block({
  block,
  labels,
}: {
  block: GuideBlock;
  labels: (typeof pdfLabels)[Locale];
}) {
  switch (block.type) {
    case "p":
      return (
        <Text style={{ fontSize: 10.5, lineHeight: 1.6, marginBottom: 10, color: c.foreground }}>
          {block.text}
        </Text>
      );

    case "subheading":
      return (
        <Text
          style={{
            fontFamily: "Fraunces",
            fontWeight: 600,
            fontSize: 13,
            color: c.brand900,
            marginTop: 10,
            marginBottom: 6,
          }}
        >
          {block.text}
        </Text>
      );

    case "list":
      return (
        <View style={{ marginBottom: 10 }}>
          {block.items.map((item, i) => (
            <View key={i} style={{ display: "flex", flexDirection: "row", marginBottom: 5 }}>
              <Text style={{ width: 16, fontSize: 10.5, color: c.brand600, fontWeight: 600 }}>
                {block.ordered ? `${i + 1}.` : "•"}
              </Text>
              <Text style={{ fontSize: 10.5, lineHeight: 1.55, flex: 1, color: c.foreground }}>{item}</Text>
            </View>
          ))}
        </View>
      );

    case "callout": {
      const tone = calloutTone[block.tone] ?? calloutTone.info;
      const toneLabel =
        block.tone === "warning" ? labels.calloutWarning : block.tone === "tip" ? labels.calloutTip : labels.calloutInfo;
      return (
        <View
          style={{
            backgroundColor: tone.bg,
            borderLeftWidth: 2.5,
            borderLeftColor: tone.bar,
            padding: 10,
            marginBottom: 12,
            borderRadius: 3,
          }}
          wrap={false}
        >
          <Text style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.6, color: c.foreground, marginBottom: 3 }}>
            {toneLabel}
            {block.title ? `: ${block.title}` : ""}
          </Text>
          <Text style={{ fontSize: 10, lineHeight: 1.55, color: c.foreground }}>{block.text}</Text>
        </View>
      );
    }

    case "contacts":
      return (
        <View style={{ marginBottom: 12, borderTopWidth: 0.75, borderTopColor: c.border }}>
          {block.items.map((item) => (
            <View
              key={item.name}
              style={{
                paddingVertical: 8,
                borderBottomWidth: 0.75,
                borderBottomColor: c.border,
              }}
              wrap={false}
            >
              <Text style={{ fontSize: 10.5, fontWeight: 600, color: c.foreground }}>{item.name}</Text>
              <Text style={{ fontSize: 9.5, color: c.muted, marginTop: 1.5 }}>{item.detail}</Text>
              <View style={{ display: "flex", flexDirection: "row", gap: 16, marginTop: 3 }}>
                {item.phone && (
                  <Text style={{ fontSize: 9.5, fontWeight: 600, color: c.brand600 }}>
                    {labels.phoneLabel}: {item.phone}
                  </Text>
                )}
                {item.url && <Text style={{ fontSize: 9.5, fontWeight: 600, color: c.brand600 }}>{item.url}</Text>}
              </View>
            </View>
          ))}
        </View>
      );

    case "glossary":
      return (
        <View style={{ marginBottom: 12, borderTopWidth: 0.75, borderTopColor: c.border }}>
          {block.items.map((item) => (
            <View
              key={item.term}
              style={{
                display: "flex",
                flexDirection: "row",
                paddingVertical: 7,
                borderBottomWidth: 0.75,
                borderBottomColor: c.border,
              }}
              wrap={false}
            >
              <Text style={{ width: 170, fontSize: 10, fontWeight: 600, color: c.foreground }}>{item.term}</Text>
              <Text style={{ flex: 1, fontSize: 9.5, lineHeight: 1.5, color: c.muted }}>{item.definition}</Text>
            </View>
          ))}
        </View>
      );

    case "table":
      return (
        <View style={{ marginBottom: 12, borderWidth: 0.75, borderColor: c.border, borderRadius: 3 }}>
          <View style={{ display: "flex", flexDirection: "row", backgroundColor: c.surfaceMuted }}>
            {block.headers.map((h, i) => (
              <Text
                key={i}
                style={{
                  flex: 1,
                  fontSize: 9,
                  fontWeight: 700,
                  padding: 6,
                  color: c.brand900,
                  borderBottomWidth: 0.75,
                  borderBottomColor: c.border,
                }}
              >
                {h}
              </Text>
            ))}
          </View>
          {block.rows.map((row, ri) => (
            <View key={ri} style={{ display: "flex", flexDirection: "row" }} wrap={false}>
              {row.map((cell, ci) => (
                <Text
                  key={ci}
                  style={{
                    flex: 1,
                    fontSize: 9,
                    lineHeight: 1.45,
                    padding: 6,
                    color: c.foreground,
                    borderBottomWidth: ri === block.rows.length - 1 ? 0 : 0.75,
                    borderBottomColor: c.border,
                  }}
                >
                  {cell}
                </Text>
              ))}
            </View>
          ))}
        </View>
      );

    default:
      return null;
  }
}

function SectionBlock({
  section,
  labels,
}: {
  section: GuideSection;
  labels: (typeof pdfLabels)[Locale];
}) {
  return (
    <View id={`sec-${section.id}`} style={{ marginBottom: 22 }}>
      <View wrap={false}>
        <Text style={{ fontSize: 8.5, fontWeight: 700, color: c.brand500, letterSpacing: 1 }}>
          {section.number}
        </Text>
        <Text style={{ fontFamily: "Fraunces", fontWeight: 600, fontSize: 17, color: c.brand900, marginTop: 3, marginBottom: section.intro ? 4 : 10 }}>
          {section.title}
        </Text>
        {section.intro && (
          <Text style={{ fontSize: 10, lineHeight: 1.55, color: c.muted, marginBottom: 10 }}>
            {section.intro}
          </Text>
        )}
      </View>
      {section.blocks.map((block, i) => (
        <Block key={i} block={block} labels={labels} />
      ))}
    </View>
  );
}

export function GuideDocument({
  locale,
  sections,
  meta,
}: {
  locale: Locale;
  sections: GuideSection[];
  meta: GuideMeta;
}) {
  const labels = pdfLabels[locale];

  return (
    <Document
      title={labels.title}
      author="Health Beyond Hurdles / Santé sans obstacles"
      subject={labels.subtitle}
    >
      <CoverPage meta={meta} labels={labels} />
      <TocPage sections={sections} labels={labels} />
      <Page size="A4" style={styles.page} wrap>
        {sections.map((section) => (
          <SectionBlock key={section.id} section={section} labels={labels} />
        ))}
        <Footer orgLabel={labels.footerOrg} />
      </Page>
    </Document>
  );
}
