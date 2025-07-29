// src/app/page.tsx

import { Navbar } from "@/components/common/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutUs } from "@/components/sections/AboutUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <AboutUs />
        {/* Di sini Anda bisa menambahkan seksi-seksi lain nanti */}
        {/* contoh: <LayananSection />, <ProyekUnggulanSection />, dll. */}
        <div className="container mx-auto py-20 text-center">
            <h2 className="text-3xl font-bold">Seksi Selanjutnya</h2>
            <p className="mt-4 text-muted-foreground">Konten akan ditambahkan di sini.</p>
        </div>
      </main>
      {/* Footer bisa ditambahkan di sini nanti */}
    </>
  );
}