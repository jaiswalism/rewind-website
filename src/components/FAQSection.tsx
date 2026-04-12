"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is my journal data safe?",
    answer: "Yes, all data is stored securely. Your journal entries and media are protected using industry-standard database security and strict Row Level Security (RLS) to ensure only you have access to your private information."
  },
  {
    question: "Do I need to pay to use Rewind?",
    answer: "Rewind is currently completely free to download and use as we continue to grow our community!"
  },
  {
    question: "How does the Live Voice pet talking actually work?",
    answer: "Using advanced real-time voice technology, you can speak directly into your phone and receive a thoughtful, low-latency audio response from your companion. It's a natural, judgment-free space to talk through your day."
  },
  {
    question: "What types of journal entries can I create?",
    answer: "Rewind supports text entries, voice notes, and photo attachments — so you can capture your moments in whichever format feels most natural to you."
  },
  {
    question: "What is the Care Corner?",
    answer: "The Care Corner is a dedicated wellness space inside Rewind featuring structured routines, breathing exercises, mindfulness prompts, and daily challenges designed to help you slow down and recharge."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-[var(--background)]">
      <div className="max-w-3xl mx-auto px-6">

        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] tracking-tight">Frequently Asked Questions</h2>
          <div className="absolute top-[-50%] left-[20%] w-32 h-32 bg-[var(--brand-mint)] opacity-60 organic-blob -z-10"></div>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white/40 backdrop-blur-md rounded-3xl overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-[0_10px_30px_-10px_rgba(34,60,51,0.08)] border border-white/80' : 'border border-[var(--border-color)] hover:border-white/80'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-lg text-[var(--foreground)] tracking-tight">{faq.question}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ease-out ${isOpen ? 'bg-[var(--brand-mint)] text-[var(--foreground)] rotate-180' : 'bg-black/5 text-[var(--foreground)]'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-[var(--foreground)] opacity-70 font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
