"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Journals & Reflection",
    description: "Whether you write, speak, or take photos, your journal acts as a secure timeline. Relive your digital past securely with end-to-end processing.",
    badge: "Capture Everything",
    flipped: false,
    imagePlaceholder: "journal-feature.png"
  },
  {
    title: "Guided Care Corner",
    description: "Structured daily routines and personalized challenge loops. Take a moment to breathe, meditate, or engage in active grounding.",
    badge: "Daily Wellness",
    flipped: true,
    imagePlaceholder: "care-corner.png"
  },
  {
    title: "Live Pet Talking",
    description: "Have real-time voice conversations with your responsive digital companion. A safe, judgment-free space to talk through your day.",
    badge: "Real-Time Reflection",
    flipped: false,
    imagePlaceholder: "live-voice.png"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[var(--surface-gray)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-[#111827] mb-6">A connected ecosystem.</h2>
          <p className="text-xl text-gray-600 font-medium">Everything you need, built natively into one holistic experience.</p>
        </div>

        <div className="flex flex-col gap-32">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col ${feature.flipped ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
              
              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: feature.flipped ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="flex-1 text-center lg:text-left"
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-white text-[#3B38FF] font-bold text-sm shadow-sm mb-6 border border-[#3B38FF]/10">
                  {feature.badge}
                </div>
                <h3 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">{feature.title}</h3>
                <p className="text-xl text-gray-600 font-medium leading-relaxed">{feature.description}</p>
              </motion.div>

              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full"
              >
                <div className="aspect-[4/3] bg-white rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)] relative overflow-hidden group inner-border">
                  
                  {/* Subtle decorative background circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-50/50 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                  
                  <div className="z-10 bg-white p-5 rounded-2xl shadow-sm mb-4 inner-border">
                     <svg className="w-8 h-8 text-[#3B38FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  </div>
                  <p className="z-10 font-bold text-gray-700">Feature Image Placeholder</p>
                  <p className="z-10 text-gray-500 font-mono text-sm mt-2">/public/{feature.imagePlaceholder}</p>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
