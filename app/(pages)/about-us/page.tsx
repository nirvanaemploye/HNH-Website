import Image from "next/image";
import React from "react";

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

const AboutUs = () => {
  return (
    <div className="dark:text-white dark:bg-[#170C3F]">
      <div className="pt-[150px] container max-w-[1320px] space-y-32">
        <div className="flex md:flex-row flex-col gap-16 items-center">
          <Image
            src="/about-hero.png"
            width={650}
            height={294}
            className="md:w-[650px] w-full"
            alt="about us"
          />
          <div>
            <h3 className="font-serif text-8xl">About Us</h3>
            <p className="text-xl text-[#E1E0E0] mt-5">
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
                  <h5 className="text-3xl font-bold uppercase text-center justify-center">
                    {principle.title}
                  </h5>
                  <Image
                    className="mt-3"
                    src={principle.icon}
                    alt={principle.title}
                    height={principle.iconHeight}
                    width={principle.iconWidth}
                  />
                  <p className="text-center text-[#B7B0B0] mt-4">
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
            <p className="text-[#B7B0B0] mt-3 ">
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
            <p className="text-[#B7B0B0] mt-3 ">
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
              <Image
                src="/team-member-1.png"
                width={165}
                height={120}
                alt="team member"
              />
              <Image
                src="/team-member-2.png"
                width={235}
                height={170}
                alt="team member"
              />
              <Image
                src="/team-member-3.png"
                width={165}
                height={120}
                alt="team member"
              />
            </div>
            <div className="flex items-center justify-center gap-12">
              <Image
                src="/team-member-4.png"
                width={235}
                height={170}
                alt="team member"
              />
              <div className="bg-white/10 border border-primary rounded-3xl px-6 py-4 flex flex-col items-center justify-center max-w-[590px]">
                <h5 className="font-serif text-primary font-bold text-xl border-b-2 border-dashed border-white uppercase w-fit">
                  OUR VISION
                </h5>
                <p className="mt-[3px]">Founder</p>
                <p className="text-xs font-light text-[#E1E0E0] text-center mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
              </div>
              <Image
                src="/team-member-5.png"
                width={235}
                height={170}
                alt="team member"
              />
            </div>
            <div className="flex items-start justify-center gap-12">
              <Image
                src="/team-member-6.png"
                width={165}
                height={120}
                alt="team member"
              />
              <Image
                src="/team-member-7.png"
                width={235}
                height={170}
                alt="team member"
              />
              <Image
                src="/team-member-8.png"
                width={165}
                height={120}
                alt="team member"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
