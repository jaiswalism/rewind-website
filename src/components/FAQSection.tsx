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
    answer: "Using advanced real-time voice technology, you can speak directly into your phone and receive a thoughtful, low-latency audio response from your companion. It's a natural way to talk through your day."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[var(--surface-gray)]">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#111827]">Frequently Asked Questions</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'soft-shadow border border-gray-100' : 'border border-gray-200 hover:border-gray-300'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-[#3B38FF] text-white rotate-180' : 'bg-gray-100 text-gray-600'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 text-gray-600 font-medium leading-relaxed">
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
