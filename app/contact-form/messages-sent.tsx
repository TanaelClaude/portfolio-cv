"use client";
import React, { useEffect, useState } from "react";

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
};

export default function MessagesSent({ refreshKey }: { refreshKey?: number }) {
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch("/api/messages")
      .then((r) => r.json())
      .then((data) => {
        if (mounted) setMessages(data as Message[]);
      })
      .catch(() => {
        if (mounted) setMessages([]);
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [refreshKey]);

  if (loading) return <p className="text-zinc-400">Chargement...</p>;
  if (!messages || messages.length === 0)
    return <p className="text-zinc-400">Aucun message envoyé.</p>;

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-white mb-4">Liste des messages envoyés</h2>
      <ul className="space-y-4">
        {messages.map((m) => (
          <li key={m.id} className="bg-zinc-900/40 border border-zinc-800 rounded p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-zinc-300">{m.name} — {m.email}</div>
              <div className="text-xs text-zinc-500">{new Date(m.date).toLocaleString()}</div>
            </div>
            <div className="text-zinc-300 text-sm">{m.message}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
