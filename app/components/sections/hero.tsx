import Image from "next/image";
import React, { useState } from "react";
import Modal from "../ui/modal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalContent = {
    title: "About Hit-N-Hammer",
    content: `Hit-N-Hammer is a leading technology solutions provider that empowers businesses through innovative digital solutions. Our comprehensive services include:

• Custom Software Development
• Mobile App Development
• Web Development
• Cloud Solutions
• UI/UX Design
• Business Solutions
• Cloud Email Migration

We combine cutting-edge technology with industry expertise to deliver solutions that drive business growth and digital transformation. Our team of skilled professionals is committed to excellence, innovation, and client satisfaction.

At Hit-N-Hammer, we believe in:
- Building long-term partnerships with our clients
- Delivering high-quality, scalable solutions
- Staying ahead of technological trends
- Providing exceptional customer support
- Ensuring security and reliability in all our solutions

Let us help you transform your business with our innovative technology solutions.`,
  };

  // const bgImg = {
  //   backgroundImage: "url(/hero-bg.svg)",
  //   backgroundSize: "100% auto",
  //   backgroundPosition: "top",
  //   backgroundRepeat: "no-repeat",

  // };

  return (
    <div className="md:pt-28">
      <div className="max-w-[1320px] container flex md:flex-row flex-col-reverse items-center">
        <div>
          <h1
            className="sm:text-[60px] text-[45px] sm:leading-[65px] leading-normal font-bold font-serif"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Empower your business with hit-n-hammer
          </h1>
          <p
            className="mt-2 dark:text-[#b7b0b0] text-[#717070] font-normal text-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Driving Innovation, Delivering Results
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-primary px-8 py-3 hover:outline rounded-lg mt-8 font-semibold text-base text-white"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Learn More
          </button>
        </div>
        <Image
          src="/hero-image.png"
          width={745}
          height={808}
          alt="hero"
          className="md:w-[745px] w-full"
          data-aos="fade-up"
          data-aos-duration="1500"
        />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </div>
  );
};

export default HeroSection;
