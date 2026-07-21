export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        // Explicitly allow primary search engines
        userAgent: ["Googlebot", "Bingbot", "DuckDuckBot", "YandexBot"],
        allow: "/",
        disallow: ["/api/"],
      },
      {
        // Explicitly allow AI Search Engine & Retrieval Bots (AEO)
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Anthropic-AI",
          "Google-Extended",
          "Applebot-Extended",
          "Bytespider",
          "CCBot",
          "Cohere-ai",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.trustlayerlabs.co.in/sitemap.xml",
    host: "https://www.trustlayerlabs.co.in",
  };
}
