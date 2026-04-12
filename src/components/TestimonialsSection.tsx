"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Rewind completely changed how I reflect on my day. The virtual companion is surprisingly intuitive and supportive.",
    name: "Sarah Jenkins",
    role: "App Store Review"
  },
  {
    quote: "I've tried a lot of wellness apps, but the ability to literally talk to out my problems and have a secure place to store it is unmatched.",
    name: "Michael Chen",
    role: "Early Adopter"
  },
  {
    quote: "The interface is beautiful and doesn't get in the way. It just feels native to iOS. Plus, the Care Corner routines are perfect.",
    name: "Emma Williams",
    role: "App Store Review"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[#111827] mb-4">Loved by our community.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-10 rounded-[2rem] flex flex-col justify-between shadow-[0_8px_30px_-10px_rgba(0,0,0,0.06)] inner-border"
            >
              <div className="mb-8 relative">
                {/* Custom Quote Icon */}
                <svg className="w-8 h-8 text-[#3B38FF]/20 absolute -top-4 -left-2" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/></svg>
                <p className="text-xl font-medium text-gray-700 leading-relaxed relative z-10">"{test.quote}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center text-[#3B38FF] font-bold">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{test.name}</p>
                  <p className="text-sm text-gray-500 font-medium">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
