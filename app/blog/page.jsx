"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function BlogListing() {
  return (
    <div className="pt-40 pb-24 bg-white min-h-screen">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Security <span className="text-gradient">Insights</span></h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Deep dives into penetration testing, compliance, and the ever-evolving landscape of cybersecurity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.slug}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden flex flex-col hover:shadow-xl transition-all group"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center space-x-4 text-xs font-bold text-slate-400 mb-6 uppercase tracking-widest">
                  <span className="flex items-center"><Calendar className="w-3.5 h-3.5 mr-1.5" /> {post.date}</span>
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600"
                >
                  Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
