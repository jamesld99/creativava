import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Virtual Assistant & Digital Support Services",
  description:
    "Explore Creativa VA services: social media management, virtual assistant support and website design for CEOs, founders and small business owners in the UK.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Services"
        title="Flexible Support for Admin, Social Media and Websites"
        subtitle="Choose the help you need today — and scale up as your business grows. Every service is designed for busy business owners who want clarity, quality and results."
        secondaryCta={{ label: "Book a Free Discovery Call", href: "/contact" }}
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
