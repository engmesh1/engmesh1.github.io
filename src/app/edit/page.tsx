"use client";

import { useEffect, useMemo, useState } from "react";
import { useContent } from "@/components/content-provider";
import { adminLogin, adminLogout, isAdminAuthed } from "@/lib/admin-auth";

export default function EditPage() {
  const { content, setContent, reset } = useContent();

  const [authed, setAuthed] = useState(false);
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const [err, setErr] = useState<string | null>(null);

  // Simple JSON editor for all content
  const pretty = useMemo(() => JSON.stringify(content, null, 2), [content]);
  const [draft, setDraft] = useState(pretty);

  useEffect(() => {
    setAuthed(isAdminAuthed());
  }, []);

  useEffect(() => {
    setDraft(pretty);
  }, [pretty]);

  function doLogin(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const ok = adminLogin({ username: u.trim(), password: p });
    if (!ok) {
      setAuthed(false);
      setErr("بيانات الدخول غير صحيحة");
      return;
    }
    setAuthed(true);
    setU("");
    setP("");
  }

  function doLogout() {
    adminLogout();
    setAuthed(false);
  }

  function applyDraft() {
    setErr(null);
    try {
      const next = JSON.parse(draft);
      setContent(next);
    } catch {
      setErr("صيغة JSON غير صحيحة. راجع الفواصل والأقواس.");
    }
  }

  if (!authed) {
    return (
      <div className="mx-auto max-w-xl px-6 py-12">
        <h1 className="text-2xl font-bold text-white">لوحة الإدارة</h1>
        <p className="mt-2 text-sm text-white/60">تسجيل دخول بسيط لإدارة محتوى الموقع من المتصفح.</p>

        <form onSubmit={doLogin} className="mt-6 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
          <input
            className="h-11 rounded-xl border border-white/10 bg-black/30 px-3 text-sm text-white outline-none placeholder:text-white/40"
            placeholder="Username"
            value={u}
            onChange={(e) => setU(e.target.value)}
            autoComplete="username"
          />
          <input
            className="h-11 rounded-xl border border-white/10 bg-black/30 px-3 text-sm text-white outline-none placeholder:text-white/40"
            placeholder="Password"
            value={p}
            onChange={(e) => setP(e.target.value)}
            autoComplete="current-password"
            type="password"
          />
          {err ? <div className="text-sm text-red-300">{err}</div> : null}
          <button className="h-11 rounded-xl bg-white px-4 text-sm font-semibold text-black hover:opacity-90" type="submit">
            دخول
          </button>
          <div className="text-xs text-white/45">
            ملاحظة: هذا قفل بسيط (Client-side). غيّر بيانات الدخول في <code>src/lib/admin-auth.ts</code> قبل النشر.
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">لوحة الإدارة</h1>
          <p className="mt-2 text-sm text-white/60">عدّل محتوى الموقع مباشرة (يُحفظ في LocalStorage).</p>
        </div>
        <div className="flex gap-2">
          <button onClick={doLogout} className="h-10 rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white hover:bg-white/10">
            تسجيل خروج
          </button>
          <button onClick={() => reset()} className="h-10 rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white hover:bg-white/10">
            استعادة الافتراضي
          </button>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="mb-2 text-sm font-semibold text-white/90">المحتوى (JSON)</div>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          className="min-h-[420px] w-full rounded-xl border border-white/10 bg-black/30 p-3 font-mono text-xs leading-5 text-white outline-none"
        />
        {err ? <div className="mt-2 text-sm text-red-300">{err}</div> : null}
        <div className="mt-3 flex gap-2">
          <button onClick={applyDraft} className="h-10 rounded-xl bg-white px-4 text-sm font-semibold text-black hover:opacity-90">
            حفظ
          </button>
          <div className="text-xs text-white/45 self-center">التغيير يظهر فوراً، ويُحفظ على نفس الجهاز/المتصفح.</div>
        </div>
      </div>
    </div>
  );
}
