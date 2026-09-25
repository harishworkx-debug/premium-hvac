import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const BASE_URL = "https://www.kellerheatingandcooling.com";

const reviews = [
  { n: "Vincent Marcello", c: "Beaver Falls", t: "I called to have my water hot tank replaced because it was leaking. The team at Keller heating and cooling had the job done in a few hours with new lines and fittings as well. There was no mess left behind and they hauled the old tank away." },
  { n: "Jimmie Lee DiIanni", c: "Beaver Falls", t: "Our heat went out this week, which is always stressful during these cold days. We called Keller Heating and Cooling, and they sent someone out right away. Thankfully, the issue turned out to be a common part that needed replaced. Responsive, knowledgeable, and quick!" },
  { n: "Brandi Girting", c: "Beaver Falls", t: "This is the 3rd or 4th time I have used Zach and his crew over the last couple years. They are always quick to respond/arriver and get things figured out and fixed. Fair pricing and always professional." },
  { n: "Dave Presto", c: "Beaver County", t: "As a Mechanical Engineer for a large international facilities management company, we source out a significant amount of work. It’s becoming rare to find Contractor’s anymore who deliver knowledge, consistency, and work ethic all in one package, but, that’s exactly what we experienced here." },
  { n: "Dalton Faith", c: "Beaver Falls", t: "Very professional and knowledgeable crew! Zach and his team are very transparent and take the time to educate their clients on whatever system they may have. The two guys he sent out were amazing." },
  { n: "mazen el ali", c: "Beaver Falls", t: "Zach was wonderful to work with. He responds promptly, did not try to oversell me an expensive air condition and went above and beyond to address the necessary and urgent services in timely manner." },
  { n: "Stewart Bangs", c: "Beaver Falls", t: "Will not use another heating and cooling company. Mr. Keller and his crew came out and installed my new furnace in a day, after talking to him just a few days prior. Very professional and neat." },
  { n: "Brady Young", c: "Beaver Falls", t: "Zack has done several furnaces for us now. I'm always amazed how fast he can get me an estimate and the turnaround time for a start date is incredible. He has taken care of us in emergency situations and has always given a super fair price." },
  { n: "Vindy F", c: "Beaver Falls", t: "Mom had a heater issue. Called Zach Keller and he found a way to fair her into his busy schedule today. Showed up at 7PM and fixed the issue. Professional and fair pricing. Highly recommend!" },
  { n: "Mackenzie Fajtak", c: "Beaver Falls", t: "Our heat stopped working in the evening so we called Keller Heating and Cooling. They came in a timely manor, figured out what was wrong and fixed it for a great price." },
  { n: "Brittany B.", c: "Beaver Falls", t: "Seriously the best heating and cooling company, they installed my new water heater within hours and left it spotless." },
  { n: "Chip Fortune", c: "Beaver Falls", t: "Thee best Heating and Cooling, very prompt, you won’t find a better price, Kelley’s has put in Furnance new air conditioning and a water tank." },
  { n: "Brandon Graham", c: "Beaver Falls", t: "Professional and fair pricing" },
  { n: "Ben Oaks", c: "Beaver Falls", t: "very courteous employees" },
  { n: "Kelsey Miles", c: "Beaver Falls", t: "Very helpful, professional, and friendly!!" },
  { n: "John Bravo", c: "Beaver Falls", t: "Very professional." }
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
