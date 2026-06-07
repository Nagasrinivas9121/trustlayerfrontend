import { blogPosts } from "@/lib/blogData";

export default function sitemap() {
  const baseUrl = "https://www.trustlayerlabs.co.in";
  const now = new Date();

  // Core pages with priorities
  const corePages = [
    { url: "",                 priority: 1.0, frequency: "daily"   }, // Homepage
    { url: "/services",        priority: 0.9, frequency: "weekly"  },
    { url: "/case-studies",    priority: 0.85, frequency: "weekly"  },
    { url: "/about",           priority: 0.8, frequency: "monthly" },
    { url: "/blog",            priority: 0.8, frequency: "daily"   },
    { url: "/contact",         priority: 0.75, frequency: "monthly" },
    { url: "/checklist",       priority: 0.7, frequency: "monthly" },
    // Local SEO landing pages — high priority for local search
    { url: "/vapt-bangalore",  priority: 0.9, frequency: "weekly"  },
    { url: "/vapt-hyderabad",  priority: 0.9, frequency: "weekly"  },
    // Legal
    { url: "/privacy",         priority: 0.3, frequency: "yearly"  },
    { url: "/terms",           priority: 0.3, frequency: "yearly"  },
  ];

  const coreUrls = corePages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.frequency,
    priority: page.priority,
  }));

  // Blog pages
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...coreUrls, ...blogUrls];
}
