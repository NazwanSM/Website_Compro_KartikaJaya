// src/data/certificates.ts

export interface Certificate {
    id: string;
    title: string;
    category: "certification" | "award" | "registration";
    issuer: string;
    issueDate: string;
    expiryDate?: string;
    certificateNumber?: string;
    description: string;
    image: string; // Untuk backward compatibility (halaman pertama)
    images?: string[]; // Array untuk multiple halaman (opsional)
    featured?: boolean;
}

export const certificateCategories = {
    certification: "Sertifikasi",
    award: "Penghargaan",
    registration: "Registrasi",
};

export const certificates: Certificate[] = [
    {
        id: "cert-1",
        title: "Sertifikat Badan Usaha (SBU) Bubklasifikasi Bangunan Sipil Jalan",
        category: "certification",
        issuer: "Lembaga Pengembangan Jasa Konstruksi (LPJK)",
        issueDate: "2023",
        expiryDate: "2026",
        certificateNumber: "SBU-XXXXX",
        description: "Sertifikat Badan Usaha untuk klasifikasi konstruksi bangunan gedung dan sipil.",
        image: "/certificates/sbu.png",
        images: [
            "/certificates/sbu.png",
            "/certificates/sbu2.png",
            "/certificates/sbu3.png",
        ],
    },
    {
        id: "cert-2",
        title: "Sertifikat Badan Usaha (SBU) Bubklasifikasi Konstruksi Gedung Lainnya",
        category: "certification",
        issuer: "Badan Sertifikasi Internasional",
        issueDate: "2022",
        expiryDate: "2025",
        certificateNumber: "ISO-XXXXX",
        description: "Sertifikat Badan Usaha untuk klasifikasi konstruksi gedung lainnya.",
        image: "/certificates/sbu4.png",
        images: [
            "/certificates/sbu4.png",      
            "/certificates/sbu5.png",     
            "/certificates/sbu6.png",    
        ],
    },
    {
        id: "cert-3",
        title: "Kartu Tanda Anggota (GAPENSI)",
        category: "certification",
        issuer: "Badan Sertifikasi Internasional",
        issueDate: "2022",
        expiryDate: "2025",
        certificateNumber: "",
        description: "Kartu Tanda Anggota untuk anggota GAPENSI.",
        image: "/certificates/KTA (GAPENSI).png",
    },
    {
        id: "cert-4",
        title: "ISO 9001:2015",
        category: "certification",
        issuer: "Badan Sertifikasi Internasional",
        issueDate: "2022",
        expiryDate: "2025",
        certificateNumber: "ISO-XXXXX",
        description: "Sertifikat Sistem Manajemen Mutu (SMM) ISO 9001:2015.",
        image: "/certificates/ISO.png",
    },
    {
        id: "cert-5",
        title: "Surat Kompetensi Pelaksana Pemeliharaan Jalan",
        category: "certification",
        issuer: "Online Single Submission (OSS)",
        issueDate: "2016",
        certificateNumber: "NIB-XXXXX",
        description: "Surat Kompetensi Pelaksana Pemeliharaan Jalan",
        image: "/certificates/SK1.png",
    },
    {
        id: "cert-6",
        title: "Surat Kompetensi Manajer Lapangan Pelaksanaan Pekerjaan Gedung",
        category: "certification",
        issuer: "Online Single Submission (OSS)",
        issueDate: "2016",
        certificateNumber: "NIB-XXXXX",
        description: "Surat Kompetensi Manajer Lapangan Pelaksanaan Pekerjaan Gedung",
        image: "/certificates/SK2.png",
    },
    {
        id: "cert-7",
        title: "Surat Tanda Daftar Rekanan",
        category: "certification",
        issuer: "PT PP (Persero) Tbk",
        issueDate: "2023",
        description: "Surat Tanda Daftar Rekanan untuk PT PP (Persero) Tbk.",
        image: "/certificates/Surat Tanda Daftar Rekanan 1.png",
        images: [
            "/certificates/Surat Tanda Daftar Rekanan 1.png",
            "/certificates/Surat Tanda Daftar Rekanan 2.png",
            "/certificates/Surat Tanda Daftar Rekanan 3.png",
        ],
    },
    {
        id: "cert-8",
        title: "Sertifikat Ahli K3",
        category: "certification",
        issuer: "PT PP (Persero) Tbk",
        issueDate: "2023",
        description: "Sertifikat Ahli K3",
        image: "/certificates/Sertif Ahli K3 1.png",
        images: [
            "/certificates/Sertif Ahli K3 1.png",
            "/certificates/Sertif Ahli K3 2.png",
            "/certificates/Sertif Ahli K3 3.png",
            "/certificates/Sertif Ahli K3 4.png",
        ],
    },
];

// Filter functions
export const getFeaturedCertificates = () => 
  certificates.filter(cert => cert.featured);

export const getCertificatesByCategory = (category: string) => 
  certificates.filter(cert => cert.category === category);
