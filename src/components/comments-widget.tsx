"use client";

import { useEffect, useMemo, useState } from "react";

type CommentItem = {
  id: string;
  name: string;
  email?: string;
  message: string;
  createdAt: number;
};

function uid() {
  return Math.random().toString(16).slice(2) + "-" + Date.now().toString(16);
}

export function CommentsWidget({ projectSlug }: { projectSlug: string }) {
  const storageKey = useMemo(() => `comments:${projectSlug}`, [projectSlug]);

  const [items, setItems] = useState<CommentItem[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      setItems(raw ? (JSON.parse(raw) as CommentItem[]) : []);
    } catch {
      setItems([]);
    }
  }, [storageKey]);

  function persist(next: CommentItem[]) {
    setItems(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {}
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const n = name.trim();
    const m = message.trim();
    const em = email.trim();

    if (!n || !m) return;

    const next: CommentItem[] = [
      { id: uid(), name: n, email: em ? em : undefined, message: m, createdAt: Date.now() },
      ...items,
    ];

    persist(next);
    setMessage("");
  }

  return (
    <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-3 text-sm font-semibold text-white/90">التعليقات</div>

      <form onSubmit={submit} className="grid gap-3">
        <div className="grid gap-3 md:grid-cols-2">
          <input
            className="h-11 rounded-xl border border-white/10 bg-black/30 px-3 text-sm text-white outline-none placeholder:text-white/40"
            placeholder="الاسم (مطلوب)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="h-11 rounded-xl border border-white/10 bg-black/30 px-3 text-sm text-white outline-none placeholder:text-white/40"
            placeholder="البريد الإلكتروني (اختياري)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <textarea
          className="min-h-[110px] rounded-xl border border-white/10 bg-black/30 p-3 text-sm text-white outline-none placeholder:text-white/40"
          placeholder="اكتب تعليقك..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex items-center justify-between">
          <div className="text-xs text-white/50">بدون تسجيل دخول</div>
          <button
            type="submit"
            className="h-10 rounded-xl bg-white px-4 text-sm font-semibold text-black hover:opacity-90"
          >
            إرسال
          </button>
        </div>
      </form>

      <div className="mt-4 grid gap-3">
        {items.length === 0 ? (
          <div className="text-sm text-white/50">لا يوجد تعليقات بعد.</div>
        ) : (
          items.map((c) => (
            <div key={c.id} className="rounded-xl border border-white/10 bg-black/25 p-3">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white/90">{c.name}</div>
                <div className="text-xs text-white/50">{new Date(c.createdAt).toLocaleString()}</div>
              </div>
              <div className="mt-2 text-sm leading-6 text-white/80">{c.message}</div>
              {c.email ? <div className="mt-2 text-xs text-white/45">{c.email}</div> : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
