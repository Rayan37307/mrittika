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
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-terracotta mb-4">
              Handmade in small batches
            </p>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] text-ink mb-5">
              Discover the pinnacle of craftsmanship.
            </h1>
            <p className="text-ink-soft text-sm sm:text-base max-w-md mb-8 leading-relaxed">
              Every piece begins as raw earth — mrittika — shaped by hand,
              fired slow, and finished with a glaze made to last a lifetime
              on your table.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-terracotta hover:bg-terracotta-dark transition-colors text-cream px-8 py-3.5 text-sm font-medium tracking-wide"
              >
                Shop Now
              </Link>
              <div className="flex items-center gap-2 text-sm text-ink-soft">
                <span className="text-terracotta">★★★★★</span>
                <span>Rated 4.9/5 based on 374 reviews</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] sm:aspect-square rounded-md border border-ink/15 bg-cream-dark/40 p-8 sm:p-12">
              <Image
                src="/images/product-mug.jpg"
                alt="Featured piece — White Glazed Mug"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
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
