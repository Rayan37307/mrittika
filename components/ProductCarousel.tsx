"use client";

import { useRef } from "react";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";

export default function ProductCarousel({ products }: { products: Product[] }) {
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
        className="flex divide-x divide-ink overflow-x-auto scroll-smooth snap-x snap-mandatory border border-ink [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="w-1/2 lg:w-1/4 shrink-0 snap-start px-5 py-6 sm:px-6 sm:py-8"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous products"
        onClick={() => scrollBy(-1)}
        className="hidden sm:flex absolute -left-5 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-sage text-cream hover:bg-sage-dark transition-colors shadow-md z-10"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next products"
        onClick={() => scrollBy(1)}
        className="hidden sm:flex absolute -right-5 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-sage text-cream hover:bg-sage-dark transition-colors shadow-md z-10"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
