import service from "@/assets/service.jpg";
import { Reveal, Eyebrow } from "./Reveal";
import { Counter } from "./Trust";
import { BUSINESS } from "@/lib/business";

const REASONS = [
  ["Gas Safe registered expertise", "Work on your gas appliances carried out by a registered heating engineer."],
  ["Professional service", "From the first call to the finished job, you deal with Chris directly."],
  ["Responsive communication", "Reach him by phone, email or Facebook Messenger."],
  ["Reliable workmanship", "Careful, tidy work you can count on."],
  ["Fair pricing", "Honest, straightforward quotes for the work you need."],
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <img src={service} alt="Chris servicing a boiler with a flue gas analyser" loading="lazy" width={1024} height={1280} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 right-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border sm:-right-6">
            <div className="bg-card p-5">
              <Counter to={BUSINESS.reviews} className="font-display text-4xl font-semibold text-primary" />
              <p className="text-xs text-muted-foreground">reviews</p>
            </div>
            <div className="bg-card p-5">
              <Counter to={BUSINESS.areas.length} className="font-display text-4xl font-semibold text-primary" />
              <p className="text-xs text-muted-foreground">key areas covered</p>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>Why choose us</Eyebrow>
            <h2 className="text-4xl font-semibold leading-none sm:text-5xl md:text-6xl">
              One engineer. <span className="font-serif font-normal italic text-copper-gradient">Your name on the job.</span>
            </h2>
          </Reveal>
          <ol className="mt-12 space-y-8">
            {REASONS.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.06}>
                <li className="flex gap-6">
                  <span className="font-serif text-3xl italic text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-medium md:text-2xl">{t}</h3>
                    <p className="mt-1 text-muted-foreground">{d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
