import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, Clock } from "lucide-react";

export function EmergencyHvacPage({ data }: { data: any }) {
  return (
    <>
      <PageHero
        eyebrow="Emergency HVAC in Beaver Falls, PA"
        title="Emergency HVAC Beaver Falls PA"
        sub="Fast, responsive emergency HVAC repair when you need it most. Our team is standing by to handle critical heating and cooling failures."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="cta" size="xl" className="bg-red-600 hover:bg-red-700 text-white font-bold animate-pulse"><a href="tel:+17246768738"><Phone className="w-6 h-6 mr-2" /> CALL NOW: (724) 497-8681</a></Button>
        </div>
      </PageHero>

      <section className="section bg-surface-soft">
        <div className="container-px mx-auto max-w-4xl text-center space-y-8">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto" />
          <h2 className="text-4xl font-bold text-primary">HVAC Emergency Service Beaver Falls</h2>
          <p className="text-xl text-muted-foreground">Don't wait for business hours. If your HVAC system has failed completely, is leaking heavily, or poses a safety risk, call us immediately.</p>
          <div className="py-6">
            <Button asChild variant="cta" size="xl" className="text-2xl py-8 px-12 rounded-full shadow-xl"><a href="tel:+17246768738"><Phone className="w-8 h-8 mr-3" /> (724) 497-8681</a></Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-px mx-auto max-w-4xl prose-content space-y-12">

          <div>
            <h2 className="text-3xl font-bold text-primary">24 Hour HVAC Beaver Falls Response</h2>
            <p className="mt-4 text-muted-foreground">Equipment failures happen at the worst times. Whether it's a freezing weekend or a sweltering holiday, our emergency HVAC repair Beaver Falls team is ready. We dispatch fully-stocked trucks to diagnose and resolve your HVAC issues promptly.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold text-primary">Emergency AC Repair Beaver Falls</h3>
              <p className="mt-3 text-muted-foreground">Severe summer heat isn't just uncomfortable; it can be dangerous for vulnerable family members. We prioritize emergency AC repair to restore your cooling fast.</p>
            </div>
            <div className="bg-card p-6 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold text-primary">Emergency Furnace Repair Beaver Falls</h3>
              <p className="mt-3 text-muted-foreground">A broken furnace in winter can lead to frozen pipes and unsafe indoor temperatures. Our technicians quickly handle emergency heating failures to keep you safe.</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">What to Do During an HVAC Emergency</h2>
            <ul className="mt-4 space-y-4 text-muted-foreground">
              <li><strong>1. Turn off the system:</strong> If you smell gas, suspect an electrical fire, or see heavy water leaking, turn off the system at the breaker or gas valve immediately.</li>
              <li><strong>2. Evacuate if necessary:</strong> If you suspect carbon monoxide or a gas leak, leave the house and call the gas company or 911.</li>
              <li><strong>3. Call Keller Heating & Cooling:</strong> Dial (724) 497-8681 for our emergency dispatch. Describe the issue so we can prioritize your call.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-red-50 border border-red-200 p-8 md:p-10 text-center shadow-elegant">
            <h2 className="text-3xl font-bold text-red-700 flex items-center justify-center gap-3"><Clock className="w-8 h-8" /> Need Help Now?</h2>
            <p className="mt-3 text-red-900/80 text-lg">Our technicians are available for rapid dispatch.</p>
            <div className="mt-6">
              <Button asChild variant="destructive" size="xl" className="shadow-lg"><a href="tel:+17246768738">Call (724) 497-8681</a></Button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
