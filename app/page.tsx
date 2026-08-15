import About from "@/components/About";
import Availability from "@/components/Availability";
import Footer from "@/components/Footer";
import HeroAnimated from "@/components/HeroAnimated";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import Places from "@/components/Places";
import PoolExperience from "@/components/PoolExperience";
import Stay from "@/components/Stay";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <HeroAnimated />
        <header className="relative z-10 flex w-full flex-col items-center justify-between px-5 py-6 sm:px-12 sm:py-10 sm:items-start">
          <Navbar />
        </header>
      </section>
      <About />
      <Places />
      <PoolExperience />
      <Stay />
      <GallerySection />
      <Location />
      <Availability />
      <Footer />
    </>
  );
}
