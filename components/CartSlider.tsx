"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartSlider() {
  const { items, removeItem, subtotal, isCartOpen, closeCart } = useCart();

  useEffect(() => {
    if (!isCartOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isCartOpen, closeCart]);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-ink/40 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-cream shadow-2xl transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-ink/10">
          <h2 className="font-display text-xl text-ink">Shopping cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-terracotta transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <p className="py-10 text-center text-sm text-ink-soft">
              Your cart is empty.
            </p>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-cream-dark">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-ink">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm">
                      <span className="text-ink-soft/60">{item.qty} × </span>
                      <span className="font-medium text-terracotta">
                        ${item.price.toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label={`Remove ${item.name} from cart`}
                    onClick={() => removeItem(item.id)}
                    className="flex h-6 w-6 shrink-0 items-center justify-center text-ink-soft hover:text-terracotta transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <path
                        d="M6 6l12 12M18 6L6 18"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-lg text-ink">Subtotal:</span>
              <span className="font-display text-2xl text-terracotta">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              <Link
                href="/cart"
                onClick={closeCart}
                className="flex items-center justify-center rounded-full bg-ink py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-ink/85"
              >
                View Cart
              </Link>
              <Link
                href="/checkout"
                onClick={closeCart}
                className="flex items-center justify-center rounded-full bg-sage py-3.5 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-sage-dark"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
