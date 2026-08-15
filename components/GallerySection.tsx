"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { EyebrowReveal, TextRevealLines, FadeUp, FadeLeft, ImageReveal } from "@/components/ui/Animate";

const galleryItems = [
  { src: "/gallary/gallarycover1.png", alt: "Swimming pool at Embiente", title: "Tranquil Pool" },
  { src: "/gallary/gallarycover2.png", alt: "Sri Lankan breakfast at Embiente", title: "Fresh Breakfast" },
  { src: "/stay/breakfast.png", alt: "Cozy double bedroom", title: "Deluxe Room" },
  { src: "/stay/Budget Double Room.png", alt: "Green gardens path", title: "Lush Gardens" },
];

const GallerySection = () => {
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);

  return (
    <section
      id="gallery-section"
      className="bg-[#f4f0e8] px-4 py-12 text-stone-800 sm:px-12 lg:px-16 lg:py-16"
    >
      <div className="mx-auto max-w-7xl border-t border-stone-300 pt-10 sm:pt-16 lg:pt-24 pb-4">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_2.2fr] lg:gap-16 items-center">
          
          {/* Text zone */}
          <FadeLeft>
            <div className="max-w-xs flex flex-col justify-center">
              <EyebrowReveal>
                <p className="mb-3 sm:mb-7 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                  Gallery / 05
                </p>
              </EyebrowReveal>
              <TextRevealLines
                lines={["A glimpse", "of paradise."]}
                tag="h2"
                className="font-serif italic text-3xl sm:text-5xl leading-[1.02] tracking-tight text-stone-900"
                delay={0.1}
              />
              <FadeUp delay={0.35}>
                <div className="my-5 sm:my-7 h-px w-8 bg-stone-600" />
                <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-stone-600">
                  Take a visual tour around our guest house. Explore our tranquil gardens, modern rooms, and refreshing pool.
                </p>
                <Link
                  href="/gallery"
                  className="mt-6 sm:mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.17em] text-stone-900 transition-opacity hover:opacity-60"
                >
                  <span>View full gallery</span>
                  <span aria-hidden="true" className="text-base">→</span>
                </Link>
              </FadeUp>
            </div>
          </FadeLeft>

          {/* ─────────────────────────────────────────────────────────────
              MOBILE RESPONSIVE GALLERY (< 640px Viewports)
          ───────────────────────────────────────────────────────────── */}
          <div className="block sm:hidden w-full">
            {/* Featured Active Image Card */}
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-stone-300/80 shadow-md">
              <Image
                src={galleryItems[activeMobileIdx].src}
                alt={galleryItems[activeMobileIdx].alt}
                fill
                priority
                sizes="100vw"
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-stone-300">
                  Photo {activeMobileIdx + 1} of {galleryItems.length}
                </p>
                <h3 className="font-serif italic text-lg leading-tight mt-0.5">
                  {galleryItems[activeMobileIdx].title}
                </h3>
              </div>
            </div>

            {/* Thumbnail Selector Row */}
            <div className="grid grid-cols-4 gap-2 mt-3">
              {galleryItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMobileIdx(idx)}
                  className={`relative aspect-square w-full overflow-hidden border transition-all duration-300 ${
                    activeMobileIdx === idx
                      ? "border-stone-900 ring-2 ring-stone-800 scale-95"
                      : "border-stone-300 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Mobile View Full Gallery Button */}
            <Link
              href="/gallery"
              className="mt-5 block w-full text-center border border-stone-800 bg-stone-900 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f4f0e8] transition-all hover:bg-transparent hover:text-stone-900"
            >
              See All 17 Photos →
            </Link>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              DESKTOP ASYMMETRICAL GALLERY GRID (≥ 640px Viewports)
          ───────────────────────────────────────────────────────────── */}
          <div className="hidden sm:block w-full">
            <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
              <div className="space-y-4 lg:space-y-6">
                <ImageReveal className="aspect-[4/5]" delay={0.2}>
                  <Link href="/gallery" className="relative block w-full h-full group">
                    <Image
                      src="/gallary/gallarycover1.png"
                      alt="Swimming pool at Embiente"
                      fill
                      sizes="(max-width: 640px) 100vw, 35vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-[9px] font-bold uppercase tracking-[0.18em]">View Gallery</span>
                    </div>
                  </Link>
                </ImageReveal>

                <ImageReveal className="aspect-square" delay={0.38}>
                  <Link href="/gallery" className="relative block w-full h-full group">
                    <Image
                      src="/gallary/gallarycover2.png"
                      alt="Sri Lankan breakfast at Embiente"
                      fill
                      sizes="(max-width: 640px) 100vw, 35vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-[9px] font-bold uppercase tracking-[0.18em]">View Gallery</span>
                    </div>
                  </Link>
                </ImageReveal>
              </div>

              <div className="space-y-4 lg:space-y-6 sm:pt-12">
                <ImageReveal className="aspect-square" delay={0.52}>
                  <Link href="/gallery" className="relative block w-full h-full group">
                    <Image
                      src="/stay/breakfast.png"
                      alt="Cozy double bedroom"
                      fill
                      sizes="(max-width: 640px) 100vw, 35vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-[9px] font-bold uppercase tracking-[0.18em]">View Gallery</span>
                    </div>
                  </Link>
                </ImageReveal>

                <ImageReveal className="aspect-[4/5]" delay={0.68}>
                  <Link href="/gallery" className="relative block w-full h-full group">
                    <Image
                      src="/stay/Budget Double Room.png"
                      alt="Green gardens path"
                      fill
                      sizes="(max-width: 640px) 100vw, 35vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-[9px] font-bold uppercase tracking-[0.18em]">View Gallery</span>
                    </div>
                  </Link>
                </ImageReveal>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GallerySection;
