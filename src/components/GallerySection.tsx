"use client";

import { motion } from "framer-motion";

export default function GallerySection() {
  // Creating an array of 4 placeholders for App Store screenshots
  const placeholders = [1, 2, 3, 4];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-[#111827] mb-4">A beautiful interface.</h2>
        <p className="text-xl text-gray-600 font-medium">Designed with care so you can focus on what matters most.</p>
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

        {placeholders.map((i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="shrink-0 snap-center first:pl-6 last:pr-6"
          >
            {/* The individual screenshot placeholder */}
            <div className="w-[280px] h-[600px] md:w-[320px] md:h-[690px] bg-[var(--surface-gray)] rounded-[3rem] border-[8px] border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden inner-border">
                <div className="iphone-notch"></div>
                
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-4 inner-border mt-10">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                </div>
                <p className="font-bold text-gray-500 mb-2">App Store Screenshot {i}</p>
                <p className="text-gray-400 text-xs font-mono bg-white px-2 py-1 rounded inner-border">/public/screenshot-{i}.png</p>
                
                {/* Abstract UI wires to look like wireframes */}
                <div className="absolute inset-x-8 bottom-8 flex flex-col gap-3 opacity-30">
                  <div className="h-24 bg-gray-300 rounded-xl w-full"></div>
                  <div className="h-12 bg-gray-200 rounded-xl w-3/4"></div>
                  <div className="h-12 bg-gray-200 rounded-xl w-full"></div>
                </div>
            </div>
          </motion.div>
        ))}
        
        <div className="w-[10%] shrink-0 hidden lg:block"></div>
      </div>
    </section>
  );
}
