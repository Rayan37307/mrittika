"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import Stars from "./Stars";

const badgeStyles: Record<NonNullable<Product["badge"]>, string> = {
  SALE: "bg-terracotta text-cream",
  NEW: "bg-sage text-cream",
  HOT: "bg-ink text-cream",
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, 1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <div className="group">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-square rounded-md overflow-hidden border border-ink/10 bg-cream-dark/40">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.badge && (
            <span
              className={`absolute top-3 left-3 text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-sm ${
                badgeStyles[product.badge]
              }`}
            >
              {product.badge}
            </span>
          )}
          <button
            type="button"
            aria-label={added ? `${product.name} added to cart` : `Add ${product.name} to cart`}
            onClick={(e) => {
              e.preventDefault();
              handleAdd();
            }}
            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-cream/90 flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
          >
            {added ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-terracotta" fill="none">
                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M6 8h12l-1.2 10.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 11v4M10 13h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
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
