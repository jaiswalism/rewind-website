export default function FooterSection() {
  return (
    <footer className="bg-[var(--background)] pt-24 pb-12">
      
      {/* Massive Download CTA */}
      <div className="max-w-5xl mx-auto px-6 mb-32 relative">
        <div className="bg-[var(--brand-mint)] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[var(--brand-peach)] opacity-60 organic-blob mix-blend-multiply"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[var(--brand-yellow)] opacity-60 organic-blob-2 mix-blend-multiply"></div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight">Ready to reflect?</h2>
            <p className="text-2xl text-[var(--foreground)] opacity-70 font-medium mb-10 max-w-xl mx-auto">
              Join thousands of users improving their mental wellness completely free.
            </p>
            <a href="#download" className="btn-primary inline-block px-10 py-5 text-lg font-bold">
              Download Rewind Today
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-[var(--border-color)]">
        <div className="flex items-center gap-3">
          <img src="/logo-dark.png" alt="Rewind Logo" className="w-10 h-10 object-contain rounded-[10px]" />
          <span className="font-extrabold text-[var(--foreground)] text-lg tracking-tight">Rewind</span>
        </div>
        
        <div className="flex gap-8 text-[var(--foreground)] opacity-60 font-medium">
          <a href="/privacy" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="/terms" className="hover:opacity-100 transition-opacity">Terms</a>
          <a href="/support" className="hover:opacity-100 transition-opacity">Support</a>
        </div>
        
        <div className="text-[var(--foreground)] opacity-40 text-sm font-medium">
          &copy; 2026 Rewind iOS App.
        </div>
      </div>
    </footer>
  );
}
