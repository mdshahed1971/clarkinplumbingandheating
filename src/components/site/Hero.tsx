import { motion } from "framer-motion";
import { Phone, ArrowDown, ShieldCheck, MessageCircle } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { BUSINESS } from "@/lib/business";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section id="top" className="grain relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Cinematic background: slow-moving still. Swap for a <video> when footage is available. */}
      <img src={hero} alt="Gas Safe engineer fitting copper pipework to a boiler" width={1920} height={1088} className="animate-kenburns absolute inset-0 h-full w-full object-cover" />
      <div className="bg-hero-overlay absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 md:px-8 md:pb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/40 px-4 py-2 text-xs backdrop-blur">
          <ShieldCheck className="h-4 w-4 text-gas" /> Gas Safe registered · Washington, Northeast
        </motion.div>
        <h1 className="max-w-5xl text-[2.6rem] font-semibold leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
          {["Reliable plumbing", "& heating, done"].map((line, i) => (
            <span key={i} className="block overflow-hidden pb-1">
              <motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.15 + i * 0.12, ease }}>
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden pb-2">
            <motion.span className="block font-serif font-normal italic text-copper-gradient" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.4, ease }}>
              properly.
            </motion.span>
          </span>
        </h1>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.7, ease }} className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-base text-foreground/80 md:text-lg">
            {BUSINESS.owner} — Gas Safe registered heating engineer. Installations, services, repairs and CP12's across all areas of the Northeast.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={BUSINESS.phoneHref} className="shadow-glow inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition-transform hover:scale-[1.03]">
              <Phone className="h-4 w-4" /> Call Chris
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border bg-background/30 px-7 py-4 font-semibold backdrop-blur transition-colors hover:bg-background/60">
              <MessageCircle className="h-4 w-4" /> Get in touch
            </a>
          </div>
        </motion.div>
      </div>
      <a href="#trust" aria-label="Scroll down" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex">
        Scroll
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}><ArrowDown className="h-4 w-4" /></motion.span>
      </a>
    </section>
  );
}
