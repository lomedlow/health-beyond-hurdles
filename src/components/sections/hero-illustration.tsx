export function HeroIllustration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -top-40 right-[-10%] h-[620px] w-[620px] rounded-full opacity-60 blur-3xl dark:opacity-25"
        style={{
          background:
            "radial-gradient(circle, var(--color-brand-200) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-32 left-[-8%] h-[420px] w-[420px] rounded-full opacity-40 blur-3xl dark:opacity-20"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent-peach-soft) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
