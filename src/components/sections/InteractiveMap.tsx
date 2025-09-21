// src/components/sections/InteractiveMap.tsx
"use client";

import { motion, useInView, Variants} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin, Briefcase, Building2, Calendar, FileText } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { unifiedProjectData } from "@/data/projects";

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
                {unifiedProjectData.map((project) => (
                    <Popover key={project.id}>
                    <PopoverTrigger asChild>
                        <button
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
                        style={{ 
                            top: project.position.top, 
                            left: project.position.left,
                        }}
                        >
                        <MapPin className="h-5 w-5 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-125 group-active:scale-125" />
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
                                        <p className="text-sm font-medium text-muted-foreground">{project.year}</p>
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
                                        <p className="text-sm text-muted-foreground leading-relaxed">{project.title}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Kontraktor Utama */}
                            {project.client && (
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <Building2 className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                        <div className="flex-1">
                                            <h5 className="text-sm font-semibold text-gray-700 mb-1">Kontraktor Utama</h5>
                                            <p className="text-sm font-medium text-primary bg-base-white px-3 py-1.5 rounded-lg border border-primary/10">
                                                {project.client}
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
                                            {project.scope.map((bidang, index) => (
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