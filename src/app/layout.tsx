// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/common/SmoothScroll"; // Import komponen baru

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PT Kartika Jaya Kontruksindo",
    template: "%s | PT Kartika Jaya Kontruksindo"
  },
  description: "PT Kartika Jaya Kontruksindo adalah perusahaan jasa konstruksi infrastruktur terpercaya sejak 2016. Spesialisasi dalam pembangunan jalan tol, bandara, drainase, dan proyek konstruksi besar di seluruh Indonesia.",
  keywords: [
    "jasa konstruksi",
    "konstruksi infrastruktur",
    "pembangunan jalan tol",
    "konstruksi bandara",
    "drainase",
    "kontraktor",
    "PT Kartika Jaya Kontruksindo",
    "Kartika Jaya",
    "konstruksi Indonesia",
    "jalan tol trans sumatera",
    "konstruksi IKN",
    "supplier material teknik"
  ],
  authors: [{ name: "PT Kartika Jaya Kontruksindo" }],
  creator: "PT Kartika Jaya Kontruksindo",
  publisher: "PT Kartika Jaya Kontruksindo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kartikajayakontruksindo.vercel.app'), // Ganti dengan domain Vercel Anda
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "PT Kartika Jaya Kontruksindo - Jasa Konstruksi Infrastruktur Terpercaya",
    description: "Perusahaan jasa konstruksi infrastruktur terpercaya sejak 2016. Spesialisasi dalam pembangunan jalan tol, bandara, dan proyek besar di Indonesia.",
    url: 'https://kartikajayakontruksindo.vercel.app',
    siteName: "PT Kartika Jaya Kontruksindo",
    images: [
      {
        url: '/img/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'PT Kartika Jaya Kontruksindo - Proyek Konstruksi',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "PT Kartika Jaya Kontruksindo - Jasa Konstruksi Infrastruktur",
    description: "Perusahaan jasa konstruksi infrastruktur terpercaya sejak 2016",
    images: ['/img/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Tambahkan kode verifikasi Google Search Console
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PT Kartika Jaya Kontruksindo',
    description: 'Perusahaan jasa konstruksi infrastruktur terpercaya sejak 2016',
    url: 'https://kartikajayakontruksindo.vercel.app',
    logo: 'https://kartikajayakontruksindo.vercel.app/icon/kartika-jaya.png',
    foundingDate: '2016',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      addressLocality: 'Indonesia',
    },
    sameAs: [
      // Tambahkan link social media jika ada
      // 'https://www.facebook.com/kartikajaya',
      // 'https://www.instagram.com/kartikajaya',
      // 'https://www.linkedin.com/company/kartikajaya',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    serviceType: [
      'Konstruksi Jalan Tol',
      'Konstruksi Bandara',
      'Sistem Drainase',
      'Infrastruktur Transportasi',
      'Konstruksi Beton',
    ],
  };

  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-white` }
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}