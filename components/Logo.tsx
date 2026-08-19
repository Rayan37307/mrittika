import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 shrink-0"
      aria-label="Mrittika home"
    >
      <svg
        viewBox="0 0 40 40"
        className="h-8 w-8"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 15h20l-3 18a5 5 0 0 1-5 4.2h-4A5 5 0 0 1 13 33L10 15Z"
          fill={light ? "#F6F1E8" : "#BC7155"}
        />
        <path
          d="M14 15c0-4.5 3.6-8.5 6-8.5s6 3.5 6 8.5"
          stroke={light ? "#F6F1E8" : "#BC7155"}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span
        className={`font-display text-2xl tracking-tight ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        mrittika
      </span>
    </Link>
  );
}
