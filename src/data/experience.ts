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
    name: "", // TODO: nama organisasi/komunitas/UKM
    logo: "", // TODO: path logo organisasi, contoh "/logos/org.png"
    role: "", // TODO: contoh "Ketua Divisi IT"
    startDate: "", // TODO: contoh "Jan 2023"
    endDate: "", // TODO: contoh "Dec 2023" atau "Present"
    description: "", // TODO: deskripsi singkat peran & tanggung jawab
    achievements: [
      // TODO: pencapaian selama di organisasi (bullet points singkat)
    ],
  },
];
