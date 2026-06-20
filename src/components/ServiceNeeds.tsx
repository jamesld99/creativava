type ServiceNeedsProps = {
  heading?: string;
  intro?: string;
  items: string[];
};

export function ServiceNeeds({
  heading = "You may need this if…",
  intro,
  items,
}: ServiceNeedsProps) {
  return (
    <div className="rounded-3xl border-2 border-rose-200 bg-gradient-to-br from-cream-100 to-rose-50 p-8 shadow-md md:p-10">
      <h2 className="font-display text-2xl font-semibold text-charcoal">{heading}</h2>
      {intro && <p className="mt-3 max-w-2xl text-charcoal/75">{intro}</p>}
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-charcoal/80">
            <span
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white"
              aria-hidden
            >
              ✓
            </span>
            <span className="text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
