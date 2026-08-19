import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import PopularProducts from "@/components/PopularProducts";
import ClassSection from "@/components/ClassSection";
import GalleryGrid from "@/components/GalleryGrid";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryNav />
      <PopularProducts />
      <ClassSection />
      <GalleryGrid />
      <BlogSection />
    </>
  );
}
