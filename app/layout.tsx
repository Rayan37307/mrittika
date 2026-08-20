import type { Metadata } from "next";
import { Jost } from "next/font/google";
import localFont from "next/font/local";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const heading = localFont({
  src: "../public/font1.woff2",
  variable: "--font-heading",
  weight: "600",
  style: "normal",
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mrittika — Handcrafted Pottery & Ceramics",
  description:
    "Mrittika is a home for handcrafted pottery — mugs, bowls, plates and decor thrown from earth, glazed with care. Discover the pinnacle of craftsmanship.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heading.variable} ${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <CartProvider>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
