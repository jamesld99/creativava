import { Button } from "./ui/Button";

type CtaBannerProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaBanner({
  title,
  description,
  primaryLabel = "Book a Free Discovery Call",
  primaryHref = "/contact",
  secondaryLabel = "Get Support Today",
  secondaryHref = "/services",
}: CtaBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border-2 border-rose-300/30 bg-gradient-to-br from-rose-600 via-charcoal to-charcoal-soft px-8 py-12 text-center shadow-2xl shadow-charcoal/25 md:px-14 md:py-16">
      <div
        className="pointer-events-none absolute -right-16 -top-16 z-0 h-48 w-48 rounded-full bg-rose-300/25 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-10 z-0 h-56 w-56 rounded-full bg-rose-400/20 blur-3xl"
        aria-hidden
      />
      <p className="relative z-10 mb-3 text-sm font-bold uppercase tracking-wider text-rose-200">
        Ready when you are ✨
      </p>
      <h2 className="relative z-10 font-display text-2xl font-semibold text-white md:text-3xl">
        {title}
      </h2>
      <p className="relative z-10 mx-auto mt-4 max-w-2xl text-base leading-relaxed text-rose-100/95">
        {description}
      </p>
      <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href={primaryHref} variant="secondary">
          {primaryLabel}
        </Button>
        <Button href={secondaryHref} variant="onDark">
          {secondaryLabel}
        </Button>
      </div>
    </div>
  );
}
