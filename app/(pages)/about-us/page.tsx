"use client";
import { useTheme } from "@/app/components/context/themeContext";
import "./page.css";
import Image from "next/image";

// import teamMember1 from "../../../public/18155.jpg";
import teamMember1 from "../../../public/team-member-6.png";
import teamMember2 from "../../../public/team-member-3.png";
import teamMember3 from "../../../public/team-member-5.png";
import teamMember4 from "../../../public/team-member-2.png";
import teamMember5 from "../../../public/team-member-8.png";
import teamMember6 from "../../../public/team-member-4.png";
import teamMember7 from "../../../public/team-member-7.png";
import teamMember8 from "../../../public/executive-business-woman-office.jpg";
import { useState } from "react";


const principles = [
  {
    id: 1,
    title: "INNOVATION",
    description:
      "We constantly strive to bring innovative IT solutions that revolutionize the way businesses operate.",
    icon: "/innovation-icon.png",
    iconWidth: 131,
    iconHeight: 92,
  },
  {
    id: 2,
    title: "OUR EXPERTIES",
    description:
      "We specialize in web development, software development, and mobile app development. Our team of experts has extensive experience in working with various technologies such as AI, PHP, Python, C#, JavaScript, HTML, CSS, Microsoft Technologies and more.",
    icon: "/experties-icon.png",
    iconWidth: 95,
    iconHeight: 95,
  },
  {
    id: 3,
    title: "OUR CLIENTS",
    description:
      "We constantly strive to bring innovative IT solutions that revolutionize the way businesses operate.",
    icon: "/our-clients-icon.png",
    iconWidth: 110,
    iconHeight: 78,
  },
];



