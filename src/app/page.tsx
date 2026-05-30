import Link from "next/link";
import { CtaBanner } from "@/components/CtaBanner";
import { ContactSection } from "@/components/ContactSection";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { faqItems } from "@/lib/faq";
import { tools } from "@/lib/site";

const audiences = [
  { text: "CEOs and founders who need reliable support behind the scenes", color: "from-lilac-100 to-lilac-50 border-lilac-200" },
  { text: "Small business owners juggling admin, content and client work", color: "from-blush-50 to-blush-100/80 border-blush-200" },
  { text: "Coaches and consultants growing their online presence", color: "from-coral-50 to-coral-100/60 border-coral-200" },
  { text: "Entrepreneurs who want organised systems without hiring full-time staff", color: "from-mint-100/80 to-lilac-50 border-mint-300/50" },
  { text: "Growing companies that need flexible virtual assistant UK support", color: "from-lilac-50 to-blush-50 border-lilac-200" },
];

const whyChoose = [
  { title: "Save real time every week", text: "Offload admin, inbox and content tasks so you can focus on clients, strategy and growth.", accent: "bg-lilac-500" },
  { title: "Stay organised and on brand", text: "From diary management to Canva graphic design support — everything feels calm, clear and consistent.", accent: "bg-blush-400" },
  { title: "Grow online with confidence", text: "Social media management, video editing for social media and website design for small businesses — handled with care.", accent: "bg-coral-400" },
  { title: "Warm, professional partnership", text: "No corporate jargon. Just friendly, capable support from a virtual assistant for business owners who gets it.", accent: "bg-mint-500" },
];

const toolColors = [
  "bg-lilac-200 text-lilac-800",
  "bg-blush-200 text-blush-500",
  "bg-coral-100 text-coral-500",
  "bg-mint-100 text-mint-500",
  "bg-lilac-300/60 text-lilac-800",
  "bg-blush-100 text-blush-500",
  "bg-coral-200 text-coral-500",
  "bg-lilac-100 text-lilac-700",
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Creative Virtual Assistant Support for Busy CEOs and Business Owners"
        subtitle="Creativa VA helps business owners save time, stay organised and grow online through virtual assistant support, social media management, content creation and website design."
      />

      <Section id="who-we-help" variant="warm">
        <SectionHeader
          eyebrow="Who we help"
          accent="about"
          title="Support for Leaders Who Are Done Doing Everything Alone"
          description="Creativa VA is a social media virtual assistant and virtual assistant for CEOs, founders and business owners who want dependable help without the overhead of a full in-house team."
        />
        <ul className="grid gap-4 sm:grid-cols-2">
          {audiences.map((item, i) => (
            <li
              key={item.text}
              className={`flex items-start gap-3 rounded-2xl border-2 bg-gradient-to-br p-5 shadow-md transition-transform hover:-translate-y-0.5 ${item.color}`}
            >
              <span
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-bold text-lilac-700 shadow-sm"
                aria-hidden
              >
                {i + 1}
              </span>
              <span className="text-sm font-medium leading-relaxed text-slate-700">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="services" variant="gradient">
        <SectionHeader
          eyebrow="Services"
          accent="services"
          title="Everything You Need to Stay Organised and Visible Online"
          description="Three flexible support areas — social media, virtual assistant tasks and website design — tailored for busy business owners."
        />
        <div className="grid gap-8 md:grid-cols-3">
          <ServiceCard
            icon="social"
            title="Social Media Support"
            description="Instagram content planning, audits, reels and full social media management for small businesses."
            href="/services/social-media"
            items={[
              "Content planning and strategy",
              "Instagram page audits",
              "Reels, carousels and stories",
              "Canva graphic design support",
            ]}
          />
          <ServiceCard
            icon="va"
            title="Virtual Assistant Support"
            description="Reliable admin support for business owners — email, diary, documents, research and invoicing."
            href="/services/virtual-assistant"
            items={[
              "Email and diary management",
              "Data entry and documents",
              "Research and organisation",
              "Invoice creation and chasing",
            ]}
          />
          <ServiceCard
            icon="web"
            title="Website Design"
            description="Simple, clean, modern websites for small businesses and personal brands, plus updates and support."
            href="/services/website-design"
            items={[
              "Website design and build",
              "Personal brand websites",
              "Updates and maintenance",
              "Clear, conversion-focused layouts",
            ]}
          />
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="secondary">
            View All Services
          </Button>
        </div>
      </Section>

      <Section id="why-choose" variant="purple">
        <SectionHeader
          eyebrow="Why Creativa VA"
          title="Why Choose Creativa VA?"
          description="Modern, creative support that feels like an extension of your team — organised, trustworthy and focused on your results."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {whyChoose.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border-2 border-white/80 bg-white/90 p-7 shadow-lg backdrop-blur-sm"
            >
              <span className={`mb-4 inline-block h-1.5 w-12 rounded-full ${item.accent}`} aria-hidden />
              <h3 className="font-display text-lg font-semibold text-violet-deep">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link
            href="/why-work-with-us"
            className="text-sm font-bold text-lilac-700 hover:text-blush-500"
          >
            Read more about why work with Creativa VA →
          </Link>
        </p>
      </Section>

      <Section id="tools">
        <SectionHeader
          eyebrow="Tools & platforms"
          accent="tools"
          title="We Work With the Tools You Already Use"
          description="Seamless support across the platforms that keep your business running and your brand looking polished."
        />
        <ul className="flex flex-wrap justify-center gap-3">
          {tools.map((tool, i) => (
            <li
              key={tool}
              className={`rounded-full px-5 py-2.5 text-sm font-bold shadow-sm ${toolColors[i % toolColors.length]}`}
            >
              {tool}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="faq" variant="muted">
        <SectionHeader
          eyebrow="FAQ"
          accent="faq"
          title="Frequently Asked Questions"
          description="Clear answers about our virtual assistant UK services, social media support and how to get started."
        />
        <FAQ items={faqItems} limit={5} />
        <p className="mt-8 text-center">
          <Link href="/faq" className="text-sm font-bold text-lilac-700 hover:text-blush-500">
            View all FAQs →
          </Link>
        </p>
      </Section>

      <Section>
        <CtaBanner
          title="Let's Grow Your Business — With the Right Support Behind You"
          description="Book a free discovery call and find out how Creativa VA can take tasks off your plate and help your brand shine online."
          secondaryLabel="Get Support Today"
          secondaryHref="/contact"
        />
      </Section>

      <ContactSection />
    </>
  );
}
