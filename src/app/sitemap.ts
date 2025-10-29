// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kartikajayakontruksindo.vercel.app'

    return [
        {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
        },
        {
        url: `${baseUrl}/#tentang-kami`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
        },
        {
        url: `${baseUrl}/#sambutan-direktur`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        },
        {
        url: `${baseUrl}/#kebijakan`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        },
        {
        url: `${baseUrl}/#struktur-organisasi`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        },
        {
        url: `${baseUrl}/#wilayah-kerja`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
        },
        {
        url: `${baseUrl}/#layanan`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        },
    ]
}
