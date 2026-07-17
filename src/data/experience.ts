// ============================================================
// Experience Data — Isi pengalaman akademik & organisasi di sini
// ============================================================

export interface Education {
  id: string;
  institution: string;
  logo: string; // path logo kampus, taruh di /public/logos/
  degree: string;
  startDate: string;
  endDate: string; // atau "Present"
  gpa: string;
  description: string;
  achievements: string[];
}

export interface OrgRole {
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

export interface Organization {
  id: string;
  name: string;
  logo: string; // path logo organisasi, taruh di /public/logos/
  roles: OrgRole[];
}

// Academic / Education
export const education: Education[] = [
  {
    id: "edu-1",
    institution: "President University",
    logo: "/logos/president-university.png", // Pastikan gambar barumu di-rename jadi ini dan ditaruh di folder public/logos
    degree: "Informatics (Artificial Intelligence Focus)",
    startDate: "2024",
    endDate: "Present",
    gpa: "", // TODO: isi GPA kalau mau ditampilkan
    description: "Pursuing a degree in Informatics with a specialization in Artificial Intelligence. Focused on developing scalable machine learning models and intelligent applications.",
    achievements: [
      "Built a Multi-Tenant RAG Chatbot using FastAPI, ChromaDB, and various LLM models (Groq, TinyLlama, Qwen2)",
      "Developed a Machine Learning-based Food Nutrition Prediction application",
    ],
  },
];

// Organizational Experience
export const organizations: Organization[] = [
  {
    id: "org-1",
    name: "PUFA COMPUTER SCIENCE (BEM)",
    logo: "/logos/pufa.jpg",
    roles: [
      {
        role: "Vice Chairperson",
        startDate: "Jan 2024", // TODO: Sesuaikan tanggal
        endDate: "Present",
        description: "Assisting the Chairperson in leading the organization and managing internal and external affairs...", // TODO: Sesuaikan deskripsi
        achievements: [],
      },
      {
        role: "Member of Student Welfare Advocacy",
        startDate: "Jan 2023", // TODO: Sesuaikan tanggal
        endDate: "Dec 2023",
        description: "Advocating for student rights and welfare, mediating between students and the faculty...", // TODO: Sesuaikan deskripsi
        achievements: [],
      },
    ],
  },
];
