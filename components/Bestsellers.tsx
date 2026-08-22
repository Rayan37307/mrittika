import { products } from "@/data/products";
import ProductCarousel from "./ProductCarousel";

export default function Bestsellers() {
  const rest = products.slice(4);

  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-terracotta mb-2">
            Loved again and again
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-ink">
            Bestsellers
          </h2>
        </div>

        <ProductCarousel products={rest} />
      </div>
    </section>
  );
}
