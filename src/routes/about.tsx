import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ShieldCheck, Users, Award, HeartHandshake } from "lucide-react";

const BASE_URL = "https://www.kellerheatingandcooling.com";

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${BASE_URL}/about/#webpage`,
      name: "About Keller Heating And Cooling LLC",
      description: "Family-owned HVAC contractor serving Pittsburgh since 2008. Expert technicians, verified five-star reviews, and a commitment to honest, dependable service.",
      url: `${BASE_URL}/about/`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/about/#organization`,
      name: "Keller Heating And Cooling LLC",
      foundingDate: "2008",
      numberOfEmployees: "28",
      slogan: "Comfort, Honesty, Craft.",
      description: "Family-owned HVAC contractor providing premium heating, cooling, and indoor air quality services to Pittsburgh and surrounding areas.",
      award: "Google 4.9 Stars, Licensed & Insured",
    },
  ],
};

export const Route = createFileRoute("/about")({
  head: () => {
    const url = `${BASE_URL}/about/`;
    const title = "About Us | Family-Owned HVAC Contractor Since 2008 | Keller Heating";
    const description = "Meet the Expert team behind Pittsburgh's most trusted HVAC contractor. Years serving Pennsylvania with honest, dependable heating and cooling services. 4.9★ rated.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "HVAC company Pittsburgh, heating cooling contractor, family owned HVAC, Licensed, about Keller Heating" },
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
      scripts: [{ type: "application/ld+json", children: JSON.stringify(aboutSchema) }],
    };
  },
  component: () => (
    <>
      <PageHero eyebrow="Our Story" title="Family-owned. Customer-obsessed. Expert." sub="Since 2008, Keller Heating & Cooling has delivered premium HVAC service to Pennsylvania homes and businesses." />
      <section className="section">
        <div className="container-px mx-auto max-w-5xl grid md:grid-cols-2 gap-12">
          <div>
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-bold tracking-widest uppercase">Mission</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-primary">Comfort, Honesty, Craft.</h2>
              <p className="mt-4 text-lg text-muted-foreground">We believe great HVAC service should never feel transactional. Every visit is an opportunity to earn a customer for life.</p>
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed">Founded by master technician the Keller family, Keller Heating & Cooling began as a one-truck operation. Today, our 28-person team handles everything from emergency furnace calls to full commercial rooftop installations — with the same craftsmanship and care.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">We're proud to serve our neighbors throughout Beaver County, Allegheny County, and Washington County. From century homes in Mt. Lebanon to new construction in Cranberry Township, we bring the same dedication to every job: show up on time, diagnose accurately, communicate clearly, and leave your home cleaner than we found it.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{i:Users,n:"28",l:"Team Members"},{i:Award,n:"15+",l:"Years in Business"},{i:ShieldCheck,n:"100%",l:"Licensed & Insured"},{i:HeartHandshake,n:"1K+",l:"Happy Customers"}].map(s=> (
              <div key={s.l} className="glass-card rounded-2xl p-6 text-center hover-lift">
                <s.i className="w-7 h-7 mx-auto text-teal" />
                <div className="mt-3 text-3xl font-bold font-display text-primary">{s.n}</div>
                <div className="text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  ),
});
