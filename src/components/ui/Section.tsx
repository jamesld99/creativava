import { DecorativeBlob } from "@/components/DecorativeBlob";
import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted" | "gradient" | "warm" | "purple";
};

const variants = {
  default: "bg-lilac-50/80",
  muted: "bg-white",
  gradient:
    "bg-gradient-to-br from-lilac-100 via-blush-50 to-coral-50",
  warm: "bg-gradient-to-b from-blush-50 via-white to-lilac-50",
  purple:
    "bg-gradient-to-br from-lilac-300/40 via-lilac-100 to-blush-100",
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
      className={`relative overflow-hidden py-16 md:py-24 ${variants[variant]} ${className}`}
    >
      {blobs.map((blob, i) => (
        <DecorativeBlob key={i} variant={blob.variant} className={blob.className} />
      ))}
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

const eyebrowColors: Record<string, string> = {
  default: "bg-lilac-200/80 text-lilac-800",
  services: "bg-blush-200 text-blush-500",
  about: "bg-coral-100 text-coral-500",
  tools: "bg-mint-100 text-mint-500",
  faq: "bg-lilac-300/60 text-lilac-800",
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
    <header className={`mb-12 max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <p className={`eyebrow-pill mb-4 ${pillClass} ${align === "center" ? "mx-auto" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-violet-deep md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </header>
  );
}
