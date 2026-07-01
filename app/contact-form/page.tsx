"use client";
import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import MessagesSent from "./messages-sent";

export default function ContactForm() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [toast, setToast] = useState<{
    message: string;
    type?: "success" | "error";
  } | null>(null);
  const toastTimer = useRef<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      // reset form
      form.reset();
      // trigger messages refresh
      setRefreshKey((k) => k + 1);
      // show success toast for 2s
      setToast({ message: "Message envoyé", type: "success" });
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
      toastTimer.current = window.setTimeout(() => setToast(null), 2000);
    } catch (err) {
      console.error(err);
      setToast({ message: "Erreur lors de l'envoi du message", type: "error" });
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
      toastTimer.current = window.setTimeout(() => setToast(null), 2000);
    }
  };

  useEffect(() => {
    return () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current);
    };
  }, []);
  const goBack = () => {
    if (typeof window !== "undefined") {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "/";
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 p-6 relative">
      <button
        onClick={goBack}
        aria-label="Retour"
        className="absolute top-6 left-6 z-50 inline-flex items-center justify-center w-10 h-10 rounded-full bg-zinc-900/60 text-white hover:bg-white/10 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <div className="w-full max-w-md bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur">
        <h1 className="text-2xl font-bold text-white mb-4">Contactez-moi</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            name="name"
            placeholder="Nom"
            className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"
          />
          <textarea
            required
            name="message"
            placeholder="Votre message"
            className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"
            rows={5}
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-white text-black rounded"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
      <div className="ml-6">
        <MessagesSent refreshKey={refreshKey} />
      </div>
      {toast && (
        <div className="fixed top-6 right-6 z-60">
          <div
            className={`px-4 py-2 rounded shadow-lg ${
              toast.type === "error"
                ? "bg-red-600 text-white"
                : "bg-white text-black"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}
    </div>
  );
}
