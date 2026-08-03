export default function AssistantPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <div className="mb-6 text-5xl">🤖</div>

        <h1 className="text-3xl font-bold mb-2">
          AI Study Assistant
        </h1>

        <p className="text-gray-600 mb-8">
          Ask questions, receive explanations, summarize documents,
          and get personalized learning support powered by AI.
        </p>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h2 className="font-semibold mb-3">
            Planned Features
          </h2>

          <ul className="space-y-2 text-gray-600">
            <li>✅ AI tutoring</li>
            <li>✅ Concept explanations</li>
            <li>✅ Homework assistance</li>
            <li>✅ Personalized recommendations</li>
          </ul>
        </div>

      </div>
    </main>
  );
}