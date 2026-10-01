import { Facebook, Quote } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { REVIEWS, BUSINESS } from "@/lib/business";

type Card = { quote: string; name: string; placeholder?: boolean };

const FALLBACK: Card[] = Array.from({ length: 6 }, () => ({
  quote: `Read what customers say — ${BUSINESS.reviews} reviews on Facebook.`,
  name: BUSINESS.name,
  placeholder: true,
}));

function Column({ items, dir, dur }: { items: Card[]; dir: "up" | "down"; dur: string }) {
  const loop = [...items, ...items];
  return (
    <div className="mask-y h-[560px] overflow-hidden">
      <div className={`${dir === "up" ? "animate-marquee-up" : "animate-marquee-down"} pause-on-hover flex flex-col gap-5`} style={{ animationDuration: dur }}>
        {loop.map((c, i) => (
          <a key={i} href={BUSINESS.facebookHref} target="_blank" rel="noreferrer" className="block rounded-2xl border bg-card p-6 transition-colors hover:border-primary">
            <Quote className="h-6 w-6 text-primary" />
            <p className={`mt-4 ${c.placeholder ? "font-serif text-2xl italic" : "text-base"}`}>{c.quote}</p>
            <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
              {c.placeholder && <Facebook className="h-4 w-4" />}
              {c.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  const items: Card[] = REVIEWS.length ? REVIEWS : FALLBACK;
  const cols = [0, 1, 2].map((k) => items.filter((_, i) => i % 3 === k).concat(items).slice(0, Math.max(3, Math.ceil(items.length / 3))));
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
            <Column items={cols[0]} dir="up" dur="34s" />
            <div className="hidden sm:block"><Column items={cols[1]} dir="down" dur="40s" /></div>
            <div className="hidden lg:block"><Column items={cols[2]} dir="up" dur="30s" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
