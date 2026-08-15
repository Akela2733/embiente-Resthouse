"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { EyebrowReveal, TextRevealLines, FadeUp } from "@/components/ui/Animate";

const categories = [
  { id: "all", name: "All Photos" },
  { id: "rooms", name: "Rooms & Interiors" },
  { id: "pool-garden", name: "Pool & Garden" },
  { id: "dining", name: "Dining & Breakfast" },
];

const galleryImages = [
  { src: "/gallary/pool.jpg", title: "Tranquil Swimming Pool", category: "pool-garden" },
  { src: "/gallary/breakfast.jpg", title: "Fresh Sri Lankan Breakfast", category: "dining" },
  { src: "/gallary/Budget Double Room.jpg", title: "Budget Double Room", category: "rooms" },
  { src: "/gallary/230199321.jpg", title: "Deluxe Bedroom", category: "rooms" },
  { src: "/gallary/gallary1.jpg", title: "Garden Pathway", category: "pool-garden" },
  { src: "/gallary/gallary2.jpg", title: "Poolside at Night", category: "pool-garden" },
  { src: "/gallary/gallary3.jpg", title: "Room Decor Detail", category: "rooms" },
  { src: "/gallary/gallary4.jpg", title: "Veranda View of Garden", category: "pool-garden" },
  { src: "/gallary/gallary5.jpg", title: "Tropical Greenery", category: "pool-garden" },
  { src: "/gallary/gallary6.jpg", title: "Modern Bathroom", category: "rooms" },
  { src: "/gallary/gallary7.jpg", title: "Guest House Exterior", category: "pool-garden" },
  { src: "/gallary/gallary8.jpg", title: "Exotic Flora", category: "pool-garden" },
  { src: "/gallary/gallary9.jpg", title: "Bed Details & Textiles", category: "rooms" },
  { src: "/gallary/gallary10.jpg", title: "Tropical Fruit Platter", category: "dining" },
  { src: "/gallary/gallary11.jpg", title: "Spacious Double Bed", category: "rooms" },
  { src: "/gallary/gallary12.jpg", title: "Comfortable Seating Area", category: "rooms" },
  { src: "/gallary/gallary13.jpg", title: "Garden Blooms", category: "pool-garden" },
];

const OurGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setLightboxIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <main className="bg-[#f4f0e8] text-stone-800 min-h-screen">
      {/* Hero Header */}
      <section className="relative isolate min-h-[350px] overflow-hidden px-6 py-10 sm:px-16 md:min-h-[420px] flex flex-col justify-between">
        <Image
          src="/gallary/gallarycover2.png"
          alt="Sunset pool at Embiente"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/25 to-black/10" />

        <nav className="relative flex items-center justify-between text-white w-full">
          <Link href="/" className="font-serif text-2xl tracking-[0.12em]">
            EMBIENTE
          </Link>
          <Link
            href="/"
            className="border border-white/60 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] transition-all hover:bg-white hover:text-stone-900"
          >
            Back home
          </Link>
        </nav>

        <div className="mt-auto pt-16">
          <EyebrowReveal>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-stone-200">
              A Visual Journey
            </p>
          </EyebrowReveal>
          <TextRevealLines
            lines={["Our Gallery"]}
            tag="h1"
            className="font-serif italic text-5xl leading-none tracking-tight text-white sm:text-6xl"
            delay={0.1}
          />
          <FadeUp delay={0.25}>
            <p className="mt-3 text-sm text-stone-200 max-w-md">
              Explore the tranquil spaces, comfortable rooms, and tropical corners of Embiente Guest House.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter Category Zone */}
      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-12 sm:pt-12">
        <div className="flex flex-wrap gap-2 sm:gap-3 border-b border-stone-300 pb-5 justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em] transition-all border ${activeCategory === cat.id
                ? "bg-stone-800 text-[#f4f0e8] border-stone-800"
                : "bg-transparent text-stone-600 border-stone-300 hover:border-stone-500 hover:text-stone-800"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-12 sm:py-16">
        {filteredImages.length === 0 ? (
          <div className="text-center py-20 text-stone-500">
            No images found in this category.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((img, index) => (
              <button
                key={`${img.src}-${activeCategory}`}
                onClick={() => setLightboxIndex(index)}
                style={{ animationDelay: `${Math.min(index * 55, 330)}ms` }}
                className="group relative block w-full aspect-[4/3] overflow-hidden bg-stone-200 border border-stone-300/40 text-left outline-none cursor-pointer focus:ring-2 focus:ring-stone-600 animate-fade-in opacity-0"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle Hover overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                  <div className="text-white">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-stone-300">
                      {img.category === "rooms" ? "Rooms" : img.category === "dining" ? "Dining" : "Pool & Garden"}
                    </p>
                    <h3 className="font-serif text-lg leading-tight mt-0.5">{img.title}</h3>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-sm transition-opacity duration-300 animate-lightbox-fade"
          role="dialog"
          aria-modal="true"
        >
          {/* Lightbox Topbar */}
          <div className="flex items-center justify-between px-6 py-4 text-white z-10">
            <span className="text-[10px] font-mono tracking-widest text-stone-400">
              {lightboxIndex + 1} / {filteredImages.length}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-3 text-stone-400 hover:text-white hover:bg-stone-900/60 rounded-full transition-all focus:outline-none focus:ring-1 focus:ring-white/20"
              aria-label="Close lightbox"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Lightbox Center */}
          <div className="relative flex-1 flex items-center justify-between px-4 sm:px-12 select-none">
            {/* Prev arrow */}
            <button
              onClick={handlePrev}
              className="p-3 text-white hover:text-stone-300 transition-colors bg-stone-900/40 hover:bg-stone-800/60 rounded-full focus:outline-none"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Main Image Wrapper with dynamic key for animation reload */}
            <div
              key={lightboxIndex}
              className="relative w-full h-[70vh] max-w-5xl flex items-center justify-center animate-lightbox-zoom"
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Next arrow */}
            <button
              onClick={handleNext}
              className="p-3 text-white hover:text-stone-300 transition-colors bg-stone-900/40 hover:bg-stone-800/60 rounded-full focus:outline-none"
              aria-label="Next image"
            >
              <svg className="w-6 h-6 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Lightbox Footer */}
          <div className="text-center py-6 px-6 text-white bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-[9px] font-bold uppercase tracking-wider text-stone-400">
              {filteredImages[lightboxIndex].category === "rooms"
                ? "Rooms & Interiors"
                : filteredImages[lightboxIndex].category === "dining"
                  ? "Dining & Breakfast"
                  : "Pool & Garden"}
            </p>
            <h2 className="font-serif text-xl sm:text-2xl mt-1 tracking-tight">
              {filteredImages[lightboxIndex].title}
            </h2>
          </div>
        </div>
      )}
    </main>
  );
};

export default OurGallery;
