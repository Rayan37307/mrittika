"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FLAT_SHIPPING_RATE, useCart } from "@/lib/cart-context";

const accent = { accentColor: "var(--color-terracotta)" };

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="block text-sm text-ink mb-1.5">
        {label}
        {props.required && <span className="text-terracotta"> *</span>}
      </span>
      <input
        {...props}
        className="w-full rounded-md border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-terracotta transition-colors"
      />
    </label>
  );
}

const paymentMethods = [
  {
    id: "bank" as const,
    label: "Direct bank transfer",
    detail:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
  },
  { id: "check" as const, label: "Check payments" },
  { id: "cod" as const, label: "Cash on delivery" },
];

export default function CheckoutPage() {
  const {
    items,
    updateQty,
    removeItem,
    subtotal,
    hydrated,
    clearCart,
    shippingMethod,
    setShippingMethod,
    shippingCost,
  } = useCart();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [payment, setPayment] = useState<"bank" | "check" | "cod">("bank");

  const total = subtotal + shippingCost;

  useEffect(() => {
    if (hydrated && items.length === 0) {
      router.replace("/shop");
    }
  }, [hydrated, items.length, router]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting || items.length === 0) return;
    setSubmitting(true);

    const orderNumber = `MRT-${Date.now().toString(36).toUpperCase()}`;
    // Demo checkout: no payment is actually processed or transmitted anywhere.
    clearCart();
    router.push(
      `/thank-you?order=${encodeURIComponent(orderNumber)}&total=${total.toFixed(2)}&email=${encodeURIComponent(email)}`
    );
  }

  if (!hydrated || items.length === 0) {
    return <div className="py-24" />;
  }

  return (
    <div className="py-12 sm:py-16">
      <div className="container-px">
        <div className="text-xs text-ink-soft/70 mb-4">
          <Link href="/" className="hover:text-terracotta transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/cart" className="hover:text-terracotta transition-colors">
            Cart
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">Checkout</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl text-ink mb-10">
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-display text-2xl text-ink mb-5">
                Billing details
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="First name" name="firstName" required placeholder="Jordan" />
                <Field label="Last name" name="lastName" required placeholder="Lee" />
                <Field label="Phone" type="tel" name="phone" required placeholder="(555) 123-4567" />
                <Field
                  label="Email address"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Field
                  label="Street address"
                  name="address"
                  required
                  placeholder="House number and street name"
                />
                <Field label="Town / City" name="city" required placeholder="Brooklyn" />

                <label className="block">
                  <span className="block text-sm text-ink mb-1.5">
                    Country / Region<span className="text-terracotta"> *</span>
                  </span>
                  <select
                    name="country"
                    required
                    defaultValue="United States (US)"
                    className="w-full rounded-md border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-terracotta transition-colors"
                  >
                    <option>United States (US)</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                  </select>
                </label>

                <Field label="ZIP Code" name="zip" required placeholder="11215" />
              </div>

              <label className="flex items-center gap-2.5 text-sm font-medium text-ink mt-5 cursor-pointer">
                <input type="checkbox" name="createAccount" style={accent} />
                Create an account?
              </label>
            </div>

            <div>
              <h2 className="font-display text-2xl text-ink mb-4">
                Additional information
              </h2>
              <label className="flex items-center gap-2.5 text-sm font-medium text-ink mb-5 cursor-pointer">
                <input type="checkbox" name="shipDifferent" style={accent} />
                Ship to a different address?
              </label>

              <label className="block">
                <span className="block text-sm text-ink mb-1.5">
                  Order notes{" "}
                  <span className="text-ink-soft/50">(optional)</span>
                </span>
                <textarea
                  name="notes"
                  rows={4}
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  className="w-full rounded-md border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-terracotta transition-colors resize-y"
                />
              </label>
            </div>
          </div>

          <div>
            <div className="border border-ink/15 rounded-2xl p-6 sm:p-8">
              <h2 className="font-display text-2xl text-ink mb-5">
                Your order
              </h2>

              <div className="flex items-center justify-between text-xs uppercase tracking-wide text-ink-soft/70 pb-3 border-b border-ink/10">
                <span>Product</span>
                <span>Subtotal</span>
              </div>

              <div className="divide-y divide-ink/10">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 py-4">
                    <button
                      type="button"
                      aria-label={`Remove ${item.name} from cart`}
                      onClick={() => removeItem(item.id)}
                      className="flex h-4 w-4 shrink-0 items-center justify-center text-ink-soft/60 hover:text-terracotta transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                        <path
                          d="M6 6l12 12M18 6L6 18"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>

                    <div className="relative h-11 w-11 shrink-0 overflow-hidden bg-cream-dark">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm text-ink">{item.name}</p>
                      <div className="mt-1 flex items-center border border-ink/15 rounded-full w-fit">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.name}`}
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="h-6 w-6 flex items-center justify-center text-ink-soft hover:text-terracotta transition-colors text-xs"
                        >
                          −
                        </button>
                        <span className="w-5 text-center text-xs">{item.qty}</span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="h-6 w-6 flex items-center justify-center text-ink-soft hover:text-terracotta transition-colors text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <span className="shrink-0 text-sm text-ink-soft">
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm py-4 border-b border-ink/10">
                <span className="text-ink">Subtotal</span>
                <span className="text-terracotta font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex items-start justify-between text-sm py-4 border-b border-ink/10">
                <span className="text-ink">Shipment</span>
                <div className="flex flex-col items-end gap-1.5 text-ink-soft">
                  <label className="flex items-center gap-2 cursor-pointer">
                    Free shipping
                    <input
                      type="radio"
                      name="shipment"
                      checked={shippingMethod === "free"}
                      onChange={() => setShippingMethod("free")}
                      style={accent}
                    />
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    Flat rate:{" "}
                    <span className="text-terracotta font-medium">
                      ${FLAT_SHIPPING_RATE.toFixed(2)}
                    </span>
                    <input
                      type="radio"
                      name="shipment"
                      checked={shippingMethod === "flat"}
                      onChange={() => setShippingMethod("flat")}
                      style={accent}
                    />
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between text-base font-medium text-ink py-4 border-b border-ink/10">
                <span>Total</span>
                <span className="text-terracotta text-lg">
                  ${total.toFixed(2)}
                </span>
              </div>

              <h2 className="font-display text-2xl text-ink mt-6 mb-4">
                Payment information
              </h2>
              <div className="flex flex-col gap-3">
                {paymentMethods.map((method) => (
                  <div key={method.id}>
                    <label className="flex items-center gap-2.5 text-sm font-medium text-ink cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={payment === method.id}
                        onChange={() => setPayment(method.id)}
                        style={accent}
                      />
                      {method.label}
                    </label>
                    {method.detail && payment === method.id && (
                      <p className="mt-2.5 rounded-md bg-sage/10 p-4 text-xs leading-relaxed text-ink-soft">
                        {method.detail}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-7 w-full inline-flex items-center justify-center rounded-full bg-sage hover:bg-sage-dark disabled:opacity-60 transition-colors text-cream px-8 py-3.5 text-sm font-medium tracking-wide"
              >
                {submitting ? "Placing order…" : "Place Order"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
