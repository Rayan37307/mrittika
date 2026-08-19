import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { products, getProductById, getRelatedProducts } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";
import ProductCard from "@/components/ProductCard";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return products.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) return { title: "Product not found — Mrittika" };
  return {
    title: `${product.name} — Mrittika`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 4);

  return (
    <div className="py-10 sm:py-14">
      <div className="container-px">
        <div className="text-xs text-ink-soft/70 mb-8">
          <Link href="/" className="hover:text-terracotta transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-terracotta transition-colors">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          <div className="relative aspect-square rounded-lg overflow-hidden bg-cream-dark">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <ProductDetail product={product} />
          </div>
        </div>

        {related.length > 0 && (
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-ink mb-8">
              You may also like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-8 sm:gap-y-12">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
