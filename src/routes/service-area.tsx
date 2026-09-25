import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { MapPin, ArrowRight } from "lucide-react";
import { LOCATIONS } from "@/data/seo-pages";

const BASE_URL = "https://www.kellerheatingandcooling.com";

const serviceAreaSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/service-area/#webpage`,
      name: "HVAC Service Area | Keller Heating And Cooling LLC",
      description: "Serving 30+ cities across Pittsburgh, Allegheny County, Beaver County, and Washington County with same-day HVAC service.",
      url: `${BASE_URL}/service-area/`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
    {
      "@type": "HVACBusiness",
      "@id": `${BASE_URL}/service-area/#business`,
      name: "Keller Heating And Cooling LLC",
      areaServed: [
        { "@type": "City", name: "Pittsburgh", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
        { "@type": "City", name: "Beaver Falls", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
        { "@type": "City", name: "Mt. Lebanon", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
        { "@type": "City", name: "Bethel Park", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
        { "@type": "City", name: "Cranberry Township", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
        { "@type": "County", name: "Allegheny County" },
        { "@type": "County", name: "Beaver County" },
        { "@type": "County", name: "Washington County" },
      ],
    },
  ],
};

export const Route = createFileRoute("/service-area")({
  head: () => {
    const url = `${BASE_URL}/service-area/`;
    const title = "HVAC Service Area | Pittsburgh, Beaver Falls & Surrounding Areas";
    const description = "Keller Heating And Cooling LLC serves 30+ cities across Pittsburgh, Allegheny County, Beaver County, and Washington County. Same-day HVAC service available in all locations.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "HVAC service area, Pittsburgh HVAC, Beaver Falls heating cooling, Allegheny County HVAC, Washington County furnace repair" },
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
      scripts: [{ type: "application/ld+json", children: JSON.stringify(serviceAreaSchema) }],
    };
  },
  component: () => (
    <>
      <PageHero eyebrow="Service Area" title="Serving the Greater Pittsburgh Area" sub="Reliable HVAC service across Pittsburgh, Allegheny County, Beaver County, Washington County and nearby areas." />
      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LOCATIONS.map(c => (
                <Link
                  key={c.slug}
                  to="/$slug"
                  params={{ slug: `ac-repair-${c.slug}-pa` }}
                  className="group flex items-center justify-between gap-2 px-4 py-3 rounded-xl bg-surface-soft hover:bg-teal/10 border border-border/60 text-sm font-medium text-primary transition-colors"
                >
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-teal" /> AC Repair {c.name}, PA</span>
                  <ArrowRight className="w-4 h-4 text-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-bold text-primary mb-4">Service Coverage</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Allegheny County:</strong> Pittsburgh, Mt. Lebanon, Bethel Park, Monroeville, Cranberry Township, Wexford, McCandless, Ross Township, Shaler, Penn Hills, Plum, Upper St. Clair, Robinson</li>
                <li><strong>Beaver County:</strong> Beaver Falls, Aliquippa, Ambridge, Monaca</li>
                <li><strong>Washington County:</strong> Canonsburg, Peters Township, McMurray</li>
                <li className="text-teal font-medium">Don't see your town? Call (724) 676-8738 — we likely serve your area!</li>
              </ul>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-elegant aspect-square relative">
            <iframe
              title="Keller Heating And Cooling Service Area Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.8002711232625!2d-80.33326!3d40.788404899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834656da46af8a1%3A0x875d20f8efee65c5!2sKeller%20Heating%20And%20Cooling%20LLC!5e0!3m2!1sen!2sus!4v1781763772775!5m2!1sen!2sus"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  ),
});
