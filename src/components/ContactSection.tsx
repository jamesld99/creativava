import { BOOKING_URL } from "@/lib/booking";
import { contactInfo } from "@/lib/contact";
import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";
import { Button } from "./ui/Button";
import { Section, SectionHeader } from "./ui/Section";

export function ContactSection({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <Section id="contact" variant="warm">
      {showHeader && (
        <SectionHeader
          eyebrow="Contact"
          accent="about"
          title="Let's Grow Your Business Together"
          description="Tell us what you need and book a free discovery call. We will reply with clear next steps — no jargon, no pressure."
        />
      )}
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="rounded-[1.75rem] border-2 border-rose-200 bg-gradient-to-br from-cream-100 via-cream-50 to-rose-50 p-8 shadow-xl shadow-rose-200/40">
          <h3 className="font-display text-xl font-semibold text-charcoal">
            Get in touch
          </h3>
          <p className="mt-3 leading-relaxed text-charcoal/75">
            Whether you need a social media virtual assistant, admin support or a
            new website, Creativa VA is here to help you save time and stay organised.
          </p>
          <div className="mt-6">
            <Button href={BOOKING_URL}>Book a Free Discovery Call</Button>
            <p className="mt-2 text-xs text-charcoal/60">
              Opens our booking calendar in a new tab — pick a time that suits you.
            </p>
          </div>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-sm font-bold uppercase tracking-wider text-rose-600">
                Phone
              </dt>
              <dd className="mt-1">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-xl font-bold text-charcoal hover:text-rose-600"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-wider text-rose-500">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-lg font-bold text-rose-700 hover:text-rose-600"
                >
                  {contactInfo.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-wider text-rose-600">
                Social
              </dt>
              <dd className="mt-3">
                <SocialLinks size="md" />
              </dd>
            </div>
          </dl>
          <p className="mt-8 rounded-2xl border border-rose-200 bg-rose-50 p-5 text-sm text-charcoal/80">
            <strong className="text-charcoal">Free discovery call:</strong> Share where
            you are stuck, what you want to offload, and how you would like your online
            presence to look. We will suggest practical support that fits your business.
          </p>
        </div>
        <div className="rounded-[1.75rem] border-2 border-rose-100 bg-cream-50 p-8 shadow-xl shadow-rose-200/30">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
