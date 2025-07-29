// src/components/sections/AboutUs.tsx
"use client";

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion"; // 1. Impor `Variants`
import { useRef } from "react";

// 2. Pindahkan definisi variants ke luar komponen
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

export function AboutUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="tentang-kami" ref={ref} className="w-full bg-base-white dark:bg-card py-20 sm:py-32">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-2 md:gap-16 lg:px-8"
        >
            {/* Kolom Gambar */}
            <motion.div variants={itemVariants} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
                src="/img/dirut.jpg"
                alt="Tim PT Kartika Jaya Kontruksindo di lapangan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            </motion.div>

            {/* Kolom Teks */}
            <div className="flex flex-col justify-center">
            <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold tracking-tight text-base-black sm:text-4xl"
            >
                Sejarah Perusahaan
            </motion.h2>
            <motion.p
                variants={itemVariants}
                className="mt-4 text-muted-foreground text-sm text-justify"
            >
                PT Kartika Jaya Kontruksindo merupakan perusahaan yang bergerak di bidang jasa konstruksi serta supplier material dan alat bidang teknik. Perusahaan ini didirikan pada tanggal 15 Maret 2016. Tujuan didirikannya perusahaan ini adalah mewadahi mimpi dan usaha para pengurusnya dalam membantu pembangunan negara di bidang infrastruktur. PT Kartika Jaya Kontruksindo bekerja sama dengan Badan Usaha Milik Negara (BUMN) dan Perusahaan Swasta Nasional dalam melakukan pekerjaannya. Sampai saat ini PT Kartika Jaya Kontruksindo selalu berupaya untuk memberikan usaha terbaik di setiap pekerjaan yang sedang dikerjakan.
            </motion.p>
            <motion.div
                variants={itemVariants}
                className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
                {/* Visi dan Misi */}
                <div>
                <h3 className="text-lg font-bold text-base-black">Visi</h3>
                <p className="mt-2 text-sm text-muted-foreground text-justify">
                    Menjadi perusahaan di bidang konstruksi yang bertanggung jawab, disiplin, terpercaya, dan dapat diandalkan.
                </p>
                </div>
                <div>
                <h3 className="text-lg font-bold text-base-black">Misi</h3>
                <ul className="mt-2 list-disc space-y-1 text-sm text-muted-foreground text-justify ml-4">
                    <li>Berpartisipasi dalam pembangunan nasional maupun internasional melalui jasa konstruksi.</li>
                    <li>Menyediakan jasa konstruksi yang dapat memberikan nilai tambah bagi main kontraktor maupun owner.</li>
                    <li>Mengutamakan kualitas, kuantitas, mutu dan keselamatan kerja.</li>
                </ul>
                </div>
            </motion.div>
            </div>
        </motion.div>
        </section>
    );
}