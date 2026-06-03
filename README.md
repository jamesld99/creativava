# Creativa VA Website

A modern, responsive, SEO-optimised Next.js website for **Creativa VA** — virtual assistant, social media and website design support for CEOs, founders and business owners.

## Features

- Next.js 15 App Router with TypeScript
- Purple/lilac organic design with rounded cards and soft gradients
- Fully responsive layout (mobile, tablet, desktop)
- SEO metadata, canonical URLs, sitemap and robots.txt
- JSON-LD structured data (Organisation, WebSite, FAQ, Services)
- Semantic HTML with clear H1–H3 hierarchy
- FAQ section for search and AI discovery
- Contact form (opens email client with pre-filled message)
- Clickable phone and email links

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, audience, services, why us, tools, FAQ, contact |
| `/about` | About Creativa VA |
| `/services` | Services overview |
| `/services/social-media` | Social media support |
| `/services/virtual-assistant` | Virtual assistant support |
| `/services/website-design` | Website design |
| `/why-work-with-us` | Why work with Creativa VA |
| `/faq` | Full FAQ |
| `/contact` | Contact & discovery call form |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Configuration

Update the production URL in `src/lib/site.ts` (`siteConfig.url`) before deploying.

### Discovery call booking

Discovery call buttons link to `BOOKING_URL` in `src/lib/booking.ts` (a Google Calendar page). Update it there, or add this Vercel environment variable:

```
NEXT_PUBLIC_BOOKING_URL=https://calendar.google.com/calendar/embed?src=...
```

## Contact (site content)

- **Phone:** [07949 282054](tel:07949282054)
- **Email:** [liset@creativalilo.com](mailto:liset@creativalilo.com)
