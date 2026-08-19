import Link from "next/link";
import Logo from "./Logo";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "About Me", href: "/#about" },
      { label: "Blog", href: "/#blog" },
      { label: "Pottery Class", href: "/#class" },
      { label: "Shipping & Return", href: "/shop" },
      { label: "Pottery Care", href: "/shop" },
    ],
  },
  {
    title: "Follow",
    links: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Pinterest", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="container-px py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div id="about">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed max-w-xs text-cream/60">
            Mrittika — meaning &ldquo;earth&rdquo; — is a small pottery studio
            making handthrown mugs, bowls, plates and decor for everyday
            tables.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-lg text-cream mb-4">{col.title}</h4>
            <ul className="space-y-2.5 text-sm">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-terracotta-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-display text-lg text-cream mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm text-cream/70">
            <li>hello@mrittika.com</li>
            <li>(212) 820-8293</li>
            <li>69 2nd Ave, Brooklyn, NY 11215</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-px py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <p>Mrittika © 2026. Handcrafted pottery, made with care.</p>
          <p>Designed for those who love things made by hand.</p>
        </div>
      </div>
    </footer>
  );
}
