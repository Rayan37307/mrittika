"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import Stars from "./Stars";

const tabs = ["Description", "Additional Information", "Reviews"] as const;
type Tab = (typeof tabs)[number];

const STUDIO_NOTE =
  "Every Mrittika piece is thrown, trimmed and glazed by hand in small batches. Glaze pooling, subtle asymmetry and small marks left by the maker's hands are part of the piece, not a flaw — expect gentle variation in color, weight and shape from one piece to the next.";

export default function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState<Tab>("Description");

  return (
    <div>
      <div className="flex gap-8 border-b hairline mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`pb-4 text-sm sm:text-base transition-colors border-b-2 -mb-px ${
              active === tab
                ? "border-terracotta text-ink font-medium"
                : "border-transparent text-ink-soft hover:text-ink"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {active === "Description" && (
        <div className="max-w-3xl space-y-4 text-ink-soft leading-relaxed">
          <p>{product.description}</p>
          <p>{STUDIO_NOTE}</p>
        </div>
      )}

      {active === "Additional Information" && (
        <div className="max-w-3xl">
          <table className="w-full text-sm">
            <tbody className="divide-y hairline">
              {product.details.map((detail, i) => (
                <tr key={i}>
                  <td className="py-3 pr-6 text-ink-soft w-40 shrink-0 align-top">
                    Spec {i + 1}
                  </td>
                  <td className="py-3 text-ink align-top">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {active === "Reviews" && (
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Stars rating={product.rating} />
            <span className="text-sm text-ink-soft">
              {product.rating.toFixed(1)} out of 5
            </span>
          </div>
          <p className="text-ink-soft">
            No reviews yet — be the first to share what you think of this piece.
          </p>
        </div>
      )}
    </div>
  );
}
