import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryNav from "@/components/CategoryNav";
import PopularProducts from "@/components/PopularProducts";
import ClassSection from "@/components/ClassSection";
import GalleryGrid from "@/components/GalleryGrid";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryNav />
        <PopularProducts />
        <ClassSection />
        <GalleryGrid />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
