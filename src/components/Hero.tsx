import Image from "next/image";
import { BOOKING_URL } from "@/lib/booking";
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
  primaryCta = { label: "Book a Free Discovery Call", href: BOOKING_URL },
  secondaryCta = { label: "View Services", href: "/services" },
  compact = false,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream-100 via-rose-50 to-rose-100 pt-10 pb-16 md:pt-14 md:pb-24">
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <DecorativeBlob variant="purple" className="-left-16 top-8 h-56 w-56 opacity-80" />
        <DecorativeBlob variant="pink" className="-right-10 top-20 h-48 w-48" />
        <DecorativeBlob variant="coral" className="bottom-0 left-1/3 h-40 w-40" />
        <div className="pattern-dots absolute inset-0 opacity-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className={`grid items-center gap-10 ${compact ? "" : "lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"}`}>
          <div>
            <p className="eyebrow-pill mb-5 border border-rose-200/80 bg-cream-50/90 text-rose-700 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-rose-500" aria-hidden />
              {eyebrow}
            </p>
            <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-charcoal md:text-5xl lg:text-[3.25rem]">
              {title.includes(" for ") ? (
                <>
                  {title.slice(0, title.indexOf(" for "))}
                  <span className="text-gradient">{title.slice(title.indexOf(" for "))}</span>
                </>
              ) : (
                title
              )}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80 md:text-xl">
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
                <span className="text-sm font-medium text-charcoal/70">Say hello:</span>
                <SocialLinks size="sm" />
              </div>
            )}
          </div>

          {!compact && (
            <aside className="relative z-10 hidden lg:block">
              <div className="relative overflow-hidden rounded-[2rem] border-2 border-rose-200/80 bg-cream-50 p-6 shadow-2xl shadow-rose-300/25">
                <Image
                  src="/brand-banner.png"
                  alt="Creativa VA — admin support, social media, website design"
                  width={560}
                  height={280}
                  className="h-auto w-full rounded-xl object-cover"
                  priority
                />
                <p className="mt-5 font-display text-lg leading-snug text-charcoal">
                  Organised, efficient, reliable support — with a warm human touch.
                </p>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
