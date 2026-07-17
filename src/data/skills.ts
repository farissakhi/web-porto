// ============================================================
// Skills Data — Tambah/kurangi skill di sini tanpa edit komponen
// ============================================================

export interface Skill {
  name: string;
  icon: string; // icon key dari react-icons/si (Simple Icons)
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "HTML5", icon: "SiHtml5" },
      { name: "CSS3", icon: "SiCss3" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Python", icon: "SiPython" },
      { name: "Express", icon: "SiExpress" },
      { name: "Laravel", icon: "SiLaravel" },
      { name: "FastAPI", icon: "SiFastapi" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "Appwrite", icon: "SiAppwrite" },
      { name: "Firebase", icon: "SiFirebase" },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "Docker", icon: "SiDocker" },
      { name: "Vercel", icon: "SiVercel" },
      { name: "VS Code", icon: "SiVisualstudiocode" },
      { name: "Figma", icon: "SiFigma" },
      { name: "Linux", icon: "SiLinux" },
    ],
  },
];
