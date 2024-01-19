'use client'

import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type ProfileAvatarProps = {};

const ProfileAvatar: FC<ProfileAvatarProps> = ({}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>MCI</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col">
      
          <button onClick={() => console.log("signout")} className="cursor-not-allowed">Log out</button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileAvatar;
