import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"; 

export default function Home() {
  return (
    
    <main className="min-h-[calc(100vh-70px)] bg-gradient-to-br from-gray-900 via-primary to-gray-900 flex items-center justify-center text-white relative overflow-hidden">
      
      
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="text-center max-w-3xl px-6 relative z-10">
        <img 
          src={logo} 
          alt="Trustlayer Labs Logo" 
          className="mx-auto w-32 h-32 object-contain mb-8 rounded-full shadow-lg shadow-accent/20" 
        />
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
          Fortifying the <span className="text-accent">Digital Frontier</span>
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Premier EdTech & Cybersecurity Services Platform. 
          Master the skills to defend systems or let us secure them for you.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/courses" 
            className="bg-accent text-primary px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-opacity-90 hover:scale-105 transition-all shadow-lg"
          >
            Start Learning
          </Link>
          
          <Link 
            to="/services" 
            className="border-2 border-gray-600 text-gray-200 px-8 py-3.5 rounded-lg font-semibold text-lg hover:border-accent hover:text-accent transition-colors"
          >
            Services
          </Link>
        </div>
      </div>
    </main>
  );
}