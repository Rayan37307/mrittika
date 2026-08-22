"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import Stars from "./Stars";

const badgeStyles: Record<NonNullable<Product["badge"]>, string> = {
  SALE: "bg-terracotta text-cream",
  NEW: "bg-ink text-cream",
  HOT: "bg-ink text-cream",
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, openCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, 1);
    openCart();
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="group">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-cream-dark">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {product.badge && (
            <span
              className={`absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wide px-3 py-1.5 ${
                badgeStyles[product.badge]
              }`}
            >
              {product.badge}
            </span>
          )}

          <div className="absolute top-3 right-3 flex flex-col gap-1 rounded-md bg-cream p-1 shadow-sm opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
            <button
              type="button"
              aria-label="Compare"
              onClick={(e) => e.preventDefault()}
              className="h-8 w-8 rounded flex items-center justify-center text-ink hover:bg-terracotta hover:text-cream transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M4 8h13m0 0-3-3m3 3-3 3M20 16H7m0 0 3 3m-3-3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Quick view"
              onClick={(e) => e.preventDefault()}
              className="h-8 w-8 rounded flex items-center justify-center text-ink hover:bg-terracotta hover:text-cream transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="m20 20-4.3-4.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Add to wishlist"
              onClick={(e) => e.preventDefault()}
              className="h-8 w-8 rounded flex items-center justify-center text-ink hover:bg-terracotta hover:text-cream transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M12 20.2s-7.2-4.4-9.4-8.9C1.2 8 2.6 4.7 5.9 4a4.9 4.9 0 0 1 6.1 2.4A4.9 4.9 0 0 1 18.1 4c3.3.7 4.7 4 3.3 7.3-2.2 4.5-9.4 8.9-9.4 8.9Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <button
            type="button"
            aria-label={added ? `${product.name} added to cart` : `Add ${product.name} to cart`}
            onClick={(e) => {
              e.preventDefault();
              handleAdd();
            }}
            className="absolute inset-x-0 bottom-0 bg-terracotta hover:bg-terracotta-dark text-cream text-[13px] font-medium uppercase tracking-wide py-3 text-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
          >
            {added ? "Added ✓" : "Add To Cart"}
          </button>
        </div>

        <div className="mt-4 text-center">
          <h3 className="text-[15px] text-ink group-hover:text-terracotta transition-colors">
            {product.name}
          </h3>
          <Stars rating={product.rating} className="justify-center my-1.5" />
          <div className="flex items-baseline justify-center gap-2">
            {product.oldPrice && (
              <span className="text-sm text-ink-soft/60 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
            <span className="text-[15px] font-medium text-terracotta">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
