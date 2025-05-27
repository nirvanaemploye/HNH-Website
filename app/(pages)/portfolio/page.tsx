"use client";
import { useTheme } from "@/app/components/context/themeContext";
import "./page.css";
import PortfolioItems from "@/app/components/sections/portfolio-items";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSearchParams } from "next/navigation";
import { FaApple } from "react-icons/fa";
import { ImAndroid } from "react-icons/im";
import { TbWorld } from "react-icons/tb";
import { CgFigma } from "react-icons/cg";


const PortfolioPage = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  const { theme } = useTheme();
  const [selectedPortfolioType, setSelectedPortfolioType] = useState(
    section ? section : "all"
  );

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

  const portfolioTyps = [
    {
      id: 1,
      key: "all",
      name: "All",
    },
    {
      id: 2,
      key: "ui-ux",
      name: "uiux",
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
      key: "games",
      name: "Games",
    },
  ];

  const portfolioItems = [
    {
      id: 1,
      name: "Fresh Fruit",
      // icon: "website-icon.png",
      icon: <TbWorld />,
      image: "/Freshfruite_web2.png",
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
      name: "Coffee shop",
      // icon: "web-icon.png",
      icon: <TbWorld />,
      image: "/Coffee_web.png",
      key: "web",
    },
    {
      id: 4,
      name: "PlayFit",
      // icon: "ios-icon.png",
      icon: <FaApple />,
      image: "/playfit.png",
      key: "android",
    },
    {
      id: 5,
      name: "Headphone web",
      // icon: "androidweb-icon.png",
      icon: <TbWorld />,
      image: "/Headphone_web.png",
      key: "web",
    },
    {
      id: 6,
      name: "Hexa Club",
      // icon: "ios-icon.png",
      icon: <FaApple />,
      image: "/hexaclub.png",
      key: "android",
    },
    {
      id: 7,
      name: "Multiwin",
      icon: <FaApple />,
      image: "/Multiwin(2).png",
      key: "games",
    },
    {
      id: 8,
      name: "Chapa kata",
      icon: <FaApple />,
      image: "/Chapa_kata(1).png",
      key: "games",
    },
    {
      id: 9,
      name: "Luvr",
      // icon: "ios-icon.png",
      icon: <FaApple />,
      image: "/Luvr(1).png",
      key: "android",
    },
    {
      id: 10,
      name: "Dailysync",
      // icon: "ios-icon.png",
      icon: <ImAndroid />,
      image: "/Dailysync(1).png",
      key: "android",
    },
    {
      id: 11,
      name: "Healthyfood",
      // icon: "androidweb-icon.png",
      icon: <TbWorld />,
      image: "/Healthyfood_web.png",
      key: "web",
    },
    {
      id: 12,
      name: "Rolling wheels",
      icon: <FaApple />,
      image: "Rolling_wills.png",
      key: "games",
    },
    {
      id: 13,
      name: "DODO King",
      icon: <FaApple />,
      image: "DODO_King.png",
      key: "games",
    },
    {
      id: 14,
      name: "Photo frame",
      // icon: "androidweb-icon.png",
      icon: <ImAndroid />,
      image: "/Photo_frame.png",
      key: "android",
    },
    {
      id: 15,
      name: "Car Booking",
      // icon: "androidweb-icon.png",
      icon: <ImAndroid />,
      image: "/Car_Booking.png",
      key: "android",
    },
    {
      id: 16,
      name: "Templates",
      // icon: "androidweb-icon.png",
      icon: <CgFigma />,
      image: "/Templates(2).png",
      key: "ui-ux",
    },
    {
      id: 17,
      name: "Logo",
      // icon: "androidweb-icon.png",
      icon: <CgFigma />,
      image: "/Icon_Design.png",
      key: "ui-ux",
    },
    {
      id: 18,
      name: "Festival Post",
      // icon: "androidweb-icon.png",
      icon: <CgFigma />,
      image: "/Festival_post.png",
      key: "ui-ux",
    },
    {
      id: 19,
      name: "visiting card",
      // icon: "androidweb-icon.png",
      icon: <CgFigma />,
      image: "/Visiting_card1.png",
      key: "ui-ux",
    },
  ];

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
            console.log(button.textContent?.toLowerCase(), "<-- btn ");
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
            <h3 className="font-serif sm:text-8xl text-4xl borderFont">
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
          <PortfolioItems
            selectedType={selectedPortfolioType}
            portfolioItems={portfolioItems}
            portfolioTyps={portfolioTyps}
            setSelectedPortfolioType={setSelectedPortfolioType}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
