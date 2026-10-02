import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ShieldCheck, MapPin, Zap, Wrench, Star } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { BUSINESS } from "@/lib/business";

export function Counter({ to, className }: { to: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref} className={className}>{v}</span>;
}

const POINTS = [
  { icon: ShieldCheck, t: "Gas Safe registered", d: "Qualified to work safely on your gas appliances and heating." },
  { icon: MapPin, t: "Northeast coverage", d: "Newcastle, Durham, South Shields, Washington & Sunderland." },
  { icon: Zap, t: "Responsive service", d: "Call, email or message — talk directly to Chris." },
  { icon: Wrench, t: "Professional workmanship", d: "Tidy, careful work on every installation and repair." },
];

export function Trust() {
  return (
    <section id="trust" className="relative overflow-x-clip py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal><Eyebrow>Why people call Chris</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-end gap-4">
              <Counter to={BUSINESS.reviews} className="font-display text-[8rem] font-semibold leading-[0.8] text-copper-gradient sm:text-[11rem]" />
              <div className="pb-3">
                <div className="flex gap-0.5 text-accent">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-2 font-display text-xl">customer<br />reviews</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-sm text-muted-foreground">
              A local, Washington-based engineer trusted by homeowners and landlords across the Northeast.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <ul className="divide-y border-y">
            {POINTS.map((p, i) => (
              <motion.li
                key={p.t}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-[auto_1fr] items-center gap-5 py-7 sm:grid-cols-[3rem_auto_1fr] sm:gap-8"
              >
                <span className="hidden font-display text-sm text-muted-foreground sm:block">0{i + 1}</span>
                <span className="grid h-12 w-12 place-items-center rounded-full border transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-2xl font-medium transition-transform duration-500 group-hover:translate-x-2 md:text-3xl">{p.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
