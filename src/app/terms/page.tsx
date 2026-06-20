import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";
import { contactInfo } from "@/lib/contact";
import { BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description:
    "The terms that apply when you use the Creativa VA website and enquire about or book virtual assistant, social media and website services.",
  path: "/terms",
});

export default function TermsPage() {
  const updated = "June 2026";

  return (
    <>
      <Hero
        compact
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="These terms explain how this website may be used and the basis on which Creativa VA provides its services."
        primaryCta={{ label: "Book a Free Discovery Call", href: BOOKING_URL }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-charcoal/80 leading-relaxed">
          <p className="text-sm text-charcoal/60">Last updated: {updated}</p>

          <p>
            These terms of service (&ldquo;Terms&rdquo;) apply to your use of the Creativa
            VA website and to any enquiry you make about our services. By using this
            website or contacting us, you agree to these Terms.
          </p>

          <h2 className="font-display text-2xl font-semibold text-charcoal">
            About us
          </h2>
          <p>
            Creativa VA is a UK-based virtual assistant and digital support business
            offering virtual assistant support, social media management and website design
            for business owners.
          </p>

          <h2 className="font-display text-2xl font-semibold text-charcoal">
            Using this website
          </h2>
          <p>
            The content on this website is provided for general information about our
            services. While we aim to keep it accurate and up to date, we make no
            guarantees that it is complete or error-free, and it does not form part of any
            contract until a separate agreement is confirmed.
          </p>

          <h2 className="font-display text-2xl font-semibold text-charcoal">
            Services and quotes
          </h2>
          <p>
            Any prices, packages or scope discussed on this website or during a discovery
            call are indicative. The specific services, deliverables, fees and timescales
            for your work will be agreed separately in writing before work begins.
            Packages are available depending on the support needed.
          </p>

          <h2 className="font-display text-2xl font-semibold text-charcoal">
            Payment
          </h2>
          <p>
            Payment terms, including any deposits, will be set out in your individual
            agreement or invoice. Invoices are payable by the date stated unless otherwise
            agreed.
          </p>

          <h2 className="font-display text-2xl font-semibold text-charcoal">
            Intellectual property
          </h2>
          <p>
            The content, branding and design of this website belong to Creativa VA and may
            not be copied or reused without permission. Ownership of work created for
            clients is dealt with in your individual service agreement.
          </p>

          <h2 className="font-display text-2xl font-semibold text-charcoal">
            Liability
          </h2>
          <p>
            Nothing in these Terms limits our liability where it would be unlawful to do
            so. To the extent permitted by law, Creativa VA is not liable for any indirect
            or consequential loss arising from use of this website.
          </p>

          <h2 className="font-display text-2xl font-semibold text-charcoal">
            Governing law
          </h2>
          <p>
            These Terms are governed by the laws of England and Wales, and any disputes
            will be subject to the courts of England and Wales.
          </p>

          <h2 className="font-display text-2xl font-semibold text-charcoal">
            Contact us
          </h2>
          <p>
            Questions about these Terms? Email{" "}
            <a
              href={`mailto:${contactInfo.email}`}
              className="font-bold text-rose-700 hover:text-rose-600"
            >
              {contactInfo.email}
            </a>{" "}
            or visit our{" "}
            <Link href="/contact" className="font-bold text-rose-700 hover:text-rose-600">
              contact page
            </Link>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
