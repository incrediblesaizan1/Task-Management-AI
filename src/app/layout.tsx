import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  weight: "400",
  variable: "--Inter-font"
})

export const metadata: Metadata = {
  title: "SK'task - AI-Powered To-Do List & Project Management App ",
  description: "Task AI helps you stay organized effortlessly. Create to-do lists, manage projects, and generate task lists with AI-powered precision. Perfect for boosting productivity - try it free today!",
  keywords:"to-do list app, task management app, AI task generator, project management tool, productivity app",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
