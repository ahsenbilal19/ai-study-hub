"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function ModalDemo() {
  const [open, setOpen] = useState(false);

  return (
    <section className="rounded-2xl border bg-white p-8 shadow-sm">

      <h2 className="mb-6 text-2xl font-bold">
        Accessible Modal
      </h2>

      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
      >
        Open Modal
      </button>

      <Modal
        open={open}
        title="Welcome!"
        onClose={() => setOpen(false)}
      >
        <p className="text-gray-600">
          This modal was built completely from scratch
          using React, TypeScript and ARIA roles.
        </p>
      </Modal>

    </section>
  );
}