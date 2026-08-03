import Link from "next/link";

const features = [
  {
    title: "AI Study Planner",
    description:
      "Generate personalized study schedules based on your goals and deadlines.",
    emoji: "📅",
  },
  {
    title: "AI Tutor",
    description:
      "Ask questions and receive instant explanations powered by AI.",
    emoji: "🤖",
  },
  {
    title: "Smart Flashcards",
    description:
      "Automatically create flashcards from your study material.",
    emoji: "🧠",
  },
  {
    title: "Practice Quizzes",
    description:
      "Test your knowledge with AI-generated quizzes.",
    emoji: "📝",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
          <span className="mb-4 rounded-full bg-white/20 px-4 py-2 text-sm">
            🚀 AI-Powered Learning Platform
          </span>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-6xl">
            Study Smarter,
            <br />
            Not Harder.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-blue-100">
            AI Study Hub helps students organize study plans, generate
            flashcards, create quizzes, and learn faster with an intelligent
            AI assistant.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/dashboard"
              className="rounded-xl bg-white px-7 py-3 font-semibold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              Get Started
            </Link>

            <Link
              href="/study"
              className="rounded-xl border border-white px-7 py-3 font-semibold transition hover:bg-white hover:text-blue-700"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold">
              Everything You Need to Learn Better
            </h2>

            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Designed to help students stay productive using modern AI tools.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-8 shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-zinc-800"
              >
                <div className="mb-5 text-5xl">{feature.emoji}</div>

                <h3 className="mb-3 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}