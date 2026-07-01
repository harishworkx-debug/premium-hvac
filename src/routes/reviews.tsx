import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const BASE_URL = "https://www.kellerheatingandcooling.com";

const reviews = [
  {
    n: "Jimmie Lee DiIanni",
    c: "Beaver Falls, PA",
    t: "Our heat went out during a cold spell and Keller Heating & Cooling responded immediately. The issue was diagnosed and repaired quickly. Excellent service."
  },
  {
    n: "Dave Presto",
    c: "Pennsylvania",
    t: "As a Mechanical Engineer, I appreciate contractors who deliver knowledge, consistency, and strong work ethic. Keller Heating & Cooling exceeded expectations."
  },
  {
    n: "Brandi Girting",
    c: "Beaver County, PA",
    t: "I've used Zach and his crew several times. They are always quick to respond, professional, knowledgeable, and fairly priced."
  },
  {
    n: "Stewart Bangs",
    c: "Beaver Falls, PA",
    t: "Keller Heating & Cooling installed my new furnace within days of my call. Professional, efficient, and very neat work."
  },
  {
    n: "Mazen El Ali",
    c: "Pennsylvania",
    t: "Zach was honest, responsive, and never tried to oversell. He handled urgent HVAC service quickly and professionally."
  },
  {
    n: "Dalton Faith",
    c: "Pennsylvania",
    t: "Very professional and knowledgeable crew. They took time to explain everything and were transparent throughout the process."
  },
  {
    n: "Mackenzie Fajtak",
    c: "Beaver County, PA",
    t: "When our heat stopped working, Keller Heating & Cooling arrived promptly, fixed the issue, and charged a fair price."
  },
  {
    n: "Brady Young",
    c: "Pennsylvania",
    t: "Fast estimates, quick scheduling, fair pricing, and dependable emergency service. Highly recommended."
  },
  {
    n: "Vindy F",
    c: "Beaver Falls, PA",
    t: "Zach fit my mother into a busy schedule, arrived in the evening, and fixed her heater issue. Professional and reasonably priced."
  },
  {
    n: "Vincent Marcello",
    c: "Beaver County, PA",
    t: "Water heater replacement was completed within hours. Clean installation, new fittings, and no mess left behind."
  }
];

const reviewsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ReviewPage",
      "@id": `${BASE_URL}/reviews/#webpage`,
      name: "Customer Reviews | Keller Heating And Cooling LLC",
      description: "Read verified customer reviews for Keller Heating And Cooling LLC. 4.9 star average from 150+ satisfied customers in Pittsburgh and surrounding areas.",
      url: `${BASE_URL}/reviews/`,
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
    {
      "@type": "AggregateRating",
      "@id": `${BASE_URL}/reviews/#aggregaterating`,
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
      itemReviewed: {
        "@type": "HVACBusiness",
        name: "Keller Heating And Cooling LLC",
      },
    },
    ...reviews.slice(0, 10).map((r, i) => ({
      "@type": "Review",
      "@id": `${BASE_URL}/reviews/#review-${i + 1}`,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: r.n,
      },
      reviewBody: r.t,
      itemReviewed: {
        "@type": "HVACBusiness",
        name: "Keller Heating And Cooling LLC",
      },
    })),
  ],
};

export const Route = createFileRoute("/reviews")({
  head: () => {
    const url = `${BASE_URL}/reviews/`;
    const title = "Customer Reviews | 4.9★ Rated HVAC Contractor in Pittsburgh";
    const description = "Read 150+ verified reviews from satisfied customers. Keller Heating And Cooling LLC is rated 4.9 stars for AC repair, heating service, and HVAC installation in Pittsburgh & Beaver Falls, PA.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: "HVAC reviews, heating cooling reviews, Pittsburgh HVAC ratings, furnace repair reviews, AC service testimonials" },
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
      scripts: [{ type: "application/ld+json", children: JSON.stringify(reviewsSchema) }],
    };
  },
  component: () => (
    <>
      <PageHero eyebrow="Reviews" title="4.9★ from 150+ verified reviews" sub="Don't take our word for it — here's what your neighbors are saying." />
      <section className="section">
        <div className="container-px mx-auto max-w-7xl grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map(r => (
            <Card key={r.n} className="p-7 rounded-2xl border-border/60 hover-lift">
              <div className="flex gap-1 text-accent">{[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4 fill-current" />)}</div>
              <p className="mt-4 text-foreground/90">"{r.t}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-bold text-primary">{r.n}</div><div className="text-sm text-muted-foreground">{r.c}, PA</div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  ),
});
