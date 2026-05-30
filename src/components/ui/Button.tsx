"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "onDark";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-lilac-600 via-lilac-500 to-blush-500 text-white shadow-lg shadow-lilac-500/35 hover:from-lilac-700 hover:via-lilac-600 hover:to-blush-500 focus-visible:ring-lilac-500",
  secondary:
    "bg-white text-lilac-800 border-2 border-lilac-200 shadow-md shadow-lilac-300/30 hover:border-blush-300 hover:bg-blush-50 focus-visible:ring-blush-400",
  outline:
    "bg-transparent text-lilac-800 border-2 border-lilac-400 hover:bg-lilac-100 focus-visible:ring-lilac-400",
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
  const classes = `relative z-10 inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

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
