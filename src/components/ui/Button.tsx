import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-lilac-600 via-lilac-500 to-blush-500 text-white shadow-lg shadow-lilac-500/35 hover:from-lilac-700 hover:via-lilac-600 hover:to-blush-500 focus-visible:ring-lilac-500",
  secondary:
    "bg-white text-lilac-800 border-2 border-lilac-200 shadow-md shadow-lilac-300/30 hover:border-blush-300 hover:bg-blush-50 focus-visible:ring-blush-400",
  outline:
    "bg-transparent text-lilac-800 border-2 border-lilac-400 hover:bg-lilac-100 focus-visible:ring-lilac-400",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
