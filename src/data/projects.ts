// ============================================================
// Projects Data — Isi project Anda di sini tanpa edit komponen
// ============================================================

export type ProjectCategory = "web" | "ai-ml" | "mobile";

export interface Project {
  title: string;
  description: string;
  image: string;
  /** SVG illustration identifier shown as card cover (optional — falls back to gallery[0] screenshot) */
  illustration?: string;
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
    image: "/projects/rag-chatbot/screenshot-1.png",
    illustration: "rag-chatbot",
    category: "ai-ml",
    githubUrl: "https://github.com/RickWijaya/NLP_Project",
    techStack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "ChromaDB", "Groq API"],
    longDescription:
      "Sistem ini dibangun dengan arsitektur multi-tenant penuh, di mana setiap organisasi punya tabel database dan vector collection sendiri sehingga data antar tenant tidak pernah tercampur. Proses retrieval menggabungkan pencarian vector similarity dengan BM25 re-ranking agar dokumen yang diambil lebih relevan, didukung sentence-aware chunking saat memproses upload PDF, DOCX, TXT, maupun XLSX. Lewat admin dashboard, model LLM yang dipakai bisa diganti-ganti (Groq, TinyLlama, Phi-2, atau Qwen2) beserta temperature dan system prompt-nya, sementara pengguna akhir bisa langsung chat lewat antarmuka publik tanpa perlu login.",
    goal:
      "Memungkinkan organisasi men-deploy chatbot yang menjawab pertanyaan spesifik berdasarkan dokumen internal mereka sendiri, sambil menjaga isolasi data tiap tenant tetap ketat dan aman.",
    gallery: [
      "/projects/rag-chatbot/screenshot-1.png",
      "/projects/rag-chatbot/screenshot-2.png",
      "/projects/rag-chatbot/screenshot-3.png",
      "/projects/rag-chatbot/screenshot-4.png",
    ],
  },
  {
    title: "Food Predictor & Nutrition Tracker",
    description:
      "Aplikasi web berbasis Deep Learning yang mengklasifikasi gambar makanan secara real-time dan menghitung kandungan nutrisi (kalori, protein, lemak, karbohidrat) berdasarkan porsi yang dapat disesuaikan.",
    image: "/images/projects/food-prediction.jpg",
    illustration: "food-nutrition",
    category: "ai-ml",
    githubUrl: "https://github.com/farissakhi/food_prediction_nutrition",
    techStack: ["Python", "TensorFlow", "Keras", "CNN", "Streamlit"],
    longDescription:
      "Melatih dan mengintegrasikan model Convolutional Neural Network (CNN), termasuk ResNet50V2 dan EfficientNetB0, menggunakan TensorFlow dan Keras untuk pengenalan visual makanan dengan akurasi tinggi di berbagai kondisi gambar. Membangun pipeline inferensi end-to-end yang menggabungkan image preprocessing, tensor manipulation, dan prediction engine untuk hasil klasifikasi makanan sub-detik. Dilengkapi sistem rekomendasi diet cerdas menggunakan Pandas dan fuzzy string matching untuk memetakan label makanan ke database nutrisi kustom.",
    goal:
      "Membantu pengguna melacak asupan nutrisi harian secara otomatis hanya dari foto makanan, tanpa perlu input manual.",
    gallery: [
      "/projects/food-nutrition/screenshot-1.png",
      "/projects/food-nutrition/screenshot-2.png",
      "/projects/food-nutrition/screenshot-3.png",
      "/projects/food-nutrition/screenshot-4.png",
      "/projects/food-nutrition/screenshot-5.png",
    ],
  },
  {
    title: "Smart AI Image Editor",
    description:
      "Aplikasi web pengolahan gambar interaktif dengan fitur AI, mendukung manipulasi gambar real-time, undo/redo, dan operasi file.",
    image: "/projects/smart-ai-editor/screenshot-1.png",
    illustration: "smart-ai-editor",
    category: "ai-ml",
    githubUrl: "",
    techStack: ["Python", "OpenCV", "Flask", "NumPy", "Deep Learning (DNN)"],
    longDescription:
      "Mengimplementasikan algoritma computer vision inti menggunakan OpenCV dan NumPy, meliputi spatial filtering (Gaussian, Median, Sobel, Laplacian), histogram equalization, dan transformasi geometris. Mengintegrasikan fitur AI lanjutan memanfaatkan modul Deep Neural Network (DNN) dari OpenCV untuk Neural Style Transfer, serta library rembg untuk penghapusan background otomatis dengan presisi tinggi. Merancang pipeline koreksi warna otomatis menggunakan algoritma Gray World untuk menyeimbangkan warna gambar dan memperbaiki inkonsistensi pencahayaan.",
    goal:
      "Menyediakan editor gambar berbasis AI yang ringan dan berjalan di browser tanpa perlu software editing yang berat.",
    gallery: [
      "/projects/smart-ai-editor/screenshot-1.png",
      "/projects/smart-ai-editor/screenshot-2.png",
    ],
  },
  {
    title: "Smart Parking System",
    description:
      "Sistem parkir pintar berbasis computer vision dan IoT yang mengenali plat nomor kendaraan secara real-time untuk mengontrol palang otomatis dan memantau ketersediaan parkir.",
    image: "/projects/smart-parking/screenshot-1.jpg",
    illustration: "smart-parking",
    category: "web",
    githubUrl: "https://github.com/farissakhi/smart-parking-system",
    techStack: ["Python", "YOLOv8", "OpenCV", "Flask-SocketIO", "ESP32"],
    longDescription:
      "Menggunakan model YOLOv8 untuk mendeteksi kendaraan dan plat nomornya secara real-time dari feed kamera, lalu membaca karakter plat dengan EasyOCR sebelum divalidasi ke database kendaraan terdaftar. Seluruh inference berjalan sebagai edge AI di perangkat lokal (dipercepat ONNX Runtime) sehingga latensi tetap rendah tanpa bergantung ke cloud. Hasil deteksi terhubung ke mikrokontroler ESP32 yang mengendalikan palang parkir secara otomatis, sementara dashboard Flask-SocketIO menampilkan status kendaraan, log akses, dan diagnostik hardware secara real-time ke admin.",
    goal:
      "Mengotomatiskan identifikasi kendaraan dan buka-tutup palang parkir agar operasional lebih cepat dan minim campur tangan manual, sekaligus memberi admin visibilitas penuh lewat dashboard monitoring.",
    gallery: [
      "/projects/smart-parking/screenshot-1.jpg",
      "/projects/smart-parking/screenshot-2.jpg",
      "/projects/smart-parking/screenshot-3.jpg",
      "/projects/smart-parking/screenshot-4.jpg",
      "/projects/smart-parking/screenshot-5.jpg",
      "/projects/smart-parking/screenshot-6.jpg",
    ],
  },
  {
    title: "Finance Manager",
    description:
      "Aplikasi Android native untuk melacak keuangan pribadi, dengan sistem pencatatan pemasukan, pengeluaran, target tabungan, dan pengingat tagihan/langganan.",
    image: "/projects/finance-manager/screenshot-1.png",
    illustration: "finance-manager",
    category: "mobile",
    githubUrl: "https://github.com/farissakhi/finance_manager",
    techStack: ["Java", "Android Studio", "Firebase Auth", "Cloud Firestore", "MPAndroidChart"],
    longDescription:
      "Mengintegrasikan autentikasi aman menggunakan Firebase Auth dan menerapkan real-time data sync dengan Cloud Firestore agar data pengguna tetap konsisten di berbagai sesi. Membangun laporan visual interaktif menggunakan MPAndroidChart serta sistem pengingat otomatis di background menggunakan Android AlarmManager untuk tagihan dan langganan mendatang. Meningkatkan performa dan tampilan aplikasi dengan animasi loading Shimmer dari Facebook.",
    goal:
      "Memberikan cara yang aman dan otomatis untuk mengelola keuangan pribadi tanpa lupa jatuh tempo tagihan/langganan.",
    gallery: [
      "/projects/finance-manager/screenshot-1.png",
      "/projects/finance-manager/screenshot-2.png",
      "/projects/finance-manager/screenshot-3.png",
      "/projects/finance-manager/screenshot-4.png",
      "/projects/finance-manager/screenshot-5.png",
      "/projects/finance-manager/screenshot-6.png",
      "/projects/finance-manager/screenshot-7.png",
    ],
  },
  {
    title: "Keshir",
    description:
      "Sistem point-of-sale (POS) terintegrasi untuk coffee shop dan restoran, mencakup kasir, dapur, inventori, pemesanan pelanggan, hingga presensi staf dalam satu platform.",
    image: "/projects/keshir/screenshot-1.png",
    illustration: "keshir",
    category: "web",
    githubUrl: "https://github.com/KuroBapak/Keshir",
    techStack: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "Midtrans"],
    longDescription:
      "Keshir menggabungkan seluruh operasional coffee shop dan restoran dalam satu sistem: kasir dengan manajemen shift dan cash drawer, kitchen display system untuk melacak status pesanan dapur, inventori berbasis FIFO yang otomatis memotong stok sesuai resep, sampai pemesanan mandiri pelanggan lewat QR code. Akses dibedakan berdasarkan role (Owner, Manager, Cashier, Kitchen Staff) dan dilengkapi gerbang presensi staf sebelum bisa masuk ke sistem, plus integrasi RFID lewat ESP32. Pembayaran terhubung ke Midtrans, dan tersedia chatbot AI lokal berbasis Ollama untuk membantu operasional sehari-hari.",
    goal:
      "Menyatukan seluruh proses bisnis coffee shop dan restoran — kasir, dapur, inventori, sampai presensi staf — dalam satu sistem terintegrasi agar operasional lebih rapi dan mudah dipantau.",
    gallery: [
      "/projects/keshir/screenshot-1.png",
      "/projects/keshir/screenshot-2.png",
      "/projects/keshir/screenshot-3.png",
      "/projects/keshir/screenshot-4.png",
      "/projects/keshir/screenshot-5.png",
      "/projects/keshir/screenshot-6.png",
      "/projects/keshir/screenshot-7.png",
      "/projects/keshir/screenshot-8.png",
      "/projects/keshir/screenshot-9.png",
      "/projects/keshir/screenshot-10.png",
      "/projects/keshir/screenshot-11.png",
      "/projects/keshir/screenshot-12.png",
      "/projects/keshir/screenshot-13.png",
    ],
  },
];

export const projectCategories = [
  { label: "All", value: "all" },
  { label: "Web App", value: "web" },
  { label: "AI / ML", value: "ai-ml" },
  { label: "Mobile App", value: "mobile" },
] as const;
