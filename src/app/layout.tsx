import type {  Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import {dark} from "@clerk/themes"

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
    <ClerkProvider
    afterSignOutUrl="/auth-sync"
    signInForceRedirectUrl="/auth-sync"
    signUpForceRedirectUrl="/auth-sync"
     appearance={{
      baseTheme: dark,
      variables: {
        colorBackground: 'hsl(20 14.3% 4.1%)',
        colorText: 'hsl(60 9.1% 97.8%)',
        colorDanger: 'hsl(0 72.2% 50.6%)',
        colorTextSecondary: 'hsl(24 5.4% 63.9%)',
        colorInputBackground: 'hsl(20 14.3% 4.1%)',
        colorInputText: 'hsl(60 9.1% 97.8%)',
        borderRadius: '0.35rem',
        colorPrimary: 'hsl(20.5 90.2% 48.2%)',
        colorTextOnPrimaryBackground: 'hsl(60 9.1% 97.8%)',
      }
    }}>
    <html lang="en">
      <body
        className={`${inter.variable} antialiased dark`}
      >
        {children}
      </body>
    </html>
    </ClerkProvider>

  );
}
