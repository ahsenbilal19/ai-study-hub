import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center text-center px-6">

      <h1 className="text-7xl font-extrabold text-blue-600">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-md text-gray-500">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Back Home
      </Link>

    </main>
  );
}