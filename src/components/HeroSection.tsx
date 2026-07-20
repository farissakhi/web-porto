"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import { profile } from "@/data/profile";

const roles = ["Full Stack Developer", "AI/ML Enthusiast", "Problem Solver"];
const CYCLE_INTERVAL = 3000;

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const heroChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const wordContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.6 },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  const { scrollY } = useScroll();
  const imageRotate = useTransform(scrollY, [0, 600], [0, 15]);
  const imageScale = useTransform(scrollY, [0, 600], [1, 0.9]);
  const bgY = useTransform(scrollY, [0, 1000], [0, 300]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, CYCLE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const descriptionWords = profile.description.split(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden scroll-mt-6"
    >
      {/* Ambient gradient blobs — slow looping motion, very low opacity */}
      {!prefersReduced && (
        <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              x: [0, 60, -30, 0],
              y: [0, -40, 20, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-400/[0.07] rounded-full blur-[140px]"
          />
          <motion.div
            animate={{
              x: [0, -50, 40, 0],
              y: [0, 30, -50, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/[0.06] rounded-full blur-[120px]"
          />
        </motion.div>
      )}

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full py-20 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Profile Image with floating and scroll animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            style={!prefersReduced ? { rotate: imageRotate, scale: imageScale } : {}}
            className="flex justify-center lg:justify-start order-1"
          >
            <div className="relative">
              {/* Floating wrapper */}
              <motion.div
                animate={
                  prefersReduced
                    ? {}
                    : { y: [0, -10, 0] }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 border border-border bg-card/80 shadow-2xl"
              >
                {/* Inner ring */}
                <div className="relative w-full h-full rounded-full border border-muted-foreground/20 overflow-hidden">
                  <Image
                    src={profile.profileImage}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content — staggered fade-in on mount */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2"
          >
            {/* Badge */}
            <motion.div
              variants={heroChild}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-muted-foreground font-medium">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              variants={heroChild}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </motion.h1>

            {/* Cycling role text */}
            <motion.div
              variants={heroChild}
              className="flex items-center gap-3 justify-center lg:justify-start mb-6"
            >
              <div className="h-px w-8 bg-muted-foreground/50" />
              <div className="relative h-7 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={roleIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="text-lg sm:text-xl font-medium text-muted-foreground whitespace-nowrap"
                  >
                    {roles[roleIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Description Text Reveal (Per Word) */}
            <motion.div
              variants={wordContainer}
              className="text-base text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 flex flex-wrap justify-center lg:justify-start"
            >
              {descriptionWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                  className="mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={heroChild}
              className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href={profile.cvDrivePreview}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm
                           bg-foreground text-background
                           hover:opacity-90 hover:shadow-[0_0_20px_rgba(52,211,153,0.35)]
                           transition-all duration-300"
              >
                <FiDownload
                  size={16}
                  className="group-hover:animate-bounce"
                />
                Get My CV
              </motion.a>

              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm
                           border border-border text-foreground
                           hover:bg-card hover:border-muted-foreground/30
                           transition-all duration-300"
              >
                View Projects
                <FiArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={heroChild}>
              <SocialIcons showEmail className="justify-center lg:justify-start" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-border flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
