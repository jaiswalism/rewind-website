"use client";

import { motion } from "framer-motion";

export default function GallerySection() {
  // Soft pastel colors mapped to placeholders
  const bgColors = [
    'bg-[var(--brand-mint)]', 
    'bg-[var(--brand-peach)]', 
    'bg-[var(--brand-yellow)]', 
    'bg-[var(--brand-teal)]'
  ];
  
  // Array of 4 placeholders for App Store screenshots
  const placeholders = [1, 2, 3, 4];

  return (
    <section className="py-24 bg-[var(--surface-gray)] overflow-hidden relative">
      {/* Decorative organic background */}
      <div className="absolute top-1/2 left-[20%] w-[1000px] h-[1000px] bg-white opacity-50 organic-blob -translate-y-1/2 -z-0 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">A beautiful interface.</h2>
        <p className="text-xl text-[var(--foreground)] opacity-70 font-medium">Designed with care so you can focus on what matters most.</p>
      </div>

      {/* Horizontal scrolling container for screenshots */}
      <div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory hide-scrollbars no-scrollbar max-w-[100vw]">
        {/* Helper class inline for demo, typically in global.css */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbars::-webkit-scrollbar { display: none; }
          .hide-scrollbars { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
        
        {/* Optional empty spacer to offset the first item if needed, but flex layout is fine */}
        <div className="w-[10%] shrink-0 hidden lg:block"></div>

        {placeholders.map((i, idx) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            className="shrink-0 snap-center first:pl-6 last:pr-6"
          >
            {/* The individual screenshot placeholder */}
            <div className={`w-[280px] h-[600px] md:w-[320px] md:h-[690px] ${bgColors[idx % bgColors.length]} rounded-[3rem] border-[12px] border-white/80 backdrop-blur-xl shadow-sm flex flex-col items-center justify-center text-center p-6 relative overflow-hidden transition-transform duration-500 hover:-translate-y-4`}>
                <div className="iphone-notch"></div>
                
                <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center mb-6 mt-10 shadow-sm">
                  <svg className="w-8 h-8 text-[var(--foreground)] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                </div>
                <p className="font-bold text-[var(--foreground)] text-xl mb-2">Screenshot {i}</p>
                <p className="text-[var(--foreground)] opacity-50 text-xs font-mono bg-white/50 px-3 py-1.5 rounded-xl">/public/screenshot-{i}.png</p>
                
                {/* Abstract UI wires to look like wireframes */}
                <div className="absolute inset-x-8 bottom-8 flex flex-col gap-4 opacity-40 mix-blend-multiply">
                  <div className="h-28 bg-[var(--foreground)] opacity-10 rounded-3xl w-full"></div>
                  <div className="h-16 bg-[var(--foreground)] opacity-10 rounded-2xl w-3/4"></div>
                  <div className="h-16 bg-[var(--foreground)] opacity-10 rounded-2xl w-full"></div>
                </div>
            </div>
          </motion.div>
        ))}
        
        <div className="w-[10%] shrink-0 hidden lg:block"></div>
      </div>
    </section>
  );
}
