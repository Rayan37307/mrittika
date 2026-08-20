import Image from "next/image";
import Link from "next/link";
import Marquee from "./Marquee";

const tickerItems = [
  "Handmade in small batches",
  "Free gift with every order over $150",
  "Fired slow, finished to last a lifetime",
];

export default function Hero() {
  return (
    <section id="home">
      <div className="container-px py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-[5rem] leading-[1.05] text-ink mb-5">
              Discover the pinnacle of craftsmanship.
            </h1>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-terracotta hover:bg-terracotta-dark transition-colors text-cream px-8 py-3.5 text-sm font-medium tracking-wide"
              >
                Shop Now
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-1">
            <div className="relative aspect-[4/5] sm:aspect-square rounded-md border border-ink/15 bg-cream p-8 sm:p-12">
              <Image
                src="/images/products/white-glazed-mug.jpg"
                alt="Featured piece — White Glazed Mug"
                fill
                sizes="(min-width: 1024px) 20vw, 90vw"
                className="object-contain p-4"
                priority
              />
            </div>
            <span className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 flex h-14 w-14 sm:h-16 sm:w-16 -rotate-6 items-center justify-center rounded-full bg-sage text-cream text-xs sm:text-sm font-medium">
              New
            </span>
          </div>
        </div>
      </div>

      <Marquee items={tickerItems} tone="ink" />
    </section>
  );
}
