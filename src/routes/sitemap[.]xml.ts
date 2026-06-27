import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ALL_SEO_SLUGS } from "@/data/seo-pages";

const BASE_URL = "https://www.kellerheatingandcooling.com";

type SitemapPage = { path: string; priority: string; changefreq: string };

const priorityPages: SitemapPage[] = [
  { path: "/", priority: "1.0", changefreq: "daily" },
  { path: "/services", priority: "0.9", changefreq: "weekly" },
  { path: "/service-area", priority: "0.8", changefreq: "weekly" },
  { path: "/reviews", priority: "0.85", changefreq: "daily" },
  { path: "/financing", priority: "0.8", changefreq: "monthly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/emergency", priority: "0.9", changefreq: "weekly" },
];

const seoPages: SitemapPage[] = ALL_SEO_SLUGS.map(slug => ({
  path: `/${slug}/`,
  priority: "0.8",
  changefreq: "weekly",
}));

const allPages = [...priorityPages, ...seoPages];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split('T')[0];
        
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
   xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`,
          ...allPages.map(p => `  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`),
          `</urlset>`,
        ].join("\n");
        
        return new Response(xml, { 
          headers: { 
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=86400",
            "X-Content-Type-Options": "nosniff"
          } 
        });
      },
    },
  },
});