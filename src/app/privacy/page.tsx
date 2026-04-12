import Navigation from "../../components/Navigation";
import FooterSection from "../../components/FooterSection";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[var(--background)] min-h-screen relative pt-32 overflow-hidden">
      {/* Soft Background blob */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[var(--brand-teal)] opacity-30 organic-blob mix-blend-multiply z-0 pointer-events-none"></div>

      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 relative z-10 pb-32">
        <div className="bg-white/60 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(34,60,51,0.05)] border border-white">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand-mint)] text-[var(--foreground)] font-bold text-sm mb-6">
            Last Updated: April 2026
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] mb-10 leading-[1.1]">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg prose-headings:text-[var(--foreground)] text-[var(--foreground)] opacity-80 max-w-none">
            <p className="mb-6 font-medium text-xl">We believe your reflections are deeply personal. This Privacy Policy outlines precisely how Rewind collects, uses, and safeguards your information across your digital journal, virtual companion interactions, and the public Community spaces.</p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">1. Information We Collect</h2>
            <p className="mb-4">When you use Rewind, we process data necessary to provide our core features:</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li><strong>Account Data:</strong> Information required to authenticate you securely via our backend providers.</li>
              <li><strong>Private Journals & Media:</strong> Text, images, and routines logged in your personal journal timeline.</li>
              <li><strong>Conversational Data:</strong> Audio inputs and transcriptions generated when speaking to your virtual pet via Live Voice.</li>
              <li><strong>Community Data:</strong> Any posts, comments, tags, or media you voluntarily share in the public Community feed.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Processing Live Voice & AI Interactions</h2>
            <p className="mb-4">Rewind utilizes the Gemini protocol to power the Live Voice virtual companion. When you speak to your companion, your audio is processed in real-time to generate low-latency responses. We do not use your personal voice data to train our core AI models, and conversational transcripts are securely tied to your private account unless you explicitly choose to share them.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Security & Storage (Supabase)</h2>
            <p className="mb-4">All private journal entries, uploaded media, and personalized settings are stored securely using industry-standard database infrastructure. We implement strict <strong>Row Level Security (RLS)</strong> over our Supabase architecture, ensuring that cryptographically, only your authenticated device can access or retrieve your private, non-community datasets.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Public Community Feed</h2>
            <p className="mb-4">Rewind features a Community module where you can intentionally publish posts and engage with others. Please be aware that any content, tags, or photos you post to the Community feed are visible to other users. You retain full control to edit or delete your Community posts at any time.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Portability & Deletion</h2>
            <p className="mb-4">You own your data. You may request a complete export of your personal journal history or request the permanent deletion of your account and all associated data at any time via the in-app settings.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
            <p>If you have any questions regarding how your data is handled, please reach out to our privacy team at <a href="mailto:rewind@shyamjaiswal.in" className="font-bold underline decoration-[var(--brand-teal)] underline-offset-4 hover:text-[var(--brand-teal)] transition-colors">rewind@shyamjaiswal.in</a>.</p>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}