"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../app/Page.css";
import HeroSection from "./components/sections/hero";
import doubleQuotesDark from "../public/Quote_dark.png";
import doubleQuoteLight from "../public/Quote_lighte.png";
import client1 from "../public/45631.jpg";
import client2 from "../public/1287.jpg";
import client3 from "../public/18155.jpg";
import client4 from "../public/27767.jpg";
import client5 from "../public/6837.jpg";
import client6 from "../public/2148767055.jpg";
import client7 from "../public/21959.jpg";
import Modal from "./components/ui/modal";
import { useTheme } from "./components/context/themeContext";
import AOS from "aos";
import "aos/dist/aos.css";
// import { image } from "motion/react-client";

const developers = [
  {
    id: 1,
    image: "ui-ux-icon.svg",
    image1: "ui-ux-dark-icon.svg",
    name: "UI/UX DESIGNER",
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
    name: "PHP DEVELOPER",
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
        name: "js",
        src: "js-icon.svg",
      },
      {
        id: 3,
        name: "php",
        src: "php-icon.svg",
        // src: "php2_svgrepo.com.svg",
      },
      {
        id: 4,
        name: "sql",
        src: "Sql_icon.svg",
      },
    ],
  },
  {
    id: 3,
    image: "android-icon.svg",
    image1: "Android-dark.svg",
    name: "ANDROID DEVELOPER",
    experiance: "5 year",
    rating: "5",
    project: "10",
    rate: "$22",
    skills: [
      {
        id: 1,
        name: "java",
        src: "java_icon.svg",
      },
      {
        id: 2,
        name: "kotlin",
        src: "kotlin_svgrepo.com.svg",
      },
      {
        id: 3,
        name: "dart",
        src: "dart_svgrepo.com.svg",
      },
    ],
  },
  {
    id: 4,
    image: "react-icon.svg",
    image1: "react-dark.svg",
    name: "REACT.JS DEVELOPERS",
    experiance: "5 year",
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
        name: "tailwind",
        src: "Tailwind_icon.svg",
      },
      {
        id: 3,
        name: "js",
        src: "js-icon.svg",
      },
      {
        id: 4,
        name: "react",
        src: "REACT.svg",
      },
    ],
  },
  {
    id: 5,
    image: "ios-dark.svg",
    image1: "ios-light.svg",
    name: "iOS DEVELOPERS",
    experiance: "4 year",
    rating: "4.3",
    project: "5",
    rate: "$25",
    skills: [
      {
        id: 1,
        name: "swift",
        src: "swift.svg",
      },
      {
        id: 2,
        name: "html",
        src: "html-icon.svg",
      },
      {
        id: 3,
        name: "css",
        src: "css-icon.svg",
      },
      {
        id: 4,
        name: "js",
        src: "js-icon.svg",
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
    rate: "$25",
    skills: [
      {
        id: 1,
        name: "mongo",
        src: "android-logo.svg",
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
        name: "JS",
        src: "JS.svg",
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
        name: "node",
        src: "JS.svg",
      },
      {
        id: 2,
        name: "js",
        src: "js-icon.svg",
      },
      {
        id: 3,
        name: "express",
        src: "express.svg",
      },

      {
        id: 4,
        name: "mongo",
        src: "android-logo.svg",
      },
    ],
  },
  {
    id: 8,
    image: "unity-dark.svg",
    image1: "unity-light.svg",
    name: "UNITY GAME DEVELOPERS",
    experiance: "8 year",
    rating: "5",
    project: "10",
    rate: "$25",
    skills: [
      {
        id: 1,
        name: "photoshop",
        src: "ps-icon.svg",
      },
      {
        id: 2,
        name: "vs-code",
        src: "unity_svgrepo.com.svg",
      },
      {
        id: 3,
        name: "csharp",
        src: "csharp_svgrepo.com.svg",
      },
      {
        id: 4,
        name: "blender",
        src: "blender-icon.svg",
      },
    ],
  },
];

const methodologies = [
  {
    id: 1,
    title: "simplicity",
    description:
      "We craft intuitive, user-friendly solutions that prioritize clarity, usability, and seamless experiences for all users.",
    image: "/simplicity.png",
  },
  {
    id: 2,
    title: "Critical thinking",
    description:
      "Every challenge is met with strategic analysis, problem-solving expertise, and innovative approaches to deliver the best results.",
    image: "/criticalthinking.png",
  },
  {
    id: 3,
    title: "EFFECTIVENESS & EFFICIENCY",
    description:
      "Our solutions are designed to maximize performance, optimize workflows, and ensure seamless execution with minimal resources.",
    image: "/effectiveness.png",
  },
  {
    id: 4,
    title: "security",
    description:
      "We implement top-tier security measures, protecting data, applications, and infrastructure from threats while ensuring reliability and trust.",
    image: "/security.png",
  },
];

export default function Home() {
  const { theme } = useTheme();
  const members = [
    {
      id: 1,
      name: "Sandeep",
      company: "GameZone",
      testimonial:
        "Their team was exceptional, offering innovative solutions that exceeded our expectations. We were impressed with their professionalism and commitment to delivering high-quality work on time and within budget. Highly recommended!",
      img: client1,
    },
    {
      id: 2,
      name: "Sudeep",
      company: "Quizpay",
      testimonial:
        "From start to finish, they provided incredible service. Their attention to detail, communication, and expertise made the entire process seamless. The final result was outstanding, and we couldn’t be happier.",
      img: client2,
    },
    {
      id: 3,
      name: "Manish Patel",
      company: "Core Tech",
      testimonial:
        "We were blown away by their efficiency and creativity. They not only met our needs but went above and beyond to ensure our project was a success. Truly a pleasure to work with.",
      img: client3,
    },
    {
      id: 4,
      name: "Ellyse Perry ",
      company: "hitech software",
      testimonial:
        "The team was amazing! Their expertise, attention to detail, and consistent communication made our project run smoothly. They delivered exceptional results that completely transformed our business. Highly professional and trustworthy.",
      img: client4,
    },
    {
      id: 5,
      name: "Peter",
      company: "IT Tech",
      testimonial:
        "A reliable and dedicated team that delivered results beyond our expectations. Their proactive approach and willingness to go the extra mile made a significant difference in the success of our project.",
      img: client5,
    },
    {
      id: 6,
      name: "Allena Smith",
      company: "Royal Path",
      testimonial:
        "Working with them was a fantastic experience. They understood our needs, provided timely feedback, and delivered an outstanding result. Their professionalism and commitment to excellence are truly commendable.",
      img: client6,
    },
    {
      id: 7,
      name: "Sundar",
      company: "Vinayak Info",
      testimonial:
        "They exceeded all our expectations with their exceptional service and technical expertise. Every step of the project was handled efficiently, and the outcome was flawless. We're so grateful for their hard work.",
      img: client7,
    },
  ];
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = (id: number) => {
    setHoveredMember(id);
  };

  const handleMouseLeave = () => {
    setHoveredMember(null);
  };

  const bgDark = {
    backgroundImage: "url(/dark.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const bgLight = {
    backgroundImage: "url(/Background_Light_home.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const modalContent = {
    title: "About Hit-N-Hammer Company",
    content: `At Hit-N-Hammer, we excel in delivering cutting-edge digital solutions. Our expertise includes web and app development, interactive game creation, sleek frontend development with React, intuitive UI/UX design, and custom template designing. We also offer reliable server management and high-performance hosting solutions. Driven by innovation and a passion for technology, we empower startups and enterprises alike to bring their digital visions to life with tailored, scalable solutions.`,
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
    >
      <div className="container w-full mx-auto space-y-32">
        <HeroSection />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <Image
            data-aos="fade-up"
            data-aos-duration="1200"
            src="/who-we-are.png"
            width={555}
            height={380}
            alt="who we are"
            className="md:w-[555px] w-full"
          />
          <div className="flex flex-col gap-2">
            <span
              className="uppercase text-primary text-2xl font-medium border-b-2 border-dashed dark:border-[#FFFFFF] border-[#9D80FF] pb-1 w-fit md:text-start text-center "
              data-aos="fade-up"
              data-aos-duration="500"
            >
              who we are
            </span>
            <h3
              className="font-serif font-bold text-[40px]"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              HIT-N-HAMMER COMPANY
            </h3>
            <p
              className="dark:text-[#B7B0B0] text-[#717070] leading-9 text-xl"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              At Hit-N-Hammer, we&apos;re not just an IT company—we&apos;re a
              team of passionate innovators and digital craftsmen committed to
              transforming ideas into powerful digital solutions. From dynamic
              websites <span>🌐</span> and mobile apps <span>📱</span> to
              immersive games and cutting-edge UI/UX designs <span>🎨</span>, we
              bring creativity and technology together to deliver exceptional
              results.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="capitalize bg-primary w-fit px-8 py-3 rounded-xl mt-8 font-semibold text-white hover:scale-105 duration-300"
            >
              Read more
            </button>
          </div>
        </div>

        <section id="servicesSection" className="container">
          <div className="servicesContainer ">
            <div className="servicesHeading gap-2">
              <span
                className="uppercase text-primary text-2xl font-medium  border-b-2 border-dashed dark:border-[#FFFFFF] border-[#9D80FF]
              pb-1 w-fit"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                OUR SERVICES
              </span>
              <h3
                className="uppercase font-serif dark:text-[#ffffff] text-[#171616] font-bold text-[40px]"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                HIT-N-HAMMER SERVICES
              </h3>
              <p
                className="leading-9 dark:text-[#B7B0B0] text-[#717070] text-lg"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                Technologies Design And Web Development, Mobile Apps, Web Apps,
                Game Developing.
              </p>
            </div>

            <ul className="honeycomb grid gap-y-24 xl:gap-y-6 md:gap-x-6">
              <li
                className={`honeycomb-cell ${
                  theme === "light" ? "honeycomb-cell-light" : ""
                }`}
                data-aos="zoom-out-up"
                data-aos-duration="200"
              >
                <div className="honeycomb-cell_title gap-y-3">
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

                  <div className="space-y-5 mt-10 ml-6">
                    <h2 className="dark:text-[#FFFFFF] text-[#171616]">
                      App <br /> Development
                    </h2>
                    <p className="dark:text-[#B7B0B0] text-[#717070]">
                      Creating high-performance, user-friendly mobile apps
                      tailored for iOS and Android platforms.
                    </p>
                  </div>
                </div>
              </li>
              <li
                className={`honeycomb-cell  ${
                  theme === "light" ? "honeycomb-cell-light" : ""
                }`}
                data-aos="zoom-out-up"
                data-aos-duration="300"
              >
                {/* <img className="honeycomb-cell_img" src="img/work-2.jpg"> */}
                <div className="honeycomb-cell_title gap-y-3">
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

                  <div className="ml-6 space-y-5 mt-10">
                    <h2 className="dark:text-[#FFFFFF] text-[#171616]">
                      WEB <br /> Development
                    </h2>
                    <p className="dark:text-[#B7B0B0] text-[#717070]">
                      Building responsive, scalable, and feature-rich websites
                      optimized for performance and user experience.
                    </p>
                  </div>
                </div>
              </li>
              <li
                className={`honeycomb-cell  ${
                  theme === "light" ? "honeycomb-cell-light" : ""
                }`}
                data-aos="zoom-out-up"
                data-aos-duration="400"
              >
                {/* <img className="honeycomb-cell_img" src="img/Work3.jpg"> */}
                <div className="honeycomb-cell_title gap-y-3">
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

                  <div className="ml-6 space-y-5 mt-10">
                    <h2 className="dark:text-[#FFFFFF] text-[#171616]">
                      UI/UX
                      <br /> DESIGN
                    </h2>
                    <p className="dark:text-[#B7B0B0] text-[#717070]">
                      Designing visually stunning, intuitive interfaces that
                      enhance user engagement and satisfaction.
                    </p>
                  </div>
                </div>
              </li>
              <li
                className={`honeycomb-cell  ${
                  theme === "light" ? "honeycomb-cell-light" : ""
                }`}
                data-aos="zoom-out-up"
                data-aos-duration="500"
              >
                <div className="honeycomb-cell_title gap-y-3">
                  <svg
                    className="icon"
                    style={{ top: "-48px", left: "113px" }}
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Guides" />
                    <g id="_x32_0" />
                    <g id="_x31_9" />
                    <g id="_x31_8" />
                    <g id="_x31_7" />
                    <g id="_x31_6" />
                    <g id="_x31_5" />
                    <g id="_x31_4" />
                    <g id="_x31_3" />
                    <g id="_x31_2" />
                    <g id="_x31_1" />
                    <g id="_x31_0" />
                    <g id="_x30_9" />
                    <g id="_x30_8" />
                    <g id="_x30_7" />
                    <g id="_x30_6" />
                    <g id="_x30_5" />
                    <g id="_x30_4" />
                    <g id="_x30_3">
                      <circle cx="25" cy="5" r="3" />
                      <path d="m26 8h-1-1c-2.2091389 0-4 1.7908611-4 4v1c0 .5522852.4477158 1 1 1h8c.5522842 0 1-.4477148 1-1v-1c0-2.2091389-1.7908611-4-4-4z" />
                      <path d="m16 2h-11c-1.6542969 0-3 1.3457031-3 3v5c0 1.6542969 1.3457031 3 3 3h5.5859375l2.7070313 2.7070313c.1914062.1914062.4467773.2929687.7070312.2929687.1289063 0 .2587891-.0249023.3828125-.0761719.3735352-.1547851.6171875-.5195312.6171875-.9238281v-2h1c1.6542969 0 3-1.3457031 3-3v-5c0-1.6542969-1.3457031-3-3-3zm-8.1464844 8.1464844c.1953125.1953125.1953125.5117188 0 .7070313-.0976562.0976562-.2255859.1464843-.3535156.1464843s-.2558594-.0488281-.3535156-.1464844l-3-3c-.1953125-.1953125-.1953125-.5117188 0-.7070313l3-3c.1953125-.1953125.5117188-.1953125.7070313 0s.1953125.5117188 0 .7070313l-2.6464844 2.6464844zm4.1205445-5.4879761-2 6c-.0698242.2094727-.2646484.3417969-.4741211.3417969-.0522461 0-.1054688-.0083008-.1582031-.0258789-.2617188-.0869141-.4033203-.3701172-.315918-.6323242l2-6c.0874023-.2617188.3691406-.4042969.6323242-.315918.2617187.086914.4033203.3701172.315918.6323242zm4.8794555 3.1950073-3 3c-.0976562.0976563-.2255859.1464844-.3535156.1464844s-.2558594-.0488281-.3535156-.1464844c-.1953125-.1953125-.1953125-.5117188 0-.7070313l2.6464844-2.6464843-2.6464844-2.6464844c-.1953125-.1953125-.1953125-.5117188 0-.7070313s.5117188-.1953125.7070313 0l3 3c.1953124.1953126.1953124.5117188-.0000001.7070313z" />
                      <path d="m25 15h-3.3642578c-.6772461 0-1.3134766.2636719-1.7924805.7426758l-1.1005859 1.1005859c-.1010742.1010742-.2353516.1567383-.378418.1567383h-4.7285156c-.1430664 0-.2773438-.0556641-.378418-.1567383l-1.1005859-1.1005859c-.4790039-.4790039-1.1152344-.7426758-1.7924805-.7426758h-3.3642578c-2.9467773 0-5 4.2163086-5 8 0 3.925293 2.1962891 7 5 7 2.0458984 0 3.8212891-2.0166016 4.3168945-4 .2412109-.9599609 1.1005859-2 2.0898438-2h5.1865234c.9892578 0 1.8486328 1.0410156 2.0893555 2 .4960937 1.984375 2.2714844 4 4.3173828 4 2.8037109 0 5-3.074707 5-7 0-3.7836914-2.0532227-8-5-8zm-15.5 6h-1.5v1.5c0 .2763672-.2236328.5-.5.5s-.5-.2236328-.5-.5v-1.5h-1.5c-.2763672 0-.5-.2236328-.5-.5s.2236328-.5.5-.5h1.5v-1.5c0-.2763672.2236328-.5.5-.5s.5.2236328.5.5v1.5h1.5c.2763672 0 .5.2236328.5.5s-.2236328.5-.5.5zm14.5-4c.5514526 0 1 .4485474 1 1s-.4485474 1-1 1-1-.4485474-1-1 .4485474-1 1-1zm-2 4c-.5513916 0-1-.4485474-1-1s.4486084-1 1-1c.5514526 0 1 .4485474 1 1s-.4485474 1-1 1zm2 2c-.5514526 0-1-.4485474-1-1s.4485474-1 1-1 1 .4485474 1 1-.4485474 1-1 1zm2-2c-.5514526 0-1-.4485474-1-1s.4485474-1 1-1 1 .4485474 1 1-.4485474 1-1 1z" />
                    </g>
                    <g id="_x30_2" />
                    <g id="_x30_1" />
                  </svg>

                  <div className="ml-6 space-y-5 mt-10">
                    <h2 className="dark:text-[#FFFFFF] text-[#171616]">
                      Game
                      <br /> development
                    </h2>
                    <p className="dark:text-[#B7B0B0] text-[#717070]">
                      Developing immersive, interactive games with cutting-edge
                      graphics and seamless gameplay experiences.
                    </p>
                  </div>
                </div>
              </li>

              <li className="honeycomb-cell honeycomb_Hidden"></li>

              <li
                className={`honeycomb-cell  ${
                  theme === "light" ? "honeycomb-cell-light" : ""
                }`}
                data-aos="zoom-out-up"
                data-aos-duration="600"
              >
                {/* <img className="honeycomb-cell_img" src="img/work5.jpg"> */}
                <div className="honeycomb-cell_title gap-y-3">
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

                  <div className="ml-6 space-y-5 mt-10">
                    <h2 className="dark:text-[#FFFFFF] text-[#171616]">
                      BUSINESS
                      <br /> SOLUTION
                    </h2>
                    <p className="dark:text-[#B7B0B0] text-[#717070]">
                      Delivering smart, scalable solutions to streamline
                      operations and drive business growth.
                    </p>
                  </div>
                </div>
              </li>
              <li
                className={`honeycomb-cell ${
                  theme === "light" ? "honeycomb-cell-light" : ""
                }`}
                data-aos="zoom-out-up"
                data-aos-duration="700"
              >
                {/* <img className="honeycomb-cell_img" src="img/work06.jpg"> */}
                <div className="honeycomb-cell_title gap-y-3">
                  <svg
                    className="icon"
                    style={{ top: "-52px", left: "114px" }}
                    width="36"
                    height="39"
                    viewBox="0 0 36 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      width="100%"
                      height="100%"
                      transform="matrix(1,0,0,1,0,0)"
                    >
                      <g id="_x31_2">
                        <path
                          d="m23 24h-14c-1.1045532 0-2 .8953857-2 2v2c0 1.1045532.8954468 2 2 2h14c1.1045532 0 2-.8954468 2-2v-2c0-1.1046143-.8954468-2-2-2zm-8.5 3.5h-5c-.2763672 0-.5-.2236328-.5-.5s.2236328-.5.5-.5h5c.2763672 0 .5.2236328.5.5s-.2236328.5-.5.5zm4.5.5c-.5523071 0-1-.4476929-1-1s.4476929-1 1-1 1 .4476929 1 1-.4476929 1-1 1zm3 0c-.5523071 0-1-.4476929-1-1s.4476929-1 1-1 1 .4476929 1 1-.4476929 1-1 1z"
                          fill-opacity="1"
                          stroke="none"
                          stroke-opacity="1"
                        />
                        <path
                          d="m23 17h-14c-1.1045532 0-2 .8953857-2 2v2c0 1.1045532.8954468 2 2 2h14c1.1045532 0 2-.8954468 2-2v-2c0-1.1046143-.8954468-2-2-2zm-8.5 3.5h-5c-.2763672 0-.5-.2236328-.5-.5s.2236328-.5.5-.5h5c.2763672 0 .5.2236328.5.5s-.2236328.5-.5.5zm4.5.5c-.5523071 0-1-.4476929-1-1s.4476929-1 1-1 1 .4476929 1 1-.4476929 1-1 1zm3 0c-.5523071 0-1-.4476929-1-1s.4476929-1 1-1 1 .4476929 1 1-.4476929 1-1 1z"
                          fill-opacity="1"
                          stroke="none"
                          stroke-opacity="1"
                        />
                        <path
                          d="m24 7c-.4321899 0-.8528442.0479126-1.2590942.1347046-.8173829-2.9590454-3.5219117-5.1347046-6.7409058-5.1347046s-5.9235229 2.1756592-6.7409058 5.1347046c-.40625-.086792-.8269043-.1347046-1.2590942-.1347046-3.3137207 0-6 2.6862793-6 6 0 2.6240845 1.6873169 4.848877 4.0339966 5.6636963.1696167-1.4945068 1.4268799-2.6636963 2.9660034-2.6636963h4v-4h-2.050415c-.2316895 1.1410522-1.2401123 2-2.449585 2-1.3807373 0-2.5-1.1193237-2.5-2.5 0-1.3807373 1.1192627-2.5 2.5-2.5 1.2094727 0 2.2178955.8588867 2.449585 2h2.050415c.5523071 0 1 .4476929 1 1v4h4v-4c0-.5523071.4476929-1 1-1h2.050415c.2316895-1.1411133 1.2401123-2 2.449585-2 1.3807373 0 2.5 1.1192627 2.5 2.5 0 1.3806763-1.1192627 2.5-2.5 2.5-1.2094727 0-2.2178955-.8589478-2.449585-2h-2.050415v4h4c1.5391235 0 2.7963867 1.1691895 2.9660034 2.6636963 2.3466797-.8148193 4.0339966-3.0396118 4.0339966-5.6636963 0-3.3137207-2.6862793-6-6-6z"
                          fill-opacity="1"
                          stroke="none"
                          stroke-opacity="1"
                        />
                      </g>
                    </g>
                  </svg>

                  <div className="ml-6 space-y-5 mt-10">
                    <h2 className="dark:text-[#FFFFFF] text-[#171616]">
                      Hosting
                      <br /> services
                    </h2>
                    <p className="dark:text-[#B7B0B0] text-[#717070]">
                      Providing secure, reliable, and high-speed hosting
                      solutions for websites and applications.
                    </p>
                  </div>
                </div>
              </li>
              <li
                className={`honeycomb-cell ${
                  theme === "light" ? "honeycomb-cell-light" : ""
                }`}
                data-aos="zoom-out-up"
                data-aos-duration="800"
              >
                {/* <img className="honeycomb-cell_img" src="img/work07.jpg"> */}
                <div className="honeycomb-cell_title gap-y-3">
                  <svg
                    className="icon"
                    style={{ top: "-52px", left: "110px" }}
                    width="39"
                    height="36"
                    viewBox="0 0 39 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g>
                        <path d="m6.737 13.15h5.819v10.688h-5.819z" />
                      </g>
                      <g>
                        <path d="m14.456 13.15h10.807v3.443h-10.807z" />
                      </g>
                      <g>
                        <path d="m14.456 18.494h10.807v5.344h-10.807z" />
                      </g>
                      <g>
                        <path d="m26.213 3.294h-20.426c-2.095 0-3.8 1.705-3.8 3.8v17.813c0 2.096 1.705 3.8 3.8 3.8h20.426c2.095 0 3.8-1.704 3.8-3.8v-17.813c0-2.095-1.705-3.8-3.8-3.8zm-11.833 2.457c.676 0 1.224.548 1.224 1.224 0 .677-.548 1.225-1.224 1.225-.677 0-1.225-.548-1.225-1.225 0-.676.548-1.224 1.225-1.224zm-4.04 0c.676 0 1.224.548 1.224 1.224 0 .677-.548 1.225-1.224 1.225-.677 0-1.225-.548-1.225-1.225 0-.676.548-1.224 1.225-1.224zm-4.04 0c.676 0 1.225.548 1.225 1.224 0 .677-.549 1.225-1.225 1.225-.677 0-1.225-.548-1.225-1.225 0-.676.548-1.224 1.225-1.224zm21.812 19.155c0 1.048-.852 1.9-1.899 1.9h-20.426c-1.048 0-1.899-.853-1.899-1.9v-14.25h24.225v14.25z" />
                      </g>
                    </g>
                  </svg>

                  <div className="ml-6 space-y-5 mt-10">
                    <h2 className="dark:text-[#FFFFFF] text-[#171616]">
                      Template
                      <br /> designing
                    </h2>
                    <p className="dark:text-[#B7B0B0] text-[#717070]">
                      Crafting professional, customizable templates to
                      accelerate development while maintaining high quality.
                    </p>
                  </div>
                </div>
              </li>
              <li className="honeycomb-cell honeycomb_Hidden"></li>
            </ul>
          </div>
        </section>

        <div className="flex md:flex-row flex-col-reverse items-center justify-items-center gap-4 md:pt-32">
          <div>
            <h3
              className="capitalize text-primary font-serif font-bold sm:text-5xl text-4xl"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="500"
            >
              over 50+ client projects completed
            </h3>
            <p
              className=" mt-7 text-xl"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              At Hit-N-Hammer, client satisfaction is at the heart of everything
              we do. With over 50 successful projects delivered across various
              industries, we&apos;ve earned the trust of startups, small
              businesses, and large enterprises alike. Each project is a
              testament to our commitment to quality, innovation, and
              excellence. Our growing list of happy clients reflects our ability
              to adapt, deliver, and exceed expectations—no matter the
              challenge. Let us turn your next big idea into a digital success
              story.
            </p>
          </div>
          <Image
            // src="/Group-87.svg"
            src={theme === "dark" ? "IMAGE_122.svg" : "IMAGE_LIGHTE.svg"}
            width={500}
            height={500}
            alt="stats"
            className="sm:w-2/4 w-full"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          />
        </div>
        <div className="relative z-10 md:pt-32">
          <h3
            className="font-serif text-primary font-bold text-4xl md:text-5xl text-center border-b-2 border-dashed dark:border-[#FFFFFF] border-[#9D80FF] uppercase w-fit mx-auto"
            data-aos="fade-up-right"
          >
            methodology
          </h3>
          <div className="mt-[150px] grid lg:grid-cols-4 md:grid-rows-1 sm:grid-cols-2 grid-cols-1 sm:grid-rows-2 grid-rows-4 gap-x-4 lg:gap-y-0 gap-y-28">
            {methodologies.map((meth, idx) => {
              return (
                <div
                  key={idx}
                  className="text-center bg-[#8B68FF06] px-6 pb-6 pt-[100px] rounded-[20px] border-2 border-primary shadow-[0px_0px_6px_#8B68FF80] flex flex-col items-center justify-start relative hover:scale-105 duration-150"
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                >
                  <div className="absolute mx-auto -top-[70px] ">
                    <Image
                      src={meth.image}
                      alt="icons"
                      width={150}
                      height={150}
                      priority
                    />
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
        <div className="md:pt-32 gap-3">
          <p
            className="text-primary text-2xl font-medium capitalize text-center border-b-2 dark:border-[#FFFFFF] border-[#9D80FF] border-dashed w-fit mx-auto pb-1"
            data-aos="zoom-in-left"
            data-aos-duration="300"
          >
            hire us
          </p>
          <h3
            className="uppercase font-serif dark:text-[#ffffff] text-black font-bold text-2xl md:text-4xl text-center mt-4"
            data-aos="zoom-in-right"
            data-aos-duration="400"
          >
            HIRE ON-DEMAND DEVELOPERS
          </h3>
          <p
            className="text-lg mt-4 text-center max-w-screen-lg mx-auto dark:text-[#B7B0B0] text-[#717070]"
            data-aos="zoom-out"
            data-aos-duration="500"
          >
            Do you want to hire an on-demand mobile app developer for a specific
            site? We provide on-demand developers a variety of technologies such
            as iOS, Android, Unity, PHP On-Demand.
          </p>
          <div className="mt-20 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mx-auto">
            {developers.map((develoer, idx) => {
              return (
                <div
                  key={idx}
                  className="border-2 dark:bg-[#241653] border-primary rounded-tl-3xl rounded-br-3xl px-4 py-4 bg-[#ececec]"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
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
                    <button className="bg-primary text-white rounded-xl lg:px-4 lg:py-2 font-semibold">
                      <a
                        href={`/contact?developer=${encodeURIComponent(
                          develoer.name
                        )}&type=${encodeURIComponent(
                          develoer.name.split(" ")[0]
                        )}`}
                      >
                        Hire now
                      </a>
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
        <div className="md:pt-32">
          <p
            className="text-primary text-2xl font-medium text-center border-b-2 dark:border-[#FFFFFF] border-[#9D80FF] border-dashed w-fit mx-auto uppercase pb-1"
            data-aos="zoom-out-down"
          >
            why
          </p>
          <h3
            className="uppercase font-serif text-black dark:text-[#FFFFFF] font-bold sm:text-4xl text-3xl text-center mt-4"
            data-aos="zoom-out-up"
          >
            the hit-n-hammer
          </h3>
          <div className="flex md:flex-row flex-col items-center justify-center gap-24 mt-14">
            <div className="text-center" data-aos="zoom-out-right">
              <div className="mx-auto flex items-center justify-center mb-3">
                <Image
                  src={
                    theme === "dark"
                      ? "Discover_dark.svg"
                      : "Discover_lighte.svg"
                  }
                  width={154}
                  height={154}
                  alt="discover"
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-4xl font-semibold uppercase">discover</h4>
                <p className="dark:text-[#B7B0B0] text-[#717070] max-w-xs">
                  We analyze ideas, research trends, and identify innovative
                  solutions to meet unique business needs.
                </p>
              </div>
            </div>
            <div className="text-center" data-aos="zoom-out-left">
              <div className="mx-auto flex items-center justify-center mb-3">
                <Image
                  src={
                    theme === "dark" ? "Design-dark.svg" : "Design_lighte.svg"
                  }
                  width={154}
                  height={154}
                  alt="design"
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-4xl font-semibold uppercase">design</h4>
                <p className="dark:text-[#B7B0B0] text-[#717070] max-w-xs">
                  Crafting intuitive, aesthetically pleasing, and user-centric
                  experiences that blend creativity with functionality.
                </p>
              </div>
            </div>
            <div className="text-center" data-aos="zoom-out">
              <div className="mx-auto flex items-center justify-center mb-3">
                <Image
                  src={
                    /* theme === "dark" ? "Deliver-dark.svg" : "Deliver_lighte.svg" */
                    theme === "dark"
                      ? "rocket_icon_dark.svg"
                      : "rocket_icon_light.svg"
                  }
                  width={154}
                  height={154}
                  alt="deliver"
                />
              </div>
              <div className="space-y-4">
                <h4 className="text-4xl font-semibold uppercase">deliver</h4>
                <p className="dark:text-[#B7B0B0] text-[#717070] max-w-xs">
                  Turning concepts into reality with high-quality, efficient,
                  and scalable solutions that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:pt-32 container">
          <section id="testimonialSection1">
            <div className="testimonialContainer1">
              <div className="testimonialTitle1">
                <p
                  className="font-serif text-primary border-b-2 dark:border-[#FFFFFF] border-[#9D80FF] border-dashed"
                  data-aos="zoom-out-down"
                >
                  CLIENTS TESTIMONIAL
                </p>
                <h1
                  className="uppercase font-serif dark:text-[#FFFFFF] text-[#171616] font-bold sm:text-4xl text-3xl text-center mt-4"
                  data-aos="zoom-out-up"
                >
                  WHAT OUR CLIENTS ARE SAYING
                </h1>
              </div>

              <div className="clientImgsContainer ">
                <ul className="honeycomb1 grid gap-y-20 xl:gap-y-3">
                  {members.map((member) => (
                    <li
                      key={member.id}
                      className={`honeycomb-cell1 honeycomb-cell-client1 ${
                        hoveredMember === member.id ? "transform" : ""
                      }`}
                      onMouseEnter={() => handleMouseEnter(member.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Image
                        className="honeycomb-cell_img1 object-cover"
                        src={member.img}
                        alt={member.name}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="doubleQuotes1">
                <Image
                  src={theme === "dark" ? doubleQuotesDark : doubleQuoteLight}
                  alt="doubleQuotes"
                  className="mx-auto mt-36"
                />

                {members.map((member) => (
                  <div
                    key={member.id}
                    className="hoveredContent mt-8"
                    style={{
                      display: hoveredMember === member.id ? "block" : "none",
                    }}
                  >
                    <p className="dark:text-[#B7B0B0]">{member.testimonial}</p>
                    <h3 className="text-[#8B68FF]">{member.name}</h3>
                    <h5 className="dark:text-[#FFFFFF]">{member.company}</h5>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="flex flex-col items-center">
          <h3
            className="text-primary text-[40px] md:mt-20 font-bold text-center border-b-2 dark:border-[#FFFFFF] border-[#9D80FF] border-dashed w-fit mx-auto uppercase font-serif"
            data-aos="zoom-in-up"
          >
            get in touch
          </h3>
          <p
            className="mt-11 text-center dark:text-[#B7B0B0] text-[#717070] max-w-[1093px] text-xl font-normal mx-auto"
            data-aos="zoom-in-down"
          >
            Have a project in mind? Let’s build something amazing together!
            Contact Hit-N-Hammer for expert solutions in web, app, and game
            development. We’re ready to bring your ideas to life! 🚀
          </p>
          {/* <button
            className="mt-12 uppercase px-8 py-2 border bg-primary border-[#927DFA] rounded-xl text-white transform transition-transform duration-300 hover:scale-105"
            data-aos="zoom-out-up"
          >
            Contact Us
          </button> */}
          <button className="bg-primary hover:scale-105 mt-12 uppercase px-8 py-2 rounded-xl text-white duration-300 font-semibold text-base">
            Contact Us
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </div>
  );
}
