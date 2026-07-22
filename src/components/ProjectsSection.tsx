"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
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
          ) : project.image || project.gallery.length > 0 ? (
            <Image
              src={project.image || project.gallery[0]}
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

function AnimatedProjectCard({ project, index, totalItems, data, scrollYProgress, isMobile, activeFilter, onClick }: any) {
  // data contains { startX, startY } relative to this card's native grid position
  const isReady = !!data;
  const startX = data ? data.startX : 0;
  const startY = data ? data.startY : 0;
  
  const isActiveFilterAll = activeFilter === "all";

  // Animate from stack offset to (0,0) native grid position
  const x = useTransform(scrollYProgress, [0, 1], [isMobile ? 0 : startX, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [isMobile ? 50 : startY, 0]);

  const stackedRotate = isMobile ? 0 : (index % 2 === 0 ? index * 2 : -index * 2);
  const rotate = useTransform(scrollYProgress, [0, 1], [stackedRotate, 0]);
  
  // Scale from very small so they fit perfectly hidden behind the text, then grow as they slide out
  const stackedScale = isMobile ? 1 : 0.2;
  const scale = useTransform(scrollYProgress, [0, 1], [stackedScale, 1]);
  
  // Fade in during the first 30% of the animation so they seem to materialize from behind the text
  const opacity = isMobile ? useTransform(scrollYProgress, [0, 1], [0, 1]) : useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  // If we are filtering, we don't use the scroll animation. We just use standard layout animations.
  const motionStyle = isActiveFilterAll ? {
    x,
    y,
    rotate,
    scale,
    opacity,
    zIndex: totalItems - index,
    visibility: (isReady || isMobile) ? "visible" : "hidden",
    willChange: "transform",
  } : {
    zIndex: totalItems - index,
  };

  return (
    <motion.div
      layout={!isActiveFilterAll}
      initial={isActiveFilterAll ? false : "hidden"}
      animate={isActiveFilterAll ? undefined : "visible"}
      exit={isActiveFilterAll ? undefined : "exit"}
      variants={isActiveFilterAll ? undefined : cardVariants}
      transition={{ duration: 0.4 }}
      style={isActiveFilterAll ? (motionStyle as any) : undefined}
      className="w-full h-full"
    >
      <motion.div
        whileHover={isReady || !isActiveFilterAll ? { scale: 1.02, transition: { duration: 0.2 } } : undefined}
        onClick={() => onClick(project)}
        className="group w-full h-full rounded-2xl bg-card border border-border overflow-hidden
                   hover:border-muted-foreground/20
                   hover:shadow-[0_16px_32px_-12px_rgba(0,0,0,0.5),0_0_20px_rgba(52,211,153,0.12),0_0_20px_rgba(34,211,238,0.08)]
                   transition-[border-color,box-shadow] duration-300 cursor-pointer"
      >
        <ProjectCardContent project={project} />
      </motion.div>
    </motion.div>
  );
}

type TransformData = {
  startX: number;
  startY: number;
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
    // Start at 85% (when it enters view), finish at 55% (barely half screen) 
    // so it finishes VERY fast as requested
    offset: ["0 85%", "0 55%"],
  });

  // Apply a spring to the scroll progress to completely eliminate mouse wheel stuttering
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 120,
    mass: 0.2
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
      
      if (mobile) return; // Skip on mobile

      const cRect = containerRef.current!.getBoundingClientRect();
      const cells = Array.from(gridRef.current!.children);
      
      // Find the exact center of the "Projects" heading
      const headingEl = document.getElementById("projects-heading");
      let targetStackY = cRect.top;
      let targetStackX = cRect.left + (cRect.width / 2);

      if (headingEl) {
        const hRect = headingEl.getBoundingClientRect();
        targetStackY = hRect.top - cRect.top + (hRect.height / 2);
        targetStackX = hRect.left - cRect.left + (hRect.width / 2);
      } else {
        targetStackX = cRect.width / 2;
        targetStackY = 0;
      }

      const data = cells.map(cell => {
        const htmlCell = cell as HTMLElement;
        // Gunakan offsetLeft/Top yang mengabaikan CSS transform.
        // Ini mencegah bug recursive scaling/translating di mana posisi terbang menjauh.
        const startX = targetStackX - (htmlCell.offsetLeft + htmlCell.offsetWidth / 2);
        const startY = targetStackY - (htmlCell.offsetTop + htmlCell.offsetHeight / 2);
        
        return { startX, startY };
      });
      setTransformData(data);
    };

    timeoutId = setTimeout(measure, 100);
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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-wrap items-center justify-center gap-2 mb-12 relative z-50"
      >
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
      </motion.div>

      {/* Projects Grid / Stack */}
      <div ref={containerRef} className="relative min-h-[400px]">
        {/* Animated Cards rendered natively in their grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <AnimatedProjectCard
                key={project.title}
                project={project}
                index={index}
                totalItems={filteredProjects.length}
                data={transformData[index]}
                scrollYProgress={smoothProgress}
                isMobile={isMobile}
                activeFilter={activeFilter}
                onClick={setSelectedProject}
              />
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
