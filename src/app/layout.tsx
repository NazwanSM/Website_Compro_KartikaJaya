// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/common/SmoothScroll"; // Import komponen baru

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT. Kartika Jaya Kontruksindo", // Ganti judulnya
  description: "Perusahaan Jasa Konstruksi dan Supplier Material Teknik", // Ganti deskripsinya
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-slate-800 to-slate-950` }
      >
        <SmoothScroll>{children}</SmoothScroll> {/* Bungkus children */}
      </body>
    </html>
  );
}