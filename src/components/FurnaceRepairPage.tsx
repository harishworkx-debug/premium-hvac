import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, CheckCircle2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FurnaceRepairPage({ data }: { data: any }) {
  const { service, location } = data;
  return (
    <>
      <PageHero
        eyebrow="Furnace Repair in Beaver Falls, PA"
        title="Furnace Repair in Beaver Falls, PA"
        sub="Fast furnace repair when temperatures drop. Our techs carry the most common parts on every truck, so most repairs happen on the first visit."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="cta" size="lg"><a href="tel:+17246768738"><Phone className="w-5 h-5" /> Call (724) 497-8681</a></Button>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-px mx-auto max-w-4xl prose-content space-y-12">

          <div>
            <h2 className="text-3xl font-bold text-primary">Dependable Furnace Service in Beaver Falls</h2>
            <p className="mt-4 text-muted-foreground">A cold winter night in Pennsylvania is no time for your furnace to quit. At Keller Heating & Cooling, we provide reliable residential furnace repair to keep your family warm and safe. Whether you have a modern gas furnace or an older system, our skilled furnace technician Beaver Falls team can accurately diagnose and repair the issue.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Common Furnace Issues We Resolve</h2>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>Furnace not heating:</strong> Could be a dirty flame sensor, faulty ignitor, or thermostat issue.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>Blower continuously running:</strong> Often caused by a bad limit switch.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>Noisy operation:</strong> Squeaking or rattling can indicate motor bearing wear or loose components.</li>
              <li className="flex gap-2"><CheckCircle2 className="w-5 h-5 text-teal shrink-0" /> <strong>Frequent cycling:</strong> Can be caused by an oversized system or a clogged air filter.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Emergency Furnace Repair</h2>
            <p className="mt-4 text-muted-foreground">We know that a broken furnace in the middle of winter is a true emergency. For homeowners looking for 'furnace repair near me', we offer emergency furnace repair to ensure your home doesn't reach freezing temperatures. Our rapid response times and well-stocked trucks mean we can often fix the problem on the spot.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Gas Furnace Repair & Safety</h2>
            <p className="mt-4 text-muted-foreground">Gas furnaces require specialized knowledge to safely troubleshoot and repair. We check for carbon monoxide leaks, ensure proper combustion, and verify that all safety switches are functioning correctly during our gas furnace repair visits.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Furnace Repair vs Furnace Replacement Beaver Falls</h2>
            <p className="mt-4 text-muted-foreground">If your system is constantly breaking down or is over 15 years old, a furnace replacement Beaver Falls might be a better long-term investment than continuing to pay for repairs. We always provide honest advice on whether to repair or replace, along with upfront estimates.</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary">Furnace Repair FAQs</h2>
            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="q1">
                <AccordionTrigger>What should I check before calling for furnace repair?</AccordionTrigger>
                <AccordionContent>Check your thermostat settings (ensure it's on 'Heat'), verify the furnace power switch is turned on, check your breaker panel, and make sure your air filter is clean.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>How often should a furnace be serviced?</AccordionTrigger>
                <AccordionContent>We recommend an annual furnace tune-up every fall to ensure safe operation, prevent unexpected breakdowns, and maintain energy efficiency.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="rounded-3xl gradient-hero text-white p-8 md:p-10 text-center shadow-elegant">
            <h2 className="text-3xl font-bold">Schedule Your Furnace Repair Today</h2>
            <p className="mt-3 text-white/80">Don't suffer in the cold. Contact our Beaver Falls heating experts now.</p>
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
