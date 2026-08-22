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
      <div className="container-px pt-5 pb-5 ">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-[7rem] leading-[1.05] text-ink mb-6">
              Discover the pinnacle of craftsmanship.
            </h1>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-terracotta hover:bg-terracotta-dark transition-colors text-cream px-8 py-3.5 text-sm font-bold tracking-wide"
              >
                Shop Now
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-2 aspect-square border border-ink p-1.5">
            <Image
              src="/images/products/white-glazed-mug.jpg"
              alt="Featured piece — White Glazed Mug"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-contain"
              priority
            />
          </div>
        </div>


      </div>

      {/* <Marquee items={tickerItems} tone="ink" /> */}
    </section>
  );
}
