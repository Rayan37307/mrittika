import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

const tiles = [
  {
    label: "Bowls",
    category: "Bowls",
    image: "/images/gallery-2.jpg",
    alt: "Hands shaping a bowl on the pottery wheel",
  },
  {
    label: "Decor",
    category: "Decor",
    image: "/images/product-candle.jpg",
    alt: "Candle holder and ceramics styled on a table",
  },
];

export default function CategorySplit() {
  return (
    <section className="grid sm:grid-cols-2">
      {tiles.map((tile) => {
        const count = products.filter((p) => p.category === tile.category).length;
        return (
          <Link
            key={tile.label}
            href={`/shop?category=${encodeURIComponent(tile.category)}`}
            className="group relative h-[320px] sm:h-[420px] overflow-hidden block"
          >
            <Image
              src={tile.image}
              alt={tile.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-10 text-cream">
              <h2 className="font-display text-3xl sm:text-4xl mb-1">
                {tile.label}
              </h2>
              <p className="text-cream/80 text-sm">
                {count} {count === 1 ? "piece" : "pieces"}
              </p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}
