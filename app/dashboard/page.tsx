export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      {/* Hero */}

      <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
        <p className="text-sm uppercase tracking-widest opacity-80">
          Welcome Back 👋
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          AI Study Dashboard
        </h1>

        <p className="mt-3 max-w-2xl text-blue-100">
          Track your study progress, manage learning resources,
          and prepare smarter with AI-powered tools.
        </p>
      </section>

      {/* Statistics */}

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-4xl">📚</div>

          <p className="mt-4 text-sm text-gray-500">
            Study Hours
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            18 hrs
          </h2>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-4xl">📝</div>

          <p className="mt-4 text-sm text-gray-500">
            Notes Created
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            36
          </h2>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-4xl">🧠</div>

          <p className="mt-4 text-sm text-gray-500">
            Flashcards
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            125
          </h2>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div className="text-4xl">🔥</div>

          <p className="mt-4 text-sm text-gray-500">
            Study Streak
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            9 Days
          </h2>
        </div>

      </section>

      {/* Two Columns */}

      <section className="mt-10 grid gap-6 lg:grid-cols-2">

        {/* Today's Plan */}

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <h2 className="text-xl font-semibold">
            📅 Today&apos;s Plan
          </h2>

          <ul className="mt-5 space-y-4 text-gray-600">

            <li>✅ Review Chapter 4 Notes</li>

            <li>🧠 Practice AI Flashcards</li>

            <li>🎯 Complete One Quiz</li>

            <li>📖 Study Machine Learning Basics</li>

          </ul>

        </div>

        {/* Upcoming Features */}

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <h2 className="text-xl font-semibold">
            🚀 Upcoming AI Features
          </h2>

          <ul className="mt-5 space-y-4 text-gray-600">

            <li>🤖 AI Tutor Chat</li>

            <li>📚 Personalized Study Planner</li>

            <li>📝 AI Note Summarization</li>

            <li>🎯 Adaptive Quiz Generator</li>

          </ul>

        </div>

      </section>

    </main>
  );
}