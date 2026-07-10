import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zylo Tech — Websites & AI Solutions for Small Businesses",
  description: "Modern websites for restaurants, cafes, e-commerce and local businesses. Web Development, AI Solutions & Website Management.",
  keywords: ["website design", "restaurant website", "small business website", "AI solutions"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} font-body bg-ink text-ice antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}