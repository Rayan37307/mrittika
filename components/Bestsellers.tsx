import { products } from "@/data/products";
import ProductCard from "./ProductCard";

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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-12">
          {rest.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
