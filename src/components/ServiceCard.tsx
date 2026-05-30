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
    border: "border-blush-200",
    bg: "bg-gradient-to-br from-blush-50 via-white to-lilac-50",
    iconBg: "bg-gradient-to-br from-blush-300 to-blush-400 text-white",
    dot: "bg-blush-400",
    link: "text-blush-500 group-hover:text-blush-400",
    shadow: "shadow-blush-200/50 hover:shadow-blush-300/60",
    emoji: "📱",
  },
  va: {
    border: "border-lilac-200",
    bg: "bg-gradient-to-br from-lilac-50 via-white to-mint-100/50",
    iconBg: "bg-gradient-to-br from-lilac-500 to-lilac-600 text-white",
    dot: "bg-lilac-500",
    link: "text-lilac-700 group-hover:text-lilac-600",
    shadow: "shadow-lilac-200/50 hover:shadow-lilac-400/50",
    emoji: "✨",
  },
  web: {
    border: "border-coral-200",
    bg: "bg-gradient-to-br from-coral-50 via-white to-blush-50",
    iconBg: "bg-gradient-to-br from-coral-400 to-coral-500 text-white",
    dot: "bg-coral-400",
    link: "text-coral-500 group-hover:text-coral-400",
    shadow: "shadow-coral-200/50 hover:shadow-coral-300/50",
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
      className={`group relative z-10 flex h-full cursor-pointer flex-col rounded-[1.75rem] border-2 ${t.border} ${t.bg} p-8 shadow-xl ${t.shadow} transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lilac-500 focus-visible:ring-offset-2`}
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
      <h3 className="font-display text-xl font-semibold text-violet-deep">{title}</h3>
      <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">
        {description}
      </p>
      <ul className="mt-5 space-y-2">
        {items.slice(0, 4).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
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
