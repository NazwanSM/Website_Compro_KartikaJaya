// src/app/manifest.ts
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'PT Kartika Jaya Kontruksindo',
        short_name: 'Kartika Jaya',
        description: 'Perusahaan jasa konstruksi infrastruktur terpercaya sejak 2016',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1a4d2e',
        icons: [
        {
            src: '/icon/kartika-jaya.png',
            sizes: 'any',
            type: 'image/png',
        },
        ],
    }
}
