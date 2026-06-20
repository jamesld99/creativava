import { BOOKING_URL } from "./booking";
import { contactInfo } from "./contact";

export const siteConfig = {
  name: "Creativa VA",
  tagline: "Creative Virtual Assistant Support",
  description:
    "Creativa VA helps CEOs, founders and business owners save time through virtual assistant support, social media management, content creation and website design across the UK.",
  url: "https://www.creativalilo.com",
  phone: contactInfo.phone,
  phoneDisplay: contactInfo.phoneDisplay,
  email: contactInfo.email,
  locale: "en_GB",
  bookingUrl: BOOKING_URL,
};

export { BOOKING_URL } from "./booking";
export { contactInfo } from "./contact";
export { navLinks, serviceLinks } from "./navigation";

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/creativa-va/",
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
