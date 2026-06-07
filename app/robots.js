export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Allow Google's AI Overview and indexing bots
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.trustlayerlabs.co.in/sitemap.xml",
    host: "https://www.trustlayerlabs.co.in",
  };
}
