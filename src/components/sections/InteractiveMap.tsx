// src/components/sections/InteractiveMap.tsx
"use client";

import { motion, useInView, Variants} from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { unifiedProjectData } from "@/data/projects";
import { ProjectPin } from "../ui/ProjectPin";

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
                    <ProjectPin key={project.id} project={project} />
                ))}
                </div>
            </div>
            </motion.div>
        </motion.div>
        </section>
    );
}