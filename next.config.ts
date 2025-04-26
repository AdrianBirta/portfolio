import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Set cache control for static assets like images, JS, CSS, etc.
        source: '/:all*(svg|png|jpg|jpeg|webp|js|css)', // You can extend this to match more static files
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate', // Cache for 1 day
          },
        ],
      },
    ];
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
