import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[var(--brand-mint)] opacity-60 organic-blob mix-blend-multiply pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[var(--brand-peach)] opacity-60 organic-blob-2 mix-blend-multiply pointer-events-none"></div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <div className="p-1.5 bg-white/50 backdrop-blur-md rounded-2xl shadow-sm">
            <img src="/logo.png" alt="Rewind Logo" className="w-10 h-10 object-contain rounded-[10px]" />
          </div>
          <span className="font-extrabold text-[var(--foreground)] text-2xl tracking-tight">Rewind</span>
        </div>

        {/* 404 */}
        <p className="text-[10rem] font-extrabold text-[var(--foreground)] leading-none tracking-tighter opacity-10 select-none mb-0">
          404
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--foreground)] tracking-tight mt-[-2rem] mb-6">
          Page not found.
        </h1>
        <p className="text-xl text-[var(--foreground)] opacity-60 font-medium mb-12 max-w-md mx-auto">
          This moment doesn&apos;t exist in your timeline. Let&apos;s get you back.
        </p>

        <Link
          href="/"
          className="btn-primary inline-block px-10 py-4 text-lg font-bold"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
