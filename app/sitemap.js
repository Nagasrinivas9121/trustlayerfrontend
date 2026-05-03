import { blogPosts } from "@/lib/blogData";

export default function sitemap() {
  const baseUrl = "https://www.trustlayerlabs.co.in";

  // Core pages
  const corePages = [
    { url: "", priority: 1, frequency: "daily" },
    { url: "/blog", priority: 0.8, frequency: "weekly" },
  ];

  const coreUrls = corePages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.frequency,
    priority: page.priority,
  }));

  // Blog pages
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...coreUrls, ...blogUrls];
}
