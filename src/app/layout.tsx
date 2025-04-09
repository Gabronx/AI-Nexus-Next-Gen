import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Nexus | Next-Gen AI Agency",
  description: "Transforming businesses through advanced AI solutions and services",
  keywords: "ai agency, artificial intelligence, machine learning, ai services, ai solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
