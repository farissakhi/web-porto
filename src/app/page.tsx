"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import ScrollProgress from "@/components/ScrollProgress";
import StarryBackground from "@/components/StarryBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ScrollProgress />
      <div className="hidden md:block">
        <Navbar />
      </div>
      <MobileNav />
      <StarryBackground />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </motion.div>
  );
}
