// ============================================================
// Projects Data — Isi project Anda di sini tanpa edit komponen
// ============================================================

export type ProjectCategory = "web" | "ai-ml" | "mobile";

export interface Project {
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  githubUrl: string;
  demoUrl?: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    title: "Multi-Tenant RAG Chatbot",
    description:
      "Sistem chatbot berbasis Retrieval-Augmented Generation (RAG) multi-tenant untuk customer service, dengan frontend Next.js + TypeScript dan backend FastAPI. Menggunakan embedding BGE, vector database ChromaDB, hybrid retrieval (vector + BM25), serta mendukung banyak model LLM (Groq, TinyLlama, Phi-2, Qwen2).",
    image: "/images/projects/nlp-project.jpg", // TODO: ganti gambar
    category: "ai-ml",
    githubUrl: "https://github.com/RickWijaya/NLP_Project",
    techStack: ["Next.js", "TypeScript", "Python", "FastAPI", "ChromaDB"],
  },
  {
    title: "Food Prediction Nutrition",
    description:
      "Aplikasi berbasis machine learning untuk memprediksi kandungan nutrisi dari makanan.",
    image: "/images/projects/food-prediction.jpg", // TODO: ganti gambar
    category: "ai-ml",
    githubUrl: "https://github.com/farissakhi/food_prediction_nutrition",
    techStack: ["Python"],
  },
  {
    title: "Smart Parking System",
    description:
      "Sistem parkir pintar untuk memantau dan mengelola ketersediaan slot parkir.",
    image: "/images/projects/smart-parking.jpg", // TODO: ganti gambar
    category: "web",
    githubUrl: "https://github.com/farissakhi/smart-parking-system",
    techStack: ["HTML", "JavaScript"],
  },
  {
    title: "Finance Manager",
    description:
      "Aplikasi untuk mengelola dan mencatat keuangan pribadi.",
    image: "/images/projects/finance-manager.jpg", // TODO: ganti gambar
    category: "mobile",
    githubUrl: "https://github.com/farissakhi/finance_manager",
    techStack: ["Java"],
  },
  {
    title: "Keshir",
    description:
      "Coming soon.", // TODO: isi deskripsi project Keshir
    image: "/images/projects/keshir.jpg", // TODO: ganti gambar
    category: "web", // TODO: tentukan kategori yang tepat (web/ai-ml/mobile)
    githubUrl: "https://github.com/KuroBapak/Keshir",
    techStack: ["TBD"], // TODO: isi tech stack
  },
];

export const projectCategories = [
  { label: "All", value: "all" },
  { label: "Web App", value: "web" },
  { label: "AI / ML", value: "ai-ml" },
  { label: "Mobile App", value: "mobile" },
] as const;
