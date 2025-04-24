"use client";
import React, { useEffect } from "react";
import "./page.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "@/app/components/context/themeContext";

const Page = () => {

  const { theme } = useTheme();

  const bgDark = {
    // backgroundImage: "url(/Home-page-dark.svg)",
    backgroundImage: "url(/Background_Dark_about.svg)",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  const bgLight = {
    // backgroundImage: "url(/Home-page-light.svg)",
    backgroundImage: "url(/Background_Light_about.svg)",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div
      className="dark:text-white dark:bg-[#170C3F] md:pb-32 overflow-hidden"
      style={theme === "dark" ? bgDark : bgLight}
      data-aos="fade-in"
    >
      <div className="pt-[220px] container max-w-[1320px] space-y-32">
        <div className="mx-auto text-center">
          <h3
            className="font-serif text-8xl borderFont"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <span
              className={theme === "dark" ? "text-gradient" : "text-gradient1"}
            >
              Gall
            </span>
            <span>ery</span>
          </h3>
        </div>

        <div className="w-full max-w-3xl mx-auto my-5">
          <video controls className="w-full rounded-lg shadow-lg">
            <source src="/public/videos/nature.mp4" type="video/mp4" />
            Water Park
          </video>
        </div>
      </div>
    </div>
  );
};

export default Page;
