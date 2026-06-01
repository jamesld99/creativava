import { DecorativeBlob } from "@/components/DecorativeBlob";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "gradient" | "warm" | "purple";
};

const variants = {
  default: "bg-cream-100/90",
  muted: "bg-cream-50",
  gradient:
    "bg-gradient-to-br from-cream-100 via-rose-50 to-rose-100",
  warm: "bg-gradient-to-b from-rose-50 via-cream-50 to-cream-100",
  purple:
    "bg-gradient-to-br from-rose-100/80 via-cream-100 to-rose-50",
};

const blobConfig: Record<string, { variant: "purple" | "pink" | "coral" | "mint"; className: string }[]> = {
  gradient: [
    { variant: "pink", className: "right-0 top-0 h-40 w-40" },
    { variant: "coral", className: "left-0 bottom-0 h-32 w-32" },
  ],
  warm: [{ variant: "coral", className: "right-10 top-10 h-36 w-36" }],
  purple: [{ variant: "purple", className: "-left-10 bottom-10 h-48 w-48" }],
};

export function Section({
  id,
  children,
  className = "",
  variant = "default",
}: SectionProps) {
  const blobs = blobConfig[variant] ?? [];

  return (
    <section
      id={id}
      className={`relative overflow-hidden py-16 md:py-24 ${variants[variant]} ${className} ${id ? "scroll-mt-24" : ""}`}
    >
      {blobs.length > 0 && (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
          {blobs.map((blob, i) => (
            <DecorativeBlob key={i} variant={blob.variant} className={blob.className} />
          ))}
        </div>
      )}
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

const eyebrowColors: Record<string, string> = {
  default: "bg-rose-100 text-rose-700",
  services: "bg-rose-200 text-rose-800",
  about: "bg-rose-100 text-rose-600",
  tools: "bg-cream-200 text-charcoal",
  faq: "bg-rose-200/80 text-rose-800",
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  accent = "default",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  accent?: keyof typeof eyebrowColors;
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const pillClass = eyebrowColors[accent] ?? eyebrowColors.default;

  return (
    <header className={`relative z-10 mb-12 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className={`eyebrow-pill mb-4 ${pillClass} ${align === "center" ? "mx-auto" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-charcoal md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-charcoal/75">
          {description}
        </p>
      )}
    </header>
  );
}
