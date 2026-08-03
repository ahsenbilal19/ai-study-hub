export default function NotesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <div className="mb-6 text-5xl">📝</div>

        <h1 className="text-3xl font-bold mb-2">
          Smart Notes
        </h1>

        <p className="text-gray-600 mb-8">
          Save lecture notes, organize topics, and let AI summarize
          long content into easy-to-read study notes.
        </p>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h2 className="font-semibold mb-3">
            Planned Features
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>✅ Rich text notes</li>
            <li>✅ AI summarization</li>
            <li>✅ Topic organization</li>
            <li>✅ Search notes instantly</li>
          </ul>
        </div>

      </div>
    </main>
  );
}