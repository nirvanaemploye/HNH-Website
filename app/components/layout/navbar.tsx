"use client";
import React, { useState } from "react";
import Topbar from "./topbar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import DarkMode from "./DarkMode";
import LightHit from "../../../public/Hit_Hammer 2.svg";
import DarkHit from "../../../public/logo.svg";
import { useTheme } from "../context/themeContext";
import { useRouter } from "next/navigation";

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
    name: "Stories",
    href: "/stories",
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuVisible, setMenuVisible] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  return (
    <>
      <nav className="fixed w-full top-0 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 z-20 dark:text-white dark:bg-[##7348FF]">
        <Topbar />
        <div className="flex items-center justify-between sm:px-9 px-4 py-5">
          {/* Logo  */}
          <Link href="/">
            <Image
              src={theme === "dark" ? DarkHit : LightHit}
              alt="hit n hammer"
              className="sm:w-[159px] w-[140px]"
              width={159}
              height={24}
            />
          </Link>
          {/* Navbar Links  */}
          <ul className="lg:flex hidden items-center justify-center gap-2 md:gap-5">
            {navitems.map((item, idx) => {
              const isactive = pathname === item.href;
              return (
                <li
                  key={idx}
                  className={twMerge(
                    "uppercase font-medium",
                    isactive ? "text-primary border-b-2 border-primary" : "",
                    "hover:text-primary"
                  )}
                >
                  <Link
                    href={item.href}
                    className="transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* hire us button  */}
          <div className="flex xl:-ml-50 2xl:-ml-56 justify-between">
            <button
              onClick={() => router.push("/hire-us")}
              style={{
                boxShadow:
                  "inset 0 -3px 3px #0D0C0C40, inset 0 3px 4px #896BEC",
              }}
              className="bg-[#5533C8] h-10 px-6 text-xl font-semibold rounded-full lg:block hidden text-white items-center justify-center text-center "
            >
              Hire us
            </button>
            {/* theme mode button */}
            <button
              onClick={() => setMenuVisible(true)}
              className="text-sm lg:hidden block order-2"
            >
              <LuMenu className="text-3xl" />
            </button>
          </div>
          <div className="lg:block hidden">
            <DarkMode />
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
        <ul className="flex flex-col gap-4 items-start justify-center w-full">
          {navitems.map((item, idx) => {
            const isactive = pathname === item.href;
            return (
              <li
                key={idx}
                className={twMerge(
                  "uppercase font-medium text-2xl w-full",
                  isactive && "text-primary border-b-2 border-primary"
                )}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuVisible(false)}
                  className="block w-full py-2"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
          <li className="mt-8 w-full">
            <Link
              href="/hire-us"
              onClick={() => setMenuVisible(false)}
              style={{
                boxShadow:
                  "inset 0 -3px 3px #0D0C0C40, inset 0 3px 4px #896BEC",
              }}
              className="bg-[#5533C8] h-10 px-6 text-xl font-semibold rounded-full text-white flex items-center justify-center text-center w-full"
            >
              Hire us
            </Link>
            <div className="mt-9">
              <DarkMode />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
