import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Arrow } from "./ui/icons/customicons";

const UserDropDown = () => {
  return (
    <div className='flex items-center gap-2 sm:gap-4'>
      <div className='mx-2 sm:mx-5'>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className='flex items-center gap-x-1'>
              <div className='flex flex-col text-left'>
                <span className='text-sm sm:text-base'>John Smith</span>
                <span className='text-xs sm:text-sm'>Admin</span>
              </div>
              <div>
                <Arrow />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserDropDown;
