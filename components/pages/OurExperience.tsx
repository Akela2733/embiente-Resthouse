"use client";

import Image from "next/image";
import Link from "next/link";
import { EyebrowReveal, TextRevealLines, FadeUp, FadeLeft, FadeRight, Stagger, StaggerItem, ImageReveal } from "@/components/ui/Animate";

const highlights = [
  { title: "Beach walks", copy: "Just a few minutes away from the guest house.", image: "/stay/beach.jpg" },
  { title: "Pool days", copy: "Swim, rest and cool down.", image: "/pool.png" },
  { title: "Local flavours", copy: "Fresh, local and inspired by traditional Sri Lankan cuisine.", image: "/stay/breakfast.png" },
  { title: "Peaceful corners", copy: "Find your own quiet spot among the greenery.", image: "/stay/quiet.jpg" },
];

const OurExperience = () => {
  return (
    <main className="bg-[#f4f0e8] text-stone-800">
      <section className="relative isolate min-h-[390px] overflow-hidden px-6 py-10 sm:px-16 md:min-h-[470px]">
        <Image src="/stay/beach2.png" alt="Sunset over Negombo Beach" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/25 to-black/10" />
        <nav className="relative flex items-center justify-between text-white">
          <Link href="/" className="font-serif text-2xl tracking-[0.12em]">EMBIENTE</Link>
          <Link href="/" className="border border-white/60 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.14em] transition-all hover:bg-white hover:text-stone-900">Back home</Link>
        </nav>
        <div className="absolute bottom-12 left-6 sm:left-16">
          <EyebrowReveal>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-stone-200">Discover Negombo</p>
          </EyebrowReveal>
          <TextRevealLines lines={["Our experiences"]} tag="h1" className="font-serif italic text-5xl leading-none tracking-tight text-white sm:text-6xl" delay={0.1} />
          <FadeUp delay={0.25}>
            <p className="mt-3 text-sm text-stone-200">Discover the beauty, culture and calm of Negombo.</p>
          </FadeUp>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:gap-16">
          <FadeLeft className="max-w-xs">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-stone-500">Experience Embiente</p>
              <h2 className="mt-5 font-serif italic text-4xl leading-[0.98]">More than a stay — a journey.</h2>
              <div className="my-7 h-px w-8 bg-stone-600" />
              <p className="text-sm leading-7 text-stone-600">From peaceful beach walks to local flavours and cultural gems, Embiente creates experiences that make your stay truly memorable.</p>
            </div>
          </FadeLeft>
          <ImageReveal className="aspect-[1.48/1]">
            <Image src="/stay/beach2.png" alt="People enjoying a Negombo Beach sunset" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
          </ImageReveal>
        </div>

        <div className="mt-16">
          <div className="mb-7 flex items-center gap-4"><h2 className="font-serif text-3xl">Highlights</h2><span className="h-px w-10 bg-stone-400" /></div>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <StaggerItem key={highlight.title}>
                <article className="border border-stone-300 bg-[#f8f5ed] p-3 transition-all duration-300 hover:shadow-md">
                  <ImageReveal className="aspect-[1.58/1]">
                    <Image src={highlight.image} alt={highlight.title} fill sizes="(max-width: 640px) 100vw, 44vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                  </ImageReveal>
                  <div className="px-1 pb-1 pt-4"><h3 className="font-serif text-xl leading-none">{highlight.title}</h3><p className="mt-2 text-[11px] leading-5 text-stone-600">{highlight.copy}</p></div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-14 text-white sm:px-16 sm:py-16">
        <Image src="/places.webp" alt="Tropical garden at Embiente" fill sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-[#173021]/85" />
        <FadeUp className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div><p className="font-serif italic text-4xl leading-none">Let us make it special.</p><p className="mt-3 max-w-sm text-sm leading-6 text-stone-200">Whether you&apos;re here for rest, adventure or a little of both — we&apos;ll help you experience the best of Negombo.</p></div>
          <a href="#contact" className="border border-white bg-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-stone-800 transition-all duration-300 hover:bg-transparent hover:text-white hover:shadow-lg">Get in touch →</a>
        </FadeUp>
      </section>
    </main>
  );
};

export default OurExperience;
