import { ReactNode } from "react";

export function PageHero({ eyebrow, title, sub, children }: { eyebrow?: string; title: string; sub?: string; children?: ReactNode }) {
  return (
    <section className="relative gradient-hero text-white overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-teal/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative container-px mx-auto max-w-7xl py-20 md:py-28">
        {eyebrow && <span className="inline-block px-3 py-1 rounded-full glass-dark text-xs font-bold tracking-widest uppercase">{eyebrow}</span>}
        <h1 className="mt-5 text-4xl md:text-6xl font-bold max-w-3xl leading-tight">{title}</h1>
        {sub && <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl">{sub}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
