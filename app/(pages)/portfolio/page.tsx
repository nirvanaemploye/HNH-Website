"use client";
import { useTheme } from "@/app/components/context/themeContext";
import "./page.css";
import PortfolioItems from "@/app/components/sections/portfolio-items";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSearchParams } from "next/navigation";

const PortfolioPage = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const { theme } = useTheme();

  const bgDark = {
    backgroundImage: "url(/Home-page-dark.svg)",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  const bgLight = {
    backgroundImage: "url(/Home-page-light.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Handle section scrolling
    if (section) {
      const sectionMap: { [key: string]: string } = {
        "ui-ux": "uiux",
        "android-ios": "android",
        web: "web",
        games: "Games",
      };

      const targetSection = sectionMap[section];
      if (targetSection) {
        // Add a small delay to ensure buttons are rendered
        setTimeout(() => {
          // Find and click the button for the target section
          const buttons = document.querySelectorAll("button");
          buttons.forEach((button) => {
            if (
              button.textContent
                ?.toLowerCase()
                .includes(targetSection.toLowerCase())
            ) {
              button.click();
            }
          });
        }, 100); // 100ms delay
      }
    }
  }, [section]);

  return (
    <div
      className="dark:text-white dark:bg-[#170C3F] md:pb-32 overflow-hidden"
      style={theme === "dark" ? bgDark : bgLight}
      data-aos="fade-in"
    >
      <div className="pt-[250px] container max-w-[1320px] space-y-32">
        <div className="flex xl:flex-row flex-col gap-16 items-center">
          <Image
            data-aos="fade-up"
            data-aos-duration="500"
            src="/portfolio-hero.png"
            width={650}
            height={294}
            className="md:w-[650px] w-full"
            alt="about us"
          />
          <div data-aos="fade-left" data-aos-duration="1000">
            <h3 className="font-serif sm:text-8xl text-5xl borderFont">
              <span>Port</span>
              <span
                className={
                  theme === "dark" ? "text-gradient" : "text-gradient1"
                }
              >
                folio
              </span>
            </h3>
            <p
              className="sm:text-xl text-lg dark:text-[#E1E0E0] text-[#717070] mt-5"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Our portfolio showcases diverse projects across web development,
              mobile apps, game design, and UI/UX. At Hit-N-Hammer, we turn
              ideas into functional, visually stunning solutions. From startups
              to enterprises, each project reflects our commitment to quality,
              innovation, and client satisfaction, driving real results in the
              ever-evolving digital landscape.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h3 className="font-serif text-primary font-bold sm:text-5xl text-4xl border-b-2 border-dashed dark:border-white border-[#9D80FF] uppercase w-fit mx-auto mb-16">
            OUR PORTFOLIO
          </h3>
          <PortfolioItems />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
