"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { ImAndroid } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

const portfolioTyps = [
  {
    id: 1,
    key: "all",
    name: "All",
  },
  {
    id: 2,
    key: "uiux",
    name: "UI/UX Design",
  },
  {
    id: 3,
    key: "android",
    name: "Android/IOS",
  },
  {
    id: 4,
    key: "web",
    name: "Website/Webapps",
  },
  {
    id: 5,
    key: "Games",
    name: "Games",
  },
];

const portfolioItems = [
  {
    id: 1,
    name: "Petro Website",
    // icon: "website-icon.png",
    icon: <TbWorld />,
    image: "/petro-website.png",
    key: "web",
  },
  {
    id: 2,
    name: "Artix",
    // icon: "android-icon.png",
    icon: <ImAndroid />,
    image: "/artix.png",
    key: "android",
  },
  {
    id: 3,
    name: "QuizzPe",
    // icon: "web-icon.png",
    icon: <FaApple />,
    image: "/quizzpe.png",
    key: "web",
  },
  {
    id: 4,
    name: "PlayFit",
    // icon: "ios-icon.png",
    icon: <FaApple />,
    image: "/playfit.png",
    key: "ios",
  },
  {
    id: 5,
    name: "Banking App",
    // icon: "androidweb-icon.png",
    icon: <TbWorld />,
    image: "/bankingapp.png",
    key: "web",
  },
  {
    id: 6,
    name: "Hexa Club",
    // icon: "ios-icon.png",
    icon: <FaApple />,
    image: "/hexaclub.png",
    key: "ios",
  },
];

type PortfolioItemsProps = {
  flag: string; // or whatever type it actually is
};

const PortfolioItems = ({ flag }: PortfolioItemsProps) => {
  const [selectedPortfolioType, setSelectedPortfolioType] = useState("all");

  useEffect(() => {
    if (flag) {
      console.log("useEffect portfolio", flag);
      setSelectedPortfolioType(flag);
    }
  }, [flag]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {portfolioTyps.map((type, idx) => {
          return (
            <button
              onClick={() => setSelectedPortfolioType(type.key)}
              className={twMerge(
                "px-6 py-3 rounded-xl",
                type.key === selectedPortfolioType
                  ? "bg-primary dark:text-white"
                  : "bg-[#1A142C] text-white border border-primary "
              )}
              key={idx}
            >
              {type.name}
            </button>
          );
        })}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-32 mt-16">
        {selectedPortfolioType === "all"
          ? portfolioItems.map((item, idx) => {
              return (
                <div key={idx} className="relative">
                  <Image
                    src={item.image}
                    width={370}
                    height={260}
                    alt={item.name}
                    className="w-full h-[300px] object-cover rounded-xl"
                  />
                  <div className="absolute -bottom-[40px] left-0 right-0 bg-white rounded-xl flex flex-col items-center justify-center w-[225px] h-[80px] mx-auto hover:border-[#8B68FF] hover:text-[#8B68FF] text-black font-bold hover:border-2">
                    <h3 className="text-black">{item.name}</h3>
                    <h1 className="text-2xl">{item.icon}</h1>
                  </div>
                </div>
              );
            })
          : portfolioItems
              .filter((item) => item.key === selectedPortfolioType)
              .map((item, idx) => {
                return (
                  <div key={idx} className="relative">
                    <Image
                      src={item.image}
                      width={370}
                      height={260}
                      alt={item.name}
                      className="w-full h-[300px] object-cover rounded-xl"
                    />
                    <div className="absolute -bottom-[40px] left-0 right-0 bg-white rounded-xl flex flex-col items-center justify-center w-[225px] h-[80px] mx-auto">
                      <h3 className="text-black font-bold">{item.name}</h3>
                    </div>
                  </div>
                );
              })}
      </div>
    </div>
  );
};

export default PortfolioItems;
