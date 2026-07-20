"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects, projectCategories, type ProjectCategory, type Project } from "@/data/projects";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import ProjectModal from "./ProjectModal";
import { RagChatbotIllustration } from "@/components/illustrations/RagChatbotIllustration";
import { FoodNutritionIllustration } from "@/components/illustrations/FoodNutritionIllustration";
import { SmartParkingIllustration } from "@/components/illustrations/SmartParkingIllustration";
import { FinanceManagerIllustration } from "@/components/illustrations/FinanceManagerIllustration";
import { KeshirIllustration } from "@/components/illustrations/KeshirIllustration";
import { SmartAiEditorIllustration } from "@/components/illustrations/SmartAiEditorIllustration";

const illustrationMap: Record<string, React.ComponentType> = {
  "rag-chatbot": RagChatbotIllustration,
  "food-nutrition": FoodNutritionIllustration,
  "smart-parking": SmartParkingIllustration,
  "finance-manager": FinanceManagerIllustration,
  "keshir": KeshirIllustration,
  "smart-ai-editor": SmartAiEditorIllustration,
};


const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: 10,
    transition: { duration: 0.25 },
  },
};

const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>(
    "all"
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        title="Projects"
        subtitle="A selection of projects I've built and contributed to"
      />

      {/* Filter Tabs with animated indicator */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {projectCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() =>
              setActiveFilter(cat.value as "all" | ProjectCategory)
            }
            className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300
              ${
                activeFilter === cat.value
                  ? "text-background"
                  : "text-muted-foreground hover:text-foreground border border-border hover:border-muted-foreground/30"
              }`}
          >
            {activeFilter === cat.value && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 bg-foreground rounded-full -z-10"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden
                         hover:border-muted-foreground/20
                         hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.5),0_0_20px_rgba(52,211,153,0.12),0_0_20px_rgba(34,211,238,0.08)]
                         transition-[border-color,box-shadow] duration-300 cursor-pointer"
            >
              {/* Project Thumbnail — SVG illustration or screenshot */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-full"
                >
                  {project.illustration && illustrationMap[project.illustration] ? (
                    // Render custom SVG illustration — fills card exactly like a screenshot
                    (() => {
                      const Illustration = illustrationMap[project.illustration!];
                      return (
                        <div className="absolute inset-0 w-full h-full">
                          <Illustration />
                        </div>
                      );
                    })()
                  ) : project.gallery.length > 0 ? (
                    <Image
                      src={project.gallery[0]}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-white/[0.03] via-card to-white/[0.02] flex items-center justify-center">
                      <span className="text-xl font-bold text-muted-foreground/30">
                        {project.title
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                </motion.div>

                {/* Hover overlay with quick-links */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300 flex items-center justify-center gap-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20
                               hover:bg-white/20 transition-all duration-200 text-white"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <FiGithub size={18} />
                  </motion.a>
                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20
                                 hover:bg-white/20 transition-all duration-200 text-white"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <FiExternalLink size={18} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-base font-semibold mb-2 group-hover:text-foreground transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-muted text-muted-foreground
                                 border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom links */}
              <div className="px-5 pb-4 flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground
                             hover:text-foreground transition-colors duration-300"
                >
                  <FiGithub size={13} />
                  Source Code
                </a>
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground
                               hover:text-foreground transition-colors duration-300"
                  >
                    <FiExternalLink size={13} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </SectionWrapper>
  );
}
