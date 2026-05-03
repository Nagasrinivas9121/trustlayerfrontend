import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blogData";

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen pt-40 pb-20">
      <div className="section-container">
        <Link href="/" className="inline-flex items-center text-slate-500 hover:text-white transition-colors mb-12 font-bold text-xs uppercase tracking-[0.2em] group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-2 transition-transform" /> Back to Home
        </Link>
        
        <h1 className="heading-1 mb-20">
          Security <span className="text-primary">Insights</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {blogPosts.map((post) => (
            <div key={post.slug} className="premium-card p-10 group">
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-md text-[10px] font-bold uppercase tracking-widest">
                  {post.category}
                </span>
                <span className="flex items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  <Calendar className="w-3 h-3 mr-2" /> {post.date}
                </span>
                <span className="flex items-center text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                  <Clock className="w-3 h-3 mr-2" /> {post.readTime}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-6 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h2>
              <p className="body-text mb-10">
                {post.excerpt}
              </p>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-white font-bold uppercase tracking-widest text-[10px] group/btn">
                Read Technical Breakdown <ArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover/btn:translate-x-2 transition-transform text-primary" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
