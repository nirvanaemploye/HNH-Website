"use client";

import Image from "next/image";
import "../app/Page.css";
import HeroSection from "./components/sections/hero";
// import polygonstats from "@/public/Group_87.svg";
import React, { useState } from "react";
import { useTheme } from "./components/context/themeContext";

const members = [
  {
    id: 1,
    name: "John Smith",
    company: "Awesome IT, Company",
    testimonial:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    img: "/team-member-7.png",
  },
  {
    id: 2,
    name: "Alex ",
    company: "Awesome IT, Company",
    testimonial:
      "It looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    img: "/team-member-5.png",
  },
  {
    id: 3,
    name: "Vipin",
    company: "Tech Mahindra IT, Company",
    testimonial:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout distracted by the readable content of a page when looking at its layout. ",
    img: "/team-member-6.png",
  },
  {
    id: 4,
    name: "Ellyse Perry ",
    company: "Sonata Software IT, Company",
    testimonial:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    img: "/team-member-8.png",
  },
  {
    id: 5,
    name: "Peter",
    company: "Wipro Limited IT, Company",
    testimonial:
      "It is a long established fact that a reader will be distract The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    img: "/team-member-2.png",
  },
  {
    id: 6,
    name: "Allena Smith",
    company: "HCL Technologies IT, Company",
    testimonial:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout distracted by the readable content of a page when looking at its layout. ",
    img: "/team-member-3.png",
  },
  {
    id: 7,
    name: "Sundar",
    company: "Infosys IT, Company",
    testimonial:
      "that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    img: "/team-member-4.png",
  },
];

// const services = [
//   {
//     id: 1,
//     icon: PiDeviceMobileCameraFill,
//     title: "App Development",
//     description:
//       "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
//   },
//   {
//     id: 2,
//     icon: PiDesktopFill,
//     title: "WEB Development",
//     description:
//       "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
//   },
//   {
//     id: 3,
//     icon: PiDesktopFill,
//     title: "UI/UX DESIGN",
//     description:
//       "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
//   },
//   {
//     id: 4,
//     icon: HiCloudArrowDown,
//     title: "CLOUD SERVICES",
//     description:
//       "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
//   },
//   {
//     id: 5,
//     icon: HiCloudArrowDown,
//     title: "BUSINESS SOLUTION",
//     description:
//       "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
//   },
//   {
//     id: 6,
//     icon: HiCloudArrowDown,
//     title: "CLOUD E-MAIL MIGRATION",
//     description:
//       "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.",
//   },
// ];

const developers = [
  {
    id: 1,
    image: "ui-ux-icon.svg",
    image1: "ui-ux-dark-icon.svg",
    name: "ui/ux designer",
    experiance: "10 year",
    rating: "4.8",
    project: "12",
    rate: "$12",
    skills: [
      {
        id: 1,
        name: "photoshop",
        src: "ps-icon.svg",
      },
      {
        id: 2,
        name: "illustrator",
        src: "ai-icon.svg",
      },
      {
        id: 3,
        name: "figma",
        src: "figma-icon.svg",
      },
      {
        id: 4,
        name: "after effects",
        src: "ae-icon.svg",
      },
    ],
  },
  {
    id: 2,
    image: "php-icon.svg",
    image1: "php-dark.svg",
    name: "php developer",
    experiance: "8 year",
    rating: "4",
    project: "8",
    rate: "$15",
    skills: [
      {
        id: 1,
        name: "html",
        src: "html-icon.svg",
      },
      {
        id: 2,
        name: "css",
        src: "css-icon.svg",
      },
      {
        id: 3,
        name: "js",
        src: "js-icon.svg",
      },
      {
        id: 4,
        name: "php",
        src: "php-icon.svg",
      },
    ],
  },
  {
    id: 3,
    image: "android-icon.svg",
    image1: "Android-dark.svg",
    name: "android developer",
    experiance: "10 year",
    rating: "5",
    project: "10",
    rate: "$22",
    skills: [
      {
        id: 1,
        name: "html",
        src: "html-icon.svg",
      },
      {
        id: 2,
        name: "css",
        src: "css-icon.svg",
      },
      {
        id: 3,
        name: "js",
        src: "js-icon.svg",
      },
      {
        id: 4,
        name: "php",
        src: "php-icon.svg",
      },
    ],
  },
  {
    id: 4,
    image: "react-icon.svg",
    image1: "react-dark.svg",
    name: "REACT.JS DEVELOPERS",
    experiance: "10 year",
    rating: "5",
    project: "10",
    rate: "$12",
    skills: [
      {
        id: 1,
        name: "html",
        src: "html-icon.svg",
      },
      {
        id: 2,
        name: "css",
        src: "css-icon.svg",
      },
      {
        id: 3,
        name: "js",
        src: "js-icon.svg",
      },
      {
        id: 4,
        name: "php",
        src: "php-icon.svg",
      },
    ],
  },
  {
    id: 5,
    image: "ios-dark.svg",
    image1: "ios-light.svg",
    name: "ios DEVELOPERS",
    experiance: "4 year",
    rating: "4.3",
    project: "5",
    rate: "$8",
    skills: [
      {
        id: 1,
        name: "swift",
        src: "swift.svg",
      },
      {
        id: 2,
        name: "JS",
        src: "JS.svg",
      },
      {
        id: 3,
        name: "dash",
        src: "dash.svg",
      },
      {
        id: 4,
        name: "react",
        src: "REACT.svg",
      },
    ],
  },
  {
    id: 6,
    image: "mern-dark.svg",
    image1: "mern-light.svg",
    name: "MERNSTACK DEVELOPERS",
    experiance: "8 year",
    rating: "4",
    project: "8",
    rate: "$15",
    skills: [
      {
        id: 1,
        name: "JS",
        src: "JS.svg",
      },
      {
        id: 2,
        name: "express",
        src: "express.svg",
      },
      {
        id: 3,
        name: "react",
        src: "REACT.svg",
      },
      {
        id: 4,
        name: "android",
        src: "android-logo.svg",
      },
    ],
  },
  {
    id: 7,
    image: "node-dark.svg",
    image1: "node-light.svg",
    name: "NODE.JS DEVELOPERS",
    experiance: "10 year",
    rating: "5",
    project: "10",
    rate: "$22",
    skills: [
      {
        id: 1,
        name: "html",
        src: "html-icon.svg",
      },
      {
        id: 2,
        name: "css",
        src: "css-icon.svg",
      },
      {
        id: 3,
        name: "js",
        src: "js-icon.svg",
      },
      {
        id: 4,
        name: "php",
        src: "php-icon.svg",
      },
    ],
  },
  {
    id: 8,
    image: "unity-dark.svg",
    image1: "unity-light.svg",
    name: "UNITY GAME DEVELOPERS",
    experiance: "10 year",
    rating: "5",
    project: "10",
    rate: "$22",
    skills: [
      {
        id: 1,
        name: "unity",
        src: "unity.svg",
      },
      {
        id: 2,
        name: "photoshop",
        src: "ps-icon.svg",
      },
      {
        id: 3,
        name: "vs-code",
        src: "vs-code.svg",
      },
      {
        id: 4,
        name: "blender",
        src: "blender.svg",
      },
    ],
  },
];

const methodologies = [
  {
    id: 1,
    title: "simplicity",
    description:
      "We believe that the best solution is usually the most straightforward. Effectiveness and efficiency are not compromised by simplicity.",
    image: "/simplicity.png",
  },
  {
    id: 2,
    title: "Critical thinking",
    description:
      "We believe that the best solution is usually the most straightforward. Effectiveness and efficiency are not compromised by simplicity.",
    image: "/criticalthinking.png",
  },
  {
    id: 3,
    title: "EFFECTIVENESS & EFFICIENCY",
    description:
      "We believe that the best solution is usually the most straightforward. Effectiveness and efficiency are not compromised by simplicity.",
    image: "/effectiveness.png",
  },
  {
    id: 4,
    title: "security",
    description:
      "We believe that the best solution is usually the most straightforward. Effectiveness and efficiency are not compromised by simplicity.",
    image: "/security.png",
  },
];

