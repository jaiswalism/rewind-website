"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Journals & Reflection",
    description: "Whether you write, speak, or take photos, your journal acts as a secure timeline. Relive your digital past securely with end-to-end processing.",
    badge: "Capture Everything",
    flipped: false,
    imagePlaceholder: "journal-feature.jpg",
    bgColor: "bg-[var(--brand-mint)]",
    blob: "organic-blob"
  },
  {
    title: "Guided Care Corner",
    description: "Structured daily routines and personalized challenge loops. Take a moment to breathe, meditate, or engage in active grounding.",
    badge: "Daily Wellness",
    flipped: true,
    imagePlaceholder: "care-corner.jpg",
    bgColor: "bg-[var(--brand-peach)]",
    blob: "organic-blob-2"
  },
  {
    title: "Live Pet Talking",
    description: "Have real-time voice conversations with your responsive digital companion. A safe, judgment-free space to talk through your day.",
    badge: "Real-Time Reflection",
    flipped: false,
    imagePlaceholder: "live-voice.jpg",
    bgColor: "bg-[var(--brand-yellow)]",
    blob: "organic-blob"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight">A connected ecosystem.</h2>
          <p className="text-xl text-[var(--foreground)] opacity-70 font-medium">Everything you need, built natively into one holistic experience.</p>
        </div>

        <div className="flex flex-col gap-32">
          {features.map((feature, idx) => (
            <div key={idx} className={`flex flex-col ${feature.flipped ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>

              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, x: feature.flipped ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 text-center lg:text-left"
              >
                <div className="inline-block px-5 py-2 rounded-full bg-white/60 text-[var(--foreground)] font-bold text-sm mb-6 border border-[var(--border-color)]">
                  {feature.badge}
                </div>
                <h3 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] mb-6 leading-tight tracking-tight">{feature.title}</h3>
                <p className="text-xl text-[var(--foreground)] opacity-70 font-medium leading-relaxed">{feature.description}</p>
              </motion.div>

              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="flex-1 w-full"
              >
                <div className={`aspect-[4/3] ${feature.bgColor} bg-opacity-40 rounded-[4rem] p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group`}>

                  {/* Image covers the card */}
                  <img src={`/${feature.imagePlaceholder}`} alt={feature.title} draggable={false} className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none" />

                  {/* Soft animated background blob floats above the image */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 ${feature.blob} mix-blend-overlay z-10`}></div>
                </div>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
