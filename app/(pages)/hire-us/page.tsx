"use client";
import { useTheme } from "@/app/components/context/themeContext";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const hireUsData = [
  {
    id: 1,
    title: "UI/UX Designers",
    description:
      "Expert designers who create beautiful and intuitive user interfaces",
    image: "ui-ux-icon.svg",
    image1: "ui-ux-dark-icon.svg",
    skills: ["Figma", "Adobe XD", "Sketch", "InVision"],
    rate: "$25/hour",
    experience: "3+ years",
  },
  {
    id: 2,
    title: "Web Developers",
    description: "Full-stack developers who build robust web applications",
    image: "/Web_Development.svg",
    image1: "/Web_Development_Dark.svg",
    skills: ["React", "Node.js", "Python", "PHP"],
    rate: "$30/hour",
    experience: "4+ years",
  },
  {
    id: 3,
    title: "Mobile Developers",
    description: "Native and cross-platform mobile app developers",
    image: "/Mobile_Development.svg",
    image1: "/Mobile_Development_Dark.svg",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    rate: "$35/hour",
    experience: "4+ years",
  },
  {
    id: 4,
    title: "Game Developers",
    description: "Creative developers who bring games to life",
    image: "/game _Development.svg",
    image1: "/game_DeveopmentDark.svg",
    skills: ["Unity", "Unreal Engine", "C#", "Game Design"],
    rate: "$40/hour",
    experience: "5+ years",
  },
];

const HireUsPage = () => {
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
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div
      className="dark:text-white dark:bg-[#170C3F] md:pb-32"
      style={theme === "dark" ? bgDark : bgLight}
      data-aos="fade-in"
    >
      <div className="pt-[250px] container max-w-[1320px] space-y-32">
        <div className="flex md:flex-row flex-col gap-16 items-center">
          <Image
            data-aos="fade-up"
            data-aos-duration="500"
            // src="/hire-dark.png"
            src="/hire-dar__1_-removebg-preview.png"
            width={650}
            height={294}
            className="md:w-[650px] w-full"
            alt="hire us"
          />
          <div data-aos="fade-left" data-aos-duration="1000">
            <h3 className="font-serif sm:text-8xl text-4xl md:text-left text-center borderFont">
              <span
                className={
                  theme === "dark" ? "text-gradient" : "text-gradient1"
                }
              >
                Hire
              </span>
              <span> Us</span>
            </h3>
            <p
              className="sm:text-xl text-lg dark:text-[#E1E0E0] text-[#717070] mt-5 md:text-left text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Partner with Hit-N-Hammer to bring your digital vision to life.
              Our expert team delivers innovative, reliable, and tailored
              solutions to meet your goals. Let&apos;s build something amazing
              together.
            </p>
          </div>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1000">
          <h3 className="font-serif text-primary font-bold md:text-5xl text-3xl border-b-2 border-dashed dark:border-white border-[#9D80FF] uppercase w-fit mx-auto mb-16">
            Available Talent
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {hireUsData.map((talent, idx) => (
              <div
                key={talent.id}
                className="bg-white/5 rounded-2xl p-8 border border-primary"
                data-aos="fade-up"
                data-aos-delay={idx * 200}
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <Image
                      // src={talent.image}
                      src={theme === "dark" ? talent.image : talent.image1}
                      width={50}
                      height={50}
                      alt={talent.title}
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-primary mb-2 dark:text-white text-black">
                      {talent.title}
                    </h4>
                    <p className="dark:text-[#b7b0b0] text-[#717070] mb-4">
                      {talent.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {talent.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3 py-1 bg-primary/10 text-black dark:text-white rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm dark:text-[#E1E0E0] text-[#717070]">
                          Rate: {talent.rate}
                        </p>
                        <p className="text-sm dark:text-[#E1E0E0] text-[#717070]">
                          Experience: {talent.experience}
                        </p>
                      </div>
                      <Link
                        href={`/contact?developer=${encodeURIComponent(
                          talent.title
                        )}`}
                        className="bg-primary px-6 py-2 rounded-lg text-white font-semibold hover:bg-[#5533C8] transition-colors"
                      >
                        Hire Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-y-6" data-aos="fade-up">
          <h3 className="font-serif text-primary font-bold text-3xl">
            Need Something Else?
          </h3>
          <p className="dark:text-[#E1E0E0] text-[#717070] max-w-2xl mx-auto">
            We have a diverse pool of talent. If you don&#39;t see what
            you&#39;re looking for, contact us and we&#39;ll help you find the
            right person for your project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary px-8 py-3 rounded-xl text-white font-semibold hover:bg-[#5533C8] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HireUsPage;
