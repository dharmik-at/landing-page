import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ingestiq.ai"),
  title: {
    default: "IngestIQ | Unified RAG Infrastructure & Vectorization",
    template: "%s | IngestIQ",
  },
  description:
    "IngestIQ provides a unified RAG infrastructure to connect, process, and vectorize unstructured data in hours. Build production-ready AI applications faster with our managed pipeline.",
  keywords: [
    "RAG",
    "Vectorization",
    "Unstructured Data",
    "AI Infrastructure",
    "LLM",
    "Embeddings",
    "Vector Database",
    "Data Pipeline",
  ],
  authors: [{ name: "IngestIQ Team" }],
  creator: "IngestIQ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ingestiq.ai",
    title: "IngestIQ | Unified RAG Infrastructure & Vectorization",
    description:
      "Connect, process, and vectorize unstructured data in hours. The fastest way to build production-ready RAG applications.",
    siteName: "IngestIQ",
    images: [
      {
        url: "/ingestiqlogo2.png",
        width: 1200,
        height: 630,
        alt: "IngestIQ Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IngestIQ | Unified RAG Infrastructure",
    description:
      "Connect, process, and vectorize unstructured data in hours. Build production-ready RAG applications faster.",
    images: ["/ingestiqlogo2.png"],
    creator: "@ingestiq",
  },
  icons: {
    icon: "/ingestiqlogo2.png",
    shortcut: "/ingestiqlogo2.png",
    apple: "/ingestiqlogo2.png",
  },
  alternates: {
    canonical: "https://ingestiq.ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { GridBackground } from "@/components/ui/grid-background";
import { AppWrapper } from "@/components/layout/client-layout";
import { ThemeProvider } from "@/components/providers/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppWrapper>
            <GridBackground />
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