export default function AboutUs() {
  const { theme } = useTheme();
  const [hoveredMember, setHoveredMember] = useState(1);

  const bgDark = {
    backgroundImage: "url(/Home-page-dark.svg)",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  const bgLight = {
    backgroundImage: "url(/Home-page-light.svg)",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  


const members = [
  {
    id: 1,
    name: "John Smith",
    designation: "CEO",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    img: teamMember1,
  },
  {
    id: 2,
    name: "Alexa ",
    designation: "Founder",
    details:
      "It looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    img: teamMember2,
  },
  {
    id: 3,
    name: "Vipin",
    designation: "Software Engineer",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout distracted by the readable content of a page when looking at its layout. ",
    img: teamMember3,
  },
  {
    id: 4,
    name: "Ellyse Perry ",
    designation: "UI/UX Designer",
    details:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    img: teamMember4,
  },
  {
    id: 5,
    name: "Peter",
    designation: "Quality Assurance Analyst",
    details:
      "It is a long established fact that a reader will be distract The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters normal distribution of letters..",
    img: teamMember5,
  },
  {
    id: 6,
    name: "Allena Smith",
    designation: "Web Developer",
    details:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout distracted by the readable content of a page when looking at its layout. ",
    img: teamMember6,
  },
  {
    id: 7,
    name: "Sundar",
    designation: "Systems Analyst",
    details:
      "that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    img: teamMember7,
  },
  {
    id: 8,
    name: "Sundar",
    designation: "Network Engineer",
    details:
      "that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    img: teamMember8,
  },
  // Add other members here...
];

    const handleMouseEnter = (id: number) => {
      setHoveredMember(id);
    };

    const handleMouseLeave = () => {
      setHoveredMember(hoveredMember);
    };

  return (
    <div
      className="dark:text-white dark:bg-[#170C3F] md:pb-32"
      style={theme === "dark" ? bgDark : bgLight}
    >
      <div className="pt-[250px] container max-w-[1320px] space-y-32">
        <div className="flex md:flex-row flex-col gap-16 items-center">
          <Image
            src="/about-hero.png"
            width={650}
            height={294}
            className="md:w-[650px] w-full"
            alt="about us"
          />
          <div>
            <h3 className="font-serif text-8xl borderFont">
              <span
                className={
                  theme === "dark" ? "text-gradient" : "text-gradient1"
                }
              >
                Ab
              </span>
              <span>out Us</span>
            </h3>
            <p className="text-xl dark:text-[#E1E0E0] text-[#717070] mt-5">
              Hit-N-Hammer is a leading provider of technology solutions for
              businesses. With a focus on delivering the highest quality
              products and services, we help businesses harness the power of
              technology to achieve their goals. Our team of experts is
              dedicated to driving innovation and delivering results that exceed
              our clients&apos; expectations.
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-serif text-primary font-bold text-3xl md:text-5xl text-center border-b-2 border-dashed border-white uppercase w-fit mx-auto">
            OUR PRINCIPLES
          </h3>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 items-center justify-items-center gap-10 mt-20">
            {principles.map((principle, idx) => {
              return (
                <div
                  className="border border-[#8B68FF40] p-10 h-full flex flex-col justify-start items-center rounded-tr-3xl rounded-bl-3xl shadow-[0px_0px_6px_#8B68FF80]"
                  key={idx}
                >
                  <h5 className="text-3xl font-bold uppercase text-center justify-center text-[#7049EE] dark:text-white">
                    {principle.title}
                  </h5>
                  <Image
                    className="mt-3"
                    src={principle.icon}
                    alt={principle.title}
                    height={principle.iconHeight}
                    width={principle.iconWidth}
                  />
                  <p className="text-center dark:text-[#B7B0B0] text-[#717070] mt-4">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse items-start justify-between gap-24 max-w-[968px] mx-auto">
          <div className="">
            <h3 className="font-serif text-primary font-bold text-3xl border-b-2 border-dashed border-white uppercase w-fit">
              OUR MISSION
            </h3>
            <p className="dark:text-[#B7B0B0] text-[#717070] mt-3 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
            <div className="grid grid-cols-2 mt-10 gap-5">
              <div className="py-4 border border-primary text-center rounded-xl  shadow-[0px_0px_6.9px_0.5px_#AD94FE70]">
                <p className="font-semibold uppercase">innovation</p>
              </div>
              <div className="py-4 border border-primary text-center rounded-xl  shadow-[0px_0px_6.9px_0.5px_#AD94FE70]">
                <p className="font-semibold uppercase">CLIENT-CENTRICK</p>
              </div>
              <div className="py-4 border border-primary text-center rounded-xl  shadow-[0px_0px_6.9px_0.5px_#AD94FE70]">
                <p className="font-semibold uppercase break-all">
                  COLLABORATION
                </p>
              </div>
              <div className="py-4 border border-primary text-center rounded-xl  shadow-[0px_0px_6.9px_0.5px_#AD94FE70]">
                <p className="font-semibold uppercase">ETHICAL</p>
              </div>
            </div>
          </div>
          <Image
            src="/our-mission.png"
            width={450}
            height={390}
            alt="our mission"
            className="md:w-[450px] w-full"
          />
        </div>
        <div className="flex md:flex-row flex-col items-start justify-between gap-24 max-w-[968px] mx-auto">
          <Image
            src="/our-vision.png"
            width={450}
            height={390}
            alt="our mission"
            className="md:w-[450px] w-full"
          />
          <div className="">
            <h3 className="font-serif text-primary font-bold text-3xl border-b-2 border-dashed border-white uppercase w-fit">
              OUR VISION
            </h3>
            <p className="dark:text-[#B7B0B0] text-[#717070] mt-3 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s
            </p>
            <div className="grid grid-cols-2 mt-10 gap-5">
              <div className="py-4 border border-primary text-center rounded-xl  shadow-[0px_0px_6.9px_0.5px_#AD94FE70]">
                <p className="font-semibold uppercase">EXCELLENCE</p>
              </div>
              <div className="py-4 border border-primary text-center rounded-xl  shadow-[0px_0px_6.9px_0.5px_#AD94FE70]">
                <p className="font-semibold uppercase">EFFICIENCY</p>
              </div>
              <div className="py-4 border border-primary text-center rounded-xl  shadow-[0px_0px_6.9px_0.5px_#AD94FE70]">
                <p className="font-semibold uppercase">GLOBAL</p>
              </div>
              <div className="py-4 border border-primary text-center rounded-xl  shadow-[0px_0px_6.9px_0.5px_#AD94FE70]">
                <p className="font-semibold uppercase break-all">
                  SUSTAINABILITY
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:block hidden">
          <h3 className="font-serif text-primary font-bold text-5xl text-center border-b-2 border-dashed border-white uppercase w-fit mx-auto">
            Meet the best team ever
          </h3>
          <div className="mt-14 space-y-12">
            <div className="flex items-end justify-center gap-12">
              <div className="">
                <Image
                  src={teamMember1}
                  // width={165}
                  // height={120}
                  width={163}
                  height={119}
                  alt="team member"
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                  className={hoveredMember === 1 ? "imgTransform" : ""}
                />
              </div>
              <div>
                <Image
                  src={teamMember2}
                  width={232}
                  height={170}
                  alt="team member"
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                  className={hoveredMember === 2 ? "imgTransform" : ""}
                />
              </div>
              <div>
                <Image
                  src={teamMember3}
                  width={163}
                  height={119}
                  alt="team member"
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                  className={hoveredMember === 3 ? "imgTransform" : ""}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-12">
              <div>
                <Image
                  src={teamMember8}
                  width={232}
                  height={170}
                  alt="team member"
                  onMouseEnter={() => handleMouseEnter(8)}
                  onMouseLeave={handleMouseLeave}
                  className={hoveredMember === 8 ? "imgTransform" : ""}
                />
              </div>
              {/* <div className="bg-white/10 border border-primary rounded-3xl px-6 py-4 flex flex-col items-center justify-center max-w-[590px]">
                <h5 className="font-serif text-primary font-bold text-xl border-b-2 border-dashed border-white uppercase w-fit">
                  OUR VISION
                </h5>
                <p className="mt-[3px]">Founder</p>
                <p className="text-xs font-light text-[#717070] text-center mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
              </div> */}

              {members.map((member) => (
                <div
                  key={member.id}
                  className={`aboutMember ${
                    theme === "dark" ? "changeShadow" : ""
                  }`}
                  style={{
                    display: hoveredMember === member.id ? "block" : "none",
                  }}
                >
                  <div className="memberName">
                    <h2
                      className={`mb-0 ${
                        theme === "dark" ? "text-[#8B68FF]" : "text-[#8B68FF]"
                      }`}
                    >
                      {member.name}
                    </h2>
                  </div>
                  <h6 className={`${theme === "dark" ? "text-white" : ""}`}>
                    {member.designation}
                  </h6>
                  <p className={`${theme === "dark" ? "teamInfoDarkClr" : ""}`}>
                    {member.details}
                  </p>
                </div>
              ))}

              <div>
                <Image
                  src={teamMember4}
                  width={232}
                  height={170}
                  alt="team member"
                  onMouseEnter={() => handleMouseEnter(4)}
                  onMouseLeave={handleMouseLeave}
                  className={hoveredMember === 4 ? "imgTransform" : ""}
                />
              </div>
            </div>
            <div className="flex items-start justify-center gap-12">
              <div>
                <Image
                  src={teamMember7}
                  width={163}
                  height={120}
                  alt="team member"
                  onMouseEnter={() => handleMouseEnter(7)}
                  onMouseLeave={handleMouseLeave}
                  className={hoveredMember === 7 ? "imgTransform" : ""}
                />
              </div>
              <div>
                <Image
                  src={teamMember6}
                  width={232}
                  height={170}
                  alt="team member"
                  onMouseEnter={() => handleMouseEnter(6)}
                  onMouseLeave={handleMouseLeave}
                  className={hoveredMember === 6 ? "imgTransform" : ""}
                />
              </div>
              <div>
                <Image
                  src={teamMember5}
                  width={163}
                  height={119}
                  alt="team member"
                  onMouseEnter={() => handleMouseEnter(5)}
                  onMouseLeave={handleMouseLeave}
                  className={hoveredMember === 5 ? "imgTransform" : ""}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="ourTeamContainer container">
          <div className="ourTeamHeading">
            <h1>MEET THE BEST TEAM EVER</h1>
          </div>
          <div className="teamTopImagesFlex">
            <div className="teamMember firstMember">
              <Image
                src={teamMember1}
                alt="teamMember"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
                className={hoveredMember === 1 ? "imgTransform" : ""}
              />
            </div>
            <div className="teamMember secondMember">
              <Image
                src={teamMember2}
                alt="teamMember"
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
                className={hoveredMember === 2 ? "imgTransform" : ""}
              />
            </div>
            <div className="teamMember thirdMember">
              <Image
                src={teamMember3}
                alt="teamMember"
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
                className={hoveredMember === 3 ? "imgTransform" : ""}
              />
            </div>
          </div>
          <div className="teamMiddleFlex">
            <div className="teamMember eightMember">
              <Image
                src={teamMember8}
                alt="teamMember"
                onMouseEnter={() => handleMouseEnter(8)}
                onMouseLeave={handleMouseLeave}
                className={hoveredMember === 8 ? "imgTransform" : ""}
              />
            </div>

            {members.map((member) => (
              <div
                className={`aboutMember ${
                  theme === "dark" ? "changeShadow" : ""
                }`}
                style={{
                  display: hoveredMember === member.id ? "block" : "none",
                }}
              >
                <div className="memberName">
                  <h2
                    className={`mb-0 ${
                      theme === "dark" ? "text-[#8B68FF]" : ""
                    }`}
                  >
                    {member.name}
                  </h2>
                </div>
                <h6 className={`${theme === "dark" ? "text-white" : ""}`}>
                  {member.designation}
                </h6>
                <p className={`${theme === "dark" ? "teamInfoDarkClr" : ""}`}>
                  {member.details}
                </p>
              </div>
            ))}
            <div className="teamMember fourthMember">
              <Image
                src={teamMember4}
                alt="teamMember"
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
                className={hoveredMember === 4 ? "imgTransform" : ""}
              />
            </div>
          </div>
          <div className="teamTopImagesFlex teamBottom">
            <div className="teamMember seventhMember">
              <Image
                src={teamMember7}
                alt="teamMember"
                onMouseEnter={() => handleMouseEnter(7)}
                onMouseLeave={handleMouseLeave}
                className={hoveredMember === 7 ? "imgTransform" : ""}
              />
            </div>
            <div className="teamMember sixthMember">
              <Image
                src={teamMember6}
                alt="teamMember"
                onMouseEnter={() => handleMouseEnter(6)}
                onMouseLeave={handleMouseLeave}
                className={hoveredMember === 6 ? "imgTransform" : ""}
              />
            </div>
            <div className="teamMember fifthMember">
              <Image
                src={teamMember5}
                alt="teamMember"
                onMouseEnter={() => handleMouseEnter(5)}
                onMouseLeave={handleMouseLeave}
                className={hoveredMember === 5 ? "imgTransform" : ""}
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};


