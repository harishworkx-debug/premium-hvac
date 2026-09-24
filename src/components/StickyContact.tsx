import { Phone } from "lucide-react";

export function StickyContact() {
  return (
    <>
      <a
        href="tel:+17244978681"
        aria-label="Call us"
        className="fixed bottom-6 right-6 z-40 grid place-items-center w-14 h-14 rounded-full gradient-accent text-accent-foreground shadow-cta animate-pulse-ring hover:scale-110 transition-transform"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
}
