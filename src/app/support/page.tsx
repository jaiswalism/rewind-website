import Navigation from "../../components/Navigation";
import FooterSection from "../../components/FooterSection";

export default function SupportPage() {
  return (
    <div className="bg-[var(--background)] min-h-screen relative pt-32 overflow-hidden">
      {/* Soft Background blob */}
      <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[var(--brand-yellow)] opacity-40 organic-blob mix-blend-multiply z-0 pointer-events-none"></div>

      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 relative z-10 pb-32">
        <div className="bg-white/60 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(34,60,51,0.05)] border border-white text-center">
          
          <div className="w-24 h-24 rounded-full bg-[var(--brand-mint)] flex items-center justify-center mx-auto mb-8 shadow-sm">
             <svg className="w-12 h-12 text-[var(--foreground)] opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] mb-6 leading-[1.1]">
            We're here to help.
          </h1>
          
          <p className="mb-12 font-medium text-xl text-[var(--foreground)] opacity-70 max-w-2xl mx-auto">
            Need help recovering your journal, troubleshooting your companion, or managing your account? Reach out to our team directly.
          </p>

          <a href="mailto:rewind@shyamjaiswal.in" className="inline-flex items-center gap-2 btn-primary px-10 py-5 text-xl font-bold">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Email Support
          </a>
          
          <p className="mt-8 text-sm text-[var(--foreground)] opacity-50 font-medium">
            Response times are typically within 24-48 hours.
          </p>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}