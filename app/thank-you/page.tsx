import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Confirmed — Mrittika",
};

type SearchParams = { order?: string; total?: string; email?: string };

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const order = sp.order || "MRT-000000";
  const total = sp.total;
  const email = sp.email;

  return (
    <div className="py-20 sm:py-28">
      <div className="container-px max-w-xl mx-auto text-center">
        <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <p className="text-xs uppercase tracking-[0.2em] text-terracotta mb-3">
          Order confirmed
        </p>
        <h1 className="font-display text-3xl sm:text-4xl text-ink mb-4">
          Thank you — your order is on its way to the kiln shelf.
        </h1>
        <p className="text-ink-soft leading-relaxed mb-8">
          {email ? (
            <>
              A confirmation has been sent to{" "}
              <span className="text-ink">{email}</span>. We&rsquo;ll let you know
              as soon as your pieces are packed and shipped.
            </>
          ) : (
            "We’ll let you know as soon as your pieces are packed and shipped."
          )}
        </p>

        <div className="inline-flex flex-col gap-3 items-stretch bg-sage/10 rounded-2xl px-8 py-6 mb-10 text-left">
          <div className="flex items-center justify-between gap-8 text-sm">
            <span className="text-ink-soft">Order number</span>
            <span className="text-ink font-medium">{order}</span>
          </div>
          {total && (
            <div className="flex items-center justify-between gap-8 text-sm border-t hairline pt-3">
              <span className="text-ink-soft">Order total</span>
              <span className="text-ink font-medium">${total}</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-full bg-terracotta hover:bg-terracotta-dark transition-colors text-cream px-8 py-3.5 text-sm font-medium tracking-wide"
          >
            Continue Shopping
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center text-sm text-ink-soft hover:text-terracotta transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
