import Link from "next/link";
import Image from "next/image";
import { siteConfig, socialLinks } from "@/lib/site";
import { navLinks, serviceLinks } from "@/lib/navigation";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t-4 border-rose-400 bg-gradient-to-br from-charcoal via-charcoal-soft to-rose-800 text-white">
      <div
        className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-rose-400/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-rose-600/20 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 rounded-xl object-contain bg-cream-100/10 p-1"
              />
              <p className="font-display text-2xl font-semibold">Creativa VA</p>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-rose-100/90">
              Creative virtual assistant support for busy CEOs and business owners.
              Save time, stay organised and grow your online presence.
            </p>
            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-rose-200">
                Connect with us
              </p>
              <SocialLinks size="md" className="mt-3" />
            </div>
            <div className="mt-6 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-semibold text-white hover:text-rose-200"
              >
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-white hover:text-rose-200"
              >
                {siteConfig.email}
              </a>
            </div>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-200 underline-offset-2 hover:text-white hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-rose-200">
              Pages
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-rose-100/90 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-rose-200">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-rose-100/90 hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-8 text-sm text-rose-200/90 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Virtual assistant UK · Social media · Website design</p>
        </div>
      </div>
    </footer>
  );
}
