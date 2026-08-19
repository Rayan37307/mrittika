"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/#blog", label: "Blog" },
  { href: "/#about", label: "About Me" },
  { href: "/#class", label: "Pottery Class" },
];

function IconLink({
  href,
  children,
  label,
  count,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
  count?: number;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="relative flex items-center justify-center h-9 w-9 text-ink hover:text-terracotta transition-colors"
    >
      {children}
      {typeof count === "number" && count > 0 && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-[10px] font-medium text-cream">
          {count}
        </span>
      )}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { totalCount } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b hairline">
      <div className="container-px flex items-center justify-between gap-4 py-4">
        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-soft hover:text-terracotta transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden flex items-center justify-center h-9 w-9 text-ink"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <Logo />
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden sm:flex items-center gap-1 pr-2 mr-1 border-r hairline text-sm text-ink-soft">
            <span className="hover:text-terracotta transition-colors cursor-default">
              Login / Register
            </span>
          </div>
          <IconLink href="/shop" label="Search products">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </IconLink>
          <IconLink href="/shop" label="Wishlist">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path
                d="M12 20.5s-7.5-4.6-10-9.3C0.6 8 2 4.7 5.3 4c2.2-.5 4.3.6 5.5 2.4l1.2 1.8 1.2-1.8C14.4 4.6 16.5 3.5 18.7 4c3.3.7 4.7 4 3.3 7.2-2.5 4.7-10 9.3-10 9.3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
          </IconLink>
          <IconLink
            href="/cart"
            label={`Cart, ${totalCount} item${totalCount === 1 ? "" : "s"}`}
            count={totalCount}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path
                d="M6 8h12l-1.2 10.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </IconLink>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t hairline bg-cream">
          <div className="container-px flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 text-sm text-ink-soft hover:text-terracotta transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
