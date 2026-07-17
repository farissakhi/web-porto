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
  longDescription: string;
  goal: string;
  gallery: string[];
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
    longDescription: "", // TODO: penjelasan lebih detail, minimal 3-5 kalimat
    goal: "", // TODO: tujuan/masalah yang diselesaikan project ini
    gallery: [], // TODO: array path gambar tambahan/screenshot
  },
  {
    title: "Food Predictor & Nutrition Tracker",
    description:
      "Aplikasi web berbasis Deep Learning yang mengklasifikasi gambar makanan secara real-time dan menghitung kandungan nutrisi (kalori, protein, lemak, karbohidrat) berdasarkan porsi yang dapat disesuaikan.",
    image: "/images/projects/food-prediction.jpg", // TODO: ganti gambar
    category: "ai-ml",
    githubUrl: "https://github.com/farissakhi/food_prediction_nutrition",
    techStack: ["Python", "TensorFlow", "Keras", "CNN", "Streamlit"],
    longDescription:
      "Melatih dan mengintegrasikan model Convolutional Neural Network (CNN), termasuk ResNet50V2 dan EfficientNetB0, menggunakan TensorFlow dan Keras untuk pengenalan visual makanan dengan akurasi tinggi di berbagai kondisi gambar. Membangun pipeline inferensi end-to-end yang menggabungkan image preprocessing, tensor manipulation, dan prediction engine untuk hasil klasifikasi makanan sub-detik. Dilengkapi sistem rekomendasi diet cerdas menggunakan Pandas dan fuzzy string matching untuk memetakan label makanan ke database nutrisi kustom.",
    goal:
      "Membantu pengguna melacak asupan nutrisi harian secara otomatis hanya dari foto makanan, tanpa perlu input manual.",
    gallery: [],
  },
  {
    title: "Smart AI Image Editor",
    description:
      "Aplikasi web pengolahan gambar interaktif dengan fitur AI, mendukung manipulasi gambar real-time, undo/redo, dan operasi file.",
    image: "/images/projects/smart-ai-image-editor.jpg", // TODO: ganti gambar
    category: "ai-ml",
    githubUrl: "", // TODO: isi link repo GitHub project ini
    techStack: ["Python", "OpenCV", "Flask", "NumPy", "Deep Learning (DNN)"],
    longDescription:
      "Mengimplementasikan algoritma computer vision inti menggunakan OpenCV dan NumPy, meliputi spatial filtering (Gaussian, Median, Sobel, Laplacian), histogram equalization, dan transformasi geometris. Mengintegrasikan fitur AI lanjutan memanfaatkan modul Deep Neural Network (DNN) dari OpenCV untuk Neural Style Transfer, serta library rembg untuk penghapusan background otomatis dengan presisi tinggi. Merancang pipeline koreksi warna otomatis menggunakan algoritma Gray World untuk menyeimbangkan warna gambar dan memperbaiki inkonsistensi pencahayaan.",
    goal:
      "Menyediakan editor gambar berbasis AI yang ringan dan berjalan di browser tanpa perlu software editing yang berat.",
    gallery: [],
  },
  {
    title: "Smart Parking System",
    description:
      "Sistem parkir pintar untuk memantau dan mengelola ketersediaan slot parkir.",
    image: "/images/projects/smart-parking.jpg", // TODO: ganti gambar
    category: "web",
    githubUrl: "https://github.com/farissakhi/smart-parking-system",
    techStack: ["HTML", "JavaScript"],
    longDescription: "", // TODO: penjelasan lebih detail
    goal: "", // TODO: tujuan/masalah yang diselesaikan
    gallery: [],
  },
  {
    title: "Finance Manager",
    description:
      "Aplikasi Android native untuk melacak keuangan pribadi, dengan sistem pencatatan pemasukan, pengeluaran, target tabungan, dan pengingat tagihan/langganan.",
    image: "/images/projects/finance-manager.jpg", // TODO: ganti gambar
    category: "mobile",
    githubUrl: "https://github.com/farissakhi/finance_manager",
    techStack: ["Java", "Android Studio", "Firebase Auth", "Cloud Firestore", "MPAndroidChart"],
    longDescription:
      "Mengintegrasikan autentikasi aman menggunakan Firebase Auth dan menerapkan real-time data sync dengan Cloud Firestore agar data pengguna tetap konsisten di berbagai sesi. Membangun laporan visual interaktif menggunakan MPAndroidChart serta sistem pengingat otomatis di background menggunakan Android AlarmManager untuk tagihan dan langganan mendatang. Meningkatkan performa dan tampilan aplikasi dengan animasi loading Shimmer dari Facebook.",
    goal:
      "Memberikan cara yang aman dan otomatis untuk mengelola keuangan pribadi tanpa lupa jatuh tempo tagihan/langganan.",
    gallery: [],
  },
  {
    title: "Keshir",
    description:
      "Coming soon.", // TODO: isi deskripsi project Keshir
    image: "/images/projects/keshir.jpg", // TODO: ganti gambar
    category: "web", // TODO: tentukan kategori yang tepat (web/ai-ml/mobile)
    githubUrl: "https://github.com/KuroBapak/Keshir",
    techStack: ["TBD"], // TODO: isi tech stack
    longDescription: "", // TODO: penjelasan lebih detail
    goal: "", // TODO: tujuan/masalah yang diselesaikan
    gallery: [],
  },
];

export const projectCategories = [
  { label: "All", value: "all" },
  { label: "Web App", value: "web" },
  { label: "AI / ML", value: "ai-ml" },
  { label: "Mobile App", value: "mobile" },
] as const;
