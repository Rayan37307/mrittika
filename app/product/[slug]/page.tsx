import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  products,
  getProductById,
  getRelatedProducts,
  getAdjacentProducts,
} from "@/data/products";
import ProductGallery from "@/components/ProductGallery";
import ProductDetail from "@/components/ProductDetail";
import ProductTabs from "@/components/ProductTabs";
import RelatedCarousel from "@/components/RelatedCarousel";

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
  const { prev, next } = getAdjacentProducts(product);

  return (
    <div>
      <div className="bg-sage/15 border-b hairline">
        <div className="container-px flex items-center justify-between gap-4 py-3.5 text-xs sm:text-sm">
          <div className="text-ink-soft">
            <Link href="/" className="hover:text-terracotta transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/shop?category=${encodeURIComponent(product.category)}`}
              className="hover:text-terracotta transition-colors"
            >
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink">{product.name}</span>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <Link
              href={`/product/${prev.id}`}
              aria-label={`Previous product: ${prev.name}`}
              className="flex h-8 w-8 items-center justify-center text-ink-soft hover:text-terracotta transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/shop"
              aria-label="Back to all products"
              className="flex h-8 w-8 items-center justify-center text-ink-soft hover:text-terracotta transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <rect x="3.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
                <rect x="13.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
                <rect x="3.5" y="13.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
                <rect x="13.5" y="13.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </Link>
            <Link
              href={`/product/${next.id}`}
              aria-label={`Next product: ${next.name}`}
              className="flex h-8 w-8 items-center justify-center text-ink-soft hover:text-terracotta transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="py-10 sm:py-14">
        <div className="container-px">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center mb-16">
            <ProductGallery images={product.images} name={product.name} />
            <ProductDetail product={product} />
          </div>

          <div className="mb-20">
            <ProductTabs product={product} />
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-ink mb-8">
                Related Items
              </h2>
              <RelatedCarousel products={related} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
