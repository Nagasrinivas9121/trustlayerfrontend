/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://assets.apollo.io https://*.apollo.io https://va.vercel-scripts.com https://www.clarity.ms https://*.clarity.ms; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://images.unsplash.com https://i.pravatar.cc https://sellwithboost.com https://www.trustlayerlabs.co.in https://assets.apollo.io https://aplo-evnt.com https://*.aplo-evnt.com https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://stats.g.doubleclick.net https://assets.apollo.io https://*.apollo.io https://aplo-evnt.com https://*.aplo-evnt.com https://vitals.vercel-insights.com https://*.vercel-insights.com https://va.vercel-scripts.com https://www.googletagmanager.com https://*.clarity.ms https://c.bing.com http://localhost:5000; font-src 'self' data:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
