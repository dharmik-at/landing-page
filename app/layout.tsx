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
  title: "IngestIQ",
  description: "Unified RAG infrastructure to connect, process, and vectorize unstructured data in hours.",
  icons: {
    icon: "/ingestiqlogo2.png",
  },
};

import { GridBackground } from "@/components/ui/grid-background";
import { AppWrapper } from "@/components/layout/client-layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased text-foreground`}
      >
        <AppWrapper>
          <GridBackground />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </AppWrapper>
      </body>
    </html>
  );
}
