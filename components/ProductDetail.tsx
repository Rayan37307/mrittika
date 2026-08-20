"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import Stars from "./Stars";

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  function handleAddToCart() {
    addItem(product, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  }

  function handleBuyNow() {
    addItem(product, qty);
    router.push("/checkout");
  }

  return (
    <div>
      {product.badge && (
        <span className="inline-block text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-sm bg-terracotta text-cream mb-4">
          {product.badge}
        </span>
      )}

      <p className="text-xs uppercase tracking-wide text-sage-dark mb-2">
        {product.category}
      </p>
      <h1 className="font-display text-4xl sm:text-5xl text-ink mb-3">
        {product.name}
      </h1>

      <div className="flex items-center gap-2 mb-3 text-sm text-sage-dark">
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Made to order — ships in 2–3 days
      </div>

      <div className="flex items-center gap-2 mb-5">
        <Stars rating={product.rating} />
        <span className="text-xs text-ink-soft">{product.rating.toFixed(1)} / 5</span>
      </div>

      <p className="text-ink-soft leading-relaxed mb-6 max-w-md">
        {product.description}
      </p>

      <div className="flex items-baseline gap-3 mb-7">
        {product.oldPrice && (
          <span className="text-lg text-ink-soft/60 line-through">
            ${product.oldPrice.toFixed(2)}
          </span>
        )}
        <span className="text-3xl font-medium text-terracotta">
          ${product.price.toFixed(2)}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-5">
        <div className="flex items-center border border-ink/15 rounded-full">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="h-11 w-11 flex items-center justify-center text-ink-soft hover:text-terracotta transition-colors"
          >
            −
          </button>
          <span className="w-8 text-center text-sm">{qty}</span>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQty((q) => q + 1)}
            className="h-11 w-11 flex items-center justify-center text-ink-soft hover:text-terracotta transition-colors"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="inline-flex items-center justify-center rounded-full bg-terracotta hover:bg-terracotta-dark transition-colors text-cream px-8 py-3.5 text-sm font-medium tracking-wide min-w-[160px]"
        >
          {added ? "Added to cart ✓" : "Add to Cart"}
        </button>

        <button
          type="button"
          onClick={handleBuyNow}
          className="inline-flex items-center justify-center rounded-full bg-ink hover:bg-ink/85 transition-colors text-cream px-8 py-3.5 text-sm font-medium tracking-wide"
        >
          Buy Now
        </button>
      </div>

      <div className="flex items-center gap-6 text-sm text-ink-soft">
        <button
          type="button"
          className="hover:text-terracotta transition-colors flex items-center gap-1.5"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
            <path d="M7 4v16l5-3.5L17 20V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          Compare
        </button>
        <button
          type="button"
          onClick={() => setWishlisted((w) => !w)}
          className="hover:text-terracotta transition-colors flex items-center gap-1.5"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill={wishlisted ? "currentColor" : "none"}>
            <path
              d="M12 20.5s-7.5-4.6-10-9.3C0.6 8 2 4.7 5.3 4c2.2-.5 4.3.6 5.5 2.4l1.2 1.8 1.2-1.8C14.4 4.6 16.5 3.5 18.7 4c3.3.7 4.7 4 3.3 7.2-2.5 4.7-10 9.3-10 9.3Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
          {wishlisted ? "Added to wishlist" : "Add to wishlist"}
        </button>
      </div>
    </div>
  );
}
