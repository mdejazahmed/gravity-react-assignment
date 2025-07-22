import { ExternalLink } from "lucide-react";

export const Navbar = () => {
    const linkClasses =
      "px-4 py-2 rounded-full text-white transition-all duration-300 " +
      "hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] " +
      "active:shadow-[0_0_25px_rgba(255,255,255,0.7)]";
  
    return (
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-10 mx-auto p-2 flex space-x-4 rounded-full bg-white/30 backdrop-blur-lg border border-white/20">
        <a href="#q1" className={linkClasses}>Question 1</a>
        <a href="#q2" className={linkClasses}>Question 2</a>
        <a href="https://mongoplayground.net/p/8K1C_iKHiKD" target="_blank" className={linkClasses+" flex items-center gap-2"} >Question 3 <ExternalLink size={16} /></a>
      </nav>
    );
  };
  