import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2, ArrowRight } from "lucide-react";

export async function generateMetadata({ params }) {
    // In a real app, you'd fetch post data based on params.slug
    return {
        title: `${params.slug.replace(/-/g, ' ').toUpperCase()} | TrustLayerLabs Blog`,
        description: "Technical security breakdown and vulnerability analysis for modern SaaS architectures.",
    };
}

export default function BlogPost({ params }) {
  return (
    <article className="bg-background min-h-screen pt-40 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center text-slate-500 hover:text-white transition-colors mb-12 font-bold text-sm uppercase tracking-widest group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-2 transition-transform" /> Back to Log
        </Link>

        {/* Post Header */}
        <header className="mb-16">
          <div className="flex items-center space-x-6 text-neon-blue text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <span className="px-3 py-1 bg-neon-blue/10 border border-neon-blue/20 rounded">Security Research</span>
            <span className="flex items-center"><Clock className="w-3 h-3 mr-1.5" /> 6 Min Read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[1.1]">
            How We Found an <span className="text-glow-green">IDOR</span> Vulnerability in a FinTech SaaS
          </h1>
          <div className="flex items-center space-x-6 p-6 glass-card-dark rounded-2xl border border-white/5">
            <div className="w-12 h-12 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center text-neon-green font-black">TL</div>
            <div>
              <div className="text-white font-bold">TrustLayer Security Lab</div>
              <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1 flex items-center">
                <Calendar className="w-3 h-3 mr-1.5" /> May 1, 2024 • <User className="w-3 h-3 mx-1.5" /> Senior Pentester
              </div>
            </div>
          </div>
        </header>

        {/* Post Content (Mockup) */}
        <div className="prose prose-invert prose-lg max-w-none mb-20 text-slate-300 font-medium leading-relaxed">
          <p className="text-xl text-white font-bold mb-10">
            Last month, during a routine VAPT for a scaling FinTech client, we discovered a vulnerability that could have allowed any authenticated user to access private transaction records of any other user. 
          </p>
          
          <h2 className="text-3xl font-black text-white mt-16 mb-8">The Vulnerability: IDOR</h2>
          <p>
            Insecure Direct Object Reference (IDOR) occurs when an application provides direct access to objects based on user-supplied input. In this case, the endpoint was <code>/api/v1/transactions/details/[ID]</code>.
          </p>
          
          <div className="my-12 p-8 bg-navy-900 rounded-3xl border border-white/5 font-mono text-sm overflow-x-auto">
            <p className="text-slate-500 mb-4">// Vulnerable Request</p>
            <p className="text-neon-blue">GET /api/v1/transactions/details/55921 HTTP/1.1</p>
            <p className="text-white">Authorization: Bearer [User_A_Token]</p>
            <p className="text-white">Host: api.fintech-startup.com</p>
          </div>

          <p>
            By simply changing the <code>[ID]</code> from <code>55921</code> to <code>55922</code>, we were able to retrieve User B's private data without any additional permission checks.
          </p>

          <h2 className="text-3xl font-black text-white mt-16 mb-8">Why Scanners Missed It</h2>
          <p>
            Most automated scanners see a <code>200 OK</code> response with a valid JSON body and move on. They don't understand that the data returned belongs to a different account. This is a <strong>business logic flaw</strong> that requires manual verification.
          </p>

          <div className="my-16 glass-card-dark p-10 rounded-[40px] border border-neon-green/20 bg-gradient-to-br from-neon-green/5 to-transparent relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-4">Are your APIs secure?</h3>
                <p className="text-slate-400 mb-8 font-medium">Get our free 50-point security checklist for SaaS & AI products.</p>
                <Link href="/api-security-checklist" className="btn-neon inline-flex items-center">
                    Get Free Checklist <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/10 blur-[100px] rounded-full -mr-20 -mt-20" />
          </div>

          <h2 className="text-3xl font-black text-white mt-16 mb-8">The Impact</h2>
          <p>
            The potential impact was critical. An attacker could have scripted this to scrape the entire database of transactions, leading to massive privacy violations and regulatory fines.
          </p>
        </div>

        {/* Footer CTAs */}
        <footer className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-4">
                <button className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all">
                    <Share2 className="w-5 h-5" />
                </button>
                <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Share this research</span>
            </div>
            <Link href="/vapt-services" className="text-neon-blue font-bold flex items-center group">
                Explore VAPT Services <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
        </footer>
      </div>
    </article>
  );
}
