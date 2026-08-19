import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="relative h-[520px] sm:h-[600px] lg:h-[640px] w-full">
        <Image
          src="/images/hero.jpg"
          alt="Potter's hands shaping wet clay on the wheel"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/35 to-transparent" />

        <div className="relative h-full container-px flex items-center">
          <div className="max-w-xl text-cream">
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-terracotta-light mb-4">
              Handmade in small batches
            </p>
            <h1 className="font-display italic text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-5">
              Discover the pinnacle of craftsmanship.
            </h1>
            <p className="text-cream/85 text-sm sm:text-base max-w-md mb-8 leading-relaxed">
              Every piece begins as raw earth — mrittika — shaped by hand,
              fired slow, and finished with a glaze made to last a lifetime
              on your table.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#shop"
                className="inline-flex items-center justify-center rounded-full bg-terracotta hover:bg-terracotta-dark transition-colors text-cream px-8 py-3.5 text-sm font-medium tracking-wide"
              >
                Shop Now
              </a>
              <div className="flex items-center gap-2 text-sm text-cream/90">
                <span className="text-terracotta-light">★★★★★</span>
                <span>Rated 4.9/5 based on 374 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
