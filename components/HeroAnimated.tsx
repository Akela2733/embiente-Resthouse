"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const HeroAnimated = () => {
  return (
    <section className="absolute inset-0 z-0 overflow-hidden" aria-label="Embiente Guest House">
      {/* Background image — subtle scale up on mount */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease }}
      >
        <Image
          src="/hero.png"
          alt="Pool and gardens at Embiente Guest House"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Gradient overlay — fades in */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
      />

      {/* Content */}
      <div className="absolute inset-x-5 bottom-8 text-white sm:inset-x-12 sm:bottom-16 lg:bottom-20">
        {/* Eyebrow */}
        <motion.p
          className="mb-3 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.24em] sm:tracking-[0.28em] text-white/80"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
        >
          Embiente Guest House · Negombo, Sri Lanka
        </motion.p>

        {/* Headline — line by line reveal */}
        <h1 className="max-w-3xl font-serif italic text-4xl sm:text-6xl lg:text-[7rem] leading-[0.95] sm:leading-[0.92] tracking-tight">
          {["A little oasis.", "Close to the sea."].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.85 + i * 0.18,
                  ease,
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* CTAs */}
        <motion.div
          className="mt-6 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-7 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4, ease }}
        >
          <a
            href="#book"
            className="bg-white px-6 py-3.5 sm:px-7 sm:py-4 text-black transition-all duration-300 hover:bg-stone-100 hover:shadow-lg hover:-translate-y-0.5"
          >
            Book your stay
          </a>
          <a
            href="#experience"
            className="group flex items-center gap-2.5 sm:gap-3 hover:text-stone-200 transition-colors py-2"
          >
            Explore Embiente{" "}
            <motion.span
              className="text-base sm:text-lg inline-block"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAnimated;
