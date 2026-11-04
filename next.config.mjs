/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 2592000,
    deviceSizes: [640, 750, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable Webpack filesystem disk cache in development to eliminate
      // corrupt .pack.gz file locks and ENOENT unhandledRejection errors
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
