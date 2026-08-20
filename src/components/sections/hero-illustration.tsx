export function HeroIllustration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <svg
        className="absolute -top-24 left-1/2 h-[640px] w-[1400px] -translate-x-1/2 opacity-70 dark:opacity-40"
        viewBox="0 0 1400 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="220" cy="160" r="220" fill="var(--color-accent-mint-soft)" />
        <circle cx="1180" cy="140" r="180" fill="var(--color-accent-sky-soft)" />
        <circle cx="700" cy="480" r="260" fill="var(--color-accent-peach-soft)" />
        <circle cx="1050" cy="440" r="140" fill="var(--color-accent-lavender-soft)" />
        <circle cx="120" cy="480" r="120" fill="var(--color-accent-coral-soft)" />
      </svg>
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35] dark:opacity-[0.12]"
        viewBox="0 0 1400 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-40 420C220 340 380 500 620 380C860 260 980 460 1200 340C1340 265 1400 300 1440 320"
          stroke="var(--color-brand-500)"
          strokeWidth="2"
          strokeDasharray="2 14"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
