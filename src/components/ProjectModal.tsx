"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const allImages = project
    ? [project.image, ...project.gallery].filter(Boolean)
    : [];
  const [currentImage, setCurrentImage] = useState(0);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImage(0);
  }, [project]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % allImages.length);
  const prevImage = () =>
    setCurrentImage((prev) => (prev - 1 + allImages.length) % allImages.length);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 rounded-full
                         bg-background/80 backdrop-blur-sm border border-border
                         hover:bg-muted hover:border-muted-foreground/30
                         transition-all duration-200"
              aria-label="Close modal"
            >
              <FiX size={16} />
            </button>

            {/* Image / Gallery */}
            {allImages.length > 0 ? (
              <div className="relative aspect-video bg-muted overflow-hidden rounded-t-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full bg-gradient-to-br from-white/[0.03] via-card to-white/[0.02] flex items-center justify-center"
                  >
                    <span className="text-3xl font-bold text-muted-foreground/20">
                      {project.title
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                  </motion.div>
                </AnimatePresence>

                {/* Gallery navigation */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8
                                 rounded-full bg-black/50 border border-white/10 text-white
                                 hover:bg-black/70 transition-all duration-200"
                      aria-label="Previous image"
                    >
                      <FiChevronLeft size={16} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8
                                 rounded-full bg-black/50 border border-white/10 text-white
                                 hover:bg-black/70 transition-all duration-200"
                      aria-label="Next image"
                    >
                      <FiChevronRight size={16} />
                    </button>

                    {/* Dots indicator */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                      {allImages.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImage(idx)}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                            idx === currentImage
                              ? "bg-white w-4"
                              : "bg-white/40 hover:bg-white/60"
                          }`}
                          aria-label={`Go to image ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="aspect-video bg-muted rounded-t-2xl flex items-center justify-center">
                <span className="text-3xl font-bold text-muted-foreground/20">
                  {project.title
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
              </div>
            )}

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-5">
              {/* Title */}
              <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                {project.title}
              </h2>

              {/* Goal */}
              {project.goal && (
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-1.5">
                    Problem / Goal
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.goal}
                  </p>
                </div>
              )}

              {/* Long Description or fallback to short */}
              <div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-muted text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full
                             font-semibold text-sm border border-border text-foreground
                             hover:bg-muted hover:border-muted-foreground/30
                             transition-all duration-300"
                >
                  <FiGithub size={16} />
                  View on GitHub
                </motion.a>

                {project.demoUrl && (
                  <motion.a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full
                               font-semibold text-sm bg-foreground text-background
                               hover:opacity-90
                               transition-all duration-300"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
