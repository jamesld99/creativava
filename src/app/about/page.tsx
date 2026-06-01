import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { SocialLinks } from "@/components/SocialLinks";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About Creativa VA",
  description:
    "Learn about Creativa VA — a creative virtual assistant business helping CEOs, founders and business owners across the UK with admin, social media and websites.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="About Creativa VA"
        title="Creative Support for Business Owners Who Want Calm, Capable Help"
        subtitle="Creativa VA was built for busy leaders who do brilliant work — but need an organised partner to handle admin, content and online growth behind the scenes."
        primaryCta={{ label: "Book a Free Discovery Call", href: "/contact" }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />

      <Section>
        <SectionHeader
          align="left"
          title="Who We Are"
          description="Creativa VA is a virtual assistant and digital support business with a modern, warm and professional approach. We help you save time, stay organised and present your brand beautifully online."
        />
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <p>
            Running a business means wearing many hats. Between client delivery, team
            management, marketing and endless admin, it is easy to feel stretched. That
            is where Creativa VA steps in — as your trusted virtual assistant for
            business owners who need practical, reliable support without the stress of
            hiring in-house.
          </p>
          <p>
            We combine virtual assistant UK expertise with creative social media and
            website skills. Whether you need email and diary management, Instagram
            content planning, or a simple website refresh, you get one organised partner
            who understands how small businesses really work.
          </p>
          <h2 className="font-display text-2xl font-semibold text-slate-900">
            Our approach
          </h2>
          <p>
            We believe support should feel human, clear and collaborative. You will
            always know what we are working on, why it matters, and how it helps you
            move forward. No jargon — just confident, friendly help focused on your goals.
          </p>
          <h3 className="font-display text-xl font-semibold text-slate-900">
            Who we love working with
          </h3>
          <p>
            CEOs, founders, coaches, consultants, entrepreneurs and growing companies who
            value quality, organisation and a brand that looks as professional as the
            service they deliver.
          </p>
          <div className="mt-8 rounded-2xl border-2 border-rose-200 bg-gradient-to-r from-cream-100 to-rose-50 p-6">
            <p className="text-sm font-bold text-charcoal">Follow along</p>
            <p className="mt-2 text-sm text-charcoal/75">
              See our work and connect on social — we would love to hear from you.
            </p>
            <SocialLinks size="md" className="mt-4" />
          </div>
        </div>
      </Section>

      <Section variant="gradient">
        <CtaBanner
          title="Ready for Support That Actually Makes Your Week Easier?"
          description="Tell us what is on your plate. We will show you how Creativa VA can help."
        />
      </Section>
    </>
  );
}
