// src/app/page.tsx

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { Hero } from "@/components/sections/Hero";
import { AboutUs } from "@/components/sections/AboutUs";
import { DirectorSpeech } from "@/components/sections/DirectorSpeech";
import { Policies } from "@/components/sections/Policies";
import { OrganizationalStructure } from "@/components/sections/OrganizationalStructure";
import { InteractiveMap } from "@/components/sections/InteractiveMap";
import { ProjectsSection } from "@/components/sections/Project";
import { Gallery } from "@/components/sections/Gallery";

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
        <section id="galeri" className="w-full">
          <Gallery />
        </section>
      </main>
      <section id="footer" className="w-full">
        <Footer />
      </section>
    </>
  );
}