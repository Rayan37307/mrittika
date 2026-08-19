"use client";

import { useRef } from "react";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

export default function RelatedCarousel({ products }: { products: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(dir: 1 | -1) {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[calc(50%-0.75rem)] sm:w-[calc(25%-1.125rem)] shrink-0 snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous related items"
        onClick={() => scrollBy(-1)}
        className="hidden sm:flex absolute -left-4 top-[35%] -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-cream border border-ink/15 text-ink hover:border-terracotta hover:text-terracotta transition-colors shadow-sm"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next related items"
        onClick={() => scrollBy(1)}
        className="hidden sm:flex absolute -right-4 top-[35%] -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-cream border border-ink/15 text-ink hover:border-terracotta hover:text-terracotta transition-colors shadow-sm"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
