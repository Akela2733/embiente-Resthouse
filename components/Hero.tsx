import Image from "next/image";

const Hero = () => {
  return (
    <section className="absolute inset-0 z-0 overflow-hidden" aria-label="Embiente Guest House">
      <Image
        src="/hero.png"
        alt="Pool and gardens at Embiente Guest House"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
      <div className="absolute inset-x-6 bottom-12 text-white sm:inset-x-16 sm:bottom-16 lg:bottom-20">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] sm:text-[11px] text-white/80">
          Embiente Guest House · Negombo, Sri Lanka
        </p>
        <h1 className="max-w-3xl font-serif italic text-5xl leading-[0.92] tracking-tight sm:text-6xl lg:text-[7rem]">
          A little oasis.
          <br />
          Close to the sea.
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-7 text-xs font-semibold uppercase tracking-[0.16em] sm:mt-10">
          <a
            href="#book"
            className="bg-white px-7 py-4 text-black transition-colors hover:bg-stone-200"
          >
            Book your stay
          </a>
          <a href="#experience" className="group flex items-center gap-3 hover:text-stone-200">
            Explore Embiente <span className="text-lg transition-transform group-hover:translate-y-1">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
