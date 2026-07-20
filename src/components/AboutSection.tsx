"use client";

import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { profile } from "@/data/profile";

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const statsItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

const wordContainer = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      staggerChildren: 0.02,
      delayChildren: 0.2,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function AboutSection() {
  const aboutWords = profile.aboutText?.split(" ") || [];

  return (
    <SectionWrapper id="about">
      <SectionHeading
        title="About Me"
        subtitle="A little more about who I am and what drives me"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
        {/* Left: About text */}
        <motion.div
          variants={wordContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="lg:col-span-3"
        >
          <div className="space-y-4">
            <motion.div variants={wordVariant} className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                Who am I
              </span>
              <div className="flex-1 h-px bg-border" />
            </motion.div>

            {profile.aboutText ? (
              <div className="text-base sm:text-lg text-muted-foreground leading-relaxed flex flex-wrap">
                {aboutWords.map((word, i) => (
                  <motion.span
                    key={i}
                    variants={wordVariant}
                    className="mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            ) : (
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                <span className="italic text-muted-foreground/50">
                  Your story goes here — tell the world about your background,
                  what drives your passion for development, and what makes you
                  unique. Edit the <code className="text-xs bg-muted px-1.5 py-0.5 rounded">aboutText</code> field
                  in <code className="text-xs bg-muted px-1.5 py-0.5 rounded">src/data/profile.ts</code> to get started.
                </span>
              </p>
            )}
          </div>
        </motion.div>

        {/* Right: Stats grid */}
        <motion.div
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {profile.aboutStats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={statsItemVariants}
                whileHover={{
                  y: -3,
                  boxShadow: "0 4px 20px rgba(255,255,255,0.04)",
                  transition: { duration: 0.2 },
                }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border
                           hover:border-muted-foreground/20 transition-colors duration-300 cursor-default"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-muted">
                  <span className="text-lg font-bold text-foreground">
                    {stat.value || "—"}
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
