// src/components/sections/DirectorSpeech.tsx
"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export function DirectorSpeech() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
        },
    };

    return (
        <section id="sambutan-direktur" ref={ref} className="w-full bg-slate-900 py-20 sm:py-32 overflow-hidden">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 md:gap-16 lg:px-8"
        >
            {/* Kolom Teks (Kiri) */}
            <div className="flex flex-col justify-center order-2 md:order-1">
            <motion.p 
                variants={itemVariants} 
                className="text-sm font-semibold uppercase tracking-wider text-base-white"
            >
                Sambutan Direktur Utama
            </motion.p>
            <motion.h2
                variants={itemVariants}
                className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-base-white"
            >
                Halooooo
            </motion.h2>
            <motion.div variants={itemVariants} className="mt-6">
                <p className="text-sm text-base-white/80 text-justify">
                Puji syukur kami panjatkan ke hadirat Tuhan Yang Maha Esa atas segala limpahan rahmat dan karunia-Nya, sehingga PT Kartika Jaya Kontruksindo terus berkembang dan berkontribusi dalam pembangunan infrastruktur nasional sejak didirikan pada tahun 2016.

<br/><br/>Sebagai perusahaan yang bergerak di bidang jasa konstruksi serta penyedia material dan alat teknik, kami senantiasa menjunjung tinggi nilai tanggung jawab, kedisiplinan, dan integritas dalam setiap proyek yang kami tangani. Melalui kerja sama yang erat dengan berbagai mitra strategis, baik dari BUMN maupun sektor swasta nasional, kami berkomitmen untuk memberikan hasil terbaik yang sesuai dengan standar mutu dan keselamatan kerja yang tinggi.

<br/><br/>Visi kami adalah menjadi perusahaan konstruksi yang dapat diandalkan dan terpercaya, yang turut aktif dalam pembangunan nasional maupun internasional. Untuk mewujudkan visi tersebut, kami terus mendorong pengembangan sumber daya manusia yang unggul, penerapan teknologi tepat guna, serta penerapan prinsip keberlanjutan dalam setiap aspek kegiatan usaha kami.

<br/><br/>Kami percaya bahwa keberhasilan PT Kartika Jaya Kontruksindo tidak terlepas dari kepercayaan dan dukungan para mitra, pelanggan, serta seluruh pemangku kepentingan. Oleh karena itu, kami berkomitmen untuk menjaga kepercayaan tersebut melalui pelayanan yang profesional dan berkualitas.

<br/><br/>Akhir kata, kami mengucapkan terima kasih atas kepercayaan yang telah diberikan. Semoga kehadiran kami dapat terus memberikan kontribusi positif bagi pembangunan bangsa dan masyarakat luas.

                </p>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-8">
                <p className="font-semibold text-lg text-base-white">Andi Kurniawan, S.E.</p>
                <p className="text-sm text-muted-foreground">Direktur Utama</p>
            </motion.div>
            </div>

            {/* Kolom Gambar (Kanan) */}
            <motion.div 
                variants={itemVariants} 
                className="relative aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden order-1 md:order-2 shadow-2xl"
            >
            <Image
                src="/img/dirut2.jpg"
                alt="Andi Kurniawan - Direktur Utama PT Kartika Jaya Kontruksindo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
        </motion.div>
        </section>
    );
}