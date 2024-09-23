import React from "react";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <nav className="flex justify-between px-10">
      <ul>
        <li>Logo</li>
      </ul>
      <ul className="flex w-1/2 justify-between">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </li>
        <li>
          <UserButton />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
