"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <div className="w-full pt-8 px-6 absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/50 backdrop-blur-xl border border-white/50 shadow-sm py-4 px-6 rounded-[2rem]">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-1.5 bg-white/50 backdrop-blur-md rounded-2xl shadow-sm group-hover:scale-105 transition-transform">
            <img src="/logo-dark.png" alt="Rewind Logo" className="w-8 h-8 object-contain rounded-[10px]" />
          </div>
          <span className="font-extrabold text-[var(--foreground)] text-xl tracking-tight">Rewind</span>
        </Link>
        <Link href="/#download" className="bg-[var(--brand-mint)] text-[var(--foreground)] font-bold px-6 py-2 rounded-full shadow-sm hover:-translate-y-1 transition-transform">
          Get Started
        </Link>
      </div>
    </div>
  );
}
