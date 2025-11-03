// src/data/certificates.ts

export interface Certificate {
    id: string;
    title: string;
    category: "license" | "certification" | "award" | "registration";
    issuer: string;
    issueDate: string;
    expiryDate?: string;
    certificateNumber?: string;
    description: string;
    image: string;
    featured?: boolean;
}

export const certificateCategories = {
    license: "Izin Usaha",
    certification: "Sertifikasi",
    award: "Penghargaan",
    registration: "Registrasi",
};

export const certificates: Certificate[] = [
    // CONTOH DATA - Sesuaikan dengan sertifikat perusahaan Anda
    {
        id: "cert-1",
        title: "Sertifikat Badan Usaha (SBU)",
        category: "certification",
        issuer: "Lembaga Pengembangan Jasa Konstruksi (LPJK)",
        issueDate: "2023",
        expiryDate: "2026",
        certificateNumber: "SBU-XXXXX",
        description: "Sertifikat Badan Usaha untuk klasifikasi konstruksi bangunan gedung dan sipil.",
        image: "/img/Proyek8.jpg",
        featured: true,
    },
    {
        id: "cert-2",
        title: "ISO 9001:2015",
        category: "certification",
        issuer: "Badan Sertifikasi Internasional",
        issueDate: "2022",
        expiryDate: "2025",
        certificateNumber: "ISO-XXXXX",
        description: "Sertifikat Sistem Manajemen Mutu ISO 9001:2015 untuk standar kualitas internasional.",
        image: "/img/hero.jpg",
        featured: true,
    },
    {
        id: "cert-3",
        title: "ISO 14001:2015",
        category: "certification",
        issuer: "Badan Sertifikasi Internasional",
        issueDate: "2022",
        expiryDate: "2025",
        certificateNumber: "ISO-XXXXX",
        description: "Sertifikat Sistem Manajemen Lingkungan untuk komitmen terhadap kelestarian lingkungan.",
        image: "/img/Proyek3.jpeg",
    },
    {
        id: "cert-4",
        title: "ISO 45001:2018",
        category: "certification",
        issuer: "Badan Sertifikasi Internasional",
        issueDate: "2022",
        expiryDate: "2025",
        certificateNumber: "ISO-XXXXX",
        description: "Sertifikat Sistem Manajemen Keselamatan dan Kesehatan Kerja (K3).",
        image: "/img/Proyek4.jpeg",
    },
    {
        id: "cert-5",
        title: "Nomor Induk Berusaha (NIB)",
        category: "registration",
        issuer: "Online Single Submission (OSS)",
        issueDate: "2016",
        certificateNumber: "NIB-XXXXX",
        description: "Nomor Induk Berusaha sebagai identitas pelaku usaha yang berlaku secara nasional.",
        image: "/img/Proyek5.jpg",
        featured: true,
    },
    {
        id: "cert-6",
        title: "Tanda Daftar Perusahaan (TDP)",
        category: "registration",
        issuer: "Dinas Penanaman Modal dan Pelayanan Terpadu Satu Pintu",
        issueDate: "2016",
        certificateNumber: "TDP-XXXXX",
        description: "Tanda Daftar Perusahaan yang sah dan terdaftar.",
        image: "/img/Proyek6.jpeg",
    },
    {
        id: "cert-7",
        title: "Penghargaan Best Contractor",
        category: "award",
        issuer: "PT Waskita Karya (Persero) Tbk",
        issueDate: "2023",
        description: "Penghargaan sebagai kontraktor terbaik dalam proyek Tol Trans Sumatera.",
        image: "/img/Proyek7.jpeg",
        featured: true,
    },
    {
        id: "cert-8",
        title: "Zero Accident Award",
        category: "award",
        issuer: "PT Hutama Karya (Persero)",
        issueDate: "2022",
        description: "Penghargaan atas pencapaian zero accident dalam proyek konstruksi jalan tol.",
        image: "/img/base.jpg",
    },
];

// Filter functions
export const getFeaturedCertificates = () => 
  certificates.filter(cert => cert.featured);

export const getCertificatesByCategory = (category: string) => 
  certificates.filter(cert => cert.category === category);
