import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Phone, Siren, Clock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "24/7 Emergency HVAC Service in Pittsburgh | Keller Heating And Cooling LLC" },
      { name: "description", content: "Furnace down or AC broken? Call Keller Heating And Cooling LLC 24/7. No overtime fees, fast on-site response across Greater Pittsburgh." },
      { property: "og:title", content: "Emergency HVAC Service | Keller Heating & Cooling" }, { property: "og:url", content: "/emergency" },
    ],
    links: [{ rel: "canonical", href: "/emergency" }],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Emergency" title="24/7 Emergency HVAC Service" sub="No heat? No cooling? Strange smells or sounds? Call us now — real humans answering, real techs dispatched within the hour.">
        <Button asChild variant="cta" size="xl"><a href="https://wa.me/17246768738" target="_blank" rel="noopener noreferrer"><Phone className="w-5 h-5" /> Call (724) 676-8738</a></Button>
      </PageHero>
      <section className="section">
        <div className="container-px mx-auto max-w-5xl grid sm:grid-cols-3 gap-5">
          {[{i:Siren,t:"Same-Hour Dispatch",d:"Most emergency calls reach you in under 60 minutes."},{i:Clock,t:"No Overtime Fees",d:"Nights, weekends, holidays — same flat rate."},{i:ShieldCheck,t:"Guaranteed Repair",d:"100% satisfaction or we return free of charge."}].map(c=> (
            <div key={c.t} className="glass-card rounded-2xl p-6 text-center hover-lift">
              <c.i className="w-7 h-7 mx-auto text-teal" />
              <h2 className="mt-4 font-bold text-primary">{c.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  ),
});
