"use client";
import React, { useEffect } from "react";
import "./page.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "@/app/components/context/themeContext";
import SimpleSlider from "@/app/components/slider/video";
import Photos from "@/app/components/slider/photos";


const StoriesPage = () => {

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
      <div className="pt-[180px] container max-w-[1320px] space-y-11">
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
          <h1 className="font-normal text-xl  text-center dark:text-[#E1E0E0] text-[#717070]">
            Our company offers a comprehensive range of services tailored to
            meet the diverse needs of our clients. From innovative digital
            solutions to traditional marketing strategies, we provide a{" "}
          </h1>
          <SimpleSlider />
        </div>

        <div>
          <div className="w-full max-w-3xl mx-auto my-5">
            <div className="text-center flex items-center justify-center">
              <h1 className="border-b-2 border-dashed dark:border-white border-[#9D80FF] font-bold text-5xl leading-[100%] tracking-[3%] text-[#8B68FF] font-serif">
                Heading
              </h1>
            </div>
            <p className="text-xl font-normal  text-center my-5 dark:text-[#E1E0E0] text-[#717070]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and{" "}
            </p>
          </div>
          <Photos />
        </div>
      </div>
    </div>
  );
};

export default StoriesPage;
