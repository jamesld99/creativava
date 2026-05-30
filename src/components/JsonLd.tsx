import { faqItems } from "@/lib/faq";
import { siteConfig, socialLinks } from "@/lib/site";

type JsonLdProps = {
  type?: "home" | "faq" | "service";
  serviceName?: string;
  serviceDescription?: string;
};

export function JsonLd({
  type = "home",
  serviceName,
  serviceDescription,
}: JsonLdProps) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+44${siteConfig.phone.replace(/^0/, "")}`,
    email: siteConfig.email,
    areaServed: "GB",
    serviceType: [
      "Virtual Assistant Services",
      "Social Media Management",
      "Website Design",
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "CEOs, founders, small business owners, coaches and entrepreneurs",
    },
    sameAs: socialLinks.map((link) => link.href),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-GB",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const service =
    serviceName && serviceDescription
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: serviceName,
          description: serviceDescription,
          provider: {
            "@type": "ProfessionalService",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          areaServed: "GB",
        }
      : null;

  const scripts: Record<string, unknown>[] = [organization, website];
  if (type === "faq") scripts.push(faqPage);
  if (type === "service" && service) scripts.push(service);

  return (
    <>
      {scripts.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
}
