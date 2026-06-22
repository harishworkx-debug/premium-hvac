import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const plans = [
  { name: "Basic Comfort", price: "$69", per: "/mo", features: ["AC or furnace repair financing", "12 mo · 0% APR", "Approved in minutes"], featured: false },
  { name: "Premium Install", price: "$129", per: "/mo", features: ["Full HVAC system replacement", "60 mo low payment", "10-yr parts & labor warranty"], featured: true },
  { name: "Maintenance Plan", price: "$19", per: "/mo", features: ["2 tune-ups per year", "15% off all repairs", "Priority dispatch"], featured: false },
];

export const Route = createFileRoute("/financing")({
  head: () => ({
    meta: [
      { title: "HVAC Financing — 0% APR Options | Keller Heating And Cooling LLC" },
      { name: "description", content: "Flexible HVAC financing with 0% APR and low monthly payments. Apply in minutes." },
      { property: "og:title", content: "HVAC Financing | Keller Heating & Cooling" }, { property: "og:url", content: "/financing" },
    ],
    links: [{ rel: "canonical", href: "/financing" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Financing" title="Premium HVAC, Affordable Payments" sub="Don't put off the comfort upgrade your home deserves. 0% APR and low monthly plans available." />
      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid gap-6 md:grid-cols-3">
          {plans.map(p => (
            <Card key={p.name} className={`p-8 rounded-2xl border-2 relative ${p.featured ? "border-teal shadow-elegant gradient-hero text-white" : "border-border/60 hover-lift"}`}>
              {p.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold gradient-accent text-accent-foreground">MOST POPULAR</span>}
              <h2 className={`text-xl font-bold ${p.featured ? "text-white" : "text-primary"}`}>{p.name}</h2>
              <div className="mt-3 flex items-baseline gap-1"><span className="text-4xl font-bold font-display">{p.price}</span><span className={p.featured ? "text-white/70" : "text-muted-foreground"}>{p.per}</span></div>
              <ul className="mt-6 space-y-3">{p.features.map(f=> <li key={f} className="flex gap-2 text-sm"><CheckCircle2 className={`w-5 h-5 shrink-0 ${p.featured ? "text-accent" : "text-teal"}`} /> {f}</li>)}</ul>
              <Button asChild variant={p.featured ? "cta" : "default"} className="mt-8 w-full"><Link to="/contact">Apply Now</Link></Button>
            </Card>
          ))}
        </div>
      </section>
    </>
  ),
});
