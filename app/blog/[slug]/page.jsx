import { blogPosts } from "@/lib/blogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Script from "next/script";

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | TrustLayer Labs Blog`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Organization",
      "name": "TrustLayer Labs"
    },
    "datePublished": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "TrustLayer Labs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.trustlayerlabs.co.in/logo.jpeg"
      }
    }
  };

  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </Script>
      <div className="max-w-[800px] mx-auto px-4">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm font-bold text-blue-600 mb-10 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
        </Link>

        <div className="flex items-center space-x-6 text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">
          <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1.5" /> {post.date}</span>
          <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1.5" /> 8 min read</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-12 leading-tight">
          {post.title}
        </h1>

        <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-p:text-slate-600 prose-a:text-blue-600 prose-strong:text-slate-900 prose-img:rounded-3xl">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-20 p-8 md:p-12 bg-blue-50 rounded-3xl border border-blue-100 text-center">
          <h3 className="text-2xl font-black text-slate-900 mb-4">Secure Your Assets Today</h3>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            Ready to perform a deep-dive security audit? Get started with our free snapshot tool or talk to an expert.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/#scan" className="btn-primary w-full sm:w-auto">Get Free Snapshot</Link>
            <Link href="/contact" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all w-full sm:w-auto">Talk to Expert</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
