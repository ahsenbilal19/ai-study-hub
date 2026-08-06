"use client";

import { useState } from "react";

export default function DisclosureDemo() {
  const [open, setOpen] = useState(false);

  return (
    <section className="rounded-2xl border bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Accessible Disclosure
      </h2>

      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="disclosure-content"
        className="flex w-full items-center justify-between rounded-lg bg-blue-600 px-5 py-4 text-left font-semibold text-white transition hover:bg-blue-700"
      >
        What is AI Study Hub?

        <span
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div
          id="disclosure-content"
          className="mt-4 rounded-lg border bg-gray-50 p-5"
        >
          AI Study Hub is an AI-powered learning platform that helps
          students organize study plans, generate quizzes, create
          flashcards and improve learning efficiency.
        </div>
      )}
    </section>
  );
}