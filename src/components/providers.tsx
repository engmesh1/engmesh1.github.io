"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { ContentProvider } from "@/components/content-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ContentProvider>{children}</ContentProvider>
    </ThemeProvider>
  );
}
