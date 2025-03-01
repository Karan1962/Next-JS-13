"use client";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants";
import React from "react";

const HomeFilters = () => {
  const active = "newest";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => {
        return (
          <Button
            key={item.value}
            onClick={() => {}}
            className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none transition-colors ${
              active === item.value
                ? "bg-primary-100 text-primary-500 hover:bg-primary-300 dark:bg-dark-400"
                : "bg-light-800 text-light-500 dark:bg-dark-300 hover:bg-light-700 dark:hover:bg-dark-400"
            }`}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilters;
