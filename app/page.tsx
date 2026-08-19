import Hero from "@/components/Hero";
import CategorySplit from "@/components/CategorySplit";
import PopularProducts from "@/components/PopularProducts";
import FeatureTrio from "@/components/FeatureTrio";
import Marquee from "@/components/Marquee";
import Bestsellers from "@/components/Bestsellers";
import BlogSection from "@/components/BlogSection";
import Newsletter from "@/components/Newsletter";

const tickerItems = [
  "Handmade in small batches",
  "Free gift with every order over $150",
  "Fired slow, finished to last a lifetime",
];

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySplit />
      <PopularProducts />
      <FeatureTrio />
      <Marquee items={tickerItems} tone="sage" />
      <Bestsellers />
      <BlogSection />
      <Newsletter />
    </>
  );
}
