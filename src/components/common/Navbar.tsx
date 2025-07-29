// src/components/common/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Drawer } from "vaul";

const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/#tentang-kami", label: "TENTANG KAMI" },
    { href: "/proyek", label: "PROYEK" },
    { href: "/layanan", label: "LAYANAN" },
];

export function Navbar() {
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
                            ? "bg-base-white backdrop-blur-xl px-4 shadow-lg shadow-black/5 sm:rounded-none md:rounded-full lg:rounded-full"
                            : "rounded-none bg-transparent px-4 sm:px-6 lg:px-8"
                    )}
                >
                    {/* Konten Navbar Anda (Link, Logo, Nav, Button) */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image className={cn(scrolled ? "bg-base-white py-1 rounded-full "  : "bg-base-white py-1 rounded-full")} src="/icon/kartika-jaya.png" alt="Logo KJK" width={64} height={64} />
                        <span className= {cn("transition-colors duration-100 ml-0.75", scrolled ? "font-semibold text-base-black sm:text-md md:text-lg lg:text-lg" : "font-semibold text-base-white text-md")}>KARTIKA JAYA KONSTRUKSINDO</span>
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
                        <Button className="bg-base-black cursor-pointer">Hubungi Kami</Button>
                    </nav>

                    {/* Mobile Navigation Toggle */}
                    <div className="md:hidden">
                        <Drawer.Root direction="right">
                            <Drawer.Trigger asChild>
                                <Button variant="ghost">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </Drawer.Trigger>
                            <Drawer.Portal>
                                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                                <Drawer.Content className="fixed bottom-2 right-0 mt-24 flex h-[98%] w-[80%] flex-col rounded-l-lg bg-base-white">
                                    <div className="flex-1 rounded-l-lg bg-base-white p-4">
                                        <div className="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-muted" />
                                        <nav className="flex flex-col items-center gap-4">
                                            {navLinks.map((link) => (
                                                <Drawer.Close asChild key={link.href}>
                                                    <Link
                                                        href={link.href}
                                                        className="text-lg font-medium text-foreground hover:text-primary w-full text-center py-3"
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </Drawer.Close>
                                            ))}
                                            <Button className="w-full mt-4">Hubungi Kami</Button>
                                        </nav>
                                    </div>
                                </Drawer.Content>
                            </Drawer.Portal>
                        </Drawer.Root>
                    </div>
                </div>
            </div>
        </header>
    );
}