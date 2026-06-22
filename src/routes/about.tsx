import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHead } from "./index";
import { ShieldCheck, Users, Award, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Keller Heating And Cooling LLC — Family Owned Since 2008" },
      { name: "description", content: "Meet the NATE-certified team behind Pittsburgh's most trusted HVAC contractor. 15+ years serving Pennsylvania homes and businesses." },
      { property: "og:title", content: "About Keller Heating And Cooling LLC" }, { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Our Story" title="Family-owned. Customer-obsessed. NATE-certified." sub="Since 2008, Keller Heating & Cooling has delivered premium HVAC service to over 1,000 Pennsylvania homes and businesses." />
      <section className="section">
        <div className="container-px mx-auto max-w-5xl grid md:grid-cols-2 gap-12">
          <div>
            <SectionHead align="left" eyebrow="Mission" title="Comfort, Honesty, Craft." sub="We believe great HVAC service should never feel transactional. Every visit is an opportunity to earn a customer for life." />
            <p className="mt-6 text-muted-foreground leading-relaxed">Founded by master technician the Keller family, Keller Heating & Cooling began as a one-truck operation. Today, our 28-person team handles everything from emergency furnace calls to full commercial rooftop installations — with the same craftsmanship and care.</p>
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
