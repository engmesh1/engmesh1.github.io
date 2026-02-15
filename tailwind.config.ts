import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Apple Color Emoji", "Segoe UI Emoji"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        fg: "hsl(var(--fg) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)"
      },
      boxShadow: {
        glow: "0 0 0 1px hsl(var(--border) / 0.7), 0 12px 40px hsl(var(--accent) / 0.20)"
      },
      keyframes: {
        floaty: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-8px)" } }
      },
      animation: { floaty: "floaty 6s ease-in-out infinite" }
    }
  },
  plugins: []
} satisfies Config;
