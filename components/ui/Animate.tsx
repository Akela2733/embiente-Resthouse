"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ─────────────────────────────────────────────────────
   Word-by-word text reveal with clip-path slide-up
   Usage: <TextReveal text="A little oasis." tag="h1" className="..." />
───────────────────────────────────────────────────── */
interface TextRevealProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function TextReveal({
  text,
  tag: Tag = "h2",
  className = "",
  delay = 0,
  staggerDelay = 0.08,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  const words = text.split(" ");

  return (
    <Tag ref={ref as React.RefObject<never>} className={`overflow-hidden ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.75,
              delay: delay + i * staggerDelay,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ─────────────────────────────────────────────────────
   Multi-line text reveal (splits on <br /> markers)
   Pass lines as string[] for multi-line headings.
   Usage: <TextRevealLines lines={["A little oasis.", "Close to the sea."]} ... />
───────────────────────────────────────────────────── */
interface TextRevealLinesProps {
  lines: string[];
  tag?: "h1" | "h2" | "h3";
  className?: string;
  delay?: number;
}

export function TextRevealLines({
  lines,
  tag: Tag = "h2",
  className = "",
  delay = 0,
}: TextRevealLinesProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-60px" });

  return (
    <Tag ref={ref as React.RefObject<never>} className={className}>
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "105%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: delay + lineIdx * 0.14,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* ─────────────────────────────────────────────────────
   Fade + slide-up on scroll (general purpose)
   Usage: <FadeUp delay={0.2}><p>...</p></FadeUp>
───────────────────────────────────────────────────── */
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
}

export function FadeUp({ children, delay = 0, duration = 0.7, className = "", y = 28 }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────
   Fade + slide-in from left
───────────────────────────────────────────────────── */
export function FadeLeft({ children, delay = 0, className = "" }: Omit<FadeUpProps, "y">) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────
   Fade + slide-in from right
───────────────────────────────────────────────────── */
export function FadeRight({ children, delay = 0, className = "" }: Omit<FadeUpProps, "y">) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────
   Stagger container — animates children in sequence
   Usage:
     <Stagger>
       <StaggerItem>...</StaggerItem>
       <StaggerItem>...</StaggerItem>
     </Stagger>
───────────────────────────────────────────────────── */
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export function Stagger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────
   Image reveal — a wipe overlay slides away to reveal
   Usage: <ImageReveal delay={0.2}><Image ... /></ImageReveal>
───────────────────────────────────────────────────── */
export function ImageReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {children}
      <motion.div
        className="absolute inset-0 bg-[#f4f0e8] origin-right z-10"
        initial={{ scaleX: 1 }}
        animate={isInView ? { scaleX: 0 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   Eyebrow label (small uppercase label) — fades in
   with a line that draws itself
───────────────────────────────────────────────────── */
export function EyebrowReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
