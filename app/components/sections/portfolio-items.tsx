"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { ImAndroid } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

interface PortfolioItem {
  id: number;
  name: string;
  image: string;
  key: string;
  icon: any;
}

const PortfolioItems = ({
  portfolioTyps,
  portfolioItems,
  selectedType = "all",
  setSelectedPortfolioType,
}: {
  selectedType: string;
  portfolioTyps: any;
  portfolioItems: PortfolioItem[];
  setSelectedPortfolioType:any;
}) => {
  console.log(selectedType, "<-- type");
  //const [selectedPortfolioType, setSelectedPortfolioType] = useState("all");

  const handlePortfolioTypeChange = (type: string) => {
    setSelectedPortfolioType(type);
    // Scroll to the portfolio section with a small delay to ensure content is rendered
    setTimeout(() => {
      const portfolioSection = document.querySelector(".portfolio-section");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="portfolio-section" id="portfolio-section">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {portfolioTyps.map((type: any, idx: number) => {
          return (
            <button
              onClick={() => handlePortfolioTypeChange(type.key)}
              className={twMerge(
                "px-6 py-3 rounded-xl transition-all duration-300",
                type.key === selectedType
                  ? "bg-primary dark:text-white"
                  : "bg-[#1A142C] text-white border border-primary hover:bg-primary/10"
              )}
              key={idx}
            >
              {type.name}
            </button>
          );
        })}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-32 mt-16">
        {selectedType === "all"
          ? portfolioItems.map((item: any, idx: number) => {
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
              .filter((item: any) => item.key === selectedType)
              .map((item: any, idx: number) => {
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
