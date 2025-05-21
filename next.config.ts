import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:all*(svg|png|jpg|jpeg|webp|js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate', // Cache static files for 1 day
          },
        ],
      },
      {
        source: '/:path*', // This catches all other routes (HTML pages)
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, must-revalidate', // Instead of no-store
          },
        ],
      },
    ];
  },
  experimental: {
    scrollRestoration: false
  }
};

export default nextConfig;
