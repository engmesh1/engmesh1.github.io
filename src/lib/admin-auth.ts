"use client";

const STORAGE_KEY = "meshari:admin-session";

export type AdminCredentials = {
  username: string;
  password: string;
};

// Change these before deploying.
// For GitHub Pages (static), secrets are not truly secret on the client.
// This is meant as a simple gate, not strong security.
export const DEFAULT_ADMIN: AdminCredentials = {
  username: process.env.NEXT_PUBLIC_ADMIN_USER || "admin",
  password: process.env.NEXT_PUBLIC_ADMIN_PASS || "admin123",
};

export function isAdminAuthed(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function adminLogin(input: AdminCredentials, expected: AdminCredentials = DEFAULT_ADMIN): boolean {
  const ok = input.username === expected.username && input.password === expected.password;
  try {
    localStorage.setItem(STORAGE_KEY, ok ? "1" : "0");
  } catch {}
  return ok;
}

export function adminLogout() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
}
