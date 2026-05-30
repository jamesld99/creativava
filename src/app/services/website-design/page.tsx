import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Website Design for Small Businesses",
  description:
    "Simple, modern website design for small businesses and personal brands. Build, updates and ongoing website support from Creativa VA.",
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
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              First impressions matter. A outdated or confusing website can cost you
              enquiries before you ever get to speak with a prospect. We build
              website design for small businesses that reflects your brand and guides
              visitors toward booking a call or getting in touch.
            </p>
            <p>
              Whether you are launching something new or refreshing an existing site, we
              focus on clean layouts, plenty of white space and strong calls to action —
              the same principles we use on our own work.
            </p>
            <h2 className="font-display text-2xl font-semibold text-slate-900">
              Ongoing support
            </h2>
            <p>
              Need copy updates, new pages or small fixes? Website updates and support
              mean you are never stuck hunting for a developer for every little change.
            </p>
          </div>
          <ul className="rounded-3xl border border-lilac-100 bg-white p-8 shadow-lg shadow-lilac-200/30">
            {services.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 border-b border-lilac-50 py-4 last:border-0 text-sm text-slate-700"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lilac-100 text-lilac-700" aria-hidden>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
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
