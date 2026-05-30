import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact Creativa VA",
  description:
    "Contact Creativa VA to book a free discovery call. Call 07949 282054 or email liset@creativalilo.com for virtual assistant and social media support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Contact"
        title="Book a Free Discovery Call"
        subtitle="Tell us about your business and the support you need. We will get back to you with clear, friendly next steps — whether you need admin help, social media or a new website."
        primaryCta={{ label: "Get Support Today", href: "#contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />
      <ContactSection showHeader={false} />
    </>
  );
}
