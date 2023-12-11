import { FC } from "react";
import ProfileAvatar from "./ProfileAvatar";
import HeaderCombo from "./HeaderCombo";
import Link from "next/link";

type HeaderProps = {};

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className="flex border items-center justify-between py-2 px-5">
      <HeaderCombo />
      <div className="flex gap-x-5">
        <Link href="/">Overview</Link>
        <Link href="/">Orders</Link>
        <Link href="/">Customers</Link>
        <Link href="/">Products</Link>
        <Link href="/">Portfolio</Link>
        <Link href="/">Settings</Link>
      </div>
      <ProfileAvatar />
    </header>
  );
};

export default Header;
