import Link from "next/link";
import {
  MugIcon,
  PotIcon,
  PlateIcon,
  DecorIcon,
  BowlIcon,
} from "./CategoryIcons";

const categories = [
  { label: "Mugs", Icon: MugIcon },
  { label: "Pots", Icon: PotIcon },
  { label: "Plates", Icon: PlateIcon },
  { label: "Decor", Icon: DecorIcon },
  { label: "Bowls", Icon: BowlIcon },
];

export default function CategoryNav() {
  return (
    <section className="border-b hairline bg-cream">
      <div className="container-px">
        <div className="grid grid-cols-3 sm:grid-cols-5 divide-x hairline">
          {categories.map(({ label, Icon }) => (
            <Link
              key={label}
              href={`/shop?category=${encodeURIComponent(label)}`}
              className="group flex items-center justify-center gap-3 py-6 px-3 hover:bg-cream-dark/50 transition-colors"
            >
              <Icon className="h-7 w-7 text-terracotta shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base text-ink-soft group-hover:text-ink">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
