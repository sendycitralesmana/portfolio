export type Project = {
  slug: string
  title: string
  type: string
  problem: string
  role: string
  solution: string
  impact: string
  stack: string[]
}

export const projects: Project[] = [
  {
    slug: "document-exchange",
    title: "Platform Pertukaran Dokumen Antar-Lembaga",
    type: "Sistem pemerintahan · Backend",
    problem:
      "Pertukaran dokumen antar-lembaga masih manual, lambat, dan sulit dilacak.",
    role: "Merancang dan membangun layanan end-to-end.",
    solution:
      "Layanan berbasis event dengan Kafka untuk pengiriman dokumen asinkron, penyimpanan objek di MinIO, dan background service untuk pemrosesan.",
    impact:
      "Proses pertukaran dokumen menjadi otomatis, terlacak, dan lebih andal.",
    stack: ["C#", ".NET", "Apache Kafka", "MinIO", "PostgreSQL"],
  },
  {
    slug: "public-complaint",
    title: "Sistem Manajemen Pengaduan Masyarakat",
    type: "Sistem pemerintahan · Full Stack",
    problem:
      "Pengaduan masyarakat tersebar di banyak kanal dan sulit dipantau penyelesaiannya.",
    role: "Full stack developer.",
    solution:
      "Aplikasi backoffice untuk menerima, mengklasifikasi, dan melacak pengaduan, dengan notifikasi WhatsApp dan dashboard monitoring.",
    impact:
      "Petugas dan pimpinan punya satu sumber data yang jelas atas status pengaduan.",
    stack: ["Laravel", "React", "TypeScript", "PostgreSQL", "Mekari API"],
  },
  {
    slug: "secure-records-search",
    title: "Sistem Pencarian Data Sensitif Terkontrol",
    type: "Keamanan · Full Stack",
    problem:
      "Pencarian data sensitif harus cepat, tetapi aksesnya wajib ketat dan terverifikasi.",
    role: "Mengembangkan fitur pencarian, integrasi identitas, dan lapisan keamanan.",
    solution:
      "Integrasi API verifikasi identitas, kontrol IP whitelist/blacklist, dan verifikasi OTP email.",
    impact:
      "Akses ke data sensitif lebih terkontrol tanpa mengorbankan kecepatan kerja petugas.",
    stack: ["Java Spring Boot", "PostgreSQL", "Dukcapil API", "REST API"],
  },
  {
    slug: "public-website-cms",
    title: "Website Publik dengan CMS",
    type: "Website · Full Stack",
    problem:
      "Konten website harus bisa diperbarui sendiri oleh tim non-teknis.",
    role: "Full stack developer.",
    solution:
      "CMS kustom dengan Laravel + Inertia + React, editor konten, dan manajemen media.",
    impact:
      "Tim konten dapat mengelola informasi publik tanpa bantuan developer.",
    stack: ["Laravel", "Inertia.js", "React", "Tailwind CSS", "Shadcn UI"],
  },
]