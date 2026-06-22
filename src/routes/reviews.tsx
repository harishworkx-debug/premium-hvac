import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
const reviews = [
  {
    n: "Jimmie Lee DiIanni",
    c: "Beaver Falls, PA",
    t: "Our heat went out during a cold spell and Keller Heating & Cooling responded immediately. The issue was diagnosed and repaired quickly. Excellent service."
  },
  {
    n: "Dave Presto",
    c: "Pennsylvania",
    t: "As a Mechanical Engineer, I appreciate contractors who deliver knowledge, consistency, and strong work ethic. Keller Heating & Cooling exceeded expectations."
  },
  {
    n: "Brandi Girting",
    c: "Beaver County, PA",
    t: "I've used Zach and his crew several times. They are always quick to respond, professional, knowledgeable, and fairly priced."
  },
  {
    n: "Stewart Bangs",
    c: "Beaver Falls, PA",
    t: "Keller Heating & Cooling installed my new furnace within days of my call. Professional, efficient, and very neat work."
  },
  {
    n: "Mazen El Ali",
    c: "Pennsylvania",
    t: "Zach was honest, responsive, and never tried to oversell. He handled urgent HVAC service quickly and professionally."
  },
  {
    n: "Dalton Faith",
    c: "Pennsylvania",
    t: "Very professional and knowledgeable crew. They took time to explain everything and were transparent throughout the process."
  },
  {
    n: "Mackenzie Fajtak",
    c: "Beaver County, PA",
    t: "When our heat stopped working, Keller Heating & Cooling arrived promptly, fixed the issue, and charged a fair price."
  },
  {
    n: "Brady Young",
    c: "Pennsylvania",
    t: "Fast estimates, quick scheduling, fair pricing, and dependable emergency service. Highly recommended."
  },
  {
    n: "Vindy F",
    c: "Beaver Falls, PA",
    t: "Zach fit my mother into a busy schedule, arrived in the evening, and fixed her heater issue. Professional and reasonably priced."
  },
  {
    n: "Vincent Marcello",
    c: "Beaver County, PA",
    t: "Water heater replacement was completed within hours. Clean installation, new fittings, and no mess left behind."
  }
];

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — 4.9★ from 150+ Customers | Keller Heating And Cooling LLC" },
      { name: "description", content: "Read real reviews from Keller Heating And Cooling LLC customers across Greater Pittsburgh. 4.9 star average from 150+ verified reviews." },
      { property: "og:title", content: "Keller Heating And Cooling LLC Reviews" }, { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Reviews" title="4.9★ from 150+ verified reviews" sub="Don't take our word for it — here's what your neighbors are saying." />
      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map(r => (
            <Card key={r.n} className="p-7 rounded-2xl border-border/60 hover-lift">
              <div className="flex gap-1 text-accent">{[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4 fill-current" />)}</div>
              <p className="mt-4 text-foreground/90">"{r.t}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-bold text-primary">{r.n}</div><div className="text-sm text-muted-foreground">{r.c}, PA</div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  ),
});
