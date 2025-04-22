"use client";
import ServiceCard from "@/app/components/cards/service-card";
import { useTheme } from "@/app/components/context/themeContext";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    id: 1,
    name: "Designing",
    image: "/designing-service.png",
    description:
      "We deliver creative, impactful designs including apps, logos, websites, games, ads, UI/UX, and more.",
    services: [
      "App Design",
      "Logo Design",
      "Web Design",
      "Icon Design",
      "Game Design",
      "Ad Design",
      "UI/UX Design",
      "Packaging Design",
      "App Store Screenshots Design",
    ],
    toolImages: [
      { name: "photoshop", image: "/ps-icon.svg" },
      { name: "illustrator", image: "/ai-icon.svg" },
      { name: "after effects", image: "/ae-icon.svg" },
      { name: "figma", image: "/figma-icon.svg" },
    ],
  },
  {
    id: 2,
    name: "Web Development",
    image: "/webdevelopment-service.png",
    description:
      "We offer PHP, Node.js, React.js, and custom CMS web development tailored to your business needs.",
    services: [
      "PHP Web Development",
      "Wordpress Development",
      "Web Development",
      "Custom CMC Development",
    ],
    toolImages: [
      { name: "html", image: "/html-icon.svg" },
      { name: "react", image: "/react-icon.svg" },
      { name: "css", image: "/css-icon.svg" },
      { name: "node", image: "/node-icon.svg" },
      { name: "php", image: "/php.svg" },
      {name: "mongo", image:"/Mongo_DB.svg"}
    ],
  },
  {
    id: 3,
    name: "App Development",
    image: "/appdevelopment-service.png",
    description:
      "We develop mobile, iPhone, Android, iPad, software, and web apps with performance, precision, and innovation.",
    services: [
      "Mobile App Development",
      "Iphone App Development",
      "Android App Development",
      "Ipad App Development",
      "Software Development",
      "Web App Development",
    ],
    toolImages: [
      { name: "c++", image: "/c++-icon.svg" },
      { name: "react", image: "/react-icon.svg" },
      { name: "python", image: "/python-icon.svg" },
      {name:"android", image:"/android.svg"},
      {name:"ios", image:"/IOS.svg"},
    ],
  },
  {
    id: 4,
    name: "Game Development",
    image: "/gamedevelopment-service.png",
    description:
      "We create engaging Android, iOS, HTML5, Flash, Unity 3D, and custom games with excellence.",
    services: [
      "Android Game Development",
      "IOS Game Development",
      "HTML5 Development",
      "Flash Game Development",
      "Unity 3D Game Development",
      "Custom Game Development",
    ],
    toolImages: [
      { name: "unity", image: "/unity-icon.svg" },
      { name: "photoshop", image: "/ps-icon.svg" },
      { name: "visual studio", image: "/visual-studio-icon.svg" },
      { name: "blender", image: "/blender-icon.svg" },
    ],
  },
];

const ServicesPage = () => {
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
            src="/services-hero.png"
            width={650}
            height={294}
            className="md:w-[650px] w-full"
            alt="about us"
          />
          <div data-aos="fade-left" data-aos-duration="1000">
            <h3 className="font-serif sm:text-8xl text-4xl md:text-left text-center borderFont">
              <span
                className={
                  theme === "dark" ? "text-gradient" : "text-gradient1"
                }
              >
                Ser
              </span>
              <span>vices</span>
            </h3>
            <p
              className="sm:text-xl text-lg dark:text-[#E1E0E0] text-[#717070] mt-5 md:text-left text-center"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Hit-N-Hammer offers a full spectrum of IT services including web
              development, mobile app development, game creation, UI/UX design,
              server management, and hosting solutions. We deliver custom,
              high-quality digital products tailored to your needs, combining
              innovation and expertise to help your business grow, compete, and
              succeed in the digital era.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000">
          <h3 className="font-serif text-primary font-bold md:text-5xl text-3xl border-b-2 border-dashed dark:border-white border-[#9D80FF] uppercase w-fit mx-auto mb-16">
            WE TRY TO SERV BEST SERVICES
          </h3>
          <div className="mt-20 space-y-12">
            {services.map((service, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 200}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
