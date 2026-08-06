"use client";

import { useState } from "react";

const tabs = [
  {
    id: "react",
    title: "React",
    content:
      "React is a JavaScript library for building user interfaces.",
  },
  {
    id: "next",
    title: "Next.js",
    content:
      "Next.js is a React framework with routing and Server Components.",
  },
  {
    id: "typescript",
    title: "TypeScript",
    content:
      "TypeScript adds static typing to JavaScript.",
  },
];

export default function TabsDemo() {
  const [active, setActive] = useState(0);

  return (
    <section className="rounded-2xl border bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Accessible Tabs
      </h2>

      <div
        role="tablist"
        aria-label="Programming Tabs"
        className="flex gap-3 border-b"
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === index}
            aria-controls={`${tab.id}-panel`}
            id={`${tab.id}-tab`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                setActive((active + 1) % tabs.length);
              }

              if (e.key === "ArrowLeft") {
                setActive(
                  (active - 1 + tabs.length) % tabs.length
                );
              }
            }}
            className={`rounded-t-lg px-4 py-2 ${
              active === index
                ? "bg-blue-600 text-white"
                : "bg-gray-100"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`${tabs[active].id}-panel`}
        aria-labelledby={`${tabs[active].id}-tab`}
        className="mt-6 rounded-lg bg-gray-50 p-5"
      >
        {tabs[active].content}
      </div>
    </section>
  );
}