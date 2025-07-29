// src/components/sections/Policies.tsx
"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { Gem, ShieldCheck, Leaf, Check } from "lucide-react";

// Data untuk setiap kartu kebijakan
const policiesData = [
    {
        icon: Gem,
        title: "Kebijakan Mutu",
        points: [
        "Mengutamakan kepuasan pelanggan.",
        "Menjaga kualitas produk dan jasa sesuai dengan persyaratan spesifikasi teknis yang mengacu pada standar nasional atau internasional",
        "Membentuk SDM yang berpengetahuan, terampil, disiplin, dan berkualitas.",
        "Berupaya keras dalam melaksanakan perbaikan yang berkesinambungan.",
        "Menerapkan sistem teknologi tepat guna."
        ],
    },
    {
    icon: ShieldCheck,
    title: "Kebijakan K3",
    points: [
        "Menjamin Keselamatan dan Kesehatan Kerja setiap orang (tenaga kerja, kontraktor, pemasok, pengunjung, dan tamu) di tempat kerja.",
        "Mematuhi ketentuan dan peraturan yang berlaku dalam lingkup kegiatan perusahaan.",
        "Melakukan perbaikan berkelanjutan terhadap sistem manajemen dan kinerja K3 guna meningkatkan budaya K3 yang baik di tempat kerja.",
        "Membangun dan memelihara sistem K3 yang berkelanjutan.",
        "Memberikan pendidikan ataupun pelatihan terkait K3 kepada tenaga kerja."
        ],
    },
    {
    icon: Leaf,
    title: "Kebijakan Lingkungan",
    points: [
        "Perusahaan tanggap terhadap kebutuhan dan kepentingan dengan cara menghasilkan layanan yang ramah lingkungan.",
        "Meningkatkan kepedulian terhadap lingkungan kerja.",
        "Melakukan pencegahan terhadap pencemaran lingkungan secara berkelanjutan melalui program Green Building, Green Procurement, Green Processes dan 3R (Reduce, Reuse, and Recycle)."
        ],
    },
];

export function Policies() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <section id="kebijakan" ref={ref} className="w-full bg-base-white dark:bg-card py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-4 lg:px-8">
            {/* Header Seksi */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
            >
            <h2 className="text-xl font-semibold uppercase tracking-wider sm:text-4xl">
                Kebijakan Perusahaan
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-base-black/60">
                Fondasi kami dalam menjalankan setiap proyek dengan standar tertinggi.
            </p>
            </motion.div>

            {/* Grid untuk Kartu Kebijakan */}
            <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
            {policiesData.map((policy) => (
                <motion.div
                key={policy.title}
                variants={itemVariants}
                className="flex flex-col rounded-2xl bg-base-white dark:bg-slate-900 p-8 shadow-lg"
                >
                <div className="flex items-center gap-4">
                    <policy.icon className="h-8 w-8 text-base-black" />
                    <h3 className="text-xl font-bold text-base-black">{policy.title}</h3>
                </div>
                <ul className="mt-6 space-y-4">
                    {policy.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-base-black flex-shrink-0 mt-1" />
                        <span className="text-sm text-base-black/60">{point}</span>
                    </li>
                    ))}
                </ul>
                </motion.div>
            ))}
            </motion.div>
        </div>
        </section>
    );
}