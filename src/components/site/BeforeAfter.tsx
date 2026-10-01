import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";
import { Reveal, Eyebrow } from "./Reveal";

export function BeforeAfter() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);
  const update = useCallback((x: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)));
  }, []);

  return (
    <section id="before-after" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow>Before / After</Eyebrow>
          <h2 className="mb-12 max-w-3xl text-4xl font-semibold leading-none sm:text-5xl md:text-6xl">
            Drag to see the <span className="font-serif font-normal italic text-copper-gradient">difference.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div
            ref={ref}
            className="relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-3xl border sm:aspect-[16/10]"
            onPointerDown={(e) => { dragging.current = true; e.currentTarget.setPointerCapture(e.pointerId); update(e.clientX); }}
            onPointerMove={(e) => dragging.current && update(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
          >
            <img src={after} alt="After: new boiler neatly installed" loading="lazy" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
            <img src={before} alt="Before: old corroded boiler" loading="lazy" className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }} draggable={false} />
            <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest backdrop-blur">Before</span>
            <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground">After</span>
            <div className="absolute inset-y-0 w-0.5 bg-cream" style={{ left: `${pos}%` }}>
              <button
                aria-label="Drag to compare before and after"
                role="slider"
                aria-valuenow={Math.round(pos)}
                aria-valuemin={0}
                aria-valuemax={100}
                onKeyDown={(e) => { if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5)); if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5)); }}
                className="shadow-glow absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-primary text-primary-foreground ring-4 ring-cream/40 sm:h-16 sm:w-16"
              >
                <ChevronsLeftRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
