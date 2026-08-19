"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

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
      <p className="text-xs uppercase tracking-wide text-sage-dark mb-2">
        {product.category}
      </p>
      <h1 className="font-display text-3xl sm:text-4xl text-ink mb-4">
        {product.name}
      </h1>

      <div className="flex items-baseline gap-3 mb-6">
        {product.oldPrice && (
          <span className="text-lg text-ink-soft/60 line-through">
            ${product.oldPrice.toFixed(2)}
          </span>
        )}
        <span className="text-2xl font-medium text-terracotta">
          ${product.price.toFixed(2)}
        </span>
      </div>

      <p className="text-ink-soft leading-relaxed mb-6 max-w-md">
        {product.description}
      </p>

      <ul className="space-y-2 mb-8 text-sm text-ink-soft">
        {product.details.map((detail) => (
          <li key={detail} className="flex gap-2.5">
            <span className="mt-2 h-1 w-1 rounded-full bg-terracotta shrink-0" />
            {detail}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-4">
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
          className="inline-flex items-center justify-center rounded-full border border-ink/20 hover:border-terracotta hover:text-terracotta transition-colors text-ink px-8 py-3.5 text-sm font-medium tracking-wide"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
