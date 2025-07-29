// src/components/common/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/#tentang-kami", label: "Tentang Kami" },
    { href: "/proyek", label: "Proyek" },
    { href: "/layanan", label: "Layanan" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Efek untuk mendeteksi scroll
    useEffect(() => {
        const handleScroll = () => {
        // Set state menjadi true jika scroll lebih dari 50px
        setScrolled(window.scrollY > 50);
        };

        // Tambahkan event listener saat komponen dimuat
        window.addEventListener("scroll", handleScroll);

        // Hapus event listener saat komponen di-unmount
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <header 
            className={cn(
                "fixed z-50 w-full transition-all duration-300 ease-in-out",
                // Mengatur posisi 'floating' saat di-scroll
                scrolled ? "md:top-4" : "md:top-0"
            )}
        >
            {/* 1. WRAPPER LUAR: Mengatur perubahan LEBAR dan posisi tengah */}
            <div
                className={cn(
                    "container mx-auto transition-all duration-300 ease-in-out",
                    scrolled ? "max-w-6xl" : "max-w-full"
                )}
            >
                {/* 2. WRAPPER DALAM: Mengatur perubahan TAMPILAN (radius, background, padding) */}
                <div
                    className={cn(
                        "flex h-16 items-center justify-between transition-all duration-300 ease-in-out",
                        scrolled
                            ? "rounded-full bg-background/100 backdrop-blur-xl px-4 shadow-lg shadow-black/5"
                            : "rounded-none bg-transparent px-4 sm:px-6 lg:px-8"
                    )}
                >
                    {/* Konten Navbar Anda (Link, Logo, Nav, Button) */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image className={cn(scrolled ? "bg-base-white py-1 rounded-full"  : "bg-base-white py-1 rounded-full")} src="/icon/kartika-jaya.png" alt="Logo KJK" width={64} height={64} />
                        <span className= {cn("transition-colors duration-100", scrolled ? "font-semibold text-lg text-base-black" : "font-semibold text-base-white text-md")}>Kartika Jaya Konstruksindo</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn("transition-colors duration-300", scrolled ? "text-sm font-medium text-muted-foreground transition-colors hover:text-primary" : "text-sm font-medium text-base-white transition-colors hover:text-primary")}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button className="bg-base-black">Hubungi Kami</Button>
                    </nav>

                    {/* Mobile Navigation Toggle */}
                    <div className="md:hidden">
                        <Button variant="ghost" size="default" onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>
        
        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden bg-background border-t border-border mt-0.5">
            <nav className="flex flex-col items-center gap-4 p-4">
                {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-foreground hover:text-primary w-full text-center py-2"
                    onClick={() => setIsOpen(false)}
                >
                    {link.label}
                </Link>
                ))}
                <Button className="w-full mt-2">Hubungi Kami</Button>
            </nav>
            </div>
        )}
        </header>
    );
}