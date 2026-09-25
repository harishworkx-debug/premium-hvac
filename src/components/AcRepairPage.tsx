import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function AcRepairPage({ data }: { data: any }) {
  const { service, location } = data;
  return (
    <>
      <PageHero
        eyebrow="AC Repair in Beaver Falls, PA"
        title="AC Repair in Beaver Falls, PA"
        sub="Fast, reliable AC repair for Beaver Falls homes. Our Expert techs diagnose accurately, quote upfront, and get your home cool again — fast."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="cta" size="lg"><a href="tel:+17244978681"><Phone className="w-5 h-5" /> Call (724) 497-8681</a></Button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-px mx-auto max-w-4xl prose-content space-y-12">

          <div>
            <h2 className="text-3xl font-bold text-primary">Fast AC Repair for Beaver Falls Homes</h2>
            <p className="mt-4 text-muted-foreground">When your central air or ductless mini-split stops working during a hot Pennsylvania summer, you need an HVAC technician who can fix it the same day. At Keller Heating & Cooling, we specialize in residential AC repair Beaver Falls families can count on. We service all major brands, providing upfront pricing and guaranteed workmanship.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Common Air Conditioning Problems We Fix</h2>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>Air conditioner not cooling Beaver Falls:</strong> Blowing warm air usually points to a refrigerant leak or compressor issue.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>AC won't turn on:</strong> Often an electrical issue, thermostat malfunction, or tripped breaker.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>Strange noises:</strong> Squealing, grinding, or banging sounds can indicate motor or belt failures.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>Frozen evaporator coils:</strong> Usually caused by poor airflow or low refrigerant levels.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Signs Your AC Needs Professional Repair</h2>
            <p className="mt-4 text-muted-foreground">Don't wait for a complete breakdown. Call an AC service Beaver Falls expert if you notice weak airflow, frequent cycling, unpleasant odors, or unusually high energy bills. Early intervention saves money on emergency AC repair Beaver Falls costs.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Emergency AC Repair</h2>
            <p className="mt-4 text-muted-foreground">Cooling emergencies don't wait for business hours. We provide prompt emergency AC repair Beaver Falls PA residents can rely on to restore comfort quickly without hidden emergency fees.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Our AC Repair Process</h2>
            <p className="mt-4 text-muted-foreground">We start with a thorough inspection to accurately diagnose the problem. You'll receive a flat-rate quote before any work begins. Once approved, our AC technician Beaver Falls will perform the repair using high-quality parts, followed by a system test to ensure reliable operation.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">AC Systems We Service</h2>
            <p className="mt-4 text-muted-foreground">Our team handles central AC repair Beaver Falls, ductless mini-splits, and heat pumps. We repair all major brands including Carrier, Trane, Lennox, Goodman, and Rheem.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Why Beaver Falls Homeowners Choose Keller</h2>
            <p className="mt-4 text-muted-foreground">As a leading air conditioning repair Beaver Falls contractor, we pride ourselves on honest communication, transparent pricing, and treating your home with respect. We never push for unnecessary replacements when a simple repair will do.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">AC Repair FAQs</h2>
            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="q1">
                <AccordionTrigger>How much does AC repair cost?</AccordionTrigger>
                <AccordionContent>Costs vary based on the issue. A simple capacitor replacement is affordable, while compressor repairs cost more. We always provide an upfront quote before starting work.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Should I repair or replace my AC?</AccordionTrigger>
                <AccordionContent>If your AC is over 10-15 years old, uses R-22 refrigerant, and requires frequent repairs, replacement might be more cost-effective. We can help you weigh the options.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Serving Beaver Falls and Nearby Areas</h2>
            <p className="mt-4 text-muted-foreground">If you are searching for 'AC repair near me' or need fast AC repair near Beaver Falls, we provide service, including Patterson Heights, College Hill, and surrounding Beaver County communities.</p>
          </div>

          <div className="rounded-3xl gradient-hero text-white p-8 md:p-10 text-center shadow-elegant">
            <h2 className="text-3xl font-bold">Schedule AC Repair</h2>
            <p className="mt-3 text-white/80">Get your cooling system back online today.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Button asChild variant="cta" size="xl"><a href="tel:+17244978681"><Phone className="w-5 h-5" /> Call (724) 497-8681</a></Button>
              <Button asChild variant="hero" size="xl"><Link to="/contact">Request Service</Link></Button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
