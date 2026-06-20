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
  const telephone = `+44${siteConfig.phone.replace(/^0/, "")}`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone,
    email: siteConfig.email,
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    serviceType: [
      "Virtual Assistant Services",
      "Social Media Management",
      "Website Design",
    ],
    founder: {
      "@type": "Person",
      name: "Liset",
      jobTitle: "Founder & Virtual Assistant",
      worksFor: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone,
      email: siteConfig.email,
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: ["English"],
    },
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

  // The root layout renders <JsonLd type="home" />, which emits the
  // Organization + WebSite blocks once per page. Page-level usages
  // (type="faq" / "service") only add their specific schema so these
  // global blocks are never duplicated.
  const scripts: Record<string, unknown>[] = [];
  if (type === "home") scripts.push(organization, website);
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
