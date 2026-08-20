export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Health Beyond Hurdles"
    >
      <circle cx="20" cy="20" r="19.5" fill="var(--color-brand-600)" stroke="var(--color-brand-500)" />
      <path
        d="M11 27V13M11 20H16.5M16.5 13V27M23.5 27V13M23.5 20H29M29 13V27"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
