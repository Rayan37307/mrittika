import Image from "next/image";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [main] = images;

  return (
    <div className="relative aspect-square rounded-md overflow-hidden border border-ink/10 bg-cream">
      <Image
        src={main}
        alt={name}
        fill
        priority
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
