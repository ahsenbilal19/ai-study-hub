async function getHealth() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });

  return res.json();
}

export default async function HealthPage() {
  const data = await getHealth();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <div className="mb-6 text-5xl">🩺</div>

        <h1 className="text-3xl font-bold mb-2">
          Health Check
        </h1>

        <p className="text-gray-600 mb-8">
          This page verifies that the application can successfully fetch
          and render remote data.
        </p>

        <div className="rounded-xl border bg-gray-50 p-6">
          <h2 className="font-semibold mb-4">
            API Response
          </h2>

          <pre className="overflow-auto rounded-lg bg-black p-4 text-green-400 text-sm">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>

      </div>
    </main>
  );
}