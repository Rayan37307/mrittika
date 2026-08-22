type MarqueeProps = {
  items: string[];
  tone?: "ink" | "sage" | "cream";
};

const toneStyles: Record<NonNullable<MarqueeProps["tone"]>, string> = {
  ink: "bg-ink text-cream",
  sage: "bg-sage text-cream",
  cream: "bg-cream-dark text-ink",
};

export default function Marquee({ items, tone = "ink" }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className={`overflow-hidden ${toneStyles[tone]}`}>
      <div className="marquee-track font-display flex items-center whitespace-nowrap py-3 text-xs sm:text-4xl tracking-wide">
        {track.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="px-6">{item}</span>
            <span aria-hidden="true" className="text-terracotta-light">
              +
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
