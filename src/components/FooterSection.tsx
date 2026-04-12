export default function FooterSection() {
  return (
    <footer className="bg-white pt-24 pb-12">
      
      {/* Massive Download CTA */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <div className="bg-[#3B38FF] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden soft-shadow">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 organic-blob -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to reflect?</h2>
            <p className="text-xl text-blue-100 font-medium mb-10 max-w-xl mx-auto">
              Join thousands of users improving their mental wellness completely free.
            </p>
            <a href="#download" className="inline-block bg-white text-[#3B38FF] font-bold text-lg px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-transform">
              Download Rewind Today
            </a>
          </div>
        </div>
      </div>

      {/* Standard Footer Links */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Rewind Logo" className="w-10 h-10 object-contain rounded-[10px]" />
          <span className="font-bold text-gray-900 text-lg">Rewind</span>
        </div>
        
        <div className="flex gap-8 text-gray-500 font-medium">
          <a href="/privacy" className="hover:text-gray-900 transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-gray-900 transition-colors">Terms</a>
          <a href="/support" className="hover:text-gray-900 transition-colors">Support</a>
        </div>
        
        <div className="text-gray-400 text-sm">
          &copy; 2026 Rewind iOS App.
        </div>
      </div>
    </footer>
  );
}
