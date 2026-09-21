/** Renders `value` as-is. No count-up: the site's only animation is headings. */
export function CountUpValue({ value, className }: { value: string; className?: string }) {
  return <span className={className}>{value}</span>;
}
