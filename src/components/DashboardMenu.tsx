"use client";

import React, { FC, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

type DashboardMenuProps = {};

const DashboardMenu: FC<DashboardMenuProps> = ({}) => {
  return (
    // <Menubar>
    //   <MenubarMenu>
    //     <MenubarTrigger>File</MenubarTrigger>
    //     <MenubarContent>
    //       <MenubarItem>
    //         New Tab <MenubarShortcut>⌘T</MenubarShortcut>
    //       </MenubarItem>
    //       <MenubarItem>New Window</MenubarItem>
    //       <MenubarSeparator />
    //       <MenubarItem>Share</MenubarItem>
    //       <MenubarSeparator />
    //       <MenubarItem>Print</MenubarItem>
    //     </MenubarContent>
        
    //   </MenubarMenu>
    // </Menubar>
    <div className="flex">
        <div className="border flex gap-x-2 py-2 px-2 rounded-lg bg-gray-600 ">
        <button className="pointer-events-none bg-gray-200 rounded-lg px-1">Overview</button>
        <button className="cursor-not-allowed text-slate-400">Analytics</button>
        <button className="cursor-not-allowed text-slate-400">Report</button>
        <button className="cursor-not-allowed text-slate-400">Notifications</button>
        </div>
    </div>
  );
};

export default DashboardMenu;
