import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/data/seo-pages";

const BASE_URL = "https://www.kellerheatingandcooling.com";

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "HVAC Services",
  description: "Complete heating, cooling, and air quality services offered by Keller Heating And Cooling LLC",
  itemListElement: SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    description: s.intro,
    url: `${BASE_URL}/${s.slug}-beaver-falls-pa/`,
  })),
};

export const Route = createFileRoute("/services")({
  head: () => {
    const url = `${BASE_URL}/services/`;
    const title = "HVAC Services | AC Repair, Heating, Furnace & Air Quality | Keller Heating";
    const description = "Complete HVAC services in Pittsburgh: AC installation & repair, heating systems, furnace service, duct cleaning, indoor air quality, and 24/7 emergency service. NATE-certified technicians.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "HVAC services, AC repair, heating repair, furnace service, duct cleaning, air conditioning, heat pump, Pittsburgh HVAC" },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Keller Heating And Cooling LLC" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{ type: "application/ld+json", children: JSON.stringify(servicesSchema) }],
    };
  },
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
