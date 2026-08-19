import Image from "next/image";
import { LeafIcon, SparkleIcon, WheelIcon } from "./CategoryIcons";

const features = [
  {
    title: "Shaped by Hand",
    text: "Every piece begins as raw earth, thrown and shaped by hand on the wheel.",
    image: "/images/gallery-1.jpg",
    alt: "Hands shaping wet clay on the pottery wheel",
    Icon: WheelIcon,
  },
  {
    title: "Fired Slow",
    text: "Each form is fired slow, so the clay holds its strength and quiet texture.",
    image: "/images/gallery-3.jpg",
    alt: "Potter's hands stained with clay",
    Icon: SparkleIcon,
  },
  {
    title: "Made to Last",
    text: "Finished with a glaze made to last a lifetime on your everyday table.",
    image: "/images/gallery-4.jpg",
    alt: "A group learning to throw on the pottery wheel",
    Icon: LeafIcon,
  },
];

export default function FeatureTrio() {
  return (
    <section className="grid sm:grid-cols-3">
      {features.map(({ title, text, image, alt, Icon }) => (
        <div key={title} className="relative h-[340px] overflow-hidden">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(min-width: 640px) 33vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink/55" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-cream">
            <Icon className="h-9 w-9 mb-4 text-cream" />
            <h3 className="font-display text-xl mb-2">{title}</h3>
            <p className="text-sm text-cream/85 max-w-[220px] leading-relaxed">
              {text}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
