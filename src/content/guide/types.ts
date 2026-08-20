export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "callout"; tone: "info" | "warning" | "tip"; title: string; text: string }
  | { type: "subheading"; text: string }
  | {
      type: "contacts";
      items: { name: string; detail: string; phone?: string; url?: string }[];
    }
  | { type: "glossary"; items: { term: string; definition: string }[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export interface GuideSection {
  id: string;
  number: string;
  title: string;
  intro?: string;
  blocks: GuideBlock[];
}

export interface GuideMeta {
  lastUpdated: string;
  version: string;
}
