"use client";
import React, { useState } from "react";
import Topbar from "./topbar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import DarkMode from "./DarkMode";

const navitems = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About us",
    href: "/about-us",
  },
  {
    id: 3,
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    id: 4,
    name: "Services",
    href: "/services",
  },
  {
    id: 5,
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <nav className="fixed w-full top-0 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 z-20 dark:text-white dark:bg-[#170C3F]">
        <Topbar />
        <div className="flex items-center justify-between sm:px-9 px-4 py-5">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="hit n hammer"
              className="sm:w-[159px] w-[140px]"
              width={159}
              height={24}
            />
          </Link>
          <ul className="md:flex hidden items-center justify-center gap-5">
            {navitems.map((item, idx) => {
              const isactive = pathname === item.href;
              return (
                <li
                  key={idx}
                  className={twMerge(
                    "uppercase font-medium",
                    isactive && "text-primary border-b-2"
                  )}
                >
                  <Link href={item.href}>{item.name}</Link>
                </li>
              );
            })}
            {/* <li className="ml-8">
              <button
                style={{
                  boxShadow:
                    "inset 0 -3px 3px #0D0C0C40, inset 0 3px 4px #896BEC",
                }}
                className="bg-[#5533C8] h-10 px-6 text-xl font-semibold rounded-full "
              >
                Hire us
              </button>
            </li> */}
          </ul>
          <div className="flex items-center gap-4 justify-end">
            <button
              style={{
                boxShadow:
                  "inset 0 -3px 3px #0D0C0C40, inset 0 3px 4px #896BEC",
              }}
              className="bg-[#5533C8] h-10 px-6 text-xl font-semibold rounded-full sm:block hidden"
            >
              Hire us
            </button>
            <DarkMode />
            <button
              onClick={() => setMenuVisible(true)}
              className="text-sm md:hidden block"
            >
              <LuMenu className="text-3xl" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={twMerge(
          "fixed h-full w-full left-0 top-0 bg-black/50 backdrop-blur-md flex items-start justify-start py-5 px-4 duration-300 transition-transform z-20 dark:text-white",
          menuVisible ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => setMenuVisible(false)}
          className="absolute top-5 right-4"
        >
          <LuX className="text-3xl" />
        </button>
        <ul className="flex flex-col gap-4 items-start justify-center">
          {navitems.map((item, idx) => {
            const isactive = pathname === item.href;
            return (
              <li
                key={idx}
                className={twMerge(
                  "uppercase font-medium text-2xl",
                  isactive && "text-primary"
                )}
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            );
          })}
          <li className="mt-8">
            <button
              style={{
                boxShadow:
                  "inset 0 -3px 3px #0D0C0C40, inset 0 3px 4px #896BEC",
              }}
              className="bg-[#5533C8] h-10 px-6 text-xl font-semibold rounded-full "
            >
              Hire us
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
