import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Phone, ArrowRight, MapPin, Star, ShieldCheck, Clock } from "lucide-react";
import { parseSlug, SERVICES, LOCATIONS, PRIMARY_LOCATION } from "@/data/seo-pages";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const data = parseSlug(params.slug);
    if (!data) throw notFound();
    return data;
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not Found" }] };
    const path = `/${params.slug}/`;
    const url = `https://premium-hvac-glow.lovable.app${path}`;
    let title = "";
    let description = "";
    if (loaderData.kind === "service") {
      const { service, location } = loaderData;
      title = `${service.name} in ${location.name}, ${location.state} | Keller Heating & Cooling`;
      description = `Trusted ${service.name.toLowerCase()} in ${location.name}, ${location.state}. Licensed, insured, NATE-certified technicians · upfront pricing · 24/7 emergency service. Call (724) 676-8738.`;
    } else {
      const { location } = loaderData;
      title = `AC Repair and HVAC Services in ${location.name}, PA | Keller Heating & Cooling`;
      description = `Same-day AC repair and full HVAC services in ${location.name}, PA. 4.9★ · 150+ reviews · licensed & insured. Call (724) 676-8738 for fast service.`;
    }
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: SeoPage,
});

function SeoPage() {
  const data = Route.useLoaderData();
  return data.kind === "service" ? <ServicePage data={data} /> : <LocationPage data={data} />;
}

