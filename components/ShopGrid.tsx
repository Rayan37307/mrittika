"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products, categories } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ShopGrid() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const [active, setActive] = useState<string>(
    initialCategory && (categories as readonly string[]).includes(initialCategory)
      ? initialCategory
      : "All"
  );

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <section className="py-12 sm:py-16">
      <div className="container-px">
        <div className="text-xs text-ink-soft/70 mb-4">
          <Link href="/" className="hover:text-terracotta transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">Shop</span>
        </div>

        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-terracotta mb-2">
              The collection
            </p>
            <h1 className="font-display text-3xl sm:text-4xl text-ink">
              Shop All Pottery
            </h1>
          </div>
          <p className="text-sm text-ink-soft">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                active === cat
                  ? "bg-terracotta border-terracotta text-cream"
                  : "border-ink/15 text-ink-soft hover:border-terracotta hover:text-terracotta"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-12">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-ink-soft py-16 text-center">
            No pieces in this category yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
