"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const SHIPPING = 8;

function Field({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="block text-xs text-ink-soft mb-1.5">{label}</span>
      <input
        {...props}
        className="w-full rounded-md border border-ink/15 bg-cream px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-soft/40 focus:outline-none focus:border-terracotta transition-colors"
      />
    </label>
  );
}

export default function CheckoutPage() {
  const { items, subtotal, hydrated, clearCart } = useCart();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");

  const total = subtotal + (items.length > 0 ? SHIPPING : 0);

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

        <h1 className="font-display text-3xl sm:text-4xl text-ink mb-10">
          Checkout
        </h1>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          <div className="lg:col-span-2 flex flex-col gap-10">
            <section>
              <h2 className="font-display text-xl text-ink mb-4">Contact</h2>
              <Field
                label="Email address"
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-4">
                Shipping Address
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" required placeholder="Jordan Lee" />
                <Field label="Phone" type="tel" name="phone" required placeholder="(555) 123-4567" />
                <div className="sm:col-span-2">
                  <Field label="Address" name="address" required placeholder="123 Clay Street" />
                </div>
                <Field label="City" name="city" required placeholder="Brooklyn" />
                <Field label="State" name="state" required placeholder="NY" />
                <Field label="ZIP / Postal code" name="zip" required placeholder="11215" />
                <Field label="Country" name="country" required placeholder="United States" defaultValue="United States" />
              </div>
            </section>

            <section>
              <h2 className="font-display text-xl text-ink mb-1.5">Payment</h2>
              <p className="text-xs text-ink-soft/70 mb-4">
                Demo checkout — no real payment is processed or stored.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <Field label="Name on card" name="cardName" required placeholder="Jordan Lee" />
                </div>
                <div className="sm:col-span-2">
                  <Field
                    label="Card number"
                    name="cardNumber"
                    required
                    inputMode="numeric"
                    placeholder="4242 4242 4242 4242"
                    maxLength={19}
                  />
                </div>
                <Field label="Expiry (MM/YY)" name="expiry" required placeholder="08/29" maxLength={5} />
                <Field label="CVC" name="cvc" required inputMode="numeric" placeholder="123" maxLength={4} />
              </div>
            </section>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-full bg-terracotta hover:bg-terracotta-dark disabled:opacity-60 transition-colors text-cream px-8 py-3.5 text-sm font-medium tracking-wide w-fit"
            >
              {submitting ? "Placing order…" : `Place Order — $${total.toFixed(2)}`}
            </button>
          </div>

          <div>
            <div className="bg-sage/10 rounded-2xl p-6 sm:p-8">
              <h2 className="font-display text-xl text-ink mb-5">
                Order Summary
              </h2>
              <div className="flex flex-col gap-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="relative h-16 w-16 shrink-0 rounded-md overflow-hidden bg-cream-dark">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                      <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-ink text-cream text-[11px] flex items-center justify-center">
                        {item.qty}
                      </span>
                    </div>
                    <div className="flex-1 flex items-center justify-between gap-2">
                      <p className="text-sm text-ink leading-tight">{item.name}</p>
                      <p className="text-sm text-ink-soft shrink-0">
                        ${(item.price * item.qty).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-ink-soft mb-2.5">
                <span>Subtotal</span>
                <span className="text-ink">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-ink-soft mb-5">
                <span>Shipping</span>
                <span className="text-ink">${SHIPPING.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-base font-medium text-ink border-t hairline pt-4">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
