import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { SocialLinks } from "@/components/SocialLinks";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";
import { BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = createMetadata({
  title: "About Creativa VA & Founder Liset",
  description:
    "Meet Liset, the founder of Creativa VA — a friendly, UK-based virtual assistant helping business owners stay organised with admin, social media and website support.",
  path: "/about",
});

const values = [
  { title: "Organised", text: "I bring structure to the chaos — clear systems, tidy inboxes and nothing slipping through the cracks." },
  { title: "Reliable", text: "When I say something will be done, it gets done. You can hand things over and trust they are handled." },
  { title: "Creative", text: "From social content to website layouts, I care about how your brand looks and feels online." },
  { title: "Calm", text: "Busy does not have to mean stressful. I keep things steady so your business feels lighter." },
  { title: "Clear communication", text: "You always know what I am working on, why it matters and what happens next." },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        compact
        eyebrow="About Creativa VA"
        title="Hi, I'm Liset — the Person Behind Creativa VA"
        subtitle="I help busy business owners feel calmer and more organised by taking admin, social media and website tasks off their plate — with friendly, reliable support you can count on."
        primaryCta={{ label: "Book a Free Discovery Call", href: BOOKING_URL }}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />

      <Section>
        <SectionHeader
          align="left"
          title="Why I Started Creativa VA"
          description="Creativa VA grew out of a simple belief: business owners do their best work when they are not buried in admin."
        />
        <div className="max-w-none space-y-6 text-charcoal/80 leading-relaxed">
          <figure className="mb-2 md:float-right md:ml-8 md:mb-4 md:w-64">
            <Image
              src="/liset.png"
              alt="Liset, founder of Creativa VA"
              width={320}
              height={400}
              sizes="(max-width: 768px) 100vw, 256px"
              className="w-full rounded-2xl border-2 border-rose-200 object-cover shadow-lg"
            />
            <figcaption className="mt-2 text-center text-sm font-medium text-rose-700">
              Liset · Founder, Creativa VA
            </figcaption>
          </figure>
          <p>
            I&apos;m Liset, the founder of Creativa VA. I started this business because I
            genuinely love bringing order to busy people&apos;s days. Over the years I
            kept seeing the same thing — talented founders and small business owners
            stretched thin, spending evenings on emails, invoices and social media
            instead of the work they actually love (and the people they love).
          </p>
          <p>
            Creativa VA is my answer to that. It&apos;s a friendly, UK-based virtual
            assistant service built to give you your time back. Whether it&apos;s a
            chaotic inbox, a diary that needs managing, a quiet Instagram account or a
            website that needs building, I step in as a calm, dependable partner behind
            the scenes.
          </p>
          <h2 className="font-display text-2xl font-semibold text-charcoal">
            How I like to work
          </h2>
          <p>
            When you work with Creativa VA, you work directly with me — no call centres,
            no being passed around, no corporate jargon. Just clear communication and
            support that genuinely makes your week easier. These are the values I bring
            to every task:
          </p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {values.map((value) => (
            <li
              key={value.title}
              className="rounded-2xl border-2 border-rose-200 bg-cream-50/95 p-6 shadow-md"
            >
              <h3 className="font-display text-lg font-semibold text-charcoal">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{value.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 max-w-none space-y-6 text-charcoal/80 leading-relaxed">
          <h3 className="font-display text-xl font-semibold text-charcoal">
            Who I love working with
          </h3>
          <p>
            CEOs, founders, coaches, consultants and growing small businesses who value
            quality, organisation and a brand that looks as professional as the service
            they deliver. If that sounds like you, take a look at{" "}
            <Link href="/services" className="font-bold text-rose-700 hover:text-rose-600">
              how I can help
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-bold text-rose-700 hover:text-rose-600">
              get in touch
            </Link>{" "}
            — I&apos;d love to hear what&apos;s on your plate.
          </p>
          <div className="mt-8 rounded-2xl border-2 border-rose-200 bg-gradient-to-r from-cream-100 to-rose-50 p-6">
            <p className="text-sm font-bold text-charcoal">Follow along</p>
            <p className="mt-2 text-sm text-charcoal/75">
              See my work and connect on social — I&apos;d love to hear from you.
            </p>
            <SocialLinks size="md" className="mt-4" />
          </div>
        </div>
      </Section>

      <Section variant="gradient">
        <CtaBanner
          title="Ready for Support That Actually Makes Your Week Easier?"
          description="Tell me what's on your plate and I'll show you how Creativa VA can help. Book a free, no-pressure discovery call today."
          secondaryLabel="Get in Touch"
          secondaryHref="/contact"
        />
      </Section>
    </>
  );
}
