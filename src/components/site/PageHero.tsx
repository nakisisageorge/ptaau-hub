export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-gradient-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-20 md:py-28">
        {eyebrow && <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">{eyebrow}</span>}
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
