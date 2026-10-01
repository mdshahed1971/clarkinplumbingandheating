import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { Reveal, Eyebrow } from "./Reveal";
import { BUSINESS } from "@/lib/business";

const ACTIONS = [
  { icon: Phone, label: "Call", value: BUSINESS.phoneDisplay, href: BUSINESS.phoneHref, primary: true },
  { icon: Mail, label: "Email", value: BUSINESS.email, href: BUSINESS.emailHref },
  { icon: MessageCircle, label: "Messenger", value: BUSINESS.name, href: BUSINESS.messengerHref, external: true },
];

export function Contact() {
  return (
    <section id="contact" className="grain relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow>Contact</Eyebrow>
          <h2 className="text-5xl font-semibold leading-[0.9] sm:text-7xl md:text-8xl">
            Let's get it <span className="font-serif font-normal italic text-copper-gradient">sorted.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4">
            {ACTIONS.map((a, i) => (
              <Reveal key={a.label} delay={i * 0.08}>
                <a
                  href={a.href}
                  {...(a.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={`group flex items-center gap-5 rounded-2xl border p-5 transition-all duration-500 sm:p-7 ${a.primary ? "bg-primary text-primary-foreground shadow-glow" : "bg-card hover:border-primary"}`}
                >
                  <a.icon className="h-6 w-6 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-[0.2em] opacity-70">{a.label}</p>
                    <p className="truncate font-display text-xl font-semibold sm:text-3xl">{a.value}</p>
                  </div>
                  <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform duration-500 group-hover:rotate-45" />
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border bg-card p-7">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <p className="font-display text-xl font-semibold">Based in {BUSINESS.location}</p>
                  <p className="text-muted-foreground">Covering {BUSINESS.coverage.toLowerCase()}</p>
                </div>
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">Service areas</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {BUSINESS.areas.map((a) => (
                  <li key={a} className="rounded-full border px-4 py-2 text-sm">{a}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
      {/* Sticky mobile call bar */}
      <a href={BUSINESS.phoneHref} className="fixed inset-x-4 bottom-4 z-40 flex items-center justify-center gap-2 rounded-full bg-primary py-4 font-semibold text-primary-foreground shadow-glow md:hidden">
        <Phone className="h-4 w-4" /> Call Chris now
      </a>
    </section>
  );
}
