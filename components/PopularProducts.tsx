import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

export default function PopularProducts() {
  return (
    <section id="shop" className="py-16 sm:py-20">
      <div className="container-px">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-terracotta mb-2">
              The collection
            </p>
            <h2 className="font-display text-3xl sm:text-4xl text-ink">
              Popular of the Week
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:inline text-sm text-ink-soft hover:text-terracotta transition-colors border-b border-transparent hover:border-terracotta pb-0.5"
          >
            View all products
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
