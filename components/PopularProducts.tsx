import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function PopularProducts() {
  const featured = products.slice(0, 4);

  return (
    <section id="shop" className="py-16 sm:py-20">
      <div className="container-px">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-terracotta mb-2">
              The collection
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-ink">
              Popular of the Week
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta hover:bg-terracotta-dark transition-colors text-cream px-6 py-3 text-sm font-medium tracking-wide"
          >
            View all products
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-12">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
