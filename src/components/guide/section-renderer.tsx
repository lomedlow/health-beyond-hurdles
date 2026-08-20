import { AlertTriangle, Info, Lightbulb, Phone, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GuideBlock } from "@/content/guide/types";

const calloutStyles = {
  warning: {
    icon: AlertTriangle,
    classes: "border-accent-coral-soft bg-accent-coral-soft/60",
    iconClasses: "text-accent-coral",
  },
  info: {
    icon: Info,
    classes: "border-accent-sky-soft bg-accent-sky-soft/60",
    iconClasses: "text-accent-sky",
  },
  tip: {
    icon: Lightbulb,
    classes: "border-accent-butter-soft bg-accent-butter-soft/60",
    iconClasses: "text-accent-butter",
  },
} as const;

function toHref(url?: string) {
  if (!url) return undefined;
  if (url.startsWith("http")) return url;
  if (url.includes("@")) return `mailto:${url}`;
  return `https://${url}`;
}

function toTelHref(phone: string) {
  const digits = phone.replace(/[^\d+]/g, "");
  return `tel:${digits}`;
}

export function SectionRenderer({
  blocks,
  calloutLabels,
}: {
  blocks: GuideBlock[];
  calloutLabels: Record<"warning" | "info" | "tip", string>;
}) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-foreground/85">
                {block.text}
              </p>
            );

          case "subheading":
            return (
              <h3 key={i} className="pt-2 font-display text-lg font-semibold text-foreground">
                {block.text}
              </h3>
            );

          case "list":
            return (
              <ul
                key={i}
                className={cn(
                  "space-y-2.5 pl-1 text-base leading-relaxed text-foreground/85",
                  block.ordered && "list-decimal pl-6 marker:text-brand-600 marker:font-semibold",
                )}
              >
                {block.items.map((item, j) =>
                  block.ordered ? (
                    <li key={j} className="pl-1">
                      {item}
                    </li>
                  ) : (
                    <li key={j} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            );

          case "callout": {
            const style = calloutStyles[block.tone];
            const Icon = style.icon;
            return (
              <div
                key={i}
                className={cn("rounded-2xl border-l-4 p-5", style.classes)}
              >
                <div className="flex items-start gap-3">
                  <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", style.iconClasses)} aria-hidden="true" strokeWidth={1.75} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-foreground/70">
                      {calloutLabels[block.tone]}
                      {block.title ? `: ${block.title}` : ""}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">{block.text}</p>
                  </div>
                </div>
              </div>
            );
          }

          case "contacts":
            return (
              <div key={i} className="divide-y divide-border border-t border-border">
                {block.items.map((c) => (
                  <div key={c.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{c.name}</p>
                      <p className="text-sm text-muted-foreground">{c.detail}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
                      {c.phone && (
                        <a
                          href={toTelHref(c.phone)}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline"
                        >
                          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                          {c.phone}
                        </a>
                      )}
                      {c.url && (
                        <a
                          href={toHref(c.url)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:underline"
                        >
                          {c.url.replace(/^https?:\/\//, "")}
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            );

          case "glossary":
            return (
              <dl key={i} className="divide-y divide-border border-t border-border">
                {block.items.map((g) => (
                  <div key={g.term} className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[minmax(0,220px)_1fr] sm:gap-6">
                    <dt className="text-sm font-semibold text-foreground">{g.term}</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">{g.definition}</dd>
                  </div>
                ))}
              </dl>
            );

          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-surface-muted">
                      {block.headers.map((h) => (
                        <th key={h} className="border-b border-border px-4 py-3 font-semibold text-foreground">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-border last:border-0">
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-3.5 align-top leading-relaxed text-foreground/85">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
