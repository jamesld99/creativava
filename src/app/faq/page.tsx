import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeader } from "@/components/ui/Section";
import { faqItems } from "@/lib/faq";
import { createMetadata } from "@/lib/seo";
import { BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "FAQs about Creativa VA virtual assistant, social media and website services for CEOs, founders and small business owners in the UK.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd type="faq" />
      <Hero
        compact
        eyebrow="FAQ"
        title="Questions About Virtual Assistant & Social Media Support"
        subtitle="Clear answers about who we help, what we offer and how to start working with Creativa VA — written for search engines and real business owners alike."
        primaryCta={{ label: "Book a Free Discovery Call", href: BOOKING_URL }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />

      <Section>
        <SectionHeader
          title="Everything You Need to Know"
          description="Still have a question? Get in touch — we are happy to help."
        />
        <FAQ items={faqItems} />
        <p className="mt-10 text-center text-sm text-slate-600">
          Ready to start?{" "}
          <Link href="/contact" className="font-semibold text-rose-700 hover:text-rose-600">
            Contact Creativa VA
          </Link>
        </p>
      </Section>

      <Section variant="muted">
        <CtaBanner
          title="Let's Grow Your Business"
          description="Book a free discovery call and find the right mix of VA, social media and website support."
        />
      </Section>
    </>
  );
}
