"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface CustomInputProps {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}

const LocalSearchBar = ({
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CustomInputProps) => {
  return (
    <div className="relative w-full ">
      <div
        className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ${otherClasses}`}
      >
        {iconPosition === "left" && (
          <Image
            src={imgSrc}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}

        <Input
          type="text"
          placeholder={placeholder}
          value=""
          onChange={() => {}}
          className="w-full bg-transparent placeholder focus:ring-0 focus:outline-none border-none p-3 shadow-none outline-none no-focus"
        />

        {iconPosition === "right" && (
          <Image
            src={imgSrc}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default LocalSearchBar;
