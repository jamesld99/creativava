"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";
import { Button } from "./ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-lilac-200/60 bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-lilac-500 via-blush-400 to-coral-400 text-lg font-bold text-white shadow-md shadow-lilac-400/40"
            aria-hidden
          >
            C
          </span>
          <span className="flex flex-col">
            <span className="font-display text-lg font-semibold text-violet-deep transition-colors group-hover:text-lilac-600">
              {siteConfig.name}
            </span>
            <span className="text-xs font-medium text-blush-500">
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
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-lilac-700"
            >
              {link.label}
            </Link>
          ))}
          <SocialLinks size="sm" />
          <Button href="/contact">Book a Free Discovery Call</Button>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl bg-lilac-100 p-2.5 text-lilac-800 lg:hidden"
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
          className="border-t border-lilac-100 bg-gradient-to-b from-blush-50 to-white px-5 py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl px-3 py-2.5 text-base font-semibold text-slate-700 hover:bg-lilac-100"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <SocialLinks size="md" />
            </li>
            <li className="pt-2">
              <Button href="/contact" className="w-full">
                Book a Free Discovery Call
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
