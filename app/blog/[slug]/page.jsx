import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Shield } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Script from "next/script";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug).replace(/\s+/g, '-').toLowerCase();
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug || p.slug === decodedSlug);
  if (!post) return { title: "Post Not Found | TrustLayerLabs Blog" };

  const url = `https://www.trustlayerlabs.co.in/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author || "TrustLayerLabs Security Team" }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "TrustLayerLabs Security Team"],
      tags: post.tags || ["cybersecurity", "VAPT", "API security", "penetration testing", "SaaS security"],
      images: [{ url: "/og-image.jpg?v=2", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/og-image.jpg?v=2"],
    },
  };
}

function getMatchingService(post) {
  const text = `${post.slug} ${post.title} ${post.category || ""} ${(post.tags || []).join(" ")}`.toLowerCase();
  
  if (/llm|prompt injection|rag|ai security|machine learning/.test(text)) {
    return { name: "AI & LLM Application Security testing", href: "/services/ai-security" };
  }
  if (/android|ssl pinning|frida|mobile|ios|masvs|apk/.test(text)) {
    return { name: "Mobile App VAPT", href: "/services/mobile-vapt" };
  }
  if (/kubernetes|gcp|aws|s3|bucket|cloud security|iam/.test(text)) {
    return { name: "Cloud Security Audit", href: "/services/cloud-security" };
  }
  if (/soc 2|iso 27001|compliance|audit|grc/.test(text)) {
    return { name: "SOC 2 Penetration Testing", href: "/services/soc2-pentesting" };
  }
  if (/xss|csrf|cors|subdomain|web app|clickjacking|sql injection/.test(text)) {
    return { name: "Web Application VAPT", href: "/services/web-app-vapt" };
  }
  return { name: "API Penetration Testing", href: "/services/api-security" };
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const decodedSlug = decodeURIComponent(resolvedParams.slug).replace(/\s+/g, '-').toLowerCase();
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug || p.slug === decodedSlug);

  if (!post) {
    notFound();
  }

  const matchingService = getMatchingService(post);

  const postIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const relatedPosts = [];
  for (let i = 1; i <= 3; i++) {
    const nextIdx = (postIndex + i) % blogPosts.length;
    relatedPosts.push(blogPosts[nextIdx]);
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "url": `https://www.trustlayerlabs.co.in/blog/${post.slug}`,
    "datePublished": post.date,
    "dateModified": post.date,
    "inLanguage": "en",
    "author": {
      "@type": "Person",
      "name": post.author || "TrustLayerLabs Security Team",
      "url": "https://www.trustlayerlabs.co.in/about",
      "jobTitle": "Security Architect",
      "worksFor": {
        "@type": "Organization",
        "name": "TrustLayerLabs",
        "url": "https://www.trustlayerlabs.co.in"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "TrustLayerLabs",
      "url": "https://www.trustlayerlabs.co.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.trustlayerlabs.co.in/symbol.png",
        "width": 1024,
        "height": 1024
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.trustlayerlabs.co.in/blog/${post.slug}`
    },
    "isPartOf": {
      "@type": "Blog",
      "name": "TrustLayerLabs Security Blog",
      "url": "https://www.trustlayerlabs.co.in/blog"
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA] min-h-screen text-neutral-900 font-sans">
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Pill */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-xs font-semibold text-neutral-500 hover:text-neutral-900 transition-colors gap-2 mb-8 group px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Blog</span>
        </Link>

        {/* Metadata Strip */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-6">
          <span className="px-3 py-1 bg-white border border-neutral-200 text-neutral-800 rounded-full font-semibold text-[11px] shadow-sm">
            {post.category || "Security Analysis"}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" /> {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" /> {post.readTime || "8 min read"}
          </span>
        </div>

        {/* Article Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 mb-10 leading-tight tracking-tight">
          {post.title}
        </h1>

        {/* Markdown Content styling for crisp light mode */}
        <div className="bg-white border border-neutral-200/80 rounded-3xl p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
          <div className="prose prose-neutral max-w-none text-base text-neutral-700 leading-relaxed space-y-6 font-sans
            prose-headings:font-bold prose-headings:text-neutral-950 prose-headings:tracking-tight
            prose-h1:text-2xl sm:prose-h1:text-3xl prose-h2:text-xl sm:prose-h2:text-2xl prose-h3:text-lg
            prose-strong:text-neutral-950 prose-strong:font-semibold
            prose-code:text-neutral-900 prose-code:bg-neutral-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-xs prose-code:font-mono
            prose-pre:bg-neutral-950 prose-pre:border prose-pre:border-neutral-800 prose-pre:text-neutral-200 prose-pre:p-5 prose-pre:rounded-2xl prose-pre:shadow-inner">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => <h2 {...props} />,
              }}
            >
              {post.content}
            </ReactMarkdown>

            <p className="border-t border-neutral-200/80 pt-6 mt-8 font-sans">
              Need this tested on your own application? See our{" "}
              <Link href={matchingService.href} className="font-semibold text-neutral-950 underline underline-offset-4 hover:text-neutral-700">
                {matchingService.name}
              </Link>{" "}
              or{" "}
              <Link href="/free-assessment" className="font-semibold text-neutral-950 underline underline-offset-4 hover:text-neutral-700">
                get a fixed-price quote in 24h
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Related Technical Articles */}
        <div className="mt-12 bg-white border border-neutral-200/80 rounded-3xl p-8 sm:p-10 shadow-xs">
          <h3 className="text-xl font-bold text-neutral-950 mb-6 font-sans tracking-tight">
            Related Security Research &amp; Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group p-5 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 hover:border-neutral-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-semibold text-neutral-500 uppercase tracking-wider block mb-2">
                    {related.date}
                  </span>
                  <h4 className="text-sm font-bold text-neutral-900 group-hover:text-primary transition-colors line-clamp-2 mb-2 font-sans">
                    {related.title}
                  </h4>
                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed font-sans">
                    {related.excerpt}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center text-xs font-semibold text-neutral-800 group-hover:text-primary transition-colors">
                  <span>Read Article</span>
                  <ArrowRight size={13} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-16 p-8 sm:p-12 bg-white rounded-3xl border border-dashed border-neutral-300 text-center space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 text-xs font-semibold">
            <Shield size={14} className="text-neutral-900" />
            <span>Next Step for Engineering Teams</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
            Ready to Identify & Fix Vulnerabilities in Your Platform?
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 max-w-lg mx-auto leading-relaxed">
            Schedule a confidential 30-minute scoping review with our lead security architects under mutual NDA. We evaluate your APIs, business logic, and enterprise readiness.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link 
              href="/free-assessment" 
              className="w-full sm:w-auto px-7 py-3.5 bg-neutral-900 hover:bg-black text-white text-xs font-semibold rounded-full shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Get Free Scoping Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/sample-report" 
              className="w-full sm:w-auto px-7 py-3.5 bg-white border border-neutral-200 hover:border-neutral-400 text-neutral-800 text-xs font-semibold rounded-full shadow-sm transition-all"
            >
              View Sample Report
            </Link>
          </div>

          <div className="pt-4 border-t border-dashed border-neutral-200 flex flex-wrap justify-center gap-4 text-xs text-neutral-500">
            <Link href="/services/api-security" className="hover:text-neutral-950 transition-colors">API Security</Link>
            <span className="text-neutral-300">•</span>
            <Link href="/services/web-app-vapt" className="hover:text-neutral-950 transition-colors">Web App VAPT</Link>
            <span className="text-neutral-300">•</span>
            <Link href="/fintech-security" className="hover:text-neutral-950 transition-colors">FinTech Security</Link>
            <span className="text-neutral-300">•</span>
            <Link href="/services/ai-security" className="hover:text-neutral-950 transition-colors">AI Security</Link>
            <span className="text-neutral-300">•</span>
            <Link href="/api-security-checklist" className="hover:text-neutral-950 transition-colors">API Security Checklist</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
