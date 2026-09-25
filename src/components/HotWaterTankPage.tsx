import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";

export function HotWaterTankPage({ data }: { data: any }) {
  return (
    <>
      <PageHero
        eyebrow="Hot Water Tank Replacement in Beaver Falls, PA"
        title="Hot Water Tank Replacement Beaver Falls PA"
        sub="Professional water heater replacement and repair. Fast, code-compliant installations for both traditional tanks and modern tankless systems."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="cta" size="lg"><a href="tel:+17246768738"><Phone className="w-5 h-5" /> Call (724) 497-8681</a></Button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-px mx-auto max-w-4xl prose-content space-y-12">

          <div>
            <h2 className="text-3xl font-bold text-primary">Fast Water Heater Replacement in Beaver Falls, PA</h2>
            <p className="mt-4 text-muted-foreground">When your hot water tank starts leaking or stops producing hot water, you need an experienced plumber or HVAC technician fast. At Keller Heating & Cooling, we provide prompt hot water tank replacement Beaver Falls PA families trust. We handle everything from draining and hauling away the old unit to installing the new water heater with upgraded fittings and lines.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Signs You Need Hot Water Heater Replacement</h2>
            <p className="mt-4 text-muted-foreground">Most traditional hot water tanks last 8 to 12 years. You should consider water heater replacement Beaver Falls PA if you notice:</p>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>Leaking from the base:</strong> A puddle around your tank usually means the inner steel has rusted through.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>Rusty or discolored water:</strong> Indicating corrosion inside the tank.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>Inadequate hot water:</strong> Not enough hot water for showers or dishes.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>Strange rumbling noises:</strong> Sediment buildup causing the heating element to overheat.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Tankless Water Heater Installation Beaver Falls</h2>
            <p className="mt-4 text-muted-foreground">Looking to upgrade? We offer tankless water heater installation Beaver Falls residents love for endless hot water and improved energy efficiency. Tankless systems take up less space and only heat water when you need it, significantly reducing energy costs over time.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Why Choose Us for Water Heater Installation?</h2>
            <p className="mt-4 text-muted-foreground">Our team ensures your new hot water tank installation Beaver Falls is done right the first time. We replace old valves, install proper drain tubes, ensure carbon monoxide safety for gas units, and leave the workspace spotless. We offer honest advice on sizing and whether gas or electric is best for your home.</p>
          </div>

          <div className="rounded-3xl gradient-hero text-white p-8 md:p-10 text-center shadow-elegant">
            <h2 className="text-3xl font-bold">Need a New Hot Water Tank?</h2>
            <p className="mt-3 text-white/80">Contact us today for a fast, upfront quote on water heater replacement.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Button asChild variant="cta" size="xl"><a href="tel:+17246768738"><Phone className="w-5 h-5" /> Call (724) 497-8681</a></Button>
              <Button asChild variant="hero" size="xl"><Link to="/contact">Request Service</Link></Button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
