// src/app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://kartikajayakontruksindo.vercel.app'

    return {
        rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
