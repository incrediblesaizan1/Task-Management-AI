import React from 'react'
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from './ui/sidebar'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { IoIosFlower } from "react-icons/io";
import { UserButton } from '@clerk/nextjs';


const AppSidebar = () => {
    const router = useRouter()
  return (
   <Sidebar>
    <SidebarHeader>
    <Link href={"/user/inbox"} className='p-2 flex items-center gap-1'>
    <IoIosFlower className='text-4xl' /> SK'task
    </Link>
    </SidebarHeader>

    <SidebarContent></SidebarContent>

    <SidebarFooter>
      <UserButton showName />
    </SidebarFooter>
   </Sidebar>
  )
}

export default AppSidebar