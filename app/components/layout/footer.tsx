import Image from "next/image";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { useTheme } from "../context/themeContext";

const Footer = () => {

  const { theme } = useTheme();

  const footerDark = {
    backgroundImage: "url(/footer-dark.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const footerLight = {
    backgroundImage: "url(/footer-light.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="dark:text-[#FFFFFF] dark:bg-[#170C3F]">
      <div className="" style={theme === "dark"? footerDark : footerLight}>
        <div className=" relative py-16">
          <div className="container max-w-[1320px] h-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-20 sm:justify-items-center">
            <div className="flex flex-col items-start justify-between h-full">
              <div>
                <h5 className="uppercase font-bold text-lg md:text-left text-center">
                  ABOUT HIT-N-HAMMER
                </h5>
                <p className="mt-1 text-sm text-[#B8B6B6] md:text-left text-center">
                  Hit-N- Hammer is a leading provider of technology solutions
                  for businesses. With a focus on delivering the highest quality
                  products and services, we help businesses harness the power of
                  technology to achieve their goals. Our team of experts is
                  dedicated to driving innovation and delivering results that
                  exceed our clients&apos; expectations.
                </p>
              </div>
              <div>
                <ul className="grid md:flex items-center justify-center md:justify-start gap-5 sm:mt-0 mt-10">
                  <li className="text-xs font-bold uppercase">
                    <a href="/">Home</a>
                  </li>
                  <li className="text-xs font-bold uppercase">
                    <a href="/about-us">about us</a>
                  </li>
                  <li className="text-xs font-bold uppercase">
                    <a href="/portfolio">portfolio</a>
                  </li>
                  <li className="text-xs font-bold uppercase">
                    <a href="/services">services</a>
                  </li>
                  <li className="text-xs font-bold uppercase">
                    <a href="/contact">contact</a>
                  </li>
                </ul>
                <p className="font-light text-[#B8B6B6] text-xs mt-3 md:text-left text-center">
                  Copyright @ 2014 Hit-N Hammer Services. All Rights Reserved
                </p>
              </div>
            </div>
            <div>
              <div className=" md:text-left text-center">
                <h5 className="uppercase text-lg font-bold mb-1 ">Services</h5>
                <ul className="space-y-1 sm:list-disc">
                  <li className="text-[15px] text-[#B8B6B6] capitalize">
                    Web development
                  </li>
                  <li className="text-[15px] text-[#B8B6B6] capitalize">
                    App development
                  </li>
                  <li className="text-[15px] text-[#B8B6B6] capitalize">
                    Business solutions
                  </li>
                  <li className="text-[15px] text-[#B8B6B6] capitalize">
                    block chain technology
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:text-left text-center">
                <h5 className="uppercase text-lg font-bold mb-1">
                  quick links
                </h5>
                <ul className="space-y-1 sm:list-disc">
                  <li className="text-[15px] text-[#B8B6B6] capitalize">
                    Web development
                  </li>
                  <li className="text-[15px] text-[#B8B6B6] capitalize">
                    App development
                  </li>
                  <li className="text-[15px] text-[#B8B6B6] capitalize">
                    Business solutions
                  </li>
                  <li className="text-[15px] text-[#B8B6B6] capitalize">
                    block chain technology
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col gap-1 items-center md:items-start ">
                <a href="/">
                  <Image
                    src="/logo.svg"
                    width={184}
                    height={43}
                    alt="hit n hammer"
                    className=""
                  />
                </a>

                <p className="text-[15px] text-right">what’s the next . . .</p>
              </div>
              <ul className="mt-11 space-y-4 md:text-start text-center">
                <div className="flex space-x-1">
                  <FiPhone className="text-2xl" />
                  <li className="font-medium text-[15px]">
                    <a href="tel:+91 97222 78859">+91 97222 78859</a>
                  </li>
                </div>
                <hr className="border-t-2 border-[#6D6969] border-dashed" />
                <div className="flex space-x-1">
                  <FiPhone className="text-2xl" />
                  <li className="font-medium text-[15px]">
                    <a href="tel:+91 97222 78859">+91 97222 78859</a>
                  </li>
                </div>
                <hr className="border-t-2 border-[#6D6969] border-dashed" />
                <div className="flex space-x-1">
                  <IoIosMail className="text-2xl" />
                  <li className="font-medium text-[15px] text-primary">
                    <a href="mailto:nirvanatechlabs@gmail.com">
                      nirvanatechlabs@gmail.com
                    </a>
                  </li>
                </div>
              </ul>
              <ul className="mt-20 flex items-center md:justify-end justify-center gap-3">
                <li>
                  <Image
                    src={"/instagram.svg"}
                    width={32.8}
                    height={32.8}
                    alt="instagram"
                  />
                </li>
                <li>
                  <Image
                    src={"/facebook.svg"}
                    width={32.8}
                    height={32.8}
                    alt="facebook"
                  />
                </li>
                <li>
                  <Image
                    src={"/twitter.svg"}
                    width={32.8}
                    height={32.8}
                    alt="twitter"
                  />
                </li>
                <li>
                  <Image
                    src={"/linkedin.svg"}
                    width={32.8}
                    height={32.8}
                    alt="linkedin"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
