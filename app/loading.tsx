export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

        <p className="mt-6 text-gray-500">
          Loading AI Study Hub...
        </p>
      </div>
    </main>
  );
}