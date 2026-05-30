import { DecorativeBlob } from "./DecorativeBlob";
import { SocialLinks } from "./SocialLinks";
import { Button } from "./ui/Button";

type HeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  compact?: boolean;
};

export function Hero({
  title,
  subtitle,
  eyebrow = "Virtual Assistant UK · Social Media · Websites",
  primaryCta = { label: "Book a Free Discovery Call", href: "/contact" },
  secondaryCta = { label: "View Services", href: "/services" },
  compact = false,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-lilac-200 via-blush-100 to-coral-100 pt-10 pb-16 md:pt-14 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <DecorativeBlob variant="purple" className="-left-16 top-8 h-56 w-56 opacity-80" />
        <DecorativeBlob variant="coral" className="-right-10 top-20 h-48 w-48" />
        <DecorativeBlob variant="pink" className="bottom-0 left-1/3 h-40 w-40" />
        <div className="pattern-dots absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className={`grid items-center gap-10 ${compact ? "" : "lg:grid-cols-[1.1fr_0.9fr] lg:gap-14"}`}>
          <div>
            <p className="eyebrow-pill mb-5 border border-white/60 bg-white/80 text-lilac-800 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blush-400 to-lilac-500" aria-hidden />
              {eyebrow}
            </p>
            <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-violet-deep md:text-5xl lg:text-[3.25rem]">
              {title.includes(" for ") ? (
                <>
                  {title.slice(0, title.indexOf(" for "))}
                  <span className="text-gradient">{title.slice(title.indexOf(" for "))}</span>
                </>
              ) : (
                title
              )}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700 md:text-xl">
              {subtitle}
            </p>
            <div className="relative z-10 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={primaryCta.href}>{primaryCta.label}</Button>
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            </div>
            {!compact && (
              <div className="relative z-10 mt-8 flex flex-wrap items-center gap-4">
                <span className="text-sm font-medium text-slate-600">Say hello:</span>
                <SocialLinks size="sm" />
              </div>
            )}
          </div>

          {!compact && (
            <aside className="relative z-10 hidden lg:block">
              <div className="relative rotate-1 rounded-[2rem] border-2 border-white/80 bg-gradient-to-br from-white via-lilac-50 to-blush-50 p-8 shadow-2xl shadow-lilac-400/25">
                <div className="absolute -right-4 -top-4 rounded-2xl bg-gradient-to-r from-blush-400 to-lilac-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                  ✨ Real human support
                </div>
                <p className="font-display text-2xl leading-snug text-violet-deep">
                  &ldquo;You built the business — I help you{" "}
                  <span className="text-gradient">breathe again</span>.&rdquo;
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Friendly, organised VA and creative support. No stiff corporate vibes —
                  just someone in your corner who cares how your week actually feels.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    { emoji: "💜", text: "Warm, capable partnership" },
                    { emoji: "📱", text: "Social media that sounds like you" },
                    { emoji: "✅", text: "Admin off your plate, properly done" },
                  ].map((item) => (
                    <li
                      key={item.text}
                      className="flex items-center gap-3 rounded-xl bg-lilac-100/80 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      <span className="text-lg" aria-hidden>
                        {item.emoji}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-blush-400" aria-hidden />
                  <span className="h-3 w-3 rounded-full bg-lilac-500" aria-hidden />
                  <span className="h-3 w-3 rounded-full bg-coral-400" aria-hidden />
                  <span className="h-3 w-3 rounded-full bg-mint-300" aria-hidden />
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
