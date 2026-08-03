export default function FlashcardsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <div className="mb-6 text-5xl">🃏</div>

        <h1 className="text-3xl font-bold mb-2">
          Flashcards
        </h1>

        <p className="text-gray-600 mb-8">
          Generate AI-powered flashcards automatically from notes and
          study material to improve memory retention.
        </p>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h2 className="font-semibold mb-3">
            Planned Features
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>✅ AI-generated flashcards</li>
            <li>✅ Flip animation</li>
            <li>✅ Difficulty levels</li>
            <li>✅ Spaced repetition</li>
          </ul>
        </div>

      </div>
    </main>
  );
}