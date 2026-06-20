import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ServiceNeeds } from "@/components/ServiceNeeds";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Website Design for Small Businesses",
  description:
    "Simple, clean, modern website design for small businesses and personal brands — builds, updates and ongoing support from Creativa VA.",
  path: "/services/website-design",
});

const services = [
  "Website design and build",
  "Simple, clean, modern websites for small businesses",
  "Personal brand websites",
  "Website updates and support",
  "Mobile-friendly, fast-loading layouts",
  "Clear calls to action and contact options",
];

const needThisIf = [
  "Your website doesn't reflect how professional your business is.",
  "You don't have a website yet and don't know where to start.",
  "Your current site is outdated, slow or hard to update.",
  "Visitors aren't turning into enquiries or bookings.",
  "You need someone reliable to handle updates and changes.",
];

export default function WebsiteDesignPage() {
  return (
    <>
      <JsonLd
        type="service"
        serviceName="Website Design"
        serviceDescription="Website design for small businesses including builds, personal brand sites, updates and ongoing support."
      />
      <Hero
        compact
        eyebrow="Website Design"
        title="Modern Websites That Help Small Businesses Look Established Online"
        subtitle="Creativa VA designs and builds simple, clean websites for small businesses and personal brands — plus updates and support when you need changes done properly."
        secondaryCta={{ label: "Let's Grow Your Business", href: "/contact" }}
      />

      <Section>
        <SectionHeader
          align="left"
          title="Website Design for Small Businesses That Converts"
          description="Your website should explain what you do, who you help and how to get in touch — clearly and beautifully. We create sites that feel premium, approachable and easy to navigate."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-charcoal/80 leading-relaxed">
            <p>
              First impressions matter. An outdated or confusing website can cost you
              enquiries before you ever get to speak with a prospect. We build
              website design for small businesses that reflects your brand and guides
              visitors toward booking a call or getting in touch.
            </p>
            <p>
              Whether you are launching something new or refreshing an existing site, we
              focus on clean layouts, plenty of white space and strong calls to action —
              the same principles we use on our own work.
            </p>
            <h2 className="font-display text-2xl font-semibold text-charcoal">
              Ongoing support
            </h2>
            <p>
              Need copy updates, new pages or small fixes? Website updates and support
              mean you are never stuck hunting for a developer for every little change.
              Want help keeping it visible too? Pair your site with{" "}
              <Link href="/services/social-media" className="font-bold text-rose-700 hover:text-rose-600">
                social media management
              </Link>
              .
            </p>
          </div>
          <ul className="rounded-3xl border border-rose-200 bg-cream-50 p-8 shadow-lg shadow-rose-200/30">
            {services.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b border-rose-100 py-4 last:border-0 text-sm text-charcoal/80"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section variant="muted">
        <ServiceNeeds items={needThisIf} />
      </Section>

      <Section variant="gradient">
        <CtaBanner
          title="Ready for a Website You Are Proud to Share?"
          description="Book a free discovery call and tell us about your business, brand and goals."
        />
      </Section>
    </>
  );
}
