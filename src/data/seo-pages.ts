import { Snowflake, Wrench, Flame, HardHat, Wind, Sparkles, Building2, Siren, Thermometer, type LucideIcon } from "lucide-react";

export type ServiceSpec = {
  slug: string; // e.g. "ac-repair"
  name: string; // e.g. "AC Repair"
  category: "AC" | "Heating" | "Furnace" | "Heat Pump" | "Air Quality" | "Commercial" | "Emergency";
  type: "Installation" | "Repair" | "Maintenance" | "Service";
  icon: LucideIcon;
  intro: string;
  features: string[];
};

export const SERVICES: ServiceSpec[] = [
  { slug: "ac-installation", name: "AC Installation", category: "AC", type: "Installation", icon: Snowflake,
    intro: "Energy-efficient central air, ductless mini-split and heat-pump installations sized for your home. Every install comes with a 10-year parts & labor warranty and a satisfaction guarantee.",
    features: ["Right-sized Manual J load calculations","Carrier, Trane, Lennox & Goodman dealer","High-SEER inverter systems","Smart thermostat included","Old unit haul-away","10-year parts & labor warranty"] },
  { slug: "ac-repair", name: "AC Repair", category: "AC", type: "Repair", icon: Wrench,
    intro: "Same-day air conditioner repair for every major brand. Our NATE-certified techs diagnose accurately, quote upfront, and get your home cool again — fast.",
    features: ["Same-day diagnostics","All brands & models","Refrigerant leak detection","Capacitor & compressor repair","Upfront flat-rate pricing","24/7 emergency repair"] },
  { slug: "ac-maintenance", name: "AC Maintenance", category: "AC", type: "Maintenance", icon: Sparkles,
    intro: "Annual AC tune-ups that extend system life, lower energy bills, and prevent summer breakdowns. Includes 21-point inspection and priority dispatch.",
    features: ["21-point precision tune-up","Coil cleaning & flush","Refrigerant level check","Electrical safety inspection","Priority service membership","15% off any repairs"] },
  { slug: "heating-installation", name: "Heating Installation", category: "Heating", type: "Installation", icon: Flame,
    intro: "Modern, ultra-quiet heating systems sized for Pennsylvania winters. We install gas, electric and hybrid systems with high-efficiency ratings and smart controls.",
    features: ["96%+ AFUE high-efficiency systems","Boilers, furnaces & heat pumps","Smart thermostat included","Permits & inspection handled","Rebate paperwork filed","10-year parts & labor warranty"] },
  { slug: "heating-repair", name: "Heating Repair", category: "Heating", type: "Repair", icon: HardHat,
    intro: "Fast, reliable heating repair when you need warmth most. We service every brand of furnace, boiler and heat pump with same-day appointments.",
    features: ["Same-day winter response","All makes & models","Pilot, ignitor & burner repair","Thermostat troubleshooting","No overtime fees","100% satisfaction guarantee"] },
  { slug: "heating-maintenance", name: "Heating Maintenance", category: "Heating", type: "Maintenance", icon: Sparkles,
    intro: "Annual fall heating tune-ups that catch problems before they leave you in the cold. Includes carbon monoxide testing for your family's safety.",
    features: ["Multi-point furnace inspection","CO & combustion testing","Heat exchanger inspection","Burner cleaning","Belt & blower service","Priority emergency dispatch"] },
  { slug: "furnace-installation", name: "Furnace Installation", category: "Furnace", type: "Installation", icon: Flame,
    intro: "Professional installation of gas, electric and oil furnaces from leading brands. High-efficiency models help cut your winter heating bills by up to 30%.",
    features: ["Gas, electric & oil furnaces","Up to 98% AFUE efficiency","Variable-speed blowers","Smart thermostat included","Financing available","10-year warranty"] },
  { slug: "furnace-repair", name: "Furnace Repair", category: "Furnace", type: "Repair", icon: Wrench,
    intro: "Fast furnace repair when temperatures drop. Our techs carry the most common parts on every truck, so most repairs happen on the first visit.",
    features: ["Same-day diagnostics","Ignition & pilot repair","Flame sensor cleaning","Blower motor replacement","Heat exchanger inspection","Upfront pricing"] },
  { slug: "furnace-maintenance", name: "Furnace Maintenance", category: "Furnace", type: "Maintenance", icon: Sparkles,
    intro: "Annual furnace maintenance keeps your system safe, efficient and reliable all winter long — and protects your manufacturer's warranty.",
    features: ["Complete safety inspection","Combustion analysis","Filter replacement","Burner & ignitor cleaning","Thermostat calibration","Tune-up certificate"] },
  { slug: "heat-pump-installation", name: "Heat Pump Installation", category: "Heat Pump", type: "Installation", icon: Thermometer,
    intro: "High-efficiency heat pumps deliver year-round comfort with one system. We install cold-climate models built to handle Western Pennsylvania winters.",
    features: ["Cold-climate inverter heat pumps","Ductless mini-split options","Federal tax credit assistance","Up to 22 SEER2 efficiency","Smart zoning","10-year warranty"] },
  { slug: "heat-pump-repair", name: "Heat Pump Repair", category: "Heat Pump", type: "Repair", icon: Wrench,
    intro: "Specialized heat pump repair from technicians trained on every major inverter and mini-split system. Diagnostic in one visit, fix in the next.",
    features: ["Reversing valve service","Defrost cycle troubleshooting","Inverter board diagnostics","Refrigerant recovery & recharge","Mini-split specialists","Brand-agnostic"] },
  { slug: "duct-cleaning", name: "Duct Cleaning", category: "Air Quality", type: "Service", icon: Wind,
    intro: "Deep-clean ductwork using NADCA-approved tools to remove dust, dander and allergens — boosting airflow and improving indoor air quality.",
    features: ["Full whole-home duct cleaning","NADCA-approved methods","HEPA-filtered vacuum","Sanitizing fog treatment","Dryer vent cleaning add-on","Before & after photos"] },
  { slug: "indoor-air-quality", name: "Indoor Air Quality", category: "Air Quality", type: "Service", icon: Sparkles,
    intro: "Whole-home air purification, UV sanitization, humidity control and high-MERV filtration designed to remove allergens, viruses and odors.",
    features: ["UV-C purification systems","HEPA & MERV-16 filtration","Whole-home humidifiers","Dehumidifier installation","Air quality testing","Allergy & asthma solutions"] },
  { slug: "commercial-hvac", name: "Commercial HVAC", category: "Commercial", type: "Service", icon: Building2,
    intro: "Full-service commercial HVAC for offices, retail, restaurants and industrial facilities. RTU service, preventive maintenance plans, and emergency response 24/7.",
    features: ["Rooftop unit (RTU) service","Preventive maintenance contracts","Light commercial split systems","Refrigeration & make-up air","After-hours scheduling","Single point of contact"] },
  { slug: "emergency-hvac", name: "Emergency HVAC", category: "Emergency", type: "Service", icon: Siren,
    intro: "24/7 emergency HVAC response with no overtime fees on nights, weekends or holidays. A real human answers your call — every hour of every day.",
    features: ["24/7/365 dispatch","No overtime fees","60–90 minute response","Fully stocked trucks","All brands serviced","Upfront emergency pricing"] },
];

