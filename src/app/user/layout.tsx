"use client"
import { Inter } from "next/font/google";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";


const inter = Inter({
  subsets: ['latin'],
  weight: "400",
  variable: "--Inter-font"
});

export default function UserLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={`${inter.variable} antialiased dark`}>
         <SidebarProvider>
       <AppSidebar />
      {children}
       </SidebarProvider>
    </div>
  );
}   