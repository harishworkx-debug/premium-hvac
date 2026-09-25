import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Phone, Siren, Clock, ShieldCheck, Snowflake, Flame, CircleCheck as CheckCircle2 } from "lucide-react";

const BASE_URL = "https://www.kellerheatingandcooling.com";

const emergencySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ServicePage",
      "@id": `${BASE_URL}/emergency/#webpage`,
      name: "24/7 Emergency HVAC Service | Keller Heating And Cooling LLC",
      description: "24/7 emergency HVAC repair service in Pittsburgh. No overtime fees, same-hour dispatch, fully stocked trucks. Call (724) 676-8738 for immediate assistance.",
      url: `${BASE_URL}/emergency/`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
    {
      "@type": "Service",
      name: "Emergency HVAC Service",
      description: "24/7 emergency heating, cooling, and furnace repair with no overtime fees. Same-hour dispatch across Greater Pittsburgh.",
      serviceType: "Emergency HVAC Repair",
      provider: {
        "@type": "HVACBusiness",
        "@id": `${BASE_URL}/#business`,
        name: "Keller Heating And Cooling LLC",
        telephone: "+1-724-497-8681",
      },
      areaServed: [
        { "@type": "City", name: "Pittsburgh" },
        { "@type": "City", name: "Beaver Falls" },
        { "@type": "County", name: "Allegheny County" },
        { "@type": "County", name: "Beaver County" },
      ],
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
        },
      },
    },
  ],
};

export const Route = createFileRoute("/emergency")({
  head: () => {
    const url = `${BASE_URL}/emergency/`;
    const title = "24/7 Emergency HVAC Service in Pittsburgh | No Overtime Fees";
    const description = "Emergency HVAC repair available 24/7. Furnace down? AC broken? Keller Heating And Cooling LLC responds within 60 minutes. No overtime fees, flat-rate pricing. Call (724) 676-8738.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "emergency HVAC, furnace repair emergency, AC repair emergency, 24/7 heating service, emergency furnace Pittsburgh, no overtime fees" },
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
      scripts: [{ type: "application/ld+json", children: JSON.stringify(emergencySchema) }],
    };
  },
  component: () => (
    <>
      <PageHero eyebrow="Emergency" title="24/7 Emergency HVAC Service" sub="No heat? No cooling? Strange smells or sounds? Call us now — real humans answering, real techs dispatched within the hour.">
        <Button asChild variant="cta" size="xl"><a href="tel:+17244978681"><Phone className="w-5 h-5" /> Call (724) 676-8738</a></Button>
      </PageHero>
      <section className="section">
        <div className="container-px mx-auto max-w-5xl grid sm:grid-cols-3 gap-5">
          {[{ i: Siren, t: "Same-Hour Dispatch", d: "Most emergency calls reach you in under 60 minutes." }, { i: Clock, t: "No Overtime Fees", d: "Nights, weekends, holidays — same flat rate." }, { i: ShieldCheck, t: "Guaranteed Repair", d: "100% satisfaction or we return free of charge." }].map(c => (
            <div key={c.t} className="glass-card rounded-2xl p-6 text-center hover-lift">
              <c.i className="w-7 h-7 mx-auto text-teal" />
              <h2 className="mt-4 font-bold text-primary">{c.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section bg-surface-soft">
        <div className="container-px mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-bold tracking-widest uppercase">Emergency Response</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-primary">We Handle Every HVAC Emergency</h2>
            <p className="mt-4 text-lg text-muted-foreground">Our fully stocked trucks and certified technicians are ready to tackle any heating or cooling emergency.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Flame, title: "Furnace Failure", desc: "Complete heating system failures, pilot light issues, and heat exchanger problems." },
              { icon: Snowflake, title: "AC Breakdown", desc: "Air conditioner failures, refrigerant leaks, and compressor malfunctions." },
              { icon: Siren, title: "Gas Leaks & Odors", desc: "Strange smells, carbon monoxide concerns, and gas leak detection." },
              { icon: Clock, title: "Thermostat Issues", desc: "Complete loss of heating or cooling control and electrical failures." },
            ].map(s => (
              <div key={s.title} className="glass-card rounded-2xl p-5 hover-lift">
                <span className="w-11 h-11 rounded-xl gradient-primary text-white grid place-items-center shadow-glow">
                  <s.icon className="w-5 h-5" />
                </span>
                <h3 className="mt-4 font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-3xl gradient-hero text-white p-8 md:p-10 text-center shadow-elegant">
            <h3 className="text-2xl md:text-3xl font-bold">Need Emergency HVAC Service Now?</h3>
            <p className="mt-3 text-white/80">Real humans answer 24/7. No automated menus, no waiting.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Button asChild variant="cta" size="xl"><a href="tel:+17244978681"><Phone className="w-5 h-5" /> Call (724) 676-8738</a></Button>
              <Button asChild variant="hero" size="xl"><Link to="/contact">Request Callback</Link></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  ),
});
