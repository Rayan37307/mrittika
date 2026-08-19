import type { Metadata } from "next";
import { Fraunces, Jost } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
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
    <html lang="en" className={`${fraunces.variable} ${jost.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
