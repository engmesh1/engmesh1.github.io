import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: { default: "Meshari Al-Khalifah | Portfolio", template: "%s | Meshari" },
  description: "Interactive portfolio showcasing security-focused engineering projects, clean UI, and production-ready code.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Meshari Al-Khalifah | Portfolio",
    description: "Security-focused engineering portfolio with interactive UI, case studies, and production-grade projects.",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
