"use client";

import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import Image from "next/image";
import SocialIcons from "./SocialIcons";
import { profile } from "@/data/profile";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-white/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[100px]" />
      </div>

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
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" as const }}
            className="flex justify-center lg:justify-start order-1"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-white/[0.03] rounded-full blur-2xl" />

              {/* Border ring */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-[2px] bg-gradient-to-b from-white/20 to-white/5">
                <div className="w-full h-full rounded-full bg-card overflow-hidden border border-border">
                  <Image
                    src={profile.profileImage}
                    alt={profile.name}
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as const }}
            className="text-center lg:text-left order-2"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-muted-foreground font-medium">
                Available for work
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
              Hi, I&apos;m{" "}
              <span className="text-foreground">{profile.name}</span>
            </h1>

            <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
              <div className="h-px w-8 bg-muted-foreground/50" />
              <p className="text-lg sm:text-xl font-medium text-muted-foreground">
                {profile.role}
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              {profile.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8">
              <a
                href={profile.cvFile}
                download
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm
                           bg-foreground text-background
                           hover:opacity-90 hover:scale-105
                           transition-all duration-300"
              >
                <FiDownload
                  size={16}
                  className="group-hover:animate-bounce"
                />
                Download CV
              </a>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
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
              </a>
            </div>

            {/* Social Icons */}
            <SocialIcons showEmail className="justify-center lg:justify-start" />
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
