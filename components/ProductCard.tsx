import Image from "next/image";
import type { Product } from "@/data/products";

const badgeStyles: Record<NonNullable<Product["badge"]>, string> = {
  SALE: "bg-terracotta text-cream",
  NEW: "bg-sage text-cream",
  HOT: "bg-ink text-cream",
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <a href="#shop" className="group block">
      <div className="relative aspect-square rounded-md overflow-hidden bg-cream-dark">
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
          aria-label={`Add ${product.name} to wishlist`}
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-cream/90 flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
            <path
              d="M12 20.5s-7.5-4.6-10-9.3C0.6 8 2 4.7 5.3 4c2.2-.5 4.3.6 5.5 2.4l1.2 1.8 1.2-1.8C14.4 4.6 16.5 3.5 18.7 4c3.3.7 4.7 4 3.3 7.2-2.5 4.7-10 9.3-10 9.3Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="mt-3.5">
        <p className="text-xs uppercase tracking-wide text-sage-dark">
          {product.category}
        </p>
        <h3 className="mt-1 text-[15px] text-ink group-hover:text-terracotta transition-colors">
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-baseline gap-2">
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
    </a>
  );
}
