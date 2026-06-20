import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";
import { BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = createMetadata({
  title: "Why Work With Creativa VA",
  description:
    "Discover why CEOs and business owners choose Creativa VA: organised virtual assistant support, creative social media help and trustworthy website design.",
  path: "/why-work-with-us",
});

const benefits = [
  {
    title: "One partner for multiple needs",
    description:
      "Combine virtual assistant, social media and website support in one relationship — less juggling freelancers and more consistency.",
  },
  {
    title: "Built for busy decision-makers",
    description:
      "We understand the pace of running a business. Clear updates, reliable delivery and support that respects your time.",
  },
  {
    title: "Creative but organised",
    description:
      "Your brand looks polished and your operations stay structured. Warm, professional communication throughout.",
  },
  {
    title: "UK-focused, flexible support",
    description:
      "Virtual assistant UK services tailored to how you work — whether you need a few hours a week or regular ongoing help.",
  },
  {
    title: "Conversion-focused mindset",
    description:
      "From Instagram content planning to website CTAs, we think about what helps you attract and convert the right clients.",
  },
  {
    title: "Trustworthy and approachable",
    description:
      "No cold corporate feel. Just confident, friendly expertise from someone invested in your success.",
  },
];

export default function WhyWorkWithUsPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="Why work with us"
        title="Why Work With Creativa VA?"
        subtitle="You deserve support that is capable, organised and genuinely invested in helping your business run smoother and look better online."
        primaryCta={{ label: "Book a Free Discovery Call", href: BOOKING_URL }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />

      <Section>
        <SectionHeader
          title="The Creativa VA Difference"
          description="We are not just task-takers — we are partners who help you reclaim time, reduce overwhelm and present your business with confidence."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border-2 border-rose-200 bg-cream-50/95 p-7 shadow-md shadow-rose-100/50"
            >
              <h2 className="font-display text-lg font-semibold text-charcoal">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-semibold text-charcoal md:text-3xl">
            Let&apos;s Grow Your Business — Together
          </h2>
          <p className="mt-4 text-charcoal/75 leading-relaxed">
            If you are a CEO, founder or business owner looking for a social media
            virtual assistant, admin support or website help, Creativa VA would love to
            hear from you. Start with a free discovery call — no obligation, just a
            friendly conversation about what you need.
          </p>
        </div>
      </Section>

      <Section>
        <CtaBanner
          title="Get Support Today"
          description="Tell us what would make the biggest difference this month. We will help you build a simple plan."
        />
      </Section>
    </>
  );
}
