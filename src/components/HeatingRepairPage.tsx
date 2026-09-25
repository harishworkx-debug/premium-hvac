import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";

export function HeatingRepairPage({ data }: { data: any }) {
  return (
    <>
      <PageHero
        eyebrow="Heating Repair in Beaver Falls, PA"
        title="Heating Repair in Beaver Falls, PA"
        sub="Fast, reliable heating repair when you need warmth most. We service every brand of furnace, boiler, and heat pump with same-day appointments."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="cta" size="lg"><a href="tel:+17246768738"><Phone className="w-5 h-5" /> Call (724) 676-8738</a></Button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-px mx-auto max-w-4xl prose-content space-y-12">
          
          <div>
            <h2 className="text-3xl font-bold text-primary">Comprehensive Heating System Repair Beaver Falls</h2>
            <p className="mt-4 text-muted-foreground">Pennsylvania winters demand a reliable heating system. When yours falters, Keller Heating & Cooling is here to help with expert heating repair Beaver Falls PA residents can trust. As a premier heating contractor Beaver Falls PA, we repair all types of heating equipment, ensuring your home or business stays comfortable year-round.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">We Service All Heating Systems</h2>
            <p className="mt-4 text-muted-foreground">While many homeowners have traditional gas furnaces, our heating service Beaver Falls PA covers a wide variety of systems. If you need specific furnace services, please visit our <Link to="/$slug" params={{ slug: "furnace-repair-beaver-falls-pa" }} className="text-teal underline">furnace repair page</Link>. Our broader heating system expertise includes:</p>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>Heat Pumps:</strong> Versatile systems that provide both heating and cooling. We handle refrigerant issues, reversing valve replacements, and defrost cycle problems.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>Ductless Mini-Splits:</strong> Targeted heating solutions for room additions or historic homes.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>Hybrid Heating Systems:</strong> Complex dual-fuel setups that maximize efficiency.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Emergency Heating Repair</h2>
            <p className="mt-4 text-muted-foreground">Losing heat during a winter storm is dangerous. Our emergency heating repair service is available 24/7 to restore safety and warmth to your home. We arrive promptly with fully-stocked vehicles to perform immediate home heating repair.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Why Choose Keller as Your Heating Contractor?</h2>
            <p className="mt-4 text-muted-foreground">We pride ourselves on transparent pricing, NATE-certified technicians, and a commitment to customer satisfaction. We don't just patch up problems; we identify the root cause of your heating system issues to provide lasting repairs and prevent future breakdowns.</p>
          </div>

          <div className="rounded-3xl gradient-hero text-white p-8 md:p-10 text-center shadow-elegant">
            <h2 className="text-3xl font-bold">Need Heating Service?</h2>
            <p className="mt-3 text-white/80">Contact Beaver Falls' trusted heating experts today.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Button asChild variant="cta" size="xl"><a href="tel:+17246768738"><Phone className="w-5 h-5" /> Call (724) 676-8738</a></Button>
              <Button asChild variant="hero" size="xl"><Link to="/contact">Request Service</Link></Button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
