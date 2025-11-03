// src/app/page.tsx

import { Navbar } from "@/components/common/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutUs } from "@/components/sections/AboutUs";
import { DirectorSpeech } from "@/components/sections/DirectorSpeech";
import { Policies } from "@/components/sections/Policies";
import { OrganizationalStructure } from "@/components/sections/OrganizationalStructure";
import { InteractiveMap } from "@/components/sections/InteractiveMap";
import { ProjectsSection } from "@/components/sections/Project";
import { Certificates } from "@/components/sections/Certificates";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <section id="home" className="w-full">
          <Hero />
        </section>
        <section id="tentang-kami" className="w-full">
          <AboutUs />
        </section>
        <section id="sambutan-direktur" className="w-full">
          <DirectorSpeech />
        </section>
        <section id="kebijakan" className="w-full">
          <Policies />
        </section>
        <section id="struktur-organisasi" className="w-full">
          <OrganizationalStructure />
        </section>
        <section id="wilayah-kerja" className="w-full">
          <InteractiveMap />
        </section>
        <section id="proyek" className="w-full">
          <ProjectsSection />
        </section>
        <section id="sertifikat" className="w-full">
          <Certificates />
        </section>
        <section id="layanan" className="w-full">
          <div className="container mx-auto py-20 text-center">
            <h2 className="text-3xl font-bold">Seksi Selanjutnya</h2>
            <p className="mt-4 text-muted-foreground">Konten akan ditambahkan di sini.</p>
          </div>
        </section>
      </main>
      {/* Footer bisa ditambahkan di sini nanti */}
    </>
  );
}