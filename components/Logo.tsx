import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center shrink-0"
      aria-label="Mrittika home"
    >
      <Image
        src={
          light
            ? "/mrittika%20logo%20white-01.png"
            : "/mrittika%20logo-01.png"
        }
        alt="Mrittika"
        width={509}
        height={131}
        priority
        className="h-8 sm:h-9 w-auto"
      />
    </Link>
  );
}
