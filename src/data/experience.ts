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

export interface Organization {
  id: string;
  name: string;
  logo: string; // path logo organisasi, taruh di /public/logos/
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
}

// Academic / Education
export const education: Education[] = [
  {
    id: "edu-1",
    institution: "", // TODO: nama kampus
    logo: "", // TODO: path logo kampus, contoh "/logos/university.png"
    degree: "", // TODO: contoh "S1 Teknik Informatika"
    startDate: "", // TODO: contoh "Sep 2022"
    endDate: "", // TODO: contoh "Present" atau "Jun 2026"
    gpa: "", // TODO: contoh "3.75 / 4.00"
    description: "", // TODO: ringkasan singkat, fokus studi / minat akademik
    achievements: [
      // TODO: contoh "Dean's List Semester 3"
      // TODO: contoh "Anggota tim riset X"
    ],
  },
];

// Organizational Experience
export const organizations: Organization[] = [
  {
    id: "org-1",
    name: "PUFA COMPUTER SCIENCE (BEM FAKULTAS)",
    logo: "",
    role: "Vice Chairperson",
    startDate: "Jan 2024", // TODO: Sesuaikan tanggal
    endDate: "Present",
    description: "Assisting the Chairperson in leading the organization and managing internal and external affairs...", // TODO: Sesuaikan deskripsi
    achievements: [
      // TODO: Isi pencapaian
    ],
  },
  {
    id: "org-2",
    name: "PUFA COMPUTER SCIENCE (BEM FAKULTAS)",
    logo: "",
    role: "Member of Student Welfare Advocacy",
    startDate: "Jan 2023", // TODO: Sesuaikan tanggal
    endDate: "Dec 2023",
    description: "Advocating for student rights and welfare, mediating between students and the faculty...", // TODO: Sesuaikan deskripsi
    achievements: [
      // TODO: Isi pencapaian
    ],
  },
];
