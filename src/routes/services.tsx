import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "./index";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/data/seo-pages";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "HVAC Services — AC, Heating, Furnace & Air Quality | Keller Heating & Cooling" },
      { name: "description", content: "Complete HVAC services: AC installation & repair, heating, furnace, duct cleaning, indoor air quality and 24/7 emergency service." },
      { property: "og:title", content: "HVAC Services | Keller Heating And Cooling LLC" }, { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Services" title="Complete HVAC Solutions, Done Right." sub="Every service backed by NATE-certified technicians, flat-rate pricing, and a 100% satisfaction guarantee." />
      <section className="section">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(s => (
              <Card key={s.slug} className="hover-lift p-7 rounded-2xl border-border/60">
                <div className="w-12 h-12 rounded-xl gradient-primary text-white grid place-items-center shadow-glow"><s.icon className="w-6 h-6" /></div>
                <h2 className="mt-5 text-xl font-bold">
                  <Link to="/$slug" params={{ slug: `${s.slug}-beaver-falls-pa` }} className="text-primary hover:text-teal transition-colors">
                    {s.name}
                  </Link>
                </h2>
                <p className="mt-2 text-muted-foreground">{s.intro.split(".")[0]}.</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  ),
});
