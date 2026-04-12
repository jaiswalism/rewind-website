export default function EULA() {
  return (
    <main className="max-w-2xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8">End User License Agreement (EULA)</h1>
      <p className="mb-4">This EULA governs your use of the Rewind app. By downloading or using the app, you agree to these terms.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">License</h2>
      <p className="mb-4">Rewind grants you a non-exclusive, non-transferable license to use the app for personal, non-commercial purposes.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Restrictions</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>No reverse engineering, copying, or redistribution.</li>
        <li>No use for unlawful or harmful purposes.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Termination</h2>
      <p className="mb-4">We may terminate your license if you violate these terms.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
      <p>For questions, email <a href="mailto:support@rewindapp.com" className="underline text-indigo-700">support@rewindapp.com</a>.</p>
    </main>
  );
}