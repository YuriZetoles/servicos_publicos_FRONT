import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Permitir imagens externas se necessário
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Configurações para otimização de imagens
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
