import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CircleCheck as CheckCircle2, Phone, ArrowRight, MapPin, Star, ShieldCheck, Clock } from "lucide-react";
import { parseSlug, SERVICES, LOCATIONS, PRIMARY_LOCATION } from "@/data/seo-pages";
import { AcRepairPage } from "@/components/AcRepairPage";
import { FurnaceRepairPage } from "@/components/FurnaceRepairPage";
import { HeatingRepairPage } from "@/components/HeatingRepairPage";
import { EmergencyHvacPage } from "@/components/EmergencyHvacPage";
import { HotWaterTankPage } from "@/components/HotWaterTankPage";

const BASE_URL = "https://www.kellerheatingandcooling.com";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const data = parseSlug(params.slug);
    if (!data) throw notFound();

    // Remove the icon (React component) so it can be serialized by Seroval safely
    const { icon, ...serviceWithoutIcon } = data.service;
    return {
      ...data,
      service: serviceWithoutIcon as any,
    };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Not Found - Keller Heating & Cooling" }] };

    const slugPath = params.slug;
    const url = `${BASE_URL}/${slugPath}/`;
    let title = "";
    let description = "";
    let keywords = "";
    let structuredData: object = {};

    if (loaderData.kind === "service") {
      const { service, location } = loaderData;
      title = `${service.name} in ${location.name}, PA | 24/7 HVAC Contractor`;
      description = `Trusted ${service.name.toLowerCase()} experts in ${location.name}, PA. Expert technicians, same-day service, flat-rate pricing. Licensed & insured. Call (724) 497-8681.`;
      keywords = `${service.name.toLowerCase()} ${location.name} PA, HVAC contractor ${location.name}, ${service.name.toLowerCase()} near me, heating cooling ${location.name}`;

      structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `${service.name} in ${location.name}, PA`,
        serviceType: service.name,
        description: service.intro,
        provider: {
          "@type": "HVACBusiness",
          "@id": `${BASE_URL}/#business`,
          name: "Keller Heating And Cooling LLC",
          telephone: "+1-724-676-8738",
          address: {
            "@type": "PostalAddress",
            addressLocality: location.name,
            addressRegion: "PA",
            addressCountry: "US",
          },
          areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: "40.7884",
              longitude: "-80.3332",
            },
            geoRadius: "50 mi",
          },
        },
        areaServed: {
          "@type": "City",
          name: location.name,
          containedInPlace: {
            "@type": "State",
            name: "Pennsylvania",
          },
        },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
          },
        },
      };
    } else {
      const { location } = loaderData;
      title = `AC Repair & HVAC Services in ${location.name}, PA | Keller Heating`;
      description = `24/7 AC repair, heating installation & HVAC services in ${location.name}, PA. Same-day service, 4.9★ rated, licensed & insured. Free estimates. Call (724) 497-8681.`;
      keywords = `AC repair ${location.name} PA, HVAC ${location.name}, air conditioning repair, heating repair, furnace service ${location.name}`;

      structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/${slugPath}/#localbusiness`,
        name: `Keller Heating And Cooling LLC - ${location.name}`,
        description: `Professional HVAC services including AC repair, heating installation, and furnace service in ${location.name}, PA.`,
        url: url,
        telephone: "+1-724-676-8738",
        email: "info@kellerheatingandcooling.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: location.name,
          addressRegion: "PA",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "40.7884",
          longitude: "-80.3332",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "150",
          bestRating: "5",
          worstRating: "1",
        },
        priceRange: "$$",
        areaServed: {
          "@type": "City",
          name: location.name,
        },
      };
    }

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Keller Heating And Cooling LLC" },
        { property: "og:locale", content: "en_US" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [
        { rel: "canonical", href: url },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(structuredData),
        },
      ],
    };
  },
  component: SeoPage,
});

function SeoPage() {
  const data = Route.useLoaderData();
  if (data.kind === "service") {
    if (data.service.slug === "ac-repair") return <AcRepairPage data={data} />;
    if (data.service.slug === "furnace-repair") return <FurnaceRepairPage data={data} />;
    if (data.service.slug === "heating-repair") return <HeatingRepairPage data={data} />;
    if (data.service.slug === "emergency-hvac") return <EmergencyHvacPage data={data} />;
    if (data.service.slug === "hot-water-tank-replacement") return <HotWaterTankPage data={data} />;
    return <ServicePage data={data} />;
  }
  return <LocationPage data={data} />;
}

function ServicePage({ data }: { data: Extract<ReturnType<typeof parseSlug>, { kind: "service" }> }) {
  const { service, location } = data!;
  const related = SERVICES.filter(s => s.slug !== service.slug && (s.category === service.category || ["AC", "Heating", "Furnace"].includes(s.category))).slice(0, 6);
  return (
    <>
      <PageHero
        eyebrow={`${location.name}, ${location.state}`}
        title={`${service.name} in ${location.name}, ${location.state}`}
        sub={service.intro}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="cta" size="lg"><a href="tel:+17246768738"><Phone className="w-5 h-5" /> Call (724) 497-8681</a></Button>
          <Button asChild variant="hero" size="lg"><Link to="/contact">Get a Free Estimate <ArrowRight className="w-5 h-5" /></Link></Button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 prose-content">
            <h2 className="text-3xl font-bold text-primary">Professional {service.name} for {location.name}, {location.state}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Keller Heating And Cooling LLC delivers premium {service.name.toLowerCase()} to homeowners and businesses throughout {location.name} and the surrounding Beaver County area. Every job is backed by our 100% satisfaction guarantee, upfront flat-rate pricing, and a team of Expert technicians who treat your home like their own.
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
                <Button asChild variant="cta" size="xl"><a href="tel:+17246768738"><Phone className="w-5 h-5" /> Call (724) 497-8681</a></Button>
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
                <li><Link to="/emergency" className="text-teal hover:underline">Emergency HVAC</Link></li>
                <li><Link to="/reviews" className="text-teal hover:underline">Customer Reviews</Link></li>
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
  const featured = ["ac-repair", "ac-installation", "heating-repair", "furnace-repair", "heat-pump-installation", "duct-cleaning"];
  const featuredServices = featured.map(s => SERVICES.find(x => x.slug === s)!).filter(Boolean);
  return (
    <>
      <PageHero
        eyebrow={`Serving ${location.name}, PA`}
        title={`AC Repair and HVAC Services in ${location.name}, PA`}
        sub={`Local, licensed and insured HVAC contractor serving ${location.name} and surrounding neighborhoods with same-day service.`}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="cta" size="lg"><a href="tel:+17246768738"><Phone className="w-5 h-5" /> Call (724) 497-8681</a></Button>
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
                <Button asChild variant="cta" size="xl"><a href="tel:+17246768738"><Phone className="w-5 h-5" /> Call (724) 497-8681</a></Button>
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
                <li><Link to="/emergency" className="text-teal hover:underline">Emergency HVAC</Link></li>
                <li><Link to="/reviews" className="text-teal hover:underline">Customer Reviews</Link></li>
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
