// src/components/sections/Hero.tsx
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative z-0 w-full h-[calc(110vh-4rem)] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
            src="/img/hero.jpg"
            alt="Proyek Konstruksi PT Kartika Jaya Kontruksindo"
            fill
            className="object-cover z-0 brightness-50"
            priority
            sizes="100vw"
        />

        <div className="relative z-10 text-center text-base-white px-4">
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
            Membangun Negeri
            </motion.h1>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80"
            >
            Perusahaan jasa konstruksi terpercaya yang berfokus pada kualitas,
            keselamatan, dan kepuasan pelanggan sejak 2016.
            </motion.p>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-8"
            >
            <Button size="lg">
                Lihat Proyek Kami <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </motion.div>
        </div>
        </section>
    );
}