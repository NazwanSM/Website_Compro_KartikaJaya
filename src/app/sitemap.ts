// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kartikajayakontruksindo.vercel.app'

    // Karena website menggunakan single page application dengan smooth scroll navigation,
    // sitemap hanya mencantumkan URL utama. Semua section (tentang-kami, sambutan-direktur, dll)
    // ada di halaman yang sama dan dapat diakses melalui smooth scroll.
    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date().toISOString(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
    ]
}
