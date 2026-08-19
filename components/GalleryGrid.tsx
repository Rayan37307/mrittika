import Image from "next/image";

const images = [
  { src: "/images/gallery-1.jpg", alt: "Hands sculpting a clay pot on the wheel" },
  { src: "/images/gallery-2.jpg", alt: "Close up of hands shaping wet clay" },
  { src: "/images/gallery-3.jpg", alt: "Potter's hands stained with clay" },
  { src: "/images/gallery-4.jpg", alt: "A group learning to throw on the pottery wheel" },
];

export default function GalleryGrid() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="container-px">
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="relative aspect-[4/5] rounded-md overflow-hidden">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 pt-10 sm:pt-16">
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-md overflow-hidden">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                sizes="(min-width: 640px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
