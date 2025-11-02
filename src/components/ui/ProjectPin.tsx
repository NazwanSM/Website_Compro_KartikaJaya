// src/components/sections/ProjectPin.tsx
"use client";

import { memo } from "react";
import { MapPin, Briefcase, Building2, Calendar, FileText } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface ProjectData {
  id: string;
  title: string;
  location: string;
  tempat?: string;
  client: string;
  year: string;
  description: string;
  scope: string[];
  image: string;
  position: { top: string; left: string };
}

interface ProjectPinProps {
  project: ProjectData;
}

// Komponen ProjectPin yang di-memoize untuk performa
export const ProjectPin = memo(({ project }: ProjectPinProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10 will-change-transform"
          style={{ 
            top: project.position.top, 
            left: project.position.left,
          }}
          aria-label={`View project in ${project.location}`}
        >
          <MapPin className="h-5 w-5 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-125 group-active:scale-125" />
          <span className="absolute -bottom-3 -right-0.1 h-2 w-2 rounded-full bg-red-500 ring-1 ring-white animate-pulse"></span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 sm:w-96 shadow-2xl border-0 rounded-xl p-0 z-40 overflow-hidden">
        {/* Header dengan Tempat dan Tahun - Fixed Header */}
        <div className="sticky top-0 bg-base-white z-10 border-b border-gray-100 p-4 rounded-t-xl">
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="font-bold text-lg leading-tight text-primary mb-1">{project.location}</h4>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <p className="text-sm font-medium text-muted-foreground">{project.year}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div 
          className="max-h-80 overflow-y-auto overscroll-contain bg-base-white rounded-xl"
          onWheel={(e) => {
            e.stopPropagation();
            
            const element = e.currentTarget;
            const isScrollable = element.scrollHeight > element.clientHeight;
            
            if (!isScrollable) return;
            
            const isAtTop = element.scrollTop === 0;
            const isAtBottom = element.scrollTop + element.clientHeight >= element.scrollHeight - 1;
            
            if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
              e.preventDefault();
            }
          }}
        >
          <div className="p-4 space-y-4">
            {/* Deskripsi Pekerjaan */}
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <FileText className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h5 className="text-sm font-semibold text-gray-700 mb-1">Deskripsi Pekerjaan</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>

            {/* Kontraktor Utama */}
            {project.client && (
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h5 className="text-sm font-semibold text-gray-700 mb-1">Kontraktor Utama</h5>
                    <p className="text-sm font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10">
                      {project.client}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bidang Pekerjaan */}
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Briefcase className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2">Bidang Pekerjaan</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {project.scope.map((bidang, index) => (
                      <span 
                        key={index}
                        className="inline-block px-2.5 py-1 text-xs font-medium bg-gradient-to-r from-primary/10 to-primary/5 text-primary rounded-full border border-primary/20 hover:bg-primary/15 transition-colors"
                      >
                        {bidang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}, (prevProps, nextProps) => {
  // Custom comparison untuk memoization
  return prevProps.project.id === nextProps.project.id;
});

ProjectPin.displayName = "ProjectPin";
