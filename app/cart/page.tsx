"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FLAT_SHIPPING_RATE, useCart } from "@/lib/cart-context";
import { products } from "@/data/products";
import ProductCarousel from "@/components/ProductCarousel";

const steps = ["Shopping Cart", "Checkout", "Order Complete"];

export default function CartPage() {
  const {
    items,
    updateQty,
    removeItem,
    subtotal,
    hydrated,
    shippingMethod,
    setShippingMethod,
    shippingCost,
  } = useCart();
  const [coupon, setCoupon] = useState("");

  const total = subtotal + shippingCost;

  const recommended = useMemo(() => {
    const cartIds = new Set(items.map((i) => i.id));
    return products.filter((p) => !cartIds.has(p.id)).slice(0, 4);
  }, [items]);

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
    <div>
      <div className="bg-sage text-cream">
        <div className="container-px py-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:text-base font-semibold">
          {steps.map((step, i) => (
            <span key={step} className="flex items-center gap-2 sm:gap-3">
              <span className={i === 0 ? "text-cream" : "text-cream/55"}>
                {step}
              </span>
              {i < steps.length - 1 && (
                <span aria-hidden="true" className="text-cream/50">
                  →
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="py-12 sm:py-16">
        <div className="container-px">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2">
              <div className="hidden sm:grid grid-cols-[24px_1fr_100px_150px_100px] gap-6 pb-4 border-b border-ink/10 text-xs uppercase tracking-wide text-ink-soft/70">
                <span />
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span className="text-right">Subtotal</span>
              </div>

              <div className="divide-y divide-ink/10">
                {items.map((item) => {
                  const removeButton = (
                    <button
                      type="button"
                      aria-label={`Remove ${item.name} from cart`}
                      onClick={() => removeItem(item.id)}
                      className="flex h-5 w-5 items-center justify-center text-ink-soft/60 hover:text-terracotta transition-colors"
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
                  );

                  const thumbnail = (
                    <Link
                      href={`/product/${item.id}`}
                      className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden bg-cream-dark"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </Link>
                  );

                  const qtyStepper = (
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
                  );

                  return (
                    <div key={item.id} className="py-6 first:pt-0">
                      {/* Mobile layout */}
                      <div className="flex gap-4 sm:hidden">
                        {removeButton}
                        {thumbnail}
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
                          <div className="flex items-center justify-between mt-3">
                            {qtyStepper}
                            <p className="text-sm font-medium text-ink">
                              ${(item.price * item.qty).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Table layout */}
                      <div className="hidden sm:grid grid-cols-[24px_1fr_100px_150px_100px] gap-6 items-center">
                        {removeButton}
                        <div className="flex items-center gap-4">
                          {thumbnail}
                          <div>
                            <p className="text-xs uppercase tracking-wide text-sage-dark mb-1">
                              {item.category}
                            </p>
                            <Link
                              href={`/product/${item.id}`}
                              className="text-[15px] text-ink hover:text-terracotta transition-colors"
                            >
                              {item.name}
                            </Link>
                          </div>
                        </div>
                        <span className="text-sm text-ink-soft">
                          ${item.price.toFixed(2)}
                        </span>
                        {qtyStepper}
                        <span className="text-right text-sm font-medium text-ink">
                          ${(item.price * item.qty).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-wrap gap-3 mt-8"
              >
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Coupon code"
                  className="flex-1 min-w-[180px] rounded-full border border-ink/15 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-terracotta transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-terracotta hover:bg-terracotta-dark transition-colors text-cream px-6 py-2.5 text-sm font-medium tracking-wide"
                >
                  Apply Coupon
                </button>
              </form>
            </div>

            <div>
              <div className="bg-sage/10 rounded-2xl p-6 sm:p-8">
                <h2 className="font-display text-2xl text-ink mb-5">
                  Cart totals
                </h2>

                <div className="flex items-center justify-between text-sm text-ink-soft pb-4 mb-4 border-b border-ink/10">
                  <span>Subtotal</span>
                  <span className="text-ink">${subtotal.toFixed(2)}</span>
                </div>

                <fieldset className="pb-4 mb-4 border-b border-ink/10">
                  <legend className="text-sm text-ink mb-2.5">Shipment</legend>
                  <div className="flex flex-col gap-2 text-sm text-ink-soft">
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethod === "free"}
                        onChange={() => setShippingMethod("free")}
                        style={{ accentColor: "var(--color-terracotta)" }}
                      />
                      Free shipping
                    </label>
                    <label className="flex items-center gap-2.5 cursor-pointer">
                      <input
                        type="radio"
                        name="shipping"
                        checked={shippingMethod === "flat"}
                        onChange={() => setShippingMethod("flat")}
                        style={{ accentColor: "var(--color-terracotta)" }}
                      />
                      Flat rate:{" "}
                      <span className="text-terracotta font-medium">
                        ${FLAT_SHIPPING_RATE.toFixed(2)}
                      </span>
                    </label>
                  </div>
                  <p className="text-xs text-ink-soft/60 mt-2.5">
                    Address confirmed at checkout.{" "}
                    <Link
                      href="/checkout"
                      className="text-terracotta hover:text-terracotta-dark transition-colors font-medium"
                    >
                      Change address
                    </Link>
                  </p>
                </fieldset>

                <div className="flex items-center justify-between text-base font-medium text-ink mb-6">
                  <span>Total</span>
                  <span className="text-terracotta">${total.toFixed(2)}</span>
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

          {recommended.length > 0 && (
            <div className="mt-20 sm:mt-24">
              <div className="mb-10">
                <p className="text-xs uppercase tracking-[0.2em] text-terracotta mb-2">
                  Pairs well together
                </p>
                <h2 className="font-display text-4xl sm:text-5xl text-ink">
                  You May Be Interested In…
                </h2>
              </div>

              <ProductCarousel products={recommended} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
