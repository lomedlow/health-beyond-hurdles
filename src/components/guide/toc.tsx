"use client";

import { useEffect, useRef, useState } from "react";
import { List, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TocEntry {
  id: string;
  number: string;
  title: string;
}

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0]);
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const offset = 140;
        let current = ids[0];
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top - offset <= 0) {
            current = id;
          }
        }
        setActiveId(current);
        ticking.current = false;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids]);

  return activeId;
}

function TocList({
  entries,
  activeId,
  onNavigate,
}: {
  entries: TocEntry[];
  activeId: string;
  onNavigate?: () => void;
}) {
  return (
    <ol className="space-y-1">
      {entries.map((entry) => {
        const active = entry.id === activeId;
        return (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              onClick={onNavigate}
              className={cn(
                "flex items-baseline gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-surface-muted font-semibold text-brand-600"
                  : "text-muted-foreground hover:bg-surface-muted hover:text-foreground",
              )}
            >
              <span className="w-5 shrink-0 font-mono text-xs tabular-nums opacity-60">
                {entry.number}
              </span>
              <span className="leading-snug">{entry.title}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export function DesktopToc({ entries, title }: { entries: TocEntry[]; title: string }) {
  const activeId = useActiveSection(entries.map((e) => e.id));

  return (
    <nav
      aria-label={title}
      className="sticky top-28 hidden max-h-[calc(100vh-8rem)] w-64 shrink-0 overflow-y-auto pb-10 lg:block"
    >
      <p className="px-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </p>
      <div className="mt-3">
        <TocList entries={entries} activeId={activeId} />
      </div>
    </nav>
  );
}

export function MobileToc({
  entries,
  title,
  openLabel,
  closeLabel,
}: {
  entries: TocEntry[];
  title: string;
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(entries.map((e) => e.id));
  const activeEntry = entries.find((e) => e.id === activeId);

  return (
    <div className="sticky top-20 z-30 border-b border-border bg-background/95 px-6 py-3 backdrop-blur-md lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium"
      >
        <span className="flex items-center gap-2">
          <List className="h-4 w-4 text-brand-600" aria-hidden="true" />
          {openLabel}
          {activeEntry && (
            <span className="text-muted-foreground">· {activeEntry.title}</span>
          )}
        </span>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full max-h-[70vh] overflow-y-auto border-b border-border bg-background px-6 py-4 shadow-lg">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
              {title}
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={closeLabel}
              className="rounded-full p-1 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <TocList entries={entries} activeId={activeId} onNavigate={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
