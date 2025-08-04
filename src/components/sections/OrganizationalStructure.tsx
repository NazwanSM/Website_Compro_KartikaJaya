// src/components/sections/OrganizationalStructure.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function OrganizationalStructure() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="struktur-organisasi" ref={ref} className="w-full bg-base-white dark:bg-card py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
            >
            <h2 className="text-xl font-semibold uppercase tracking-wider sm:text-4xl">
                Struktur Organisasi
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
                Kerangka kerja yang solid untuk memastikan setiap proyek berjalan dengan efisien dan terkoordinasi.
            </p>
            </motion.div>

            {/* Container gambar organogram dengan fitur zoom */}
            <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 sm:mt-12 flex justify-center"
            >
                <div className="relative overflow-hidden rounded-xl bg-slate-900 p-4 sm:p-6 shadow-lg max-w-5xl w-full">
                    <div className="transform transition-all duration-700 ease-in-out group-hover:scale-110 origin-center">
                        <Image
                            src="/img/Organogram.svg"
                            alt="Struktur Organisasi PT Kartika Jaya"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain"
                            priority
                        />
                    </div>
                    
                    {/* Overlay untuk efek zoom */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300 rounded-xl pointer-events-none"></div>
                </div>
            </motion.div>
        </div>
        </section>
    );
}