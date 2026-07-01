import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { ALL_SEO_SLUGS } from "@/data/seo-pages";

const BASE_URL = "https://www.kellerheatingandcooling.com";

type SitemapPage = {
  path: string;
  priority: string;
  changefreq: string;
  lastmod?: string;
};

// Static pages with manual lastmod dates (update when content changes)
const priorityPages: SitemapPage[] = [
  { path: "/", priority: "1.0", changefreq: "weekly", lastmod: "2025-06-01" },
  { path: "/services/", priority: "0.9", changefreq: "weekly", lastmod: "2025-06-01" },
  { path: "/service-area/", priority: "0.8", changefreq: "monthly", lastmod: "2025-06-01" },
  { path: "/reviews/", priority: "0.85", changefreq: "weekly", lastmod: "2025-06-01" },
  { path: "/financing/", priority: "0.7", changefreq: "monthly", lastmod: "2025-06-01" },
  { path: "/about/", priority: "0.7", changefreq: "monthly", lastmod: "2025-05-01" },
  { path: "/contact/", priority: "0.8", changefreq: "monthly", lastmod: "2025-05-01" },
  { path: "/emergency/", priority: "0.9", changefreq: "monthly", lastmod: "2025-06-01" },
];

const seoPages: SitemapPage[] = ALL_SEO_SLUGS.map(slug => ({
  path: `/${slug}/`,
  priority: slug.includes("ac-repair") || slug.includes("ac-installation") || slug.includes("heating-repair") || slug.includes("furnace-repair") || slug.includes("emergency") ? "0.9" : "0.8",
  changefreq: "monthly",
  lastmod: "2025-06-01",
}));

const allPages = [...priorityPages, ...seoPages];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...allPages.map(p => `  <url>
    <loc>${BASE_URL}${p.path}</loc>
    <lastmod>${p.lastmod ?? "2025-06-01"}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
            "X-Content-Type-Options": "nosniff",
          },
        });
      },
    },
  },
});