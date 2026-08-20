import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import type { ComponentProps, MouseEventHandler } from "react";

type InternalHref = ComponentProps<typeof Link>["href"];

type BaseProps = {
  variant?: "primary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler;
};

const variants: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-sm shadow-brand-900/10",
  outline:
    "border border-border bg-surface text-foreground hover:bg-surface-muted",
  ghost: "text-foreground hover:bg-surface-muted",
  accent:
    "bg-accent-peach-soft text-brand-900 hover:brightness-95 dark:text-foreground",
};

const sizes: Record<NonNullable<BaseProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

const EXTERNAL_HREF_PATTERN = /^(mailto:|tel:|https?:|\/api\/)/;

type ButtonAsLink = BaseProps & { href: InternalHref | string } & Pick<
    ComponentProps<"a">,
    "target" | "rel" | "download"
  >;
type ButtonAsButton = BaseProps & {
  href?: undefined;
} & Omit<ComponentProps<"button">, "className" | "children" | "onClick">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children, onClick } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    if (typeof props.href === "string" && EXTERNAL_HREF_PATTERN.test(props.href)) {
      return (
        <a
          href={props.href}
          className={classes}
          onClick={onClick}
          target={props.target}
          rel={props.rel}
          download={props.download}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={props.href as InternalHref}
        className={classes}
        onClick={onClick}
        target={props.target}
        rel={props.rel}
      >
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- stripping non-DOM props before spreading onto <button>
  const { href: _href, variant: _v, size: _s, className: _c, children: _ch, onClick: _oc, ...rest } = props;

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
