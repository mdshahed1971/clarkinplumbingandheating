import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import leak from "@/assets/leak.jpg";
import radiator from "@/assets/radiator.jpg";
import service from "@/assets/service.jpg";
import before from "@/assets/before.jpg";
import cp12 from "@/assets/cp12.jpg";
import { Reveal, Eyebrow } from "./Reveal";

const PROBLEMS = [
  { p: "Leaking pipes", s: "Leaks traced and repaired before they cause damage.", img: leak },
  { p: "Cold radiators", s: "Radiators bled, balanced and faults fixed so heat reaches every room.", img: radiator },
  { p: "Boiler not working", s: "Breakdowns diagnosed and repaired by a Gas Safe registered engineer.", img: service },
  { p: "Old, tired boiler", s: "A clean, tidy new boiler installation.", img: before },
  { p: "Landlord gas check due", s: "CP12 gas safety certificates for your rental properties.", img: cp12 },
];

export function Problems() {
  const [active, setActive] = useState(0);
  return (
    <section id="problems" className="bg-cream py-24 text-cream-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow>Problems we solve</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-semibold leading-none sm:text-5xl md:text-6xl">
            Something's not right? <span className="font-serif font-normal italic">Chris will sort it.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ul>
            {PROBLEMS.map((it, i) => (
              <li key={it.p} className="border-t border-cream-foreground/15 last:border-b">
                <button onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} className="group flex w-full items-baseline gap-5 py-6 text-left">
                  <span className="font-display text-sm opacity-50">0{i + 1}</span>
                  <span className="flex-1">
                    <span className={`block font-display text-2xl font-semibold transition-all duration-500 sm:text-4xl ${active === i ? "translate-x-2 text-primary" : "opacity-60"}`}>{it.p}</span>
                    <AnimatePresence initial={false}>
                      {active === i && (
                        <motion.span initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="block overflow-hidden">
                          <span className="block pt-3 text-base opacity-75">{it.s}</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl lg:sticky lg:top-28 lg:aspect-auto lg:h-[620px]">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={active}
                src={PROBLEMS[active]!.img}
                alt={PROBLEMS[active]!.p}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <div className="absolute bottom-5 left-5 rounded-full bg-background px-4 py-2 text-sm text-foreground">
              Fixed by C. Larkin
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