export default function Home() {
  const [hoveredMember, setHoveredMember] = useState(null);

  // const handleMouseEnter = (id) => {
  //   setHoveredMember(id);
  // };

  const handleMouseLeave = () => {
    setHoveredMember(hoveredMember);
  };

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
      className="dark:text-white dark:bg-[#170C3F]  md:pb-32"
      style={theme === "dark" ? bgDark : bgLight}
    >
      <div className="container max-w-[1320px] space-y-32">
        <HeroSection />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <Image
            src="/who-we-are.png"
            width={555}
            height={380}
            alt="who we are"
            className="md:w-[555px] w-full"
          />
          <div className="flex flex-col gap-2">
            <span className="uppercase text-primary text-xl border-b-2 border-dashed dark:border-[#FFFFFF] border-[#9D80FF] pb-1 w-fit md:text-start text-center">
              who we are
            </span>
            <h3 className="font-serif font-bold text-[40px]">
              HIT-N-HAMMER COMPANY
            </h3>
            <p className="dark:text-[#B7B0B0] text-[#717070] leading-9">
              Hit-N-Hammer is a leading provider of technology solutions for
              businesses. With a focus on delivering the highest quality
              products and services, we help businesses harness the power of
              technology to achieve their goals. Our team of experts is
              dedicated to driving innovation and delivering results that exceed
              our clients&apos; expectations.
            </p>
            <button className="capitalize bg-primary hover:outline w-fit px-8 py-3 rounded-xl mt-8 font-semibold">
              Read more
            </button>
          </div>
        </div>

        <section id="servicesSection">
          <div className="servicesContainer">
            <div className="servicesHeading">
              <span className="uppercase text-primary text-xl border-b-2 border-dashed dark:border-[#FFFFFF] border-[#9D80FF] pb-1 w-fit">
                OUR SERVICES
              </span>
              <h1 className="uppercase font-serif dark:text-[#ffffff] text-[#171616] font-bold text-[40px]">
                HIT-N-HAMMER SERVICES
              </h1>
              <p className="mt-5 leading-9 dark:text-[#B7B0B0] text-[#717070] text-lg">
                Technologies Design And Develop Mobile Apps, Web Apps,
                Blockchain Solutions.
              </p>
            </div>

            <ul className="honeycomb grid gap-y-12 md:gap-y-3">
              <li className="honeycomb-cell">
                {/* <img className="honeycomb-cell_img" src="img/work-1.jpg"> */}
                <div className="honeycomb-cell_title">
                  <svg
                    className="icon"
                    style={{ top: "-46px", left: "110px" }}
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.8 2.85233C3.91788 2.85233 3.2 2.13346 3.2 1.25012C3.2 0.95477 2.96163 0.716064 2.66669 0.716064C2.37175 0.716064 2.13331 0.95477 2.13331 1.25012C2.13331 2.13346 1.41544 2.85233 0.533312 2.85233C0.238375 2.85233 0 3.09104 0 3.38639C0 3.68173 0.238438 3.9205 0.533312 3.9205C1.41544 3.9205 2.13331 4.63937 2.13331 5.52272C2.13331 5.81807 2.37169 6.05677 2.66663 6.05677C2.96156 6.05677 3.19994 5.81807 3.19994 5.52272C3.19994 4.63937 3.91781 3.9205 4.79994 3.9205C5.09488 3.9205 5.33325 3.6818 5.33325 3.38645C5.33325 3.0911 5.09494 2.85233 4.8 2.85233ZM2.66669 3.92213C2.51469 3.71916 2.33444 3.53866 2.13175 3.38645C2.33444 3.23424 2.51469 3.05374 2.66669 2.85077C2.81869 3.05374 2.99894 3.23424 3.20162 3.38645C2.99894 3.53866 2.81869 3.71916 2.66669 3.92213Z" />
                    <path d="M29.8659 9.26122H29.3325V8.72717C29.3325 8.43182 29.0942 8.19312 28.7992 8.19312C28.5043 8.19312 28.2659 8.43182 28.2659 8.72717V9.26122H27.7325C27.4376 9.26122 27.1992 9.49992 27.1992 9.79527C27.1992 10.0906 27.4376 10.3293 27.7325 10.3293H28.2658V10.8634C28.2658 11.1587 28.5042 11.3974 28.7992 11.3974C29.0941 11.3974 29.3325 11.1587 29.3325 10.8634V10.3293H29.8658C30.1607 10.3293 30.3991 10.0906 30.3991 9.79527C30.3991 9.49992 30.1608 9.26122 29.8659 9.26122Z" />
                    <path d="M3.73253 24.7485C4.02707 24.7485 4.26584 24.5096 4.26584 24.2149C4.26584 23.9202 4.02707 23.6813 3.73253 23.6813C3.43799 23.6813 3.19922 23.9202 3.19922 24.2149C3.19922 24.5096 3.43799 24.7485 3.73253 24.7485Z" />
                    <path d="M1.06652 15.1351C1.36106 15.1351 1.59983 14.8962 1.59983 14.6015C1.59983 14.3068 1.36106 14.0679 1.06652 14.0679C0.771975 14.0679 0.533203 14.3068 0.533203 14.6015C0.533203 14.8962 0.771975 15.1351 1.06652 15.1351Z" />
                    <path d="M27.2013 20.4758C27.4958 20.4758 27.7346 20.2369 27.7346 19.9422C27.7346 19.6475 27.4958 19.4086 27.2013 19.4086C26.9067 19.4086 26.668 19.6475 26.668 19.9422C26.668 20.2369 26.9067 20.4758 27.2013 20.4758Z" />
                    <path d="M30.9337 31.6914C31.2282 31.6914 31.467 31.4525 31.467 31.1578C31.467 30.8631 31.2282 30.6241 30.9337 30.6241C30.6392 30.6241 30.4004 30.8631 30.4004 31.1578C30.4004 31.4525 30.6392 31.6914 30.9337 31.6914Z" />
                    <path d="M17.067 30.09C17.067 29.501 16.5886 29.0219 16.0003 29.0219C15.412 29.0219 14.9336 29.5009 14.9336 30.09C14.9336 30.6791 15.412 31.1582 16.0003 31.1582C16.5885 31.1582 17.067 30.6791 17.067 30.09Z" />
                    <path d="M22.9544 0.716064H9.04616C7.88134 0.716064 6.93359 1.66513 6.93359 2.83156V3.9205H25.0669V2.83149C25.067 1.66513 24.1192 0.716064 22.9544 0.716064ZM13.867 2.85233H13.3336C13.0392 2.85233 12.8003 2.61307 12.8003 2.31828C12.8003 2.0235 13.0392 1.78423 13.3336 1.78423H13.8669C14.1613 1.78423 14.4002 2.0235 14.4002 2.31828C14.4003 2.61307 14.1613 2.85233 13.867 2.85233ZM18.1336 2.85233H15.4669C15.1725 2.85233 14.9336 2.61307 14.9336 2.31828C14.9336 2.0235 15.1725 1.78423 15.4669 1.78423H18.1336C18.428 1.78423 18.6669 2.0235 18.6669 2.31828C18.667 2.61307 18.428 2.85233 18.1336 2.85233Z" />
                    <path d="M18.1336 30.09C18.1336 31.2682 17.1768 32.2263 16.0003 32.2263C14.8238 32.2263 13.867 31.2681 13.867 30.09C13.867 29.4491 14.156 28.8798 14.604 28.4878H6.93359V30.6449C6.93359 31.8113 7.88134 32.7603 9.04616 32.7603H22.9544C24.1192 32.7603 25.0669 31.8113 25.0669 30.6449V28.4878H17.3965C17.8445 28.8798 18.1336 29.4491 18.1336 30.09Z" />
                    <path d="M16.5335 12.4656H15.4668V13.5329H16.5335V12.4656Z" />
                    <path d="M12.2659 12.4656H11.1992V13.5329H12.2659V12.4656Z" />
                    <path d="M12.2659 8.19312H11.1992V9.26043H12.2659V8.19312Z" />
                    <path d="M12.2659 23.1471H11.1992V24.2144H12.2659V23.1471Z" />
                    <path d="M16.5335 8.19312H15.4668V9.26043H16.5335V8.19312Z" />
                    <path d="M20.7991 8.19312H19.7324V9.26043H20.7991V8.19312Z" />
                    <path d="M6.9337 5.52271C6.63933 5.52271 6.40039 5.76197 6.40039 6.05676V6.59081C6.40039 6.88559 6.63933 7.12486 6.9337 7.12486V7.65891C6.63933 7.65891 6.40039 7.89818 6.40039 8.19297V8.72702C6.40039 9.0218 6.63933 9.26107 6.9337 9.26107V9.79512C6.63933 9.79512 6.40039 10.0344 6.40039 10.3292V10.8632C6.40039 11.158 6.63933 11.3973 6.9337 11.3973V27.4195H25.067V4.9884H6.9337V5.52271ZM17.6004 24.7493C17.6004 25.0447 17.362 25.2834 17.0671 25.2834H14.9337C14.6388 25.2834 14.4004 25.0447 14.4004 24.7493V22.6131C14.4004 22.3177 14.6388 22.079 14.9337 22.079H17.067C17.362 22.079 17.6003 22.3177 17.6003 22.6131V24.7493H17.6004ZM21.8671 24.7493C21.8671 25.0447 21.6287 25.2834 21.3338 25.2834H19.2005C18.9055 25.2834 18.6671 25.0447 18.6671 24.7493V22.6131C18.6671 22.3177 18.9055 22.079 19.2005 22.079H21.3337C21.6286 22.079 21.867 22.3177 21.867 22.6131V24.7493H21.8671ZM18.6671 7.65898C18.6671 7.36363 18.9055 7.12492 19.2004 7.12492H21.3337C21.6286 7.12492 21.867 7.36363 21.867 7.65898V9.79525C21.867 10.0906 21.6286 10.3293 21.3337 10.3293H19.2004C18.9055 10.3293 18.6671 10.0906 18.6671 9.79525V7.65898ZM14.4004 7.65898C14.4004 7.36363 14.6388 7.12492 14.9337 7.12492H17.067C17.362 7.12492 17.6003 7.36363 17.6003 7.65898V9.79525C17.6003 10.0906 17.362 10.3293 17.067 10.3293H14.9337C14.6388 10.3293 14.4004 10.0906 14.4004 9.79525V7.65898ZM14.4004 11.9316C14.4004 11.6362 14.6388 11.3975 14.9337 11.3975H17.067C17.362 11.3975 17.6003 11.6362 17.6003 11.9316V14.0679C17.6003 14.3632 17.362 14.6019 17.067 14.6019H14.9337C14.6388 14.6019 14.4004 14.3632 14.4004 14.0679V11.9316ZM10.1337 7.65898C10.1337 7.36363 10.3721 7.12492 10.667 7.12492H12.8003C13.0953 7.12492 13.3336 7.36363 13.3336 7.65898V9.79525C13.3336 10.0906 13.0953 10.3293 12.8003 10.3293H10.667C10.3721 10.3293 10.1337 10.0906 10.1337 9.79525V7.65898ZM10.1337 11.9316C10.1337 11.6362 10.3721 11.3975 10.667 11.3975H12.8003C13.0953 11.3975 13.3336 11.6362 13.3336 11.9316V14.0679C13.3336 14.3632 13.0953 14.6019 12.8003 14.6019H10.667C10.3721 14.6019 10.1337 14.3632 10.1337 14.0679V11.9316ZM10.6671 16.2042H21.8671C22.162 16.2042 22.4004 16.4429 22.4004 16.7382C22.4004 17.0336 22.162 17.2723 21.8671 17.2723H10.6671C10.3721 17.2723 10.1338 17.0336 10.1338 16.7382C10.1338 16.4429 10.3721 16.2042 10.6671 16.2042ZM10.6671 19.4086H21.8671C22.162 19.4086 22.4004 19.6473 22.4004 19.9427C22.4004 20.238 22.162 20.4767 21.8671 20.4767H10.6671C10.3721 20.4767 10.1338 20.238 10.1338 19.9427C10.1338 19.6473 10.3721 19.4086 10.6671 19.4086ZM10.1337 22.6131C10.1337 22.3177 10.3721 22.079 10.667 22.079H12.8003C13.0953 22.079 13.3336 22.3177 13.3336 22.6131V24.7493C13.3336 25.0447 13.0953 25.2834 12.8003 25.2834H10.667C10.3721 25.2834 10.1337 25.0447 10.1337 24.7493V22.6131Z" />
                    <path d="M16.5335 23.1471H15.4668V24.2144H16.5335V23.1471Z" />
                    <path d="M20.7991 23.1471H19.7324V24.2144H20.7991V23.1471Z" />
                  </svg>

                  <h2 className="dark:text-[#FFFFFF] text-[#171616]">
                    App <br /> Development
                  </h2>
                  <p className="dark:text-[#B7B0B0] text-[#717070]">
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the.
                  </p>
                </div>
              </li>
              <li className={`honeycomb-cell`}>
                {/* <img className="honeycomb-cell_img" src="img/work-2.jpg"> */}
                <div className="honeycomb-cell_title">
                  <svg
                    className="icon"
                    style={{ top: "-46px", left: "110px" }}
                    width="38"
                    height="32"
                    viewBox="0 0 38 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.3703 4.84619H11.9375V7.20765H21.3703V4.84619Z" />
                    <path d="M24.6144 8.31458H15.1816V10.676H24.6144V8.31458Z" />
                    <path d="M21.3703 11.783H11.9375V14.1444H21.3703V11.783Z" />
                    <path d="M24.6144 15.2513H15.1816V17.6133H24.6144V15.2513Z" />
                    <path d="M21.3703 18.7192H11.9375V21.0807H21.3703V18.7192Z" />
                    <path d="M1.76866 25.3158H15.9178V29.3988H10.5382V31.7603H27.1929V29.3988H21.8133V25.3158H35.9625C36.9353 25.3158 37.7311 24.5188 37.7311 23.5447V2.4884C37.7311 1.51428 36.9353 0.717285 35.9625 0.717285H1.76866C0.795895 0.717285 0 1.51428 0 2.4884V23.5448C0 24.5188 0.795895 25.3158 1.76866 25.3158ZM2.35819 3.07875H35.3729V22.9543H2.35819V3.07875Z" />
                  </svg>

                  <h2 className="dark:text-[#FFFFFF] text-[#171616]">
                    WEB <br /> Development
                  </h2>
                  <p className="dark:text-[#B7B0B0] text-[#717070]">
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the.
                  </p>
                </div>
              </li>
              <li className={`honeycomb-cell`}>
                {/* <img className="honeycomb-cell_img" src="img/Work3.jpg"> */}
                <div className="honeycomb-cell_title">
                  <svg
                    className="icon"
                    style={{ top: "-46px", left: "110px" }}
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.289062 24.6938V5.7839C0.289062 2.98659 2.47383 0.71875 5.16868 0.71875H25.9884C28.6832 0.71875 30.868 2.98659 30.868 5.7839V24.6938C30.868 27.4911 28.6832 29.759 25.9884 29.759H5.16868C3.87395 29.759 2.63388 29.2254 1.71781 28.2759C0.803049 27.325 0.289062 26.0378 0.289062 24.6938ZM2.24091 10.8491V24.6938C2.24091 25.5002 2.5493 26.2728 3.09842 26.8428C3.64754 27.4128 4.39184 27.7329 5.16868 27.7329H25.9884C27.6058 27.7329 28.9162 26.3727 28.9162 24.6938V10.8491H2.24091ZM14.2773 4.43319C13.559 4.43319 12.9761 5.03831 12.9761 5.7839C12.9761 6.52949 13.559 7.13461 14.2773 7.13461C14.9956 7.13461 15.5785 6.52949 15.5785 5.7839C15.5785 5.03831 14.9956 4.43319 14.2773 4.43319ZM10.3736 4.43319C9.65532 4.43319 9.07237 5.03831 9.07237 5.7839C9.07237 6.52949 9.65532 7.13461 10.3736 7.13461C11.0919 7.13461 11.6748 6.52949 11.6748 5.7839C11.6748 5.03831 11.0919 4.43319 10.3736 4.43319ZM6.46991 4.43319C5.75163 4.43319 5.16868 5.03831 5.16868 5.7839C5.16868 6.52949 5.75163 7.13461 6.46991 7.13461C7.18819 7.13461 7.77114 6.52949 7.77114 5.7839C7.77114 5.03831 7.18819 4.43319 6.46991 4.43319Z"
                    />
                    <path d="M7.43063 13.4286V16.247C7.43063 16.5289 7.49997 16.7458 7.63865 16.898C7.77734 17.0501 7.98089 17.1261 8.24931 17.1261C8.51773 17.1261 8.72352 17.0501 8.86668 16.898C9.00984 16.7458 9.08142 16.5289 9.08142 16.247V13.4286H10.2289V16.2403C10.2289 16.6608 10.1394 17.0165 9.9605 17.3073C9.78155 17.5981 9.53997 17.8173 9.23576 17.9649C8.93602 18.1126 8.6005 18.1864 8.22918 18.1864C7.85786 18.1864 7.52457 18.1148 7.22931 17.9716C6.93852 17.824 6.70812 17.6048 6.53812 17.314C6.36812 17.0187 6.28312 16.6608 6.28312 16.2403V13.4286H7.43063ZM12.3835 13.4286V18.1394H11.236V13.4286H12.3835ZM15.9731 11.7644L14.1747 19.3943H13.0675L14.8659 11.7644H15.9731ZM17.7858 13.4286V16.247C17.7858 16.5289 17.8552 16.7458 17.9939 16.898C18.1325 17.0501 18.3361 17.1261 18.6045 17.1261C18.8729 17.1261 19.0787 17.0501 19.2219 16.898C19.365 16.7458 19.4366 16.5289 19.4366 16.247V13.4286H20.5841V16.2403C20.5841 16.6608 20.4947 17.0165 20.3157 17.3073C20.1368 17.5981 19.8952 17.8173 19.591 17.9649C19.2912 18.1126 18.9557 18.1864 18.5844 18.1864C18.2131 18.1864 17.8798 18.1148 17.5845 17.9716C17.2937 17.824 17.0633 17.6048 16.8933 17.314C16.7233 17.0187 16.6383 16.6608 16.6383 16.2403V13.4286H17.7858ZM24.4768 18.1394L23.5172 16.6966L22.6716 18.1394H21.3698L22.8797 15.7437L21.3362 13.4286H22.6716L23.6178 14.8512L24.4499 13.4286H25.7518L24.2553 15.8041L25.8122 18.1394H24.4768Z" />
                  </svg>

                  <h2 className="dark:text-[#FFFFFF] text-[#171616]">
                    UI/UX
                    <br /> DESIGN
                  </h2>
                  <p className="dark:text-[#B7B0B0] text-[#717070]">
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the.
                  </p>
                </div>
              </li>
              <li className={`honeycomb-cell`}>
                <div className="honeycomb-cell_title">
                  <svg
                    className="icon"
                    style={{ top: "-52px", left: "104px" }}
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_265_567)">
                      <path d="M39.6572 21.3458C39.5743 20.112 39.2355 18.909 38.6623 17.8132C38.0891 16.7175 37.2942 15.753 36.328 14.9813C35.325 14.1203 34.155 13.4759 32.8913 13.0883C31.6276 12.7008 30.2974 12.5785 28.9843 12.7292C27.9635 10.9967 26.5219 9.54993 24.7932 8.52293C23.0644 7.49593 21.1043 6.92195 19.0947 6.85417C17.4448 6.83486 15.8105 7.17525 14.3055 7.85164C12.8005 8.52804 11.461 9.5242 10.3801 10.7708C8.34369 13.0241 7.22573 15.9588 7.24675 18.9958C5.87706 19.8964 4.71467 21.0781 3.83679 22.4624C2.95891 23.8468 2.38565 25.4021 2.15508 27.025C1.81731 28.8111 1.91698 30.6525 2.44558 32.3917C2.97417 34.131 3.91597 35.7164 5.1905 37.0125C7.51822 39.119 10.5714 40.242 13.7092 40.1458H33.7822C41.3218 40.1458 44.8468 35.1521 45.0426 30.4521C45.1236 28.5757 44.6577 26.7161 43.7017 25.0995C42.7456 23.4829 41.3405 22.1788 39.6572 21.3458ZM19.5842 24.2833V31.3333C19.5842 31.8527 19.3779 32.3508 19.0107 32.7181C18.6434 33.0854 18.1453 33.2917 17.6259 33.2917C17.1065 33.2917 16.6084 33.0854 16.2412 32.7181C15.8739 32.3508 15.6676 31.8527 15.6676 31.3333V24.2833L14.1009 25.85C13.9031 26.0641 13.66 26.2313 13.3894 26.3394C13.1188 26.4476 12.8274 26.494 12.5366 26.4752C12.2457 26.4564 11.9627 26.373 11.7082 26.231C11.4537 26.0889 11.2342 25.8919 11.0655 25.6542C10.8051 25.2391 10.7014 24.7447 10.7732 24.26C10.8451 23.7753 11.0876 23.3322 11.4572 23.0104L16.2551 18.2125C16.4294 18.0226 16.6412 17.8709 16.8772 17.7672C17.1132 17.6634 17.3681 17.6099 17.6259 17.6099C17.8837 17.6099 18.1387 17.6634 18.3746 17.7672C18.6106 17.8709 18.8225 18.0226 18.9967 18.2125L23.7947 23.0104C24.1642 23.3322 24.4068 23.7753 24.4786 24.26C24.5504 24.7447 24.4468 25.2391 24.1863 25.6542C24.0177 25.8919 23.7981 26.0889 23.5436 26.231C23.2891 26.373 23.0061 26.4564 22.7153 26.4752C22.4244 26.494 22.1331 26.4476 21.8624 26.3394C21.5918 26.2313 21.3487 26.0641 21.1509 25.85L19.5842 24.2833ZM35.5447 30.8438L30.7467 35.6417C30.5725 35.8316 30.3606 35.9833 30.1246 36.087C29.8887 36.1908 29.6337 36.2443 29.3759 36.2443C29.1181 36.2443 28.8632 36.1908 28.6272 36.087C28.3912 35.9833 28.1794 35.8316 28.0051 35.6417L23.2072 30.8438C22.8538 30.5115 22.6229 30.0698 22.5518 29.59C22.4807 29.1102 22.5736 28.6204 22.8155 28.2C22.9842 27.9623 23.2037 27.7653 23.4582 27.6232C23.7127 27.4812 23.9957 27.3977 24.2866 27.379C24.5774 27.3602 24.8688 27.4066 25.1394 27.5148C25.41 27.6229 25.6531 27.7901 25.8509 28.0042L27.4176 29.5708V22.5208C27.4176 22.0015 27.6239 21.5033 27.9912 21.1361C28.3584 20.7688 28.8565 20.5625 29.3759 20.5625C29.8953 20.5625 30.3934 20.7688 30.7607 21.1361C31.1279 21.5033 31.3342 22.0015 31.3342 22.5208V29.5708L32.9009 28.0042C33.0987 27.7901 33.3418 27.6229 33.6124 27.5148C33.8831 27.4066 34.1744 27.3602 34.4653 27.379C34.7561 27.3977 35.0391 27.4812 35.2936 27.6232C35.5481 27.7653 35.7677 27.9623 35.9363 28.2C36.1782 28.6204 36.2711 29.1102 36.2001 29.59C36.129 30.0698 35.8981 30.5115 35.5447 30.8438Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_265_567">
                        <rect width="47" height="47" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <h2 className="dark:text-[#FFFFFF] text-[#171616]">
                    CLOUD
                    <br /> SERVICES
                  </h2>
                  <p className="dark:text-[#B7B0B0] text-[#717070]">
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the.
                  </p>
                </div>
              </li>

              <li className="honeycomb-cell honeycomb_Hidden"></li>

              <li className={`honeycomb-cell`}>
                {/* <img className="honeycomb-cell_img" src="img/work5.jpg"> */}
                <div className="honeycomb-cell_title">
                  <svg
                    className="icon"
                    style={{ top: "-52px", left: "104px" }}
                    width="42"
                    height="37"
                    viewBox="0 0 42 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.93853 23.3799L8.38239 22.5464C10.0081 21.0852 11.7469 20.1502 13.5989 19.7412C15.4726 19.3246 17.448 19.4517 19.5252 20.1227C19.5422 20.1286 19.5598 20.1345 19.5768 20.1403C20.9031 20.7154 22.4413 21.2279 24.1915 21.6779C26.1185 22.1596 28.0694 22.5397 30.0362 22.8165C30.4084 22.8271 30.7715 22.9343 31.09 23.1275L37.7958 18.4031C38.7698 17.7165 39.7532 17.3878 40.491 17.4231C40.8508 17.4244 41.2005 17.5417 41.4885 17.7576C41.6355 17.8761 41.7563 18.0238 41.8431 18.1915C41.93 18.3592 41.9811 18.5432 41.9931 18.7317C42.0429 19.2835 41.825 20.0112 41.2348 20.9033L37.273 26.8718C37.1296 27.0904 36.961 27.2913 36.7707 27.4704C36.5817 27.6518 36.3713 27.8094 36.1443 27.9398L25.88 33.9377C25.4989 34.1616 25.0789 34.311 24.6422 34.3779C24.2063 34.436 23.7635 34.4121 23.3364 34.3075L13.4344 31.8778C13.1779 31.8123 12.9119 31.7925 12.6485 31.8191C12.3866 31.847 12.132 31.9226 11.8972 32.0422L11.48 32.2417L11.9201 33.0985C11.9544 33.1654 11.9751 33.2383 11.9811 33.3132C11.9872 33.388 11.9784 33.4633 11.9552 33.5348C11.9321 33.6062 11.895 33.6724 11.8463 33.7295C11.7975 33.7865 11.7379 33.8334 11.671 33.8673L6.49881 36.5317C6.3632 36.5996 6.20632 36.6112 6.06224 36.564C5.91816 36.5167 5.79851 36.4144 5.72929 36.2794L0.0627067 25.2285C0.0284768 25.1617 0.00778043 25.0887 0.00180724 25.0138C-0.00416595 24.9389 0.00470186 24.8636 0.0279009 24.7921C0.0510999 24.7207 0.0881727 24.6545 0.136988 24.5975C0.185803 24.5404 0.245398 24.4936 0.312347 24.4597L5.4849 21.8012C5.55151 21.7664 5.62435 21.7451 5.6992 21.7387C5.77406 21.7322 5.84944 21.7407 5.921 21.7636C5.99256 21.7866 6.05888 21.8235 6.11611 21.8722C6.17333 21.9209 6.22034 21.9806 6.25442 22.0476L6.93853 23.3799ZM32.2617 16.3667H25.7562V16.4371C25.7565 16.6747 25.8507 16.9026 26.0182 17.071C26.101 17.1548 26.1995 17.2213 26.3082 17.2666C26.4168 17.3119 26.5334 17.3352 26.6511 17.335H31.3661C31.4837 17.3352 31.6002 17.312 31.7088 17.2667C31.8173 17.2213 31.9158 17.1548 31.9984 17.071C32.0817 16.9878 32.1479 16.889 32.193 16.7803C32.2382 16.6715 32.2615 16.5549 32.2616 16.4371V16.3667H32.2617ZM32.519 18.1273C32.7946 17.9403 33.02 17.6884 33.1755 17.3936C33.3309 17.0989 33.4116 16.7704 33.4104 16.4371V14.653C33.4068 14.3887 33.4593 14.1266 33.5646 13.8842C33.673 13.6452 33.8324 13.4328 34.0316 13.2621C34.8276 12.5501 35.4649 11.6783 35.9021 10.7033C36.4167 9.55172 36.6354 8.28947 36.5384 7.03156C36.4413 5.77364 36.0315 4.56004 35.3463 3.50127C34.6611 2.44251 33.7222 1.57223 32.6153 0.96969C31.5083 0.367155 30.2684 0.0515137 29.0085 0.0515137C27.7486 0.0515137 26.5087 0.367155 25.4017 0.96969C24.2948 1.57223 23.3559 2.44251 22.6707 3.50127C21.9855 4.56004 21.5757 5.77364 21.4787 7.03156C21.3816 8.28947 21.6003 9.55172 22.1149 10.7033C22.5522 11.6783 23.1895 12.5501 23.9854 13.2621C24.1846 13.4327 24.3438 13.6451 24.4518 13.8842C24.5575 14.1266 24.6104 14.3886 24.6071 14.653V16.4371C24.6058 16.7704 24.6863 17.0989 24.8417 17.3936C24.997 17.6884 25.2224 17.9403 25.498 18.1273C25.5778 18.947 25.9595 19.7076 26.5687 20.2609C27.1779 20.8142 27.9709 21.1206 28.7934 21.1204H29.2235C30.0459 21.1206 30.839 20.8142 31.4482 20.2609C32.0574 19.7076 32.4391 18.947 32.5189 18.1273H32.519ZM22.6044 7.60459C22.6072 6.00495 23.2065 4.46402 24.2849 3.28391C25.3633 2.10379 26.843 1.36961 28.434 1.22528V3.39088C28.4337 3.48607 28.4571 3.57982 28.5021 3.66369C28.5471 3.74755 28.6122 3.8189 28.6915 3.87129C28.7709 3.92368 28.862 3.95548 28.9567 3.96381C29.0514 3.97215 29.1467 3.95676 29.234 3.91903C29.2633 3.9132 29.2972 3.90145 29.333 3.89553C29.3776 3.88853 29.4226 3.88463 29.4678 3.88387C29.6716 3.88597 29.8663 3.96851 30.0097 4.11355C30.153 4.2586 30.2334 4.45444 30.2334 4.65851C30.2334 4.86259 30.153 5.05843 30.0097 5.20347C29.8663 5.34852 29.6716 5.43106 29.4678 5.43316C29.4226 5.43241 29.3776 5.42849 29.333 5.42141C29.2882 5.41672 29.2445 5.40485 29.2035 5.38625C29.0604 5.33509 28.9028 5.34279 28.7653 5.40769C28.6278 5.47258 28.5215 5.58938 28.4698 5.73252C28.4472 5.79456 28.4357 5.86011 28.4358 5.92615H28.434V7.60459H27.4107C27.3811 7.11537 27.1661 6.65591 26.8097 6.32001C26.4533 5.9841 25.9823 5.79706 25.4928 5.79706C25.0034 5.79706 24.5324 5.9841 24.176 6.32001C23.8196 6.65591 23.6046 7.11537 23.5749 7.60459H22.6044ZM35.3121 8.75471C35.2215 9.26447 35.0686 9.76113 34.8568 10.2334C34.4871 11.0599 33.9461 11.7981 33.2697 12.399C32.9491 12.6795 32.6931 13.0262 32.5191 13.4152C32.3451 13.8042 32.2573 14.2264 32.2617 14.6526V15.2162H29.5826V12.9687H29.5809C29.5806 12.9007 29.5689 12.8332 29.5463 12.7691C29.5205 12.6985 29.4811 12.6337 29.4303 12.5784C29.3795 12.523 29.3183 12.4783 29.2502 12.4467C29.1821 12.415 29.1085 12.3972 29.0335 12.3941C28.9585 12.391 28.8836 12.4028 28.8131 12.4288C28.7763 12.4405 28.7329 12.4523 28.6837 12.4639C28.639 12.471 28.594 12.4749 28.5488 12.4757C28.3956 12.475 28.2461 12.429 28.119 12.3434C27.9919 12.2578 27.8929 12.1365 27.8345 11.9947C27.7761 11.8529 27.7609 11.697 27.7908 11.5466C27.8207 11.3961 27.8944 11.2579 28.0026 11.1493C28.149 11.007 28.3448 10.927 28.5488 10.9264C28.594 10.9271 28.639 10.931 28.6837 10.9381C28.7174 10.9424 28.7506 10.9502 28.7827 10.9615C28.87 10.9993 28.9652 11.0147 29.0599 11.0063C29.1546 10.998 29.2458 10.9662 29.3251 10.9138C29.4045 10.8614 29.4696 10.7901 29.5145 10.7062C29.5595 10.6223 29.5829 10.5286 29.5826 10.4334V8.75495H30.6053C30.635 9.24426 30.85 9.70379 31.2065 10.0398C31.5629 10.3757 32.034 10.5628 32.5235 10.5628C33.0131 10.5628 33.4841 10.3757 33.8406 10.0398C34.1971 9.70379 34.4121 9.24426 34.4417 8.75495L35.3121 8.75471ZM19.1096 26.4137C18.9589 26.3995 18.8199 26.3259 18.7234 26.209C18.6268 26.0922 18.5805 25.9417 18.5948 25.7908C18.609 25.6398 18.6825 25.5007 18.7992 25.404C18.9158 25.3073 19.0661 25.2609 19.2169 25.2752C21.7422 25.5216 25.2047 25.6978 27.542 25.821C28.7222 25.8797 29.6257 25.9266 30.059 25.9795C30.3141 25.9573 30.5515 25.8401 30.7243 25.6509C30.8997 25.4569 30.9931 25.2023 30.985 24.9407C30.9778 24.6785 30.8677 24.4297 30.6785 24.2482C30.4917 24.065 30.2409 23.9619 29.9794 23.9607C29.9525 23.9617 29.9255 23.9597 29.8991 23.9548C27.883 23.6753 25.8834 23.2874 23.9089 22.7928C22.2866 22.3875 20.6977 21.8578 19.1566 21.2083C17.2811 20.6097 15.5106 20.4923 13.845 20.8561C12.1706 21.2258 10.5885 22.0866 9.0985 23.4384C9.06974 23.4663 9.03717 23.49 9.00178 23.5088H9.00235L7.46283 24.4067L10.9569 31.2203L11.3999 31.0091C11.7548 30.8314 12.1384 30.7182 12.5328 30.6746C12.9255 30.6401 13.3212 30.6698 13.7043 30.7626L23.6052 33.1923C23.8913 33.2629 24.1882 33.2788 24.4802 33.2392C24.7699 33.193 25.0485 33.0935 25.3019 32.9457L35.5648 26.9479C35.7163 26.8606 35.8573 26.7563 35.985 26.6368C36.111 26.5175 36.2223 26.3835 36.3167 26.2378L40.2786 20.2694C40.7129 19.6122 40.8805 19.1426 40.8518 18.8374C40.8518 18.8034 40.8448 18.7697 40.8315 18.7385C40.8181 18.7072 40.7985 18.679 40.7739 18.6555C40.6754 18.5943 40.561 18.5637 40.4451 18.5674C39.9405 18.544 39.2185 18.8022 38.4549 19.3421L31.8836 23.9668C32.0507 24.285 32.1358 24.6401 32.131 24.9996C32.1262 25.3592 32.0318 25.7118 31.8563 26.0255C31.6808 26.3392 31.4298 26.6041 31.1261 26.7959C30.8224 26.9878 30.4756 27.1006 30.1173 27.1241C30.0252 27.1287 29.9333 27.1127 29.8483 27.0772C29.8254 27.0654 28.89 27.0361 27.484 26.9657C25.1433 26.8424 21.6772 26.6663 19.1097 26.414L19.1096 26.4137Z"
                    />
                  </svg>

                  <h2 className="dark:text-[#FFFFFF] text-[#171616]">
                    BUSINESS
                    <br /> SOLUTION
                  </h2>
                  <p className="dark:text-[#B7B0B0] text-[#717070]">
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the.
                  </p>
                </div>
              </li>
              <li className={`honeycomb-cell`}>
                {/* <img className="honeycomb-cell_img" src="img/work06.jpg"> */}
                <div className="honeycomb-cell_title">
                  <svg
                    className="icon"
                    style={{ top: "-52px", left: "110px" }}
                    width="39"
                    height="36"
                    viewBox="0 0 39 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.7114 9.32654L10.3203 13.3686H12.3441V21.6177H15.0788V13.3686H17.1026L13.7114 9.32654Z" />
                    <path d="M7.64062 23.236L18.0465 29.6703C18.3826 29.8782 18.7775 29.9892 19.1814 29.9892C19.5853 29.9892 19.9802 29.8782 20.3163 29.6703L30.7222 23.236C30.6659 23.1323 30.5801 23.0449 30.474 22.9834C30.3679 22.9218 30.2456 22.8885 30.1206 22.887H8.24228C8.11719 22.8885 7.99494 22.9218 7.88886 22.9834C7.78277 23.0449 7.69691 23.1323 7.64062 23.236Z" />
                    <path d="M21.9163 8.92688V17.176H19.8926L23.2837 21.2181L26.6748 17.176H24.6511V8.92688H21.9163Z" />
                    <path d="M38.324 12.7342C38.3211 11.0521 37.5999 9.43966 36.3183 8.25023C35.0368 7.06081 33.2994 6.3914 31.487 6.38872C30.7158 6.3865 29.95 6.50889 29.224 6.75041C29.1365 6.77989 29.0433 6.79229 28.9504 6.78683C28.8574 6.78137 28.7667 6.75817 28.6839 6.71868C28.6013 6.68007 28.5279 6.62648 28.468 6.56109C28.4081 6.49569 28.363 6.41982 28.3352 6.33796C27.6985 4.40504 26.3706 2.73142 24.5708 1.5934C22.771 0.455392 20.6069 -0.0789705 18.4358 0.0785388C16.2646 0.236048 14.2162 1.07601 12.6288 2.45975C11.0414 3.8435 10.0098 5.68828 9.70448 7.68954C9.6905 7.78782 9.65161 7.88163 9.59099 7.96325C9.53038 8.04488 9.44978 8.112 9.3558 8.15911C9.26167 8.20587 9.15722 8.23191 9.05053 8.23521C8.94383 8.23851 8.83774 8.21898 8.74047 8.17814C7.94307 7.82977 7.07159 7.65196 6.19028 7.65782C4.60528 7.64897 3.07773 8.20812 1.92596 9.21877C0.774193 10.2294 0.0870465 11.6136 0.007718 13.0828C-0.0716105 14.5521 0.462998 15.9931 1.50014 17.1055C2.53728 18.2179 3.99694 18.916 5.57496 19.0543C5.77323 19.067 10.9762 19.0797 10.9762 19.0797V14.6378H8.92507C8.79713 14.6372 8.67189 14.6037 8.56327 14.5409C8.45464 14.4782 8.36688 14.3887 8.30974 14.2825C8.25406 14.176 8.2316 14.0571 8.24489 13.9394C8.25818 13.8217 8.30669 13.7097 8.38495 13.6162L13.1708 7.90529C13.2371 7.83226 13.3198 7.77355 13.4131 7.73328C13.5064 7.69301 13.608 7.67214 13.7109 7.67214C13.8138 7.67214 13.9155 7.69301 14.0088 7.73328C14.1021 7.77355 14.1848 7.83226 14.2511 7.90529L19.0369 13.6162C19.1152 13.7097 19.1637 13.8217 19.177 13.9394C19.1903 14.0571 19.1678 14.176 19.1121 14.2825C19.055 14.3887 18.9672 14.4782 18.8586 14.5409C18.75 14.6037 18.6247 14.6372 18.4968 14.6378H16.4457V19.0797H19.7548L17.9567 16.9286C17.8784 16.8351 17.8299 16.7231 17.8166 16.6054C17.8033 16.4876 17.8258 16.3688 17.8815 16.2623C17.9386 16.156 18.0264 16.0666 18.135 16.0039C18.2436 15.9411 18.3689 15.9076 18.4968 15.9069H20.5479V8.29236C20.5479 8.12407 20.6199 7.96267 20.7481 7.84367C20.8764 7.72467 21.0503 7.65782 21.2316 7.65782H25.3338C25.5151 7.65782 25.689 7.72467 25.8172 7.84367C25.9454 7.96267 26.0175 8.12407 26.0175 8.29236V15.9069H28.0686C28.1965 15.9076 28.3217 15.9411 28.4304 16.0039C28.539 16.0666 28.6267 16.156 28.6839 16.2623C28.7396 16.3688 28.762 16.4876 28.7487 16.6054C28.7354 16.7231 28.6869 16.8351 28.6087 16.9286L26.8106 19.0797C26.8106 19.0797 31.9041 19.067 32.1092 19.048C33.8107 18.9136 35.3952 18.1892 36.547 17.0191C37.6988 15.849 38.3332 14.3191 38.324 12.7342Z" />
                    <path d="M30.8048 24.708L23.2227 29.3973L30.8048 34.7783V24.708Z" />
                    <path d="M22.0176 30.1462L21.0741 30.7237C20.5152 31.0752 19.8555 31.2631 19.1803 31.2631C18.5051 31.2631 17.8454 31.0752 17.2864 30.7237L16.3429 30.1462L8.68555 35.578H29.675L22.0176 30.1462Z" />
                    <path d="M7.55859 24.708V34.7783L15.1408 29.3973L7.55859 24.708Z" />
                  </svg>

                  <h2 className="dark:text-[#FFFFFF] text-[#171616]">
                    CLOUD E-MAIL
                    <br /> MIGRATION
                  </h2>
                  <p className="dark:text-[#B7B0B0] text-[#717070]">
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the.
                  </p>
                </div>
              </li>
              <li className={`honeycomb-cell`}>
                {/* <img className="honeycomb-cell_img" src="img/work07.jpg"> */}
                <div className="honeycomb-cell_title">
                  <svg
                    className="icon"
                    style={{ top: "-52px", left: "110px" }}
                    width="39"
                    height="36"
                    viewBox="0 0 39 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.7114 9.32654L10.3203 13.3686H12.3441V21.6177H15.0788V13.3686H17.1026L13.7114 9.32654Z" />
                    <path d="M7.64062 23.236L18.0465 29.6703C18.3826 29.8782 18.7775 29.9892 19.1814 29.9892C19.5853 29.9892 19.9802 29.8782 20.3163 29.6703L30.7222 23.236C30.6659 23.1323 30.5801 23.0449 30.474 22.9834C30.3679 22.9218 30.2456 22.8885 30.1206 22.887H8.24228C8.11719 22.8885 7.99494 22.9218 7.88886 22.9834C7.78277 23.0449 7.69691 23.1323 7.64062 23.236Z" />
                    <path d="M21.9163 8.92688V17.176H19.8926L23.2837 21.2181L26.6748 17.176H24.6511V8.92688H21.9163Z" />
                    <path d="M38.324 12.7342C38.3211 11.0521 37.5999 9.43966 36.3183 8.25023C35.0368 7.06081 33.2994 6.3914 31.487 6.38872C30.7158 6.3865 29.95 6.50889 29.224 6.75041C29.1365 6.77989 29.0433 6.79229 28.9504 6.78683C28.8574 6.78137 28.7667 6.75817 28.6839 6.71868C28.6013 6.68007 28.5279 6.62648 28.468 6.56109C28.4081 6.49569 28.363 6.41982 28.3352 6.33796C27.6985 4.40504 26.3706 2.73142 24.5708 1.5934C22.771 0.455392 20.6069 -0.0789705 18.4358 0.0785388C16.2646 0.236048 14.2162 1.07601 12.6288 2.45975C11.0414 3.8435 10.0098 5.68828 9.70448 7.68954C9.6905 7.78782 9.65161 7.88163 9.59099 7.96325C9.53038 8.04488 9.44978 8.112 9.3558 8.15911C9.26167 8.20587 9.15722 8.23191 9.05053 8.23521C8.94383 8.23851 8.83774 8.21898 8.74047 8.17814C7.94307 7.82977 7.07159 7.65196 6.19028 7.65782C4.60528 7.64897 3.07773 8.20812 1.92596 9.21877C0.774193 10.2294 0.0870465 11.6136 0.007718 13.0828C-0.0716105 14.5521 0.462998 15.9931 1.50014 17.1055C2.53728 18.2179 3.99694 18.916 5.57496 19.0543C5.77323 19.067 10.9762 19.0797 10.9762 19.0797V14.6378H8.92507C8.79713 14.6372 8.67189 14.6037 8.56327 14.5409C8.45464 14.4782 8.36688 14.3887 8.30974 14.2825C8.25406 14.176 8.2316 14.0571 8.24489 13.9394C8.25818 13.8217 8.30669 13.7097 8.38495 13.6162L13.1708 7.90529C13.2371 7.83226 13.3198 7.77355 13.4131 7.73328C13.5064 7.69301 13.608 7.67214 13.7109 7.67214C13.8138 7.67214 13.9155 7.69301 14.0088 7.73328C14.1021 7.77355 14.1848 7.83226 14.2511 7.90529L19.0369 13.6162C19.1152 13.7097 19.1637 13.8217 19.177 13.9394C19.1903 14.0571 19.1678 14.176 19.1121 14.2825C19.055 14.3887 18.9672 14.4782 18.8586 14.5409C18.75 14.6037 18.6247 14.6372 18.4968 14.6378H16.4457V19.0797H19.7548L17.9567 16.9286C17.8784 16.8351 17.8299 16.7231 17.8166 16.6054C17.8033 16.4876 17.8258 16.3688 17.8815 16.2623C17.9386 16.156 18.0264 16.0666 18.135 16.0039C18.2436 15.9411 18.3689 15.9076 18.4968 15.9069H20.5479V8.29236C20.5479 8.12407 20.6199 7.96267 20.7481 7.84367C20.8764 7.72467 21.0503 7.65782 21.2316 7.65782H25.3338C25.5151 7.65782 25.689 7.72467 25.8172 7.84367C25.9454 7.96267 26.0175 8.12407 26.0175 8.29236V15.9069H28.0686C28.1965 15.9076 28.3217 15.9411 28.4304 16.0039C28.539 16.0666 28.6267 16.156 28.6839 16.2623C28.7396 16.3688 28.762 16.4876 28.7487 16.6054C28.7354 16.7231 28.6869 16.8351 28.6087 16.9286L26.8106 19.0797C26.8106 19.0797 31.9041 19.067 32.1092 19.048C33.8107 18.9136 35.3952 18.1892 36.547 17.0191C37.6988 15.849 38.3332 14.3191 38.324 12.7342Z" />
                    <path d="M30.8048 24.708L23.2227 29.3973L30.8048 34.7783V24.708Z" />
                    <path d="M22.0176 30.1462L21.0741 30.7237C20.5152 31.0752 19.8555 31.2631 19.1803 31.2631C18.5051 31.2631 17.8454 31.0752 17.2864 30.7237L16.3429 30.1462L8.68555 35.578H29.675L22.0176 30.1462Z" />
                    <path d="M7.55859 24.708V34.7783L15.1408 29.3973L7.55859 24.708Z" />
                  </svg>

                  <h2 className="dark:text-[#FFFFFF] text-[#171616]">
                    CLOUD E-MAIL
                    <br /> MIGRATION
                  </h2>
                  <p className="dark:text-[#B7B0B0] text-[#717070]">
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the.
                  </p>
                </div>
              </li>
              <li className="honeycomb-cell honeycomb_Hidden"></li>
            </ul>
          </div>
        </section>

        <div className="flex md:flex-row flex-col-reverse items-center justify-items-center gap-4">
          <div>
            <h3 className="capitalize text-primary font-serif font-bold sm:text-5xl text-4xl">
              over 400+ projects completed
            </h3>
            <p className=" mt-7 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis
            </p>
          </div>
          <Image
            // src="/Group-87.svg"
            src={theme === "dark" ? "IMAGE_122.svg" : "IMAGE_LIGHTE.svg"}
            width={500}
            height={500}
            alt="stats"
            className="sm:w-2/4 w-full"
          />
        </div>
        <div className="relative z-10">
          <h3 className="font-serif text-primary font-bold text-2xl md:text-5xl text-center border-b-2 border-dashed dark:border-[#FFFFFF] border-[#9D80FF] uppercase w-fit mx-auto">
            methodology
          </h3>
          <div className="mt-[150px] grid md:grid-cols-4 md:grid-rows-1 sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 grid-rows-4 gap-x-4 md:gap-y-0 gap-y-28">
            {methodologies.map((meth, idx) => {
              return (
                <div
                  key={idx}
                  className="text-center bg-[#8B68FF06] px-6 pb-6 pt-[100px] rounded-[20px] border-2 border-primary shadow-[0px_0px_6px_#8B68FF80] flex flex-col items-center justify-start relative hover:scale-105 duration-150"
                >
                  <div className="absolute mx-auto -top-[75px] ">
                    <img src={meth.image} alt="icons" />
                  </div>

                  <h5 className="uppercase font-bold text-2xl">{meth.title}</h5>
                  <p className="dark:text-[#B7B0B0] text-[#717070] leading-[25px] mt-5 text-base ">
                    {meth.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="text-primary text-2xl font-medium capitalize text-center border-b-2 dark:border-[#FFFFFF] border-[#9D80FF] border-dashed w-fit mx-auto">
            hire us
          </p>
          <h3 className="uppercase font-serif dark:text-[#ffffff] text-black font-bold text-2xl md:text-4xl text-center mt-4">
            HIRE ON-DEMAND DEVELOPERS
          </h3>
          <p className="text-lg mt-6 text-center max-w-screen-lg mx-auto dark:text-[#B7B0B0] text-[#717070]">
            Do you want to hire an on-demand mobile app developer for a specific
            site? We provide on-demand developers a variety of technologies such
            as iPhone, Android, PHP, Blockchain, On-Demand.
          </p>
          <div className="mt-10 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {developers.map((develoer, idx) => {
              return (
                <div
                  key={idx}
                  className="border-2 dark:bg-[#241653] border-primary rounded-tl-3xl rounded-br-3xl px-8 py-4"
                >
                  <Image
                    className="mx-auto"
                    // src={develoer.image}
                    src={theme === "dark" ? develoer.image : develoer.image1}
                    width={60}
                    height={60}
                    alt={develoer.name}
                  />
                  <p className="text-xl font-bold uppercase text-center mt-5">
                    {develoer.name}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    <li>Experience : {develoer.experiance}</li>
                    <li>Rating : {develoer.rating}</li>
                    <li>Project : {develoer.project}</li>
                    <li>Rate : {develoer.rate}</li>
                  </ul>
                  <div className="mt-4 flex items-center justify-between">
                    <button className="bg-primary rounded-xl lg:px-4 lg:py-2 font-semibold">
                      Hire now
                    </button>
                    <ul className="flex items-center justify-end gap-2">
                      {develoer.skills.map((skill, idx) => {
                        return (
                          <li key={idx}>
                            <Image
                              src={skill.src}
                              alt={skill.name}
                              width={22}
                              height={22}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="text-primary text-2xl font-medium text-center border-b-2 dark:border-[#FFFFFF] border-[#9D80FF] border-dashed w-fit mx-auto uppercase">
            why
          </p>
          <h3 className="uppercase font-serif text-black dark:text-[#FFFFFF] font-bold sm:text-4xl text-3xl text-center mt-4">
            the hit-n-hammer
          </h3>
          <div className="flex md:flex-row flex-col items-center justify-center gap-24 mt-14">
            <div className="text-center">
              <div className="border border-primary bg-[#ffffff08] mx-auto size-[100px] flex items-center justify-center rounded-full mb-4 p-4">
                <Image
                  //src="discover.svg"
                  src={
                    theme === "dark"
                      ? "discover-icon.svg"
                      : "discover-light.svg"
                  }
                  width={64}
                  height={64}
                  alt="dicover"
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-4xl font-semibold uppercase">discover</h4>
                <p className="dark:text-[#B7B0B0] text-[#717070] max-w-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore m
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="border border-primary bg-[#ffffff08] mx-auto size-[100px] flex items-center justify-center rounded-full mb-4 p-4">
                <Image
                  //src="design.svg"
                  src={
                    theme === "dark" ? "design-icon.svg" : "design-light.svg"
                  }
                  width={64}
                  height={64}
                  alt="dicover"
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-4xl font-semibold uppercase">design</h4>
                <p className="dark:text-[#B7B0B0] text-[#717070] max-w-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore m
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="border border-primary bg-[#ffffff08] mx-auto size-[100px] flex items-center justify-center rounded-full mb-4 p-4">
                <Image
                  //src="deliver.svg"
                  src={
                    theme === "dark" ? "deliver-icon.svg" : "deliver-light.svg"
                  }
                  width={64}
                  height={64}
                  alt="dicover"
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-4xl font-semibold uppercase">deliver</h4>
                <p className="dark:text-[#B7B0B0] text-[#717070] max-w-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore m
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <section id="testimonialSection">
            <div className="testimonialContainer">
              <div className="testimonialTitle">
                <p className="font-serif text-[#6c42f8] border-b-2 dark:border-[#FFFFFF] border-[#9D80FF] border-dashed">
                  CLIENTS TESTIMONIAL
                </p>
                <h1 className="uppercase font-serif text-black dark:text-[#FFFFFF] font-bold sm:text-4xl text-3xl text-center mt-4">
                  WHAT OUR CLIENTS ARE SAYING
                </h1>
              </div>
            </div>
            <div className="clientImgsContainer ">
              <ul className="honeycomb grid gap-y-12 md:gap-y-3">
                {members.map((member) => (
                  <li
                    key={member.id}
                    className={`honeycomb-cell honeycomb-cell-client ${
                      hoveredMember === member.id ? "transform" : ""
                    }`}
                    // onMouseEnter={() => handleMouseEnter(member.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <img
                      className="honeycomb-cell_img"
                      src={member.img}
                      alt={member.name}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <div className="items-center justify-items-center mt-48 space-y-3">
            <div>
              <p className="text-base dark:text-[#B7B0B0] text-[#717070] max-w-[929px] text-center">
                AdasIt is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using
                Content here, content here, making it look like readable
                English.
              </p>
            </div>
            <div>
              <h2 className="text-xl text-[#8B68FF] font-semibold text-center">
                Allena Smith
              </h2>
              <p className="font-medium text-base dark:text-[#FFFFFF] text-[#717070]">
                Awesome IT, Company
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-primary text-[40px] md:mt-20 font-bold text-center border-b-2 dark:border-[#FFFFFF] border-[#9D80FF] border-dashed w-fit mx-auto uppercase font-serif">
            get in touch
          </h3>
          <p className="mt-11 text-center dark:text-[#B7B0B0] text-[#717070] max-w-[1093px] text-xl font-normal mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis
          </p>
          <button className="mt-12 uppercase px-8 py-2 border border-[#927DFA] rounded-xl hover:bg-[#5533C8]">
            contact us
          </button>
        </div>
      </div>
    </div>
  );
}
