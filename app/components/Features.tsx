const items = [
  {
    title: "Track all subscriptions",
    desc: "One list for every service you pay for.",
  },
  {
    title: "Smart insights",
    desc: "See totals and trends at a glance.",
  },
  {
    title: "Never miss a payment",
    desc: "Reminders before renewals hit.",
  },
] as const;

export function Features() {
  return (
    <section
      id="features"
      className="lp-animate-in lp-delay-4 w-full pb-10 pt-6 text-center sm:pb-12"
      aria-labelledby="features-heading"
    >
      <h2 id="features-heading" className="sr-only">
        Features
      </h2>
      <ul className="mx-auto grid w-full max-w-full grid-cols-1 justify-items-stretch gap-4 sm:grid-cols-3 sm:gap-5">
        {items.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-[var(--lp-border)] bg-[var(--lp-glass)] px-4 py-4 text-center backdrop-blur-xl transition-shadow hover:shadow-md dark:hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]"
          >
            <p className="text-[15px] font-semibold tracking-tight text-[var(--lp-fg)]">
              {item.title}
            </p>
            <p className="mt-1.5 text-balance text-[12px] leading-relaxed text-[var(--lp-fg-muted)]">
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
