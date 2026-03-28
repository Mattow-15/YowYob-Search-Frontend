/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Internationalisation
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    localeDetection: false,
  },

  // Images
  images: {
    domains: [
      'localhost',
      'api-services.yowyob.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Variables d'environnement
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    WS_URL: process.env.NEXT_PUBLIC_WS_URL,
  },

  // Webpack config (pour DuckDB)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;