"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Stay" },
  { href: "/experiences", label: "Experience" },
  { href: "/gallery", label: "Gallery" },
  { href: "/location", label: "Location" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between w-full">
      {/* Brand Logo */}
      <Link href="/" className="z-50 block">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.08em] text-white leading-none">
          Embiente
        </h2>
        <p className="mt-0.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.22em] text-white/70">
          Guest House · Negombo
        </p>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 text-white text-[10px] font-semibold uppercase tracking-[0.16em]">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-stone-300 transition-colors relative group py-1"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* Desktop CTA Button */}
      <div className="hidden lg:flex justify-end">
        <a
          href="#book"
          className="border border-white/80 bg-white/10 backdrop-blur-sm px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-white hover:text-stone-900 shadow-sm"
        >
          Book your stay
        </a>
      </div>

      {/* Mobile Hamburger Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden z-50 p-2 text-white focus:outline-none"
        aria-label="Toggle Navigation Menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between items-end">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
            className="h-0.5 bg-white rounded-full transition-all duration-300"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="h-0.5 w-3/4 bg-white rounded-full transition-all duration-300"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -9, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
            className="h-0.5 bg-white rounded-full transition-all duration-300"
          />
        </div>
      </button>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#16271c]/95 backdrop-blur-xl flex flex-col justify-between px-8 py-20 text-white lg:hidden"
          >
            {/* Background Decorative Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[12rem] text-white/5 pointer-events-none select-none">
              E
            </div>

            <div className="flex flex-col gap-6 mt-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-stone-400">
                Navigation
              </p>
              <div className="flex flex-col gap-5">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="font-serif italic text-3xl sm:text-4xl text-stone-100 hover:text-stone-300 transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col gap-4 pt-6 border-t border-stone-700/60"
            >
              <a
                href="#book"
                onClick={() => setIsOpen(false)}
                className="w-full text-center border border-white bg-white py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-stone-900 transition-colors"
              >
                Book your stay
              </a>
              <div className="flex items-center justify-between text-[10px] text-stone-400 font-semibold tracking-widest uppercase">
                <span>Negombo, Sri Lanka</span>
                <span>+94 76 374 1903</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
