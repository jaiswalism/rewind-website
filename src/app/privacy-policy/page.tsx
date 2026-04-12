export default function PrivacyPolicy() {
  return (
    <main className="max-w-2xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="mb-4">Your privacy is important to us. This Privacy Policy explains how Rewind collects, uses, and protects your information.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal information (name, email) for account creation and support</li>
        <li>Journals, pet interactions, and app usage data (never shared without consent)</li>
        <li>Device and analytics data (for improving the app)</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To provide and improve Rewind features</li>
        <li>To personalize your experience</li>
        <li>To respond to support requests</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Data Security</h2>
      <p className="mb-4">We use encryption and secure storage. Your data is never sold or shared with third parties for marketing.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
      <p>For privacy questions, email <a href="mailto:support@rewindapp.com" className="underline text-indigo-700">support@rewindapp.com</a>.</p>
    </main>
  );
}