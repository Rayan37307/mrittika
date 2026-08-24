import Link from "next/link";
import { products } from "@/data/products";
import ProductCarousel from "./ProductCarousel";

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
            className="inline-flex items-center gap-2 rounded-full bg-sage hover:bg-sage-dark transition-colors text-cream px-6 py-3 text-sm font-medium tracking-wide"
          >
            View all products
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ProductCarousel products={featured} />
      </div>
    </section>
  );
}
