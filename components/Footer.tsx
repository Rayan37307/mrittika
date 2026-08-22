import Image from "next/image";
import Link from "next/link";

const columnA = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/#blog" },
];

const columnB = [
  { label: "About Me", href: "/#about" },
  { label: "Pottery Class", href: "/#class" },
  { label: "Contact", href: "mailto:hello@mrittika.com" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    path: "M14 9h3V6h-3c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h3l1-3h-4V9c0-.55.45-1 1-1Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Zm0 5.9a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6ZM16.9 6a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7Z M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Zm0 1.5A1.5 1.5 0 0 0 5.5 7v10A1.5 1.5 0 0 0 7 18.5h10a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 17 5.5Z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M21.5 7.7a2.8 2.8 0 0 0-2-2C17.8 5.2 12 5.2 12 5.2s-5.8 0-7.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .5 4.3 2.8 2.8 0 0 0 2 2c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.5-4.3ZM10 14.8V9.2L15 12l-5 2.8Z",
  },
];

export default function Footer() {
  return (
    <footer id="about" className="bg-black text-cream">
      <div className="container-px py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10 lg:gap-8">
          <Link
            href="/"
            aria-label="Mrittika home"
            className="shrink-0 self-start lg:self-center"
          >
            <Image
              src="/mrittika%20logo%20white-01.png"
              alt="Mrittika"
              width={509}
              height={131}
              className="h-14 sm:h-16 lg:h-20 w-auto"
            />
          </Link>

          <div className="flex flex-wrap justify-center lg:justify-end gap-x-16 gap-y-6 sm:gap-x-24 shrink-0">
            <nav className="flex flex-col gap-3 text-base sm:text-lg text-cream/70">
              {columnA.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-cream transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <nav className="flex flex-col gap-3 text-base sm:text-lg text-cream/70">
              {columnB.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-cream transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-px py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>Mrittika © 2026. Handcrafted pottery, made with care.</p>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/20 text-cream/70 hover:text-cream hover:border-cream/50 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-cream/20 text-cream/70 hover:text-cream hover:border-cream/50 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                <path
                  d="M12 19V5M6 11l6-6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
