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
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://tagmanager.google.com https://www.google-analytics.com https://ssl.google-analytics.com https://*.google-analytics.com https://www.googleadservices.com https://*.googleadservices.com https://www.google.com https://*.google.com https://assets.apollo.io https://*.apollo.io https://va.vercel-scripts.com https://www.clarity.ms https://*.clarity.ms https://c.bing.com",
              "style-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://tagmanager.google.com https://fonts.googleapis.com",
              "img-src 'self' data: blob: https://images.unsplash.com https://i.pravatar.cc https://sellwithboost.com https://www.trustlayerlabs.co.in https://assets.apollo.io https://aplo-evnt.com https://*.aplo-evnt.com https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.googletagmanager.com https://tagmanager.google.com https://ssl.gstatic.com https://www.gstatic.com https://*.gstatic.com https://www.google.com https://*.google.com https://www.google.co.in https://*.google.co.in https://www.google.co.uk https://*.google.co.uk https://www.google.ca https://*.google.ca https://www.google.com.au https://*.google.com.au https://www.google.de https://*.google.de https://www.google.fr https://*.google.fr https://www.google.co.jp https://*.google.co.jp https://*.g.doubleclick.net https://googleads.g.doubleclick.net https://ad.doubleclick.net https://pagead2.googlesyndication.com https://ade.googlesyndication.com https://adservice.google.com https://www.googleadservices.com https://*.googleadservices.com https://*.merchant-center-analytics.goog https://*.clarity.ms https://c.bing.com",
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://stats.g.doubleclick.net https://*.g.doubleclick.net https://googleads.g.doubleclick.net https://ad.doubleclick.net https://pagead2.googlesyndication.com https://adservice.google.com https://www.google.com https://*.google.com https://www.google.co.in https://*.google.co.in https://www.google.co.uk https://*.google.co.uk https://www.google.ca https://*.google.ca https://www.google.com.au https://*.google.com.au https://www.google.de https://*.google.de https://www.google.fr https://*.google.fr https://www.google.co.jp https://*.google.co.jp https://www.googleadservices.com https://*.googleadservices.com https://*.merchant-center-analytics.goog https://assets.apollo.io https://*.apollo.io https://aplo-evnt.com https://*.aplo-evnt.com https://vitals.vercel-insights.com https://*.vercel-insights.com https://va.vercel-scripts.com https://www.googletagmanager.com https://*.googletagmanager.com https://tagmanager.google.com https://*.clarity.ms https://c.bing.com http://localhost:5000",
              "font-src 'self' data: https://fonts.gstatic.com",
              "frame-src 'self' https://www.googletagmanager.com https://*.googletagmanager.com https://tagmanager.google.com https://www.google.com https://*.google.com https://td.doubleclick.net https://*.doubleclick.net https://*.fls.doubleclick.net;",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
