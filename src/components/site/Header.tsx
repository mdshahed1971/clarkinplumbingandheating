import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const NAV = [
  ["Services", "#services"],
  ["Problems", "#problems"],
  ["Work", "#before-after"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b bg-background/80 backdrop-blur-xl" : ""}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-copper-gradient font-display text-sm font-bold text-primary-foreground">CL</span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold sm:text-base">C. Larkin</span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Plumbing & Heating</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
            <Phone className="h-4 w-4" /> <span className="hidden sm:inline">{BUSINESS.phoneDisplay}</span><span className="sm:hidden">Call</span>
          </a>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border lg:hidden">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t bg-background/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="block py-3 font-display text-2xl">{l}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
