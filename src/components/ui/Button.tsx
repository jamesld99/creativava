"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "onDark";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400 text-white shadow-lg shadow-rose-600/30 hover:from-rose-700 hover:via-rose-600 hover:to-rose-500 focus-visible:ring-rose-500",
  secondary:
    "bg-cream-50 text-charcoal border-2 border-rose-200 shadow-md shadow-rose-200/40 hover:border-rose-300 hover:bg-rose-50 focus-visible:ring-rose-400",
  outline:
    "bg-transparent text-charcoal border-2 border-rose-400 hover:bg-rose-50 focus-visible:ring-rose-400",
  onDark:
    "bg-white/15 text-white border-2 border-white/50 hover:bg-white/25 focus-visible:ring-white/60",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `relative z-10 inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100 ${variants[variant]} ${className}`;

  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} scroll={href.includes("#")}>
      {children}
    </Link>
  );
}
