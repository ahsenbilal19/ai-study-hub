"use client";

import {
  useEffect,
  useRef,
  ReactNode,
} from "react";

interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({
  open,
  title,
  children,
  onClose,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    dialogRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">

          <h2
            id="modal-title"
            className="text-2xl font-bold"
          >
            {title}
          </h2>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-lg px-3 py-2 hover:bg-gray-100"
          >
            ✕
          </button>

        </div>

        <div className="mt-6">
          {children}
        </div>

      </div>
    </div>
  );
}