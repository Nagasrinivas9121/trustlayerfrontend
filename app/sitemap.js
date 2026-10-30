import { blogPosts } from "@/lib/blogData";
import { SERVICES } from "@/lib/constants";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Helper to retrieve the actual last-commit date of a file from Git
function getFileLastModified(relativeFilePath, fallbackDate = new Date("2026-10-13T00:00:00.000Z")) {
  try {
    const fullPath = path.join(process.cwd(), relativeFilePath);
    if (fs.existsSync(fullPath)) {
      const gitDate = execSync(`git log -1 --format=%cI "${relativeFilePath}"`, {
        encoding: "utf8",
        stdio: ["pipe", "pipe", "ignore"],
      }).trim();
      if (gitDate) {
        const parsed = new Date(gitDate);
        if (!isNaN(parsed.getTime())) {
          return parsed;
        }
      }
      const stat = fs.statSync(fullPath);
      return stat.mtime;
    }
  } catch {
    // Return fallback date if git command fails
  }
  return fallbackDate;
}

export default function sitemap() {
  const baseUrl = "https://www.trustlayerlabs.co.in";
  const defaultFallbackDate = new Date("2026-10-13T00:00:00.000Z");

  // Core static pages (strictly canonical, 200 OK indexable pages; excludes redirects like /book and noindex like /free-assessment)
  const coreStaticPages = [
    { path: "", file: "app/page.tsx" },
    { path: "/fintech-security", file: "app/fintech-security/page.tsx" },
    { path: "/grc-readiness", file: "app/grc-readiness/page.tsx" },
    { path: "/partnerships", file: "app/partnerships/page.tsx" },
    { path: "/services", file: "app/services/page.tsx" },
    { path: "/tools/code-recommender", file: "app/tools/code-recommender/page.tsx" },
    { path: "/tools/jwt-decoder", file: "app/tools/jwt-decoder/page.tsx" },
    { path: "/tools", file: "app/tools/page.tsx" },
    { path: "/manual-vs-automated-pentest", file: "app/manual-vs-automated-pentest/page.tsx" },
    { path: "/why-manual-testing", file: "app/why-manual-testing/page.tsx" },
    { path: "/methodology", file: "app/methodology/page.tsx" },
    { path: "/sample-report", file: "app/sample-report/page.tsx" },
    { path: "/api-security-checklist", file: "app/api-security-checklist/page.tsx" },
    { path: "/checklist", file: "app/checklist/page.tsx" },
    { path: "/case-studies", file: "app/case-studies/page.tsx" },
    { path: "/about", file: "app/about/page.tsx" },
    { path: "/blog", file: "app/blog/page.tsx" },
    { path: "/contact", file: "app/contact/page.tsx" },
    { path: "/vapt-bangalore", file: "app/vapt-bangalore/page.tsx" },
    { path: "/vapt-hyderabad", file: "app/vapt-hyderabad/page.tsx" },
    { path: "/nda-process", file: "app/nda-process/page.tsx" },
    { path: "/responsible-disclosure", file: "app/responsible-disclosure/page.tsx" },
    { path: "/privacy", file: "app/privacy/page.tsx" },
    { path: "/terms", file: "app/terms/page.tsx" },
  ];

  const coreUrls = coreStaticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: getFileLastModified(page.file, defaultFallbackDate),
  }));

  // Dynamic Service pages from constants.ts
  const serviceUrls = SERVICES.map((service) => {
    // Check if dedicated static directory page exists, otherwise dynamic route [slug]
    const staticServicePath = `app/services/${service.slug}/page.tsx`;
    const targetFile = fs.existsSync(path.join(process.cwd(), staticServicePath))
      ? staticServicePath
      : "app/services/[slug]/page.tsx";

    return {
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: getFileLastModified(targetFile, defaultFallbackDate),
    };
  });

  // Blog pages (derived from blog post published / updated date)
  const blogDataLastModified = getFileLastModified("lib/blogData.ts", defaultFallbackDate);
  const blogUrls = blogPosts.map((post) => {
    let postDate = blogDataLastModified;
    if (post.date) {
      const parsed = new Date(post.date);
      if (!isNaN(parsed.getTime())) {
        postDate = parsed;
      }
    }
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: postDate,
    };
  });

  return [...coreUrls, ...serviceUrls, ...blogUrls];
}
