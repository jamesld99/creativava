import type { Metadata } from "next";
import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ServiceNeeds } from "@/components/ServiceNeeds";
import { Section, SectionHeader } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Virtual Assistant Support for Business Owners",
  description:
    "Reliable virtual assistant support for busy business owners — email and diary management, data entry, research, documents and invoicing handled by Creativa VA.",
  path: "/services/virtual-assistant",
});

const services = [
  "Data entry",
  "Document creation",
  "Email management",
  "Diary management",
  "Research",
  "Creating, sending and chasing invoices",
];

const needThisIf = [
  "You're losing hours every week to admin and email.",
  "Your inbox and diary feel constantly out of control.",
  "Important tasks like invoicing keep slipping down the list.",
  "You need flexible support without hiring an employee.",
  "You want to focus on clients and growth, not paperwork.",
];

export default function VirtualAssistantPage() {
  return (
    <>
      <JsonLd
        type="service"
        serviceName="Virtual Assistant Support"
        serviceDescription="Virtual assistant for CEOs and business owners including admin, email, diary management, research and invoicing."
      />
      <Hero
        compact
        eyebrow="Virtual Assistant Support"
        title="Virtual Assistant Support That Keeps Your Business Running Smoothly"
        subtitle="Offload admin, inbox and organisation tasks to a trusted virtual assistant for CEOs and founders — so you can lead, sell and deliver without the backlog."
        secondaryCta={{ label: "Get Support Today", href: "/contact" }}
      />

      <Section>
        <SectionHeader
          align="left"
          title="Admin Support for Business Owners Who Need Their Time Back"
          description="Creativa VA provides dependable virtual assistant UK help — calm, organised and proactive — so nothing important slips through the cracks."
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6 text-charcoal/80 leading-relaxed">
            <p>
              When your inbox, calendar and paperwork pile up, growth slows down. Our
              virtual assistant for business owners service keeps your operations tidy:
              emails answered, meetings scheduled, documents prepared and invoices tracked.
            </p>
            <p>
              We work in Excel, Microsoft Office and Google Workspace — the tools you
              already use — so handover is simple and collaboration feels seamless.
            </p>
            <h2 className="font-display text-2xl font-semibold text-charcoal">
              Typical tasks we handle
            </h2>
            <p>
              From research and data entry to creating, sending and chasing invoices,
              we take on the tasks that drain your energy but rarely need your personal
              expertise. You stay focused on high-value work; we keep the rest moving.
            </p>
            <h3 className="font-display text-xl font-semibold text-charcoal">
              Email and diary management
            </h3>
            <p>
              A clear inbox and a well-managed diary mean fewer missed opportunities and
              less mental clutter. We help you stay responsive and organised without
              living in your email app. Want a more visible brand too? Explore{" "}
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
          title="Imagine Finishing the Week Without a Mounting Admin List"
          description="Book a free discovery call and tell us what you would love to hand over first."
        />
      </Section>
    </>
  );
}
