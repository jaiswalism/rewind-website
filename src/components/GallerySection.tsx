"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Shared card component used by both mobile and desktop versions
function ScreenshotCard({ i, idx, bgColors }: { i: number; idx: number; bgColors: string[] }) {
  return (
    <div className={`gallery-card w-[260px] h-[520px] md:w-[320px] md:h-[640px] ${bgColors[idx % bgColors.length]} rounded-[3rem] border-[12px] border-white/80 backdrop-blur-xl shadow-sm flex flex-col items-center justify-center text-center p-6 relative overflow-hidden`}>
      {/* <div className="iphone-notch"></div> */}

      {/* <div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center mb-6 mt-10 shadow-sm">
        <svg className="w-8 h-8 text-[var(--foreground)] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
      </div>
      <p className="font-bold text-[var(--foreground)] text-xl mb-2">Screenshot {i}</p>
      <p className="text-[var(--foreground)] opacity-50 text-xs font-mono bg-white/50 px-3 py-1.5 rounded-xl">/public/screenshots/{i}.jpg</p> */}

      {/* Abstract UI wires to look like wireframes */}
      {/* <div className="absolute inset-x-8 bottom-8 flex flex-col gap-4 opacity-40 mix-blend-multiply">
        <div className="h-28 bg-[var(--foreground)] opacity-10 rounded-3xl w-full"></div>
        <div className="h-16 bg-[var(--foreground)] opacity-10 rounded-2xl w-3/4"></div>
        <div className="h-16 bg-[var(--foreground)] opacity-10 rounded-2xl w-full"></div>
      </div> */}
      <img src={`/screenshots/${i}.jpg`} alt={`Screenshot ${i}`} draggable={false} className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none" />
    </div>
  );
}

export default function GallerySection() {
  // Soft pastel colors mapped to placeholders
  const bgColors = [
    'bg-[var(--brand-mint)]',
    'bg-[var(--brand-peach)]',
    'bg-[var(--brand-yellow)]',
    'bg-[var(--brand-teal)]'
  ];

  // Array of 5 placeholders for App Store screenshots
  const placeholders = [1, 2, 3, 4, 5];

  const outerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  // Suppress Framer Motion's non-static position warning — the element has position:relative via inline style
  useEffect(() => {
    const orig = console.warn.bind(console);
    console.warn = (...args: unknown[]) => {
      if (typeof args[0] === 'string' && args[0].includes('non-static position')) return;
      orig(...args);
    };
    return () => { console.warn = orig; };
  }, []);

  // Dynamically compute totalTravel based on actual row width vs viewport.
  // This stops the scroll exactly when the last card's right edge meets the viewport's right edge.
  const x = useTransform(scrollYProgress, (progress) => {
    if (!rowRef.current) return 0;
    const rowWidth = rowRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const travel = Math.max(0, rowWidth - viewportWidth);
    return -(progress * travel);
  });

  const SectionHeader = () => (
    <div className="max-w-7xl mx-auto px-6 mb-8 pt-16 text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] tracking-tight mb-6">A beautiful interface.</h2>
      <p className="text-xl text-[var(--foreground)] opacity-70 font-medium">Designed with care so you can focus on what matters most.</p>
    </div>
  );

  return (
    <div id="gallery">
      {/* ── MOBILE: simple horizontal swipe strip ── */}
      <section className="md:hidden py-16 w-full bg-[var(--surface-gray)] overflow-hidden relative isolate">
        <div className="absolute top-1/2 left-1/2 w-[80vw] h-[80vw] max-w-[400px] max-h-[400px] bg-white opacity-40 organic-blob -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <SectionHeader />
        <div className="flex overflow-x-auto no-sb gap-4 px-6 pb-8 snap-x snap-mandatory select-none" style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
          <style dangerouslySetInnerHTML={{ __html: `.no-sb::-webkit-scrollbar{display:none}.no-sb{-ms-overflow-style:none;scrollbar-width:none}` }} />
          <div className="w-4 shrink-0" />
          {placeholders.map((i, idx) => (
            <div key={i} className="shrink-0 snap-center">
              <ScreenshotCard i={i} idx={idx} bgColors={bgColors} />
            </div>
          ))}
          <div className="w-4 shrink-0" />
        </div>
      </section>

      {/* ── DESKTOP: sticky scroll-driven parallax ── */}
      <div ref={outerRef} className="hidden md:block" style={{ position: 'relative', height: `${placeholders.length * 30 + 10}vh` }}>
        <div className="sticky top-0 h-screen w-full bg-[var(--surface-gray)] flex flex-col justify-center relative z-10 isolate">
          <div className="absolute top-1/2 left-[20%] w-[1000px] h-[1000px] bg-white opacity-40 organic-blob -translate-y-1/2 pointer-events-none"></div>
          <SectionHeader />
          <div className="overflow-hidden">
            <motion.div
              ref={rowRef}
              style={{ x }}
              className="flex gap-6 px-6 will-change-transform"
            >
              <div className="w-[5vw] shrink-0" />
              {placeholders.map((i, idx) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                  className="shrink-0"
                >
                  <ScreenshotCard i={i} idx={idx} bgColors={bgColors} />
                </motion.div>
              ))}
              <div className="w-[5vw] shrink-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
