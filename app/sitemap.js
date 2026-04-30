import { blogPosts } from "@/lib/blogData";

export default function sitemap() {
  const baseUrl = "https://www.trustlayerlabs.co.in";

  // Core pages from live site
  const corePages = [
    "",
    "/services",
    "/vapt-services",
    "/vapt-services-india",
    "/web-application-penetration-testing",
    "/api-security-testing",
    "/cloud-security-testing",
    "/owasp-top-10-testing",
    "/about",
    "/contact",
    "/blog",
    "/privacy-policy",
    "/terms-and-conditions",
    "/status"
  ];

  const serviceUrls = corePages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog pages
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...serviceUrls, ...blogUrls];
}