function ServicePage({ data }: { data: Extract<ReturnType<typeof parseSlug>, { kind: "service" }> }) {
  const { service, location } = data!;
  const related = SERVICES.filter(s => s.slug !== service.slug && (s.category === service.category || ["AC","Heating","Furnace"].includes(s.category))).slice(0, 6);
  return (
    <>
      <PageHero
        eyebrow={`${location.name}, ${location.state}`}
        title={`${service.name} in ${location.name}, ${location.state}`}
        sub={service.intro}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="cta" size="lg"><a href="https://wa.me/17246768738" target="_blank" rel="noopener noreferrer"><Phone className="w-5 h-5" /> Call (724) 676-8738</a></Button>
          <Button asChild variant="hero" size="lg"><Link to="/contact">Get a Free Estimate <ArrowRight className="w-5 h-5" /></Link></Button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 prose-content">
            <h2 className="text-3xl font-bold text-primary">Professional {service.name} for {location.name}, {location.state}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Keller Heating And Cooling LLC delivers premium {service.name.toLowerCase()} to homeowners and businesses throughout {location.name} and the surrounding Beaver County area. Every job is backed by our 100% satisfaction guarantee, upfront flat-rate pricing, and a team of NATE-certified technicians who treat your home like their own.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {location.blurb} Whether you need routine service, a same-day repair, or a complete new installation, we'll show up on time, explain every option clearly, and never pressure you into work you don't need.
            </p>

            <h3 className="mt-10 text-2xl font-bold text-primary">What's Included</h3>
            <ul className="mt-5 grid sm:grid-cols-2 gap-3">
              {service.features.map(f => (
                <li key={f} className="flex gap-2 text-foreground/90"><CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" /> {f}</li>
              ))}
            </ul>

            <div className="mt-12 rounded-3xl gradient-hero text-white p-8 md:p-10 text-center shadow-elegant">
              <h3 className="text-2xl md:text-3xl font-bold">Ready for {service.name} in {location.name}?</h3>
              <p className="mt-3 text-white/80">Same-day appointments available. Call now or request a free written estimate.</p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <Button asChild variant="cta" size="xl"><a href="https://wa.me/17246768738" target="_blank" rel="noopener noreferrer"><Phone className="w-5 h-5" /> Call (724) 676-8738</a></Button>
                <Button asChild variant="hero" size="xl"><Link to="/contact">Book Online</Link></Button>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <Card className="p-6 rounded-2xl border-border/60">
              <h4 className="font-bold text-primary">Related HVAC Services</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {related.map(r => (
                  <li key={r.slug}>
                    <Link to="/$slug" params={{ slug: `${r.slug}-beaver-falls-pa` }} className="flex items-center gap-2 text-foreground/80 hover:text-teal">
                      <r.icon className="w-4 h-4 text-teal" /> {r.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 rounded-2xl border-border/60">
              <h4 className="font-bold text-primary">Helpful Links</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link to="/" className="text-teal hover:underline">Homepage</Link></li>
                <li><Link to="/service-area" className="text-teal hover:underline">Service Area</Link></li>
                <li><Link to="/services" className="text-teal hover:underline">All HVAC Services</Link></li>
                <li><Link to="/contact" className="text-teal hover:underline">Contact Us</Link></li>
              </ul>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}

function LocationPage({ data }: { data: Extract<ReturnType<typeof parseSlug>, { kind: "location" }> }) {
  const { location } = data!;
  const featured = ["ac-repair","ac-installation","heating-repair","furnace-repair","heat-pump-installation","duct-cleaning"];
  const featuredServices = featured.map(s => SERVICES.find(x => x.slug === s)!).filter(Boolean);
  return (
    <>
      <PageHero
        eyebrow={`Serving ${location.name}, PA`}
        title={`AC Repair and HVAC Services in ${location.name}, PA`}
        sub={`Local, licensed and insured HVAC contractor serving ${location.name} and surrounding neighborhoods with same-day service.`}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="cta" size="lg"><a href="https://wa.me/17246768738" target="_blank" rel="noopener noreferrer"><Phone className="w-5 h-5" /> Call (724) 676-8738</a></Button>
          <Button asChild variant="hero" size="lg"><Link to="/contact">Get a Free Estimate <ArrowRight className="w-5 h-5" /></Link></Button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-primary">Trusted HVAC Service in {location.name}, PA</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{location.blurb}</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From emergency AC repair on the hottest day of summer to brand-new furnace installations before winter hits, Keller Heating And Cooling LLC is the locally-owned HVAC company {location.name} homeowners trust. We've earned 150+ five-star reviews by showing up on time, doing the work right, and standing behind every job.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Star, label: "4.9★ Rated", note: "150+ Google reviews" },
                { icon: ShieldCheck, label: "Licensed & Insured", note: "License #HVAC-44892" },
                { icon: Clock, label: "24/7 Emergency", note: "No overtime fees" },
              ].map(t => (
                <Card key={t.label} className="p-5 rounded-2xl border-border/60 text-center">
                  <t.icon className="w-7 h-7 text-teal mx-auto" />
                  <div className="mt-2 font-bold text-primary">{t.label}</div>
                  <div className="text-xs text-muted-foreground">{t.note}</div>
                </Card>
              ))}
            </div>

            <h3 className="mt-12 text-2xl font-bold text-primary">HVAC Services We Offer in {location.name}</h3>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {featuredServices.map(s => (
                <Link key={s.slug} to="/$slug" params={{ slug: `${s.slug}-beaver-falls-pa` }} className="group">
                  <Card className="p-5 rounded-2xl border-border/60 hover-lift">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg gradient-primary text-white grid place-items-center"><s.icon className="w-5 h-5" /></span>
                      <div className="font-bold text-primary">{s.name}</div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{s.intro.split(".")[0]}.</p>
                    <span className="mt-3 inline-flex items-center text-teal text-sm font-semibold">Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></span>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-12 rounded-3xl gradient-hero text-white p-8 md:p-10 text-center shadow-elegant">
              <h3 className="text-2xl md:text-3xl font-bold">Need HVAC Service in {location.name} Today?</h3>
              <p className="mt-3 text-white/80">Call now for fast, reliable heating and cooling solutions.</p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <Button asChild variant="cta" size="xl"><a href="https://wa.me/17246768738" target="_blank" rel="noopener noreferrer"><Phone className="w-5 h-5" /> Call (724) 676-8738</a></Button>
                <Button asChild variant="hero" size="xl"><Link to="/contact">Book Online</Link></Button>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <Card className="p-6 rounded-2xl border-border/60">
              <h4 className="font-bold text-primary flex items-center gap-2"><MapPin className="w-4 h-4 text-teal" /> Nearby Cities</h4>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
                {LOCATIONS.filter(l => l.slug !== location.slug).slice(0, 8).map(l => (
                  <li key={l.slug}>
                    <Link to="/$slug" params={{ slug: `ac-repair-${l.slug}-pa` }} className="text-foreground/80 hover:text-teal">
                      AC Repair {l.name}, PA
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6 rounded-2xl border-border/60">
              <h4 className="font-bold text-primary">Helpful Links</h4>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link to="/" className="text-teal hover:underline">Homepage</Link></li>
                <li><Link to="/service-area" className="text-teal hover:underline">Service Area</Link></li>
                <li><Link to="/services" className="text-teal hover:underline">All Services</Link></li>
                <li><Link to="/contact" className="text-teal hover:underline">Contact Us</Link></li>
              </ul>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}

// Avoid unused import warning
void PRIMARY_LOCATION;