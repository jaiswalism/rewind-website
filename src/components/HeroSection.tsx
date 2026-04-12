"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-8 pb-20 lg:pt-12 lg:pb-32 overflow-hidden bg-[var(--brand-light)] bg-grid-pattern">
      {/* Navigation Header */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 flex justify-between items-center mb-16 lg:mb-24">
        <div className="flex items-center gap-3">
          <div className="p-1 bg-white rounded-[14px] shadow-sm inner-border">
            <img src="/logo.png" alt="Rewind Logo" className="w-10 h-10 object-contain rounded-[10px]" />
          </div>
          <span className="font-extrabold text-gray-900 text-xl tracking-tight">Rewind</span>
        </div>
      </div>

      {/* Organic blob background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3B38FF]/5 organic-blob -translate-y-1/4 translate-x-1/4 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white text-[#3B38FF] font-bold text-sm shadow-sm mb-6 inner-border"
          >
            v2.0 Now Available
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold tracking-[-0.03em] text-[#111827] leading-[1.05] mb-6"
          >
            Reflect, grow, <br className="hidden lg:block"/> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B38FF] to-[#8180FF]">remember.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium"
          >
            A secure digital journal and guided care routine, featuring your very own virtual evolving companion.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a href="#download" className="btn-primary w-full sm:w-auto px-8 py-4 text-lg">
              Download on the App Store
            </a>
          </motion.div>
        </div>

        {/* Right: massive placeholder for hero mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
          className="flex-1 w-full max-w-lg lg:max-w-none relative"
        >
          {/* This is the placeholder where the user will drop their hero-mockup.png */}
          <div className="w-full aspect-[4/5] bg-white rounded-[3rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border-[8px] border-white overflow-hidden relative flex flex-col items-center justify-center text-center p-8 active:scale-[0.98] transition-transform duration-300">
            <div className="iphone-notch"></div>
            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-4 inner-border">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <p className="font-bold text-gray-500 text-lg">Drop your master mockup here</p>
            <p className="text-gray-400 text-sm mt-3 font-mono bg-gray-50 px-3 py-1 rounded inner-border">/public/hero-mockup.png</p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
