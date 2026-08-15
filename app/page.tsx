import About from "@/components/About";
import Availability from "@/components/Availability";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Navbar from "@/components/Navbar";
import Places from "@/components/Places";
import PoolExperience from "@/components/PoolExperience";
import Stay from "@/components/Stay";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <Hero />
        <main className="relative z-10 flex w-full flex-col items-center justify-between px-6 py-10 sm:px-16 sm:items-start">
          <Navbar />
        </main>
      </section>
      <About />
      <Places />
      <PoolExperience />
      <Stay />
      <Location />
      <Availability />
      <Footer />
    </>
  );
}
