"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal, hydrated } = useCart();

  if (hydrated && items.length === 0) {
    return (
      <div className="py-20 sm:py-28">
        <div className="container-px text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta mb-3">
            Your cart
          </p>
          <h1 className="font-display text-4xl sm:text-5xl text-ink mb-4">
            Your cart is empty
          </h1>
          <p className="text-ink-soft mb-8">
            Nothing here yet — go find something handmade to love.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-full bg-terracotta hover:bg-terracotta-dark transition-colors text-cream px-8 py-3.5 text-sm font-medium tracking-wide"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-16">
      <div className="container-px">
        <div className="text-xs text-ink-soft/70 mb-4">
          <Link href="/" className="hover:text-terracotta transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">Cart</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-10">
          Your Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-2 flex flex-col divide-y hairline">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 sm:gap-6 py-6 first:pt-0">
                <Link
                  href={`/product/${item.id}`}
                  className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 rounded-md overflow-hidden bg-cream"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </Link>

                <div className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wide text-sage-dark mb-1">
                      {item.category}
                    </p>
                    <Link
                      href={`/product/${item.id}`}
                      className="text-[15px] text-ink hover:text-terracotta transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-terracotta mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-ink/15 rounded-full">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.name}`}
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="h-9 w-9 flex items-center justify-center text-ink-soft hover:text-terracotta transition-colors"
                      >
                        −
                      </button>
                      <span className="w-7 text-center text-sm">{item.qty}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${item.name}`}
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="h-9 w-9 flex items-center justify-center text-ink-soft hover:text-terracotta transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <p className="w-16 text-right text-sm font-medium text-ink">
                      ${(item.price * item.qty).toFixed(2)}
                    </p>

                    <button
                      type="button"
                      aria-label={`Remove ${item.name} from cart`}
                      onClick={() => removeItem(item.id)}
                      className="text-ink-soft/60 hover:text-terracotta transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                        <path
                          d="M6 7h12M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7m2 0-.7 12.1a2 2 0 0 1-2 1.9H9.7a2 2 0 0 1-2-1.9L7 7"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="bg-sage/10 rounded-2xl p-6 sm:p-8">
              <h2 className="font-display text-2xl text-ink mb-5">Order Summary</h2>
              <div className="flex items-center justify-between text-sm text-ink-soft mb-2.5">
                <span>Subtotal</span>
                <span className="text-ink">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-ink-soft mb-5">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex items-center justify-between text-base font-medium text-ink border-t hairline pt-4 mb-6">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <Link
                href="/checkout"
                className="w-full inline-flex items-center justify-center rounded-full bg-terracotta hover:bg-terracotta-dark transition-colors text-cream px-6 py-3.5 text-sm font-medium tracking-wide"
              >
                Proceed to Checkout
              </Link>
              <Link
                href="/shop"
                className="w-full inline-flex items-center justify-center mt-3 text-sm text-ink-soft hover:text-terracotta transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
