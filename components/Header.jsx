"use client";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { user } = useUser();
  return (
    <nav className="flex justify-between px-10">
      <ul>
        <li>Logo</li>
      </ul>
      <ul className="flex w-1/2 justify-between">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        {user ? (
          <li>
            <UserButton />
          </li>
        ) : (
          <li>
            <Link href={"/sign-in"}>Sign In</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
