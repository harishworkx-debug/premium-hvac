import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Clock, BadgeCheck, Wrench, Snowflake, Flame, Wind, Sparkles, Building2, Siren, ArrowRight, Star, CircleCheck as CheckCircle2, Calendar, ClipboardCheck, HardHat, ThumbsUp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { LOCATIONS } from "@/data/seo-pages";

// Using stock images from Pexels for hero and before/after sections
const heroImg = "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=1920";
const beforeImg = "https://images.pexels.com/photos/2750278/pexels-photo-2750278.jpeg?auto=compress&cs=tinysrgb&w=1200";
const afterImg = "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=1200";

const BASE_URL = "https://www.kellerheatingandcooling.com";

const homePageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${BASE_URL}/#webpage`,
      name: "Keller Heating And Cooling LLC — Heating, Cooling & Air Quality Experts",
      description: "Premium HVAC contractor offering AC repair, heating installation, furnace service & indoor air quality. 24/7 emergency service. Free estimates. Licensed & insured.",
      url: BASE_URL,
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faqpage`,
      mainEntity: [
        { "@type": "Question", name: "How often should HVAC systems be serviced?", acceptedAnswer: { "@type": "Answer", text: "At least twice a year — once in the spring for your AC and once in the fall for your heating — for optimal performance and energy efficiency." } },
        { "@type": "Question", name: "Do you provide emergency HVAC services?", acceptedAnswer: { "@type": "Answer", text: "Yes. Emergency support is available with fast response times across Greater Pittsburgh area." } },
        { "@type": "Question", name: "Can you install energy-efficient systems?", acceptedAnswer: { "@type": "Answer", text: "Yes. We provide modern, energy-efficient HVAC solutions that help reduce energy consumption and lower utility costs." } },
        { "@type": "Question", name: "Do you offer commercial HVAC services?", acceptedAnswer: { "@type": "Answer", text: "Yes, we serve businesses of all sizes with HVAC installation, preventive maintenance, system upgrades and commercial repairs." } },
        { "@type": "Question", name: "Are your technicians licensed?", acceptedAnswer: { "@type": "Answer", text: "Every Keller Heating And Cooling LLC technician is licensed, insured and committed to honest, dependable workmanship." } },
      ],
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => {
    const url = `${BASE_URL}/`;
<<<<<<< HEAD
    const title = "HVAC Contractor in Beaver Falls, PA | AC Repair & Heating Services";
    const description = "Keller Heating And Cooling LLC: Premium HVAC contractor for AC repair, heating installation, furnace service & indoor air quality. 24/7 emergency service, free estimates. Licensed & insured. Call (724) 676-8738.";
=======
    const title = "HVAC Contractor in Beaver Falls, PA | Keller Heating & Cooling";
    const description = "Keller Heating & Cooling provides expert HVAC contractor services in Beaver Falls, PA. Call (724) 497-8681 for fast AC repair, heating repair, and 24/7 emergency HVAC service.";
>>>>>>> f7d748cbfb4c0881ba151d8b75086995f1bd2906
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "HVAC contractor Beaver Falls, AC repair Pittsburgh, heating repair, furnace installation, air conditioning service, emergency HVAC, indoor air quality, licensed HVAC" },
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
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(homePageSchema),
        },
      ],
    };
  },
  component: HomePage,
});

const services = [
  { icon: Snowflake, title: "AC Installation", slug: "ac-installation-beaver-falls-pa", desc: "High-efficiency cooling systems sized and installed for maximum comfort and lower energy bills." },
  { icon: Wrench, title: "AC Repair", slug: "ac-repair-beaver-falls-pa", desc: "Fast, accurate diagnostics and same-day repairs on every major brand of air conditioner." },
  { icon: Flame, title: "Heating Installation", slug: "heating-installation-beaver-falls-pa", desc: "Modern, ultra-quiet heating systems with smart thermostats and pro-grade workmanship." },
  { icon: HardHat, title: "Heating Repair", slug: "heating-repair-beaver-falls-pa", desc: "Restore warmth quickly with experienced technicians and a 100% satisfaction guarantee." },
  { icon: Flame, title: "Furnace Services", slug: "furnace-repair-beaver-falls-pa", desc: "Tune-ups, repairs, and replacements that keep your furnace running safely all winter." },
  { icon: Wind, title: "Duct Cleaning", slug: "duct-cleaning-beaver-falls-pa", desc: "Deep-clean ductwork to remove dust, allergens and contaminants for healthier air." },
  { icon: Sparkles, title: "Indoor Air Quality", slug: "indoor-air-quality-beaver-falls-pa", desc: "UV purifiers, HEPA filtration and humidity control engineered for your home." },
  { icon: Siren, title: "Emergency HVAC", slug: "emergency-hvac-beaver-falls-pa", desc: "24/7 emergency response with no overtime fees on nights, weekends or holidays." },
];

const why = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully bonded with liability and workers comp coverage." },
  { icon: BadgeCheck, title: "Expert Technicians", desc: "Professional and licensed pros with years of local experience." },
  { icon: Clock, title: "Same-Day Service", desc: "Book by noon and we'll be there before sundown." },
  { icon: Siren, title: "24/7 Emergency Support", desc: "Real humans answering the phone every hour of every day." },
  { icon: ThumbsUp, title: "Upfront, Fair Pricing", desc: "Flat rates approved before any work begins." },
  { icon: ShieldCheck, title: "Warranty Protection", desc: "10-year parts & labor on qualifying installations." },
];

const process = [
  { icon: Calendar, title: "Schedule Service", desc: "Book online or by phone in under 60 seconds." },
  { icon: ClipboardCheck, title: "Expert Inspection", desc: "We assess, photograph and explain every finding." },
  { icon: Wrench, title: "Repair or Install", desc: "Pro-grade work done right the first time." },
  { icon: ShieldCheck, title: "Quality Check", desc: "Performance test + satisfaction guarantee." },
];

const reviews = [
  { name: "Vincent Marcello", city: "Beaver Falls, PA", text: "I called to have my water hot tank replaced because it was leaking. The team at Keller heating and cooling had the job done in a few hours with new lines and fittings as well. There was no mess left behind and they hauled the old tank away.", stars: 5 },
  { name: "Jimmie Lee DiIanni", city: "Beaver Falls, PA", text: "Our heat went out this week, which is always stressful during these cold days. We called Keller Heating and Cooling, and they sent someone out right away. Thankfully, the issue turned out to be a common part that needed replaced. Responsive, knowledgeable, and quick!", stars: 5 },
  { name: "Brandi Girting", city: "Beaver Falls, PA", text: "This is the 3rd or 4th time I have used Zach and his crew over the last couple years. They are always quick to respond/arriver and get things figured out and fixed. Fair pricing and always professional.", stars: 5 },
  { name: "Dalton Faith", city: "Beaver Falls, PA", text: "Very professional and knowledgeable crew! Zach and his team are very transparent and take the time to educate their clients on whatever system they may have. The two guys he sent out were amazing.", stars: 5 },
  { name: "Stewart Bangs", city: "Beaver Falls, PA", text: "Will not use another heating and cooling company. Mr. Keller and his crew came out and installed my new furnace in a day, after talking to him just a few days prior. Very professional and neat.", stars: 5 },
  { name: "Brady Young", city: "Beaver Falls, PA", text: "Zack has done several furnaces for us now. I'm always amazed how fast he can get me an estimate and the turnaround time for a start date is incredible. He has taken care of us in emergency situations and has always given a super fair price.", stars: 5 },
];

const homeCities = LOCATIONS.slice(0, 10);

const faqs = [
  { q: "How often should HVAC systems be serviced?", a: "At least twice a year — once in the spring for your AC and once in the fall for your heating — for optimal performance and energy efficiency." },
  { q: "Do you provide emergency HVAC services?", a: "Yes. Emergency support is available with fast response times across Greater Pittsburgh area." },
  { q: "Can you install energy-efficient systems?", a: "Yes. We provide modern, energy-efficient HVAC solutions that help reduce energy consumption and lower utility costs." },
  { q: "Do you offer commercial HVAC services?", a: "Yes, we serve businesses of all sizes with HVAC installation, preventive maintenance, system upgrades and commercial repairs." },
  { q: "Are your technicians licensed?", a: "Every Keller Heating And Cooling LLC technician is licensed, insured and committed to honest, dependable workmanship." },
];

function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <ACServices />
      <HeatingServices />
      <EmergencyService />
      <WhyChoose />
      <Process />
      <Commercial />
      <Reviews />
      <ServiceAreas />
      <Financing />
      <BeforeAfter />
      <FAQ />
      <CTABanner />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="HVAC technician servicing a modern air conditioner" className="w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>
      <div className="relative container-px mx-auto max-w-7xl pt-20 pb-28 md:pt-28 md:pb-36 text-white">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> 24/7 Emergency HVAC Service
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            HVAC Contractor in Beaver Falls, PA for <span className="text-gradient">AC & Heating Service</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            Professional heating, cooling, ventilation, repair, installation & maintenance services for homes and businesses across Greater Pittsburgh.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2 max-w-2xl text-white/90 text-sm">
            {["Licensed Technicians", "Fast Response Times", "Residential & Commercial", "Energy Efficient Solutions", "24/7 Emergency HVAC Support"].map(f => (
              <li key={f} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-accent" /> {f}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="cta" size="xl">
              <Link to="/contact">Get Free Estimate <ArrowRight className="w-5 h-5" /></Link>
            </Button>
            <Button asChild variant="hero" size="xl">
              <a href="tel:+17244978681"><Phone className="w-5 h-5" /> Call Now: (724) 676-8738</a>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
            {[["1K+", "Homes Served"], ["4.9★", "150+ Reviews"], ["24/7", "Emergency"]].map(([n, l]) => (
              <div key={l} className="glass-dark rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold font-display">{n}</div>
                <div className="text-xs md:text-sm text-white/70 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const badges = ["Local Family Owned", "Licensed & Insured", "Upfront Flat-Rate Pricing", "24/7 Emergency Service", "Professional Technicians", "Google 4.9★"];
  return (
    <section className="py-12 border-b border-border bg-surface-soft">
      <div className="container-px mx-auto max-w-7xl">
        <p className="text-center text-sm font-medium tracking-widest uppercase text-muted-foreground">Trusted, Certified & Award-Winning</p>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map(b => (
            <div key={b} className="glass-card rounded-xl px-4 py-4 text-center text-sm font-semibold text-primary hover-lift">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHead eyebrow="Our Services" title="Trusted HVAC Services in Beaver Falls, PA" sub="From emergency repairs to full system installs, our certified technicians handle every heating, cooling and air quality need with precision." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(s => (
            <Card key={s.title} className="hover-lift p-7 border-border/60 rounded-2xl">
              <div className="w-12 h-12 rounded-xl gradient-primary text-white grid place-items-center shadow-glow">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">
                <Link to="/$slug" params={{ slug: s.slug }} className="text-primary hover:text-teal transition-colors">
                  {s.title}
                </Link>
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Commercial() {
  const points = [
    "Rooftop unit (RTU) installation & service",
    "Preventive maintenance contracts",
    "Light commercial split systems",
    "Refrigeration & make-up air",
    "After-hours & weekend scheduling",
    "Single point of contact for every site",
  ];
  const industries = ["Offices", "Retail", "Restaurants", "Warehouses", "Medical", "Property Management"];
  return (
    <section className="section bg-surface-soft" id="commercial">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-bold tracking-widest uppercase">
            <Building2 className="w-3.5 h-3.5" /> Commercial HVAC Services
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-primary leading-tight">
            Commercial HVAC Services
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Keep your business comfortable, code-compliant and running 24/7. From single rooftop units to multi-site preventive maintenance contracts, our commercial team delivers responsive service backed by a single point of contact.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {points.map(p => (
              <li key={p} className="flex items-start gap-2 text-foreground/90">
                <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" /> <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {industries.map(i => (
              <span key={i} className="px-3 py-1 rounded-full bg-card border border-border/60 text-xs font-semibold text-primary">{i}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="lg">
              <Link to="/$slug" params={{ slug: "commercial-hvac-beaver-falls-pa" }}>
                Explore Commercial HVAC <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="hero" size="lg">
              <a href="tel:+17244978681"><Phone className="w-5 h-5" /> Call (724) 676-8738</a>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Building2, label: "Multi-Site Service", note: "One vendor, every location" },
            { icon: Clock, label: "After-Hours Work", note: "Zero disruption to business" },
            { icon: ShieldCheck, label: "Fully Insured", note: "$2M general liability" },
            { icon: Siren, label: "24/7 Emergency", note: "Priority commercial dispatch" },
          ].map(c => (
            <Card key={c.label} className="p-6 rounded-2xl border-border/60 hover-lift">
              <span className="w-11 h-11 rounded-xl gradient-primary text-white grid place-items-center shadow-glow">
                <c.icon className="w-5 h-5" />
              </span>
              <div className="mt-4 font-bold text-primary">{c.label}</div>
              <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="section bg-surface-soft">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHead eyebrow="Why Choose Keller Heating & Cooling" title="Why Choose Keller Heating & Cooling" sub="What you get with every single visit — no exceptions." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {why.map(w => (
            <div key={w.title} className="glass-card rounded-2xl p-6 hover-lift">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-teal/10 text-teal grid place-items-center"><w.icon className="w-5 h-5" /></span>
                <h3 className="font-bold text-lg text-primary">{w.title}</h3>
              </div>
              <p className="mt-3 text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHead eyebrow="Our Process" title="Service In Four Simple Steps" sub="Transparent, fast and stress-free — from your first call to final quality check." />
        <div className="mt-14 relative grid gap-8 md:grid-cols-4">
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 gradient-primary opacity-30" />
          {process.map((p, i) => (
            <div key={p.title} className="relative text-center animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="mx-auto w-16 h-16 rounded-2xl gradient-primary text-white grid place-items-center shadow-elegant relative z-10">
                <p.icon className="w-7 h-7" />
              </div>
              <div className="mt-2 text-xs font-bold text-teal tracking-widest">STEP {i + 1}</div>
              <h3 className="mt-1 text-lg font-bold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="section bg-surface-soft">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHead eyebrow="Reviews" title="Loved by 1,000+ Homeowners" sub="Real reviews from real customers across Greater Pittsburgh." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map(r => (
            <Card key={r.name} className="p-7 rounded-2xl border-border/60 hover-lift">
              <div className="flex gap-1 text-accent">
                {[...Array(r.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="mt-4 text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-bold text-primary">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.city}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHead align="left" eyebrow="Service Area" title="Serving Beaver Falls and Surrounding Pennsylvania Communities" sub="Same-day service in 30+ neighborhoods across the Greater Pittsburgh area." />
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-2">
            {homeCities.map(c => (
              <Link key={c.slug} to="/$slug" params={{ slug: `ac-repair-${c.slug}-pa` }} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-soft hover:bg-teal/10 text-sm font-medium text-primary transition-colors">
                <MapPin className="w-4 h-4 text-teal" /> {c.name}
              </Link>
            ))}
          </div>
          <Button asChild variant="default" className="mt-8">
            <Link to="/service-area">View all service areas <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/3]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.8002711232625!2d-80.33326!3d40.788404899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834656da46af8a1%3A0x875d20f8efee65c5!2sKeller%20Heating%20And%20Cooling%20LLC!5e0!3m2!1sen!2sus!4v1781763772775!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

function Financing() {
  const plans = [
    { name: "Basic Comfort", price: "$69", per: "/mo", features: ["AC or furnace repair financing", "12 mo · 0% APR", "Approved in minutes"], featured: false },
    { name: "Premium Install", price: "$129", per: "/mo", features: ["Full HVAC system replacement", "60 mo low payment", "10-yr parts & labor warranty"], featured: true },
    { name: "Maintenance Plan", price: "$19", per: "/mo", features: ["2 tune-ups per year", "15% off all repairs", "Priority dispatch"], featured: false },
  ];
  return (
    <section className="section bg-surface-soft">
      {/* <div className="container-px mx-auto max-w-7xl">
        <SectionHead eyebrow="Financing" title="Affordable Plans for Every Budget" sub="0% APR financing and flexible monthly payments make premium HVAC easy." />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map(p => (
            <Card key={p.name} className={`p-8 rounded-2xl border-2 ${p.featured ? "border-teal shadow-elegant relative gradient-hero text-white" : "border-border/60 bg-card hover-lift"}`}>
              {p.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold gradient-accent text-accent-foreground">MOST POPULAR</span>}
              <h3 className={`text-xl font-bold ${p.featured ? "text-white" : "text-primary"}`}>{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold font-display">{p.price}</span>
                <span className={p.featured ? "text-white/70" : "text-muted-foreground"}>{p.per}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map(f => (
                  <li key={f} className="flex gap-2 text-sm"><CheckCircle2 className={`w-5 h-5 shrink-0 ${p.featured ? "text-accent" : "text-teal"}`} /> {f}</li>
                ))}
              </ul>
              <Button asChild variant={p.featured ? "cta" : "default"} className="mt-8 w-full">
                <Link to="/financing">Apply Now</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div> */}
    </section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHead eyebrow="Before & After" title="Real Results From Real Jobs" sub="Drag the slider to see the difference our team delivers." />
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-3xl shadow-elegant select-none">
            <img src={afterImg} alt="After HVAC service" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <img src={beforeImg} alt="Before HVAC service" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute top-0 bottom-0 w-1 bg-white shadow-elegant" style={{ left: `${pos}%` }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white grid place-items-center shadow-elegant">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
            </div>
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-semibold">BEFORE</span>
            <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-teal text-white text-xs font-semibold">AFTER</span>
            <input type="range" min={0} max={100} value={pos} onChange={e => setPos(+e.target.value)} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section bg-surface-soft">
      <div className="container-px mx-auto max-w-4xl">
        <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" sub="Quick answers to the questions we hear most." />
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`f${i}`} className="bg-card mb-3 px-6 rounded-xl border border-border/60">
              <AccordionTrigger className="text-left font-semibold text-primary py-5">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl gradient-hero text-white p-10 md:p-16 text-center shadow-elegant">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-teal/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold">Call Keller Heating & Cooling Today</h2>
            <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">Our emergency techs are standing by 24/7. No overtime fees. No surprises.</p>
            <Button asChild variant="cta" size="xl" className="mt-8">
              <a href="tel:+17244978681"><Phone className="w-5 h-5" /> Call (724) 676-8738 Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section bg-surface-soft" id="contact">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-12">
        <div>
          <SectionHead align="left" eyebrow="Get In Touch" title="Request a Free Estimate" sub="Tell us about your project and we'll get back to you within 30 minutes during business hours." />
          <div className="mt-8 space-y-5">
            <InfoRow icon={Phone} label="Phone" value="(724) 676-8738" href="tel:+17244978681" />
            <InfoRow icon={MapPin} label="Service Area" value="Pittsburgh, PA & Surrounding Areas" />
            <InfoRow icon={Clock} label="Business Hours" value="Mon–Sun · 24/7 Emergency Service" />
          </div>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

function LeadForm() {
  const [sent, setSent] = useState(false);
  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="glass-card rounded-3xl p-8 space-y-4">
      <h3 className="text-xl font-bold text-primary">Free Estimate</h3>
      <Input required placeholder="Full name" />
      <Input required type="tel" placeholder="Phone number" />
      <Input required type="email" placeholder="Email address" />
      <Input placeholder="Service needed (AC, heating, etc.)" />
      <Textarea placeholder="Tell us about your project" rows={4} />
      <Button type="submit" variant="cta" size="lg" className="w-full">
        {sent ? "Thanks — we'll be in touch!" : "Get My Free Estimate"}
      </Button>
      <p className="text-xs text-muted-foreground text-center">No spam. We respond within 30 minutes during business hours.</p>
    </form>
  );
}

function InfoRow({ icon: Icon, label, value, href, target, rel }: { icon: any; label: string; value: string; href?: string; target?: string; rel?: string }) {
  const Inner = (
    <div className="flex items-start gap-4">
      <span className="w-11 h-11 rounded-xl gradient-primary text-white grid place-items-center shadow-glow shrink-0"><Icon className="w-5 h-5" /></span>
      <div className="min-w-0">
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="font-semibold text-primary truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={target} rel={rel}>{Inner}</a> : Inner;
}

export function SectionHead({ eyebrow, title, sub, align = "center" }: { eyebrow: string; title: string; sub?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}>
      <span className="inline-block px-3 py-1 rounded-full bg-teal/10 text-teal text-xs font-bold tracking-widest uppercase">{eyebrow}</span>
      <h2 className="mt-4 text-3xl md:text-5xl font-bold text-primary">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted-foreground">{sub}</p>}
    </div>
  );
}


function ACServices() {
  const acList = [
    { title: "AC Repair", slug: "ac-repair-beaver-falls-pa", desc: "Fast, accurate diagnostics and repairs." },
    { title: "AC Installation", slug: "ac-installation-beaver-falls-pa", desc: "Energy-efficient central air and ductless systems." },
    { title: "AC Replacement", slug: "ac-installation-beaver-falls-pa", desc: "Upgrade to a high-SEER system to lower bills." },
    { title: "AC Maintenance", slug: "ac-maintenance-beaver-falls-pa", desc: "Annual tune-ups to prevent breakdowns." },
    { title: "Emergency AC Service", slug: "emergency-hvac-beaver-falls-pa", desc: "24/7 emergency response when you need it most." }
  ];
  return (
    <section className="section bg-surface-soft">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHead eyebrow="Cooling" title="Air Conditioning Services" sub="Stay cool all summer with our comprehensive AC services." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {acList.map(s => (
            <Card key={s.title} className="p-6 hover-lift border-border/60">
              <h3 className="text-lg font-bold"><Link to="/$slug" params={{ slug: s.slug }} className="text-primary hover:text-teal">{s.title}</Link></h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeatingServices() {
  const heatingList = [
    { title: "Heating Repair", slug: "heating-repair-beaver-falls-pa", desc: "Fast repair for all heating systems." },
    { title: "Furnace Repair", slug: "furnace-repair-beaver-falls-pa", desc: "Gas and electric furnace troubleshooting." },
    { title: "Furnace Installation", slug: "furnace-installation-beaver-falls-pa", desc: "High-efficiency furnace replacements." },
    { title: "Furnace Maintenance", slug: "furnace-maintenance-beaver-falls-pa", desc: "Keep your furnace safe and efficient." },
    { title: "Heat Pump Repair", slug: "heat-pump-repair-beaver-falls-pa", desc: "Specialized heat pump diagnostics." },
    { title: "Heat Pump Installation", slug: "heat-pump-installation-beaver-falls-pa", desc: "Versatile heating and cooling systems." }
  ];
  return (
    <section className="section">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHead eyebrow="Heating" title="Heating Services" sub="Reliable warmth for Beaver Falls winters." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {heatingList.map(s => (
            <Card key={s.title} className="p-6 hover-lift border-border/60">
              <h3 className="text-lg font-bold"><Link to="/$slug" params={{ slug: s.slug }} className="text-primary hover:text-teal">{s.title}</Link></h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmergencyService() {
  return (
    <section className="section bg-surface-soft">
      <div className="container-px mx-auto max-w-7xl text-center">
        <SectionHead eyebrow="24/7 Support" title="24/7 Emergency HVAC Service" sub="We are here for you any time of day or night." />
        <Button asChild variant="cta" size="xl" className="mt-8">
          <Link to="/$slug" params={{ slug: "emergency-hvac-beaver-falls-pa" }}>Request Emergency Service</Link>
        </Button>
      </div>
    </section>
  );
}
