import { FC } from "react";
import ProfileAvatar from "./ProfileAvatar";
import HeaderCombo from "./HeaderCombo";
import Link from "next/link";

type HeaderProps = {};

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="flex justify-center">
      <div className="w-[1536px] flex items-center justify-between py-2 px-5 border-2 rounded-lg">
      <HeaderCombo />
      <div className=" flex gap-x-5">
        <Link href="/">Overview</Link>
        <Link href="/orders">Orders</Link>
        <Link href="/products">Products</Link>
        <Link href="/portfolio">Portfolio</Link>
        {/* <Link href="/">Settings</Link> */}
      </div>
      <ProfileAvatar />
      </div>
    </header>
  );
};

export default Header;
