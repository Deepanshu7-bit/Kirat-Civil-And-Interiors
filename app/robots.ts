import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Bingbot',
          'Applebot'
        ],
        allow: '/',
      }
    ],
    sitemap: 'https://elegantcontractorsandinteriors.com/sitemap.xml',
    host: 'https://elegantcontractorsandinteriors.com',
  };
}
