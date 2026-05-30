import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/services",
  "/services/social-media",
  "/services/virtual-assistant",
  "/services/website-design",
  "/why-work-with-us",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}
