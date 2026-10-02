import { Quote, Star } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { REVIEWS, BUSINESS } from "@/lib/business";

type Card = { quote: string; name: string };

function Column({ items, dir, dur }: { items: Card[]; dir: "up" | "down"; dur: string }) {
  const loop = [...items, ...items];
  return (
    <div className="mask-y h-[560px] overflow-hidden">
      <div className={`${dir === "up" ? "animate-marquee-up" : "animate-marquee-down"} pause-on-hover flex flex-col gap-5`} style={{ animationDuration: dur }}>
        {loop.map((c, i) => (
          <figure key={i} aria-hidden={i >= items.length} className="rounded-2xl border bg-card p-6 transition-colors hover:border-primary">
            <div className="flex items-center justify-between">
              <Quote className="h-6 w-6 text-primary" />
              <div className="flex gap-0.5 text-accent">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}</div>
            </div>
            <blockquote className="mt-4 text-base leading-relaxed">“{c.quote}”</blockquote>
            <figcaption className="mt-5 flex items-center gap-3 text-sm">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-copper-gradient text-xs font-bold text-primary-foreground">
                {c.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
              </span>
              <span className="font-medium">{c.name}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const all = REVIEWS;
  const cols = [0, 1, 2].map((k) => all.filter((_, i) => i % 3 === k));
  return (
    <section id="reviews" className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="text-center">
          <div className="flex justify-center"><Eyebrow>Reviews</Eyebrow></div>
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-none sm:text-5xl md:text-6xl">
            {BUSINESS.reviews} reviews <span className="font-serif font-normal italic text-copper-gradient">and counting.</span>
          </h2>
        </Reveal>
        <div className="mt-16" style={{ perspective: "1200px" }}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" style={{ transform: "rotateX(14deg) rotateZ(-3deg)", transformStyle: "preserve-3d" }}>
            {/* On mobile one column shows all reviews */}
            <div className="sm:hidden"><Column items={all} dir="up" dur="90s" /></div>
            <div className="hidden sm:block"><Column items={cols[0]!} dir="up" dur="44s" /></div>
            <div className="hidden sm:block"><Column items={cols[1]!} dir="down" dur="52s" /></div>
            <div className="hidden lg:block"><Column items={cols[2]!} dir="up" dur="40s" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
