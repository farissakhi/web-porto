"use client";

import { motion } from "framer-motion";
import * as SiIcons from "react-icons/si";
import { skillCategories } from "@/data/skills";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import { IconType } from "react-icons";

function getIcon(iconName: string): IconType {
  const icons = SiIcons as Record<string, IconType>;
  return icons[iconName] || SiIcons.SiCoder;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies and tools I use to bring ideas to life"
      />

      <div className="space-y-10">
        {skillCategories.map((category) => (
          <div key={category.category}>
            {/* Category label with dot */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                {category.category}
              </h3>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Skills grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2.5"
            >
              {category.skills.map((skill) => {
                const Icon = getIcon(skill.icon);
                return (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 4px 20px rgba(255,255,255,0.05)",
                      borderColor: "rgba(156, 163, 175, 0.3)",
                      transition: { duration: 0.2 },
                    }}
                    className="group flex flex-col items-center gap-2 p-3.5 rounded-xl
                               bg-card border border-border
                               hover:bg-card-hover
                               transition-colors duration-300 cursor-default"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <Icon
                        size={26}
                        className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      />
                    </motion.div>
                    <span className="text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
