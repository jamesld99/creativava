import { BOOKING_URL } from "./booking";

export const siteConfig = {
  name: "Creativa VA",
  tagline: "Creative Virtual Assistant Support",
  description:
    "Creativa VA helps CEOs, founders and business owners save time through virtual assistant support, social media management, content creation and website design across the UK.",
  url: "https://www.creativava.com",
  phone: "07949282054",
  phoneDisplay: "07949 282054",
  email: "liset@creativalilo.com",
  locale: "en_GB",
  bookingUrl: BOOKING_URL,
};

export { BOOKING_URL } from "./booking";
export { contactInfo } from "./contact";
export { navLinks, serviceLinks } from "./navigation";

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/creativalilo/",
    icon: "linkedin" as const,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61572603183348",
    icon: "facebook" as const,
  },
] as const;

export const tools = [
  "Microsoft Excel",
  "Microsoft Office",
  "Google Workspace",
  "Canva",
  "Instagram",
  "CapCut",
  "Video editing tools",
  "Website building tools",
] as const;
