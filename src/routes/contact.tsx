import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const BASE_URL = "https://www.kellerheatingandcooling.com";

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${BASE_URL}/contact/#webpage`,
      name: "Contact Keller Heating And Cooling LLC",
      description: "Get a free HVAC estimate or call 24/7 for emergency service. Serving Pittsburgh and surrounding areas.",
      url: `${BASE_URL}/contact/`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
    {
      "@type": "ContactPoint",
      "@id": `${BASE_URL}/contact/#contactpoint`,
      contactType: "customer service",
      telephone: "+1-724-676-8738",
      email: "info@kellerheatingandcooling.com",
      availableLanguage: ["English"],
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
    },
  ],
};

export const Route = createFileRoute("/contact")({
  head: () => {
    const url = `${BASE_URL}/contact/`;
    const title = "Contact Us | Free HVAC Estimate - 24/7 Service | Keller Heating & Cooling";
    const description = "Get a free HVAC estimate or call 24/7 for emergency AC, heating, or furnace service. Keller Heating And Cooling LLC serves Pittsburgh, Beaver Falls & surrounding areas. Call (724) 497-8681.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "HVAC contact, free estimate, emergency HVAC service, Pittsburgh HVAC, heating cooling quote" },
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
      scripts: [{ type: "application/ld+json", children: JSON.stringify(contactSchema) }],
    };
  },
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's get your comfort back." sub="Call us, email us, or send the form — we respond within 30 minutes during business hours." />
      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
          <div className="space-y-5">
            {[
              { i: Phone, l: "Phone", v: "(724) 497-8681", h: "tel:+17246768738" },
              { i: Mail, l: "Email", v: "info@kellerheatingandcooling.com", h: "mailto:info@kellerheatingandcooling.com" },
              { i: MapPin, l: "Service Area", v: "Pittsburgh, PA & Surrounding Areas" },
              { i: Clock, l: "Hours", v: "24/7 Emergency · Office Mon–Sat 7am–7pm" },
            ].map(r => (
              <a key={r.l} href={r.h ?? "#"} className="flex items-start gap-4 glass-card p-5 rounded-2xl hover-lift">
                <span className="w-12 h-12 rounded-xl gradient-primary text-white grid place-items-center shadow-glow shrink-0"><r.i className="w-5 h-5" /></span>
                <div className="min-w-0"><div className="text-sm text-muted-foreground">{r.l}</div><div className="font-semibold text-primary">{r.v}</div></div>
              </a>
            ))}
          <div className="rounded-2xl overflow-hidden shadow-card aspect-video relative">
            <iframe
              title="Keller Heating And Cooling Location - Beaver Falls, PA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.8002711232625!2d-80.33326!3d40.788404899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834656da46af8a1%3A0x875d20f8efee65c5!2sKeller%20Heating%20And%20Cooling%20LLC!5e0!3m2!1sen!2sus!4v1781763772775!5m2!1sen!2sus"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          </div>
          <form onSubmit={e=>{e.preventDefault();setSent(true);}} className="glass-card rounded-3xl p-8 space-y-4 h-fit">
            <h2 className="text-2xl font-bold text-primary">Request Free Estimate</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input required placeholder="Full name *" aria-label="Full name" />
              <Input required type="tel" placeholder="Phone number *" aria-label="Phone number" />
            </div>
            <Input required type="email" placeholder="Email address *" aria-label="Email address" />
            <Input placeholder="Service address" aria-label="Service address" />
            <Input placeholder="Service type (AC, heating, furnace, etc.)" aria-label="Service type" />
            <Textarea rows={5} placeholder="Describe your HVAC needs..." aria-label="Project description" />
            <Button type="submit" variant="cta" size="lg" className="w-full">{sent ? "Thanks — we'll be in touch!" : "Send Request"}</Button>
          </form>
        </div>
      </section>
    </>
  );
}
