import React from 'react'
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from './ui/sidebar'
import Link from 'next/link'
import { IoIosFlower } from "react-icons/io";
import { UserButton, useUser } from '@clerk/nextjs';


const AppSidebar = () => {
  const user = useUser().user
  return (
   <Sidebar>
    <SidebarHeader>
    <Link href={"/user/inbox"} className='p-2 flex items-center gap-1'>
    <IoIosFlower className='text-4xl' /> {`SK'task`}
    </Link>
    </SidebarHeader>

    <SidebarContent></SidebarContent>

    <SidebarFooter>
  <div className="flex justify-start gap-2  w-full p-2">
    <UserButton/>
    <span>{user?.fullName}</span>
  </div>
</SidebarFooter>
   </Sidebar>
  )
}

export default AppSidebar