import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, Snowflake, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SERVICES, LOCATIONS } from "@/data/seo-pages";

const servicesDropdown = SERVICES.slice(0, 10).map(s => ({
  to: `/${s.slug}-beaver-falls-pa`,
  label: s.name,
}));

const areasDropdown = LOCATIONS.slice(0, 10).map(l => ({
  to: `/ac-repair-${l.slug}-pa`,
  label: l.name,
}));

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mServices, setMServices] = useState(false);
  const [mAreas, setMAreas] = useState(false);
  return (
    <header className="sticky top-0 z-50 glass-card border-b border-white/40">
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg text-primary">
          <span className="inline-grid place-items-center w-10 h-10 rounded-xl gradient-primary text-white shadow-glow">
            <Snowflake className="w-5 h-5" />
          </span>
          Keller Heating And Cooling LLC
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          <Link to="/" className="text-foreground/80 hover:text-primary transition-colors" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>Home</Link>

          <div className="relative group">
            <Link to="/services" className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
              Services <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 top-full pt-3 w-64 z-50">
              <div className="bg-background border border-border rounded-xl shadow-elegant py-2">
                {servicesDropdown.map(s => (
                  <Link key={s.to} to={s.to} className="block px-4 py-2 text-sm text-foreground/80 hover:bg-surface-soft hover:text-teal">{s.label}</Link>
                ))}
                <div className="my-1 border-t border-border" />
                <Link to="/services" className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-surface-soft">View all services →</Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link to="/service-area" className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors">
              Service Areas <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 top-full pt-3 w-64 z-50">
              <div className="bg-background border border-border rounded-xl shadow-elegant py-2">
                {areasDropdown.map(a => (
                  <Link key={a.to} to={a.to} className="block px-4 py-2 text-sm text-foreground/80 hover:bg-surface-soft hover:text-teal">{a.label}</Link>
                ))}
                <div className="my-1 border-t border-border" />
                <Link to="/service-area" className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-surface-soft">View all areas →</Link>
              </div>
            </div>
          </div>

          <Link to="/reviews" className="text-foreground/80 hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>Reviews</Link>
          <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>About</Link>
          <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>Contact</Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+17246768738" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4 text-teal" /> (724) 676-8738
          </a>
          <Button asChild variant="cta" size="sm">
            <Link to="/contact">Free Estimate</Link>
          </Button>
        </div>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-px py-4 flex flex-col gap-3">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 font-medium">Home</Link>

            <button onClick={() => setMServices(!mServices)} className="flex items-center justify-between py-2 font-medium">
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mServices ? "rotate-180" : ""}`} />
            </button>
            {mServices && (
              <div className="pl-4 flex flex-col gap-1 border-l-2 border-teal/30">
                <Link to="/services" onClick={() => setOpen(false)} className="py-1.5 text-sm font-semibold text-primary">All Services</Link>
                {servicesDropdown.map(s => (
                  <Link key={s.to} to={s.to} onClick={() => setOpen(false)} className="py-1.5 text-sm text-foreground/80">{s.label}</Link>
                ))}
              </div>
            )}

            <button onClick={() => setMAreas(!mAreas)} className="flex items-center justify-between py-2 font-medium">
              <span>Service Areas</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mAreas ? "rotate-180" : ""}`} />
            </button>
            {mAreas && (
              <div className="pl-4 flex flex-col gap-1 border-l-2 border-teal/30">
                <Link to="/service-area" onClick={() => setOpen(false)} className="py-1.5 text-sm font-semibold text-primary">All Areas</Link>
                {areasDropdown.map(a => (
                  <Link key={a.to} to={a.to} onClick={() => setOpen(false)} className="py-1.5 text-sm text-foreground/80">{a.label}</Link>
                ))}
              </div>
            )}

            <Link to="/reviews" onClick={() => setOpen(false)} className="py-2 font-medium">Reviews</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="py-2 font-medium">About</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2 font-medium">Contact</Link>
            <a href="tel:+17246768738" className="flex items-center gap-2 font-semibold text-primary">
              <Phone className="w-4 h-4" /> (724) 676-8738
            </a>
          </div>
        </div>
      )}
    </header>
  );
}