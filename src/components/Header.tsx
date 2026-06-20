"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BOOKING_URL } from "@/lib/booking";
import { navLinks } from "@/lib/navigation";
import { SocialLinks } from "./SocialLinks";
import { Button } from "./ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rose-200/70 bg-cream-100/95 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Creativa VA"
            width={52}
            height={52}
            className="h-11 w-11 rounded-xl object-contain transition-opacity group-hover:opacity-90 sm:h-12 sm:w-12"
            priority
          />
          <span className="flex flex-col">
            <span className="font-display text-lg font-semibold text-charcoal transition-colors group-hover:text-rose-600">
              Creativa VA
            </span>
            <span className="hidden text-xs font-medium text-rose-500 sm:block">
              Virtual Assistant & Digital Support
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-charcoal/80 transition-colors hover:text-rose-600"
            >
              {link.label}
            </Link>
          ))}
          <SocialLinks size="sm" />
          <Button href={BOOKING_URL} className="shrink-0">
            Book a Free Discovery Call
          </Button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl bg-rose-100 p-2.5 text-charcoal lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-rose-200 bg-gradient-to-b from-cream-50 to-cream-100 px-5 py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-3 py-2.5 text-base font-semibold text-charcoal hover:bg-rose-100"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <SocialLinks size="md" />
            </li>
            <li className="mt-2 border-t border-rose-200 pt-4">
              <Button
                href={BOOKING_URL}
                className="w-full justify-center py-3.5 text-base"
                onClick={() => setOpen(false)}
              >
                Book a Free Discovery Call
              </Button>
              <p className="mt-2 text-center text-xs text-charcoal/60">
                No pressure — just a friendly chat.
              </p>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
