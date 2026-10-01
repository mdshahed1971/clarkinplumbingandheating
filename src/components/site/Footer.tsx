import { BUSINESS } from "@/lib/business";

export function Footer() {
  return (
    <footer className="border-t pb-28 pt-16 md:pb-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-display text-4xl font-semibold leading-none sm:text-6xl">
          C. Larkin <span className="font-serif font-normal italic text-copper-gradient">Plumbing & Heating</span>
        </p>
        <div className="mt-12 grid gap-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
            <p>{BUSINESS.owner}</p>
            <a className="block hover:text-primary" href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>
            <a className="block break-all hover:text-primary" href={BUSINESS.emailHref}>{BUSINESS.email}</a>
            <a className="block hover:text-primary" href={BUSINESS.messengerHref} target="_blank" rel="noreferrer">Facebook / Messenger</a>
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Services</p>
            {BUSINESS.services.map((s) => <p key={s}>{s}</p>)}
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Areas</p>
            {BUSINESS.areas.map((s) => <p key={s}>{s}</p>)}
          </div>
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">Navigate</p>
            {[["Services", "#services"], ["Problems", "#problems"], ["Before / After", "#before-after"], ["Reviews", "#reviews"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={h} href={h} className="block hover:text-primary">{l}</a>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>Gas Safe registered · {BUSINESS.location}</p>
        </div>
      </div>
    </footer>
  );
}
