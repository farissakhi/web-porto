// ============================================================
// Profile Data — Edit semua data personal di sini
// ============================================================

export const profile = {
  // --- Personal Info ---
  name: "Faris Sakhi",
  fullName: "Muhammad Faris Sakhi Ashari",
  role: "Full Stack Developer",
  description:
    "Passionate developer crafting elegant digital solutions. I specialize in building modern web applications with clean code and exceptional user experiences.",

  // --- About Section ---
  aboutText:
    "", // TODO: isi cerita lengkap tentang diri kamu, latar belakang, dan apa yang membuatmu tertarik di bidang development/AI-ML (2-4 kalimat)
  aboutStats: [
    { label: "Projects", value: "" }, // TODO: contoh "5+"
    { label: "Tech Stack", value: "" }, // TODO: contoh "15+"
    { label: "Tahun Belajar", value: "" }, // TODO: contoh "3+"
  ],

  // --- Contact ---
  email: "farissakhii@gmail.com",

  // --- Assets ---
  profileImage: "/images/profile.jpg", // TODO: ganti dengan foto asli
  cvFile: "/cv-faris-sakhi.pdf", // TODO: ganti dengan file CV asli di public/

  // --- Social Links ---
  socials: {
    github: "https://github.com/farissakhi",
    linkedin: "https://www.linkedin.com/in/farissakhi",
    instagram: "https://instagram.com/farissakhi_",
  },

  // --- Location ---
  location: "Indonesia", // TODO: ganti lokasi spesifik jika mau

  // --- Navigation ---
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
};
