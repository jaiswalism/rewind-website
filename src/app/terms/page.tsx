import Navigation from "../../components/Navigation";
import FooterSection from "../../components/FooterSection";

export default function TermsOfService() {
  return (
    <div className="bg-[var(--background)] min-h-screen relative pt-32 overflow-hidden">
      {/* Soft Background blob */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[var(--brand-peach)] opacity-40 organic-blob-2 mix-blend-multiply z-0 pointer-events-none"></div>

      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 relative z-10 pb-32">
        <div className="bg-white/60 backdrop-blur-3xl rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(34,60,51,0.05)] border border-white">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--brand-yellow)] text-[var(--foreground)] font-bold text-sm mb-6">
            Last Updated: April 2026
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--foreground)] mb-10 leading-[1.1]">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg prose-headings:text-[var(--foreground)] text-[var(--foreground)] opacity-80 max-w-none">
            <p className="mb-8 font-medium text-xl">By using Rewind, you agree to these terms. These rules ensure that our digital journal and community remain a safe, supportive space for everyone.</p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">1. General App Usage</h2>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>Rewind is intended for personal, non-commercial use to assist with reflection, daily routines, and mental wellness.</li>
              <li>You may not reverse-engineer, disrupt, or exploit the Live Voice proxy service or our backend infrastructure.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Ownership & Privacy</h2>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li>You retain 100% ownership of your private journal entries, photos, and interactions with your virtual companion. We do not claim rights to your private reflections.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">3. User-Generated Content (UGC) & Community Conduct</h2>
            <p className="mb-4">To view or post content in the public "Community" section, you must agree to strict behavioral guidelines. We have a zero-tolerance policy against objectionable content or abusive users.</p>
            <ul className="list-disc ml-6 mb-4 space-y-2">
              <li><strong>No Objectionable Content:</strong> You may not post hate speech, harassment, explicit imagery, threats, or illegal content.</li>
              <li><strong>Reporting & Blocking:</strong> Rewind provides built-in tools to flag inappropriate posts and block abusive users.</li>
              <li><strong>Moderation:</strong> We reserve the right to actively remove offensive content and permanently terminate accounts that violate these safety standards without prior notice. We review reports within 24 hours and take action including removal and banning.</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclaimers</h2>
            <p className="mb-4">Rewind's virtual companion and guided care corners are completely for personal tracking and reflection. The app does not provide medical or psychological advice, diagnosis, or treatment. Always consult a qualified health provider with any questions you may have regarding a medical or mental health condition.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Contact Information</h2>
            <p>For legal inquiries, takedown requests, or questions regarding these terms, please contact <a href="mailto:rewind@shyamjaiswal.in" className="font-bold underline decoration-[var(--brand-peach)] underline-offset-4 hover:text-[var(--brand-peach)] transition-colors">rewind@shyamjaiswal.in</a>.</p>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
}