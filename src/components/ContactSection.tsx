import { siteConfig } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";
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
        <div className="rounded-[1.75rem] border-2 border-lilac-200 bg-gradient-to-br from-lilac-100 via-white to-blush-50 p-8 shadow-xl shadow-lilac-200/40">
          <h3 className="font-display text-xl font-semibold text-violet-deep">
            Get in touch
          </h3>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Whether you need a social media virtual assistant, admin support or a
            new website, Creativa VA is here to help you save time and stay organised.
          </p>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-sm font-bold uppercase tracking-wider text-lilac-600">
                Phone
              </dt>
              <dd className="mt-1">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-xl font-bold text-violet-deep hover:text-lilac-600"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-wider text-blush-500">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-lg font-bold text-lilac-700 hover:text-lilac-600"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold uppercase tracking-wider text-coral-500">
                Social
              </dt>
              <dd className="mt-3">
                <SocialLinks size="md" />
              </dd>
            </div>
          </dl>
          <p className="mt-8 rounded-2xl border border-blush-200 bg-blush-50 p-5 text-sm text-slate-700">
            <strong className="text-violet-deep">Free discovery call:</strong> Share where
            you are stuck, what you want to offload, and how you would like your online
            presence to look. We will suggest practical support that fits your business.
          </p>
        </div>
        <div className="rounded-[1.75rem] border-2 border-blush-100 bg-white p-8 shadow-xl shadow-blush-200/30">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
