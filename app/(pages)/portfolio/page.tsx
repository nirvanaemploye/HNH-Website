"use client";
import { useTheme } from "@/app/components/context/themeContext";
import PortfolioItems from "@/app/components/sections/portfolio-items";
import Image from "next/image";
import React from "react";

const PortfolioPage = () => {
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

  return (
    <div
      className="dark:text-white dark:bg-[#170C3F] md:pb-32"
      style={theme === "dark" ? bgDark : bgLight}
    >
      <div className="pt-[250px] container max-w-[1320px] space-y-32">
        <div className="flex md:flex-row flex-col gap-16 items-center">
          <Image
            data-aos="fade-up"
            data-aos-duration="500"
            src="/portfolio-hero.png"
            width={650}
            height={294}
            className="md:w-[650px] w-full"
            alt="about us"
          />
          <div>
            <h3
              className="font-serif sm:text-8xl text-5xl borderFont"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
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
              Our company offers a comprehensive range of services tailored to
              meet the diverse needs of our clients. From innovative digital
              solutions to traditional marketing strategies, we provide a
              complete suite of services designed to help businesses thrive in
              today&apos;s competitive landscape. Our expertise spans across
              areas such as web development, mobile app development, graphic
              design, content creation, social media management, SEO
              optimization, and more.
            </p>
          </div>
        </div>
        <div>
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
