import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { MapPin, ArrowRight } from "lucide-react";
import { LOCATIONS } from "@/data/seo-pages";

export const Route = createFileRoute("/service-area")({
  head: () => ({
    meta: [
      { title: "HVAC Service Area — Pittsburgh & Surrounding Areas | Keller Heating & Cooling" },
      { name: "description", content: "Keller Heating And Cooling LLC serves 30+ cities across the Greater Pittsburgh region. Same-day service available." },
      { property: "og:title", content: "HVAC Service Area | Keller Heating & Cooling" }, { property: "og:url", content: "/service-area" },
    ],
    links: [{ rel: "canonical", href: "/service-area" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Service Area" title="Serving the Greater Pittsburgh Area" sub="Reliable HVAC service across Pittsburgh, Allegheny County, Beaver County, Washington County and nearby areas." />
      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-start">
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
         <div className="rounded-3xl overflow-hidden shadow-elegant aspect-square relative">
  <iframe
    title="Keller Heating And Cooling Location"
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
