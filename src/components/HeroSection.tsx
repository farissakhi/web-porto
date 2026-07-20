"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import { profile } from "@/data/profile";

const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const heroChild = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, 100]);
  const bgY = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-6 bg-background"
    >
      {/* Ambient B&W "City Light" Blobs */}
      {!prefersReduced && (
        <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 20, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-zinc-300/[0.04] rounded-full blur-[140px]"
          />
          <motion.div
            animate={{
              x: [0, -40, 30, 0],
              y: [0, 30, -40, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px]"
          />
        </motion.div>
      )}

      {/* Large Portrait Image Background */}
      <motion.div 
        style={!prefersReduced ? { y: imageY } : {}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0 flex justify-end"
      >
        <div 
          className="relative w-full h-[90vh] lg:h-screen lg:w-[80vw] xl:w-[70vw]"
          style={{
            maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
          }}
        >
          <Image
            src={profile.profileImage}
            alt={profile.name}
            fill
            quality={100}
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover object-[85%_top] lg:object-[85%_center] grayscale-[20%]"
            priority
          />
          {/* Gradient overlay on the left to blend into the black background seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent w-[70%] lg:w-[50%]" />
        </div>
      </motion.div>

      {/* Floating Social Widget (Top Right) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute top-28 right-6 lg:right-12 z-20 hidden md:block"
      >
        <div className="glass px-6 py-4 rounded-3xl shadow-2xl flex flex-col items-center gap-2 border-white/10 bg-black/40">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-semibold">Connect</span>
          <SocialIcons className="grid grid-cols-2 gap-3" />
        </div>
      </motion.div>

      {/* Main Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col h-full pt-32 pb-20 justify-between min-h-[90vh]">
        
        {/* Top/Center Left Text */}
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mt-12 lg:mt-24"
        >
          <motion.div variants={heroChild} className="mb-4 inline-flex items-center gap-2">
            <span className="text-foreground/90 font-medium tracking-wide">Hey 👋 I&apos;m {profile.name.split(" ")[0]}</span>
          </motion.div>

          <motion.h1
            variants={heroChild}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-8 text-foreground"
          >
            Software &<br />
            AI Developer
          </motion.h1>

          <motion.div variants={heroChild} className="flex flex-wrap items-center gap-4">
            <a
              href={profile.cvDrivePreview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm
                         bg-foreground text-background hover:scale-105 active:scale-95
                         transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              Get My CV
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm
                         border border-border/50 text-foreground/80 glass hover:bg-white/5
                         transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View Projects
              <FiArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Elements */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mt-32 lg:mt-auto">
          {/* Bottom Left: Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-sm"
          >
            <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium">
              Informatics student specializing in Artificial Intelligence. Passionate about building AI-driven solutions, full-stack applications, and bridging the gap between design and scalable engineering.
            </p>
          </motion.div>

          {/* Bottom Right: Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center gap-8 sm:gap-12"
          >
            {profile.aboutStats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">{stat.value}</span>
                <span className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-widest font-semibold">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
