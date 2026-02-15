"use client";

export type CommentItem = {
  id: string;
  name: string;
  email?: string;
  message: string;
  createdAt: number;
};

const prefix = "comments:";

function safeParse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function commentsKey(projectId: string) {
  return `${prefix}${projectId}`;
}

export function listComments(projectId: string): CommentItem[] {
  try {
    return safeParse<CommentItem[]>(localStorage.getItem(commentsKey(projectId)), []);
  } catch {
    return [];
  }
}

export function saveComments(projectId: string, items: CommentItem[]) {
  try {
    localStorage.setItem(commentsKey(projectId), JSON.stringify(items));
  } catch {}
}

export function clearComments(projectId: string) {
  try {
    localStorage.removeItem(commentsKey(projectId));
  } catch {}
}

export function listAllProjectCommentKeys(): string[] {
  try {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(prefix)) keys.push(k);
    }
    return keys;
  } catch {
    return [];
  }
}
