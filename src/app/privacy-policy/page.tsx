import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/ui/Section";
import { createMetadata } from "@/lib/seo";
import { contactInfo } from "@/lib/contact";
import { BOOKING_URL } from "@/lib/booking";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Creativa VA collects, uses and protects the personal information you share through our contact form and enquiries.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const updated = "June 2026";

  return (
    <>
      <Hero
        compact
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Your privacy matters. This policy explains what information Creativa VA collects when you get in touch, and how it is used and protected."
        primaryCta={{ label: "Book a Free Discovery Call", href: BOOKING_URL }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-charcoal/80 leading-relaxed">
          <p className="text-sm text-charcoal/60">Last updated: {updated}</p>

          <p>
            Creativa VA (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is
            committed to protecting your privacy. This policy explains how we handle the
            personal information you share with us when you use this website or contact us
            about our services. We comply with UK data protection law, including the UK
            GDPR and the Data Protection Act 2018.
          </p>

          <h2 className="font-display text-2xl font-semibold text-charcoal">
            What information we collect
          </h2>
          <p>
            When you complete our contact form, book a discovery call or email us
            directly, we may collect your name, email address, phone number and any
            details you choose to include in your message. We only collect the
            information you provide to us voluntarily.
          </p>

          <h2 className="font-display text-2xl font-semibold text-charcoal">
            How we use your information
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>To respond to your enquiry and arrange a discovery call.</li>
            <li>To provide and manage the services you ask us about.</li>
            <li>To keep records of our communication with you.</li>
          </ul>
          <p>
            We will never sell your information, and we will only use it for the purposes
            described above. The lawful basis for processing your enquiry is our
            legitimate interest in responding to potential and existing clients, and
            taking steps to enter into a contract with you.
          </p>

          <h2 className="font-display text-2xl font-semibold text-charcoal">
            How we store and protect your information
          </h2>
          <p>
            Your information is stored securely and kept only for as long as necessary to
            deal with your enquiry or to meet our legal and business obligations. We take
            reasonable technical and organisational measures to keep it safe.
          </p>

          <h2 className="font-display text-2xl font-semibold text-charcoal">
            Sharing your information
          </h2>
          <p>
            We do not share your personal information with third parties except where
            necessary to deliver our services (for example, trusted tools used to send
            email or manage bookings) or where we are required to do so by law.
          </p>

          <h2 className="font-display text-2xl font-semibold text-charcoal">
            Your rights
          </h2>
          <p>
            Under UK data protection law you have the right to access, correct or request
            deletion of your personal information, and to object to or restrict how it is
            used. To exercise any of these rights, please contact us using the details
            below. You also have the right to complain to the Information Commissioner&apos;s
            Office (ICO) at{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-rose-700 hover:text-rose-600"
            >
              ico.org.uk
            </a>
            .
          </p>

          <h2 className="font-display text-2xl font-semibold text-charcoal">
            Contact us
          </h2>
          <p>
            If you have any questions about this policy or how we handle your information,
            please email{" "}
            <a
              href={`mailto:${contactInfo.email}`}
              className="font-bold text-rose-700 hover:text-rose-600"
            >
              {contactInfo.email}
            </a>{" "}
            or call{" "}
            <a
              href={`tel:${contactInfo.phone}`}
              className="font-bold text-rose-700 hover:text-rose-600"
            >
              {contactInfo.phoneDisplay}
            </a>
            . You can also use our{" "}
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
