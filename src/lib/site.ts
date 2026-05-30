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
} as const;

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

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/why-work-with-us", label: "Why Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceLinks = [
  {
    href: "/services/social-media",
    title: "Social Media Support",
    short: "Content, strategy and full social management",
  },
  {
    href: "/services/virtual-assistant",
    title: "Virtual Assistant Support",
    short: "Admin, email, diary and business organisation",
  },
  {
    href: "/services/website-design",
    title: "Website Design",
    short: "Modern websites for small businesses and brands",
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
