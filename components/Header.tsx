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
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex items-center justify-center h-9 w-9 text-ink hover:text-terracotta transition-colors"
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { totalCount, subtotal, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur border-b border-ink">
      <div className="container-px flex items-center justify-between gap-4 py-5">
        <Logo />

        <nav className="hidden lg:flex items-center gap-8 text-base font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sage hover:text-terracotta transition-colors"
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

        <div className="flex items-center gap-1 sm:gap-3">
          <span className="hidden sm:inline text-sm text-ink mr-1">
            Login / Register
          </span>
          <IconLink href="/shop" label="Search products">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </IconLink>
          <Link
            href="/shop"
            aria-label="Wishlist, 0 items"
            className="relative flex items-center justify-center h-9 w-9 text-ink hover:text-terracotta transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path
                d="M12 20.5s-7.5-4.6-10-9.3C0.6 8 2 4.7 5.3 4c2.2-.5 4.3.6 5.5 2.4l1.2 1.8 1.2-1.8C14.4 4.6 16.5 3.5 18.7 4c3.3.7 4.7 4 3.3 7.2-2.5 4.7-10 9.3-10 9.3Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-cream text-[9px] font-bold">
              0
            </span>
          </Link>
          <button
            type="button"
            onClick={openCart}
            aria-label={`Cart, ${totalCount} item${totalCount === 1 ? "" : "s"}, subtotal $${subtotal.toFixed(2)}`}
            className="flex items-center gap-2 rounded-full bg-ink text-cream hover:bg-terracotta transition-colors pl-3.5 pr-4 py-2 ml-1"
          >
            <span className="relative">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M6 8h12l-1.2 10.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8L6 8Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
                <path d="M9 8a3 3 0 0 1 6 0" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-terracotta text-cream text-[9px] font-medium">
                  {totalCount}
                </span>
              )}
            </span>
            <span className="text-sm font-medium">${subtotal.toFixed(2)}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-ink bg-cream">
          <div className="container-px flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2.5 text-base font-bold text-sage hover:text-terracotta transition-colors"
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
