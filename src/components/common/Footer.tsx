// src/components/common/Footer.tsx
"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-12 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                <Image 
                    src="/icon/kartika-jaya.png" 
                    alt="Logo KJK" 
                    width={48} 
                    height={48} 
                />
                <div>
                    <h3 className="font-bold text-lg">PT Kartika Jaya Kontruksindo</h3>
                    <p className="text-sm text-slate-400">Kontruksindo</p>
                </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                Perusahaan konstruksi terpercaya yang berpengalaman dalam proyek infrastruktur strategis di seluruh Indonesia sejak 2016.
                </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
                <h4 className="font-bold text-lg mb-4 text-secondary">Kontak Kami</h4>
                <div className="space-y-3">
                <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-slate-300">
                    <p>Komplek Cilame Permai Jl. Perisai</p>
                    <p>Blok E No.12E, Kab. Bandung Barat</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                    <a href="tel:081267547161" className="text-sm text-slate-300 hover:text-secondary transition-colors">
                    081267547161
                    </a>
                </div>
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                    <a href="mailto:kartikajayakontruksindo@gmail.com" className="text-sm text-slate-300 hover:text-secondary transition-colors break-all">
                    kartikajayakontruksindo@gmail.com
                    </a>
                </div>
                </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4 md:col-span-2 lg:col-span-2">
                <h4 className="font-bold text-lg mb-4 text-secondary">Ikuti Kami</h4>
                <p className="text-sm text-slate-400 mb-6">
                Ikuti media sosial kami untuk update terbaru tentang proyek dan kegiatan perusahaan.
                </p>
                <div className="flex flex-wrap gap-4">
                {/* Facebook */}
                <a
                    href="https://web.facebook.com/p/Kartika-Jaya-Kontruksindo-100063703685862/?_rdc=1&_rdr#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-slate-800 hover:bg-blue-600 transition-all duration-300 px-6 py-4 rounded-lg group"
                >
                    <Facebook className="h-6 w-6 text-blue-400 group-hover:text-white transition-colors" />
                    <div>
                    <p className="font-semibold text-white">Facebook</p>
                    <p className="text-xs text-slate-400 group-hover:text-slate-200">@KartikaJayaKontruksindo</p>
                    </div>
                </a>

                {/* Instagram */}
                <a
                    href="https://www.instagram.com/kartika_jaya_kontruksindo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-slate-800 hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all duration-300 px-6 py-4 rounded-lg group"
                >
                    <Instagram className="h-6 w-6 text-pink-400 group-hover:text-white transition-colors" />
                    <div>
                    <p className="font-semibold text-white">Instagram</p>
                    <p className="text-xs text-slate-400 group-hover:text-slate-200">@kartika_jaya_kontruksindo</p>
                    </div>
                </a>

                {/* TikTok */}
                <a
                    href="https://www.tiktok.com/@kartikajayakontruksindo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-slate-800 hover:bg-gradient-to-r hover:from-[#00f2ea] hover:to-[#ff0050] transition-all duration-300 px-6 py-4 rounded-lg group"
                >
                    <TikTokIcon className="h-6 w-6 text-slate-300 group-hover:text-white transition-colors" />
                    <div>
                    <p className="font-semibold text-white">TikTok</p>
                    <p className="text-xs text-slate-400 group-hover:text-slate-200">@kartikajayakontruksindo</p>
                    </div>
                </a>
                </div>
            </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                <p>© {new Date().getFullYear()} PT Kartika Jaya Kontruksindo. All rights reserved.</p>
                <p>Perusahaan Konstruksi Terpercaya Sejak 2016</p>
            </div>
            </div>
        </div>
        </footer>
    );
}
