import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";
import { BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = createMetadata({
  title: "Services — VA, Social Media & Website Support",
  description:
    "Flexible support for busy business owners: virtual assistant help, social media management and website design. Choose what you need today and scale as you grow.",
  path: "/services",
});

const packages = [
  {
    name: "Starter support",
    text: "A small, fixed number of hours to clear a backlog or test the waters. Perfect if you're new to working with a VA.",
    best: "Best for one-off help or trying things out",
  },
  {
    name: "Ongoing monthly support",
    text: "A set amount of regular support each month for admin, inbox, diary or social media — so things stay on track consistently.",
    best: "Best for steady, week-to-week help",
  },
  {
    name: "Project-based support",
    text: "A defined project such as a new website, an Instagram refresh or a content batch, scoped and delivered to an agreed plan.",
    best: "Best for websites & social media projects",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Services"
        title="Flexible Support for Admin, Social Media and Websites"
        subtitle="Choose the help you need today — and scale up as your business grows. Every service is designed for busy business owners who want clarity, quality and results."
        primaryCta={{ label: "Book a Free Discovery Call", href: BOOKING_URL }}
        secondaryCta={{ label: "See Packages", href: "#packages" }}
      />

      <Section>
        <SectionHeader
          title="How Creativa VA Can Help"
          description="Whether you need a virtual assistant for CEOs, full social media management for small businesses, or a polished new website — we have you covered."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          <ServiceCard
            icon="social"
            title="Social Media Support"
            description="From Instagram page audits to reels and link-in-bio creation — grow your audience with consistent, on-brand content."
            href="/services/social-media"
            items={[
              "Content planning and strategy",
              "Full social media management",
              "Video editing for social media",
              "Link in bio creation",
            ]}
          />
          <ServiceCard
            icon="va"
            title="Virtual Assistant Support"
            description="Stay on top of admin with a dependable virtual assistant for business owners who need inbox, diary and back-office help."
            href="/services/virtual-assistant"
            items={[
              "Email and diary management",
              "Data entry and research",
              "Document creation",
              "Invoicing support",
            ]}
          />
          <ServiceCard
            icon="web"
            title="Website Design"
            description="Website design for small businesses and personal brands — clean, modern and easy for your clients to use."
            href="/services/website-design"
            items={[
              "Design and build",
              "Brand-aligned layouts",
              "Updates and support",
              "Mobile-friendly sites",
            ]}
          />
        </div>
      </Section>

      <Section id="packages" variant="gradient">
        <SectionHeader
          eyebrow="Packages"
          title="Support Packages to Suit Your Needs"
          description="Every business is different, so support is flexible. Here are the main ways to work together — we'll shape the details around what you actually need."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.name}
              className="flex flex-col rounded-3xl border-2 border-rose-200 bg-cream-50/95 p-7 shadow-lg"
            >
              <h3 className="font-display text-xl font-semibold text-charcoal">{pkg.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/75">{pkg.text}</p>
              <p className="mt-5 rounded-xl bg-rose-100 px-4 py-2 text-xs font-semibold text-rose-700">
                {pkg.best}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-medium text-charcoal/75">
          Packages available depending on the support needed.{" "}
          <Link href="/contact" className="font-bold text-rose-700 hover:text-rose-600">
            Get in touch for a tailored quote
          </Link>
          .
        </p>
      </Section>

      <Section variant="muted">
        <CtaBanner
          title="Not Sure Which Service Fits?"
          description="Book a free discovery call. We will listen to your goals and recommend a simple plan."
          secondaryLabel="Let's Grow Your Business"
          secondaryHref="/contact"
        />
      </Section>
    </>
  );
}
