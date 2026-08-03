"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/study", label: "Study" },
  { href: "/notes", label: "Notes" },
  { href: "/flashcards", label: "Flashcards" },
  { href: "/quizzes", label: "Quiz" },
  { href: "/ai-assistant", label: "AI Assistant" },
  { href: "/profile", label: "Profile" },
  { href: "/health", label: "Health" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-blue-600"
        >
          🎓 AI Study Hub
        </Link>

        <div className="hidden gap-2 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-600 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-zinc-800"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          Foundations
        </span>
      </nav>
    </header>
  );
}