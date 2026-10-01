import { ArrowUpRight } from "lucide-react";
import install from "@/assets/install.jpg";
import service from "@/assets/service.jpg";
import leak from "@/assets/leak.jpg";
import cp12 from "@/assets/cp12.jpg";
import after from "@/assets/after.jpg";
import radiator from "@/assets/radiator.jpg";
import { Reveal, Eyebrow } from "./Reveal";

const ITEMS = [
  { img: install, t: "Installations", d: "New boilers, pipework and heating systems fitted neatly." },
  { img: service, t: "Services", d: "Boiler servicing to keep your system safe and efficient." },
  { img: leak, t: "Repairs", d: "Leaks, faults and breakdowns diagnosed and fixed." },
  { img: cp12, t: "CP12's", d: "Landlord gas safety certificates." },
  { img: after, t: "Installations", d: "Clean, tidy boiler swaps." },
  { img: radiator, t: "Repairs", d: "Cold radiators and heating faults." },
];

export function Services() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <section id="services" className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto mb-14 flex max-w-7xl flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <Reveal>
          <Eyebrow>Services</Eyebrow>
          <h2 className="max-w-2xl text-4xl font-semibold leading-none sm:text-5xl md:text-6xl">
            Four things, <span className="font-serif font-normal italic text-copper-gradient">done well.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-2">
            {["Installations", "Services", "Repairs", "CP12's"].map((s) => (
              <span key={s} className="rounded-full border px-4 py-2 text-sm">{s}</span>
            ))}
          </div>
        </Reveal>
      </div>
      <div className="mask-x group">
        <div className="animate-marquee-x pause-on-hover flex w-max gap-5">
          {loop.map((it, i) => (
            <a href="#contact" key={i} className="relative block h-[380px] w-[260px] shrink-0 overflow-hidden rounded-2xl sm:h-[440px] sm:w-[320px]">
              <img src={it.img} alt={it.t} loading="lazy" width={1024} height={1280} className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-semibold">{it.t}</h3>
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
                <p className="mt-2 text-sm text-foreground/75">{it.d}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
