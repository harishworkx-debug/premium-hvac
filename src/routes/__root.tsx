import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { StickyContact } from "../components/StickyContact";

const BASE_URL = "https://www.kellerheatingandcooling.com";

const businessStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Keller Heating And Cooling LLC",
      alternateName: "Keller Heating & Cooling",
      description: "Premium HVAC contractor offering AC repair, heating installation, furnace service, and indoor air quality solutions. Serving Pittsburgh and surrounding areas with 24/7 emergency service.",
      url: BASE_URL,
      telephone: "+1-724-497-8681",
      email: "info@kellerheatingandcooling.com",
      faxNumber: "+1-724-XXX-XXXX",
      image: `${BASE_URL}/og-image.png`,
      logo: `${BASE_URL}/logo.png`,
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Beaver Falls",
        addressLocality: "Pittsburgh",
        addressRegion: "PA",
        postalCode: "15010",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "40.7884",
        longitude: "-80.3332",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "150",
        bestRating: "5",
        worstRating: "1",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Beaver Falls",
          containedInPlace: { "@type": "State", name: "Pennsylvania" },
        },
        {
          "@type": "City",
          name: "Pittsburgh",
          containedInPlace: { "@type": "State", name: "Pennsylvania" },
        },
        {
          "@type": "County",
          name: "Allegheny County",
        },
        {
          "@type": "County",
          name: "Beaver County",
        },
        {
          "@type": "County",
          name: "Washington County",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HVAC Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AC Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heating Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heating Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Furnace Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Heat Pump Installation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Duct Cleaning" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency HVAC" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial HVAC" } },
        ],
      },
      sameAs: [
        "https://www.facebook.com/kellerheatingandcooling",
        "https://www.instagram.com/kellerheatingandcooling",
      ],
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "Keller Heating And Cooling LLC",
      url: BASE_URL,
      logo: `${BASE_URL}/logo.png`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-724-497-8681",
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Keller Heating And Cooling LLC",
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${BASE_URL}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
      ],
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1a2848" },
      { name: "msapplication-TileColor", content: "#3b8eb5" },
      { name: "author", content: "Keller Heating And Cooling LLC" },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "google-site-verification", content: "pqF6a9yh2V3BWMc2txdyEDE_XNwaMLfw0M8U1CCxOSk" },
      { name: "keywords", content: "HVAC, AC repair, heating, furnace, air conditioning, Beaver Falls, Pittsburgh, PA, HVAC contractor, emergency HVAC, heating and cooling" },
      { property: "og:site_name", content: "Keller Heating And Cooling LLC" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:site", content: "@kellerheating" },
      { name: "twitter:creator", content: "@kellerheating" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap" },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "canonical", href: BASE_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(businessStructuredData),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
      <StickyContact />
    </QueryClientProvider>
  );
}
