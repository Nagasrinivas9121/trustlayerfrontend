export default function robots() {
  const aiBots = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "Google-Extended",
    "GoogleOther",
    "CCBot",
    "anthropic-ai",
    "Anthropic-AI",
    "ClaudeBot",
    "Claude-Web",
    "Bytespider",
    "PerplexityBot",
    "Applebot-Extended",
    "Cohere-ai",
    "meta-externalagent",
    "Diffbot",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: aiBots,
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.trustlayerlabs.co.in/sitemap.xml",
  };
}
