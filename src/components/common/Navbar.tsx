// src/components/common/Navbar.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Data untuk link utama
const mainNavLinks = [
    { href: "/", label: "HOME" },
    { href: "/#layanan", label: "LAYANAN" },
];

// Data untuk dropdown "Tentang Kami"
const aboutUsComponents: { title: string; href: string; description: string }[] = [
    {
        title: "Sejarah Perusahaan",
        href: "/#tentang-kami",
        description: "Perjalanan kami sejak 2016 dalam industri konstruksi.",
    },
    {
        title: "Sambutan Direktur",
        href: "/#sambutan-direktur",
        description: "Pesan dan komitmen dari pimpinan kami.",
    },
    {
        title: "Kebijakan Perusahaan",
        href: "/#kebijakan",
        description: "Fondasi kami dalam menjaga mutu, K3, dan lingkungan.",
    },
    {
        title: "Struktur Organisasi",
        href: "/#struktur-organisasi",
        description: "Tim solid di balik kesuksesan setiap proyek.",
    },
];

const projectsComponents: { title: string; href: string; description: string }[] = [
    {
        title: "Wilayah Kerja",
        href: "/#wilayah-kerja",
        description: "Peta interaktif yang menunjukkan lokasi proyek kami.",
    },
    {
        title: "Proyek Selesai",
        href: "/#proyek",
        description: "Galeri proyek yang telah berhasil kami selesaikan.",
    },
];

// Komponen helper untuk item di dalam dropdown
const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
    >(({ className, title, children, ...props }, ref) => {
    return (
        <li>
        <NavigationMenuLink asChild>
            <a
            ref={ref}
            className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transform hover:scale-[1.02] hover:shadow-sm",
                className
            )}
            {...props}
            >
            <div className="text-sm font-medium leading-none transition-colors duration-200">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground transition-colors duration-200">
                {children}
            </p>
            </a>
        </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header 
        className={cn(
            "fixed z-50 w-full transition-all duration-300 ease-in-out md:px-4",
            scrolled ? "md:top-4" : "md:top-0"
        )}
        >
        <div
            className={cn(
            "container mx-auto transition-all duration-300 ease-in-out",
            scrolled ? "max-w-6xl" : "max-w-full"
            )}
        >
            <div
            className={cn(
                "flex h-16 items-center justify-between transition-all duration-300 ease-in-out",
                scrolled
                ? "rounded-full bg-background/80 backdrop-blur-xl px-6 shadow-lg shadow-black/5"
                : "rounded-none bg-transparent px-4 sm:px-6 lg:px-8"
            )}
            >
            <Link href="/" className="flex items-center gap-2">
                <Image 
                src="/icon/kartika-jaya.png" 
                alt="Logo KJK" 
                width={48} 
                height={48} 
                />
                <span className={cn("font-semibold text-md transition-colors duration-300", scrolled ? "text-foreground" : "text-white")}>
                KARTIKA JAYA KONTRUKSINDO
                </span>
            </Link>

            {/* Right side container for navigation and button */}
            <div className="hidden md:flex items-center gap-6">
                {/* Desktop Navigation using NavigationMenu */}
                <NavigationMenu>
                    <NavigationMenuList>
                    {/* Link Beranda */}
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent transition-all duration-200 ease-in-out", scrolled ? "text-muted-foreground hover:text-primary hover:bg-accent/50" : "text-white hover:bg-white/10 hover:text-white hover:scale-105")}>
                            HOME
                        </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Dropdown Tentang Kami */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={cn("bg-transparent transition-all duration-200 ease-in-out", scrolled ? "text-muted-foreground hover:text-primary hover:bg-accent/50" : "text-white hover:bg-white/10 hover:text-white hover:scale-105")}>
                        TENTANG KAMI
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="animate-in slide-in-from-top-2 fade-in-0 duration-300">
                        <ul className="grid w-[300px] gap-4 p-4">
                            {aboutUsComponents.map((component) => (
                            <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                            >
                                {component.description}
                            </ListItem>
                            ))}
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Dropdown Proyek */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={cn("bg-transparent transition-all duration-200 ease-in-out", scrolled ? "text-muted-foreground hover:text-primary hover:bg-accent/50" : "text-white hover:bg-white/10 hover:text-white hover:scale-105")}>
                        PROYEK
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="animate-in slide-in-from-top-2 fade-in-0 duration-300">
                        <ul className="grid w-[300px] gap-4 p-4">
                            {projectsComponents.map((component) => (
                            <ListItem
                                key={component.title}
                                title={component.title}
                                href={component.href}
                            >
                                {component.description}
                            </ListItem>
                            ))}
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Sisa Link Utama */}
                    {mainNavLinks.slice(1).map((link) => ( // slice(1) untuk skip "Beranda"
                        <NavigationMenuItem key={link.href}>
                        <Link href={link.href} legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent transition-all duration-200 ease-in-out", scrolled ? "text-muted-foreground hover:text-primary hover:bg-accent/50" : "text-white hover:bg-white/10 hover:text-white hover:scale-105")}>
                            {link.label}
                            </NavigationMenuLink>
                        </Link>
                        </NavigationMenuItem>
                    ))}
                    </NavigationMenuList>
                </NavigationMenu>
                
                <Button>Hubungi Kami</Button>
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="md:hidden">
                <Button variant="ghost" size="default" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X className="h-6 w-6" /> : <Menu className={cn("h-6 w-6 transition-colors duration-300", scrolled ? "text-foreground" : "text-white")} />}
                </Button>
            </div>
            </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
            <div className="md:hidden bg-background border-t border-border mt-0.5">
            <nav className="flex flex-col items-center gap-2 p-4">
                <Link href="/" className="font-bold text-lg py-2" onClick={() => setIsOpen(false)}>Beranda</Link>
                <p className="font-semibold text-muted-foreground text-sm pt-2">Tentang Kami</p>
                {aboutUsComponents.map((link) => (
                <Link key={link.href} href={link.href} className="text-base text-foreground hover:text-primary w-full text-center py-2" onClick={() => setIsOpen(false)}>{link.title}</Link>
                ))}
                <p className="font-semibold text-muted-foreground text-sm pt-2">Lainnya</p>
                {mainNavLinks.slice(1).map((link) => (
                <Link key={link.href} href={link.href} className="text-base text-foreground hover:text-primary w-full text-center py-2" onClick={() => setIsOpen(false)}>{link.label}</Link>
                ))}
                <Button className="w-full mt-4">Hubungi Kami</Button>
            </nav>
            </div>
        )}
        </header>
    );
}