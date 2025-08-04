// src/components/sections/InteractiveMap.tsx
"use client";

import { motion, useInView, Variants} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Briefcase, Building2, Calendar, FileText } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Data proyek dengan koordinat (top, left) dalam persentase relatif terhadap gambar SVG
const projectData = [
    {
        id: 1,
        tempat: "Ruas Tol Trans Sumatera Bakauheni - Sidomulyo",
        deskripsiPekerjaan: "Proyek Tol Trans Sumatera Paket II",
        tahun: "2017",
        kontraktorUtama: "PT Waskita Karya (Persero), Tbk",
        bidangPekerjaan: [
        "Lansekap", 
        "Pekerjaan LC Main Road",
        "Pekerjaan Rigid Main Road Trase",
        ],
        position: { top: '63%', left: '22.5%' },
    },
    {
        id: 2,
        tempat: "Ruas Tol Trans Sumatera Bakauheni - Sidomulyo",
        deskripsiPekerjaan: "Proyek Tol Trans Sumatera Paket I",
        tahun: "2018 - 2020",
        kontraktorUtama: "PT PP (Persero), Tbk",
        bidangPekerjaan: [
        "Lansekap", 
        "Precast Beton",
        "Pengecoran Median Concrete Barier In-situ",
        "Setting Median Barier Percast",
        "Drainase DS-3",
        "Pemasangan Guardrail",
        ],
        position: { top: '61%', left: '21.5%' },
    },
    {
        id: 3,
        tempat: "New Yogyakarta International Airport",
        deskripsiPekerjaan: "Proyek Pembangunan Infrastruktur New Yogyakarta International Airport",
        tahun: "2019",
        kontraktorUtama: "PT PP (Persero), Tbk",
        bidangPekerjaan: [
        "Penanaman Gebalan Rumput",
        "Pekerjaan Saluran Terbuka",
        ],
        position: { top: '71%', left: '32%' },
    },
    {
        id: 4,
        tempat: "Ruas Tol Trans Sumatera Indralaya - Prabumulih Palembang",
        deskripsiPekerjaan: "Proyek Pembangunan Jalan Tol Ruas Indralaya Prabumulih Palembang",
        tahun: "2021-2023",
        kontraktorUtama: "PT Hutama Karya Infrastruktur",
        bidangPekerjaan: [
        "Pekerjaan Pagar Rumija Type 2 (Kawat Berduri)",
        "Pekerjaan Strip dan Solid Sodding",
        "Pekerjaan Saluran Drainase",
        ],
        position: { top: '53%', left: '20%' }, 
    },
    {
        id: 5,
        tempat: "Ruas Tol Trans Sumatera Bengkulu Taba Penanjung",
        deskripsiPekerjaan: "Proyek Pembangunan Jalan Tol Ruas Bengkulu - Taba Penanjung",
        tahun: "2021",
        kontraktorUtama: "PT Hutama Karya Infrastruktur",
        bidangPekerjaan: [
        "Pekerjaan Solid Sodding",
        ],
        position: { top: '55%', left: '15%' }, 
    },
    {
        id: 6,
        tempat: "Ruas Tol Trans Sumatera Indrapura - Kisaran Medan",
        deskripsiPekerjaan: "Proyek Pembangunan Jalan Tol Ruas Indrapura Kisaran Medan",
        tahun: "2022-2024",
        kontraktorUtama: "PT PP (Persero), Tbk",
        bidangPekerjaan: [
        "Pengadaan dan Pemasangan Drainase",
        ],
        position: { top: '29%', left: '9%' }, 
    },
    {
        id: 8, 
        tempat: "Ruas Tol Trans Sumatra Tempino - Ness",
        deskripsiPekerjaan: "Proyek Pembangunan Jalan Tol Ruas Tempino Ness Seksi 4",
        tahun: "2024-2025",
        kontraktorUtama: "PT Hutama Karya Infrastruktur",
        bidangPekerjaan: [
        "Pekerjaan Solid Sodding",
        "Pekerjaan DS-8",
        "Setting dan Pengecoran RCP Pekerjaan LC Rigid",
        "Pekerjaan Saluran V-Ditch",
        "Pekerjaan Bokong Semar Jembatan Overpass",
        ],
        position: { top: '48%', left: '17%' }, 
    },
    {
        id: 7,
        tempat: "Ruas Tol Trans Sumatra Sungai Lilin - Tempino",
        deskripsiPekerjaan: "Proyek Pembangunan Jalan Tol Ruas Sungai Lilin Tempino Seksi",
        tahun: "2024",
        kontraktorUtama: "PT PP - NK KSO",
        bidangPekerjaan: [
        "Pekerjaan Saluran Drainase",
        "Pekerjaan Saluran DS-3",
        ],
        position: { top: '50%', left: '18%' }, 
    },
    {
        id: 10, 
        tempat: "Ibu Kota Nusantara Kalimantan Timur",
        deskripsiPekerjaan: "Proyek 6C Tahap I",
        tahun: "2024-2025",
        kontraktorUtama: "PT PP - Waskita, KSO",
        bidangPekerjaan: [
        "Pekerjaan Box Multi Utility Tunnel (MUT)",
        "Pekerjaan Caping Beam",
        "Pekerjaan Box Crossing",
        "Pekerjaan Saluran V-Ditch",
        ],
        position: { top: '44%', left: '46%'}, 
    },
    {
        id: 11, 
        tempat: "Ibu Kota Nusantara Kalimantan Timur",
        deskripsiPekerjaan: "Proyek Bandara VVIP",
        tahun: "2024-2025",
        kontraktorUtama: "PT PP - ABP - RE, KSO",
        bidangPekerjaan: [
        "Pekerjaan Saluran Trapesium Terbuka",
        "Pekerjaan Solid Sodding",
        "Pekerjaan Pagar BRC",
        ],
        position: { top: '43.3%', left: '46.7%' }, 
    },
    {
        id: 12,
        tempat: "Ibu Kota Nusantara Kalimantan Timur",
        deskripsiPekerjaan: "Proyek West Resident",
        tahun: "2024-2025",
        kontraktorUtama: "PT PP - MWT - SBS, KSO",
        bidangPekerjaan: [
        "Pekerjaan Box Drainase",
        "Pekerjaan Box Multi Utility Tunnel (MUT)",
        "Pekerjaan Box Crossing",
        "Pekerjaan Rigid",
        "Pekerjaan Caping Beam",
        ],
        position: { top: '42.6%', left: '47.4%' }, 
    },
    {
        id: 13,
        tempat: "Ibu Kota Nusantara Kalimantan Timur",
        deskripsiPekerjaan: "Proyek Pembangunan Jalan Bebas Hambatan IKN Segmen Jembatan Pulau Balang - SP.",
        tahun: "2024",
        kontraktorUtama: "PT HK - MWT - BCK, KSO",
        bidangPekerjaan: [
        "Pekerjaan Saluran DS-3",
        ],
        position: { top: '41.9%', left: '48.1%' }, 
    },
    {
        id: 14,
        tempat: "Ruas Tol Trans Sumatra Tebing Tinggi - Kisaran Sumatra Utara",
        deskripsiPekerjaan: "Proyek Pembangunan Jalan Tol Ruas Tebing Tinggi - Kuala Tanjung",
        tahun: "2024",
        kontraktorUtama: "PT Hutama Karya (Persero)",
        bidangPekerjaan: [
        "Pekerjaan Saluran Drainase",
        "Pekerjaan Pagar ROW",
        ],
        position: { top: '27%', left: '7.7%' }, 
    },
    {
        id: 15,
        tempat: "Ruas Cilegon Timur Cilegon Barat",
        deskripsiPekerjaan: "Proyek Pelebaran Jalan tol Tangerang Merak",
        tahun: "2025",
        kontraktorUtama: "PT PP (Persero), Tbk",
        bidangPekerjaan: [
        "Pekerjaan Struktur Box Culvert",
        "Pengecoran LC dan Setting Saluran U-Ditch Pre-Cast",
        "Pengecoran LC Rigid",
        "Pengecoran Rigid",
        "Pekerjaan Pemasangan Guardrail",
        ],
        position: { top: '63.5%', left: '23.4%' }, 
    },
    {
        id: 16,
        tempat: "PIK 2 Jakarta",
        deskripsiPekerjaan: "Proyek Pekerjaan Pembangunan Jalan tol Kertaraja",
        tahun: "2025",
        kontraktorUtama: "PT PP (Persero), Tbk",
        bidangPekerjaan: [
        "Pekerjaan Pengecoran Retening Wall",
        "Pemasangan Pagar BRC",
        "Pemasangan Penerangan jalan umum ( PJU)",
        ],
        position: { top: '63.5%', left: '24.5%' }, 
    },
    {
        id: 17,
        tempat: "Seksi 1A Ruas Sungai Lilin",
        deskripsiPekerjaan: "Proyek Pekerjaan Pembangunan Jalan tol Trans Sumantera",
        tahun: "2025",
        kontraktorUtama: "PT PP (Persero), Tbk",
        bidangPekerjaan: [
        "Pekerjaan Solid Sodding",
        "Pekerjaan Saluran U-Ditch B",
        "Pekerjaan Saluran DS 8",
        ],
        position: { top: '51.2%', left: '18.8%' }, 
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export function InteractiveMap() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="wilayah-kerja" ref={ref} className="w-full bg-base-white dark:bg-card py-20 sm:py-28">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="container mx-auto max-w-7xl px-4 lg:px-8"
        >
            {/* Header Seksi */}
            <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl font-semibold uppercase tracking-wider sm:text-5xl">
                Jelajahi Proyek Kami
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-base-black/70">
                Klik pada titik lokasi untuk melihat detail proyek yang telah kami kerjakan di seluruh nusantara.
            </p>
            </motion.div>

            {/* Peta Interaktif */}
            <motion.div variants={itemVariants} className="relative mt-16 w-full max-w-7xl mx-auto aspect-[16/9] rounded-2xl shadow-xl overflow-hidden bg-base-white">
            {/* Gambar Peta sebagai Latar */}
            <Image
                src="/img/peta-indonesia.svg" // Ganti dengan nama file peta Anda
                alt="Peta Proyek PT Kartika Jaya Kontruksindo"
                fill
                className="object-contain brightness-0 saturate-100 invert-[0.2] hue-rotate-[200deg]"
                priority
            />

            {/* Container untuk titik-titik dengan koordinat absolut relatif terhadap gambar */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full max-w-[calc(100%*9/16*16/9)] max-h-full">
                {/* Titik-titik Lokasi Proyek */}
                {projectData.map((project) => (
                    <Popover key={project.id}>
                    <PopoverTrigger asChild>
                        <button
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
                        style={{ 
                            top: project.position.top, 
                            left: project.position.left,
                        }}
                        >
                        <MapPin className="h-5 w-5 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-125" />
                        <span className="absolute -bottom-3 -right-0.1 h-2 w-2 rounded-full bg-red-500 ring-1 ring-white animate-pulse"></span>
                        </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 sm:w-96 shadow-2xl border-0 rounded-xl p-0 z-40">
                        {/* Header dengan Tempat dan Tahun - Fixed Header */}
                        <div className="sticky top-0 bg-base-white z-10 border-b border-gray-100 p-4 rounded-t-xl">
                            <div className="flex items-start gap-2">
                                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg leading-tight text-primary mb-1">{project.tempat}</h4>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4 text-muted-foreground" />
                                        <p className="text-sm font-medium text-muted-foreground">{project.tahun}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="max-h-80 overflow-y-auto overscroll-contain bg-base-white rounded-xl">
                            <div className="p-4 space-y-4">

                            {/* Deskripsi Pekerjaan */}
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <FileText className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                    <div className="flex-1">
                                        <h5 className="text-sm font-semibold text-gray-700 mb-1">Deskripsi Pekerjaan</h5>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{project.deskripsiPekerjaan}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Kontraktor Utama */}
                            {project.kontraktorUtama && (
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <Building2 className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                        <div className="flex-1">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-1">Kontraktor Utama</h5>
                                            <p className="text-sm font-medium text-primary bg-base-white px-3 py-1.5 rounded-lg border border-primary/10">
                                                {project.kontraktorUtama}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Bidang Pekerjaan */}
                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <Briefcase className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                    <div className="flex-1">
                                        <h5 className="text-sm font-semibold text-gray-700 mb-2">Bidang Pekerjaan</h5>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.bidangPekerjaan.map((bidang, index) => (
                                                <span 
                                                    key={index}
                                                    className="inline-block px-2.5 py-1 text-xs font-medium bg-base-white text-primary rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors"
                                                >
                                                    {bidang}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </PopoverContent>
                    </Popover>
                ))}
                </div>
            </div>
            </motion.div>
        </motion.div>
        </section>
    );
}