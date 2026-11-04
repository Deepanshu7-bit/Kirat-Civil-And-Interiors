import { MetadataRoute } from 'next';
import { GALLERY_DETAIL_DATA } from '@/lib/gallery-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.elegantspaces.me';
  // Use a meaningful static date corresponding to the verified site publication
  const lastModified = new Date('2026-11-04');

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/design-gallery`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/turnkey-interior-designer-kharar-mohali`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/modular-kitchen-maker-mohali-kharar`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pop-false-ceiling-contractor-mohali`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/civil-construction-contractor-kharar-mohali`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/modular-wardrobes-maker-mohali-kharar`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/commercial-interior-office-fitouts-mohali`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Dynamic design inspiration pages
  const galleryPages: MetadataRoute.Sitemap = Object.keys(GALLERY_DETAIL_DATA).map((slug) => ({
    url: `${baseUrl}/design-gallery/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...galleryPages];
}
