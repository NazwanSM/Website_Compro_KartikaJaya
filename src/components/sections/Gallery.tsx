// src/components/sections/Gallery.tsx
"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Data foto gallery - ganti dengan foto-foto aktual Anda
const galleryImages = {
  row1: [
    { src: "/gallery/1.jpg", alt: "Proyek Konstruksi 1" },
    { src: "/gallery/2.jpg", alt: "Proyek Konstruksi 2" },
    { src: "/gallery/3.jpg", alt: "Proyek Konstruksi 3" },
    { src: "/gallery/4.jpg", alt: "Proyek Konstruksi 4" },
    { src: "/gallery/5.jpg", alt: "Proyek Konstruksi 5" },
    { src: "/gallery/6.jpg", alt: "Proyek Konstruksi 6" },
  ],
  row2: [
    { src: "/gallery/7.jpg", alt: "Proyek Konstruksi 7" },
    { src: "/gallery/8.jpg", alt: "Proyek Konstruksi 8" },
    { src: "/gallery/9.jpg", alt: "Proyek Konstruksi 9" },
    { src: "/gallery/10.jpg", alt: "Proyek Konstruksi 10" },
    { src: "/gallery/11.jpg", alt: "Proyek Konstruksi 11" },
    { src: "/gallery/12.jpg", alt: "Proyek Konstruksi 12" },
  ],
};

// Komponen GalleryImage yang dimemoize untuk performa
const GalleryImage = memo(({ src, alt, index }: { src: string; alt: string; index: number }) => (
  <div
    className="relative flex-shrink-0 w-80 h-64 rounded-xl overflow-hidden group"
  >
    <Image
      src={src}
      alt={alt}
      width={320}
      height={256}
      quality={75}
      loading={index < 6 ? "eager" : "lazy"}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
      sizes="(max-width: 768px) 100vw, 320px"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </div>
));
GalleryImage.displayName = "GalleryImage";

export function Gallery() {
  // Duplikasi array untuk seamless loop
  const duplicatedRow1 = [...galleryImages.row1, ...galleryImages.row1];
  const duplicatedRow2 = [...galleryImages.row2, ...galleryImages.row2];

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-background via-slate-50 dark:via-slate-900 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-wider">
            GALERI KAMI
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dokumentasi perjalanan PT Kartika Jaya Kontruksindo dalam membangun Indonesia
          </p>
        </motion.div>
      </div>

      {/* Row 1 - Bergerak ke Kanan */}
      <div className="relative mb-6 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ willChange: "transform" }}
        >
          {duplicatedRow1.map((image, index) => (
            <GalleryImage
              key={`row1-${index}`}
              src={image.src}
              alt={image.alt}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Bergerak ke Kiri */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{
            x: ["-50%", 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          style={{ willChange: "transform" }}
        >
          {duplicatedRow2.map((image, index) => (
            <GalleryImage
              key={`row2-${index}`}
              src={image.src}
              alt={image.alt}
              index={index}
            />
          ))}
        </motion.div>
      </div>

      {/* Gradient Overlays untuk Fade Effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </section>
  );
}
