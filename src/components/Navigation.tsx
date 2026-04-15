"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const [legalOpen, setLegalOpen] = useState(false);
  const router = useRouter();

  // Scrolls to a section by ID. If not on homepage, navigates there first.
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Not on homepage — navigate then scroll after load
      router.push(`/#${id}`);
    }
  };

  return (
    <div className="w-full pt-8 px-6 absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/50 backdrop-blur-xl border border-white/50 shadow-sm py-4 px-6 rounded-[2rem]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-1.5 bg-white/50 backdrop-blur-md rounded-2xl shadow-sm group-hover:scale-105 transition-transform">
            <img src="/logo-dark.png" alt="Rewind Logo" className="w-8 h-8 object-contain rounded-[10px]" />
          </div>
          <span className="font-extrabold text-[var(--foreground)] text-xl tracking-tight">Rewind</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <button onClick={() => scrollTo("gallery")} className="px-4 py-2 rounded-full text-[var(--foreground)] opacity-70 hover:opacity-100 font-semibold text-sm transition-opacity">Gallery</button>
          <button onClick={() => scrollTo("features")} className="px-4 py-2 rounded-full text-[var(--foreground)] opacity-70 hover:opacity-100 font-semibold text-sm transition-opacity">Features</button>
          <button onClick={() => scrollTo("testimonials")} className="px-4 py-2 rounded-full text-[var(--foreground)] opacity-70 hover:opacity-100 font-semibold text-sm transition-opacity">Reviews</button>
          <button onClick={() => scrollTo("faq")} className="px-4 py-2 rounded-full text-[var(--foreground)] opacity-70 hover:opacity-100 font-semibold text-sm transition-opacity">FAQ</button>

          {/* Legal dropdown */}
          <div className="relative" onMouseEnter={() => setLegalOpen(true)} onMouseLeave={() => setLegalOpen(false)}>
            <button className="px-4 py-2 rounded-full text-[var(--foreground)] opacity-70 hover:opacity-100 font-semibold text-sm transition-opacity flex items-center gap-1">
              Legal
              <svg className={`w-3 h-3 transition-transform duration-200 ${legalOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {legalOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-44">
                <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl shadow-lg overflow-hidden py-1">
                  <Link href="/privacy" className="block px-4 py-2.5 text-sm font-medium text-[var(--foreground)] opacity-70 hover:opacity-100 hover:bg-white/60 transition-all">Privacy Policy</Link>
                  <Link href="/terms" className="block px-4 py-2.5 text-sm font-medium text-[var(--foreground)] opacity-70 hover:opacity-100 hover:bg-white/60 transition-all">Terms of Service</Link>
                  <Link href="/support" className="block px-4 py-2.5 text-sm font-medium text-[var(--foreground)] opacity-70 hover:opacity-100 hover:bg-white/60 transition-all">Support</Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        <a href="https://apps.apple.com/us/app/rewind-moments/id6761736241" target="_blank" rel="noopener noreferrer" className="bg-[var(--brand-peach)] text-[var(--foreground)] font-bold px-6 py-2 rounded-full shadow-sm hover:-translate-y-1 transition-transform text-sm inline-block">
          Get Started
        </a>
      </div>
    </div>
  );
}
