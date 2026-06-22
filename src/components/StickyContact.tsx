import { Phone, MessageCircle } from "lucide-react";

export function StickyContact() {
  return (
    <>
      <a
        href="https://wa.me/17246768738"
        target="_blank" rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="fixed bottom-6 right-6 z-40 grid place-items-center w-14 h-14 rounded-full bg-[oklch(0.68_0.17_150)] text-white shadow-elegant hover:scale-110 transition-transform animate-pulse-ring"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="https://wa.me/17246768738"
        target="_blank" rel="noopener noreferrer"
        aria-label="WhatsApp call"
        className="md:hidden fixed bottom-6 left-6 z-40 grid place-items-center w-14 h-14 rounded-full gradient-accent text-accent-foreground shadow-cta animate-pulse-ring"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
}