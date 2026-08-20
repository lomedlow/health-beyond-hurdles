"use client";

import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type AccordionProps = {
  children: React.ReactNode;
  className?: string;
} & (
  | { type?: "single"; collapsible?: boolean }
  | { type: "multiple"; collapsible?: undefined }
);

export function Accordion({ children, className, ...props }: AccordionProps) {
  if (props.type === "multiple") {
    return (
      <RadixAccordion.Root
        type="multiple"
        className={cn("flex flex-col gap-3", className)}
      >
        {children}
      </RadixAccordion.Root>
    );
  }

  return (
    <RadixAccordion.Root
      type="single"
      collapsible={props.collapsible ?? true}
      className={cn("flex flex-col gap-3", className)}
    >
      {children}
    </RadixAccordion.Root>
  );
}

export function AccordionItem({
  value,
  title,
  badge,
  children,
}: {
  value: string;
  title: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <RadixAccordion.Item
      value={value}
      className="overflow-hidden rounded-3xl border border-border bg-surface"
    >
      <RadixAccordion.Header>
        <RadixAccordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8">
          <span className="font-display text-lg font-semibold sm:text-xl">{title}</span>
          <span className="flex shrink-0 items-center gap-3">
            {badge && (
              <span className="hidden rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-800 sm:inline-block">
                {badge}
              </span>
            )}
            <ChevronDown
              className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-180"
              aria-hidden="true"
            />
          </span>
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_0.25s_ease] data-[state=open]:animate-[accordion-down_0.25s_ease]">
        <div className="px-6 pb-7 sm:px-8">{children}</div>
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  );
}