export const SERVICE_BY_SLUG: Record<string, ServiceSpec> = Object.fromEntries(SERVICES.map(s => [s.slug, s]));

export type LocationSpec = {
  slug: string; // "pittsburgh", "mt-lebanon"
  name: string; // "Pittsburgh"
  blurb: string; // localized intro
};

export const LOCATIONS: LocationSpec[] = [
  { slug: "pittsburgh", name: "Pittsburgh", blurb: "From the South Side to Lawrenceville, Keller Heating And Cooling LLC is Pittsburgh's go-to HVAC contractor. We know the city's mix of historic brick row homes, hillside duplexes and modern downtown condos — and how to keep every one of them comfortable year-round." },
  { slug: "allegheny-county", name: "Allegheny County", blurb: "Serving every borough and township across Allegheny County with fast, dependable HVAC service. Our trucks are stocked, our techs are local, and same-day appointments are the rule, not the exception." },
  { slug: "beaver-county", name: "Beaver County", blurb: "Trusted HVAC service across Beaver County — Beaver Falls, Aliquippa, Ambridge, Monaca and surrounding communities. Local roots, local technicians, and a 4.9-star reputation built one job at a time." },
  { slug: "washington-county", name: "Washington County", blurb: "Keller Heating And Cooling LLC proudly serves homeowners and businesses throughout Washington County, including Canonsburg, Peters Township and McMurray. Fast response, honest pricing." },
  { slug: "mt-lebanon", name: "Mt. Lebanon", blurb: "Mt. Lebanon's century homes deserve modern comfort. We specialize in carefully integrating high-efficiency HVAC into older South Hills homes without disturbing their character." },
  { slug: "bethel-park", name: "Bethel Park", blurb: "Fast, friendly HVAC service for Bethel Park families. From routine AC tune-ups to full system replacements, we treat your home like our own and never leave a mess." },
  { slug: "monroeville", name: "Monroeville", blurb: "Reliable HVAC repair and installation across Monroeville, Plum and Murrysville. Same-day appointments, transparent flat-rate pricing, and certified technicians on every job." },
  { slug: "cranberry-township", name: "Cranberry Township", blurb: "Cranberry Township's growing neighborhoods trust Keller Heating And Cooling LLC for new-construction installs, warranty service and routine maintenance on every major brand." },
  { slug: "wexford", name: "Wexford", blurb: "Premium HVAC service for Wexford homeowners. We install and service high-efficiency systems with the precision and finish quality the North Hills expects." },
  { slug: "moon-township", name: "Moon Township", blurb: "Whether you're near the airport corridor or the residential cul-de-sacs off University Boulevard, our Moon Township customers get fast same-day response and honest answers." },
  { slug: "mccandless", name: "McCandless", blurb: "Heating and cooling experts serving McCandless and the surrounding North Hills. Energy-efficient installs, dependable repairs, and a satisfaction guarantee on every visit." },
  { slug: "ross-township", name: "Ross Township", blurb: "Ross Township homeowners count on us for AC repair, furnace service and indoor air quality solutions. Local techs, honest quotes, and zero pressure to upsell." },
  { slug: "shaler", name: "Shaler", blurb: "Trusted HVAC service throughout Shaler Township. From Glenshaw to Etna, we deliver the same prompt, professional experience our 150+ five-star reviews are built on." },
  { slug: "penn-hills", name: "Penn Hills", blurb: "Penn Hills' mix of mid-century ranches and newer builds means every HVAC job is different — and we love that. Same-day repair, expert installations, and friendly service every time." },
  { slug: "plum", name: "Plum", blurb: "Heating and air conditioning service for Plum Borough homeowners. We service every major brand, with NATE-certified technicians and upfront flat-rate pricing." },
  { slug: "upper-st-clair", name: "Upper St. Clair", blurb: "Upper St. Clair's premier choice for HVAC. We specialize in high-efficiency installations and white-glove service for the South Hills' finest homes." },
  { slug: "robinson", name: "Robinson", blurb: "Robinson Township residents and businesses rely on Keller Heating And Cooling LLC for prompt, courteous HVAC service — from rooftop units to residential furnaces." },
  { slug: "south-hills", name: "South Hills", blurb: "Comprehensive HVAC service across the South Hills — Mt. Lebanon, Bethel Park, Upper St. Clair, Castle Shannon and Brentwood. One trusted local team for every home." },
  { slug: "north-hills", name: "North Hills", blurb: "Heating, cooling and air quality service throughout the North Hills — including McCandless, Ross, Wexford, Cranberry and Hampton Township." },
  { slug: "nearby-areas", name: "Nearby Areas", blurb: "Don't see your town listed? We service the entire Greater Pittsburgh region. Call us — chances are we're already in your neighborhood today." },
];

