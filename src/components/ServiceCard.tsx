import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  items: string[];
  icon: "social" | "va" | "web";
};

const themes = {
  social: {
    border: "border-rose-200",
    bg: "bg-gradient-to-br from-rose-50 via-cream-50 to-cream-100",
    iconBg: "bg-gradient-to-br from-rose-300 to-rose-400 text-white",
    dot: "bg-rose-400",
    link: "text-rose-600 group-hover:text-rose-700",
    shadow: "shadow-rose-200/50 hover:shadow-rose-300/50",
    emoji: "📱",
  },
  va: {
    border: "border-rose-300/60",
    bg: "bg-gradient-to-br from-cream-100 via-cream-50 to-rose-50",
    iconBg: "bg-gradient-to-br from-rose-500 to-rose-600 text-white",
    dot: "bg-rose-500",
    link: "text-rose-700 group-hover:text-rose-800",
    shadow: "shadow-rose-200/50 hover:shadow-rose-400/40",
    emoji: "✨",
  },
  web: {
    border: "border-rose-200",
    bg: "bg-gradient-to-br from-cream-50 via-rose-50 to-rose-100",
    iconBg: "bg-gradient-to-br from-rose-600 to-rose-700 text-white",
    dot: "bg-rose-600",
    link: "text-rose-600 group-hover:text-rose-700",
    shadow: "shadow-rose-200/50 hover:shadow-rose-300/50",
    emoji: "🌐",
  },
};

const icons = {
  social: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7 8h10M7 12h6m-6 4h10M5 6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6z"
    />
  ),
  va: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
    />
  ),
  web: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  ),
};

export function ServiceCard({
  title,
  description,
  href,
  items,
  icon,
}: ServiceCardProps) {
  const t = themes[icon];

  return (
    <Link
      href={href}
      className={`group relative z-10 flex h-full cursor-pointer flex-col rounded-[1.75rem] border-2 ${t.border} ${t.bg} p-8 shadow-xl ${t.shadow} transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-md ${t.iconBg}`}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            {icons[icon]}
          </svg>
        </div>
        <span className="text-2xl" aria-hidden>
          {t.emoji}
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold text-charcoal">{title}</h3>
      <p className="mt-3 flex-grow text-sm leading-relaxed text-charcoal/75">
        {description}
      </p>
      <ul className="mt-5 space-y-2">
        {items.slice(0, 4).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-charcoal/80">
            <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${t.dot}`} aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <span className={`mt-6 inline-flex items-center gap-1 text-sm font-bold ${t.link}`}>
        Learn more
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
