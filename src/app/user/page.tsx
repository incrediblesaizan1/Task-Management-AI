"use client"
import React from 'react'
import { SidebarProvider } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar"


const page = () => {
  return (
    <SidebarProvider>
    <AppSidebar />
   <div></div>
    </SidebarProvider>  )
}

export default page