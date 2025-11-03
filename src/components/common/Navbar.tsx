// src/components/common/Navbar.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { scrollToSection, scrollToTop } from "@/lib/scroll";
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
    { sectionId: "home", label: "HOME" },
    { sectionId: "layanan", label: "LAYANAN" },
];

// Data untuk dropdown "Tentang Kami"
const aboutUsComponents: { title: string; sectionId: string; description: string }[] = [
    {
        title: "Sejarah Perusahaan",
        sectionId: "tentang-kami",
        description: "Perjalanan kami sejak 2016 dalam industri konstruksi.",
    },
    {
        title: "Sambutan Direktur",
        sectionId: "sambutan-direktur",
        description: "Pesan dan komitmen dari pimpinan kami.",
    },
    {
        title: "Kebijakan Perusahaan",
        sectionId: "kebijakan",
        description: "Fondasi kami dalam menjaga mutu, K3, dan lingkungan.",
    },
    {
        title: "Struktur Organisasi",
        sectionId: "struktur-organisasi",
        description: "Tim solid di balik kesuksesan setiap proyek.",
    },
    {
        title: "Sertifikat & Penghargaan",
        sectionId: "sertifikat",
        description: "Kredibilitas dan pencapaian perusahaan kami.",
    },
];

const projectsComponents: { title: string; sectionId: string; description: string }[] = [
    {
        title: "Wilayah Kerja",
        sectionId: "wilayah-kerja",
        description: "Peta interaktif yang menunjukkan lokasi proyek kami.",
    },
    {
        title: "Proyek Selesai",
        sectionId: "proyek",
        description: "Galeri proyek yang telah berhasil kami selesaikan.",
    },
];

// Komponen helper untuk item di dalam dropdown
interface ListItemProps {
    className?: string;
    title: string;
    children: React.ReactNode;
    sectionId: string;
    onNavigate?: () => void;
}

const ListItem = React.forwardRef<HTMLButtonElement, ListItemProps>(
    ({ className, title, children, sectionId, onNavigate, ...props }, ref) => {
        const handleClick = () => {
            scrollToSection(sectionId);
            onNavigate?.();
        };

        return (
            <li>
                <NavigationMenuLink asChild>
                    <button
                        ref={ref}
                        onClick={handleClick}
                        className={cn(
                            "w-full text-left block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-200 ease-in-out hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transform hover:scale-[1.02] hover:shadow-sm cursor-pointer",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none transition-colors duration-200">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground transition-colors duration-200">
                            {children}
                        </p>
                    </button>
                </NavigationMenuLink>
            </li>
        );
    }
);
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
            <button onClick={scrollToTop} className="flex items-center gap-2 cursor-pointer">
                <Image 
                src="/icon/kartika-jaya.png" 
                alt="Logo KJK" 
                width={48} 
                height={48} 
                />
                <span className={cn("font-semibold text-md transition-colors duration-300", scrolled ? "text-foreground" : "text-white")}>
                KARTIKA JAYA KONTRUKSINDO
                </span>
            </button>

            {/* Right side container for navigation and button */}
            <div className="hidden md:flex items-center gap-6">
                {/* Desktop Navigation using NavigationMenu */}
                <NavigationMenu>
                    <NavigationMenuList>
                    {/* Link Beranda */}
                    <NavigationMenuItem>
                        <NavigationMenuLink 
                            asChild
                        >
                            <button
                                onClick={scrollToTop}
                                className={cn(navigationMenuTriggerStyle(), "bg-transparent transition-all duration-200 ease-in-out cursor-pointer", scrolled ? "text-muted-foreground hover:text-primary hover:bg-accent/50" : "text-white hover:bg-white/10 hover:text-white hover:scale-105")}
                            >
                                HOME
                            </button>
                        </NavigationMenuLink>
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
                                sectionId={component.sectionId}
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
                                sectionId={component.sectionId}
                            >
                                {component.description}
                            </ListItem>
                            ))}
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Sisa Link Utama */}
                    {mainNavLinks.slice(1).map((link) => ( // slice(1) untuk skip "HOME"
                        <NavigationMenuItem key={link.sectionId}>
                        <NavigationMenuLink asChild>
                            <button
                                onClick={() => scrollToSection(link.sectionId)}
                                className={cn(navigationMenuTriggerStyle(), "bg-transparent transition-all duration-200 ease-in-out cursor-pointer", scrolled ? "text-muted-foreground hover:text-primary hover:bg-accent/50" : "text-white hover:bg-white/10 hover:text-white hover:scale-105")}
                            >
                                {link.label}
                            </button>
                        </NavigationMenuLink>
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
                <button 
                    onClick={() => {
                        scrollToTop();
                        setIsOpen(false);
                    }} 
                    className="font-bold text-lg py-2 cursor-pointer hover:text-primary transition-colors"
                >
                    Beranda
                </button>
                <p className="font-semibold text-muted-foreground text-sm pt-2">Tentang Kami</p>
                {aboutUsComponents.map((link) => (
                <button 
                    key={link.sectionId} 
                    onClick={() => {
                        scrollToSection(link.sectionId);
                        setIsOpen(false);
                    }}
                    className="text-base text-foreground hover:text-primary w-full text-center py-2 cursor-pointer transition-colors"
                >
                    {link.title}
                </button>
                ))}
                <p className="font-semibold text-muted-foreground text-sm pt-2">Proyek</p>
                {projectsComponents.map((link) => (
                <button 
                    key={link.sectionId} 
                    onClick={() => {
                        scrollToSection(link.sectionId);
                        setIsOpen(false);
                    }}
                    className="text-base text-foreground hover:text-primary w-full text-center py-2 cursor-pointer transition-colors"
                >
                    {link.title}
                </button>
                ))}
                <p className="font-semibold text-muted-foreground text-sm pt-2">Lainnya</p>
                {mainNavLinks.slice(1).map((link) => (
                <button 
                    key={link.sectionId} 
                    onClick={() => {
                        scrollToSection(link.sectionId);
                        setIsOpen(false);
                    }}
                    className="text-base text-foreground hover:text-primary w-full text-center py-2 cursor-pointer transition-colors"
                >
                    {link.label}
                </button>
                ))}
                <Button className="w-full mt-4">Hubungi Kami</Button>
            </nav>
            </div>
        )}
        </header>
    );
}