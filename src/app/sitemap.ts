import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://softpoke.jp';
  const pages = ['', '/about', '/contact', '/service', '/work', '/privacy'];
  const locales = ['ja', 'en', 'ko'];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    for (const locale of locales) {
      const url = locale === 'ja' ? `${baseUrl}${page}` : `${baseUrl}/${locale}${page}`;
      entries.push({
        url: url || baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    }
  }

  // Standalone Japanese pages
  entries.push(
    { url: `${baseUrl}/privacy-ja`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-ja`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/tokushoho`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 }
  );

  return entries;
}
