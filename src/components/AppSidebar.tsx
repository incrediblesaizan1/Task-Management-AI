"use client";
import React from "react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarGroupLabel,
  SidebarGroupAction,
} from "./ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import Link from "next/link";
import { IoIosFlower } from "react-icons/io";
import { UserButton, useUser } from "@clerk/nextjs";

import { ChevronRight, CirclePlus, Plus } from "lucide-react";
import { SIDEBAR_LINKS } from "@/constant";
import { Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import TaskForm from "./TaskForm";

const AppSidebar = () => {
  const user = useUser().user;
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href={"/user/inbox"} className="p-2 flex items-center gap-1">
          <IoIosFlower className="text-4xl" /> {`SK'task`}
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
              <TaskForm>
                <SidebarMenuButton className="text-[#52ced6] cursor-pointer">
                  <CirclePlus /> Add task
                </SidebarMenuButton>
              </TaskForm>
              </SidebarMenuItem>

              {SIDEBAR_LINKS.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <item.icon /> <span>{item.label}</span>{" "}
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>0</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild className="text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer">
              <CollapsibleTrigger >
                <ChevronRight className="me-2 transition-transform group-data-[state=open]/collapsible:rotate-90" />{" "}
                Projects
              </CollapsibleTrigger>
            </SidebarGroupLabel>

            <Tooltip>
              <TooltipTrigger asChild>
            <SidebarGroupAction aria-label="Add project">
              <Plus className="cursor-pointer" />
            </SidebarGroupAction>
              </TooltipTrigger>
              <TooltipContent side="right">Add project</TooltipContent>
            </Tooltip>


            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <p className="text-muted-foreground text-sm p-2">
                      Click + to add some projects
                    </p>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>

      <SidebarFooter>
        <div className=" flex justify-start rounded-md  items-center w-full p-2 ">
          <div className="flex items-center p-2 rounded-full cursor-pointer hover:bg-accent">
            <UserButton />
          </div>
          <span className="text-md">{user?.fullName}</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
