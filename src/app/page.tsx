import Image from "next/image";
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
  { text: "CEOs and founders who need reliable support behind the scenes", color: "from-cream-100 to-cream-50 border-rose-200" },
  { text: "Small business owners juggling admin, content and client work", color: "from-rose-50 to-rose-100/80 border-rose-200" },
  { text: "Coaches and consultants growing their online presence", color: "from-rose-100/60 to-cream-100 border-rose-300" },
  { text: "Entrepreneurs who want organised systems without hiring full-time staff", color: "from-cream-200/80 to-rose-50 border-rose-200" },
  { text: "Growing companies that need flexible virtual assistant UK support", color: "from-cream-50 to-rose-50 border-rose-200" },
];

const whyChoose = [
  { title: "Save real time every week", text: "Offload admin, inbox and content tasks so you can focus on clients, strategy and growth.", accent: "bg-rose-500" },
  { title: "Stay organised and on brand", text: "From diary management to Canva graphic design support — everything feels calm, clear and consistent.", accent: "bg-rose-400" },
  { title: "Grow online with confidence", text: "Social media management, video editing for social media and website design for small businesses — handled with care.", accent: "bg-rose-600" },
  { title: "Warm, professional partnership", text: "No corporate jargon. Just friendly, capable support from a virtual assistant for business owners who gets it.", accent: "bg-rose-300" },
];

const trustSignals = [
  { icon: "🇬🇧", title: "Friendly, UK-based support", text: "Work with a UK-based virtual assistant who understands how small businesses here operate." },
  { icon: "💬", title: "Direct contact with Creativa VA", text: "You deal directly with Liset — no account managers, call centres or being passed around." },
  { icon: "🧩", title: "Flexible support", text: "Scale your support up or down as your needs change. No rigid contracts or wasted hours." },
  { icon: "🌿", title: "No long corporate process", text: "Getting started is simple. A quick call, a clear plan, and we get going — no red tape." },
  { icon: "📋", title: "Clear communication", text: "You always know what is being worked on, why it matters and what happens next." },
  { icon: "🤝", title: "Genuinely invested", text: "Your business matters to me. I treat your tasks with the same care as my own." },
];

const toolColors = [
  "bg-rose-200 text-charcoal",
  "bg-rose-100 text-rose-800",
  "bg-cream-200 text-charcoal",
  "bg-rose-300/70 text-charcoal",
  "bg-rose-200/80 text-rose-900",
  "bg-cream-100 text-rose-700",
  "bg-rose-100 text-rose-600",
  "bg-rose-50 text-charcoal border border-rose-200",
];

export default function HomePage() {
  return (
    <>
      <Hero
        title="Get Your Time Back with Friendly Virtual Assistant Support"
        subtitle="Creativa VA helps busy CEOs, founders and business owners save time, stay organised and grow online — with virtual assistant support, social media management and website design handled for you."
        microcopy="No pressure, just a friendly call to see what support would help."
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
                className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cream-50 text-sm font-bold text-rose-700 shadow-sm"
                aria-hidden
              >
                {i + 1}
              </span>
              <span className="text-sm font-medium leading-relaxed text-charcoal/80">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-charcoal/70">
          Not sure where to start?{" "}
          <Link href="/services" className="font-bold text-rose-700 hover:text-rose-600">
            Explore the services
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="font-bold text-rose-700 hover:text-rose-600">
            get in touch
          </Link>
          .
        </p>
      </Section>

      <Section id="meet-liset" variant="muted">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-rose-200 to-cream-200 blur-xl" aria-hidden />
            <div className="rounded-[2rem] border-2 border-rose-200/80 bg-cream-50 p-8 text-center shadow-xl">
              <Image
                src="/liset.png"
                alt="Liset, founder of Creativa VA"
                width={176}
                height={176}
                sizes="176px"
                className="mx-auto h-44 w-44 rounded-full object-cover shadow-lg ring-4 ring-rose-100"
              />
              <p className="mt-5 font-display text-xl font-semibold text-charcoal">Liset</p>
              <p className="text-sm font-medium text-rose-700">Founder, Creativa VA</p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {["Organised", "Reliable", "Creative"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <p className="eyebrow-pill mb-4 border border-rose-200/80 bg-cream-50/90 text-rose-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-rose-500" aria-hidden />
              Meet Liset
            </p>
            <h2 className="font-display text-3xl font-semibold text-charcoal md:text-4xl">
              The Person Behind Creativa VA
            </h2>
            <div className="mt-5 space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                Hi, I&apos;m Liset — the founder of Creativa VA. I started this business
                because I love bringing calm and order to busy people&apos;s days. There&apos;s
                nothing more satisfying than taking a messy inbox, a scattered diary or a
                quiet social media account and turning it into something organised and
                effortless.
              </p>
              <p>
                When you work with Creativa VA, you work directly with me. That means
                clear communication, dependable support and a genuine interest in helping
                your business run more smoothly — no call centres, no corporate process.
              </p>
            </div>
            <p className="mt-6">
              <Link
                href="/about"
                className="text-sm font-bold text-rose-700 hover:text-rose-600"
              >
                Read more about Liset and Creativa VA →
              </Link>
            </p>
          </div>
        </div>
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
              className="rounded-3xl border-2 border-rose-100/80 bg-cream-50/95 p-7 shadow-lg backdrop-blur-sm"
            >
              <span className={`mb-4 inline-block h-1.5 w-12 rounded-full ${item.accent}`} aria-hidden />
              <h3 className="font-display text-lg font-semibold text-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link
            href="/why-work-with-us"
            className="text-sm font-bold text-rose-700 hover:text-rose-600"
          >
            Read more about why you should work with Creativa VA →
          </Link>
        </p>
      </Section>

      <Section id="trust" variant="warm">
        <SectionHeader
          eyebrow="Why people trust us"
          title="Support That Feels Personal, Not Corporate"
          description="Working with Creativa VA means a real person who cares about getting it right — friendly, flexible and easy to reach."
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustSignals.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border-2 border-rose-200 bg-cream-50/95 p-6 shadow-md"
            >
              <span className="text-2xl" aria-hidden>{item.icon}</span>
              <div>
                <h3 className="font-display text-base font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-charcoal/75">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>

        {/*
        TESTIMONIALS — uncomment and fill in once real client reviews are available.
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl border-2 border-rose-200 bg-cream-50 p-6 shadow-md">
              <p className="text-charcoal/85 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-sm font-bold text-rose-700">
                {t.name}
                <span className="font-medium text-charcoal/60"> · {t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        */}
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
          <Link href="/faq" className="text-sm font-bold text-rose-700 hover:text-rose-600">
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
