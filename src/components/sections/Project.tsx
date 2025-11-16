// src/components/sections/ProjectsSection.tsx
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { unifiedProjectData } from "@/data/projects";

import { Button } from "@/components/ui/Button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

// Definisikan tipe data untuk setiap item proyek
export interface ProjectItem {
    id: string;
    title: string;
    location: string;
    client: string;
    year: string;
    description: string;
    scope: string[];
    image: string;
}

export const ProjectsSection = () => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

    // Memoize project data untuk menghindari re-render
    const projects = useMemo(() => unifiedProjectData, []);

    // Optimize handler dengan useCallback
    const handleProjectClick = useCallback((project: ProjectItem) => {
        setSelectedProject(project);
    }, []);

    const handleCloseDialog = useCallback(() => {
        setSelectedProject(null);
    }, []);

    useEffect(() => {
        if (!carouselApi) return;
        
        const updateCarousel = () => {
        setCurrentSlide(carouselApi.selectedScrollSnap());
        };
        
        carouselApi.on("select", updateCarousel);
        return () => {
            carouselApi?.off("select", updateCarousel);
        };
    }, [carouselApi]);

    return (
        <>
        <section 
        id="proyek" 
        className="relative py-20 sm:py-32 text-white w-full bg-cover bg-center bg-fixed overflow-hidden"
        style={{ backgroundImage: "url('/img/project-background.png')" }}
        >
            <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
                <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
                    PENGALAMAN PROYEK KAMI
                </h2>
                <p className="max-w-lg text-base-white/80">
                    Jelajahi beberapa proyek strategis yang telah kami kerjakan di seluruh Indonesia.
                </p>
                </div>
                <div className="hidden shrink-0 gap-2 md:flex">
                <Button variant="outline" onClick={() => carouselApi?.scrollPrev()} disabled={!carouselApi?.canScrollPrev()}>
                    <ArrowLeft className="size-5" />
                </Button>
                <Button variant="outline" onClick={() => carouselApi?.scrollNext()} disabled={!carouselApi?.canScrollNext()}>
                    <ArrowRight className="size-5" />
                </Button>
                </div>
            </div>
            </div>
            <div className="w-full">
            <Carousel setApi={setCarouselApi} opts={{ align: "start" }}>
                <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
                {projects.map((item) => (
                    <CarouselItem key={item.id} className="max-w-[320px] pl-4 sm:pl-6 lg:max-w-[380px]">
                    <div 
                        className="group rounded-xl block cursor-pointer will-change-transform"
                        onClick={() => handleProjectClick(item)}
                    >
                        <div className="group relative h-full min-h-[28rem] overflow-hidden rounded-xl">
                        <Image
                            src={item.image} alt={item.title} fill
                            className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 380px"
                        />
                        <div className="absolute inset-0 h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                            <p className="text-sm font-semibold">{item.location} | {item.year}</p>
                            <h3 className="mb-2 pt-2 text-xl font-bold md:mb-3">
                            {item.title}
                            </h3>
                            <p className="mb-8 line-clamp-2 text-sm text-primary-foreground/80">
                            {item.description}
                            </p>
                            <div className="flex items-center text-sm font-semibold">
                            Lihat Detail
                            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                        </div>
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
            </Carousel>
            <div className="mt-8 flex justify-center gap-2">
                {projects.map((_, index) => (
                <button
                    key={index}
                    className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? "bg-white" : "bg-white/30"}`}
                    onClick={() => carouselApi?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                />
                ))}
            </div>
            </div>
        </section>

        {/* Komponen Dialog untuk Popup */}
        <Dialog open={!!selectedProject} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-[600px] bg-white dark:bg-slate-950 flex flex-col max-h-[90vh] p-0 overflow-hidden">
            {selectedProject && (
                <>
                <div className="relative w-full h-64 flex-shrink-0">
                    <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover rounded-t-xl" />
                </div>
                <DialogHeader className="p-6 flex-shrink-0">
                    <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
                    <DialogDescription>
                    {selectedProject.location} | {selectedProject.year}
                    </DialogDescription>
                </DialogHeader>
                {/* Area Konten yang Bisa di-scroll */}
                <div 
                    className="px-6 pb-6 overflow-y-auto overscroll-contain flex-1"
                    onWheel={(e) => {
                        // Prevent scroll propagation to background
                        e.stopPropagation();
                        
                        const element = e.currentTarget;
                        const isScrollable = element.scrollHeight > element.clientHeight;
                        
                        if (!isScrollable) return;
                        
                        const isAtTop = element.scrollTop === 0;
                        const isAtBottom = element.scrollTop + element.clientHeight >= element.scrollHeight - 1;
                        
                        // Prevent scroll if trying to scroll beyond boundaries
                        if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
                            e.preventDefault();
                        }
                    }}
                >
                    <h4 className="font-semibold mb-2">Detail Proyek:</h4>
                    <p className="text-sm text-muted-foreground mb-4">{selectedProject.description}</p>
                    <h4 className="font-semibold mb-2">Lingkup Pekerjaan:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {selectedProject.scope.map(s => <li key={s}>{s}</li>)}
                    </ul>
                    <p className="text-sm text-muted-foreground mt-4">
                    <span className="font-semibold">Kontraktor Utama:</span> {selectedProject.client}
                    </p>
                </div>
                </>
            )}
            </DialogContent>
        </Dialog>
        </>
    );
};