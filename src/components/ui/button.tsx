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

// Pill-shaped variants (a fixed-height background) must stay on one line, or
// wrapped text breaks out of the pill; they also get a tactile press/hover
// scale since their solid shape reads clearly at any size. Ghost is a plain
// text link with no pill background, so it can wrap like any other text
// when space is tight, and gets its lift from the underline instead.
const variants: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "whitespace-nowrap bg-brand-600 text-white hover:bg-brand-700 hover:scale-[1.03] active:scale-[0.97] shadow-sm shadow-brand-900/10",
  outline:
    "whitespace-nowrap border border-border bg-surface text-foreground hover:bg-surface-muted hover:scale-[1.03] active:scale-[0.97]",
  ghost: "text-foreground hover:bg-surface-muted",
  accent:
    "whitespace-nowrap bg-accent-peach-soft text-brand-900 hover:brightness-95 hover:scale-[1.03] active:scale-[0.97] dark:text-foreground",
};

const sizes: Record<NonNullable<BaseProps["size"]>, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-base",
};

// The last icon in a button (almost always an arrow) nudges forward on
// hover; a small, cheap bit of life that costs nothing on touch devices.
const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 [&>svg:last-child]:transition-transform [&>svg:last-child]:duration-300 hover:[&>svg:last-child]:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

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
