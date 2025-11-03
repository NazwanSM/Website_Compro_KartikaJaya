// src/components/sections/Certificates.tsx
"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import Image from "next/image";
import { Award, Shield, Trophy, FileText, ChevronRight, Building2 } from "lucide-react";
import { certificates, certificateCategories, Certificate } from "@/data/certificates";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const categoryIcons = {
    license: FileText,
    certification: Shield,
    award: Trophy,
    registration: Building2,
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export function Certificates() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

    // Filter certificates based on selected category
    const filteredCertificates = useMemo(() => {
        if (selectedCategory === "all") return certificates;
        return certificates.filter(cert => cert.category === selectedCategory);
    }, [selectedCategory]);

    // Get category counts
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { all: certificates.length };
        certificates.forEach(cert => {
        counts[cert.category] = (counts[cert.category] || 0) + 1;
        });
        return counts;
    }, []);

    return (
        <>
        <section 
            id="sertifikat" 
            ref={ref} 
            className="w-full bg-gradient-to-b from-base-white to-gray-50 dark:from-card dark:to-slate-900 py-20 sm:py-32"
        >
            <div className="container mx-auto max-w-7xl px-4 lg:px-8">
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <Award className="h-5 w-5" />
                <span className="text-sm font-semibold">KREDIBILITAS PERUSAHAAN</span>
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-wider sm:text-5xl mb-4">
                Sertifikat & Penghargaan
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Komitmen kami terhadap kualitas, keselamatan, dan profesionalitas terbukti melalui berbagai sertifikasi dan penghargaan yang telah diraih.
                </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-3 mb-12"
            >
                <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === "all"
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-white dark:bg-slate-800 text-muted-foreground hover:bg-gray-100 dark:hover:bg-slate-700 shadow"
                }`}
                >
                Semua ({categoryCounts.all})
                </button>
                {Object.entries(certificateCategories).map(([key, label]) => {
                const Icon = categoryIcons[key as keyof typeof categoryIcons];
                return (
                    <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                        selectedCategory === key
                        ? "bg-primary text-primary-foreground shadow-lg scale-105"
                        : "bg-white dark:bg-slate-800 text-muted-foreground hover:bg-gray-100 dark:hover:bg-slate-700 shadow"
                    }`}
                    >
                    <Icon className="h-4 w-4" />
                    {label} ({categoryCounts[key] || 0})
                    </button>
                );
                })}
            </motion.div>

            {/* Certificates Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {filteredCertificates.map((certificate) => {
                const CategoryIcon = categoryIcons[certificate.category];
                return (
                    <motion.div
                    key={certificate.id}
                    variants={itemVariants}
                    className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedCertificate(certificate)}
                    >
                    {/* Featured Badge */}
                    {certificate.featured && (
                        <div className="absolute top-4 right-4 z-10">
                        <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                            <Trophy className="h-3 w-3" />
                            Featured
                        </div>
                        </div>
                    )}

                    {/* Image Container - Full Width */}
                    <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 overflow-hidden">
                        <Image
                        src={certificate.image}
                        alt={certificate.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* View Full Image Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-xl">
                            <span className="font-semibold text-sm">Lihat Sertifikat</span>
                            <ChevronRight className="h-4 w-4" />
                        </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        {/* Category Badge */}
                        <div className="flex items-center justify-center gap-2 mb-3">
                        <div className="p-1.5 bg-primary/10 rounded-lg">
                            <CategoryIcon className="h-3 w-3 text-primary" />
                        </div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                            {certificateCategories[certificate.category]}
                        </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold text-foreground text-center line-clamp-2 group-hover:text-primary transition-colors">
                        {certificate.title}
                        </h3>
                    </div>
                    </motion.div>
                );
                })}
            </motion.div>

            {/* Empty State */}
            {filteredCertificates.length === 0 && (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
                >
                <Award className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-xl text-muted-foreground">
                    Tidak ada sertifikat dalam kategori ini.
                </p>
                </motion.div>
            )}
            </div>
        </section>

        {/* Certificate Image Dialog - Full View Only */}
        <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
            <DialogContent 
            showCloseButton={false}
            className="!max-w-none !w-auto !h-auto !p-0 !border-0 !shadow-none !bg-transparent !rounded-none !gap-0"
            >
            {selectedCertificate && (
                <div className="relative flex items-center justify-center">
                {/* Custom Close Button */}
                <button
                    onClick={() => setSelectedCertificate(null)}
                    className="fixed top-4 right-4 z-[100] p-1 rounded-full bg-black/30 hover:bg-black/70 text-white transition-all duration-200 backdrop-blur-sm cursor-pointer"
                    aria-label="Close"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                
                {/* Full Size Certificate Image - Clean, no borders, no text */}
                <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    width={2000}
                    height={2000}
                    className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain"
                    sizes="95vw"
                    priority
                    quality={100}
                />
                </div>
            )}
            </DialogContent>
        </Dialog>
        </>
    );
}
