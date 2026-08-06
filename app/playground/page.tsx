import ModalDemo from "./modal/ModalDemo";
import TabsDemo from "./tabs/TabsDemo";
import DisclosureDemo from "./disclosure/DisclosureDemo";

export default function PlaygroundPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 p-10">
      <div>
        <h1 className="text-4xl font-bold">
          Accessibility Playground
        </h1>

        <p className="mt-2 text-gray-600">
          Interactive accessibility components built from scratch.
        </p>
      </div>

      <ModalDemo />
      <TabsDemo />
      <DisclosureDemo />
    </main>
  );
}