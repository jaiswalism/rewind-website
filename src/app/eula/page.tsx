import Navigation from "../../components/Navigation";
import FooterSection from "../../components/FooterSection";

export default function EULA() {
  return (
    <div className="bg-[var(--background)] min-h-screen relative pt-32 overflow-hidden">
      {/* Soft Background blob */}
      <div className="absolute top-[20%] left-[30%] w-[500px] h-[500px] bg-[var(--brand-mint)] opacity-40 organic-blob mix-blend-multiply z-0 pointer-events-none"></div>

      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 relative z-10 pb-32">
        <div className="bg-white/60 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(34,60,51,0.05)] border border-white">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand-teal)] text-[var(--foreground)] font-bold text-sm mb-6">
            Last Updated: April 2026
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] mb-10 leading-[1.1]">
            End User License Agreement
          </h1>
          
          <div className="prose prose-lg prose-headings:text-[var(--foreground)] text-[var(--foreground)] opacity-80 max-w-none">
            <p className="mb-8 font-medium text-xl">This End User License Agreement ("EULA") is a legal agreement between you and Rewind regarding the use of the iOS application.</p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">1. License Grant</h2>
            <p className="mb-4">Rewind grants you a personal, non-exclusive, non-transferable, revocable license to use the application on any Apple-branded products that you own or control as permitted by the Usage Rules set forth in the Apple App Store Terms of Service.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Restrictions</h2>
            <p className="mb-4">You agree not to, and you will not permit others to license, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the Application.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Modifications to Application</h2>
            <p className="mb-4">Rewind reserves the right to modify, suspend or discontinue, temporarily or permanently, the Application or any service to which it connects, with or without notice and without liability to you.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Content and Moderation Rules</h2>
            <p className="mb-4">Given the Community features within Rewind, you agree NOT to upload or distribute any content that is definitively offensive, discriminatory, harassing, defamatory, or illegal. Rewind enforces a <strong>Zero-Tolerance policy for objectionable content</strong>.</p>
            <p className="mb-4">We actively moderate the community and provide users with mechanisms to block abusive users immediately and flag inappropriate content. We maintain the absolute right to remove any User-Generated Content and ban offending accounts permanently at our sole discretion, without liability to you.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Termination</h2>
            <p className="mb-4">This EULA shall remain in effect until terminated by you or Rewind. Rewind may, in its sole discretion, at any time and for any or no reason, suspend or terminate this EULA with or without prior notice.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact</h2>
            <p className="mb-4">If you have any questions regarding this EULA, please contact <a href="mailto:rewind@shyamjaiswal.in" className="font-bold underline decoration-[var(--brand-teal)] underline-offset-4 hover:text-[var(--brand-teal)] transition-colors">rewind@shyamjaiswal.in</a>.</p>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}