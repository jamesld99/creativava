import type { Metadata } from "next";
import { siteConfig } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({
  title,
  description,
  path = "",
}: PageMeta): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? `${siteConfig.name} | ${title}`
      : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    keywords: [
      "virtual assistant UK",
      "social media virtual assistant",
      "virtual assistant for CEOs",
      "virtual assistant for business owners",
      "social media management for small businesses",
      "Instagram content planning",
      "admin support for business owners",
      "website design for small businesses",
    ],
  };
}
