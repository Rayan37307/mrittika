import { Suspense } from "react";
import type { Metadata } from "next";
import ShopGrid from "@/components/ShopGrid";

export const metadata: Metadata = {
  title: "Shop — Mrittika",
  description: "Browse handcrafted mugs, bowls, plates, pots and decor from Mrittika.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <ShopGrid />
    </Suspense>
  );
}
