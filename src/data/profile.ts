export const profile = {
  name: "Sendy Citra Lesmana",
  role: "Full Stack Developer | Software Engineer",
  location: "Bandung, Indonesia",
  headline: "Membangun sistem web yang aman, andal, dan mudah dipakai.",
  summary:
    "Full Stack Developer dengan pengalaman hampir 3 tahun membangun sistem berbasis web untuk instansi pemerintah dan perusahaan swasta. Membangun solusi end-to-end, dari layanan pertukaran dokumen berbasis Kafka (C#/.NET) hingga CMS berbasis Laravel dan React, dashboard monitoring, dan aplikasi backoffice. Berpengalaman mengintegrasikan REST API dan layanan eksternal, serta membangun sistem aman yang menangani data sensitif.",
  linkedin: "https://www.linkedin.com/in/sendy-citra-lesmana-0385bb291",
  github: "https://github.com/sendycitralesmana",
  // email dipecah supaya tidak mudah di-scrape bot
  emailUser: "sendycitralesmana",
  emailDomain: "gmail.com",
  cv: "/cv-sendy-citra-lesmana.pdf",
  photo: "/images/sendy-wsy.jpeg",
}

export const stats = [
  { value: "~3 thn", label: "Pengalaman" },
  { value: "7", label: "Sistem dikirim" },
  { value: "4", label: "Stack utama" },
]

export const skills: Record<string, string[]> = {
  Bahasa: ["TypeScript", "JavaScript", "PHP", "Java", "C#"],
  Frontend: ["React.js", "Inertia.js", "Tailwind CSS", "Shadcn UI", "Bootstrap", "Blade", "HTML5", "CSS3"],
  Backend: ["Laravel", "Java Spring Boot", ".NET", "REST API"],
  "Database & Storage": ["PostgreSQL", "MongoDB", "MinIO"],
  "Integrasi & Messaging": ["Apache Kafka", "REST API Integration", "Dukcapil API", "Mekari API", "JSON"],
  Konsep: ["Backoffice Systems", "Dashboard & Data Visualization", "CMS", "Background Services", "Asynchronous Processing"],
}

export const experience = [
  {
    company: "PT Media Telematika Jaya",
    role: "Software Engineer / Full Stack Developer",
    period: "Desember 2023 – Sekarang",
    points: [
      "Menyelesaikan 7 sistem berbasis web untuk instansi pemerintah dan perusahaan swasta, termasuk pertukaran dokumen penegak hukum, pencarian catatan kriminal, manajemen pengaduan masyarakat, dan website publik dengan CMS.",
      "Fleksibel di berbagai peran, dari full stack developer mandiri hingga spesialis frontend atau backend dalam tim.",
      "Membangun integrasi dengan Apache Kafka, REST API, Dukcapil API, dan Mekari API untuk otomatisasi pertukaran dokumen, pengambilan data identitas, dan notifikasi WhatsApp.",
      "Mengembangkan dashboard monitoring dan backoffice dengan visualisasi chart untuk memberi gambaran jelas atas data operasional.",
      "Mengimplementasikan keamanan seperti kontrol IP whitelist/blacklist dan verifikasi OTP email pada sistem yang menangani data sensitif.",
      "Mengerjakan proyek di Laravel, React/TypeScript, Java Spring Boot, dan .NET dengan PostgreSQL dan MongoDB.",
    ],
  },
]