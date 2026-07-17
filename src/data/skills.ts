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
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: "SiPython" },
      { name: "Java", icon: "SiOpenjdk" },
      { name: "PHP", icon: "SiPhp" },
      { name: "C++", icon: "SiCplusplus" },
      { name: "SQL", icon: "SiCoder" },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Scikit-learn", icon: "SiScikitlearn" },
      { name: "TensorFlow", icon: "SiTensorflow" },
      { name: "Keras", icon: "SiKeras" },
      { name: "OpenCV", icon: "SiOpencv" },
    ],
  },
  {
    category: "AI System Development",
    skills: [
      { name: "LangChain", icon: "SiLangchain" },
      { name: "Hugging Face", icon: "SiHuggingface" },
      { name: "ChromaDB", icon: "SiCoder" },
    ],
  },
  {
    category: "Data Science & Analytics",
    skills: [
      { name: "Pandas", icon: "SiPandas" },
      { name: "NumPy", icon: "SiNumpy" },
      { name: "Matplotlib", icon: "SiCoder" },
    ],
  },
  {
    category: "Web & Software Development",
    skills: [
      { name: "Laravel", icon: "SiLaravel" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "Flask", icon: "SiFlask" },
      { name: "Streamlit", icon: "SiStreamlit" },
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Jupyter Notebook", icon: "SiJupyter" },
      { name: "Google Colab", icon: "SiGooglecolab" },
      { name: "VS Code", icon: "SiCoder" },
      { name: "Figma", icon: "SiFigma" },
      { name: "Android Studio", icon: "SiAndroidstudio" },
      { name: "Cisco Packet Tracer", icon: "SiCisco" },
    ],
  },
];
