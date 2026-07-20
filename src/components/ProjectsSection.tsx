"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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

function ProjectCardContent({ project }: { project: any }) {
  return (
    <>
      {/* Project Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <div className="relative w-full h-full">
          {project.illustration && illustrationMap[project.illustration] ? (
            (() => {
              const Illustration = illustrationMap[project.illustration];
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
                {project.title.split(" ").map((w: string) => w[0]).join("")}
              </span>
            </div>
          )}
        </div>

        {/* Hover overlay with quick-links */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 text-white"
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
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 text-white"
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
          {project.techStack.map((tech: string) => (
            <span key={tech} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-muted text-muted-foreground border border-border">
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
          className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
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
            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <FiExternalLink size={13} />
            Live Demo
          </a>
        )}
      </div>
    </>
  );
}

function AnimatedProjectCard({ project, index, totalItems, data, scrollYProgress, isMobile, onClick }: any) {
  const isReady = !!data;

  // Stagger the spread based on index
  const staggerDelay = 0.08;
  const maxStart = 0.5; // leave enough room for animation to finish
  const startScroll = Math.min(index * staggerDelay, maxStart);
  const endScroll = Math.min(startScroll + 0.4, 1);

  const startX = data ? data.stackX : 0;
  const startY = data ? data.stackY : 0;
  const endX = data ? data.x : 0;
  const endY = data ? data.y : 0;

  // On mobile, just simple vertical fade/slide. On desktop, stack and spread.
  const mobileY = useTransform(scrollYProgress, [startScroll, endScroll], [50, 0]);
  const desktopX = useTransform(scrollYProgress, [startScroll, endScroll], [startX, endX]);
  const desktopY = useTransform(scrollYProgress, [startScroll, endScroll], [startY, endY]);

  const x = isMobile ? 0 : desktopX;
  const y = isMobile ? mobileY : desktopY;

  // Rotation and Scale for the "emerging from behind" effect
  const stackedRotate = isMobile ? 0 : (index % 2 === 0 ? index * 2 : -index * 2);
  const rotate = useTransform(scrollYProgress, [startScroll, endScroll], [stackedRotate, 0]);
  
  // Scale from very small (hidden behind heading) to full size
  const stackedScale = isMobile ? 1 : 0.3;
  const scale = useTransform(scrollYProgress, [startScroll, endScroll], [stackedScale, 1]);
  
  // Fade in as it emerges
  const opacity = useTransform(scrollYProgress, [startScroll, endScroll], [0, 1]);

  return (
    <motion.div
      style={{
        position: isMobile ? "relative" : "absolute",
        top: 0,
        left: 0,
        width: isMobile ? "100%" : data?.width || "100%",
        height: isMobile ? "auto" : data?.height || "auto",
        x,
        y,
        rotate,
        scale,
        opacity,
        zIndex: totalItems - index,
        visibility: (isReady || isMobile) ? "visible" : "hidden",
        willChange: "transform",
      }}
      whileHover={isReady ? { scale: 1.02, transition: { duration: 0.2 } } : undefined}
      onClick={() => onClick(project)}
      className="group rounded-2xl bg-card border border-border overflow-hidden
                 hover:border-muted-foreground/20
                 hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.5),0_0_20px_rgba(52,211,153,0.12),0_0_20px_rgba(34,211,238,0.08)]
                 transition-[border-color,box-shadow] duration-300 cursor-pointer"
    >
      <ProjectCardContent project={project} />
    </motion.div>
  );
}

type TransformData = {
  x: number;
  y: number;
  width: number;
  height: number;
  stackX: number;
  stackY: number;
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const gridRef = React.useRef<HTMLDivElement>(null);
  
  const [transformData, setTransformData] = useState<TransformData[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Track scroll through the section to drive the animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start spreading earlier and finish later for a smoother, longer animation
    offset: ["0 85%", "0 10%"],
  });

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  React.useEffect(() => {
    if (!gridRef.current || !containerRef.current) return;

    let timeoutId: NodeJS.Timeout;

    const measure = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (mobile) return; // Skip measurement on mobile

      const cRect = containerRef.current!.getBoundingClientRect();
      const cells = Array.from(gridRef.current!.children);
      
      // Calculate heading position if available, to stack behind it
      const headingEl = document.getElementById("projects-heading");
      let hCenterY = 0;
      let hCenterX = cRect.width / 2;

      if (headingEl) {
        const hRect = headingEl.getBoundingClientRect();
        hCenterY = hRect.top - cRect.top + (hRect.height / 2);
        hCenterX = hRect.left - cRect.left + (hRect.width / 2);
      }
      
      const data = cells.map(cell => {
        const rect = cell.getBoundingClientRect();
        return {
          x: rect.left - cRect.left,
          y: rect.top - cRect.top,
          width: rect.width,
          height: rect.height,
          stackX: hCenterX - (rect.width / 2),
          stackY: hCenterY - (rect.height / 2), // Stack exactly behind the center of the heading
        };
      });
      setTransformData(data);
    };

    // Wait a brief moment for layout to settle, especially if fonts are loading
    timeoutId = setTimeout(measure, 50);

    // Use normal window resize instead of ResizeObserver to prevent scroll-triggered stuttering on mobile
    window.addEventListener("resize", measure);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", measure);
    };
  }, [filteredProjects]);

  return (
    <SectionWrapper id="projects">
      <div id="projects-heading" className="relative z-50">
        <SectionHeading
          title="Projects"
          subtitle="A selection of projects I've built and contributed to"
        />
      </div>

      {/* Filter Tabs with animated indicator */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12 relative z-50">
        {projectCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveFilter(cat.value as "all" | ProjectCategory)}
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

      {/* Projects Grid / Stack */}
      <div ref={containerRef} className="relative min-h-[400px]">
        {/* Invisible Grid for exact pixel measurements (Desktop only) */}
        {!isMobile && (
          <div ref={gridRef} className="grid gap-5 grid-cols-2 lg:grid-cols-3 opacity-0 pointer-events-none" aria-hidden="true">
            {filteredProjects.map((project) => (
              <div key={`dummy-${project.title}`} className="w-full rounded-2xl border border-transparent">
                <ProjectCardContent project={project} />
              </div>
            ))}
          </div>
        )}

        {/* Animated Cards */}
        <div className={isMobile ? "grid grid-cols-1 gap-5" : "absolute inset-0 pointer-events-none"}>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <div key={project.title} className={!isMobile ? "pointer-events-auto" : ""}>
                <AnimatedProjectCard
                  project={project}
                  index={index}
                  totalItems={filteredProjects.length}
                  data={transformData[index]}
                  scrollYProgress={scrollYProgress}
                  isMobile={isMobile}
                  onClick={setSelectedProject}
                />
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </SectionWrapper>
  );
}
