import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Snowflake, Facebook, Instagram, Star } from "lucide-react";

const footerServices = [
  { label: "AC Installation", slug: "ac-installation-beaver-falls-pa" },
  { label: "AC Repair", slug: "ac-repair-beaver-falls-pa" },
  { label: "Heating Repair", slug: "heating-repair-beaver-falls-pa" },
  { label: "Furnace Repair", slug: "furnace-repair-beaver-falls-pa" },
  { label: "Duct Cleaning", slug: "duct-cleaning-beaver-falls-pa" },
  { label: "Emergency HVAC", slug: "emergency-hvac-beaver-falls-pa" },
  { label: "Indoor Air Quality", slug: "indoor-air-quality-beaver-falls-pa" },
  { label: "Commercial HVAC", slug: "commercial-hvac-beaver-falls-pa" },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="inline-grid place-items-center w-10 h-10 rounded-xl bg-teal"><Snowflake className="w-5 h-5" /></span>
            Keller Heating And Cooling LLC
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-xs">Premium heating, cooling and indoor air quality services trusted by 1,000+ homes and businesses.</p>
          <div className="flex items-center gap-1 mt-4 text-accent">
            {[...Array(5)].map((_,i)=><Star key={i} className="w-4 h-4 fill-current" />)}
            <span className="ml-2 text-white/80 text-sm">4.9 / 5 · 150+ reviews</span>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {footerServices.map(s => (
              <li key={s.slug}><Link to="/$slug" params={{ slug: s.slug }} className="hover:text-accent">{s.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/services" className="hover:text-accent">All Services</Link></li>
            <li><Link to="/service-area" className="hover:text-accent">Service Area</Link></li>
            <li><Link to="/reviews" className="hover:text-accent">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-accent"/> <a href="tel:+17246768738">(724) 676-8738</a></li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-accent"/> info@kellerheatingandcooling.com</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-accent"/> Pittsburgh, PA</li>
            <li className="flex gap-3 pt-2 text-white/70"><Facebook className="w-5 h-5"/><Instagram className="w-5 h-5"/></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-5 text-xs text-white/60 flex flex-wrap justify-between gap-3">
          <p>© {new Date().getFullYear()} Keller Heating And Cooling LLC. Licensed · Bonded · Insured. License #HVAC-44892.</p>
          <p>24/7 Emergency Service Available</p>
        </div>
      </div>
    </footer>
  );
}