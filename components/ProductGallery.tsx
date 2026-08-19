import Image from "next/image";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [main, second, third] = images;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative aspect-square rounded-md overflow-hidden border border-ink/10 bg-cream-dark/40">
          <Image
            src={main}
            alt={name}
            fill
            priority
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
        {second && (
          <div className="relative aspect-square rounded-md overflow-hidden border border-ink/10 bg-cream-dark/40">
            <Image
              src={second}
              alt={`${name} — in the studio`}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        )}
      </div>
      {third && (
        <div className="relative aspect-[21/9] rounded-md overflow-hidden border border-ink/10 bg-cream-dark/40">
          <Image
            src={third}
            alt={`${name} — detail`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}