export const LOCATION_BY_SLUG: Record<string, LocationSpec> = Object.fromEntries(LOCATIONS.map(l => [l.slug, l]));

/** Pages where service+location combine into one route (Beaver Falls hub). */
export const PRIMARY_LOCATION = { slug: "beaver-falls", name: "Beaver Falls", state: "PA",
  blurb: "Beaver Falls is our home base. From Patterson Heights to College Hill, we've helped hundreds of local families and businesses stay comfortable year-round with honest HVAC service and craftsmanship that lasts." };

/** All service-page slugs (for Beaver Falls hub). */
export const SERVICE_PAGE_SLUGS = SERVICES.map(s => `${s.slug}-beaver-falls-pa`);

/** All location-page slugs (AC repair + city). */
export const LOCATION_PAGE_SLUGS = LOCATIONS.map(l => `ac-repair-${l.slug}-pa`);

export const ALL_SEO_SLUGS = [...SERVICE_PAGE_SLUGS, ...LOCATION_PAGE_SLUGS];

export function parseSlug(slug: string):
  | { kind: "service"; service: ServiceSpec; location: typeof PRIMARY_LOCATION }
  | { kind: "location"; location: LocationSpec; service: ServiceSpec }
  | null {
  // service pages: "{service-slug}-beaver-falls-pa"
  const SUFFIX = "-beaver-falls-pa";
  if (slug.endsWith(SUFFIX)) {
    const serviceSlug = slug.slice(0, -SUFFIX.length);
    const service = SERVICE_BY_SLUG[serviceSlug];
    if (service) return { kind: "service", service, location: PRIMARY_LOCATION };
  }
  // location pages: "ac-repair-{location-slug}-pa"
  if (slug.startsWith("ac-repair-") && slug.endsWith("-pa")) {
    const locSlug = slug.slice("ac-repair-".length, -"-pa".length);
    const location = LOCATION_BY_SLUG[locSlug];
    if (location) return { kind: "location", location, service: SERVICE_BY_SLUG["ac-repair"] };
  }
  return null;
}