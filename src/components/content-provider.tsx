"use client";

import React from "react";
import {
  CONTENT_STORAGE_KEY,
  DEFAULT_CONTENT,
  type ContentState,
  safeParseJSON,
} from "@/lib/content";

type ContentContextValue = {
  content: ContentState;
  setContent: React.Dispatch<React.SetStateAction<ContentState>>;
  reset: () => void;
  exportJSON: () => string;
  importJSON: (json: string) => { ok: true } | { ok: false; error: string };
};

const ContentContext = React.createContext<ContentContextValue | null>(null);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = React.useState<ContentState>(DEFAULT_CONTENT);

  // Load from localStorage
  React.useEffect(() => {
    const saved = safeParseJSON<ContentState>(
      typeof window !== "undefined" ? window.localStorage.getItem(CONTENT_STORAGE_KEY) : null
    );
    if (saved) setContent({ ...DEFAULT_CONTENT, ...saved });
  }, []);

  // Persist
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(content));
  }, [content]);

  const reset = React.useCallback(() => {
    setContent(DEFAULT_CONTENT);
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(CONTENT_STORAGE_KEY);
    }
  }, []);

  const exportJSON = React.useCallback(() => JSON.stringify(content, null, 2), [content]);

  const importJSON = React.useCallback((json: string) => {
    const parsed = safeParseJSON<ContentState>(json);
    if (!parsed) return { ok: false as const, error: "Invalid JSON" };
    setContent({ ...DEFAULT_CONTENT, ...parsed });
    return { ok: true as const };
  }, []);

  return (
    <ContentContext.Provider value={{ content, setContent, reset, exportJSON, importJSON }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const ctx = React.useContext(ContentContext);
  if (!ctx) throw new Error("useContent must be used within ContentProvider");
  return ctx;
}
