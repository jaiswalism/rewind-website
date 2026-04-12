"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full pt-8 pb-20 lg:pt-12 lg:pb-32 overflow-hidden bg-[var(--background)]">
      {/* Absolute massive pastel blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[var(--brand-mint)] opacity-70 organic-blob z-0 mix-blend-multiply"></div>
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[var(--brand-peach)] opacity-70 organic-blob-2 z-0 mix-blend-multiply"></div>
      <div className="absolute bottom-[-20%] right-[20%] w-[700px] h-[700px] bg-[var(--brand-yellow)] opacity-50 organic-blob z-0 mix-blend-multiply"></div>

      {/* Navigation Header */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 flex justify-between items-center mb-16 lg:mb-24">
        <div className="flex items-center gap-3">
          <div className="p-1.5 bg-white/50 backdrop-blur-md rounded-2xl shadow-sm">
            <img src="/logo-dark.png" alt="Rewind Logo" className="w-10 h-10 object-contain rounded-[10px]" />
          </div>
          <span className="font-extrabold text-[var(--foreground)] text-2xl tracking-tight">Rewind</span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <a href="#gallery" className="px-4 py-2 rounded-full text-[var(--foreground)] opacity-60 hover:opacity-100 font-semibold text-sm transition-opacity">Screenshots</a>
          <a href="#features" className="px-4 py-2 rounded-full text-[var(--foreground)] opacity-60 hover:opacity-100 font-semibold text-sm transition-opacity">Features</a>
          <a href="#testimonials" className="px-4 py-2 rounded-full text-[var(--foreground)] opacity-60 hover:opacity-100 font-semibold text-sm transition-opacity">Reviews</a>
          <a href="#faq" className="px-4 py-2 rounded-full text-[var(--foreground)] opacity-60 hover:opacity-100 font-semibold text-sm transition-opacity">FAQ</a>
        </nav>

        <a href="#download" className="bg-[var(--brand-peach)] text-[var(--foreground)] font-bold px-6 py-2 rounded-full shadow-sm hover:-translate-y-1 transition-transform text-sm">
          Get Started
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">

        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block px-5 py-2 rounded-full bg-[var(--brand-teal)] text-[var(--foreground)] font-bold text-sm shadow-sm mb-6"
          >
            v2.0 Now Available
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-6xl lg:text-8xl font-extrabold tracking-[-0.04em] text-[var(--foreground)] leading-[1.0] mb-8"
          >
            Reflect, grow, <br className="hidden lg:block" /> and remember.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl text-[var(--foreground)] opacity-80 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex-1 w-full max-w-lg lg:max-w-none relative mt-12 lg:mt-0"
        >
          {/* This is the placeholder where the user will drop their hero-mockup.png */}
          <div className="w-full aspect-[4/5] bg-white rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(34,60,51,0.15)] border-[12px] border-white/50 backdrop-blur-xl overflow-hidden relative flex flex-col items-center justify-center text-center p-8 active:scale-[0.98] transition-transform duration-500 z-10">
            {/* <div className="iphone-notch"></div> */}

            {/* <div className="w-20 h-20 rounded-full bg-[var(--brand-mint)] flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
            </div>
            <p className="font-bold text-[var(--foreground)] text-xl">Drop your master mockup here</p>
            <p className="text-[var(--foreground)] opacity-50 text-sm mt-3 font-mono bg-[var(--surface-gray)] px-4 py-2 rounded-xl">/public/hero-mockup.jpg</p> */}

            <img src="./hero-mockup.jpg" alt="Hero Mockup" className="absolute inset-0 w-full h-full object-cover z-0" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
