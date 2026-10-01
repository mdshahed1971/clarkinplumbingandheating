import { motion } from "framer-motion";
import { Play, Facebook } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { REELS, BUSINESS } from "@/lib/business";

const STEPS = [
  ["Get in touch", "Call, email or message Chris on Facebook with what you need."],
  ["Chris assesses the job", "He'll talk through the problem and the right fix with you."],
  ["Job done, properly", "The work is carried out safely, neatly and professionally."],
];

export function HowItWorks() {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="max-w-3xl text-4xl font-semibold leading-none sm:text-5xl md:text-6xl">
            Three steps to <span className="font-serif font-normal italic text-copper-gradient">a warm home.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {STEPS.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
                <div className="relative mx-auto aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-[2rem] border bg-background">
                  {REELS[i] ? (
                    <iframe src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(REELS[i]!)}&show_text=false`} title={t} className="absolute inset-0 h-full w-full" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-secondary to-background p-6 text-center">
                      <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-primary text-primary">
                        <Play className="ml-1 h-6 w-6 fill-current" />
                      </span>
                      <p className="text-sm text-muted-foreground">Reel coming soon</p>
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center gap-2 p-4 text-xs">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-copper-gradient text-[10px] font-bold text-primary-foreground">CL</span>
                    <span className="font-semibold">{BUSINESS.name}</span>
                  </div>
                </div>
                <div className="mx-auto mt-6 max-w-[320px]">
                  <p className="font-serif text-2xl italic text-primary">Step {i + 1}</p>
                  <h3 className="mt-1 text-2xl font-medium">{t}</h3>
                  <p className="mt-2 text-muted-foreground">{d}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href={BUSINESS.facebookHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Facebook className="h-4 w-4" /> See more on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
