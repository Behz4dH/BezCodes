import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name | AI & Software Engineer",
  description:
    "Building intelligent systems at the intersection of software engineering and artificial intelligence.",
  keywords: [
    "AI Engineer",
    "Software Engineer",
    "Full Stack Developer",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | AI & Software Engineer",
    description:
      "Building intelligent systems at the intersection of software engineering and artificial intelligence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
