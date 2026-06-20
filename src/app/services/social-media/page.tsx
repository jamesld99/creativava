import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ServiceNeeds } from "@/components/ServiceNeeds";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Social Media Management for Small Businesses",
  description:
    "Consistent, on-brand social media management for small businesses — Instagram content planning, page audits, reels, Canva design and video editing by Creativa VA.",
  path: "/services/social-media",
});

const services = [
  "Content planning",
  "Content strategy",
  "Instagram page audits",
  "Full social media management",
  "Reels, carousels and stories",
  "Video editing for social media",
  "Canva graphic design support",
  "Link in bio creation",
];

const needThisIf = [
  "Your social media is inconsistent or has gone quiet.",
  "You never seem to have time to plan or create content.",
  "Your feed doesn't reflect how good your business actually is.",
  "You're posting, but it doesn't feel strategic or on-brand.",
  "You want to grow on Instagram without living on your phone.",
];

export default function SocialMediaPage() {
  return (
    <>
      <JsonLd
        type="service"
        serviceName="Social Media Support"
        serviceDescription="Social media virtual assistant services including Instagram content planning, audits, management, reels and graphic design."
      />
      <Hero
        compact
        eyebrow="Social Media Support"
        title="Social Media Management That Saves You Hours Every Week"
        subtitle="Creativa VA helps you show up consistently on Instagram and beyond — with content planning, creative design and full social media management for small businesses."
        secondaryCta={{ label: "Get Support Today", href: "/contact" }}
      />

      <Section>
        <SectionHeader
          align="left"
          title="Grow Your Brand Without Living on Social Media"
          description="As your social media virtual assistant, we handle strategy, creation and publishing so your online presence stays active, polished and aligned with your business goals."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-charcoal/80 leading-relaxed">
            <p>
              Strong social media does not happen by accident. It needs a clear plan,
              on-brand visuals and regular posting — which is hard when you are busy
              running a company. Creativa VA takes that pressure off with structured
              Instagram content planning and hands-on support.
            </p>
            <p>
              We start with what matters: your audience, your message and what is
              working now. An Instagram page audit helps spot quick wins, then we build
              a content strategy that feels authentic — not copy-paste generic.
            </p>
            <h2 className="font-display text-2xl font-semibold text-charcoal">
              What is included
            </h2>
            <p>
              From reels and carousels to stories and link-in-bio pages, we create
              content that looks professional and drives engagement. Video editing for
              social media and Canva graphic design support keep your feed cohesive
              without you learning ten new tools. Need admin help too? Take a look at{" "}
              <Link href="/services/virtual-assistant" className="font-bold text-rose-700 hover:text-rose-600">
                virtual assistant support
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
          title="Ready for a Consistent, Professional Social Presence?"
          description="Book a free discovery call and tell us about your brand. We will outline how social media support could work for you."
        />
      </Section>
    </>
  );
}
