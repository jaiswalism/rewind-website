export default function TermsOfService() {
  return (
    <main className="max-w-2xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="mb-4">By using Rewind, you agree to these terms. Please read them carefully.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Use of the App</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Rewind is for personal, non-commercial use only.</li>
        <li>Do not misuse, reverse engineer, or attempt to disrupt the app or its services.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">User Content</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>You own your journals and pet data. We do not claim ownership.</li>
        <li>You are responsible for the content you create and share.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Limitation of Liability</h2>
      <p className="mb-4">Rewind is provided as-is. We are not liable for any damages arising from use of the app.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
      <p>For questions, email <a href="mailto:support@rewindapp.com" className="underline text-indigo-700">support@rewindapp.com</a>.</p>
    </main>
  );
}